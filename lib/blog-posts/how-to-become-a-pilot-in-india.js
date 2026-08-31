import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'How to Become a Pilot in India: The Complete DGCA Route',
  slug: 'how-to-become-a-pilot-in-india',
  excerpt:
    'The full DGCA path from Class 12 to a Commercial Pilot Licence: medicals, computer number, five theory papers, 200 flying hours, RTR(A) and licence issue on eGCA, with timelines and costs at every stage.',
  coverImage: '/blog/how-to-become-a-pilot-in-india.webp',
  coverMotif: 'route',
  category: CATEGORIES.licensing.slug,
  keywords: [
    'how to become a pilot in India',
    'DGCA CPL process',
    'pilot after 12th',
    'commercial pilot licence India',
    'DGCA ground classes',
    'pilot training steps India',
  ],
  publishedDate: '2026-08-31',
  modifiedDate: '2026-08-31',
  content: {
    intro:
      'To become an airline pilot in India you need a DGCA Commercial Pilot Licence. That means 10+2 with Physics and Mathematics, a Class 2 then Class 1 medical, a DGCA computer number, passes in five theory papers at 70 per cent each, 200 hours of logged flight time at a DGCA-approved FTO, an RTR(A) licence and a skill test. Most students finish in 18 to 24 months and spend roughly Rs 55 lakh to Rs 95 lakh.',
    keyFacts: [
      ['Minimum age for CPL', '18 years (training may start at 17)'],
      ['Education required', '10+2 with Physics and Mathematics'],
      ['Theory papers', 'Five, at 70 per cent each'],
      ['Flight time required', '200 hours minimum'],
      ['Medical', 'Class 2 to train, Class 1 for commercial privileges'],
      ['Radio licence', 'RTR(A), two parts'],
      ['Typical duration', '18 to 24 months'],
      ['Typical cost', 'Rs 55 lakh to Rs 95 lakh including type rating'],
    ],
    sections: [
      {
        heading: 'What are the steps to become a pilot in India?',
        paragraphs: [
          'The order matters more than students expect. Getting the medical done before you pay a flying school protects you from the worst outcome in this career, which is spending money on training you can never use. A colour vision deficiency discovered in month one costs you a consultation fee. The same finding discovered in month nine costs you several lakh rupees and a year.',
          'Here is the sequence we put every student through, and the reasoning behind each position in the queue.',
        ],
        steps: [
          ['Finish 10+2 with Physics and Maths', 'Any recognised board works. If you took Commerce or Biology, clear Physics and Mathematics as additional subjects through NIOS before you apply for a computer number. DGCA accepts the NIOS route and a large share of every ground school batch arrives that way.'],
          ['Clear the Class 2 medical', 'Do this first. It is cheaper, faster and it tells you early whether the Class 1 is realistic. Treat it as a screening test, not a formality.'],
          ['Apply for a DGCA computer number', 'This is your lifetime candidate ID on the DGCA Pariksha portal. Without it you cannot book a single theory paper, and approval is not instant.'],
          ['Clear the Class 1 medical', 'Booked at a DGCA-approved aeromedical centre such as AFCME New Delhi or the Institute of Aerospace Medicine in Bengaluru. Carry every past medical record you hold.'],
          ['Pass the DGCA theory papers', 'Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific, each at 70 per cent with no negative marking.'],
          ['Complete 200 hours of flying', 'At a DGCA-approved Flying Training Organisation in India, or abroad followed by conversion. Hour sub-minima for cross-country, night and instrument time apply on top of the total.'],
          ['Clear RTR(A)', 'A written Part 1 at 70 per cent and a practical radio telephony Part 2 at 50 per cent. Your ICAO English Language Proficiency is assessed alongside it.'],
          ['Apply for CPL issue on eGCA', 'Upload logbook, exam results, medical and skill test result. Processing usually takes 8 to 12 weeks.'],
        ],
        totalTime: 'P24M',
        diagram: {
          type: 'timeline',
          title: 'The DGCA CPL timeline from Class 12 to licence issue',
          caption:
            'Stage durations for a full-time student at a school with reliable aircraft availability. Weather and examination session dates are what stretch this, not the syllabus itself.',
          data: [
            { label: 'Medicals', detail: '1-2 months', sub: 'Class 2, then Class 1' },
            { label: 'Ground school', detail: '4-8 months', sub: 'Five theory papers' },
            { label: 'Flying', detail: '10-14 months', sub: '200 hours' },
            { label: 'RTR(A)', detail: 'Parallel', sub: 'Parts 1 and 2' },
            { label: 'Licence issue', detail: '1-3 months', sub: 'eGCA processing' },
            { label: 'Type rating', detail: '2-3 months', sub: 'A320 or B737' },
          ],
        },
      },
      {
        heading: 'Who is eligible to start pilot training in India?',
        paragraphs: [
          'DGCA sets a floor, not a ceiling. A candidate who meets these four conditions can start immediately, and nothing else in the regulations blocks entry.',
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
        note: 'DGCA sets no upper age limit for registering as a flight crew candidate. Airline recruitment ages are set by the airlines, not by the regulator, so a career changer at 32 can hold a licence but should check cadet programme age caps before committing the money.',
      },
      {
        heading: 'What are the different pilot licences in India?',
        paragraphs: [
          'Four licences sit on the same ladder, and each one is defined by an age and an hours figure. You climb them in order, and the licence you hold determines what you are legally allowed to be paid for.',
        ],
        diagram: {
          type: 'ladder',
          title: 'Indian pilot licence ladder',
          caption:
            'Minimum age and flight time for each licence under Schedule II of the Aircraft Rules, 1937. Sub-minima for cross-country, night and instrument time apply on top of the totals shown.',
          data: [
            { label: 'SPL - Student Pilot Licence', detail: 'Age 16, no minimum hours. Permits supervised training flights.' },
            { label: 'PPL - Private Pilot Licence', detail: 'Age 17, 40 hours. Fly privately, never for hire or reward.' },
            { label: 'CPL - Commercial Pilot Licence', detail: 'Age 18, 200 hours. Fly for payment, typically as First Officer.' },
            { label: 'ATPL - Airline Transport Pilot Licence', detail: 'Age 21, 1,500 hours. Command a scheduled airliner.' },
          ],
        },
        note: 'PPL is optional on the commercial route. Many Indian students go straight for the CPL and never issue a separate PPL, because the hours count towards the same 200-hour total either way.',
      },
      {
        heading: 'How long does it take to become a commercial pilot?',
        paragraphs: [
          'Eighteen to twenty-four months is the honest answer for a student who studies full time and flies at a school with serviceable aircraft. Anyone quoting twelve months is selling you something.',
          'What actually stretches the timeline is rarely the syllabus. It is weather, aircraft availability and the examination calendar. A monsoon month at a school with two serviceable aircraft and forty students can produce less than five flying hours per student.',
        ],
        table: {
          headers: ['Stage', 'Typical time', 'What controls it'],
          rows: [
            ['Class 2 and Class 1 medical', '1 to 2 months', 'Appointment availability at approved centres'],
            ['Ground school and DGCA papers', '4 to 8 months', 'Examination session dates'],
            ['200 hours of flying', '10 to 14 months', 'Weather and aircraft serviceability'],
            ['RTR(A)', 'Runs alongside ground school', 'Your own practice discipline'],
            ['CPL issue on eGCA', '1 to 3 months', 'Document completeness'],
            ['Type rating', '2 to 3 months', 'Simulator slot availability'],
          ],
        },
        pitfalls: [
          'Choosing a school on advertised price without asking how many hours the average student actually flew per month last year',
          'Assuming the 200 hours run continuously; most students lose six to eight weeks to weather and maintenance',
          'Booking a theory paper in the same month you applied for the computer number, then missing the registration window',
        ],
      },
      {
        heading: 'Should you clear DGCA papers before or during flying?',
        paragraphs: [
          'Clear as many papers as you can before you start burning flying hours. Two reasons, and both are financial.',
          'Flying is charged by the hour, so any month you spend on the ground revising is a month of hostel rent and living costs you are paying for nothing. And a student who already understands wind triangles and METAR decoding flies a cleaner cross-country, which means fewer repeated sorties at roughly Rs 27,000 to Rs 32,000 an hour.',
          'Students who leave theory for after 200 hours almost always take longer overall. We see it every batch, and the pattern is consistent enough that we now plan intakes around it.',
        ],
        example: {
          title: 'What one repeated navigation sortie actually costs',
          given: [
            'Wet hourly rate on a single-engine trainer: about Rs 28,000',
            'A cross-country navigation exercise: 2.0 hours',
            'Student repeats it once because the flight plan and diversion calculations were wrong',
          ],
          working: [
            ['Cost of the original sortie', '2.0 hours at Rs 28,000 = Rs 56,000'],
            ['Cost of the repeat', 'Another 2.0 hours = Rs 56,000'],
            ['Extra cost caused by weak ground theory', 'Rs 56,000 for one exercise'],
            ['Typical repeats across a 200-hour course', 'Three to six sorties in a weak-theory student'],
          ],
          answer:
            'One weak navigation foundation commonly adds Rs 1.7 lakh to Rs 3.4 lakh to the course. Ground school for the whole syllabus costs Rs 1.5 lakh to Rs 3 lakh, so clearing theory first usually pays for itself before you reach hour 100.',
        },
      },
      {
        heading: 'What does the whole thing cost?',
        paragraphs: [
          'Budget between Rs 55 lakh and Rs 75 lakh for the CPL alone in 2026, and Rs 75 lakh to Rs 95 lakh if you include a type rating. Flying hours are the bulk of it and everything else is a rounding error by comparison.',
        ],
        diagram: {
          type: 'bars',
          title: 'Where the money goes in a 2026 CPL budget',
          caption:
            'Indicative mid-point figures from published 2026 fee guides. Flying training dominates every other line by an order of magnitude, which is why school selection matters more than coaching selection.',
          data: [
            { label: 'CPL flying, 200 hours', value: 60, display: 'Rs 55-65 lakh', highlight: true },
            { label: 'Type rating (A320/B737)', value: 17.5, display: 'Rs 15-20 lakh' },
            { label: 'Hostel and living', value: 4, display: 'Rs 3-5 lakh' },
            { label: 'Ground school', value: 2.25, display: 'Rs 1.5-3 lakh' },
            { label: 'Medicals (both classes)', value: 0.375, display: 'Rs 25-50k' },
            { label: 'DGCA papers', value: 0.375, display: 'Rs 25-50k' },
            { label: 'RTR(A)', value: 0.525, display: 'Rs 30-75k' },
          ],
        },
        note: 'The DGCA examination fee is Rs 2,500 per paper and is not refundable, including for a no-show. Book only papers you have actually revised for.',
      },
      {
        heading: 'Is it cheaper to train abroad?',
        paragraphs: [
          'Not once conversion is counted. Flying 200 hours in the United States, New Zealand or South Africa commonly lands in the Rs 60 lakh to Rs 75 lakh band, and you then pay again for Indian theory papers, an Indian Class 1 medical, a skill test and licence conversion at roughly Rs 7.5 lakh to Rs 15 lakh.',
          'The real argument for training abroad is weather and aircraft availability, not price. A school in Arizona or Northland with year-round flyable conditions can get you to 200 hours in eight months rather than fourteen, and time has its own cost in hostel rent, living expenses and delayed earnings.',
        ],
        table: {
          headers: ['Route', 'Flying cost', 'Extra steps', 'Realistic total'],
          rows: [
            ['Train in India', 'Rs 55-65 lakh', 'None', 'Rs 55-70 lakh'],
            ['Train abroad, convert', 'Rs 60-75 lakh', 'Conversion Rs 7.5-15 lakh', 'Rs 68-90 lakh'],
          ],
        },
      },
      {
        heading: 'How do students pay for pilot training?',
        paragraphs: [
          'Most Indian students use an education loan against property or with a co-applicant income, disbursed in tranches tied to training milestones. Several public sector banks run dedicated pilot training loan products, and some airline cadet programmes arrange tie-ups with lenders.',
          'Structure the loan so disbursement matches your flying schedule. Taking the full amount up front means paying interest on money sitting in a school account while you wait for serviceable aircraft.',
        ],
        list: [
          'Never pay a lump sum for all 200 hours in advance; pay in blocks against hours actually flown',
          'Ask for the per-hour wet rate in writing, and confirm what it includes',
          'Confirm whether landing fees, navigation charges and instructor time are inside or outside the quoted rate',
          'Keep three to four lakh rupees of headroom for repeat sorties and a retaken paper',
        ],
      },
      {
        heading: 'What happens after you get the CPL?',
        paragraphs: [
          'A fresh CPL holder is not yet an airline pilot. You still need a type rating on the aircraft the airline operates, and then a line training programme with the carrier. Indian airlines currently hire through cadet programmes and direct-entry First Officer openings.',
          'A Junior First Officer in 2026 earns roughly Rs 1 lakh to Rs 1.5 lakh a month. Command upgrade, which usually arrives between year five and year ten, is where the pay jumps sharply, because the airline is paying for command responsibility rather than for hours.',
        ],
        table: {
          headers: ['Rank', 'Experience', 'Monthly CTC'],
          rows: [
            ['Junior First Officer', '0 to 1 year', 'Rs 1,00,000 to Rs 1,50,000'],
            ['First Officer', '1 to 3 years', 'Rs 2,00,000 to Rs 3,50,000'],
            ['Senior First Officer', '3 to 5 years', 'Rs 3,50,000 to Rs 4,50,000'],
            ['Captain, narrow-body', '6 to 10 years', 'Rs 5,00,000 to Rs 10,00,000'],
          ],
        },
        note: 'Figures are indicative gross CTC including flying allowances, drawn from published 2026 salary guides. Actual pay varies by airline, fleet and roster.',
      },
      {
        heading: 'What can stop you from becoming a pilot?',
        paragraphs: [
          'Very few things are absolute disqualifiers, but a handful are worth knowing before you spend money. Most medical findings cause a deferral while a specialist reviews your file, not a permanent refusal.',
        ],
        list: [
          'Colour vision deficiency is the most common hard stop, and it is testable at any ophthalmologist for a few hundred rupees',
          'Uncorrected visual acuity or refractive error outside DGCA limits',
          'Cardiac findings on the resting ECG that need further work-up',
          'Hearing loss beyond the audiometric thresholds used in the Class 1',
          'A concealed medical history discovered during the assessment, which is treated far more seriously than the finding itself',
        ],
        note: 'Physics and Mathematics in Class 12 is a paperwork requirement, not a talent test. It is fixable through NIOS in a few months and stops nobody who is willing to do the work.',
      },
      {
        heading: 'A realistic month-by-month plan for your first year',
        paragraphs: [
          'This is the plan we hand to students joining ground school straight after Class 12 results. It assumes full-time study and no gap between stages.',
        ],
        list: [
          'Months 1 to 2: colour vision test, Class 2 medical, computer number application submitted, ground school begins',
          'Months 3 to 4: Air Regulation and Aviation Meteorology written in the first available session; Class 1 medical booked',
          'Months 5 to 7: Technical General written; RTR(A) Part 1 preparation runs alongside; daily navigation calculation practice',
          'Months 8 to 9: Air Navigation written; RTR(A) Part 1 attempted; FTO shortlisted and visited in person',
          'Months 10 to 12: flying training begins; RTR(A) Part 2 cleared; Technical Specific written once the aircraft type is fixed',
        ],
        note: 'Keep at least one spare examination session in the plan. Students who assume a first-attempt pass in every paper end up rushing the licence application and paying for it in delays.',
      },
    ],
    glossary: [
      ['FTO', 'Flying Training Organisation. A DGCA-approved school authorised to deliver flight training and log your hours towards a licence.'],
      ['eGCA', 'The DGCA online portal used for licence applications, endorsements and document submission. Separate from DGCA Pariksha, which handles examinations.'],
      ['DGCA Pariksha', 'The DGCA examination portal where you obtain a computer number and book theory papers.'],
      ['Computer number', 'Your lifetime candidate ID in the DGCA examination system. Required before booking any paper.'],
      ['Class 1 medical', 'The full aeromedical assessment required before exercising commercial privileges, valid 12 months for commercial operations.'],
      ['RTR(A)', 'Radio Telephony Restricted (Aeronautical). The licence that authorises you to operate an aircraft radio in Indian airspace.'],
      ['Type rating', 'Training and certification on a specific aircraft type, such as the Airbus A320 or Boeing 737, required before flying it for an airline.'],
      ['Wet rate', 'The hourly flying charge including fuel, instructor and insurance. Ask whether landing and navigation fees are inside or outside it.'],
    ],
    quiz: [
      {
        question: 'What is the minimum total flight time for a DGCA Commercial Pilot Licence?',
        options: ['40 hours', '150 hours', '200 hours', '1,500 hours'],
        answer: 2,
        explanation: '200 hours is the CPL minimum. 40 hours is the PPL figure and 1,500 hours is the ATPL requirement.',
      },
      {
        question: 'Which step should a candidate complete before paying any flying school fees?',
        options: ['Type rating', 'The Class 2 medical', 'RTR(A) Part 2', 'ATPL theory papers'],
        answer: 1,
        explanation: 'The Class 2 medical is cheap and fast, and it screens out most disqualifying findings before you commit lakhs of rupees to training.',
      },
      {
        question: 'A student passed Class 12 in Commerce. What is the correct route to a DGCA computer number?',
        options: [
          'They are permanently ineligible',
          'Clear Physics and Mathematics through NIOS, then apply',
          'Apply for a PPL first, then upgrade automatically',
          'Write an exemption request to DGCA',
        ],
        answer: 1,
        explanation: 'DGCA requires 10+2 with Physics and Mathematics for the CPL route. NIOS additional subjects are accepted and are the standard fix.',
      },
      {
        question: 'What is the DGCA examination fee per paper, and is it refundable?',
        options: [
          'Rs 1,000, refundable on request',
          'Rs 2,500, not refundable',
          'Rs 5,000, refundable if you miss the exam',
          'Free for first attempts',
        ],
        answer: 1,
        explanation: 'The fee is Rs 2,500 per paper and is not refundable under any circumstances, including a no-show.',
      },
    ],
    faqs: [
      ['Can I become a pilot without Physics and Maths in 12th?', 'Not directly. DGCA requires 10+2 with Physics and Mathematics for a computer number, except for the PPL category. Students from other streams clear both subjects through NIOS and then apply, and this route is accepted without any special permission.'],
      ['Is NEET required to become a pilot?', 'No. NEET is a medical entrance examination and has nothing to do with pilot training. The only medical requirement is a DGCA Class 1 or Class 2 assessment carried out at an approved centre.'],
      ['What is the minimum age to get a CPL in India?', 'You must be 18 years old to hold a Commercial Pilot Licence. Training and solo flying can begin at 17, and a Student Pilot Licence can be issued from 16.'],
      ['How many hours of flying are needed for a CPL?', 'DGCA requires a minimum of 200 hours of total flight time, logged at an approved Flying Training Organisation and verified in your logbook. Sub-minima for cross-country, night and instrument time apply on top of the total.'],
      ['Can I do the flying abroad and the licence in India?', 'Yes. Many students fly in the United States, New Zealand or South Africa and then convert to a DGCA CPL. You still write the Indian theory papers, clear an Indian Class 1 medical and complete a skill test with a designated examiner.'],
      ['How much does it cost to become a pilot in India?', 'Roughly Rs 55 lakh to Rs 75 lakh for the CPL, and Rs 75 lakh to Rs 95 lakh including a type rating. The 200 hours of flying account for Rs 55 lakh to Rs 65 lakh of that.'],
      ['Is there an upper age limit for pilot training in India?', 'DGCA sets no maximum age for registering as a flight crew candidate. Airline cadet programmes set their own age caps, so check those before enrolling if airline employment is the goal.'],
      ['Do I need a PPL before a CPL?', 'No. A PPL is optional on the commercial route. Many Indian students go straight for the CPL, since the hours count towards the same 200-hour total either way.'],
      ['How long is the DGCA CPL course?', 'Eighteen to twenty-four months for a full-time student. Ground school and theory take four to eight months, the 200 hours take ten to fourteen months, and licence issue adds one to three months.'],
      ['Can I get an education loan for pilot training?', 'Yes. Several banks offer education loans for pilot training, usually against property or with a co-applicant. Structure the disbursement in tranches tied to your flying milestones rather than taking the full amount up front.'],
      ['What jobs can I do with a CPL apart from airlines?', 'A CPL holder can fly for charter operators, corporate flight departments, aerial survey and photography operators, and flight training organisations as an instructor after obtaining the relevant rating.'],
      ['Does wearing spectacles disqualify you from becoming a pilot?', 'No, provided your corrected vision falls within DGCA limits. Colour vision deficiency is the far more common disqualifier, and it is worth testing before you spend anything on training.'],
    ],
  },
  sources: [
    ['DGCA Pariksha flight crew FAQs', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
    ['DGCA Civil Aviation Requirements, Section 7 Flight Crew Standards', 'https://www.dgca.gov.in/digigov-portal/'],
    ['Pilot course fees in India 2026, itemised cost breakdown', 'https://thepilot.in/pilot-course-fees-in-india-2026-duration-and-full-cost-breakdown/'],
  ],
  related: ['dgca-cpl-eligibility', 'pilot-training-cost-in-india', 'dgca-class-1-and-class-2-medical'],
})
