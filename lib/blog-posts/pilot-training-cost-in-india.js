import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'Pilot Training Cost in India: Full CPL Budget Breakdown',
  slug: 'pilot-training-cost-in-india',
  excerpt:
    'Itemised 2026 cost of a DGCA Commercial Pilot Licence in India - ground school, exam fees, medicals, 200 flying hours, RTR(A), type rating and living expenses.',
  coverImage: '/blog/pilot-training-cost-in-india.webp',
  category: CATEGORIES.cost.slug,
  keywords: [
    'pilot training cost in India',
    'CPL fees India',
    'cost of becoming a pilot',
    'DGCA CPL cost',
    'type rating cost India',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'A DGCA Commercial Pilot Licence in India costs roughly Rs 55 lakh to Rs 75 lakh in 2026, and Rs 75 lakh to Rs 95 lakh once a type rating is added. The 200 hours of flying account for most of it, at about Rs 55 lakh to Rs 65 lakh. Ground school runs Rs 1.5 lakh to Rs 3 lakh, DGCA papers cost Rs 2,500 each, and medicals total Rs 25,000 to Rs 50,000.',
    sections: [
      {
        heading: 'What does a CPL cost in India, line by line?',
        table: {
          headers: ['Item', 'Typical 2026 cost'],
          rows: [
            ['Ground school coaching', 'Rs 1.5 lakh to Rs 3 lakh'],
            ['DGCA examination fee', 'Rs 2,500 per paper, per attempt'],
            ['DGCA papers including retakes', 'Rs 25,000 to Rs 50,000'],
            ['Class 1 and Class 2 medicals', 'Rs 25,000 to Rs 50,000'],
            ['RTR(A) preparation and examination', 'Rs 30,000 to Rs 75,000'],
            ['CPL flying, 200 hours in India', 'Rs 55 lakh to Rs 65 lakh'],
            ['Hostel and living, 18 to 24 months', 'Rs 3 lakh to Rs 5 lakh'],
            ['Type rating, A320 or B737', 'Rs 15 lakh to Rs 20 lakh'],
          ],
        },
        note: 'Figures are indicative ranges from published 2026 fee guides and vary by Flying Training Organisation, aircraft type and location. Ask every school for a written per-hour rate before enrolling.',
      },
      {
        heading: 'Why is flying training the biggest cost?',
        paragraphs: [
          'You are paying for the aeroplane, the fuel, the instructor and the insurance, per hour, for 200 hours. At an all-in wet rate typical of Indian single-engine trainers, the arithmetic gets to Rs 55 lakh quickly without anything unusual happening.',
          'Two things push the number higher than the brochure. Multi-engine hours cost far more per hour than single-engine hours, and a school with poor aircraft availability keeps you on the ground paying hostel rent while your hours do not move.',
        ],
      },
      {
        heading: 'Is training abroad cheaper than in India?',
        paragraphs: [
          'Not once conversion is counted. Flying 200 hours in the United States, New Zealand or South Africa commonly lands in the Rs 60 lakh to Rs 75 lakh band, and you then pay again for Indian theory papers, an Indian Class 1 medical, a skill test and licence conversion.',
          'The real argument for training abroad is weather and aircraft availability, not price. A school with year-round flyable weather can get you to 200 hours faster, and time has its own cost.',
        ],
        list: [
          'India, 200 hours: Rs 55 lakh to Rs 65 lakh, no conversion needed',
          'Abroad, 200 hours: Rs 60 lakh to Rs 75 lakh, plus conversion of Rs 7.5 lakh to Rs 15 lakh',
          'Add visa, travel and overseas living costs to any foreign option',
        ],
      },
      {
        heading: 'How long does the money get spent over?',
        table: {
          headers: ['Stage', 'Timeline'],
          rows: [
            ['Class 2 then Class 1 medical', '1 to 2 months'],
            ['Ground school and DGCA papers', '4 to 8 months'],
            ['200 hours of flying', '10 to 14 months'],
            ['Licence issue on eGCA', '1 to 3 months'],
            ['Type rating', '2 to 3 months'],
            ['Total', '18 to 24 months'],
          ],
        },
      },
      {
        heading: 'How do students fund pilot training?',
        paragraphs: [
          'Most Indian students use an education loan against property or a co-applicant income, disbursed in tranches tied to training milestones. Several public sector banks run dedicated pilot training loan products, and airline cadet programmes sometimes arrange tie-ups with lenders.',
          'Structure the loan so disbursement matches your flying schedule. Taking the full amount up front means paying interest on money sitting in a school account while you wait for serviceable aircraft.',
        ],
      },
      {
        heading: 'Where students lose money unnecessarily',
        list: [
          'Paying a lump sum for all 200 hours in advance instead of in blocks against hours flown',
          'Booking DGCA papers before mock scores are consistently above 80 per cent, then paying Rs 2,500 again',
          'Skipping the Class 2 medical and discovering a disqualifying finding after paying school fees',
          'Choosing a school on brochure price without asking for the aircraft serviceability record',
          'Letting a theory pass expire while flying drags on, forcing a re-take'
        ],
        note: 'Ask any FTO for its average hours flown per student per month over the last year. That single number predicts your real cost better than the advertised rate.',
      },
    ],
    faqs: [
      ['How much does it cost to become a pilot in India in 2026?', 'Roughly Rs 55 lakh to Rs 75 lakh for a DGCA CPL, and Rs 75 lakh to Rs 95 lakh including a type rating on an A320 or B737.'],
      ['How much do 200 flying hours cost in India?', 'Between Rs 55 lakh and Rs 65 lakh at a DGCA-approved Flying Training Organisation, depending on aircraft type and school.'],
      ['What is the DGCA exam fee?', 'Rs 2,500 per paper for flight crew licence online examinations, and the fee is not refundable.'],
      ['Is pilot training cheaper abroad?', 'Flying abroad often costs Rs 60 lakh to Rs 75 lakh and then adds Rs 7.5 lakh to Rs 15 lakh for DGCA conversion, so the total is rarely cheaper. The advantage is faster completion, not price.'],
      ['Can I get an education loan for pilot training?', 'Yes. Several banks offer education loans for pilot training, usually against property or with a co-applicant. Structure disbursement in tranches tied to your flying milestones.'],
    ],
  },
  sources: [
    ['DGCA Pariksha, examination fee per paper', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
    ['Pilot course fees in India 2026, itemised cost breakdown', 'https://thepilot.in/pilot-course-fees-in-india-2026-duration-and-full-cost-breakdown/'],
  ],
  related: ['how-to-become-a-pilot-in-india', 'pilot-salary-in-india', 'foreign-cpl-to-dgca-conversion'],
})
