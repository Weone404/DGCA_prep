import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA Exam Pattern and Passing Marks: The 70% Rule Explained',
  slug: 'dgca-exam-pattern-and-passing-marks',
  excerpt:
    'DGCA CPL exam pattern for 2026 - 100 MCQs per paper, no negative marking, 70 per cent to pass each subject, Rs 2,500 fee per paper, and how retakes and validity work.',
  coverImage: '/blog/dgca-exam-pattern-and-passing-marks.webp',
  coverMotif: 'gauge',
  category: CATEGORIES.exams.slug,
  keywords: [
    'DGCA passing marks',
    'DGCA exam pattern',
    'DGCA exam fee',
    'DGCA negative marking',
    'DGCA paper validity',
  ],
  publishedDate: '2026-08-31',
  modifiedDate: '2026-08-31',
  content: {
    intro:
      'You need 70 per cent in each DGCA theory paper to pass. Papers are objective, about 100 multiple-choice questions in roughly two hours, one mark per question, with no negative marking. The examination fee is Rs 2,500 per paper and is not refundable. Failing one subject does not affect the papers you have already cleared.',
    keyFacts: [
      ['Pass mark', '70 per cent in every paper, no aggregate'],
      ['Questions per paper', 'About 100, one mark each'],
      ['Duration', 'About 2 hours per paper'],
      ['Negative marking', 'None, and no grace marks either'],
      ['Fee', 'Rs 2,500 per paper, not refundable'],
      ['CPL papers', 'Five subjects, each passed separately'],
      ['Sittings in 2026', 'Twelve, regular plus OLODE'],
      ['Attempt limit', 'No fixed lifetime cap prescribed'],
    ],
    sections: [
      {
        heading: 'What is the passing mark for DGCA exams?',
        paragraphs: [
          'Seventy per cent in every subject, treated separately. There is no aggregate and no compensation between papers. A student who scores 95 in Air Regulation and 68 in Air Navigation has passed one paper and failed the other.',
          'That decides how you study. Marks do not pool, so no strong subject ever carries a weak one. Your result sheet is five independent verdicts, and the weakest one sets your licence date. Thirty wrong answers is a fail, which is a thinner buffer than it sounds on a calculation paper.',
        ],
        table: {
          headers: ['Item', 'Standard'],
          rows: [
            ['Pass mark per paper', '70 per cent'],
            ['Question format', 'Objective multiple choice'],
            ['Questions per paper', 'About 100'],
            ['Marks per question', '1'],
            ['Total marks', '100'],
            ['Duration', 'About 2 hours'],
            ['Negative marking', 'None'],
            ['Grace marks', 'None'],
            ['Assessment', 'Subject by subject, no aggregate'],
            ['Fee per paper', 'Rs 2,500, non-refundable'],
          ],
          caption: 'The pattern is identical across all five CPL theory papers.',
        },
      },
      {
        heading: 'Which five papers make up the CPL theory syllabus?',
        paragraphs: [
          'Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific. Each is 100 marks with the same 70 per cent bar.',
          'They are not equally hard. Air Navigation is the most failed paper because roughly half its marks come from problems worked on a CR-3 or navigation computer against the clock. Air Regulation is the opposite, and disciplined revision puts 90 per cent on the board.',
        ],
        table: {
          headers: ['Paper', 'What it tests', 'Difficulty in practice'],
          rows: [
            ['Air Navigation', 'Calculations and flight planning, about half the marks on a CR-3', 'Highest failure rate'],
            ['Aviation Meteorology', 'Charts, codes, METAR and TAF decoding', 'Moderate, rewards chart practice'],
            ['Air Regulation', 'Recall of the Indian rule as written', 'Easiest to score 90 per cent in'],
            ['Technical General', 'Aerodynamics, systems, instruments, engines', 'Broad rather than deep'],
            ['Technical Specific', 'Systems and limitations of your aircraft type', 'Manageable once the type is fixed'],
          ],
          caption: 'PPL candidates write only three: Air Regulation, Aviation Meteorology and Air Navigation.',
        },
        note: 'Technical Specific is tied to an aircraft type. Do not book it before the type is settled and you have read the flight manual or POH, because the paper is written against that document.',
      },
      {
        heading: 'Is there negative marking in the DGCA exam?',
        paragraphs: [
          'No. DGCA deducts nothing for a wrong answer and awards no grace marks. Your score is the count of correct answers, nothing added and nothing taken away.',
          'So never leave a question blank. A blank is a guaranteed zero. A guess across four options is a free draw at one mark. Students still hand in papers with ten empty answers because they ran out of time, which is marks given away for nothing.',
        ],
        example: {
          title: 'What guessing is worth on a DGCA paper',
          given: [
            '100 questions, one mark each, no negative marking, pass at 70',
            'You are confident on 66 answers and unsure on 12 more',
            'The remaining 22 sit blank with ten minutes on the clock',
          ],
          working: [
            ['Hand it in as it stands', '66 marks, a fail by 4'],
            ['Guess the 22 blanks, four options each', 'About one in four lands, so roughly 5 to 6 marks'],
            ['Running total', 'About 71 to 72'],
            ['Add the 12 uncertain ones, narrowed to two options', 'Roughly 6 more marks'],
            ['Cost of leaving them blank instead', 'Zero marks gained, Rs 2,500 on a retake'],
          ],
          answer:
            'Filling every blank turns a 66-mark fail into a paper either side of the line. It will not pass a subject you never studied, but on a borderline paper it is the difference between your licence file moving and another Rs 2,500 leaving your account.',
        },
        note: 'Flag uncertain questions as you go so you can return to them. Panic guessing in the last ninety seconds is worth less than a considered elimination with three minutes in hand.',
      },
      {
        heading: 'How should you spend the two hours in the hall?',
        paragraphs: [
          'About 100 questions in about 120 minutes is a shade over a minute each. Comfortable in Air Regulation. Tight in Air Navigation, where one wind-triangle problem eats four minutes if you start it cold.',
          'Run the paper in passes, not straight through. Most unfinished DGCA papers belong to a student who spent eleven minutes on question 14 because the answer felt close.',
        ],
        steps: [
          ['Minutes 0 to 5, scan', 'Confirm the question count and see where the calculation questions cluster.'],
          ['Minutes 5 to 60, first pass', 'Answer what you know cold. Flag and skip anything over ninety seconds.'],
          ['Minutes 60 to 100, second pass', 'Work the flagged calculations on the navigation computer you practised with.'],
          ['Minutes 100 to 112, third pass', 'Eliminate options on whatever is still open, then commit.'],
          ['Minutes 112 to 120, fill every blank', 'No negative marking means an unanswered question is a mark you chose not to try for.'],
        ],
        pitfalls: [
          'Spending ten minutes on one stubborn question and leaving six easier ones untouched',
          'Reading a stem once and missing the word not or except',
          'Using an unfamiliar navigation computer borrowed the night before',
          'Leaving blanks because some other examination you wrote had negative marking',
          'Working in feet when the question gives metres',
        ],
      },
      {
        heading: 'What does the DGCA exam cost, and what do retakes add?',
        paragraphs: [
          'DGCA Pariksha charges Rs 2,500 per paper for flight crew licence online examinations. The fee is not refundable under any circumstances, including a booking you fail to attend. A no-show costs exactly what a fail costs.',
          'Five papers cleared first time is Rs 12,500. Nobody should budget for that. Plan on Rs 25,000 to Rs 50,000 across all five with a couple of second attempts, spread over several sessions.',
        ],
        example: {
          title: 'The retake arithmetic across five papers',
          given: [
            'Rs 2,500 per paper, non-refundable',
            'Five CPL papers to clear',
            'Three cleared first time, two needing a second attempt',
            'One booking missed because of a clashing flying detail',
          ],
          working: [
            ['First attempt at all five', '5 x Rs 2,500 = Rs 12,500'],
            ['Second attempt at two subjects', '2 x Rs 2,500 = Rs 5,000'],
            ['The missed booking, forfeited in full', 'Rs 2,500'],
            ['Running total', 'Rs 20,000'],
            ['A third go at Air Navigation, the usual repeat', 'Rs 2,500, taking it to Rs 22,500'],
            ['A weaker student, nine to twelve bookings', 'Rs 22,500 to Rs 30,000'],
          ],
          answer:
            'Rs 25,000 to Rs 50,000 is the honest planning band against a best case of Rs 12,500. That gap is self-inflicted. Every rupee above Rs 12,500 buys another go at a paper you were not ready for, and another session gone.',
        },
        note: 'Book only what you have revised for. Booking a paper as motivation to study is the most expensive study technique in Indian aviation.',
      },
      {
        heading: 'How many DGCA exam sittings are there in 2026?',
        paragraphs: [
          'Twelve. Four regular sessions across the year, and eight OLODE sessions, the online distance open delivery examination, filling the gaps between them.',
          'That density changes retake planning. A failed paper in March does not cost you three months, because OLODE sittings fall in April and May before the June regular session. Registration windows close weeks ahead, so the calendar only helps students who watch the notice.',
        ],
        table: {
          headers: ['Session type', 'Dates in 2026'],
          rows: [
            ['Regular session 1', '10 to 14 March'],
            ['Regular session 2', '16 to 20 June'],
            ['Regular session 3', '22 to 26 September'],
            ['Regular session 4', '15 to 19 December'],
            ['OLODE, first half', '21 to 23 Jan, 4 to 6 Feb, 22 to 24 Apr, 20 to 22 May'],
            ['OLODE, second half', '15 to 17 Jul, 19 to 21 Aug, 28 to 30 Oct, 18 to 20 Nov'],
          ],
          caption: 'Twelve sittings in the year. Confirm every date against the current examination notice on DGCA Pariksha.',
        },
        pitfalls: [
          'Waiting for the next regular session when an OLODE sitting four weeks away would have done',
          'Losing a quarter of the plan to a registration form you did not submit in time',
          'Booking all five papers in one session because the dates suited you, then revising none properly',
          'Treating a published calendar as final; the DGCA examination notice is the authority',
        ],
      },
      {
        heading: 'What do you need before you can book a paper?',
        paragraphs: [
          'A computer number. It is your lifetime candidate ID, approved by the Chief Examination Officer at DGCA on pariksha.dgca.gov.in, and without it you cannot book a single paper. One per candidate, for life.',
          'Approval is not instant. Students who apply in the same month as the registration window miss the session and wait for the next one, which is weeks lost over a form that takes an evening.',
        ],
        table: {
          headers: ['Requirement', 'Detail'],
          rows: [
            ['Computer number', 'Lifetime ID approved by the Chief Examination Officer, DGCA'],
            ['Portal', 'pariksha.dgca.gov.in'],
            ['Education', '10+2 with Physics and Mathematics, except for the PPL category'],
            ['Number per candidate', 'One, used for every paper you ever write'],
            ['Maximum age', 'None for registration'],
            ['Timing', 'Approved before you book any paper'],
          ],
        },
        steps: [
          ['Register on DGCA Pariksha', 'Complete the candidate profile before the registration window opens.'],
          ['Apply for the computer number', 'Upload the 10+2 marksheet showing Physics and Mathematics, ID and photograph.'],
          ['Wait for approval', 'Track the status. Do not plan a session date around an unapproved application.'],
          ['Book only what you are ready for', 'Rs 2,500 per paper leaves your account on booking and does not come back.'],
          ['Print the admit card', 'Check the reporting time and centre address well before the day.'],
        ],
      },
      {
        heading: 'How many attempts do you get at a DGCA paper?',
        paragraphs: [
          'DGCA does not prescribe a fixed lifetime cap on attempts for CPL theory papers. You re-register for the failed subject in a later session and pay the fee again. Papers already cleared stay cleared and are not written again.',
          'The constraint that bites is not attempts, it is validity. Repeated failures in one subject push you towards the point where an early pass expires and has to be taken again, so you pay Rs 2,500 to re-earn a mark you already had.',
        ],
        note: 'If a subject has beaten you twice, change something concrete before booking a third time. New question bank, full papers under the clock, an error log by topic. Same preparation, same result, another Rs 2,500.',
      },
      {
        heading: 'How long does a passed DGCA paper stay valid?',
        paragraphs: [
          'A pass is not permanent. DGCA applies a rolling validity window to theory passes for licence issue, commonly cited as five years, with the rule sitting in the Civil Aviation Requirements for flight crew licensing.',
          'Treat that figure as a planning assumption, not a settled fact. Published sources conflict, and procedures change. Confirm the current window against the CAR text and the examination notice on DGCA Pariksha before you plan a multi-year schedule.',
          'The shape of the risk matters more than the number. Clear Air Regulation in year one, then spend four years fighting Air Navigation, and it is the easy early pass that expires while you are busy with the hard one.',
        ],
        list: [
          'Cluster your papers so the gap between the first pass and the last stays short',
          'Write the hardest paper early enough that repeat attempts do not eat the window',
          'Check the rule in force on the date you apply for licence issue, not the one you read at the start',
          'Keep every result sheet and payment receipt for the eGCA licence application',
        ],
      },
      {
        heading: 'In what order should you write the five papers?',
        paragraphs: [
          'Sequence them by how they support each other, not by difficulty. Air Regulation gives a fast first pass. Meteorology teaches the chart and code reading that Navigation flight planning demands. Technical General builds the base Technical Specific assumes you hold. Air Navigation, the heaviest paper, gets a dedicated block instead of being squeezed between two others.',
        ],
        diagram: {
          type: 'ladder',
          title: 'The order to write the five DGCA CPL papers',
          caption:
            'Each rung supports the one above it. Air Regulation is the quick early pass, Air Navigation gets a dedicated study block, and Technical Specific waits until the aircraft type and its flight manual are settled.',
          data: [
            { label: '1. Air Regulation', detail: 'Pure recall, quickest to build, easiest paper to score 90 per cent in.' },
            { label: '2. Aviation Meteorology', detail: 'Charts and codes, the reading skill Navigation flight planning needs.' },
            { label: '3. Technical General', detail: 'Aerodynamics and systems, the base Technical Specific assumes.' },
            { label: '4. Air Navigation', detail: 'The heaviest paper. Dedicated block, daily CR-3 practice.' },
            { label: '5. Technical Specific', detail: 'Written once the type is settled and the flight manual read.' },
          ],
        },
        note: 'Nothing in the regulations forces this order. It is simply the sequence that wastes the least study time, and the one that gets a nervous student an early pass to build on.',
      },
      {
        heading: 'How to score above 70 without relying on guesswork',
        paragraphs: [
          'Guessing rescues a borderline paper. It does not pass a subject you never studied. Students who clear all five first time do a short list of unglamorous things for months, not for the fortnight before the session.',
        ],
        list: [
          'Work full papers under a two-hour clock at least twice a week, not question sets',
          'Keep an error log by topic, then revise the log rather than the whole book',
          'Answer Air Regulation questions from Indian law, since the ICAO principle and the Indian rule often differ',
          'Do Navigation calculations on the same navigation computer you will carry into the hall',
          'Slow down on the stem. More marks are lost to misreading a question than to not knowing the topic',
          'Decode a live METAR and TAF every morning until the format stops needing thought',
        ],
        note: 'Booking at a mock score of 72 is a coin toss. Booking at 85 means an off day, a noisy centre and three careless slips still leave you above the line.',
      },
      {
        heading: 'How do PPL and RTR(A) differ from the CPL papers?',
        paragraphs: [
          'Not everyone writes five. PPL candidates write three: Air Regulation, Aviation Meteorology and Air Navigation. They are also exempt from the 10+2 Physics and Mathematics requirement that applies to the CPL route.',
          'RTR(A) is a separate licence examination, not a DGCA theory paper, and it carries its own pass marks. Part 1 is a computer-based MCQ of about an hour at 70 per cent. Part 2 is a practical oral and simulated transmission at 50 per cent. Students confuse the two and prepare for the wrong thing in the wrong month.',
        ],
        table: {
          headers: ['Examination', 'Papers', 'Pass mark'],
          rows: [
            ['CPL theory', 'Five: Navigation, Meteorology, Regulation, Technical General, Technical Specific', '70 per cent in each'],
            ['PPL theory', 'Three: Air Regulation, Aviation Meteorology, Air Navigation', '70 per cent in each'],
            ['RTR(A) Part 1', 'Computer-based MCQ, about one hour', '70 per cent'],
            ['RTR(A) Part 2', 'Practical oral and simulated transmission', '50 per cent'],
          ],
          caption: 'RTR(A) is a separate licence examination and does not sit on the DGCA theory paper schedule.',
        },
        note: 'PPL needs 40 hours and age 17, CPL needs 200 hours and age 18, ATPL needs 1,500 hours and age 21. The theory pass mark stays at 70 per cent throughout.',
      },
    ],
    glossary: [
      ['DGCA Pariksha', 'The examination portal at pariksha.dgca.gov.in where you get a computer number, book papers and pay the Rs 2,500 fee.'],
      ['Computer number', 'Your lifetime candidate ID, approved by the Chief Examination Officer. Required before booking any paper.'],
      ['OLODE', 'Online distance open delivery examination. The eight extra sessions that run between the four regular ones.'],
      ['Regular session', 'One of the four scheduled DGCA examination windows in the year, each running across five days.'],
      ['CR-3', 'A circular slide-rule navigation computer for wind, drift, groundspeed and fuel. Roughly half of Air Navigation is worked on one.'],
      ['Technical Specific', 'The CPL paper written against a chosen aircraft type, covering its systems and limitations.'],
      ['CAR', 'Civil Aviation Requirements. The DGCA rule documents carrying licensing conditions, including theory pass validity.'],
      ['RTR(A)', 'Radio Telephony Restricted (Aeronautical). A separate two-part licence examination at 70 and 50 per cent.'],
    ],
    quiz: [
      {
        question: 'A student scores 95 in Air Regulation and 68 in Air Navigation. What is the result?',
        options: [
          'Both passed, since the average is above 70',
          'Air Regulation passed, Air Navigation failed',
          'Both papers must be written again',
          'Air Navigation passes on grace marks',
        ],
        answer: 1,
        explanation: 'Papers are assessed subject by subject at 70 per cent. No aggregate, no compensation, no grace marks, so the 68 fails and the 95 stands.',
      },
      {
        question: 'Ten minutes left, twenty-two questions unanswered. What should you do?',
        options: [
          'Leave them blank to avoid losing marks',
          'Answer only the ones you are certain about',
          'Fill in every blank with a considered guess',
          'Hand the paper in early',
        ],
        answer: 2,
        explanation: 'There is no negative marking. A blank is a certain zero, while a guess across four options returns about one mark in four, or roughly five on twenty-two questions.',
      },
      {
        question: 'What is the realistic planning figure for DGCA theory fees across five papers?',
        options: [
          'Rs 12,500 flat, with no allowance for retakes',
          'Rs 25,000 to Rs 50,000',
          'Rs 1 lakh to Rs 2 lakh',
          'Nothing, the fee is refunded on a pass',
        ],
        answer: 1,
        explanation: 'Five papers at Rs 2,500 is Rs 12,500 at best, but with a couple of second attempts and a forfeited booking, Rs 25,000 to Rs 50,000 is honest.',
      },
      {
        question: 'How many DGCA examination sittings are scheduled across 2026?',
        options: ['Four', 'Eight', 'Twelve', 'Two'],
        answer: 2,
        explanation: 'Four regular sessions plus eight OLODE sessions makes twelve. Registration windows close weeks before each one.',
      },
    ],
    faqs: [
      ['What is the passing percentage in DGCA exams?', 'Seventy per cent in each paper, assessed subject by subject. There is no aggregate and no compensation between papers, so a high mark in one subject does nothing for a low mark in another.'],
      ['How much is the DGCA exam fee per paper?', 'Rs 2,500 per paper for flight crew licence online examinations on DGCA Pariksha. The fee is non-refundable under any circumstances, including a booking you pay for and never attend.'],
      ['Does DGCA give grace marks?', 'No. DGCA applies no grace marks and no negative marking. Your score is exactly the number of correct answers, so 69 out of 100 is a fail and nothing changes it.'],
      ['If I fail one subject, do I rewrite all of them?', 'No. Only the failed subject is written again. Papers already passed remain valid within the applicable validity window, and you pay Rs 2,500 for the failed subject alone.'],
      ['Is there a limit on DGCA exam attempts?', 'DGCA does not prescribe a fixed lifetime limit for CPL theory papers. The practical limit is the validity of the passes you already hold, since a long run of failures can outlast an early pass.'],
      ['How long is a DGCA theory pass valid?', 'It is commonly cited as a rolling five years for licence issue, but sources conflict on the detail. Confirm the current window against the CAR text and the DGCA Pariksha examination notice.'],
      ['How many questions are in a DGCA paper?', 'About 100 objective multiple-choice questions in roughly two hours, one mark each for a total of 100 marks. You need 70 of those marks to pass the subject.'],
      ['Which DGCA paper is the hardest?', 'Air Navigation. It is calculation-heavy and time-bound, with roughly half the marks coming from problems worked on a CR-3, and it carries the highest failure rate of the five.'],
      ['Which DGCA paper is easiest to score in?', 'Air Regulation. It is recall-based and disciplined revision commonly puts 90 per cent on the board. Learn the Indian rule as written rather than the general principle behind it.'],
      ['How many DGCA exam sessions are there in 2026?', 'Twelve sittings. Four regular sessions in March, June, September and December, plus eight OLODE sessions across the rest of the year. Registration closes weeks before each.'],
      ['Do I need a computer number before booking a paper?', 'Yes. It is your lifetime candidate ID, approved by the Chief Examination Officer at DGCA on pariksha.dgca.gov.in, and no paper can be booked without it. Apply well before the window.'],
      ['How many papers does a PPL candidate write?', 'Three: Air Regulation, Aviation Meteorology and Air Navigation, each at 70 per cent. PPL candidates are exempt from the 10+2 Physics and Mathematics rule that applies to CPL.'],
    ],
  },
  sources: [
    ['DGCA Pariksha, flight crew examination fee and FAQs', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
    ['DGCA Civil Aviation Requirements, flight crew licensing', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['dgca-exam-subjects-and-syllabus', 'dgca-exam-dates-2026', 'dgca-computer-number'],
})
