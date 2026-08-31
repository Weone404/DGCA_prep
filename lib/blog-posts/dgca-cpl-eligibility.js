import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA CPL Eligibility 2026: Age, 12th Subjects and Medical Rules',
  slug: 'dgca-cpl-eligibility',
  excerpt:
    'Exact DGCA eligibility for a Commercial Pilot Licence in 2026 - minimum age 18, 10+2 with Physics and Maths, Class 1 medical, ICAO English Level 4 and 200 flight hours.',
  coverImage: '/blog/dgca-cpl-eligibility.webp',
  category: CATEGORIES.licensing.slug,
  keywords: [
    'DGCA CPL eligibility',
    'pilot eligibility in India',
    'CPL age limit India',
    '12th standard pilot requirements',
    'PCM for pilot',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'To hold a DGCA Commercial Pilot Licence you must be at least 18 years old, have passed 10+2 with Physics and Mathematics, hold a valid Class 1 medical assessment, demonstrate ICAO English Language Proficiency at Level 4 or above, and log a minimum of 200 hours of flight time. DGCA sets no maximum age for registering as a flight crew candidate.',
    sections: [
      {
        heading: 'What is the minimum age for a CPL in India?',
        paragraphs: [
          'Eighteen years on the date the licence is issued. You may begin ground school and dual flying earlier, and most schools clear students for first solo at 17.',
        ],
        table: {
          headers: ['Licence', 'Minimum age', 'Minimum flight time'],
          rows: [
            ['SPL (Student Pilot Licence)', '16 years', 'Nil'],
            ['PPL (Private Pilot Licence)', '17 years', '40 hours'],
            ['CPL (Commercial Pilot Licence)', '18 years', '200 hours'],
            ['ATPL (Airline Transport Pilot Licence)', '21 years', '1,500 hours'],
          ],
        },
        note: 'Hour figures follow Schedule II of the Aircraft Rules, 1937. Sub-minima for cross-country, night and instrument time apply on top of the totals.',
      },
      {
        heading: 'Do you need Physics and Maths in 12th to become a pilot?',
        paragraphs: [
          'Yes, for a CPL. DGCA Pariksha will not approve a computer number application without a 10+2 pass with Physics and Mathematics from a recognised board or an equivalent qualification. The PPL category is the one exception.',
          'Students from Commerce, Arts or the Biology stream are not shut out. Clear Physics and Mathematics as additional subjects through the National Institute of Open Schooling, then apply. NIOS results are accepted, and a large share of every ground school batch arrives this way.',
        ],
      },
      {
        heading: 'Is there an upper age limit for pilot training?',
        paragraphs: [
          'DGCA states plainly that there is no maximum age limit to register as a flight crew candidate. What does have an age ceiling is airline recruitment, and that ceiling is set by each carrier, not by the regulator.',
          'Practical advice for a career changer at 30 or 35: the licence is achievable, but check current cadet programme age caps at the airlines you intend to apply to before you commit the money.',
        ],
      },
      {
        heading: 'What medical do you need for a CPL?',
        paragraphs: [
          'A DGCA Class 1 assessment before you exercise commercial privileges. A Class 2 is enough to start training and fly solo, and it costs far less, so clear the Class 2 first as a screening step.',
        ],
        list: [
          'Class 2: entry-level fitness check, enough for a Student Pilot Licence and PPL',
          'Class 1: full aeromedical assessment covering vision, audiometry, ECG and laboratory work',
          'Class 1 validity for commercial operations: 12 months',
          'Class 1 validity for student and private licences: 24 months',
          'Initial Class 1 is done at DGCA-approved centres such as AFCME New Delhi and IAM Bengaluru',
        ],
      },
      {
        heading: 'What English standard does DGCA require?',
        paragraphs: [
          'ICAO Language Proficiency Level 4 or above. This is not an academic English test. Assessors listen for whether you can handle a radio exchange when something goes wrong, so the vocabulary that matters is standard phraseology, not literary range. It is assessed alongside your RTR(A) and at licence application.',
        ],
      },
      {
        heading: 'Eligibility checklist before you pay any school',
        list: [
          '10+2 marksheet showing Physics and Mathematics',
          'Class 2 medical cleared, Class 1 booked',
          'DGCA computer number approved on the Pariksha portal',
          'Passport and, for training abroad, a student visa',
          'Written fee schedule from a DGCA-approved FTO with the per-hour rate stated',
        ],
        note: 'Never pay a lump sum for 200 hours in advance. Pay in blocks against hours actually flown.',
      },
    ],
    faqs: [
      ['Can a Commerce student become a pilot in India?', 'Yes. Clear Physics and Mathematics as additional subjects through NIOS, then apply for a DGCA computer number. The stream studied in Class 11 and 12 does not disqualify you.'],
      ['What percentage in 12th is required for pilot training?', 'DGCA requires a pass in Physics and Mathematics, not a specific percentage. Individual flying schools and cadet programmes may set their own marks cut-off, commonly around 50 to 60 per cent.'],
      ['Is there a height or weight requirement for pilots in India?', 'DGCA does not publish a fixed height limit. The Class 1 assessment checks that you can reach and operate all controls comfortably, and that your body mass index is within acceptable limits.'],
      ['Do spectacles disqualify you from a CPL?', 'No. Corrected vision within DGCA limits is acceptable. Colour vision deficiency is the more common disqualifier, so get it tested before you spend on training.'],
      ['Can a 30-year-old start pilot training in India?', 'Yes. DGCA sets no upper age limit for flight crew registration. Airline cadet programmes may have their own age caps, so check those before enrolling.'],
    ],
  },
  sources: [
    ['DGCA Pariksha flight crew FAQs, eligibility and computer number', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
    ['Schedule II, Aircraft Rules 1937, licence requirements', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['how-to-become-a-pilot-in-india', 'dgca-class-1-and-class-2-medical', 'dgca-computer-number'],
})
