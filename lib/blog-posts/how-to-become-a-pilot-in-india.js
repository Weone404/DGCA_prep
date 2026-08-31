import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'How to Become a Pilot in India: The Complete DGCA Route',
  slug: 'how-to-become-a-pilot-in-india',
  excerpt:
    'The full DGCA path from Class 12 to a Commercial Pilot Licence: medical, computer number, five theory papers, 200 flying hours, RTR(A) and licence issue on eGCA.',
  coverImage: '/blog/how-to-become-a-pilot-in-india.webp',
  category: CATEGORIES.licensing.slug,
  keywords: [
    'how to become a pilot in India',
    'DGCA CPL process',
    'pilot after 12th',
    'commercial pilot licence India',
    'DGCA ground classes',
  ],
  publishedDate: '2026-08-31',
  modifiedDate: '2026-08-31',
  content: {
    intro:
      'To become an airline pilot in India you need a DGCA Commercial Pilot Licence. That means 10+2 with Physics and Mathematics, a Class 2 then Class 1 medical, a DGCA computer number, passes in five theory papers at 70% each, 200 hours of logged flight time at a DGCA-approved FTO, an RTR(A) licence, and a skill test. Most students finish in 18 to 24 months and spend roughly Rs 55 lakh to Rs 95 lakh.',
    sections: [
      {
        heading: 'What are the steps to become a pilot in India?',
        paragraphs: [
          'The order matters more than students expect. Getting the medical done before you pay a flying school protects you from the worst outcome in this career, which is spending money on training you can never use. Here is the sequence we put every student through.',
        ],
        numbered: [
          ['Finish 10+2 with Physics and Maths', 'Any recognised board works. If you took Commerce or Biology, clear Physics and Maths through NIOS before you apply for a computer number.'],
          ['Clear the Class 2 medical', 'Do this first. It is cheaper, faster, and it tells you early whether the Class 1 is realistic.'],
          ['Apply for a DGCA computer number', 'This is your lifetime candidate ID on the DGCA Pariksha portal. Without it you cannot book a single theory paper.'],
          ['Clear the Class 1 medical', 'Booked at AFCME New Delhi, IAM Bengaluru or another DGCA-approved aeromedical centre.'],
          ['Pass the DGCA theory papers', 'Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific. 70% in each.'],
          ['Complete 200 hours of flying', 'At a DGCA-approved Flying Training Organisation in India, or abroad followed by conversion.'],
          ['Clear RTR(A)', 'Two parts. A written paper and a practical radio telephony test.'],
          ['Apply for CPL issue on eGCA', 'Upload logbook, exam results, medical and skill test result. Processing usually takes 8 to 12 weeks.'],
        ],
      },
      {
        heading: 'Who is eligible to start pilot training in India?',
        paragraphs: [
          'DGCA sets a floor, not a ceiling. A candidate who meets these four conditions can start immediately.',
        ],
        table: {
          headers: ['Requirement', 'Standard'],
          rows: [
            ['Minimum age', '17 to begin training, 18 to hold a CPL'],
            ['Education', '10+2 with Physics and Mathematics from a recognised board'],
            ['Medical', 'DGCA Class 2 to start, Class 1 before commercial privileges'],
            ['English', 'ICAO Language Proficiency Level 4 or above'],
          ],
        },
        note: 'DGCA sets no upper age limit for registering as a flight crew candidate. Airline recruitment ages are set by the airlines, not by the regulator.',
      },
      {
        heading: 'How long does it take to become a commercial pilot?',
        paragraphs: [
          'Eighteen to twenty-four months is the honest answer for a student who studies full time and flies at a school with serviceable aircraft. Weather, aircraft availability and exam session dates are what stretch it, not the syllabus.',
        ],
        table: {
          headers: ['Stage', 'Typical time'],
          rows: [
            ['Class 2 and Class 1 medical', '1 to 2 months'],
            ['Ground school and DGCA papers', '4 to 8 months'],
            ['200 hours of flying', '10 to 14 months'],
            ['RTR(A)', 'Runs alongside ground school'],
            ['CPL issue on eGCA', '1 to 3 months'],
            ['Type rating (A320 or B737)', '2 to 3 months'],
          ],
        },
      },
      {
        heading: 'Should you clear DGCA papers before or during flying?',
        paragraphs: [
          'Clear as many papers as you can before you start burning flying hours. Two reasons. Flying is charged by the hour, so any month you spend on the ground revising is a month of hangar rent you are paying for nothing. And a student who already understands wind triangles and METAR decoding flies a cleaner cross-country, which means fewer repeated sorties.',
          'Students who leave theory for after 200 hours almost always take longer overall. We see it every batch.',
        ],
      },
      {
        heading: 'What does the whole thing cost?',
        paragraphs: [
          'Budget between Rs 55 lakh and Rs 75 lakh for CPL alone in 2026, and Rs 75 lakh to Rs 95 lakh if you include a type rating. Flying hours are the bulk of it.',
        ],
        list: [
          'Ground school coaching: Rs 1.5 lakh to Rs 3 lakh',
          'DGCA exam fee: Rs 2,500 per paper, per attempt',
          'Class 1 and Class 2 medicals: Rs 25,000 to Rs 50,000 combined',
          'CPL flying, 200 hours in India: Rs 55 lakh to Rs 65 lakh',
          'RTR(A) preparation and exam: Rs 30,000 to Rs 75,000',
          'Type rating: Rs 15 lakh to Rs 20 lakh',
        ],
      },
      {
        heading: 'What happens after you get the CPL?',
        paragraphs: [
          'A fresh CPL holder is not yet an airline pilot. You still need a type rating on the aircraft the airline operates, and then a line training programme with the carrier. Indian airlines currently hire through cadet programmes and direct-entry First Officer openings.',
          'A Junior First Officer in 2026 earns roughly Rs 1 lakh to Rs 1.5 lakh a month. Command upgrade, which usually arrives between year five and year ten, is where the pay jumps sharply.',
        ],
      },
    ],
    faqs: [
      ['Can I become a pilot without Physics and Maths in 12th?', 'Not directly. DGCA requires 10+2 with Physics and Mathematics for a computer number, except for the PPL category. Students from other streams clear both subjects through NIOS and then apply.'],
      ['Is NEET required to become a pilot?', 'No. NEET is a medical entrance examination and has nothing to do with pilot training. The only medical requirement is a DGCA Class 1 or Class 2 assessment.'],
      ['What is the minimum age to get a CPL in India?', 'You must be 18 years old to hold a Commercial Pilot Licence. Training and solo flying can begin at 17.'],
      ['How many hours of flying are needed for a CPL?', 'DGCA requires a minimum of 200 hours of total flight time, logged at an approved Flying Training Organisation and verified in your logbook.'],
      ['Can I do the flying abroad and the licence in India?', 'Yes. Many students fly in the United States, New Zealand or South Africa and then convert to a DGCA CPL. You still write the Indian theory papers and clear an Indian Class 1 medical.'],
    ],
  },
  sources: [
    ['DGCA Pariksha flight crew FAQs', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
    ['DGCA Civil Aviation Requirements, Section 7 Flight Crew Standards', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['dgca-cpl-eligibility', 'pilot-training-cost-in-india', 'dgca-class-1-and-class-2-medical'],
})
