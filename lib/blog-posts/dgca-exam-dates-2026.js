import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA Exam Dates 2026: Regular and OLODE Session Calendar',
  slug: 'dgca-exam-dates-2026',
  excerpt:
    'The 2026 DGCA examination calendar for flight crew candidates - four regular sessions and eight OLODE sessions, with how to plan your paper bookings around them.',
  coverImage: '/blog/dgca-exam-dates-2026.webp',
  category: CATEGORIES.exams.slug,
  keywords: [
    'DGCA exam dates 2026',
    'DGCA exam calendar',
    'OLODE exam DGCA',
    'DGCA exam schedule',
    'DGCA session dates',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'DGCA runs two examination streams for flight crew candidates in 2026: four regular sessions in March, June, September and December, and eight OLODE sessions spread across the year. Registration windows close weeks before each session, and the Rs 2,500 per-paper fee is non-refundable, so book only papers you are ready to sit.',
    sections: [
      {
        heading: 'What are the DGCA regular exam dates in 2026?',
        table: {
          headers: ['Session', 'Dates'],
          rows: [
            ['Exam 01/2026', '10 to 14 March 2026'],
            ['Exam 02/2026', '16 to 20 June 2026'],
            ['Exam 03/2026', '22 to 26 September 2026'],
            ['Exam 04/2026', '15 to 19 December 2026'],
          ],
        },
        note: 'Dates follow the published 2026 examination calendar. Always confirm against the current notice on the DGCA Pariksha portal before booking, since sessions can be revised.',
      },
      {
        heading: 'What are the OLODE session dates in 2026?',
        paragraphs: [
          'OLODE is the online distance open delivery examination stream. It gives candidates eight extra opportunities across the year instead of waiting three months for the next regular session.',
        ],
        table: {
          headers: ['OLODE session', 'Dates'],
          rows: [
            ['Session 1', '21 to 23 January 2026'],
            ['Session 2', '04 to 06 February 2026'],
            ['Session 3', '22 to 24 April 2026'],
            ['Session 4', '20 to 22 May 2026'],
            ['Session 5', '15 to 17 July 2026'],
            ['Session 6', '19 to 21 August 2026'],
            ['Session 7', '28 to 30 October 2026'],
            ['Session 8', '18 to 20 November 2026'],
          ],
        },
      },
      {
        heading: 'How many chances do you get in a year?',
        paragraphs: [
          'Twelve sittings in total across both streams in 2026. That changes how you should plan. Under the older three-sessions-a-year system a failed paper cost you four months. Now a failed paper can be re-attempted within weeks, which makes it worth booking a subject as soon as your mock scores cross 80 per cent rather than waiting for perfect readiness.',
        ],
      },
      {
        heading: 'How do you book a DGCA exam session?',
        numbered: [
          ['Hold an approved computer number', 'No booking is possible until the Chief Examination Officer has approved your candidate application.'],
          ['Watch the registration window', 'Each session has its own opening and closing dates published on DGCA Pariksha, weeks ahead of the exam.'],
          ['Select papers individually', 'Choose only the subjects you intend to write. Each is booked and paid for separately.'],
          ['Pay Rs 2,500 per paper', 'The fee is non-refundable, including for a no-show.'],
          ['Download the admit card', 'Released before the session. Check the centre, date and reporting time carefully.'],
        ],
      },
      {
        heading: 'A realistic 12-month plan around the calendar',
        list: [
          'Months 1 to 2: computer number approved, Class 2 medical cleared, ground school starts',
          'Months 3 to 4: write Air Regulation and Aviation Meteorology in the first available session',
          'Months 5 to 7: write Technical General, keep Air Navigation practice running daily',
          'Months 8 to 9: write Air Navigation, book RTR(A) Part 1',
          'Months 10 to 12: write Technical Specific once the aircraft type is fixed, clear RTR(A) Part 2',
        ],
        note: 'Keep at least one spare session in the plan. Students who assume a first-attempt pass in every paper end up rushing the licence application.',
      },
    ],
    faqs: [
      ['How many times a year does DGCA conduct exams?', 'In 2026 there are four regular examination sessions and eight OLODE sessions, giving flight crew candidates twelve sittings across the year.'],
      ['What is OLODE in DGCA exams?', 'OLODE is the online distance open delivery examination mode. It runs additional sessions between the four regular exam windows.'],
      ['Can I book more than one paper in the same session?', 'Yes. Papers are booked individually and most students take two or three in a single session.'],
      ['Is the DGCA exam fee refundable if I miss the exam?', 'No. The Rs 2,500 per paper fee is not refundable under any circumstances, including a no-show.'],
      ['Where do I check the official DGCA exam calendar?', 'The examination notice and calendar are published on the DGCA Pariksha portal at pariksha.dgca.gov.in. Confirm dates there before planning.'],
    ],
  },
  sources: [
    ['DGCA Pariksha, flight crew examination portal and notices', 'https://pariksha.dgca.gov.in/home'],
    ['DGCA 2026 examination calendar, regular and OLODE sessions', 'https://pilotexam.in/dgca-examination-calendar-2026-ame-cpl-atpl-olode-regular-sessions-update/'],
  ],
  related: ['dgca-computer-number', 'dgca-exam-pattern-and-passing-marks', 'dgca-exam-subjects-and-syllabus'],
})
