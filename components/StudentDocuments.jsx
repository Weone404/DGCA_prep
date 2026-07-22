'use client'

import { useEffect, useState } from 'react'
import { DOCUMENT_TYPES } from '@/lib/document-config'

const focusRing = 'outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1'
const pressable = `${focusRing} transition-colors duration-200 motion-safe:active:scale-[0.98]`

export default function StudentDocuments() {
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [docType, setDocType] = useState('id_proof')
  const [studentId, setStudentId] = useState('')

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser)
        setStudentId(String(parsed.id || ''))
      } catch {
        setStudentId('')
      }
    }
  }, [])

  const fetchDocuments = async (id) => {
    if (!id) {
      setDocuments([])
      setLoading(false)
      return
    }

    try {
      const response = await fetch(`/api/documents?studentId=${encodeURIComponent(id)}`, {
        credentials: 'include',
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data?.error || 'Unable to load documents.')
      }
      setDocuments(Array.isArray(data.documents) ? data.documents : [])
      setError('')
    } catch (err) {
      setError(err.message || 'Unable to load documents.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!studentId) {
      setLoading(false)
      return
    }
    fetchDocuments(studentId)
  }, [studentId])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!selectedFile || !studentId) {
      setError('Choose a file and make sure you are logged in.')
      return
    }

    setSubmitting(true)
    setError('')
    setSuccess('')

    try {
      const formData = new FormData()
      formData.append('file', selectedFile)
      formData.append('studentId', studentId)
      formData.append('docType', docType)

      const response = await fetch('/api/documents/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data?.error || 'Upload failed.')
      }

      setSuccess('Document uploaded successfully.')
      setSelectedFile(null)
      setDocType('id_proof')
      event.target.reset()
      fetchDocuments(studentId)
    } catch (err) {
      setError(err.message || 'Upload failed.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleView = async (documentId) => {
    try {
      const response = await fetch(`/api/documents/${documentId}/view`, {
        credentials: 'include',
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data?.error || 'Unable to open document.')
      }
      if (data?.url) {
        window.open(data.url, '_blank', 'noopener,noreferrer')
      }
    } catch (err) {
      setError(err.message || 'Unable to open document.')
    }
  }

  const hasDocuments = documents.length > 0

  return (
    <div className="card p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="font-display font-semibold text-ink text-lg">Student Documents</h3>
          <p className="text-sm text-muted">Upload ID proof, report cards, and certificates for your records.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-line bg-canvas/50 p-4 sm:p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_220px]">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">File</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp,.pdf"
              onChange={(event) => setSelectedFile(event.target.files?.[0] || null)}
              className={`w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink ${focusRing}`}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">Document Type</label>
            <select
              value={docType}
              onChange={(event) => setDocType(event.target.value)}
              className={`w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink ${focusRing}`}
            >
              {DOCUMENT_TYPES.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
        </div>

        {error ? <div className="rounded-xl border border-coral/30 bg-coral/10 px-3 py-2 text-sm text-coral">{error}</div> : null}
        {success ? <div className="rounded-xl border border-brand/20 bg-brand/10 px-3 py-2 text-sm text-brand">{success}</div> : null}

        <button type="submit" disabled={submitting || !selectedFile} className={`rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white ${pressable} ${submitting ? 'opacity-70' : ''}`}>
          {submitting ? 'Uploading...' : 'Upload Document'}
        </button>
      </form>

      <div className="mt-5">
        <div className="mb-3 text-sm font-semibold text-ink">Uploaded Documents</div>
        {loading ? (
          <div className="rounded-xl border border-line bg-canvas/40 px-4 py-3 text-sm text-muted">Loading documents…</div>
        ) : hasDocuments ? (
          <div className="space-y-3">
            {documents.map((document) => (
              <div key={document.id} className="flex flex-col gap-2 rounded-xl border border-line p-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-medium text-ink">{document.file_name}</div>
                  <div className="text-sm text-muted">
                    {document.doc_type || 'Other'} • {document.mime_type || 'file'} • {document.file_size ? `${Math.round(document.file_size / 1024)} KB` : '—'}
                  </div>
                </div>
                <button type="button" onClick={() => handleView(document.id)} className={`rounded-lg border border-brand px-3 py-2 text-sm font-semibold text-brand ${pressable}`}>
                  View
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-line bg-canvas/30 px-4 py-6 text-center text-sm text-muted">
            No documents uploaded yet.
          </div>
        )}
      </div>
    </div>
  )
}
