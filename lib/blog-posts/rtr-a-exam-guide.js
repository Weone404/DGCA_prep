import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'RTR(A) Exam Guide: Part 1, Part 2, Passing Marks and Exemptions',
  slug: 'rtr-a-exam-guide',
  excerpt:
    'What the RTR(A) radio telephony examination involves - the written Part 1 at 70 per cent, the practical Part 2 at 50 per cent, the full syllabus, exemption rules and a practice routine that actually works.',
  coverImage: '/blog/rtr-a-exam-guide.webp',
  coverMotif: 'radio',
  category: CATEGORIES.licensing.slug,
  keywords: [
    'RTR A exam',
    'radio telephony restricted aeronautical',
    'RTR passing marks',
    'RTR exam syllabus',
    'RTR exemption pilots',
    'RTR Part 2 practical',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'RTR(A) is the Radio Telephony Restricted (Aeronautical) licence every Indian commercial pilot must hold. It has two parts: a computer-based written paper requiring 70 per cent, and a practical oral and simulated transmission test requiring 50 per cent. It is examined separately from your five DGCA theory papers and is a condition for CPL issue.',
    keyFacts: [
      ['Part 1 format', 'Computer-based multiple choice, about an hour'],
      ['Part 1 pass mark', '70 per cent'],
      ['Part 2 format', 'Practical oral and simulated transmission'],
      ['Part 2 pass mark', '50 per cent'],
      ['Both parts required', 'Yes, passing one does not carry the other'],
      ['Relationship to DGCA papers', 'Separate examination, separate licence'],
      ['English assessment', 'ICAO Level 4 or above, assessed alongside'],
      ['When to take it', 'During ground school, not after flying'],
    ],
    sections: [
      {
        heading: 'What is RTR(A) and why do you need it?',
        paragraphs: [
          'An aeroplane radio is licensed equipment, and the person operating it needs authorisation to transmit. RTR(A) is that authorisation. Without it you cannot exercise the privileges of a commercial licence in Indian airspace, no matter how many hours sit in your logbook.',
          'It also carries your ICAO English Language Proficiency assessment, which DGCA requires at Level 4 or above. That is not an academic English test. Assessors listen for whether you can handle a radio exchange when something goes wrong, so the vocabulary that matters is standard phraseology, not literary range.',
        ],
        table: {
          headers: ['', 'DGCA theory papers', 'RTR(A)'],
          rows: [
            ['What it certifies', 'Aeronautical knowledge', 'Authority to operate an aircraft radio'],
            ['Number of parts', 'Five subjects', 'Two parts'],
            ['Pass mark', '70 per cent per paper', '70 per cent Part 1, 50 per cent Part 2'],
            ['Format', 'Objective multiple choice', 'MCQ plus a practical viva'],
            ['Required for CPL issue', 'Yes', 'Yes'],
          ],
          caption: 'Two separate examinations that students often lump together. Both must be cleared before the licence is issued.',
        },
      },
      {
        heading: 'What is the RTR(A) exam pattern?',
        paragraphs: [
          'Two parts, two very different skills. Part 1 tests what you know about the radio and the rules around it. Part 2 tests whether you can actually talk on it when the situation is not routine.',
        ],
        table: {
          headers: ['', 'Part 1', 'Part 2'],
          rows: [
            ['Format', 'Computer-based multiple choice', 'Practical, oral and simulated transmission'],
            ['Content', 'Regulations, procedures and radio principles', 'Live phraseology, emergency handling, viva'],
            ['Pass mark', '70 per cent', '50 per cent'],
            ['Typical duration', 'About one hour', 'Short, examiner-led'],
            ['How students fail it', 'Thin regulation knowledge', 'Hesitation and non-standard phrasing'],
          ],
        },
        note: 'Both parts must be cleared. Passing one does not carry the other, and the lower pass mark on Part 2 does not make it the easier half.',
      },
      {
        heading: 'What does the RTR(A) syllabus cover?',
        paragraphs: [
          'The written half spans radio theory, procedures and Indian regulation. The practical half draws on the same material but demands that you produce it out loud, in order, under mild pressure.',
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
        table: {
          headers: ['Topic block', 'Appears in', 'How to study it'],
          rows: [
            ['Phraseology and phonetics', 'Both parts', 'Speak it daily, do not read it'],
            ['Distress and urgency procedures', 'Both parts', 'Rehearse three scenarios until automatic'],
            ['Radio propagation and equipment', 'Part 1', 'Standard theory reading'],
            ['Indian radio regulations', 'Part 1', 'Learn the Indian rule specifically'],
            ['Read-back discipline', 'Part 2', 'Practise with real ATC recordings'],
          ],
        },
      },
      {
        heading: 'How do you prepare for Part 2?',
        paragraphs: [
          'Part 2 is failed by hesitation, not by ignorance. Examiners give you a scenario and listen for whether your transmission is standard, complete and in the right order. A candidate who knows the theory but constructs each sentence from scratch runs out of time and confidence.',
          'Practise out loud, daily, in short blocks. Reading a phraseology book silently builds recognition, not production, and the examiner is testing production.',
        ],
        steps: [
          ['Learn call formats as fixed patterns', 'Who you are calling, who you are, where you are, what you want. Every routine call fits that shape, which means you are recalling one pattern rather than composing four sentences.'],
          ['Record yourself flying a full circuit', 'Speak every call from taxi to shutdown, play it back, and mark every place you hesitated or improvised wording.'],
          ['Read back every clearance in full', 'Partial read-backs cost marks in the test and cause real incidents in the air. Build the habit before it matters.'],
          ['Rehearse the three common emergencies', 'Engine failure after take-off, fire, and radio failure in the circuit. These come up repeatedly and a fluent answer settles the rest of the viva.'],
          ['Train your ear on Indian ATC recordings', 'Accents, cadence and local procedure differ from the American recordings most online material uses.'],
        ],
        pitfalls: [
          'Practising silently from a book, which builds recognition but not fluent production',
          'Speaking quickly to sound confident; clarity scores better than speed',
          'Inventing plain-language phrasing when the standard phrase escapes you',
          'Skipping the read-back because the clearance seemed obvious',
          'Preparing only routine calls and freezing on the first emergency scenario',
        ],
      },
      {
        heading: 'Who is exempt from RTR(A) Part 1?',
        paragraphs: [
          'A limited set of candidates can apply for exemption from the written part. Part 2 is not exempted for anyone.',
        ],
        list: [
          'Military pilots from the Indian Armed Forces or Coast Guard with substantial logged flight time',
          'Holders of a valid Radio Telephony Operator certificate issued by WPC',
          'Pilots trained in Commonwealth countries holding an equivalent valid radio telephony licence',
        ],
        note: 'Exemption processing takes time, commonly one to three months. Prepare for Part 1 in parallel rather than waiting on an approval that may not arrive before your intended attempt.',
      },
      {
        heading: 'When should you take RTR(A) in your training timeline?',
        paragraphs: [
          'During ground school, not after flying. The phraseology you learn for RTR(A) is the same phraseology you will use on every training sortie, so clearing it early makes your flying cleaner and your instructor debriefs shorter.',
          'Students who leave RTR(A) until the end usually find it becomes the last thing standing between them and licence issue. By then the pressure makes Part 2 harder than it needs to be, and the licence application waits on a viva that could have been cleared a year earlier.',
        ],
        diagram: {
          type: 'timeline',
          title: 'Where RTR(A) fits in the CPL timeline',
          caption:
            'RTR(A) runs alongside ground school rather than after flying. Clearing it early means every training sortie doubles as phraseology practice, and licence issue is never held up waiting on a viva.',
          data: [
            { label: 'Medicals', detail: '1-2 months', sub: 'Class 2, then Class 1' },
            { label: 'Ground school', detail: '4-8 months', sub: 'Five DGCA papers' },
            { label: 'RTR(A) Part 1', detail: 'Month 5-8', sub: 'Written, 70 per cent' },
            { label: 'RTR(A) Part 2', detail: 'Month 8-10', sub: 'Practical, 50 per cent' },
            { label: 'Flying', detail: '10-14 months', sub: '200 hours' },
            { label: 'Licence issue', detail: '1-3 months', sub: 'eGCA processing' },
          ],
        },
      },
      {
        heading: 'What does RTR(A) cost?',
        paragraphs: [
          'Budget Rs 30,000 to Rs 75,000 for preparation and the examination together. Against a total CPL budget of Rs 55 lakh to Rs 75 lakh it is a rounding error, but it is also a hard gate: no RTR(A), no licence.',
        ],
        table: {
          headers: ['Item', 'Indicative cost'],
          rows: [
            ['RTR(A) preparation and examination', 'Rs 30,000 to Rs 75,000'],
            ['DGCA theory papers, five subjects', 'Rs 25,000 to Rs 50,000'],
            ['Ground school', 'Rs 1.5 lakh to Rs 3 lakh'],
            ['CPL flying, 200 hours', 'Rs 55 lakh to Rs 65 lakh'],
          ],
          caption: 'RTR(A) is roughly one per cent of a CPL budget and one hundred per cent of a gate you cannot skip.',
        },
      },
      {
        heading: 'A four-week practice routine for Part 2',
        paragraphs: [
          'Short daily blocks beat long weekend sessions for this. You are training a motor skill, not memorising content.',
        ],
        steps: [
          ['Week 1', 'Fifteen minutes daily on routine calls: taxi, take-off, circuit, approach, landing. Record and review every session.'],
          ['Week 2', 'Add read-backs. Have someone read clearances aloud at conversational speed and read every one back in full.'],
          ['Week 3', 'Emergencies. Engine failure, fire and radio failure, one scenario per day, spoken without notes.'],
          ['Week 4', 'Full mock vivas with an instructor or a peer playing examiner, in the same room conditions you expect on the day.'],
        ],
        pitfalls: [
          'Cramming the week before, which produces exactly the hesitation the examiner is listening for',
          'Practising alone throughout and never being interrupted or questioned',
          'Ignoring the ICAO English element until the day of the assessment',
        ],
      },
    ],
    glossary: [
      ['RTR(A)', 'Radio Telephony Restricted (Aeronautical). The licence authorising you to operate an aircraft radio in Indian airspace.'],
      ['WPC', 'Wireless Planning and Coordination wing, the authority historically associated with radio telephony certification in India.'],
      ['MAYDAY', 'The spoken distress signal, used three times, indicating grave and imminent danger requiring immediate assistance.'],
      ['PAN PAN', 'The spoken urgency signal, used three times, indicating a serious condition that does not require immediate assistance.'],
      ['Squawk', 'The four-digit code set on the transponder. Specific codes exist for emergency, radio failure and unlawful interference.'],
      ['Read-back', 'Repeating a clearance in full to the controller so the instruction can be verified. Partial read-backs cost marks and cause incidents.'],
      ['ICAO Level 4', 'The minimum English language proficiency rating DGCA requires for licence issue, assessed alongside RTR(A).'],
      ['Phraseology', 'The standard set of words and call formats used on aeronautical radio. Departing from it is what examiners penalise.'],
    ],
    quiz: [
      {
        question: 'What are the pass marks for RTR(A) Part 1 and Part 2?',
        options: ['50 and 50 per cent', '70 and 50 per cent', '70 and 70 per cent', '60 and 40 per cent'],
        answer: 1,
        explanation: 'Part 1, the written computer-based paper, requires 70 per cent. Part 2, the practical, requires 50 per cent. Both must be cleared.',
      },
      {
        question: 'Which spoken signal indicates a serious condition that does not require immediate assistance?',
        options: ['MAYDAY', 'PAN PAN', 'SECURITE', 'ROGER'],
        answer: 1,
        explanation: 'PAN PAN, spoken three times, is the urgency signal. MAYDAY, also spoken three times, is the distress signal for grave and imminent danger.',
      },
      {
        question: 'Which part of RTR(A) can be exempted, and for whom?',
        options: [
          'Part 2, for airline cadets',
          'Both parts, for graduates',
          'Part 1, for certain military and WPC certificate holders',
          'Neither part can be exempted',
        ],
        answer: 2,
        explanation: 'Part 1 exemption is available to certain military pilots, holders of a valid WPC radio telephony operator certificate and some Commonwealth-trained pilots. Part 2 is never exempted.',
      },
      {
        question: 'Why do most candidates fail RTR(A) Part 2?',
        options: [
          'Insufficient flying hours',
          'Hesitation and non-standard phrasing under pressure',
          'Poor written English',
          'Failing the theory component',
        ],
        answer: 1,
        explanation: 'Part 2 tests production, not recognition. Candidates who read phraseology silently rather than speaking it daily construct sentences from scratch and hesitate.',
      },
    ],
    faqs: [
      ['What are the RTR(A) passing marks?', 'Part 1 requires 70 per cent and Part 2 requires 50 per cent. Both parts must be cleared to obtain the licence, and passing one does not carry the other.'],
      ['Is RTR(A) part of the DGCA exam?', 'No. RTR(A) is a separate radio telephony licence examination, distinct from the five DGCA CPL theory papers, though it is required before your CPL can be issued.'],
      ['Can I get an exemption from RTR(A)?', 'Part 1 exemption is available to certain military pilots, holders of a valid WPC radio telephony operator certificate, and some Commonwealth-trained pilots. Part 2 is not exempted for anyone.'],
      ['How hard is RTR(A) Part 2?', 'Part 2 is a practical test of standard phraseology under pressure. Candidates who rehearse transmissions out loud daily clear it comfortably; those who only read notes usually do not.'],
      ['Does RTR(A) cover English proficiency?', 'Yes. ICAO English Language Proficiency at Level 4 or above is assessed alongside the RTR(A) examination and is required for licence issue.'],
      ['When should I take RTR(A)?', 'During ground school, alongside your DGCA theory papers. The phraseology carries directly into every training sortie, and leaving it late means it becomes the last obstacle before licence issue.'],
      ['What does RTR(A) cost?', 'Roughly Rs 30,000 to Rs 75,000 for preparation and the examination together, which is about one per cent of a full CPL budget.'],
      ['How long does exemption processing take?', 'Commonly one to three months. Prepare for Part 1 in parallel rather than waiting on an approval that may not arrive before your intended attempt.'],
      ['Can I fly without RTR(A)?', 'You cannot exercise the privileges of a commercial licence in Indian airspace without it. Training flights operate under your school authorisation, but the licence itself requires RTR(A).'],
      ['What should I practise most for Part 2?', 'Read-backs and the three common emergencies: engine failure after take-off, fire, and radio failure in the circuit. Speak them aloud daily rather than reading them.'],
      ['Is RTR(A) needed for a PPL?', 'Radio telephony authorisation governs operating an aircraft radio. Confirm the current requirement for your licence category against DGCA material, since the commercial route requires it without exception.'],
      ['Do foreign radio licences count in India?', 'Some Commonwealth-issued radio telephony licences and WPC certificates can support a Part 1 exemption, but you still sit the Indian practical assessment.'],
    ],
  },
  sources: [
    ['RTR exam structure, pass marks and exemption rules', 'https://www.pilotsphere.in/rtr-exam-guide'],
    ['DGCA flight crew licensing requirements', 'https://www.dgca.gov.in/digigov-portal/'],
    ['DGCA Pariksha flight crew FAQs', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
  ],
  related: ['dgca-exam-subjects-and-syllabus', 'how-to-become-a-pilot-in-india', 'dgca-cpl-eligibility'],
})
