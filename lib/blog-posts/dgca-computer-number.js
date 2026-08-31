import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA Computer Number: Eligibility, Documents and How to Apply',
  slug: 'dgca-computer-number',
  excerpt:
    'Your DGCA computer number is the lifetime candidate ID needed to book any flight crew paper. Here are the eligibility rules, documents, and the application flow on DGCA Pariksha.',
  coverImage: '/blog/dgca-computer-number.webp',
  category: CATEGORIES.exams.slug,
  keywords: [
    'DGCA computer number',
    'DGCA Pariksha registration',
    'how to apply DGCA computer number',
    'DGCA candidate ID',
    'eGCA registration',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'A DGCA computer number is the unique candidate ID allotted after the Chief Examination Officer approves your application on the DGCA Pariksha portal. You cannot book a single theory paper without it. Eligibility is 10+2 with Physics and Mathematics from a recognised board, except for the PPL category, and the number is valid for life. There is no maximum age limit to register.',
    sections: [
      {
        heading: 'What is a DGCA computer number?',
        paragraphs: [
          'It is your permanent identity in the DGCA examination system. Every paper you book, every result declared, and every licence application later on eGCA is tied to this one number.',
          'One candidate gets one number, and it does not expire. Students who abandon training for three years and come back use the same number they were issued the first time.',
        ],
      },
      {
        heading: 'Who is eligible for a DGCA computer number?',
        table: {
          headers: ['Condition', 'Requirement'],
          rows: [
            ['Education', '10+2 with Physics and Mathematics from a recognised board or university, or equivalent'],
            ['PPL category exception', 'The 10+2 Physics and Mathematics rule does not apply'],
            ['Maximum age', 'None. DGCA sets no upper age limit for flight crew candidate registration'],
            ['Number of computer numbers', 'One per candidate, valid for life'],
          ],
        },
        note: 'If your Class 12 stream did not include Physics and Mathematics, clear both through NIOS first and submit that marksheet.',
      },
      {
        heading: 'What documents do you need?',
        list: [
          'Class 10 certificate as date of birth proof',
          'Class 12 marksheet showing Physics and Mathematics, or the NIOS equivalent',
          'Aadhaar or passport as identity proof',
          'Recent passport-size photograph in the size the portal specifies',
          'Signature scan',
          'Address proof',
        ],
        note: 'Scan quality is the most common cause of rejection. Upload clean, flat, fully legible scans rather than phone photographs taken at an angle.',
      },
      {
        heading: 'How do you apply for a computer number?',
        numbered: [
          ['Register on DGCA Pariksha', 'Create a candidate account at pariksha.dgca.gov.in and verify your email and mobile number.'],
          ['Fill the computer number application', 'Enter your personal details exactly as they appear on your Class 10 certificate. Any mismatch is a rejection.'],
          ['Upload documents', 'Attach the education, identity and photograph files in the formats and sizes the portal specifies.'],
          ['Pay the application fee', 'Complete payment online through the portal.'],
          ['Wait for CEO approval', 'The Chief Examination Officer at DGCA reviews and approves the application. Your number is then visible in your dashboard.'],
          ['Book your first paper', 'Once the number is live, register for the papers you want in the next available examination session.'],
        ],
      },
      {
        heading: 'When should you apply?',
        paragraphs: [
          'Apply as soon as your Class 12 results are out. Approval is not instant, and examination registration windows close well before the session dates. Students who apply for the number and the paper in the same month usually miss the session and wait for the next one.',
          'The sensible order is: computer number first, Class 2 medical alongside it, then ground school, then paper bookings.',
        ],
      },
      {
        heading: 'Common reasons applications get rejected',
        list: [
          'Name spelled differently on the Class 10 certificate and the Aadhaar card',
          'Class 12 marksheet uploaded without the Physics or Mathematics result visible',
          'Photograph that does not meet the portal specification',
          'Date of birth entered from the Class 12 certificate instead of the Class 10 certificate',
          'Incomplete NIOS documentation for additional subjects',
        ],
      },
    ],
    faqs: [
      ['Is a computer number the same as an eGCA ID?', 'No. The computer number is your examination candidate ID on DGCA Pariksha. eGCA is the separate portal used for licence applications and endorsements.'],
      ['Does a DGCA computer number expire?', 'No. Once allotted, a computer number is valid for life and a candidate may hold only one.'],
      ['Can I get a computer number without Physics and Maths?', 'Only for the PPL category. For CPL and other flight crew categories DGCA requires 10+2 with Physics and Mathematics or an equivalent qualification.'],
      ['Is there an age limit to apply for a DGCA computer number?', 'No. DGCA states there is no maximum age limit to register as a flight crew candidate.'],
      ['How long does computer number approval take?', 'Approval depends on document verification by the Chief Examination Officer. Apply well before an examination registration window rather than in the same month.'],
    ],
  },
  sources: [
    ['DGCA Pariksha flight crew FAQs on computer number and eligibility', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
    ['DGCA Pariksha candidate portal', 'https://pariksha.dgca.gov.in/home'],
  ],
  related: ['dgca-exam-dates-2026', 'dgca-cpl-eligibility', 'dgca-exam-pattern-and-passing-marks'],
})
