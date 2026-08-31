import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA ATPL Requirements: 1,500 Hours, Age 21 and the Paper Route',
  slug: 'dgca-atpl-requirements',
  excerpt:
    'Exact DGCA ATPL flight time requirements from Schedule II of the Aircraft Rules 1937 - 1,500 total hours, 500 PIC, 200 cross-country, 100 night, 100 instrument, and minimum age 21.',
  coverImage: '/blog/dgca-atpl-requirements.webp',
  category: CATEGORIES.licensing.slug,
  keywords: [
    'DGCA ATPL requirements',
    'ATPL hours India',
    'ATPL eligibility',
    'airline transport pilot licence India',
    'PICUS hours DGCA',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'A DGCA Airline Transport Pilot Licence requires a minimum age of 21, 1,500 hours of flight time as pilot of an aeroplane, 500 hours as pilot-in-command or PICUS, 1,000 hours of cross-country, 100 hours of night flying and 100 hours of instrument time of which at least 50 must be in actual flight. Recency requirements apply on top of the totals.',
    sections: [
      {
        heading: 'What flight time does a DGCA ATPL require?',
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
          'This is where most first officers miscount their logbook. The credit rules are not the same for the two totals.',
        ],
        list: [
          'Plain co-pilot time counts at 50 per cent towards the 1,500-hour total only',
          'PICUS time counts at 50 per cent towards the 500-hour pilot-in-command requirement',
          'PICUS time counts at 100 per cent towards the 1,500-hour total',
        ],
        note: 'PICUS means pilot-in-command under supervision: you perform the duties of commander while a check pilot supervises, and the sector is logged and signed accordingly.',
      },
      {
        heading: 'What is the difference between CPL and ATPL?',
        table: {
          headers: ['', 'CPL', 'ATPL'],
          rows: [
            ['Minimum age', '18 years', '21 years'],
            ['Minimum flight time', '200 hours', '1,500 hours'],
            ['Typical role', 'First Officer', 'Captain, pilot-in-command of a scheduled airliner'],
            ['Route', 'Ground school and flight training', 'Built on line flying experience after CPL'],
          ],
        },
        paragraphs: [
          'You do not apply for an ATPL straight from ground school. In practice a pilot holds a CPL, flies as First Officer for several years, accumulates the hours and the PICUS sectors, then applies. The theory papers are written along the way.',
        ],
      },
      {
        heading: 'What theory does an ATPL candidate write?',
        paragraphs: [
          'ATPL theory papers are written through the same DGCA Pariksha examination system as CPL papers, at the same 70 per cent pass standard, with no negative marking and the same Rs 2,500 per paper fee. Most First Officers clear them during the years they are building hours rather than waiting until they meet the flight time minima.',
          'Clearing theory early is a deliberate career move. When a command upgrade opportunity opens, the pilot who already holds the theory passes is the one who can move on it.',
        ],
      },
      {
        heading: 'How long does it take to reach ATPL from CPL?',
        paragraphs: [
          'Five to ten years at an Indian carrier is the common range, driven by fleet growth, roster utilisation and how quickly the airline releases first officers into PICUS sectors. A pilot flying high utilisation narrow-body sectors reaches 1,500 hours far faster than one on a low-utilisation fleet.',
          'The 500 hours of command or PICUS time, not the 1,500 total, is usually what sets the date.',
        ],
      },
      {
        heading: 'What else does an ATPL application need?',
        list: [
          'Valid DGCA Class 1 medical assessment',
          'Valid RTR(A) licence and ICAO English Language Proficiency Level 4 or above',
          'Theory passes within the applicable validity window',
          'A logbook that separates PIC, PICUS, co-pilot, cross-country, night and instrument time cleanly',
          'Type rating and current line checks on the aircraft flown',
        ],
        note: 'Keep the logbook audit-ready from day one of your first officer years. Reconstructing category-wise hours from five years of rosters is the single most avoidable delay in an ATPL application.',
      },
    ],
    faqs: [
      ['How many hours are required for a DGCA ATPL?', '1,500 hours of flight time as pilot of an aeroplane, including 500 hours as pilot-in-command or PICUS, 1,000 hours cross-country, 100 hours night and 100 hours instrument time.'],
      ['What is the minimum age for an ATPL in India?', 'Twenty-one years.'],
      ['Do co-pilot hours count towards ATPL?', 'Plain co-pilot time counts at 50 per cent towards the 1,500-hour total only. PICUS counts fully towards the total and at 50 per cent towards the 500-hour command requirement.'],
      ['Can I get an ATPL without a CPL?', 'In practice no. Pilots build the required 1,500 hours while flying commercially on a CPL, then apply for the ATPL.'],
      ['How long does it take to go from CPL to ATPL?', 'Commonly five to ten years at an Indian airline, with the 500 hours of command or PICUS time usually being the limiting factor rather than the total.'],
    ],
  },
  sources: [
    ['Schedule II, Section M, Aircraft Rules 1937, ATPL requirements', 'https://www.wingmanlog.in/post/atpl-hours-requirement-as-per-dgca'],
    ['DGCA Civil Aviation Requirements, flight crew licensing', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['dgca-cpl-eligibility', 'pilot-salary-in-india', 'dgca-exam-pattern-and-passing-marks'],
})
