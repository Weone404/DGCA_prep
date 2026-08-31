import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA Class 1 and Class 2 Medical: Tests, Centres and Validity',
  slug: 'dgca-class-1-and-class-2-medical',
  excerpt:
    'What the DGCA Class 1 and Class 2 medical assessments check, where they are done, how long each stays valid, what they cost, and which conditions cause trouble.',
  coverImage: '/blog/dgca-class-1-and-class-2-medical.webp',
  coverMotif: 'ecg',
  category: CATEGORIES.medical.slug,
  keywords: [
    'DGCA Class 1 medical',
    'DGCA Class 2 medical',
    'pilot medical test India',
    'AFCME Delhi',
    'IAM Bengaluru medical',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'A DGCA Class 2 medical is enough to start training and fly solo. Class 1 is the full aeromedical assessment required before you exercise commercial privileges on a CPL. It checks vision, hearing, cardiovascular and general health against ICAO Annex 1 standards, stays valid 12 months for commercial operations, and costs Rs 8,000 to Rs 15,000.',
    keyFacts: [
      ['What Class 2 buys you', 'Student Pilot Licence and PPL, enough to train and fly solo'],
      ['What Class 1 buys you', 'Commercial privileges on a CPL or ATPL'],
      ['Class 1 validity', '12 months commercial, 24 months student and private'],
      ['Class 2 validity', 'As endorsed on the certificate'],
      ['Where Class 1 is done', 'DGCA-approved aeromedical centres, including AFCME Delhi and IAM Bengaluru'],
      ['Class 1 cost', 'Rs 8,000 to Rs 15,000 at approved centres'],
      ['Budget across both classes', 'Rs 25,000 to Rs 50,000 with repeats, travel and referrals'],
      ['Most common hard stop', 'Colour vision deficiency'],
    ],
    sections: [
      {
        heading: 'What is the difference between a Class 1 and a Class 2 medical?',
        paragraphs: [
          'Two certificates, two different jobs. The Class 2 is the entry-level fitness check. It is enough for a Student Pilot Licence and a PPL, which means it is enough to start training and to fly solo. The Class 1 is the full aeromedical assessment, and you need it before you exercise commercial privileges on a CPL or an ATPL.',
          'Students always ask which one to book first. Book the Class 2. It is the cheap screening step that tells you whether the expensive one is realistic, and doing it in the other order is how people lose money they did not need to lose.',
        ],
        table: {
          headers: ['', 'Class 2', 'Class 1'],
          rows: [
            ['Purpose', 'Student Pilot Licence and PPL', 'CPL and ATPL, commercial privileges'],
            ['Depth', 'Entry-level fitness screening', 'Full aeromedical assessment'],
            ['Where', 'DGCA-authorised medical examiner', 'DGCA-approved aeromedical centre'],
            ['Validity', 'As endorsed on the certificate', '12 months commercial, 24 months student and private'],
            ['When to do it', 'Before you pay any flying school', 'Before commercial privileges are exercised'],
          ],
          caption: 'The two DGCA medical classes side by side. Class 2 is a screening step; Class 1 is the assessment that decides a commercial career.',
        },
        note: 'This article is procedural guidance on how the DGCA medical system works. It is not medical advice, and the fitness decision on any individual file rests with the DGCA-approved aeromedical examiner who assesses you.',
      },
      {
        heading: 'Which medical should you do first, and why?',
        paragraphs: [
          'Class 2 first. Always. The reasoning is not medical, it is financial. You are buying information at the point where the information is still cheap enough to act on.',
          'A colour vision deficiency found at the screening stage costs you a consultation fee and a Saturday morning. The same finding discovered after you have paid a ground school fee, moved cities and started burning flying hours costs you lakhs, and none of that money comes back.',
        ],
        example: {
          title: 'What screening with a Class 2 first actually saves you',
          given: [
            'Colour vision test at any ophthalmologist, then a Class 2 with a DGCA-authorised examiner',
            'Class 1 at an approved centre: Rs 8,000 to Rs 15,000',
            'Ground school for the full DGCA syllabus: Rs 1.5 lakh to Rs 3 lakh',
            'CPL flying, 200 hours in India: Rs 55 lakh to Rs 65 lakh, at an indicative wet rate of about Rs 28,000 an hour',
          ],
          working: [
            ['Cost of finding a disqualifying condition at the screening stage', 'A few thousand rupees, before a single school fee is paid'],
            ['Cost of finding the same condition after ground school has started', 'Rs 1.5 lakh to Rs 3 lakh already committed and not recoverable'],
            ['Cost of finding it fifty hours into flying training', 'Roughly 50 hours at Rs 28,000, about Rs 14 lakh, on top of ground school'],
            ['Cost of the screening step itself', 'Less than one flying hour'],
          ],
          answer:
            'The full medical budget across both classes is Rs 25,000 to Rs 50,000, which is under one per cent of a Rs 55 lakh to Rs 75 lakh CPL. Spending it before anything else is the cheapest protection available in this career.',
        },
      },
      {
        heading: 'What does the DGCA Class 1 medical check?',
        paragraphs: [
          'The assessment follows ICAO Annex 1 aligned standards. It is a full day of examinations rather than a single consultation, and the investigations ordered vary with your age and history. A nineteen-year-old with a clean record and a thirty-four-year-old career changer do not walk out with the same stack of reports.',
        ],
        list: [
          'Vision: distance and near acuity, colour vision, refraction, use of corrective lenses',
          'Hearing: audiometry against aviation thresholds',
          'Cardiovascular: history, blood pressure, resting ECG, further cardiac work-up where indicated',
          'General clinical examination: ENT, dental, musculoskeletal, neurological, abdominal',
          'Laboratory work: blood, urine and other investigations by age and risk factors',
          'Psychological and history review',
        ],
        table: {
          headers: ['System', 'What is assessed', 'Why it eats time'],
          rows: [
            ['Vision', 'Distance and near acuity, colour vision, refraction, corrective lenses used', 'Acuity, colour vision and refraction are separate tests, and all of them go on the file'],
            ['Hearing', 'Audiometry against aviation thresholds', 'Audiometry needs a quiet, controlled setting, so it runs on a slot rather than walk-in'],
            ['Cardiovascular', 'History, blood pressure, resting ECG, further work-up where indicated', 'Blood pressure is taken on repeated measurement, and an indicated work-up adds days'],
            ['General clinical', 'ENT, dental, musculoskeletal, neurological, abdominal', 'Five separate reviews, each with its own queue on the day'],
            ['Laboratory', 'Blood, urine and other investigations by age and risk factors', 'Samples go in early because results have to be back before the file is reviewed'],
            ['History and psychological review', 'Declared history, past treatment and medication, psychological review', 'Runs as fast or as slow as your documents allow'],
          ],
          caption: 'What the Class 1 examines, and why the centre asks you to keep the whole day free.',
        },
      },
      {
        heading: 'How does the Class 1 assessment day actually run?',
        paragraphs: [
          'Think of it as six queues rather than one appointment. Nothing about the day is difficult, but everything about it is sequential, and a missing document at stage two holds up stage six.',
        ],
        steps: [
          ['Book the slot at an approved centre', 'Appointments fill up. Book several weeks ahead, and confirm the reporting time and the document list at the time of booking rather than the night before.'],
          ['Report with your records', 'Original reports of every past illness, surgery, hospital admission and course of medication. A discharge summary you can describe but not produce is worth nothing to the file.'],
          ['Registration and declared history', 'You complete a medical history declaration. Declare fully, including what you think is trivial. This is the most consequential piece of paper you will handle that day.'],
          ['Laboratory work', 'Blood and urine samples are usually taken early so results are back before the file closes. Which investigations are ordered depends on age and risk factors.'],
          ['Specialist stations', 'Vision and refraction, audiometry, cardiovascular including a resting ECG, then ENT, dental, musculoskeletal, neurological and abdominal examinations.'],
          ['File review and disposal', 'The examiner reviews everything together. Three outcomes exist: fit, deferred pending a specialist opinion or further test, or unfit.'],
        ],
        diagram: {
          type: 'flow',
          title: 'How a Class 1 file moves from booking to a disposal',
          caption:
            'The six stages of an initial Class 1 assessment at a DGCA-approved aeromedical evaluation centre. Stage six is where deferrals are issued, and a deferral pauses the file rather than closing it.',
          data: [
            { label: 'Book the slot', detail: 'Approved centre, several weeks ahead, full day blocked out' },
            { label: 'Report with original records', detail: 'Past illness, surgery, admissions and medication, in original' },
            { label: 'Declare your history', detail: 'The declaration form; concealment is treated worse than the finding' },
            { label: 'Laboratory work', detail: 'Blood, urine and further investigations by age and risk factors' },
            { label: 'Specialist stations', detail: 'Vision, audiometry, cardiovascular with resting ECG, ENT, dental, general clinical' },
            { label: 'File review and disposal', detail: 'Fit, deferred pending specialist opinion, or unfit' },
          ],
        },
      },
      {
        heading: 'Where is the initial Class 1 medical done in India?',
        paragraphs: [
          'Initial Class 1 assessments are conducted at DGCA-approved aeromedical evaluation centres. The two most commonly used by student pilots are AFCME in New Delhi and the Institute of Aerospace Medicine, Indian Air Force, in Bengaluru. Other Indian Air Force centres and DGCA-empanelled civil facilities also appear on the approved list, which DGCA publishes.',
          'Appointments at the busy centres fill up. Book several weeks ahead, and carry every past medical record you hold, including old prescriptions and surgical notes. The Class 2, by contrast, is done by a DGCA-authorised medical examiner and is far easier to schedule.',
        ],
        table: {
          headers: ['Assessment', 'Who conducts it', 'Booking notes'],
          rows: [
            ['Class 2', 'A DGCA-authorised medical examiner', 'Short appointment, widely available, treat it as your screening step'],
            ['Initial Class 1', 'A DGCA-approved aeromedical evaluation centre', 'Book several weeks ahead and keep the whole day free'],
            ['AFCME, New Delhi', 'Approved aeromedical evaluation centre', 'One of the two centres most student pilots use'],
            ['Institute of Aerospace Medicine, Bengaluru', 'Indian Air Force aeromedical centre', 'The other centre most student pilots use'],
            ['Other approved facilities', 'Further Indian Air Force centres and DGCA-empanelled civil facilities', 'Listed on the approved list published by DGCA'],
          ],
          caption: 'Who conducts which assessment, and how far ahead to plan the booking.',
        },
        note: 'The current list of approved centres is published by DGCA. Check it before booking rather than relying on a coaching centre recommendation.',
      },
      {
        heading: 'How long does a medical stay valid?',
        paragraphs: [
          'Validity is not a hurdle you clear once. It is a recurring obligation attached to the licence for as long as you fly, and the renewal cycle is short enough that it needs a diary entry rather than a memory.',
        ],
        list: [
          'Class 1 for commercial operations: 12 months',
          'Class 1 for student and private licences: 24 months',
          'Class 2: as endorsed, and renewed on the schedule stated on the certificate',
        ],
        table: {
          headers: ['Certificate', 'Held by', 'Validity'],
          rows: [
            ['Class 1', 'Commercial operations, CPL and ATPL holders', '12 months'],
            ['Class 1', 'Student and private licence holders', '24 months'],
            ['Class 2', 'Student Pilot Licence and PPL holders', 'As endorsed on the certificate'],
          ],
          caption: 'Validity by certificate and by the licence held. The same Class 1 assessment carries a different validity depending on the privileges being exercised.',
        },
        note: 'Renewal is a lifelong obligation. A lapsed Class 1 grounds a working airline pilot exactly as it grounds a student, and a renewal appointment at a busy centre is not something you arrange in a week.',
      },
      {
        heading: 'What does the medical cost?',
        paragraphs: [
          'Class 1 assessments commonly run between Rs 8,000 and Rs 15,000 at approved centres. Plan Rs 25,000 to Rs 50,000 across both classes once repeat investigations, travel to the centre and specialist referrals are counted, because very few students get through on the base fee alone.',
          'Any additional test the examiner orders, such as a treadmill test or a specialist opinion, is billed on top. Travel is the line students forget. If you live in Kochi and your slot is in Bengaluru, the fare and two nights of accommodation belong in the medical budget, not in some other column.',
        ],
        table: {
          headers: ['Line item', 'Typical figure'],
          rows: [
            ['Class 1 at an approved centre', 'Rs 8,000 to Rs 15,000'],
            ['Both classes, with repeat investigations, travel and referrals', 'Rs 25,000 to Rs 50,000'],
            ['Extra test ordered by the examiner, such as a treadmill test', 'Billed on top of the assessment fee'],
            ['Specialist opinion for a deferred finding', 'Billed on top, plus the cost of the delay'],
            ['Share of a Rs 55 lakh to Rs 75 lakh CPL budget', 'Under one per cent'],
          ],
          caption: 'The medical is the smallest line in a CPL budget and the one with the most power to end the plan.',
        },
        note: 'For scale: the DGCA theory examination fee is Rs 2,500 per paper across five papers, and ground school runs Rs 1.5 lakh to Rs 3 lakh. The medical costs less than either and decides whether either is worth paying for.',
      },
      {
        heading: 'What commonly causes a Class 1 to be deferred?',
        paragraphs: [
          'Deferral is more common than outright rejection. A finding that needs a specialist opinion pauses your file rather than closing it, and students who hear the word deferred and assume their career is over are usually wrong.',
          'The list below is what actually shows up. Notice that the last item is not a medical condition at all.',
        ],
        list: [
          'Colour vision deficiency, which is the single most common hard stop for aspiring pilots',
          'Uncorrected visual acuity outside limits, or refractive error beyond the permitted range',
          'Blood pressure readings outside limits on repeated measurement',
          'Hearing loss beyond audiometric thresholds',
          'Body mass index outside acceptable limits',
          'Undeclared past surgery or medication history discovered during the examination',
        ],
        note: 'Declare your history honestly. A finding you concealed and the examiner discovers is treated far more seriously than the finding itself. If any of these worry you, take the question and your records to a DGCA-approved aeromedical examiner before you plan anything else.',
      },
      {
        heading: 'What happens if your Class 1 is deferred?',
        paragraphs: [
          'A deferral is not a refusal. It means the examiner wants something before deciding: a specialist opinion, a repeated measurement, a report you did not bring. The file stays open. What a deferral costs you is time, and time in flight training is expensive in ways students consistently underestimate.',
        ],
        example: {
          title: 'The timeline arithmetic of one deferral',
          given: [
            'Medicals are budgeted at 1 to 2 months inside an 18 to 24 month CPL plan',
            'Class 1 booked with no spare weeks before the flying block begins',
            'The examiner defers the file pending a specialist opinion',
          ],
          working: [
            ['Getting a specialist appointment and a written report', 'Commonly two to four weeks'],
            ['Returning to the centre and having the file reviewed again', 'Another appointment, in the same booking queue that already runs several weeks'],
            ['Effect on the flying block', 'The start date slips, and the school allocates your aircraft slot to the next student in line'],
            ['Effect on the whole plan', 'A one month medical delay commonly turns into a two to three month schedule delay'],
          ],
          answer:
            'Book the Class 1 with several weeks of margin ahead of your flying start date. The deferral itself is survivable and usually resolvable. A deferral with no slack anywhere in the plan is what turns an 18 month course into a 24 month one.',
        },
        note: 'Only a DGCA-approved aeromedical examiner can tell you what your file needs and where it stands. Do not take clinical reassurance from an instructor, an agent or an internet forum, and do not attempt to work around a finding.',
      },
      {
        heading: 'Can you fly with spectacles?',
        paragraphs: [
          'Yes, provided your corrected vision falls within DGCA limits. The assessment records your refraction and the correction you use, and that goes on the file. Glasses end far fewer flying careers than students believe.',
          'Colour vision is the different animal. It is the single most common hard stop for aspiring pilots in India, it is not something a lens corrects, and it is testable at any ophthalmologist for a few hundred rupees. Do that one test before you spend money on anything else.',
        ],
        table: {
          headers: ['Finding', 'What it usually means for the file'],
          rows: [
            ['Corrected vision within DGCA limits', 'Acceptable; the refraction and the correction used are recorded'],
            ['Uncorrected acuity outside limits, or refractive error beyond the permitted range', 'A common reason for a file to be deferred or found unfit'],
            ['Colour vision deficiency', 'The single most common hard stop for aspiring pilots'],
            ['A borderline reading of any kind', 'Only the approved aeromedical examiner can tell you where your file stands'],
          ],
          caption: 'How the assessment treats the vision findings students ask about most. Specific limits are set by DGCA and applied by the examiner.',
        },
        note: 'This page does not publish clinical thresholds. The applicable standards are set by DGCA and applied by the approved examiner, and a borderline number is a conversation to have with that examiner, not with an instructor.',
      },
      {
        heading: 'How should you prepare before you book?',
        paragraphs: [
          'None of this is about passing something you would otherwise fail. It is about arriving with a complete file so that the assessment measures you rather than your paperwork.',
        ],
        steps: [
          ['Get a colour vision test first', 'Any ophthalmologist can do it for a few hundred rupees. Doing this before you spend on training is the highest-return decision in the entire process.'],
          ['Sort out dental issues in advance', 'Dental findings routinely delay files. Treatment you finish beforehand is a queue you do not stand in later.'],
          ['Collect your original records', 'Every past illness, surgery, hospital admission and course of medication, in original, in one folder, sorted by date.'],
          ['Do not crash diet', 'Laboratory results will show it. A rushed weight change in the weeks before the assessment tends to produce exactly the abnormal readings you were hoping to avoid.'],
          ['Book with margin', 'Leave several weeks between the assessment and the start of your flying block, so that a deferral does not wreck the schedule behind it.'],
        ],
        pitfalls: [
          'Booking the Class 1 for the same week your flying block starts, with no room for a deferral',
          'Turning up without original reports of a past surgery and expecting a verbal account to stand in',
          'Skipping the colour vision test because nobody in the family has ever had trouble with colours',
          'Crash dieting or fasting oddly in the days before the laboratory work',
          'Booking a centre an agent recommended without checking the approved list DGCA publishes',
        ],
      },
      {
        heading: 'Where does the medical sit in the CPL timeline?',
        paragraphs: [
          'The medical is the first stage in a CPL plan and the only stage that can end the plan outright. Everything after it is a question of money, effort and patience. That is why we put it at the front of every student schedule, ahead of the computer number and well ahead of the first school visit.',
        ],
        table: {
          headers: ['Stage', 'Typical time', 'What controls it'],
          rows: [
            ['Medicals, Class 2 then Class 1', '1 to 2 months', 'Appointment availability at approved centres'],
            ['Ground school and five theory papers', '4 to 8 months', 'Rs 2,500 per paper, 70 per cent to pass, no negative marking'],
            ['200 hours of flying', '10 to 14 months', 'Rs 55 lakh to Rs 65 lakh in India, weather and aircraft availability'],
            ['Licence issue', '1 to 3 months', 'Document completeness'],
            ['Total', '18 to 24 months', 'Class 1 must be current when commercial privileges are exercised'],
          ],
          caption: 'The medical is one to two months of an 18 to 24 month plan, and it decides whether the other 22 months are worth starting.',
        },
        note: 'A CPL also needs minimum age 18, 10+2 with Physics and Mathematics, 200 hours, ICAO English Language Proficiency Level 4 or above and RTR(A). A PPL needs age 17 and 40 hours, an ATPL age 21 and 1,500 hours, and an SPL can be issued from 16. DGCA sets no maximum age for registering as a flight crew candidate.',
      },
      {
        heading: 'What do students get wrong about the medical?',
        paragraphs: [
          'The same mistakes come round every batch, and almost none of them are medical. They are mistakes about sequencing, paperwork and honesty, which means every one of them is avoidable.',
        ],
        pitfalls: [
          'Treating the Class 2 as a formality instead of the screening step that protects a Rs 55 lakh decision',
          'Hearing the word deferred, assuming it means rejected, and abandoning a file a specialist report would have resolved',
          'Concealing a past surgery or a medication history, which is treated far more seriously than the finding itself',
          'Forgetting that a Class 1 has to be renewed every 12 months for commercial operations, for an entire career',
          'Letting a certificate lapse, which grounds a working airline pilot exactly as it grounds a student',
          'Taking clinical reassurance from an instructor, a forum or an agent instead of a DGCA-approved aeromedical examiner',
        ],
        note: 'One sentence worth carrying into the centre: the finding is often workable through a specialist opinion, the concealment never is.',
      },
    ],
    glossary: [
      ['AME', 'Aeromedical examiner. A doctor authorised by DGCA to conduct pilot medical assessments and record the findings on your file.'],
      ['Aeromedical centre', 'A DGCA-approved aeromedical evaluation centre where initial Class 1 assessments are conducted, such as AFCME New Delhi or the Institute of Aerospace Medicine, Bengaluru.'],
      ['Class 1', 'The full aeromedical assessment required before exercising commercial privileges on a CPL or ATPL. Valid 12 months for commercial operations and 24 months for student and private licence holders.'],
      ['Class 2', 'The entry-level fitness check supporting a Student Pilot Licence and a PPL. Enough to begin training and fly solo, and valid as endorsed on the certificate.'],
      ['Audiometry', 'The hearing test used in the Class 1, measuring hearing against aviation thresholds rather than general clinical ones.'],
      ['Deferral', 'A pause on your medical file while a specialist opinion or a further test is obtained. More common than outright rejection, and not the same as being found unfit.'],
      ['ICAO Annex 1', 'The international standard for personnel licensing, including its medical provisions, which the DGCA assessment is aligned with.'],
      ['Refraction', 'The measurement of your eye prescription, recorded during the Class 1 along with the corrective lenses you use.'],
    ],
    quiz: [
      {
        question: 'Which DGCA medical is enough to begin training and fly solo?',
        options: ['Class 1 only', 'Class 2', 'Both, taken on the same day', 'No medical is needed before solo'],
        answer: 1,
        explanation: 'A Class 2 supports a Student Pilot Licence and a PPL, which covers training and solo flying. Class 1 is needed before commercial privileges are exercised.',
      },
      {
        question: 'How long is a Class 1 medical valid for commercial operations?',
        options: ['6 months', '24 months', '12 months', '36 months'],
        answer: 2,
        explanation: 'Twelve months for commercial operations. The same assessment carries twenty-four months of validity for student and private licence holders.',
      },
      {
        question: 'What does a Class 1 assessment commonly cost at an approved centre?',
        options: ['Rs 2,500', 'Rs 8,000 to Rs 15,000', 'Rs 25,000 to Rs 50,000', 'Rs 1.5 lakh'],
        answer: 1,
        explanation: 'Rs 8,000 to Rs 15,000 at approved centres. Rs 25,000 to Rs 50,000 is the budget across both classes once repeats, travel and referrals are added.',
      },
      {
        question: 'What does it mean when a Class 1 file is deferred?',
        options: [
          'The candidate is permanently unfit for a licence',
          'The certificate is issued with conditions attached',
          'The file is paused pending a specialist opinion or a further test',
          'The candidate has to restart training from the beginning',
        ],
        answer: 2,
        explanation: 'A deferral pauses the file rather than closing it, and it is more common than outright rejection. Only the approved examiner can say what the file needs next.',
      },
    ],
    faqs: [
      ['Which medical do I need to start pilot training?', 'A DGCA Class 2 medical is enough to begin training and fly solo on a Student Pilot Licence or a PPL. You need the Class 1 assessment before exercising commercial privileges on a CPL or ATPL, so clear the Class 2 first as a screening step.'],
      ['How long is a DGCA Class 1 medical valid?', 'Twelve months for commercial operations, and twenty-four months for student and private licence holders. Renewal is a lifelong obligation rather than a one-time clearance, and a lapsed Class 1 grounds a working airline pilot exactly as it grounds a student.'],
      ['Can I be a pilot if I wear glasses?', 'Yes, provided your corrected vision falls within DGCA limits. The assessment records your refraction and the correction you use. Spectacles disqualify far fewer candidates than students expect, and colour vision deficiency is the far more common problem.'],
      ['Does colour blindness disqualify you from a CPL?', 'Colour vision deficiency is the single most common hard stop for aspiring pilots in India. It is testable at any ophthalmologist for a few hundred rupees, so get that test done before spending anything on ground school or flying hours.'],
      ['Where is the initial Class 1 medical conducted?', 'At DGCA-approved aeromedical evaluation centres. The two most used by student pilots are AFCME in New Delhi and the Institute of Aerospace Medicine, Indian Air Force, in Bengaluru. Other Air Force centres and empanelled civil facilities appear on the DGCA published list.'],
      ['What does a DGCA Class 1 medical cost?', 'Commonly Rs 8,000 to Rs 15,000 at an approved centre. Plan Rs 25,000 to Rs 50,000 across both classes once repeat investigations, travel and specialist referrals are counted. Any extra test the examiner orders, such as a treadmill test, is billed on top.'],
      ['How long does the Class 1 assessment take?', 'Allow a full day at the centre rather than a single consultation. Investigations vary with age and history, and laboratory results, specialist reviews and the final file review all run in sequence. Budget one to two months for medicals inside your overall plan.'],
      ['What is the difference between a deferral and being found unfit?', 'A deferral pauses your file while a specialist opinion or a further test is obtained, and it is more common than outright rejection. Being found unfit is a decision on the file. Only the approved aeromedical examiner can tell you which one applies to you.'],
      ['Do I have to declare an old surgery or medication?', 'Yes, and carry the original reports with you. A concealed finding discovered during the examination is treated far more seriously than the finding itself, and a complete declaration protects your file more than anything else you do that day.'],
      ['Can I do the Class 1 before the Class 2?', 'You can, but it wastes money. The Class 2 is cheaper and quicker and screens out most disqualifying findings before you commit to training. Students who reverse the order pay full Class 1 fees to learn something a screening test would have shown them.'],
      ['What happens if my Class 1 lapses while I am flying commercially?', 'You are grounded until it is renewed. Class 1 validity for commercial operations is twelve months and the obligation runs for your whole career. Diarise the renewal well ahead of the expiry date, because slots at approved centres fill up weeks in advance.'],
      ['Who decides whether I am fit to fly?', 'The DGCA-approved aeromedical examiner who assesses you, applying DGCA standards. No instructor, coaching centre or online forum can make that call. If a past finding worries you, take the question and your records to an approved examiner before planning anything else.'],
    ],
  },
  sources: [
    ['DGCA list of approved aeromedical evaluation centres, Class 1', 'https://public-prd-dgca.s3.ap-south-1.amazonaws.com/InventoryList/personal/medical/class1/Class1.pdf'],
    ['DGCA medical requirements for flight crew', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['dgca-cpl-eligibility', 'how-to-become-a-pilot-in-india', 'pilot-training-cost-in-india'],
})
