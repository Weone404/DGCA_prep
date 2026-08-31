import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'How to Convert a Foreign CPL to a DGCA Licence',
  slug: 'foreign-cpl-to-dgca-conversion',
  excerpt:
    'Step-by-step conversion of an FAA, EASA or other foreign CPL to an Indian DGCA licence - document authentication, four theory papers, Class 1 medical, RTR(A), skill test, eGCA processing, costs and timelines.',
  coverImage: '/blog/foreign-cpl-to-dgca-conversion.webp',
  coverMotif: 'convert',
  category: CATEGORIES.licensing.slug,
  keywords: [
    'foreign CPL to DGCA conversion',
    'FAA CPL to Indian licence',
    'EASA to DGCA conversion',
    'pilot licence conversion India',
    'DGCA licence conversion cost',
    'convert pilot licence India',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'Converting a foreign CPL to an Indian DGCA licence takes four steps: authenticate your licence and logbook on eGCA, pass four DGCA theory papers at 70 per cent each, clear an Indian Class 1 medical and RTR(A), then complete a skill test with a designated examiner. Expect four to eight months and roughly Rs 7.5 lakh to Rs 15 lakh, depending on how much additional flying you need.',
    keyFacts: [
      ['Theory papers required', 'Four, at 70 per cent each'],
      ['Medical', 'Indian Class 1; a foreign medical is not accepted'],
      ['Radio licence', 'Indian RTR(A) required'],
      ['Skill test', 'With a DGCA designated examiner'],
      ['Total flight time', '200 hours minimum for CPL'],
      ['Typical timeline', 'Four to eight months'],
      ['Typical cost', 'Rs 7.5 lakh to Rs 15 lakh'],
      ['Main bottleneck', 'The DGCA examination calendar'],
    ],
    sections: [
      {
        heading: 'Which DGCA papers must a converting pilot write?',
        paragraphs: [
          'Four theory papers, each at 70 per cent: Air Navigation, Air Regulation, Aviation Meteorology and Technical General. A foreign licence does not exempt you from Indian theory.',
          'Air Regulation is the paper that catches most returning pilots. You already fly commercially, so the temptation is to skim it. The examiner tests the Indian rule, not the ICAO principle you trained on, and the Aircraft Rules 1937 do not appear in an FAA or EASA syllabus.',
        ],
        table: {
          headers: ['Paper', 'Why it catches converting pilots'],
          rows: [
            ['Air Regulation', 'Tests Indian law: Aircraft Act 1934, Aircraft Rules 1937 and Indian CARs'],
            ['Air Navigation', 'Calculation-heavy and time-bound; rusty if you fly with automation'],
            ['Aviation Meteorology', 'Indian coding practice and local phenomena'],
            ['Technical General', 'Broad principles paper, usually the most familiar of the four'],
          ],
        },
        note: 'You still need an approved DGCA computer number before you can book any of these papers, exactly like a first-time candidate. Apply for it before you start the document work, because the two processes can run in parallel.',
      },
      {
        heading: 'What are the four conversion steps?',
        paragraphs: [
          'The sequence is fixed by what depends on what. Document verification unlocks nothing you cannot start in parallel, so begin the computer number and the theory study on day one.',
        ],
        steps: [
          ['Document verification on eGCA', 'Submit your foreign CPL or ATPL with ratings, a certified logbook, a flight experience summary covering total, cross-country, night and instrument hours, an authentication letter from the issuing authority, and English proficiency evidence. Allow four to six weeks.'],
          ['Clear the DGCA theory papers', 'Book and pass the four required subjects on DGCA Pariksha at 70 per cent each, Rs 2,500 per paper. One to three months depending on session dates.'],
          ['Meet Indian medical and radio requirements', 'Obtain a DGCA Class 1 medical from an approved Indian aeromedical centre and clear RTR(A). A foreign medical is not accepted in place of the Indian assessment.'],
          ['Complete the skill test', 'Fly a check with a designated examiner at a DGCA-approved organisation, after any additional training needed to meet Indian hour sub-minima. Two to four weeks once current.'],
        ],
        totalTime: 'P8M',
        diagram: {
          type: 'flow',
          title: 'The four-stage DGCA conversion process',
          caption:
            'Document verification and theory study can run in parallel from day one. The skill test cannot start until the logbook audit confirms you meet the Indian sub-minima, which is where unexpected costs appear.',
          data: [
            { label: 'Document verification on eGCA', detail: 'Licence, certified logbook, experience summary, authentication letter, English evidence. 4 to 6 weeks.' },
            { label: 'Four DGCA theory papers', detail: 'Air Navigation, Air Regulation, Aviation Meteorology, Technical General at 70 per cent each. 1 to 3 months.' },
            { label: 'Indian Class 1 medical and RTR(A)', detail: 'A foreign medical is not accepted. RTR(A) has a written and a practical part.' },
            { label: 'Skill test', detail: 'Flight check with a designated examiner, after any additional training. 2 to 4 weeks.' },
            { label: 'Final eGCA application', detail: 'Upload validated documents, results and skill test outcome. 8 to 12 weeks processing.' },
          ],
        },
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
        note: 'Exact sub-minima come from Schedule II of the Aircraft Rules 1937. Have your logbook audited against them before you submit, because a shortfall discovered late means additional flying in India at Indian rates of roughly Rs 28,000 per hour.',
      },
      {
        heading: 'What does conversion cost?',
        paragraphs: [
          'Between Rs 7.5 lakh and Rs 15 lakh in total. The spread is almost entirely about whether your logbook already meets the Indian sub-minima.',
        ],
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
        example: {
          title: 'Why two converting pilots pay very different amounts',
          given: [
            'Pilot A holds 240 hours, comfortably meeting every Indian sub-minimum',
            'Pilot B holds 215 hours but is 18 hours short on instrument time',
            'Additional instrument training in India runs about Rs 30,000 per hour',
          ],
          working: [
            ['Pilot A fixed costs', 'Papers, medical, authentication, skill test, issue: about Rs 2.2 lakh to Rs 3.8 lakh'],
            ['Pilot B same fixed costs', 'About Rs 2.2 lakh to Rs 3.8 lakh'],
            ['Pilot B additional training', '18 hours at Rs 30,000 = Rs 5.4 lakh'],
            ['Pilot B total', 'About Rs 7.6 lakh to Rs 9.2 lakh'],
          ],
          answer:
            'The gap is entirely the hour shortfall. Auditing your logbook against Schedule II before you leave the country you trained in is the single highest-value hour you will spend on this process.',
        },
      },
      {
        heading: 'How long does the whole process take?',
        paragraphs: [
          'Four to eight months. The DGCA examination calendar is usually the bottleneck, not the paperwork.',
        ],
        list: [
          'Document verification and authentication: 4 to 6 weeks',
          'Theory papers: 1 to 3 months, driven by DGCA session dates',
          'Skill test: 2 to 4 weeks once you are current, longer if additional training is needed',
          'Final eGCA processing: 8 to 12 weeks',
          'Realistic total: 4 to 8 months',
        ],
        note: 'There are twelve DGCA sittings in 2026 - four regular sessions and eight OLODE sessions - so book theory papers as early as your computer number allows rather than waiting until document verification finishes.',
      },
      {
        heading: 'What trips up converting pilots most often?',
        paragraphs: [
          'Five recurring problems, and four of them are avoidable with a week of preparation before you start.',
        ],
        pitfalls: [
          'Assuming a foreign medical is accepted in India; it is not, and the Indian Class 1 must be done at an approved centre',
          'Logbook entries that do not clearly separate cross-country, night and instrument time',
          'Missing or delayed authentication letter from the foreign issuing authority',
          'Underestimating Air Regulation because you already fly commercially abroad',
          'Losing currency during the paperwork months and needing extra flying before the skill test',
        ],
      },
      {
        heading: 'How do you keep currency during the paperwork months?',
        paragraphs: [
          'Four to eight months is long enough for handling skills to fade and long enough for a recency requirement to lapse. The skill test is not a formality, and an examiner can tell within one circuit whether you have flown recently.',
        ],
        steps: [
          ['Book a few hours a month at a local club', 'Even short sorties keep the scan and the radio work alive at a fraction of what remedial training costs later.'],
          ['Study Indian procedures while you fly', 'Use each sortie to practise Indian phraseology and local airspace procedure rather than the pattern you trained on.'],
          ['Time the skill test to your paper results', 'Do not book a check until the theory is cleared and the medical is in hand, or you may have to repeat it.'],
          ['Keep the logbook audit-ready throughout', 'Categorised hours updated after every flight, so nothing has to be reconstructed under time pressure.'],
        ],
      },
      {
        heading: 'Conversion versus training in India from scratch',
        paragraphs: [
          'If you already hold a foreign CPL, conversion is far cheaper than starting again. If you are still deciding where to train, the comparison is closer than it looks.',
        ],
        table: {
          headers: ['Route', 'Flying cost', 'Extra steps', 'Realistic total'],
          rows: [
            ['Train in India', 'Rs 55-65 lakh', 'None', 'Rs 55-70 lakh'],
            ['Train abroad, then convert', 'Rs 60-75 lakh', 'Conversion Rs 7.5-15 lakh', 'Rs 68-90 lakh'],
            ['Already hold a foreign CPL', 'Already paid', 'Conversion only', 'Rs 7.5-15 lakh'],
          ],
          caption: 'The case for training abroad is completion speed in reliable weather, not total cost.',
        },
      },
    ],
    glossary: [
      ['eGCA', 'The DGCA online portal used for licence applications, endorsements and document submission, including conversions.'],
      ['Authentication letter', 'Written confirmation from the foreign issuing authority that your licence is genuine and valid.'],
      ['Skill test', 'The flight check with a DGCA designated examiner required before an Indian licence is issued.'],
      ['Sub-minima', 'The category-wise hour requirements - cross-country, night, instrument - that sit underneath the 200-hour total.'],
      ['Designated examiner', 'A DGCA-authorised examiner permitted to conduct skill tests for licence issue.'],
      ['Currency', 'Recent flying experience. Lapsed currency means extra flying before a skill test can be attempted.'],
      ['Computer number', 'Your lifetime DGCA candidate ID, required before booking any theory paper, including for conversions.'],
    ],
    quiz: [
      {
        question: 'How many DGCA theory papers must a converting foreign CPL holder write?',
        options: ['Two', 'Three', 'Four', 'All five'],
        answer: 2,
        explanation: 'Four papers: Air Navigation, Air Regulation, Aviation Meteorology and Technical General, each requiring 70 per cent.',
      },
      {
        question: 'Is a foreign Class 1 medical accepted for a DGCA licence?',
        options: [
          'Yes, if issued by an ICAO member state',
          'Yes, for FAA and EASA holders only',
          'No, an Indian Class 1 is required',
          'Only for ATPL conversions',
        ],
        answer: 2,
        explanation: 'You must obtain a DGCA Class 1 medical from an approved Indian aeromedical centre. A foreign medical does not substitute for it.',
      },
      {
        question: 'Which paper most often surprises experienced foreign commercial pilots?',
        options: ['Technical General', 'Air Regulation', 'Aviation Meteorology', 'Air Navigation'],
        answer: 1,
        explanation: 'Air Regulation tests Indian law - the Aircraft Act 1934, Aircraft Rules 1937 and Indian CARs - none of which appears in an FAA or EASA syllabus.',
      },
      {
        question: 'What usually determines whether conversion costs Rs 7.5 lakh or Rs 15 lakh?',
        options: [
          'Which country issued the original licence',
          'Whether the logbook meets Indian hour sub-minima',
          'The number of theory retakes',
          'Whether you hold a type rating',
        ],
        answer: 1,
        explanation: 'Additional flight training to close an hour shortfall runs Rs 5 lakh to Rs 10 lakh and is the single largest variable in the conversion budget.',
      },
    ],
    faqs: [
      ['How many DGCA exams are needed to convert a foreign CPL?', 'Four papers: Air Navigation, Air Regulation, Aviation Meteorology and Technical General, each requiring 70 per cent with no negative marking.'],
      ['Is a foreign Class 1 medical accepted by DGCA?', 'No. You must obtain a DGCA Class 1 medical assessment from an approved Indian aeromedical centre, regardless of what medical you hold abroad.'],
      ['How long does DGCA licence conversion take?', 'Typically four to eight months from document submission to licence issue, with the DGCA examination calendar usually setting the pace rather than the paperwork.'],
      ['Do I need RTR(A) if I already hold a foreign radio licence?', 'You need an Indian RTR(A). Certain Commonwealth-issued radio telephony licences and WPC certificates can support an exemption from Part 1, but the practical part still applies.'],
      ['What does foreign CPL conversion cost in India?', 'Roughly Rs 7.5 lakh to Rs 15 lakh in total, with the skill test and any additional flight training making up most of it.'],
      ['Do I need a DGCA computer number to convert?', 'Yes. The computer number is required before booking any theory paper, exactly as it is for a first-time candidate. Apply for it in parallel with document verification.'],
      ['What if my logbook is short on instrument hours?', 'You complete the shortfall in India at Indian rates, commonly around Rs 30,000 per hour for instrument training. Audit your logbook against Schedule II before you start the process.'],
      ['Can I convert an FAA CPL and an EASA CPL the same way?', 'The process is the same: authentication, four theory papers, Indian Class 1 medical, RTR(A) and a skill test. The differences show up in which hour categories your original syllabus covered.'],
      ['How do I keep currency during the process?', 'Book a few hours a month at a local club. Four to eight months is long enough for handling skills to fade, and an examiner notices within one circuit.'],
      ['Does a foreign ATPL convert directly to an Indian ATPL?', 'You submit your licence with ratings and your flight experience summary, and DGCA assesses it against Indian requirements. Indian theory, medical and skill test requirements still apply.'],
      ['How long does final eGCA processing take?', 'Eight to twelve weeks after you upload validated documents, exam results and the skill test outcome. Incomplete documents are the usual cause of delay.'],
      ['Should I convert before or after looking for a job?', 'Convert first. Indian carriers hire against an Indian licence, and the four to eight month conversion window is not something you want running while an offer waits.'],
    ],
  },
  sources: [
    ['Foreign licence to DGCA conversion process and requirements', 'https://www.pilotcareer.in/aviation-pilot-things-to-know/pilot-license-conversion/'],
    ['DGCA eGCA licensing portal', 'https://www.dgca.gov.in/digigov-portal/'],
    ['DGCA Pariksha flight crew FAQs', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
  ],
  related: ['dgca-exam-subjects-and-syllabus', 'dgca-class-1-and-class-2-medical', 'pilot-training-cost-in-india'],
})
