import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA Class 1 and Class 2 Medical: Tests, Centres and Validity',
  slug: 'dgca-class-1-and-class-2-medical',
  excerpt:
    'What the DGCA Class 1 and Class 2 medical assessments check, where they are done, how long each stays valid, what they cost, and which conditions cause trouble.',
  coverImage: '/blog/dgca-class-1-and-class-2-medical.webp',
  category: CATEGORIES.medical.slug,
  keywords: [
    'DGCA Class 1 medical',
    'DGCA Class 2 medical',
    'pilot medical test India',
    'AFCME Delhi',
    'IAM Bengaluru medical',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'A DGCA Class 2 medical is enough to start training and fly solo. A Class 1 assessment is required before you exercise commercial privileges. Class 1 covers vision, hearing, cardiovascular and general health against ICAO Annex 1 standards, and is issued for 12 months for commercial operations and 24 months for student and private licences. Budget Rs 25,000 to Rs 50,000 for both.',
    sections: [
      {
        heading: 'What is the difference between Class 1 and Class 2?',
        table: {
          headers: ['', 'Class 2', 'Class 1'],
          rows: [
            ['Purpose', 'Student Pilot Licence and PPL', 'CPL and ATPL, commercial privileges'],
            ['Depth', 'Entry-level fitness screening', 'Full aeromedical assessment'],
            ['Where', 'DGCA-authorised medical examiner', 'DGCA-approved aeromedical centre'],
            ['Validity', 'As endorsed on the certificate', '12 months commercial, 24 months student and private'],
            ['When to do it', 'Before you pay any flying school', 'Before commercial privileges are exercised'],
          ],
        },
        note: 'Clear the Class 2 first. It costs a fraction of the Class 1 and screens out most disqualifying findings early.',
      },
      {
        heading: 'What does the DGCA Class 1 medical check?',
        paragraphs: [
          'The assessment follows ICAO Annex 1 aligned standards. It is a full day of examinations rather than a single consultation, and the investigations ordered vary with your age and history.',
        ],
        list: [
          'Vision: distance and near acuity, colour vision, refraction, use of corrective lenses',
          'Hearing: audiometry against aviation thresholds',
          'Cardiovascular: history, blood pressure, resting ECG, further cardiac work-up where indicated',
          'General clinical examination: ENT, dental, musculoskeletal, neurological, abdominal',
          'Laboratory work: blood, urine and other investigations by age and risk factors',
          'Psychological and history review',
        ],
      },
      {
        heading: 'Where is the initial Class 1 medical done in India?',
        paragraphs: [
          'Initial Class 1 assessments are conducted at DGCA-approved aeromedical evaluation centres. The two most commonly used by student pilots are AFCME in New Delhi and the Institute of Aerospace Medicine, Indian Air Force, in Bengaluru. Other Indian Air Force centres and empanelled civil facilities also appear on the DGCA approved list.',
          'Appointments at both centres fill up. Book several weeks ahead, and carry every past medical record you have, including old prescriptions and surgical notes.',
        ],
        note: 'The current list of approved centres is published by DGCA. Check it before booking rather than relying on a coaching centre recommendation.',
      },
      {
        heading: 'How long does a medical stay valid?',
        list: [
          'Class 1 for commercial operations: 12 months',
          'Class 1 for student and private licences: 24 months',
          'Class 2: as endorsed, and renewed on the schedule stated on the certificate',
        ],
        note: 'Renewal is a lifelong obligation. A lapsed Class 1 grounds a working airline pilot the same way it grounds a student.',
      },
      {
        heading: 'What does the medical cost?',
        paragraphs: [
          'Class 1 assessments commonly run between Rs 8,000 and Rs 15,000 at approved centres, and students should plan Rs 25,000 to Rs 50,000 across both classes once repeat investigations, travel and specialist referrals are counted.',
          'Any additional test the examiner orders, such as a treadmill test or a specialist opinion, is billed on top.',
        ],
      },
      {
        heading: 'What commonly causes a Class 1 to be deferred?',
        paragraphs: [
          'Deferral is more common than outright rejection. A finding that needs a specialist opinion pauses your file rather than closing it.',
        ],
        list: [
          'Colour vision deficiency, which is the single most common hard stop for aspiring pilots',
          'Uncorrected visual acuity outside limits, or refractive error beyond the permitted range',
          'Blood pressure readings outside limits on repeated measurement',
          'Hearing loss beyond audiometric thresholds',
          'Body mass index outside acceptable limits',
          'Undeclared past surgery or medication history discovered during the examination',
        ],
        note: 'Declare your history honestly. A finding you concealed and the examiner discovers is treated far more seriously than the finding itself.',
      },
      {
        heading: 'Practical advice before you book',
        list: [
          'Get a colour vision test at any ophthalmologist before you spend a rupee on training',
          'Fix dental issues in advance, since dental findings routinely delay files',
          'Carry original reports of any past illness, surgery or hospital admission',
          'Avoid crash dieting before the assessment; laboratory results will show it',
          'Book the Class 1 with enough margin that a deferral does not derail your flying schedule',
        ],
      },
    ],
    faqs: [
      ['Which medical do I need to start pilot training?', 'A DGCA Class 2 medical is enough to begin training and fly solo. A Class 1 assessment is required before you exercise commercial privileges on a CPL.'],
      ['How long is a DGCA Class 1 medical valid?', 'Twelve months for commercial operations, and twenty-four months for student and private licence holders.'],
      ['Can I be a pilot if I wear glasses?', 'Yes, provided your corrected vision falls within DGCA limits. The assessment records your refraction and the correction you use.'],
      ['Does colour blindness disqualify you from a CPL?', 'Colour vision deficiency is the most common reason candidates are found unfit. Get tested before committing money to training.'],
      ['Where is the initial Class 1 medical conducted?', 'At DGCA-approved aeromedical evaluation centres, including AFCME New Delhi and the Institute of Aerospace Medicine in Bengaluru.'],
    ],
  },
  sources: [
    ['DGCA list of approved aeromedical evaluation centres, Class 1', 'https://public-prd-dgca.s3.ap-south-1.amazonaws.com/InventoryList/personal/medical/class1/Class1.pdf'],
    ['DGCA medical requirements for flight crew', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['dgca-cpl-eligibility', 'how-to-become-a-pilot-in-india', 'pilot-training-cost-in-india'],
})
