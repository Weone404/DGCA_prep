import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA Exam Dates 2026: Regular and OLODE Session Calendar',
  slug: 'dgca-exam-dates-2026',
  excerpt:
    'The full 2026 DGCA examination calendar - four regular sessions and eight OLODE sessions - with booking mechanics, a twelve-month study plan and how to sequence papers around the dates.',
  coverImage: '/blog/dgca-exam-dates-2026.webp',
  coverMotif: 'calendar',
  category: CATEGORIES.exams.slug,
  keywords: [
    'DGCA exam dates 2026',
    'DGCA exam calendar',
    'OLODE exam DGCA',
    'DGCA exam schedule',
    'DGCA session dates',
    'DGCA exam registration',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'DGCA runs two examination streams for flight crew candidates in 2026: four regular sessions in March, June, September and December, and eight OLODE sessions spread across the year. That is twelve sittings in total. Registration windows close weeks before each session, and the Rs 2,500 per-paper fee is non-refundable, so book only papers you are ready to sit.',
    keyFacts: [
      ['Total sittings in 2026', 'Twelve'],
      ['Regular sessions', 'Four: March, June, September, December'],
      ['OLODE sessions', 'Eight, spread across the year'],
      ['Fee per paper', 'Rs 2,500, non-refundable'],
      ['Booking portal', 'pariksha.dgca.gov.in'],
      ['Prerequisite', 'An approved DGCA computer number'],
      ['Pass mark', '70 per cent per paper'],
      ['Papers per session', 'As many as you choose to book'],
    ],
    sections: [
      {
        heading: 'What are the DGCA regular exam dates in 2026?',
        paragraphs: [
          'Four regular sessions, spaced roughly a quarter apart. These are the traditional sittings and remain the anchor points most ground schools plan their batches around.',
        ],
        table: {
          headers: ['Session', 'Dates', 'Quarter'],
          rows: [
            ['Exam 01/2026', '10 to 14 March 2026', 'Q1'],
            ['Exam 02/2026', '16 to 20 June 2026', 'Q2'],
            ['Exam 03/2026', '22 to 26 September 2026', 'Q3'],
            ['Exam 04/2026', '15 to 19 December 2026', 'Q4'],
          ],
        },
        note: 'Dates follow the published 2026 examination calendar. Always confirm against the current notice on the DGCA Pariksha portal before booking, since sessions can be revised.',
      },
      {
        heading: 'What are the OLODE session dates in 2026?',
        paragraphs: [
          'OLODE stands for online distance open delivery examination. It gives candidates eight extra opportunities across the year instead of waiting three months for the next regular session.',
          'For a student who fails one paper by two marks, this is the difference between a three-week wait and a three-month one. It has quietly changed how ground schools plan, because holding a finished subject back no longer costs anything.',
        ],
        table: {
          headers: ['OLODE session', 'Dates', 'Month'],
          rows: [
            ['Session 1', '21 to 23 January 2026', 'January'],
            ['Session 2', '04 to 06 February 2026', 'February'],
            ['Session 3', '22 to 24 April 2026', 'April'],
            ['Session 4', '20 to 22 May 2026', 'May'],
            ['Session 5', '15 to 17 July 2026', 'July'],
            ['Session 6', '19 to 21 August 2026', 'August'],
            ['Session 7', '28 to 30 October 2026', 'October'],
            ['Session 8', '18 to 20 November 2026', 'November'],
          ],
        },
      },
      {
        heading: 'How many chances do you get in a year?',
        paragraphs: [
          'Twelve sittings across both streams in 2026. That changes how you should plan.',
          'Under an older three-sessions-a-year system a failed paper cost you four months. Now a failed paper can be re-attempted within weeks, which makes it worth booking a subject as soon as your mock scores cross 80 per cent rather than waiting for the certainty of a perfect score. The cost of being slightly early is Rs 2,500. The cost of being three months late is three months.',
        ],
        diagram: {
          type: 'timeline',
          title: 'How the 2026 sittings are distributed through the year',
          caption:
            'Only April and the first half of March pass without a sitting. In practice a candidate is rarely more than six weeks from the next opportunity, which is why holding a ready paper back no longer makes sense.',
          data: [
            { label: 'Jan-Feb', detail: '2 OLODE', sub: '21-23 Jan, 4-6 Feb' },
            { label: 'March', detail: '1 Regular', sub: '10-14 Mar' },
            { label: 'Apr-May', detail: '2 OLODE', sub: '22-24 Apr, 20-22 May' },
            { label: 'June', detail: '1 Regular', sub: '16-20 Jun' },
            { label: 'Jul-Aug', detail: '2 OLODE', sub: '15-17 Jul, 19-21 Aug' },
            { label: 'Sept', detail: '1 Regular', sub: '22-26 Sep' },
            { label: 'Oct-Nov', detail: '2 OLODE', sub: '28-30 Oct, 18-20 Nov' },
            { label: 'Dec', detail: '1 Regular', sub: '15-19 Dec' },
          ],
        },
      },
      {
        heading: 'How do you book a DGCA exam session?',
        paragraphs: [
          'Five steps, and the one that catches people out is the registration window. It is not the same as the exam date and it closes weeks earlier.',
        ],
        steps: [
          ['Hold an approved computer number', 'No booking is possible until the Chief Examination Officer has approved your candidate application on DGCA Pariksha.'],
          ['Watch the registration window', 'Each session has its own opening and closing dates, published on the portal weeks ahead of the exam. Diarise the closing date, not the exam date.'],
          ['Select papers individually', 'Choose only the subjects you intend to write. Each is booked and paid for separately, so there is no penalty for taking one instead of three.'],
          ['Pay Rs 2,500 per paper', 'The fee is not refundable under any circumstances, and that includes a no-show.'],
          ['Download the admit card', 'Released before the session. Check the centre, date and reporting time carefully, and plan travel the day before if the centre is not in your city.'],
        ],
        pitfalls: [
          'Diarising the exam date instead of the registration closing date, then finding booking has shut',
          'Booking four papers in one session because the dates were convenient, then being ready for two',
          'Assuming a no-show refunds the fee; it does not',
          'Leaving admit card download to the night before and discovering a detail that needs correcting',
        ],
      },
      {
        heading: 'How many papers should you book in one session?',
        paragraphs: [
          'Two or three. Not five.',
          'Each paper needs its own revision peak, and those peaks cannot all land in the same week. Students who book all five in one session usually clear two, scrape one and fail two, and then pay Rs 5,000 to sit the failures again. Booking two, clearing both, and moving on is faster and cheaper even though it looks slower on paper.',
        ],
        example: {
          title: 'The arithmetic of booking too many papers at once',
          given: [
            'Student A books all five papers in the September session',
            'Student B books two in July OLODE, two in September, one in November OLODE',
            'Fee is Rs 2,500 per paper per attempt',
          ],
          working: [
            ['Student A first attempt', '5 papers at Rs 2,500 = Rs 12,500'],
            ['Student A typical outcome', 'Two clear, three fail on thin preparation'],
            ['Student A retakes', '3 papers at Rs 2,500 = Rs 7,500, in December'],
            ['Student A total', 'Rs 20,000, all five cleared in December'],
            ['Student B total', '5 papers at Rs 2,500 = Rs 12,500, all cleared by November'],
          ],
          answer:
            'Spreading papers across sessions cost Rs 7,500 less and finished a month earlier. The twelve-sitting calendar makes staged booking strictly better than cramming one session.',
        },
      },
      {
        heading: 'A realistic 12-month plan around the calendar',
        paragraphs: [
          'This is the plan we give students who start ground school in January with the full year ahead of them.',
        ],
        steps: [
          ['Months 1 to 2', 'Computer number approved, Class 2 medical cleared, ground school starts on Air Regulation.'],
          ['Months 3 to 4', 'Write Air Regulation and Aviation Meteorology in the first available session. Two passes on the board early changes how the rest of the year feels.'],
          ['Months 5 to 7', 'Write Technical General. Keep Air Navigation calculation practice running daily in the background.'],
          ['Months 8 to 9', 'Write Air Navigation with a dedicated study block. Book RTR(A) Part 1.'],
          ['Months 10 to 12', 'Write Technical Specific once the aircraft type is fixed. Clear RTR(A) Part 2 and begin flying.'],
        ],
        note: 'Keep at least one spare session in the plan. Students who assume a first-attempt pass in every paper end up rushing the licence application, and the eGCA processing at the end takes one to three months on its own.',
      },
      {
        heading: 'What is the difference between a regular session and OLODE?',
        paragraphs: [
          'Both are DGCA examinations at the same standard, with the same pass mark, the same fee and the same weight towards your licence. OLODE is an additional delivery mode that widens access between the four traditional sittings.',
        ],
        table: {
          headers: ['', 'Regular session', 'OLODE session'],
          rows: [
            ['Frequency in 2026', 'Four', 'Eight'],
            ['Duration', 'Five days', 'Three days'],
            ['Pass mark', '70 per cent', '70 per cent'],
            ['Fee per paper', 'Rs 2,500', 'Rs 2,500'],
            ['Value towards licence', 'Identical', 'Identical'],
          ],
          caption: 'A pass is a pass. Neither stream is regarded differently at licence issue.',
        },
      },
      {
        heading: 'How does the calendar interact with your flying schedule?',
        paragraphs: [
          'Badly, if you let it. Flying and theory compete for the same weeks, and the examination calendar is the one you cannot move.',
          'Clear as many papers as you can before you start burning flying hours. Flying is charged by the hour at roughly Rs 28,000 on a single-engine trainer, so a month spent on the ground revising during your flying phase is a month of hostel rent for nothing. Front-load the theory into the sessions available before your FTO start date.',
        ],
        table: {
          headers: ['Stage', 'Typical time', 'Calendar dependency'],
          rows: [
            ['Ground school and papers', '4 to 8 months', 'Hard: twelve fixed sittings'],
            ['200 hours of flying', '10 to 14 months', 'Soft: weather and serviceability'],
            ['RTR(A)', 'Alongside ground school', 'Its own schedule'],
            ['Licence issue on eGCA', '1 to 3 months', 'Document completeness'],
          ],
          caption: 'Total CPL timeline for a full-time student is 18 to 24 months.',
        },
        pitfalls: [
          'Starting flying with three papers outstanding, then losing flying weeks to revision',
          'Booking a paper in the same week as a planned cross-country phase',
          'Letting an early pass drift towards its validity limit while flying overruns',
        ],
      },
      {
        heading: 'Where do you check the official dates?',
        paragraphs: [
          'The examination notice and calendar are published on the DGCA Pariksha portal. Treat that as the only authority. Coaching centres, forums and this article can all fall behind a revision, and the fee you lose to a wrong date is not refundable.',
          'Check the portal when you plan the year, again when a registration window is due to open, and once more before you travel to a centre.',
        ],
        list: [
          'DGCA Pariksha at pariksha.dgca.gov.in for the examination calendar and notices',
          'Your candidate dashboard for registration windows and admit cards',
          'The Civil Aviation Requirements for rules on validity and licence issue',
        ],
      },
    ],
    glossary: [
      ['OLODE', 'Online Distance Open Delivery Examination. The additional DGCA examination stream that runs between the four regular sessions.'],
      ['Regular session', 'One of the four traditional five-day DGCA examination sittings held in March, June, September and December.'],
      ['Registration window', 'The period before each session during which candidates may book papers. It closes weeks before the exam itself.'],
      ['Admit card', 'The document released before a session confirming your centre, date and reporting time.'],
      ['Computer number', 'Your lifetime DGCA candidate ID, required before booking any paper.'],
      ['DGCA Pariksha', 'The DGCA examination portal at pariksha.dgca.gov.in where the calendar, bookings and results live.'],
      ['Sitting', 'One opportunity to write a paper. There are twelve across the 2026 calendar.'],
    ],
    quiz: [
      {
        question: 'How many DGCA examination sittings are there in 2026 across both streams?',
        options: ['Four', 'Eight', 'Twelve', 'Twenty-four'],
        answer: 2,
        explanation: 'Four regular sessions plus eight OLODE sessions gives twelve sittings across the year.',
      },
      {
        question: 'When is the third regular DGCA session of 2026?',
        options: ['10 to 14 March', '16 to 20 June', '22 to 26 September', '15 to 19 December'],
        answer: 2,
        explanation: 'Exam 03/2026 runs 22 to 26 September. March is 01/2026, June is 02/2026 and December is 04/2026.',
      },
      {
        question: 'You book a paper but cannot attend. What happens to the Rs 2,500 fee?',
        options: ['Refunded in full', 'Carried to the next session', 'Half refunded', 'Not refunded'],
        answer: 3,
        explanation: 'The fee is not refundable under any circumstances, and that includes a no-show. Book only papers you are ready to sit.',
      },
      {
        question: 'What must be in place before you can book any DGCA paper?',
        options: ['A Class 1 medical', 'An approved computer number', 'RTR(A) Part 1', '50 flying hours'],
        answer: 1,
        explanation: 'An approved DGCA computer number is the prerequisite for booking papers. The medical and RTR(A) run on separate tracks.',
      },
    ],
    faqs: [
      ['How many times a year does DGCA conduct exams?', 'In 2026 there are four regular examination sessions and eight OLODE sessions, giving flight crew candidates twelve sittings across the year.'],
      ['What is OLODE in DGCA exams?', 'OLODE is the online distance open delivery examination mode. It runs additional three-day sessions between the four regular exam windows, at the same standard and fee.'],
      ['Can I book more than one paper in the same session?', 'Yes. Papers are booked individually and most students take two or three in a single session. Booking all five at once usually backfires because the revision peaks collide.'],
      ['Is the DGCA exam fee refundable if I miss the exam?', 'No. The Rs 2,500 per paper fee is not refundable under any circumstances, including a no-show.'],
      ['Where do I check the official DGCA exam calendar?', 'The examination notice and calendar are published on the DGCA Pariksha portal at pariksha.dgca.gov.in. Confirm dates there before planning, since sessions can be revised.'],
      ['Is an OLODE pass treated the same as a regular session pass?', 'Yes. Both are DGCA examinations at the same 70 per cent standard, and a pass carries identical weight towards licence issue.'],
      ['When does registration close for a session?', 'Each session has its own registration window that opens and closes weeks before the exam dates. Diarise the closing date rather than the exam date.'],
      ['How many papers should I book in one session?', 'Two or three. Each paper needs its own revision peak, and those peaks cannot all land in the same week. Staged booking across sessions usually costs less and finishes sooner.'],
      ['Can I write papers in both streams in the same year?', 'Yes. Nothing stops you from taking one paper in an OLODE session and another in a regular session, and most students end up mixing both.'],
      ['What happens if I fail a paper in September?', 'You re-register for that subject alone. With OLODE sessions in October and November, the next opportunity is usually weeks away rather than months.'],
      ['Do exam dates change?', 'They can be revised. The published calendar is the plan, but the current notice on DGCA Pariksha is the authority, so check it before booking or travelling.'],
      ['Should I clear papers before or during flying training?', 'Before, wherever possible. Flying is charged by the hour, so revision weeks during the flying phase cost you living expenses and hangar time with nothing to show for them.'],
    ],
  },
  sources: [
    ['DGCA Pariksha, flight crew examination portal and notices', 'https://pariksha.dgca.gov.in/home'],
    ['DGCA 2026 examination calendar, regular and OLODE sessions', 'https://pilotexam.in/dgca-examination-calendar-2026-ame-cpl-atpl-olode-regular-sessions-update/'],
    ['DGCA Pariksha flight crew FAQs, examination fee', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
  ],
  related: ['dgca-computer-number', 'dgca-exam-pattern-and-passing-marks', 'dgca-exam-subjects-and-syllabus'],
})
