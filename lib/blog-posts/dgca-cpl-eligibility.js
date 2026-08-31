import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA CPL Eligibility 2026: Age, 12th Subjects and Medical Rules',
  slug: 'dgca-cpl-eligibility',
  excerpt:
    'Exact DGCA eligibility for a Commercial Pilot Licence in 2026 - minimum age 18, 10+2 with Physics and Maths, Class 1 medical, ICAO English Level 4 and 200 flight hours.',
  coverImage: '/blog/dgca-cpl-eligibility.webp',
  coverMotif: 'checklist',
  category: CATEGORIES.licensing.slug,
  keywords: [
    'DGCA CPL eligibility',
    'pilot eligibility in India',
    'CPL age limit India',
    '12th standard pilot requirements',
    'PCM for pilot',
  ],
  publishedDate: '2026-08-31',
  modifiedDate: '2026-08-31',
  content: {
    intro:
      'To hold a DGCA Commercial Pilot Licence you must be at least 18 years old, have passed 10+2 with Physics and Mathematics, hold a valid Class 1 medical assessment, demonstrate ICAO English Language Proficiency at Level 4 or above, and log a minimum of 200 hours of flight time. DGCA sets no maximum age.',
    keyFacts: [
      ['Minimum age to hold a CPL', '18 years'],
      ['Age training may begin', '17 years'],
      ['Education', '10+2 with Physics and Mathematics, or equivalent'],
      ['Maximum age set by DGCA', 'None for flight crew registration'],
      ['Medical', 'Class 2 to train, Class 1 for commercial privileges'],
      ['English', 'ICAO Language Proficiency Level 4 or above'],
      ['Theory papers', 'Five, 70 per cent to pass each'],
      ['Flight time', '200 hours minimum'],
    ],
    sections: [
      {
        heading: 'What is the minimum age for a CPL in India?',
        paragraphs: [
          'Eighteen years on the date the licence is issued. You may begin ground school and dual flying earlier, and most schools clear students for first solo at 17. The rule fixes when you hold the licence, not when you start learning.',
          'Plan backwards from your eighteenth birthday. A student who joins ground school at 17 can have the logbook, the papers and the medical ready almost on the day the age gate opens. Waiting until 18 to begin moves the finish line a full year, and that year costs hostel rent.',
        ],
        table: {
          headers: ['Licence', 'Minimum age', 'Minimum flight time'],
          rows: [
            ['SPL (Student Pilot Licence)', '16 years', 'Nil'],
            ['PPL (Private Pilot Licence)', '17 years', '40 hours'],
            ['CPL (Commercial Pilot Licence)', '18 years', '200 hours'],
            ['ATPL (Airline Transport Pilot Licence)', '21 years', '1,500 hours'],
          ],
          caption: 'Minimums under Schedule II of the Aircraft Rules, 1937.',
        },
        note: 'Sub-minima for cross-country, night and instrument time apply on top of the totals shown.',
      },
      {
        heading: 'Which eligibility gates must you clear, and in what order?',
        paragraphs: [
          'Five gates stand between a Class 12 pass and a CPL in your hand. Each one can stop you cold, and the order you attempt them in decides how much money you lose if one closes.',
          'Take the cheap gates first. A colour vision test costs a few hundred rupees at any ophthalmologist. Both it and the Class 2 medical tell you in week one what a flying school will not tell you until you have already paid.',
        ],
        diagram: {
          type: 'flow',
          title: 'The five eligibility gates for a DGCA CPL',
          caption:
            'Attempt them in this order. Each gate is cheaper than the one after it, so stopping early costs a consultation fee rather than several lakh rupees of flying.',
          data: [
            { label: 'Age', detail: '17 to start training, 18 to hold the licence. No upper limit set by DGCA.' },
            { label: 'Education', detail: '10+2 with Physics and Mathematics from a recognised board, or an equivalent qualification.' },
            { label: 'Medical fitness', detail: 'Class 2 to begin training and fly solo, Class 1 before commercial privileges.' },
            { label: 'English proficiency', detail: 'ICAO Language Proficiency Level 4 or above, assessed with RTR(A) and at licence application.' },
            { label: 'Knowledge and experience', detail: 'Five theory papers at 70 per cent each, RTR(A), and 200 logged flight hours.' },
          ],
        },
      },
      {
        heading: 'Do you need Physics and Maths in 12th to become a pilot?',
        paragraphs: [
          'Yes, for a CPL. DGCA Pariksha will not approve a computer number application without a 10+2 pass with Physics and Mathematics from a recognised board or an equivalent qualification. The PPL category is the one exception.',
          'Students from Commerce, Arts or the Biology stream are not shut out. Clear Physics and Mathematics as additional subjects through the National Institute of Open Schooling, then apply. NIOS results are accepted, and a large share of every ground school batch arrives this way.',
        ],
        steps: [
          ['Check what your marksheet actually says', 'A subject printed as Applied Mathematics or Basic Mathematics is not always read as Mathematics. Confirm the exact wording before you assume you are covered.'],
          ['Register with NIOS for the missing subjects', 'Take Physics and Mathematics as additional subjects. You keep your existing Class 12 pass and add to it, rather than repeating the year.'],
          ['Apply for the computer number with both marksheets', 'Upload the Class 12 certificate and the NIOS marksheet together. Partial uploads are the usual reason an application comes back rejected.'],
        ],
        pitfalls: [
          'Assuming a diploma or a degree with Physics substitutes for the 10+2 requirement without checking the equivalence route',
          'Starting NIOS registration only after joining ground school, which stalls the computer number and blocks every paper booking',
          'Paying a flying school deposit while the Physics and Mathematics question is still open',
        ],
        note: 'This is a paperwork requirement, not a talent test. It is fixable in a few months and stops nobody willing to sit the papers.',
      },
      {
        heading: 'Is there an upper age limit for pilot training?',
        paragraphs: [
          'DGCA states plainly that there is no maximum age to register as a flight crew candidate. Airline recruitment does carry age ceilings, and those are set by each carrier, not by the regulator. The two get confused in every online forum.',
          'For a career changer at 30 or 35 the licence is achievable. Check cadet programme age caps at the airlines you intend to apply to before you commit the money, and expect a thorough Class 1, because laboratory work in the assessment is scheduled by age and risk.',
        ],
        note: 'A CPL is not only an airline ticket. Charter operators, corporate flight departments, aerial survey work and flight instruction all hire licence holders, and those routes care far less about your age at entry.',
      },
      {
        heading: 'What medical do you need for a CPL?',
        paragraphs: [
          'A DGCA Class 1 assessment before you exercise commercial privileges. A Class 2 is enough to start training and fly solo, and it costs far less, so clear the Class 2 first as a screening step. Both are aligned to ICAO Annex 1.',
          'Validity trips people up. A Class 1 held for commercial operations lasts 12 months. Held for student and private flying it runs 24 months. Diary the expiry the day you are declared fit, because a lapsed medical grounds you instantly, whatever your logbook says.',
        ],
        table: {
          headers: ['Item', 'Class 2', 'Class 1'],
          rows: [
            ['Purpose', 'Start training, SPL, PPL', 'Exercise commercial privileges'],
            ['When to take it', 'Before you pay any school', 'Before the CPL is issued'],
            ['Validity', 'Student and private use, 24 months', 'Commercial use, 12 months'],
            ['Indicative cost', 'Part of Rs 25,000 to Rs 50,000 for both', 'Rs 8,000 to Rs 15,000'],
            ['Where', 'DGCA-approved examiners', 'DGCA-approved aeromedical centres only'],
          ],
          caption: 'Budget Rs 25,000 to Rs 50,000 for both classes across the whole course, including renewals.',
        },
      },
      {
        heading: 'What does the Class 1 medical actually test?',
        paragraphs: [
          'It is a full-body assessment, not an eye test with extra steps. The initial Class 1 must be done at a DGCA-approved aeromedical centre. AFCME in New Delhi and the Institute of Aerospace Medicine of the Indian Air Force in Bengaluru are on that list, along with other Air Force centres and DGCA-empanelled civil facilities.',
          'Appointment slots at the busier centres are the real constraint, so book before you need the date. Carry every past medical record you hold.',
        ],
        table: {
          headers: ['Area assessed', 'What is examined'],
          rows: [
            ['Vision', 'Distance and near acuity, colour vision, refraction, corrective lenses'],
            ['Hearing', 'Audiometry against defined thresholds'],
            ['Cardiovascular', 'Clinical examination and a resting ECG, with further work-up if indicated'],
            ['General clinical', 'Full physical examination and medical history'],
            ['Laboratory', 'Blood and other laboratory work, scheduled by age and risk'],
          ],
          caption: 'The Class 1 follows ICAO Annex 1, so the areas assessed match those used abroad.',
        },
        pitfalls: [
          'Concealing a past illness, injury or prescription. Concealed history is treated more seriously than the finding itself',
          'Treating a deferral as a rejection. Deferral pending a specialist opinion is more common than outright refusal, and most deferrals resolve',
          'Skipping a colour vision test before enrolment, when it is the most common hard disqualifier and costs a few hundred rupees to check',
        ],
        note: 'Spectacles alone do not stop you. Corrected vision inside DGCA limits is acceptable, and refraction is measured during the assessment rather than judged on your prescription.',
      },
      {
        heading: 'What English standard does DGCA require?',
        paragraphs: [
          'ICAO Language Proficiency Level 4 or above. This is not an academic English test. Assessors listen for whether you can hold a radio exchange when something goes wrong, so the vocabulary that matters is standard phraseology, not literary range. It is assessed alongside your RTR(A) and again at licence application.',
          'RTR(A) comes in two parts with different pass marks, and students regularly prepare for the wrong one. The lower pass mark does not make Part 2 the easier half. It is the half where students freeze.',
        ],
        table: {
          headers: ['RTR(A) part', 'Format', 'Duration', 'Pass mark'],
          rows: [
            ['Part 1', 'Computer-based multiple choice', 'About 1 hour', '70 per cent'],
            ['Part 2', 'Practical oral and simulated transmission', 'Examiner-led', '50 per cent'],
          ],
          caption: 'Budget Rs 30,000 to Rs 75,000 for RTR(A) preparation and fees across both parts.',
        },
        note: 'Practise transmissions out loud, on a timer, with somebody playing the controller. Reading phraseology silently builds recognition, not speech.',
      },
      {
        heading: 'Which theory papers must you pass to qualify?',
        paragraphs: [
          'Five papers for a CPL: Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific. PPL candidates write three. Each paper runs about 100 multiple-choice questions in about two hours, one mark each, no negative marking.',
          'You need 70 per cent in every paper. There is no aggregate, so a strong Air Regulation score does nothing for a weak Air Navigation score. There are no grace marks. A 69 is a fail, and it costs you a full examination session.',
        ],
        table: {
          headers: ['Feature', 'Standard'],
          rows: [
            ['Papers for CPL', 'Five'],
            ['Papers for PPL', 'Three'],
            ['Questions per paper', 'About 100 multiple choice'],
            ['Duration', 'About 2 hours'],
            ['Marking', '1 mark per question, no negative marking'],
            ['Pass mark', '70 per cent per paper, no aggregate, no grace marks'],
            ['Fee', 'Rs 2,500 per paper, non-refundable'],
          ],
        },
        example: {
          title: 'What a realistic first year of examination fees costs',
          given: [
            'Five CPL papers at Rs 2,500 each',
            'Two papers failed on the first attempt, at 66 and 68 per cent',
            'One booked session missed because of a medical appointment clash',
          ],
          working: [
            ['First attempt at all five papers', '5 at Rs 2,500 = Rs 12,500'],
            ['Retaking the two failed papers', '2 at Rs 2,500 = Rs 5,000'],
            ['The missed session, forfeited', '1 at Rs 2,500 = Rs 2,500, non-refundable'],
            ['Total examination fees paid', 'Rs 20,000'],
          ],
          answer:
            'Rs 20,000, which sits inside the usual Rs 25,000 to Rs 50,000 budget for DGCA papers including retakes. Time is the bigger cost. Two retakes push the licence application into the next examination cycle, and every extra month draws on a Rs 3 lakh to Rs 5 lakh living budget.',
        },
        pitfalls: [
          'Booking a paper just to see the standard of the questions. The fee is gone whatever your score, including for a no-show',
          'Assuming no negative marking makes guessing free. It carries no penalty, but 70 per cent leaves very little room',
        ],
      },
      {
        heading: 'How long do your DGCA paper passes stay valid?',
        paragraphs: [
          'Paper validity is commonly cited as five years on a rolling basis for licence issue. Sources conflict on the detail, so treat five years as a planning assumption rather than a settled rule, and confirm the current position against the relevant CAR and the notice published on the DGCA Pariksha portal.',
          'The planning point holds whatever the figure turns out to be. Do not clear Air Regulation in year one, take a three-year break, then wonder whether the pass still counts. Cluster the five papers inside a tight window, finish the flying, apply.',
        ],
        note: 'Check the current CAR and the DGCA Pariksha notice before relying on any validity figure, including this one.',
      },
      {
        heading: 'What does the 200-hour requirement really mean?',
        paragraphs: [
          'Two hundred hours of total flight time, logged and verifiable. Sub-minima for cross-country, night and instrument time sit inside that total, so 200 hours of circuits does not qualify you.',
          'At an indicative wet rate of about Rs 28,000 an hour on a single-engine trainer, flying dominates the budget. Two hundred hours in India commonly runs Rs 55 lakh to Rs 65 lakh. Abroad it runs Rs 60 lakh to Rs 75 lakh, and conversion in India costs another Rs 7.5 lakh to Rs 15 lakh. A total CPL budget of Rs 55 lakh to Rs 75 lakh is realistic, rising to Rs 75 lakh to Rs 95 lakh with an A320 or B737 type rating.',
          'Time matters too. Medicals take 1 to 2 months, ground school and papers 4 to 8, the 200 hours 10 to 14, licence issue on eGCA 1 to 3, and a type rating 2 to 3. Eighteen to twenty-four months end to end is the honest figure.',
        ],
        list: [
          'Ground school: Rs 1.5 lakh to Rs 3 lakh',
          'DGCA papers including retakes: Rs 25,000 to Rs 50,000',
          'Medicals, both classes: Rs 25,000 to Rs 50,000',
          'RTR(A): Rs 30,000 to Rs 75,000',
          'CPL flying, 200 hours in India: Rs 55 lakh to Rs 65 lakh',
          'Hostel and living over 18 to 24 months: Rs 3 lakh to Rs 5 lakh',
          'Type rating on A320 or B737: Rs 15 lakh to Rs 20 lakh',
        ],
      },
      {
        heading: 'What can make you ineligible?',
        paragraphs: [
          'Very few things are absolute. Most medical findings produce a deferral while a specialist reviews the file, not a permanent refusal, and paperwork problems are almost always fixable. Knowing which category your problem falls into saves months.',
        ],
        list: [
          'Colour vision deficiency, the most common hard disqualifier, testable at any ophthalmologist for a few hundred rupees',
          'Refractive error or visual acuity outside DGCA limits, measured during the Class 1 refraction check',
          'Cardiac findings on the resting ECG that call for further work-up',
          'Hearing loss beyond the audiometric thresholds applied in the Class 1',
          'A concealed medical history discovered during the assessment',
          'Missing Physics or Mathematics at 10+2, which blocks the computer number but is fixable through NIOS',
          'ICAO English below Level 4, which is a training problem rather than a permanent bar',
        ],
        note: 'Age is not on this list. There is no upper age at which DGCA stops registering flight crew candidates.',
      },
      {
        heading: 'Eligibility checklist before you pay any school',
        paragraphs: [
          'Work through this in order. Everything above the flying school deposit is cheap. Everything below it is not.',
        ],
        steps: [
          ['Colour vision tested and clear', 'A few hundred rupees at any ophthalmologist. Do it this week, before you read another brochure.'],
          ['10+2 marksheet showing Physics and Mathematics', 'Or the NIOS additional subject marksheet in hand, not merely registered for.'],
          ['Class 2 cleared, Class 1 booked', 'The Class 2 is your screening step. A Class 1 slot at an approved centre needs lead time.'],
          ['DGCA computer number approved on the Pariksha portal', 'Approved, not applied for. Until it reads approved you cannot book a paper.'],
          ['Passport valid, and a student visa if training abroad', 'Passport processing has stopped more overseas intakes than any regulation has.'],
          ['Written fee schedule from a DGCA-approved FTO', 'With the per-hour wet rate stated, and landing and navigation charges shown as inside or outside it.'],
        ],
        pitfalls: [
          'Paying a lump sum for all 200 hours in advance instead of in blocks against hours actually flown',
          'Choosing a school on advertised price without asking how many hours the average student flew per month last year',
          'Enrolling before the Class 1 is cleared, which is how students find a disqualifying result after paying several lakh rupees',
        ],
        note: 'Never pay a lump sum for 200 hours in advance. Pay in blocks against hours actually flown.',
      },
    ],
    glossary: [
      ['Computer number', 'Your lifetime candidate ID in the DGCA examination system, approved by the Chief Examination Officer. One per candidate, needed before booking any paper.'],
      ['DGCA Pariksha', 'The examination portal at pariksha.dgca.gov.in, used for the computer number and paper bookings. Separate from eGCA.'],
      ['eGCA', 'The DGCA portal for licence applications, endorsements and document submission. A different login from DGCA Pariksha.'],
      ['Class 1 medical', 'The full aeromedical assessment required before commercial privileges. Valid 12 months commercial, 24 months student and private.'],
      ['ICAO Annex 1', 'The international personnel licensing standard that DGCA medical requirements follow, which is why assessment areas match those used abroad.'],
      ['RTR(A)', 'Radio Telephony Restricted (Aeronautical). The radio licence, taken in two parts passed at 70 and 50 per cent.'],
      ['NIOS', 'National Institute of Open Schooling. The route students from other streams use to add Physics and Mathematics to a 10+2 pass.'],
    ],
    quiz: [
      {
        question: 'What is the minimum age at which a DGCA Commercial Pilot Licence can be held?',
        options: ['16 years', '17 years', '18 years', '21 years'],
        answer: 2,
        explanation: 'A CPL is held from 18. Training may begin at 17, an SPL from 16 and an ATPL from 21.',
      },
      {
        question: 'A candidate scores 68 per cent in Air Navigation and 92 per cent in Air Regulation. What happens?',
        options: [
          'The aggregate carries them, so both papers pass',
          'Grace marks are applied to reach 70 per cent',
          'Air Navigation is failed and must be retaken',
          'Air Navigation is deferred to the next attempt at no fee',
        ],
        answer: 2,
        explanation: 'Each paper needs 70 per cent on its own. No aggregate, no grace marks, and the retake costs another Rs 2,500.',
      },
      {
        question: 'Which medical class is enough to begin training and fly solo?',
        options: ['Class 1 only', 'Class 2', 'No medical until the CPL is issued', 'Class 1 renewed every 12 months'],
        answer: 1,
        explanation: 'Class 2 covers training, an SPL and a PPL. Class 1 is required before you exercise commercial privileges.',
      },
      {
        question: 'What upper age limit does DGCA set for registering as a flight crew candidate?',
        options: ['32 years', '35 years', '40 years', 'None'],
        answer: 3,
        explanation: 'DGCA sets no maximum age. Cadet programme age caps come from the airline, not the regulator.',
      },
    ],
    faqs: [
      ['Can a Commerce student become a pilot in India?', 'Yes. Clear Physics and Mathematics as additional subjects through NIOS, then apply for a DGCA computer number. The stream you studied in Class 11 and 12 does not disqualify you.'],
      ['What percentage in 12th is required for pilot training?', 'DGCA requires a pass in Physics and Mathematics, not a specific percentage. Flying schools and cadet programmes set their own marks cut-off, commonly around 50 to 60 per cent, so check the school separately.'],
      ['Is there a height or weight requirement for pilots in India?', 'DGCA does not publish a fixed height limit. The Class 1 checks that you can reach and operate all controls comfortably, and that your body mass index is acceptable during the general clinical examination.'],
      ['Do spectacles disqualify you from a CPL?', 'No. Corrected vision within DGCA limits is acceptable, and refraction and corrective lenses are assessed during the Class 1. Colour vision deficiency is the more common disqualifier, so test it before spending on training.'],
      ['Can a 30-year-old start pilot training in India?', 'Yes. DGCA sets no upper age limit for flight crew registration. Airline cadet programmes may have their own age caps, so check those before enrolling if an airline job is the goal.'],
      ['How many theory papers does a CPL candidate write?', 'Five: Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific. Each is about 100 multiple-choice questions in about two hours and needs 70 per cent on its own. PPL candidates write three.'],
      ['How long are DGCA exam passes valid?', 'Validity is commonly cited as five years on a rolling basis for licence issue, but sources conflict. Confirm the current position against the relevant CAR and the notice on the DGCA Pariksha portal before planning around it.'],
      ['What is a DGCA computer number?', 'It is your lifetime candidate ID in the DGCA examination system, approved by the Chief Examination Officer on pariksha.dgca.gov.in. One candidate holds one number for life, and no paper can be booked without it.'],
      ['How much does the Class 1 medical cost?', 'Roughly Rs 8,000 to Rs 15,000 for the Class 1 itself. Budget Rs 25,000 to Rs 50,000 for both classes across the course, since a commercial Class 1 lasts only 12 months.'],
      ['What is the pass mark for RTR(A)?', 'Part 1 is a computer-based multiple-choice paper of about an hour, passed at 70 per cent. Part 2 is a practical oral with simulated transmissions, passed at 50 per cent. Both parts must be cleared.'],
      ['Does failing a medical once end a pilot career?', 'Usually not. Deferral pending a specialist opinion is far more common than outright rejection, and most deferrals resolve. Concealing a history is the graver problem, since it is treated more seriously than the finding.'],
    ],
  },
  sources: [
    ['DGCA Pariksha flight crew FAQs, eligibility and computer number', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
    ['Schedule II, Aircraft Rules 1937, licence requirements', 'https://www.dgca.gov.in/digigov-portal/'],
    ['DGCA Civil Aviation Requirements, Section 7 Flight Crew Standards', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['how-to-become-a-pilot-in-india', 'dgca-class-1-and-class-2-medical', 'dgca-computer-number'],
})
