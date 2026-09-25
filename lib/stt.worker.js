import { env, pipeline } from '@huggingface/transformers'

env.allowLocalModels = false

let asrPromise = null

function loadRecognizer() {
  if (!asrPromise) {
    const files = new Map()
    asrPromise = pipeline('automatic-speech-recognition', 'onnx-community/whisper-base.en', {
      dtype: 'q8',
      progress_callback: (progress) => {
        if (progress.status !== 'progress' || !progress.file || !progress.total) return
        files.set(progress.file, {
          loaded: progress.loaded || 0,
          total: progress.total,
        })
        let loaded = 0
        let total = 0
        files.forEach((file) => {
          loaded += file.loaded
          total += file.total
        })
        if (total > 0) self.postMessage({ progress: (loaded / total) * 100 })
      },
    }).then((recognizer) => {
      self.postMessage({ ready: true })
      return recognizer
    })
    asrPromise.catch(() => {
      asrPromise = null
    })
  }
  return asrPromise
}

self.onmessage = async (event) => {
  const { id, pcm, warm } = event.data || {}
  try {
    const recognizer = await loadRecognizer()
    if (warm || !pcm) return
    const result = await recognizer(pcm)
    const text = Array.isArray(result) ? result[0]?.text : result?.text
    self.postMessage({ id, text: text || '' })
  } catch (error) {
    if (id != null) {
      self.postMessage({
        id,
        error: error instanceof Error ? error.message : String(error),
      })
    }
  }
}
