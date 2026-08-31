import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'RTR(A) Exam Guide: Part 1, Part 2, Passing Marks and Exemptions',
  slug: 'rtr-a-exam-guide',
  excerpt:
    'What the RTR(A) radio telephony examination involves - the written Part 1 at 70 per cent, the practical Part 2 at 50 per cent, the syllabus, and who qualifies for exemption.',
  coverImage: '/blog/rtr-a-exam-guide.webp',
  category: CATEGORIES.licensing.slug,
  keywords: [
    'RTR A exam',
    'radio telephony restricted aeronautical',
    'RTR passing marks',
    'RTR exam syllabus',
    'RTR exemption pilots',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'RTR(A) is the Radio Telephony Restricted (Aeronautical) licence every Indian commercial pilot must hold. It has two parts: a computer-based written paper requiring 70 per cent, and a practical oral and simulated transmission test requiring 50 per cent. It is examined separately from your five DGCA theory papers and is a condition for CPL issue.',
    sections: [
      {
        heading: 'What is RTR(A) and why do you need it?',
        paragraphs: [
          'An aeroplane radio is licensed equipment, and the person operating it needs authorisation to transmit. RTR(A) is that authorisation. Without it you cannot exercise the privileges of a commercial licence in Indian airspace, no matter how many hours sit in your logbook.',
          'It also carries your ICAO English Language Proficiency assessment, which DGCA requires at Level 4 or above.',
        ],
      },
      {
        heading: 'What is the RTR(A) exam pattern?',
        table: {
          headers: ['', 'Part 1', 'Part 2'],
          rows: [
            ['Format', 'Computer-based multiple choice', 'Practical, oral and simulated transmission'],
            ['Content', 'Regulations, procedures and radio principles', 'Live phraseology, emergency handling, viva'],
            ['Pass mark', '70 per cent', '50 per cent'],
            ['Typical duration', 'About one hour', 'Short, examiner-led'],
          ],
        },
        note: 'Both parts must be cleared. Passing one does not carry the other.',
      },
      {
        heading: 'What does the RTR(A) syllabus cover?',
        paragraphs: [
          'Part 1 tests what you know about the radio and the rules around it. Part 2 tests whether you can actually talk on it when the situation is not routine.',
        ],
        list: [
          'Standard ICAO phraseology and the phonetic alphabet',
          'Aerodrome, approach and area control communication procedures',
          'Distress and urgency: MAYDAY and PAN PAN calls, and what follows each',
          'Transponder operation and emergency squawk codes',
          'Radio communication failure procedures and light signals',
          'Radio wave propagation, frequency bands and equipment principles',
          'Indian regulations governing aeronautical radio operation',
        ],
      },
      {
        heading: 'How do you prepare for Part 2?',
        paragraphs: [
          'Part 2 is failed by hesitation, not by ignorance. Examiners give you a scenario and listen for whether your transmission is standard, complete and in the right order. A candidate who knows the theory but constructs each sentence from scratch runs out of time and confidence.',
          'Practise out loud, daily, in short blocks. Record yourself flying a full circuit and read back every clearance. Then do the same with an engine failure after take-off and a radio failure in the circuit.',
        ],
        list: [
          'Learn call formats as fixed patterns: who you are calling, who you are, where you are, what you want',
          'Read back every clearance in full; partial read-backs cost marks',
          'Rehearse the three emergencies most often asked: engine failure, fire, and radio failure',
          'Keep your speech rate slow and even, because clarity scores better than speed',
          'Use real ATC recordings from Indian aerodromes to train your ear',
        ],
      },
      {
        heading: 'Who is exempt from RTR(A) Part 1?',
        paragraphs: [
          'A limited set of candidates can apply for exemption from the written part.',
        ],
        list: [
          'Military pilots from the Indian Armed Forces or Coast Guard with substantial logged flight time',
          'Holders of a valid Radio Telephony Operator certificate issued by WPC',
          'Pilots trained in Commonwealth countries holding an equivalent valid radio telephony licence',
        ],
        note: 'Exemption processing takes time. Prepare for Part 1 in parallel rather than waiting for an approval that may take months.',
      },
      {
        heading: 'When should you take RTR(A) in your training timeline?',
        paragraphs: [
          'Take it during ground school, not after flying. The phraseology you learn for RTR(A) is the same phraseology you will use on every training sortie, so clearing it early makes your flying cleaner and your instructor debriefs shorter.',
          'Students who leave RTR(A) until the end usually find it becomes the last thing standing between them and licence issue, and by then the pressure makes Part 2 harder than it needs to be.',
        ],
      },
    ],
    faqs: [
      ['What are the RTR(A) passing marks?', 'Part 1 requires 70 per cent and Part 2 requires 50 per cent. Both parts must be cleared to obtain the licence.'],
      ['Is RTR(A) part of the DGCA exam?', 'No. RTR(A) is a separate radio telephony licence examination, distinct from the five DGCA CPL theory papers, though it is required for CPL issue.'],
      ['Can I get an exemption from RTR(A)?', 'Part 1 exemption is available to certain military pilots, holders of a valid WPC radio telephony operator certificate, and some Commonwealth-trained pilots. Part 2 is not exempted.'],
      ['How hard is RTR(A) Part 2?', 'Part 2 is a practical test of standard phraseology under pressure. Candidates who rehearse transmissions out loud daily clear it comfortably; those who only read notes usually do not.'],
      ['Does RTR(A) cover English proficiency?', 'Yes. ICAO English Language Proficiency at Level 4 or above is assessed alongside the RTR(A) examination.'],
    ],
  },
  sources: [
    ['RTR exam structure and exemption rules', 'https://www.pilotsphere.in/rtr-exam-guide'],
    ['DGCA flight crew licensing requirements', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['dgca-exam-subjects-and-syllabus', 'how-to-become-a-pilot-in-india', 'dgca-cpl-eligibility'],
})
