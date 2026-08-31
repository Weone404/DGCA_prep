import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA Computer Number: Eligibility, Documents and How to Apply',
  slug: 'dgca-computer-number',
  excerpt:
    'Your DGCA computer number is the lifetime candidate ID needed to book any flight crew paper. Eligibility rules, the exact document list, the application flow on DGCA Pariksha, and why applications get rejected.',
  coverImage: '/blog/dgca-computer-number.webp',
  coverMotif: 'idcard',
  category: CATEGORIES.exams.slug,
  keywords: [
    'DGCA computer number',
    'DGCA Pariksha registration',
    'how to apply DGCA computer number',
    'DGCA candidate ID',
    'eGCA registration',
    'DGCA exam registration',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'A DGCA computer number is the unique candidate ID allotted after the Chief Examination Officer approves your application on the DGCA Pariksha portal. You cannot book a single theory paper without it. Eligibility is 10+2 with Physics and Mathematics from a recognised board, except for the PPL category, and the number is valid for life. There is no maximum age limit to register.',
    keyFacts: [
      ['What it is', 'Your lifetime candidate ID in the DGCA examination system'],
      ['Issued by', 'The Chief Examination Officer, DGCA'],
      ['Where to apply', 'pariksha.dgca.gov.in'],
      ['Education needed', '10+2 with Physics and Mathematics (PPL category exempt)'],
      ['Validity', 'Lifetime, one per candidate'],
      ['Maximum age', 'None'],
      ['Needed before', 'Booking any DGCA theory paper'],
      ['Exam fee once issued', 'Rs 2,500 per paper, non-refundable'],
    ],
    sections: [
      {
        heading: 'What is a DGCA computer number?',
        paragraphs: [
          'It is your permanent identity in the DGCA examination system. Every paper you book, every result declared, and every licence application later on eGCA is tied to this one number.',
          'One candidate gets one number, and it does not expire. Students who abandon training for three years and come back use the same number they were issued the first time. That permanence cuts both ways: a mistake in your name or date of birth at application time follows you through every result sheet and into the licence itself, so the ten minutes you spend checking the form are the best-spent ten minutes of your training.',
        ],
        table: {
          headers: ['', 'Computer number', 'eGCA ID'],
          rows: [
            ['Portal', 'pariksha.dgca.gov.in', 'eGCA licensing portal'],
            ['Purpose', 'Booking and writing theory papers', 'Licence applications and endorsements'],
            ['When you need it', 'Before your first paper', 'At licence issue, after the papers'],
            ['Validity', 'Lifetime', 'Tied to your licence record'],
          ],
          caption: 'Two separate DGCA systems that students routinely confuse. You will use both, at different stages.',
        },
      },
      {
        heading: 'Who is eligible for a DGCA computer number?',
        paragraphs: [
          'The bar is lower than most students assume. There is no entrance test, no interview and no upper age limit. DGCA checks that you finished school with the right two subjects and that you are who you say you are.',
        ],
        table: {
          headers: ['Condition', 'Requirement'],
          rows: [
            ['Education', '10+2 with Physics and Mathematics from a recognised board or university, or equivalent'],
            ['PPL category exception', 'The 10+2 Physics and Mathematics rule does not apply'],
            ['Maximum age', 'None. DGCA sets no upper age limit for flight crew candidate registration'],
            ['Number of computer numbers', 'One per candidate, valid for life'],
          ],
        },
        note: 'If your Class 12 stream did not include Physics and Mathematics, clear both through the National Institute of Open Schooling first and submit that marksheet. NIOS results are accepted and a large share of every ground school batch arrives this way.',
      },
      {
        heading: 'What documents do you need?',
        paragraphs: [
          'Six documents, and the scan quality matters as much as the content. Rejections are far more often about an unreadable upload than about an ineligible candidate.',
        ],
        list: [
          'Class 10 certificate as date of birth proof',
          'Class 12 marksheet showing Physics and Mathematics, or the NIOS equivalent',
          'Aadhaar or passport as identity proof',
          'Recent passport-size photograph in the size and format the portal specifies',
          'Signature scan on plain white paper',
          'Address proof',
        ],
        pitfalls: [
          'Uploading phone photographs taken at an angle instead of flat, fully legible scans',
          'Submitting a Class 12 marksheet where the Physics or Mathematics result is cut off at the page edge',
          'Using a photograph with a patterned background or a filter applied',
          'Signing with a ballpoint on lined paper, which scans poorly and gets flagged',
        ],
      },
      {
        heading: 'How do you apply for a computer number?',
        paragraphs: [
          'Six steps on the DGCA Pariksha portal. Nothing here is difficult, but every field is checked against a document, so work with the certificates open in front of you rather than from memory.',
        ],
        steps: [
          ['Register on DGCA Pariksha', 'Create a candidate account at pariksha.dgca.gov.in and verify your email address and mobile number. Use an email you will still have access to in five years.'],
          ['Fill the computer number application', 'Enter your personal details exactly as they appear on your Class 10 certificate. Any mismatch between documents is a rejection, not a query.'],
          ['Upload documents', 'Attach the education, identity, photograph and signature files in the formats and sizes the portal specifies. Check each preview before submitting.'],
          ['Pay the application fee', 'Complete payment online through the portal and save the transaction receipt.'],
          ['Wait for CEO approval', 'The Chief Examination Officer at DGCA reviews and approves the application. Your number then appears in your dashboard.'],
          ['Book your first paper', 'Once the number is live, register for the papers you want in the next available examination session at Rs 2,500 each.'],
        ],
        totalTime: 'P2M',
        diagram: {
          type: 'flow',
          title: 'From application to your first DGCA paper',
          caption:
            'The approval step is the one students cannot control or hurry. Everything before it is paperwork you can finish in an afternoon; everything after it runs on the published examination calendar.',
          data: [
            { label: 'Register on DGCA Pariksha', detail: 'Candidate account created, email and mobile verified.' },
            { label: 'Submit the application', detail: 'Details entered from the Class 10 certificate, six documents uploaded, fee paid.' },
            { label: 'CEO approval', detail: 'DGCA verifies your documents and allots the computer number. Not instant.' },
            { label: 'Registration window opens', detail: 'Each examination session has its own opening and closing dates, published weeks ahead.' },
            { label: 'Book papers', detail: 'Select subjects individually and pay Rs 2,500 per paper, non-refundable.' },
            { label: 'Admit card and exam', detail: 'Download the admit card, check the centre and reporting time, then sit the paper.' },
          ],
        },
      },
      {
        heading: 'When should you apply for the computer number?',
        paragraphs: [
          'Apply as soon as your Class 12 results are out. Approval is not instant, and examination registration windows close well before the session dates. Students who apply for the number and the paper in the same month usually miss the session and wait for the next one.',
          'The sensible order is: computer number first, Class 2 medical alongside it, then ground school, then paper bookings. The number and the medical both involve waiting on somebody else, so start both early and study while they process.',
        ],
        example: {
          title: 'What a late computer number application actually costs',
          given: [
            'Student finishes Class 12 in May and starts ground school in June',
            'They apply for the computer number in late August, aiming at the September session',
            'The September 2026 regular session runs 22 to 26 September, with registration closed weeks earlier',
          ],
          working: [
            ['Registration window', 'Already closed by the time the number is approved'],
            ['Next regular session', '15 to 19 December 2026'],
            ['Nearest OLODE session', '28 to 30 October 2026, if registration is still open'],
            ['Delay if both are missed', 'Roughly three months of ground school with nothing to show for it'],
          ],
          answer:
            'A three-week delay in one form can cost a full examination cycle. Applying in May or June instead would have put two papers on the board before the December session even opened.',
        },
      },
      {
        heading: 'Why do computer number applications get rejected?',
        paragraphs: [
          'Almost every rejection we see comes down to a mismatch between two documents, or a scan the reviewer cannot read. Neither has anything to do with your eligibility, and both are avoidable in the ten minutes before you hit submit.',
        ],
        list: [
          'Name spelled differently on the Class 10 certificate and the Aadhaar card',
          'Class 12 marksheet uploaded without the Physics or Mathematics result visible',
          'Photograph that does not meet the portal specification for size, background or recency',
          'Date of birth entered from the Class 12 certificate instead of the Class 10 certificate',
          'Incomplete NIOS documentation for additional subjects',
          'Middle name present on one document and omitted on another',
        ],
        note: 'If your documents genuinely disagree with each other, fix the underlying document before applying. Correcting a name on a school certificate is slow, but it is far slower once the mismatch is baked into your DGCA record.',
      },
      {
        heading: 'What can you do once the number is issued?',
        paragraphs: [
          'The number unlocks the examination system, and nothing else. It is not a licence, not a permission to fly and not proof of eligibility for anything beyond sitting papers.',
        ],
        list: [
          'Book any DGCA flight crew theory paper at Rs 2,500 each',
          'Sit papers in either the regular sessions or the OLODE sessions',
          'View your results and pass history in one place',
          'Carry the same number through CPL and later ATPL papers',
          'Reference it in your eventual licence application on eGCA',
        ],
      },
      {
        heading: 'How does the computer number fit into the wider licence process?',
        paragraphs: [
          'It sits near the front, alongside the medicals, and it is one of only two things in the early stages that depend on somebody else approving something. Everything after it is within your control.',
        ],
        table: {
          headers: ['Stage', 'Typical time', 'Depends on'],
          rows: [
            ['Class 2 medical', '1 to 2 months', 'Appointment availability'],
            ['Computer number', 'Weeks, then session dates', 'CEO approval at DGCA'],
            ['Ground school and papers', '4 to 8 months', 'Examination calendar and your study'],
            ['200 hours of flying', '10 to 14 months', 'Weather and aircraft serviceability'],
            ['Licence issue on eGCA', '1 to 3 months', 'Document completeness'],
          ],
          caption: 'Total CPL timeline for a full-time student is 18 to 24 months.',
        },
      },
      {
        heading: 'Keeping your DGCA records clean for the next ten years',
        paragraphs: [
          'You will use this number through your CPL papers, through your ATPL papers years later, and in every licence transaction in between. Treat the account as a permanent professional record from day one.',
        ],
        steps: [
          ['Use a permanent email address', 'Not a college address you lose access to after graduation. Result notifications and session announcements go there.'],
          ['Save every receipt and admit card', 'Keep a single folder with the application receipt, each paper booking, each admit card and each result. Reconstructing this later is painful.'],
          ['Keep contact details current', 'Update the portal when your mobile number or address changes, so session notices reach you.'],
          ['Record your number offline', 'Write it where you will find it in five years. Students returning after a break routinely cannot locate theirs.'],
        ],
        pitfalls: [
          'Applying for a second computer number after losing the first; each candidate may hold only one',
          'Letting the registered mobile number lapse, then missing a registration window notice',
          'Assuming the computer number and the eGCA account are the same login',
        ],
      },
    ],
    glossary: [
      ['Computer number', 'The unique lifetime candidate ID allotted by DGCA for the flight crew examination system. Required before booking any paper.'],
      ['DGCA Pariksha', 'The DGCA examination portal at pariksha.dgca.gov.in, used to obtain a computer number and book theory papers.'],
      ['eGCA', 'The separate DGCA portal used for licence applications, endorsements and document submission.'],
      ['CEO (DGCA)', 'Chief Examination Officer. The DGCA officer who approves computer number applications.'],
      ['NIOS', 'National Institute of Open Schooling. Where students from other streams clear Physics and Mathematics as additional subjects.'],
      ['OLODE', 'Online Distance Open Delivery Examination. The additional DGCA examination stream running between the four regular sessions.'],
      ['Registration window', 'The period before each examination session during which candidates may book papers. It closes weeks before the session itself.'],
    ],
    quiz: [
      {
        question: 'How many computer numbers may one DGCA candidate hold?',
        options: ['One per licence type', 'One, valid for life', 'One per examination session', 'As many as needed'],
        answer: 1,
        explanation: 'A candidate is allotted one computer number, and it is valid for life. It carries through CPL and later ATPL papers.',
      },
      {
        question: 'Which document should your date of birth be entered from?',
        options: ['The Class 12 marksheet', 'The Aadhaar card', 'The Class 10 certificate', 'The passport'],
        answer: 2,
        explanation: 'The Class 10 certificate is the date of birth proof. Entering it from another document is a common cause of rejection.',
      },
      {
        question: 'Which category is exempt from the 10+2 Physics and Mathematics requirement?',
        options: ['CPL', 'ATPL', 'PPL', 'None'],
        answer: 2,
        explanation: 'The PPL category is exempt. Every other flight crew category requires 10+2 with Physics and Mathematics or an equivalent qualification.',
      },
      {
        question: 'What is the maximum age to register as a DGCA flight crew candidate?',
        options: ['28 years', '32 years', '35 years', 'There is no maximum age'],
        answer: 3,
        explanation: 'DGCA sets no upper age limit for flight crew candidate registration. Airlines set their own recruitment age caps, but the regulator does not.',
      },
    ],
    faqs: [
      ['Is a computer number the same as an eGCA ID?', 'No. The computer number is your examination candidate ID on DGCA Pariksha. eGCA is the separate portal used for licence applications and endorsements. You will use both, at different stages of training.'],
      ['Does a DGCA computer number expire?', 'No. Once allotted, a computer number is valid for life, and a candidate may hold only one. Students returning after a break of several years use the same number.'],
      ['Can I get a computer number without Physics and Maths?', 'Only for the PPL category. For CPL and other flight crew categories DGCA requires 10+2 with Physics and Mathematics or an equivalent qualification, commonly cleared through NIOS.'],
      ['Is there an age limit to apply for a DGCA computer number?', 'No. DGCA states there is no maximum age limit to register as a flight crew candidate. Airline cadet programmes may set their own age caps, but that is separate from the regulator.'],
      ['How long does computer number approval take?', 'Approval depends on document verification by the Chief Examination Officer and is not instant. Apply well before an examination registration window rather than in the same month.'],
      ['Can I book an exam before my computer number is approved?', 'No. The number is required before you can register for any paper, which is why applying early matters more than most students expect.'],
      ['What if my name is spelled differently on two documents?', 'Fix the underlying document before applying. A mismatch between your Class 10 certificate and your identity proof is one of the most common rejection reasons, and correcting it after approval is far harder.'],
      ['Do I need a computer number for the RTR(A) exam?', 'RTR(A) is a separate radio telephony licence examination with its own process. The DGCA computer number covers the flight crew theory papers.'],
      ['Can I apply for a computer number while still in Class 12?', 'You need your Class 12 result showing Physics and Mathematics before the application can be approved. Prepare the other documents in advance so you can apply the week results are declared.'],
      ['What happens if my application is rejected?', 'You correct the issue and reapply. Most rejections are document mismatches or unreadable scans rather than eligibility problems, so they are usually fixable within days.'],
      ['Is the computer number printed on my licence?', 'Your DGCA records are linked through it, which is why the name and date of birth you enter at application must match your certificates exactly. Errors follow you through every result sheet.'],
      ['Do I need a computer number for ATPL papers too?', 'Yes, and it is the same number. You do not apply again years later; the number you were issued as a CPL student carries through.'],
    ],
  },
  sources: [
    ['DGCA Pariksha flight crew FAQs on computer number and eligibility', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
    ['DGCA Pariksha candidate portal', 'https://pariksha.dgca.gov.in/home'],
  ],
  related: ['dgca-exam-dates-2026', 'dgca-cpl-eligibility', 'dgca-exam-pattern-and-passing-marks'],
})
