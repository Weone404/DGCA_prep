import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA Exam Pattern and Passing Marks: The 70% Rule Explained',
  slug: 'dgca-exam-pattern-and-passing-marks',
  excerpt:
    'DGCA CPL exam pattern for 2026 - 100 MCQs per paper, no negative marking, 70 per cent to pass each subject, Rs 2,500 fee per paper, and how retakes and validity work.',
  coverImage: '/blog/dgca-exam-pattern-and-passing-marks.webp',
  category: CATEGORIES.exams.slug,
  keywords: [
    'DGCA passing marks',
    'DGCA exam pattern',
    'DGCA exam fee',
    'DGCA negative marking',
    'DGCA paper validity',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'You need 70 per cent in each DGCA theory paper to pass. Papers are objective, about 100 multiple-choice questions in roughly two hours, one mark per question, with no negative marking. The examination fee is Rs 2,500 per paper and is not refundable. Failing one subject does not affect the papers you have already cleared.',
    sections: [
      {
        heading: 'What is the passing mark for DGCA exams?',
        paragraphs: [
          'Seventy per cent in every subject, treated separately. There is no aggregate and no compensation between papers. A student who scores 95 in Air Regulation and 68 in Air Navigation has passed one paper and failed the other.',
        ],
        table: {
          headers: ['Item', 'Standard'],
          rows: [
            ['Pass mark per paper', '70 per cent'],
            ['Question format', 'Objective multiple choice'],
            ['Questions per paper', 'About 100'],
            ['Marks per question', '1'],
            ['Duration', 'About 2 hours'],
            ['Negative marking', 'None'],
            ['Grace marks', 'None'],
            ['Fee per paper', 'Rs 2,500, non-refundable'],
          ],
        },
      },
      {
        heading: 'Is there negative marking in the DGCA exam?',
        paragraphs: [
          'No. DGCA does not deduct marks for wrong answers and does not award grace marks. The practical effect is simple: never leave a question blank. With four options, a considered guess on ten uncertain questions typically returns two or three marks you would otherwise have thrown away.',
        ],
      },
      {
        heading: 'What does the DGCA exam cost?',
        paragraphs: [
          'The DGCA Pariksha portal charges Rs 2,500 per paper for flight crew licence online examinations. The fee is not refundable under any circumstances, which includes a booking you fail to attend.',
          'Budget for retakes. A realistic planning figure across all five papers with a couple of second attempts is Rs 25,000 to Rs 50,000, spread over several sessions.',
        ],
        note: 'Book only the papers you have actually revised for. A no-show costs the same Rs 2,500 as a failed attempt.',
      },
      {
        heading: 'How long does a passed DGCA paper stay valid?',
        paragraphs: [
          'A pass is not permanent. DGCA applies a rolling validity window to theory passes for licence issue, commonly cited as five years, and the applicable rule sits in the Civil Aviation Requirements for flight crew licensing.',
          'Validity rules and examination procedures change from time to time. Confirm the current window against the CAR text and the examination notice on the DGCA Pariksha portal before you plan a multi-year schedule.',
        ],
      },
      {
        heading: 'How many attempts do you get?',
        paragraphs: [
          'DGCA does not prescribe a lifetime cap on attempts for CPL theory papers. You re-register for the failed subject in a later session and pay the fee again. Papers already cleared stay cleared and are not written again.',
          'The constraint that actually bites is not attempts, it is the validity window. Repeated failures in one subject can push you past the point where an early pass expires and has to be re-taken.',
        ],
      },
      {
        heading: 'How should you plan your paper order?',
        paragraphs: [
          'Sequence the papers by how they support each other rather than by difficulty.',
        ],
        numbered: [
          ['Air Regulation first', 'Pure recall, quick to build, gives you an early pass and momentum.'],
          ['Aviation Meteorology second', 'Chart and code reading overlaps with the flight planning work in Navigation.'],
          ['Technical General third', 'Aerodynamics and systems underpin the Technical Specific paper.'],
          ['Air Navigation fourth', 'The heaviest paper. Give it a dedicated block and daily calculation practice.'],
          ['Technical Specific last', 'Write it once your aircraft type is settled and you have read the flight manual.'],
        ],
      },
      {
        heading: 'How to score above 70 without guesswork',
        list: [
          'Work full papers under a two-hour clock at least twice a week, not question sets',
          'Keep an error log by topic, then revise the log rather than the whole book',
          'Learn the Indian rule, not the general principle, for every Air Regulation item',
          'Do Navigation calculations on the same navigation computer you will carry into the hall',
          'Read the question stem twice; DGCA papers punish skim reading more than weak theory',
        ],
      },
    ],
    faqs: [
      ['What is the passing percentage in DGCA exams?', 'Seventy per cent in each paper, assessed subject by subject. There is no aggregate score and no compensation between papers.'],
      ['How much is the DGCA exam fee per paper?', 'Rs 2,500 per paper for flight crew licence online examinations on the DGCA Pariksha portal. The fee is non-refundable.'],
      ['Does DGCA give grace marks?', 'No. DGCA applies no grace marks and no negative marking. Your score is exactly the number of correct answers.'],
      ['If I fail one subject, do I rewrite all of them?', 'No. Only the failed subject is rewritten. Papers you have already passed remain valid within the applicable validity window.'],
      ['Is there a limit on DGCA exam attempts?', 'DGCA does not prescribe a fixed lifetime limit on attempts for CPL theory papers. The practical limit is the validity period of the passes you already hold.'],
    ],
  },
  sources: [
    ['DGCA Pariksha, flight crew examination fee and FAQs', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
    ['DGCA Civil Aviation Requirements, flight crew licensing', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['dgca-exam-subjects-and-syllabus', 'dgca-exam-dates-2026', 'dgca-computer-number'],
})
