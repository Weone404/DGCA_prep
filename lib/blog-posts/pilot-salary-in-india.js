import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'Pilot Salary in India: First Officer to Captain Pay Explained',
  slug: 'pilot-salary-in-india',
  excerpt:
    'What Indian airline pilots earn in 2026 - junior first officer through wide-body captain, airline-wise ranges, how flying allowance works, and when the pay actually jumps.',
  coverImage: '/blog/pilot-salary-in-india.webp',
  category: CATEGORIES.career.slug,
  keywords: [
    'pilot salary in India',
    'first officer salary India',
    'captain salary India',
    'IndiGo pilot salary',
    'airline pilot pay India',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'A Junior First Officer at an Indian airline earns roughly Rs 1 lakh to Rs 1.5 lakh a month in 2026, rising to Rs 2 lakh to Rs 3.5 lakh as a First Officer within a few years. A narrow-body Captain commonly earns Rs 5 lakh to Rs 10 lakh a month. Most of the variation comes from flying allowance, which is paid per hour above a guaranteed minimum.',
    sections: [
      {
        heading: 'What is the pilot salary progression in India?',
        table: {
          headers: ['Rank', 'Experience', 'Monthly CTC', 'Annual CTC'],
          rows: [
            ['Junior First Officer', '0 to 1 year', 'Rs 1,00,000 to Rs 1,50,000', 'Rs 12 to 18 lakh'],
            ['First Officer', '1 to 3 years', 'Rs 2,00,000 to Rs 3,50,000', 'Rs 24 to 42 lakh'],
            ['Senior First Officer', '3 to 5 years', 'Rs 3,50,000 to Rs 4,50,000', 'Rs 42 to 54 lakh'],
            ['Captain, narrow-body', '6 to 10 years', 'Rs 5,00,000 to Rs 10,00,000', 'Rs 60 lakh to Rs 1.2 crore'],
            ['Senior or check captain, wide-body', '10+ years', 'Rs 12,00,000 and above', 'Rs 1.44 crore and above'],
          ],
        },
        note: 'Figures are indicative gross CTC including flying allowances, drawn from published 2026 industry salary guides. Actual pay varies by airline, fleet, roster and contract.',
      },
      {
        heading: 'How does flying allowance work?',
        paragraphs: [
          'Indian airline pay is not one fixed number. A pilot draws a fixed monthly component plus an hourly flying allowance above a guaranteed minimum number of hours. Two First Officers on the same contract can take home noticeably different amounts in the same month because one flew a heavier roster.',
          'This is why quoted salaries appear as ranges rather than figures. Ask any airline about the guaranteed hours and the per-hour rate, because those two numbers determine your real earnings far more than the headline CTC.',
        ],
        list: [
          'Fixed component: paid regardless of hours flown',
          'Flying allowance: paid per hour above the guaranteed minimum',
          'Layover allowance: for night stops away from base',
          'International sector premium: on carriers operating overseas routes',
        ],
      },
      {
        heading: 'Which Indian airlines pay the most?',
        table: {
          headers: ['Airline', 'First Officer, annual', 'Captain, annual'],
          rows: [
            ['Air India', 'Rs 24 to 50 lakh', 'Rs 80 lakh and above'],
            ['IndiGo', 'Rs 18 to 36 lakh', 'Rs 60 lakh to Rs 1.2 crore'],
            ['Akasa Air', 'Rs 22 to 42 lakh', 'Rs 60 lakh to Rs 1.1 crore'],
            ['SpiceJet', 'Rs 15 to 30 lakh', 'Rs 50 to 80 lakh'],
          ],
        },
        note: 'Ranges reflect published 2026 estimates and change with fleet expansion and hiring cycles. Treat them as planning figures, not offers.',
      },
      {
        heading: 'When does the pay actually jump?',
        paragraphs: [
          'At command upgrade. Moving from the right seat to the left roughly doubles or triples earnings at comparable seniority, because the airline is paying for command responsibility and for the years of experience behind it.',
          'That upgrade usually arrives between year five and year ten, and it depends on fleet growth more than on personal merit. During a hiring boom, upgrades come quickly. In a slow year, seniority queues stretch.',
        ],
      },
      {
        heading: 'How does the salary compare to the training investment?',
        paragraphs: [
          'A CPL costs roughly Rs 55 lakh to Rs 75 lakh, and a type rating adds Rs 15 lakh to Rs 20 lakh. Against a First Officer package in the Rs 24 lakh to Rs 42 lakh band, a disciplined pilot on a full roster typically recovers the training cost within four to six years of joining.',
          'Be honest with yourself about the gap year risk, though. The recovery clock starts when you get hired, not when your licence is issued, and hiring cycles in Indian aviation are not smooth.',
        ],
      },
      {
        heading: 'What raises a pilot income beyond the base progression?',
        list: [
          'Command upgrade, which is the single largest step',
          'Wide-body type rating and international routes',
          'Instructor and examiner roles: TRI, TRE and check pilot positions carry additional allowances',
          'Higher roster utilisation, since flying allowance is hourly',
          'Moving to a carrier with a faster upgrade queue',
        ],
      },
    ],
    faqs: [
      ['What is a fresher pilot salary in India?', 'A Junior First Officer typically earns Rs 1 lakh to Rs 1.5 lakh a month, or about Rs 12 to 18 lakh a year, in 2026.'],
      ['How much does an airline captain earn in India?', 'A narrow-body captain commonly earns Rs 5 lakh to Rs 10 lakh a month. Senior wide-body captains earn considerably more.'],
      ['Which airline pays pilots the most in India?', 'Air India is generally cited as offering the highest pay among domestic carriers, with IndiGo close behind and known for faster command upgrades.'],
      ['How long does it take to recover pilot training costs?', 'Most pilots on a full roster recover a Rs 55 to 75 lakh training investment within four to six years of joining an airline, though this depends on when they are hired.'],
      ['Do Indian pilots get paid per flying hour?', 'Partly. Pay combines a fixed monthly component with an hourly flying allowance above a guaranteed minimum, plus layover and sector allowances.'],
    ],
  },
  sources: [
    ['Pilot salary in India 2026, rank-wise and airline-wise ranges', 'https://apano.in/articles/guides/pilot-salary-in-india-2026-complete-guide'],
    ['Pilot course fees in India 2026, training cost benchmark', 'https://thepilot.in/pilot-course-fees-in-india-2026-duration-and-full-cost-breakdown/'],
  ],
  related: ['pilot-training-cost-in-india', 'dgca-atpl-requirements', 'how-to-become-a-pilot-in-india'],
})
