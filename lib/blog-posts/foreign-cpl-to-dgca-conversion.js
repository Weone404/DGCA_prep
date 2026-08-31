import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'How to Convert a Foreign CPL to a DGCA Licence',
  slug: 'foreign-cpl-to-dgca-conversion',
  excerpt:
    'Step-by-step conversion of an FAA, EASA or other foreign CPL to an Indian DGCA licence - document authentication, four theory papers, Class 1 medical, skill test and eGCA processing.',
  coverImage: '/blog/foreign-cpl-to-dgca-conversion.webp',
  category: CATEGORIES.licensing.slug,
  keywords: [
    'foreign CPL to DGCA conversion',
    'FAA CPL to Indian licence',
    'EASA to DGCA conversion',
    'pilot licence conversion India',
    'DGCA licence conversion cost',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'Converting a foreign CPL to an Indian DGCA licence takes four steps: authenticate your licence and logbook on eGCA, pass four DGCA theory papers at 70 per cent each, clear an Indian Class 1 medical and RTR(A), then complete a skill test with a designated examiner. Expect four to eight months and roughly Rs 7.5 lakh to Rs 15 lakh, depending on how much additional flying you need.',
    sections: [
      {
        heading: 'Which DGCA papers must a converting pilot write?',
        paragraphs: [
          'Four theory papers, each at 70 per cent: Air Navigation, Air Regulation, Aviation Meteorology and Technical General. A foreign licence does not exempt you from Indian theory, and Air Regulation is the paper that catches most returning pilots, because it tests the Indian rule rather than the ICAO principle you trained on.',
        ],
        list: [
          'Air Regulation, covering the Aircraft Act 1934, Aircraft Rules 1937 and Indian CARs',
          'Air Navigation',
          'Aviation Meteorology',
          'Technical General',
        ],
        note: 'You still need an approved DGCA computer number before you can book any of these papers, exactly like a first-time candidate.',
      },
      {
        heading: 'What are the four conversion steps?',
        numbered: [
          ['Document verification on eGCA', 'Submit your foreign CPL or ATPL with ratings, a certified logbook, a flight experience summary covering total, cross-country, night and instrument hours, an authentication letter from the issuing authority, and English proficiency evidence.'],
          ['Clear the DGCA theory papers', 'Book and pass the four required subjects on DGCA Pariksha at 70 per cent each.'],
          ['Meet Indian medical and radio requirements', 'Obtain a DGCA Class 1 medical from an approved Indian aeromedical centre and clear RTR(A). A foreign medical is not accepted in place of the Indian assessment.'],
          ['Complete the skill test', 'Fly a check with a designated examiner at a DGCA-approved organisation, after any additional training needed to meet Indian hour sub-minima.'],
        ],
      },
      {
        heading: 'What flight experience does DGCA look for?',
        paragraphs: [
          'The headline figure is 200 hours total time for a CPL, but the sub-minima matter more during conversion than the total. Pilots who trained on a syllabus with different cross-country or instrument requirements often find they are short in one category despite comfortably exceeding 200 hours.',
        ],
        table: {
          headers: ['Category', 'Indicative requirement'],
          rows: [
            ['Total flight time', '200 hours minimum for CPL'],
            ['Cross-country', 'Substantial cross-country component, verified from the logbook'],
            ['Instrument time', 'Instrument flying hours as specified for the licence'],
            ['Night flying', 'Night hours as specified for the licence'],
          ],
        },
        note: 'Exact sub-minima come from Schedule II of the Aircraft Rules 1937. Have your logbook audited against them before you submit, because a shortfall discovered late means additional flying in India at Indian rates.',
      },
      {
        heading: 'What does conversion cost?',
        table: {
          headers: ['Item', 'Indicative cost'],
          rows: [
            ['DGCA theory papers', 'Rs 2,500 per paper, plus retakes'],
            ['Class 1 medical in India', 'Rs 8,000 to Rs 15,000'],
            ['Licence authentication', 'Rs 5,000 to Rs 8,000'],
            ['Skill test', 'Rs 1.5 lakh to Rs 3 lakh'],
            ['Additional flight training if short on hours', 'Rs 5 lakh to Rs 10 lakh'],
            ['Licence issue and processing', 'Rs 20,000 to Rs 50,000'],
          ],
        },
      },
      {
        heading: 'How long does the whole process take?',
        list: [
          'Document verification and authentication: 4 to 6 weeks',
          'Theory papers: 1 to 3 months, driven by DGCA session dates',
          'Skill test: 2 to 4 weeks once you are current, longer if additional training is needed',
          'Final eGCA processing: 8 to 12 weeks',
          'Realistic total: 4 to 8 months',
        ],
        note: 'The session calendar is usually the bottleneck. Book theory papers as early as your computer number allows rather than waiting until document verification finishes.',
      },
      {
        heading: 'What trips up converting pilots most often?',
        list: [
          'Assuming a foreign medical is accepted in India; it is not',
          'Logbook entries that do not clearly separate cross-country, night and instrument time',
          'Missing or delayed authentication letter from the foreign issuing authority',
          'Underestimating Air Regulation because the pilot already flies commercially abroad',
          'Losing currency during the paperwork months and needing extra flying before the skill test',
        ],
      },
    ],
    faqs: [
      ['How many DGCA exams are needed to convert a foreign CPL?', 'Four papers: Air Navigation, Air Regulation, Aviation Meteorology and Technical General, each requiring 70 per cent.'],
      ['Is a foreign Class 1 medical accepted by DGCA?', 'No. You must obtain a DGCA Class 1 medical assessment from an approved Indian aeromedical centre.'],
      ['How long does DGCA licence conversion take?', 'Typically four to eight months from document submission to licence issue, with the DGCA examination calendar usually setting the pace.'],
      ['Do I need RTR(A) if I already hold a foreign radio licence?', 'You need an Indian RTR(A). Certain Commonwealth-issued radio telephony licences and WPC certificates can support an exemption from Part 1, but the practical part still applies.'],
      ['What does foreign CPL conversion cost in India?', 'Roughly Rs 7.5 lakh to Rs 15 lakh in total, with the skill test and any additional flight training making up most of it.'],
    ],
  },
  sources: [
    ['Foreign licence to DGCA conversion process and requirements', 'https://www.pilotcareer.in/aviation-pilot-things-to-know/pilot-license-conversion/'],
    ['DGCA eGCA licensing portal', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['dgca-exam-subjects-and-syllabus', 'dgca-class-1-and-class-2-medical', 'pilot-training-cost-in-india'],
})
