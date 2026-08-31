import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA ATPL Requirements: 1,500 Hours, Age 21 and the Paper Route',
  slug: 'dgca-atpl-requirements',
  excerpt:
    'Exact DGCA ATPL flight time requirements from Schedule II of the Aircraft Rules 1937 - 1,500 total hours, 500 PIC or PICUS, 1,000 cross-country, 100 night, 100 instrument - plus how co-pilot and PICUS hours are credited.',
  coverImage: '/blog/dgca-atpl-requirements.webp',
  coverMotif: 'epaulette',
  category: CATEGORIES.licensing.slug,
  keywords: [
    'DGCA ATPL requirements',
    'ATPL hours India',
    'ATPL eligibility',
    'airline transport pilot licence India',
    'PICUS hours DGCA',
    'command upgrade India',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'A DGCA Airline Transport Pilot Licence requires a minimum age of 21, 1,500 hours of flight time as pilot of an aeroplane, 500 hours as pilot-in-command or PICUS, 1,000 hours of cross-country, 100 hours of night flying and 100 hours of instrument time of which at least 50 must be in actual flight. Recency requirements apply on top of the totals.',
    keyFacts: [
      ['Minimum age', '21 years'],
      ['Total flight time', '1,500 hours'],
      ['PIC or PICUS', '500 hours'],
      ['Cross-country, total', '1,000 hours'],
      ['Night flying', '100 hours'],
      ['Instrument time', '100 hours, at least 50 in actual flight'],
      ['Recency', '150 hours in the preceding 12 months'],
      ['Typical time from CPL', 'Five to ten years'],
    ],
    sections: [
      {
        heading: 'What flight time does a DGCA ATPL require?',
        paragraphs: [
          'Eight figures, and most first officers can recite the first one and none of the rest. The 1,500-hour total is the headline, but it is rarely what holds an application up.',
        ],
        table: {
          headers: ['Requirement', 'Minimum'],
          rows: [
            ['Minimum age', '21 years'],
            ['Total flight time as pilot of an aeroplane', '1,500 hours'],
            ['Pilot-in-command or PICUS', '500 hours'],
            ['Cross-country, total', '1,000 hours'],
            ['Cross-country as PIC or PICUS', '200 hours, of which 50 at night'],
            ['Night flying', '100 hours'],
            ['Instrument time', '100 hours, at least 50 in actual flight'],
            ['Recent experience', '150 hours in the preceding 12 months, 10 hours in the preceding 6 months'],
          ],
        },
        note: 'Requirements follow Schedule II, Section M of the Aircraft Rules, 1937. Verify the current text before submitting your application, since schedules are amended from time to time.',
      },
      {
        heading: 'How do co-pilot and PICUS hours count?',
        paragraphs: [
          'This is where most first officers miscount their logbook. The credit rules are not the same for the two totals, and a pilot who assumes every hour counts everywhere arrives at the application short.',
        ],
        list: [
          'Plain co-pilot time counts at 50 per cent towards the 1,500-hour total only',
          'PICUS time counts at 50 per cent towards the 500-hour pilot-in-command requirement',
          'PICUS time counts at 100 per cent towards the 1,500-hour total',
        ],
        table: {
          headers: ['Hour type', 'Credit to the 1,500 total', 'Credit to the 500 PIC'],
          rows: [
            ['Pilot-in-command', '100 per cent', '100 per cent'],
            ['PICUS', '100 per cent', '50 per cent'],
            ['Plain co-pilot', '50 per cent', 'Nil'],
          ],
          caption: 'PICUS means pilot-in-command under supervision: you perform the duties of commander while a check pilot supervises, and the sector is logged and signed accordingly.',
        },
        example: {
          title: 'Why 1,600 logged hours can still fall short',
          given: [
            'A first officer logs 1,600 hours in total',
            'Of these, 1,300 hours are plain co-pilot time',
            'The remaining 300 hours are PICUS',
          ],
          working: [
            ['Co-pilot credit to the total', '1,300 x 50 per cent = 650 hours'],
            ['PICUS credit to the total', '300 x 100 per cent = 300 hours'],
            ['Creditable total', '650 + 300 = 950 hours against the 1,500 requirement'],
            ['PICUS credit to the 500 PIC requirement', '300 x 50 per cent = 150 hours against 500'],
          ],
          answer:
            'A logbook showing 1,600 hours credits as 950 towards the total and only 150 towards the command requirement. The pilot is not close on either count, and the 500-hour PIC figure is by far the further away.',
        },
      },
      {
        heading: 'What is the difference between a CPL and an ATPL?',
        paragraphs: [
          'A CPL lets you be paid to fly. An ATPL lets you command a scheduled airliner. The gap between them is measured in years of line flying, not in months of study.',
        ],
        table: {
          headers: ['', 'CPL', 'ATPL'],
          rows: [
            ['Minimum age', '18 years', '21 years'],
            ['Minimum flight time', '200 hours', '1,500 hours'],
            ['Typical role', 'First Officer', 'Captain, pilot-in-command of a scheduled airliner'],
            ['Route to it', 'Ground school and flight training', 'Built on line flying experience after CPL'],
          ],
        },
        diagram: {
          type: 'ladder',
          title: 'Indian pilot licence ladder and what each one permits',
          caption:
            'Minimum age and flight time under Schedule II of the Aircraft Rules, 1937. Sub-minima for cross-country, night and instrument time apply on top of every total shown.',
          data: [
            { label: 'SPL - Student Pilot Licence', detail: 'Age 16, no minimum hours. Permits supervised training flights.' },
            { label: 'PPL - Private Pilot Licence', detail: 'Age 17, 40 hours. Fly privately, never for hire or reward.' },
            { label: 'CPL - Commercial Pilot Licence', detail: 'Age 18, 200 hours. Fly for payment, typically as First Officer.' },
            { label: 'ATPL - Airline Transport Pilot Licence', detail: 'Age 21, 1,500 hours. Command a scheduled airliner.' },
          ],
        },
      },
      {
        heading: 'What theory does an ATPL candidate write?',
        paragraphs: [
          'ATPL theory papers are written through the same DGCA Pariksha examination system as CPL papers, at the same 70 per cent pass standard, with no negative marking and the same Rs 2,500 per paper fee. You use the same computer number you were issued as a student.',
          'Most first officers clear them during the years they are building hours rather than waiting until they meet the flight time minima. That is a deliberate career move, not diligence. When a command upgrade opportunity opens, the pilot who already holds the theory passes is the one who can move on it.',
        ],
        table: {
          headers: ['', 'CPL papers', 'ATPL papers'],
          rows: [
            ['Portal', 'DGCA Pariksha', 'DGCA Pariksha'],
            ['Pass mark', '70 per cent', '70 per cent'],
            ['Fee per paper', 'Rs 2,500', 'Rs 2,500'],
            ['Negative marking', 'None', 'None'],
            ['Computer number', 'Same lifetime number', 'Same lifetime number'],
          ],
        },
      },
      {
        heading: 'How long does it take to reach ATPL from CPL?',
        paragraphs: [
          'Five to ten years at an Indian carrier, driven by fleet growth, roster utilisation and how quickly the airline releases first officers into PICUS sectors.',
          'A pilot flying high-utilisation narrow-body sectors reaches 1,500 hours far faster than one on a low-utilisation fleet. But the 500 hours of command or PICUS time, not the 1,500 total, is usually what sets the date, and that depends on the airline releasing you into those sectors rather than on anything you can do alone.',
        ],
        pitfalls: [
          'Counting all logged hours towards both totals and discovering the shortfall at application time',
          'Waiting until you meet the hour minima before starting theory, then losing a command slot to someone who did not wait',
          'Logging PICUS sectors without the check pilot signature that makes them creditable',
          'Letting recency lapse during a rostering gap, since 150 hours in the preceding 12 months is a requirement in its own right',
        ],
      },
      {
        heading: 'What else does an ATPL application need?',
        paragraphs: [
          'Hours are necessary and not sufficient. Five other things must be in place, and the logbook is the one that causes the most delay.',
        ],
        list: [
          'Valid DGCA Class 1 medical assessment, valid 12 months for commercial operations',
          'Valid RTR(A) licence and ICAO English Language Proficiency Level 4 or above',
          'Theory passes within the applicable validity window',
          'A logbook that separates PIC, PICUS, co-pilot, cross-country, night and instrument time cleanly',
          'Type rating and current line checks on the aircraft flown',
        ],
        note: 'Keep the logbook audit-ready from day one of your first officer years. Reconstructing category-wise hours from five years of rosters is the single most avoidable delay in an ATPL application.',
      },
      {
        heading: 'How should a first officer plan the ATPL years?',
        paragraphs: [
          'Treat it as a five-year project with three parallel tracks: hours, theory and paperwork. Only the first depends on your employer.',
        ],
        steps: [
          ['Years 1 to 2', 'Fly, and set up the logbook properly from the first sector. Separate PIC, PICUS, co-pilot, cross-country, night and instrument columns from day one.'],
          ['Years 2 to 3', 'Start the ATPL theory papers. Twelve DGCA sittings a year means you can take one paper at a time around a roster.'],
          ['Years 3 to 4', 'Push for PICUS release. This is the constraint on the 500-hour requirement, and it is worth raising with your fleet management directly.'],
          ['Years 4 to 5', 'Audit the logbook against Schedule II, close any category gap, and keep the medical and RTR(A) current.'],
          ['When the numbers land', 'Apply on eGCA with theory passes still inside their validity window.'],
        ],
      },
      {
        heading: 'What does the pay look like on the way up?',
        paragraphs: [
          'Command upgrade is where the money changes, and it is roughly the same moment the ATPL becomes usable. That is not a coincidence: the airline is paying for command authority, and the licence is what permits it.',
        ],
        table: {
          headers: ['Rank', 'Experience', 'Monthly CTC'],
          rows: [
            ['Junior First Officer', '0 to 1 year', 'Rs 1,00,000 to Rs 1,50,000'],
            ['First Officer', '1 to 3 years', 'Rs 2,00,000 to Rs 3,50,000'],
            ['Senior First Officer', '3 to 5 years', 'Rs 3,50,000 to Rs 4,50,000'],
            ['Captain, narrow-body', '6 to 10 years', 'Rs 5,00,000 to Rs 10,00,000'],
          ],
          caption: 'Indicative gross CTC including flying allowances, from published 2026 salary guides. Actual pay varies by airline, fleet and roster.',
        },
      },
    ],
    glossary: [
      ['ATPL', 'Airline Transport Pilot Licence. The licence permitting command of a scheduled airliner, requiring age 21 and 1,500 hours.'],
      ['PIC', 'Pilot-in-command. The pilot with final authority for the operation and safety of the flight.'],
      ['PICUS', 'Pilot-in-command under supervision. You perform commander duties while a check pilot supervises, and the sector is signed accordingly.'],
      ['Co-pilot time', 'Hours flown in the right seat without command duties. Credits at 50 per cent towards the 1,500 total and not at all towards the 500 PIC.'],
      ['Recency', 'Recent experience requirements: 150 hours in the preceding 12 months and 10 hours in the preceding 6 months.'],
      ['Command upgrade', 'The move from first officer to captain, usually between year five and year ten at an Indian carrier.'],
      ['Schedule II', 'The schedule of the Aircraft Rules, 1937 setting out licence requirements including ATPL flight time minima.'],
    ],
    quiz: [
      {
        question: 'How many hours of flight time does a DGCA ATPL require in total?',
        options: ['200 hours', '500 hours', '1,000 hours', '1,500 hours'],
        answer: 3,
        explanation: '1,500 hours of flight time as pilot of an aeroplane, including 500 hours as PIC or PICUS and 1,000 hours cross-country.',
      },
      {
        question: 'How does plain co-pilot time credit towards the 500-hour command requirement?',
        options: ['At 100 per cent', 'At 50 per cent', 'At 25 per cent', 'It does not count'],
        answer: 3,
        explanation: 'Plain co-pilot time credits at 50 per cent towards the 1,500-hour total only. It does not count towards the 500-hour PIC or PICUS requirement at all.',
      },
      {
        question: 'What is the minimum age for a DGCA ATPL?',
        options: ['18 years', '20 years', '21 years', '23 years'],
        answer: 2,
        explanation: 'Twenty-one years. A CPL can be held from 18, a PPL from 17 and an SPL from 16.',
      },
      {
        question: 'Which requirement usually sets the date a first officer can apply for an ATPL?',
        options: [
          'The 1,500-hour total',
          'The 500 hours of PIC or PICUS',
          'The 100 hours of night flying',
          'The minimum age',
        ],
        answer: 1,
        explanation: 'The 500-hour command requirement is usually the limiting factor, because it depends on the airline releasing you into PICUS sectors rather than on total flying.',
      },
    ],
    faqs: [
      ['How many hours are required for a DGCA ATPL?', '1,500 hours of flight time as pilot of an aeroplane, including 500 hours as pilot-in-command or PICUS, 1,000 hours cross-country, 100 hours night and 100 hours instrument time.'],
      ['What is the minimum age for an ATPL in India?', 'Twenty-one years, compared with 18 for a CPL, 17 for a PPL and 16 for a Student Pilot Licence.'],
      ['Do co-pilot hours count towards ATPL?', 'Plain co-pilot time counts at 50 per cent towards the 1,500-hour total only. PICUS counts fully towards the total and at 50 per cent towards the 500-hour command requirement.'],
      ['Can I get an ATPL without a CPL?', 'In practice no. Pilots build the required 1,500 hours while flying commercially on a CPL, then apply for the ATPL once the hour and recency requirements are met.'],
      ['How long does it take to go from CPL to ATPL?', 'Commonly five to ten years at an Indian airline, with the 500 hours of command or PICUS time usually being the limiting factor rather than the total.'],
      ['What is PICUS?', 'Pilot-in-command under supervision. You perform the duties of commander while a check pilot supervises, and the sector must be logged and signed to be creditable.'],
      ['When should I write the ATPL theory papers?', 'While you are building hours, not after. When a command upgrade opens, the pilot who already holds the theory passes is the one who can take it.'],
      ['What are the ATPL recency requirements?', '150 hours in the preceding 12 months and 10 hours in the preceding 6 months, on top of the total flight time minima.'],
      ['Do ATPL papers cost the same as CPL papers?', 'Yes. They are written through the same DGCA Pariksha system at Rs 2,500 per paper, at the same 70 per cent pass standard with no negative marking.'],
      ['Do I need a new computer number for ATPL papers?', 'No. Your DGCA computer number is valid for life, and the same number carries through from your CPL papers to your ATPL papers.'],
      ['What is the biggest cause of delay in an ATPL application?', 'A logbook that does not separate PIC, PICUS, co-pilot, cross-country, night and instrument time cleanly. Reconstructing five years of categorised hours from rosters is slow and avoidable.'],
      ['Does an ATPL guarantee a command upgrade?', 'No. The licence permits command; the airline decides when to offer it, based on fleet growth and seniority. Holding the licence and the theory passes means you are ready when the slot appears.'],
    ],
  },
  sources: [
    ['Schedule II, Section M, Aircraft Rules 1937, ATPL requirements', 'https://www.wingmanlog.in/post/atpl-hours-requirement-as-per-dgca'],
    ['DGCA Civil Aviation Requirements, flight crew licensing', 'https://www.dgca.gov.in/digigov-portal/'],
    ['Pilot salary in India 2026, rank-wise ranges', 'https://apano.in/articles/guides/pilot-salary-in-india-2026-complete-guide'],
  ],
  related: ['dgca-cpl-eligibility', 'pilot-salary-in-india', 'dgca-exam-pattern-and-passing-marks'],
})
