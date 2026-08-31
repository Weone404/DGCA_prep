import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA Exam Subjects and Syllabus: All Five CPL Papers Explained',
  slug: 'dgca-exam-subjects-and-syllabus',
  excerpt:
    'Topic-by-topic breakdown of the five DGCA CPL theory papers - Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific.',
  coverImage: '/blog/dgca-exam-subjects-and-syllabus.webp',
  coverMotif: 'subjects',
  category: CATEGORIES.exams.slug,
  keywords: [
    'DGCA exam subjects',
    'DGCA CPL syllabus',
    'Air Navigation syllabus DGCA',
    'Technical General syllabus',
    'DGCA ground classes syllabus',
  ],
  publishedDate: '2026-08-31',
  content: {
    intro:
      'A DGCA CPL candidate writes five theory papers: Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific. Each carries about 100 multiple-choice questions over roughly two hours, one mark per question, no negative marking, and 70 per cent to pass. Every paper is assessed on its own. PPL candidates write three of the five.',
    keyFacts: [
      ['Number of papers', 'Five for CPL, three for PPL'],
      ['Questions per paper', 'About 100 MCQs in about 2 hours'],
      ['Marking', 'One mark per question, no negative marking, no grace marks'],
      ['Pass mark', '70 per cent, subject by subject'],
      ['Fee per paper', 'Rs 2,500, non-refundable'],
      ['Sittings in 2026', 'Twelve: four regular, eight OLODE'],
      ['Most failed paper', 'Air Navigation'],
      ['Easiest to score', 'Air Regulation'],
    ],
    sections: [
      {
        heading: 'Which subjects are in the DGCA CPL exam?',
        paragraphs: [
          'Five papers. Four are common to every candidate in the country. The fifth changes depending on which aeroplane you fly.',
          'Students arrive at ground school thinking these are five versions of the same difficulty. They are not. One is a calculation paper, one a chart-reading paper, one a memory paper, one an engineering paper, and one is a close reading of a single flight manual. Treat them alike and you will fail at least one.',
        ],
        table: {
          headers: ['Paper', 'Questions', 'Duration', 'Pass mark'],
          rows: [
            ['Air Navigation', '100 MCQ', 'About 2 hours', '70%'],
            ['Aviation Meteorology', '100 MCQ', 'About 2 hours', '70%'],
            ['Air Regulation', '100 MCQ', 'About 2 hours', '70%'],
            ['Technical General', '100 MCQ', 'About 2 hours', '70%'],
            ['Technical Specific', 'Aircraft type specific', 'About 2 hours', '70%'],
          ],
        },
        note: 'RTR(A) sits outside this table. It is a separate radio telephony licence with its own two-part examination, not one of the five theory papers.',
      },
      {
        heading: 'How are the DGCA papers marked?',
        paragraphs: [
          'One mark per question, no negative marking, no grace marks. That combination decides how you sit in the hall. Nothing is deducted for a wrong answer, so a blank is strictly worse than a guess. Leave nothing unanswered.',
          'Because there are no grace marks, 69 per cent is a fail. And because each subject is assessed on its own, a 95 in Air Regulation does nothing for a 66 in Air Navigation. No aggregate, no compensation between papers. You are sitting five separate examinations that happen to share a portal.',
        ],
        pitfalls: [
          'Booking all five papers in one session because the portal allows it, then losing Rs 5,000 on two you never revised for',
          'Leaving calculation questions blank in Air Navigation when a wrong answer costs nothing',
          'Targeting exactly 70 per cent in mocks, which leaves no margin for two misread questions',
          'Assuming a strong paper can carry a weak one',
        ],
      },
      {
        heading: 'What is covered in Air Navigation?',
        paragraphs: [
          'This is the paper students fail most often. It is the only one that demands sustained calculation under time pressure, and roughly half the marks come from problems solved on a CR-3 or navigation computer.',
          'Two hours for 100 questions is about 72 seconds each. Comfortable for a definition. Tight for a wind triangle. That is why students who know the material still run out of time.',
        ],
        list: [
          'Form of the earth, latitude and longitude, great circle and rhumb line',
          'Time: UTC, local mean time, standard time, sunrise and sunset problems',
          'Chart projections: Lambert conformal, Mercator, polar stereographic',
          'Dead reckoning, the triangle of velocities and the 1-in-60 rule',
          'Critical point and point of no return calculations',
          'Radio navigation: VOR, NDB and ADF, DME, ILS, RNAV and GNSS',
          'Flight planning, fuel policy and in-flight navigation logs',
        ],
        note: 'Practice the wind triangle daily, not weekly. Speed here is a motor skill built by repetition. Keep the same CR-3 from day one so the instrument is familiar under pressure.',
      },
      {
        heading: 'Worked example: the 1-in-60 rule',
        paragraphs: [
          'One degree of angular error puts you one nautical mile off track after sixty. Almost every track-correction question is built on that, and the examiner will not tell you which of the two corrections is wanted. Read the question twice.',
        ],
        example: {
          title: 'Regaining track after a 4 nm drift',
          given: [
            'Planned leg: 90 nm, departure to destination',
            'Distance flown along the leg: 30 nm',
            'Aircraft is 4 nm right of the planned track',
            'Distance still to run: 60 nm',
          ],
          working: [
            ['Track error', '60 x 4 / 30 = 8 degrees. You have been tracking 8 degrees right since departure.'],
            ['Closing angle', '60 x 4 / 60 = 4 degrees. The extra angle needed to converge on the destination.'],
            ['Turn to parallel the track', 'Left 8 degrees. Drift stops, but you stay 4 nm right of track.'],
            ['Turn to reach the destination', 'Left 8 + 4 = 12 degrees.'],
          ],
          answer:
            'Alter heading 12 degrees left. If the question asks only to stop the drift, the answer is 8 degrees, so check whether the examiner wants track error, closing angle or the sum.',
        },
        note: 'The same rule sits behind VOR and ILS displacement questions, cross-track error on an RNAV display, and descent gradient problems in flight planning. Learn it once, use it all paper.',
      },
      {
        heading: 'What is covered in Aviation Meteorology?',
        paragraphs: [
          'Meteorology rewards chart and code reading over memorised definitions. Decoding a METAR and a TAF correctly is worth a disproportionate share of marks, and those are the fastest questions in the paper once the format is second nature.',
          'The theory half is physical, not mathematical. Students who learn cloud types as a list of Latin names score badly. Students who learn which cloud carries icing, which carries turbulence and which carries neither score well.',
        ],
        list: [
          'Composition and vertical structure of the atmosphere, ISA values',
          'Pressure, temperature, density and altimetry, including QNH, QFE and QNE',
          'Wind: pressure gradient, geostrophic and gradient wind, land and sea breezes, jet streams',
          'Humidity, cloud classification and formation, precipitation',
          'Air masses, fronts and the life cycle of a depression',
          'Thunderstorms, turbulence, wind shear, microbursts and airframe icing',
          'Visibility, fog types, and their effect on aerodrome operations',
          'METAR, SPECI, TAF, SIGMET, AIRMET and aerodrome warnings',
        ],
        table: {
          headers: ['Code', 'What it carries'],
          rows: [
            ['METAR', 'Routine observed weather at an aerodrome'],
            ['SPECI', 'Special observation issued when conditions change significantly'],
            ['TAF', 'Aerodrome forecast with change groups and a validity period'],
            ['SIGMET', 'Warning of en route weather hazardous to aircraft'],
            ['AIRMET', 'Warning of weather significant to lower level operations'],
            ['Aerodrome warning', 'Local warning of conditions that could damage aircraft on the ground'],
          ],
          caption: 'Decode real reports until the format disappears and only the meaning is left.',
        },
      },
      {
        heading: 'What is covered in Air Regulation?',
        paragraphs: [
          'A memory paper, and the one where a disciplined student reaches 90 per cent. The examiner tests whether you know the Indian rule, not the general principle. Read only an international textbook and you will get the reasoning right and the answer wrong.',
          'Work from the Aircraft Act 1934, the Aircraft Rules 1937, the Civil Aviation Requirements and the Indian AIP. When two options both sound correct, the right one usually carries the Indian wording rather than the tidier ICAO phrasing.',
        ],
        list: [
          'The Aircraft Act 1934 and the Aircraft Rules 1937',
          'DGCA structure, Civil Aviation Requirements and Aeronautical Information Publications',
          'ICAO annexes, with Annex 1, 2, 6, 11, 13 and 14 carrying most of the weight',
          'Rules of the air, right of way, VFR and IFR minima',
          'Airspace classification, ATS routes and separation standards',
          'Flight crew licensing, ratings, currency and logbook requirements',
          'Aerodrome markings, lighting and signals',
          'Accident and incident reporting, search and rescue',
        ],
        table: {
          headers: ['Annex', 'Subject'],
          rows: [
            ['Annex 1', 'Personnel Licensing'],
            ['Annex 2', 'Rules of the Air'],
            ['Annex 6', 'Operation of Aircraft'],
            ['Annex 11', 'Air Traffic Services'],
            ['Annex 13', 'Aircraft Accident and Incident Investigation'],
            ['Annex 14', 'Aerodromes'],
          ],
          caption: 'Knowing which annex owns a topic is often enough to eliminate two options.',
        },
        note: 'Write this paper first. It needs no calculation practice, it builds vocabulary used in the other four, and an early pass proves to a nervous student that the system is beatable.',
      },
      {
        heading: 'What is covered in Technical General?',
        paragraphs: [
          'Technical General asks how the aeroplane and its systems work, independent of type. Aerodynamics carries the largest block of questions, and students who understand the four forces properly find that half the systems questions answer themselves.',
          'This is the paper where rote learning fails hardest. An examiner can ask the same stall question six different ways, and only a student who understands why the wing stops flying gets all six right.',
        ],
        list: [
          'Aerodynamics: lift, weight, thrust and drag, aerofoil theory, angle of attack, stall and spin',
          'Stability, control surfaces, trim and load factor',
          'Aircraft structures, materials and flight controls',
          'Piston engines: carburettor and fuel injection, ignition, mixture, detonation',
          'Turbine engines: compressor, combustion, turbine, thrust and EPR',
          'Propellers, constant speed units and feathering',
          'Electrical, hydraulic, pneumatic, fuel, and ice and rain protection systems',
          'Flight instruments: pitot-static, gyroscopic, magnetic compass and its errors',
          'Weight and balance, loading and centre of gravity limits',
        ],
        table: {
          headers: ['Topic block', 'Share of the paper', 'How to study it'],
          rows: [
            ['Aerodynamics', 'Largest single block', 'Understand the mechanism, then answer from first principles'],
            ['Engines, piston and turbine', 'Heavy', 'Trace the airflow and the fuel path end to end'],
            ['Flight instruments', 'Moderate', 'Learn each error by its cause, not as a list'],
            ['Aircraft systems', 'Moderate', 'Draw each system once from memory'],
            ['Weight and balance', 'Small but scoring', 'Practise the loading arithmetic until it is automatic'],
          ],
          caption: 'Weighting is indicative, based on how the syllabus is distributed rather than a published mark scheme.',
        },
        pitfalls: [
          'Memorising compass errors as a mnemonic without understanding acceleration and turning errors, then failing when the question reverses the hemisphere',
          'Skipping weight and balance because it looks like arithmetic; it is the cheapest block of marks in the paper',
          'Studying turbine engines from airline material rather than at the level the DGCA syllabus asks for',
        ],
      },
      {
        heading: 'What is Technical Specific and how is it different?',
        paragraphs: [
          'Technical Specific is tied to one aircraft type. You write it on the aeroplane your licence will be endorsed for, so a student flying a Cessna 172 sits a different paper from one flying a Diamond DA40 or a Piper Seneca.',
          'The syllabus comes from that aircraft flight manual: limitations, systems, normal and emergency procedures, and performance charts. Read the actual Pilot Operating Handbook. Coaching notes are a supplement, never the source, and every year a few students discover that the hard way when a question quotes a limitation their notes had rounded off.',
        ],
        table: {
          headers: ['', 'Technical General', 'Technical Specific'],
          rows: [
            ['Scope', 'All aeroplanes, general principles', 'One aircraft type'],
            ['Primary source', 'Standard ground school texts', 'The aircraft flight manual or POH'],
            ['When to write it', 'Third, after Air Regulation and Meteorology', 'Last, once your type is fixed'],
            ['Typical content', 'Aerodynamics, engines, instruments', 'Limitations, systems, emergency drills, performance charts'],
          ],
        },
        note: 'Do not book Technical Specific before you know which aircraft you will fly. Students who guess the type and write early sometimes have to sit the paper again on a different aeroplane.',
      },
      {
        heading: 'Which papers does a PPL candidate write?',
        paragraphs: [
          'Three: Air Regulation, Aviation Meteorology and Air Navigation. Technical General and Technical Specific belong to the CPL route.',
          'PPL candidates are also exempt from the 10+2 Physics and Mathematics requirement that applies to every other flight crew category. That exemption covers the PPL only, so a student who later wants a CPL still has to produce Physics and Mathematics.',
        ],
        table: {
          headers: ['Paper', 'PPL', 'CPL'],
          rows: [
            ['Air Regulation', 'Yes', 'Yes'],
            ['Aviation Meteorology', 'Yes', 'Yes'],
            ['Air Navigation', 'Yes', 'Yes'],
            ['Technical General', 'No', 'Yes'],
            ['Technical Specific', 'No', 'Yes'],
          ],
        },
      },
      {
        heading: 'In what order should you write the five papers?',
        paragraphs: [
          'Sequence the papers by how they support each other, not by how hard they look. Each one in this order feeds vocabulary or technique into the next.',
        ],
        steps: [
          ['Air Regulation first', 'Pure recall, quick to build, and it gives you an early pass that settles the nerves. It also teaches the vocabulary the other four papers assume you already know.'],
          ['Aviation Meteorology second', 'Chart and code reading overlaps directly with the flight planning work in Air Navigation, so doing it now shortens the hardest paper later.'],
          ['Technical General third', 'Aerodynamics and systems underpin Technical Specific. Writing it before your type paper means you meet type-specific systems already understanding the principle.'],
          ['Air Navigation fourth', 'The heaviest paper. Give it a dedicated block and daily calculation practice rather than fitting it around the others.'],
          ['Technical Specific last', 'Write it once your aircraft type is settled and you have read the flight manual cover to cover.'],
        ],
        diagram: {
          type: 'flow',
          title: 'Recommended order for the five DGCA CPL theory papers',
          caption:
            'Each paper feeds the next. Air Regulation builds the vocabulary, Meteorology builds the chart reading that Navigation needs, and Technical General builds the principles that Technical Specific applies to one aeroplane.',
          data: [
            { label: 'Air Regulation', detail: 'Pure recall. Quickest first pass and the vocabulary base for everything else.' },
            { label: 'Aviation Meteorology', detail: 'Chart and code reading that Air Navigation flight planning reuses directly.' },
            { label: 'Technical General', detail: 'Aerodynamics, engines, systems and instruments. Underpins the type paper.' },
            { label: 'Air Navigation', detail: 'Heaviest paper. Needs a dedicated study block and daily calculation practice.' },
            { label: 'Technical Specific', detail: 'Written last, on the aircraft type your licence will be endorsed for.' },
          ],
        },
      },
      {
        heading: 'How long does the full syllabus take to cover?',
        paragraphs: [
          'Four to eight months of full-time study for all five papers, and that assumes you are writing papers as you finish them rather than saving them all for one session. With twelve sittings across 2026, there is no reason to hold a finished subject back.',
        ],
        steps: [
          ['Weeks 1 to 6', 'Air Regulation from end to end, plus one full mock paper a week under a two-hour clock.'],
          ['Weeks 7 to 14', 'Aviation Meteorology, with daily METAR and TAF decoding as a fixed habit rather than an occasional exercise.'],
          ['Weeks 15 to 24', 'Technical General, drawing each aircraft system once from memory before moving on.'],
          ['Weeks 25 to 36', 'Air Navigation, with navigation computer problems every single day. This is the block students most often under-resource.'],
          ['Weeks 37 onwards', 'Technical Specific once the aircraft type is fixed, worked directly from the flight manual.'],
        ],
        pitfalls: [
          'Studying all five papers in parallel and finishing none; the passes come from depth, not coverage',
          'Practising loose question sets instead of full papers under a two-hour clock, then running out of time in the hall',
          'Leaving Air Navigation until last in the study plan as well as the exam order, which compresses the paper that needs the most practice',
        ],
      },
      {
        heading: 'What is the fastest way to lift a weak subject?',
        paragraphs: [
          'Keep an error log by topic rather than by paper. After each mock, write down only the topic of every question you got wrong. Within three mocks a pattern appears, and it is almost never the whole syllabus. It is four or five topics.',
          'Revise the log, not the book. A student who reworks twenty logged errors a week moves faster than one who rereads a chapter for the third time.',
        ],
        list: [
          'Work full papers under a two-hour clock at least twice a week',
          'Log every wrong answer by topic, then revise the log rather than the textbook',
          'Learn the Indian rule, not the general principle, for every Air Regulation item',
          'Work every calculation on the physical navigation computer you will take into the hall, not on a phone app',
          'Read the question stem twice; DGCA papers punish skim reading more than weak theory',
          'Attempt every question, since there is no negative marking and a blank scores the same as a wrong answer',
        ],
      },
    ],
    glossary: [
      ['METAR', 'A routine coded aerodrome weather report, issued at fixed intervals and decoded in the Aviation Meteorology paper.'],
      ['TAF', 'Terminal Aerodrome Forecast. A coded forecast of expected conditions at an aerodrome over a stated validity period.'],
      ['VOR', 'VHF Omnidirectional Range. A ground-based radio navigation aid that gives the aircraft a bearing to or from the station.'],
      ['DME', 'Distance Measuring Equipment. Gives slant range from the aircraft to a ground station in nautical miles.'],
      ['NDB', 'Non-Directional Beacon. A ground transmitter used with an ADF in the aircraft to give a relative bearing.'],
      ['ISA', 'International Standard Atmosphere. The reference atmosphere used for performance and altimetry calculations.'],
      ['QNH', 'The altimeter subscale setting that makes the instrument read elevation above mean sea level when on the ground.'],
      ['Great circle', 'The shortest path between two points on the earth, cutting a plane through the centre of the earth.'],
    ],
    quiz: [
      {
        question: 'How many theory papers does a DGCA CPL candidate write, and what is the pass mark in each?',
        options: ['Three papers at 50 per cent', 'Four papers at 60 per cent', 'Five papers at 70 per cent', 'Five papers at 50 per cent'],
        answer: 2,
        explanation: 'Five papers - Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific - each needing 70 per cent, assessed subject by subject with no aggregate.',
      },
      {
        question: 'Which ICAO annex covers Personnel Licensing?',
        options: ['Annex 1', 'Annex 2', 'Annex 6', 'Annex 14'],
        answer: 0,
        explanation: 'Annex 1 is Personnel Licensing. Annex 2 is Rules of the Air, Annex 6 is Operation of Aircraft and Annex 14 is Aerodromes.',
      },
      {
        question: 'An aircraft has flown 30 nm of a 90 nm leg and is 4 nm right of track. What is the track error?',
        options: ['4 degrees', '6 degrees', '8 degrees', '12 degrees'],
        answer: 2,
        explanation: 'Using the 1-in-60 rule, track error is 60 x 4 / 30 = 8 degrees. The closing angle over the remaining 60 nm is 60 x 4 / 60 = 4 degrees, so a turn of 12 degrees left reaches the destination.',
      },
      {
        question: 'Which paper is tied to a single aircraft type and drawn from its flight manual?',
        options: ['Technical General', 'Technical Specific', 'Air Navigation', 'Air Regulation'],
        answer: 1,
        explanation: 'Technical Specific covers one aircraft type, and its syllabus comes from that aeroplane flight manual - limitations, systems, procedures and performance charts.',
      },
    ],
    faqs: [
      ['How many subjects are there in the DGCA CPL exam?', 'Five theory papers: Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific. RTR(A) is a separate radio telephony licence examination and is not counted among these five.'],
      ['Which DGCA subject is the hardest?', 'Most students find Air Navigation hardest because it is calculation-heavy and time-bound, with roughly half the marks coming from problems solved on a navigation computer. Air Regulation is usually the easiest to score in.'],
      ['Is there negative marking in DGCA exams?', 'No. DGCA papers carry no negative marking and no grace marks, so attempt every question. A blank answer scores exactly the same as a wrong one.'],
      ['How many questions come in each DGCA paper?', 'Each paper carries about 100 multiple-choice questions worth one mark each, over roughly two hours. The total is 100 marks and the pass mark is 70.'],
      ['Can I write DGCA subjects one at a time?', 'Yes. Papers are booked and paid for individually on the DGCA Pariksha portal at Rs 2,500 each, so most students clear two or three in a session and the rest later.'],
      ['Which papers does a PPL candidate write?', 'Three: Air Regulation, Aviation Meteorology and Air Navigation. PPL candidates are also exempt from the 10+2 Physics and Mathematics requirement that applies to other flight crew categories.'],
      ['What order should I write the DGCA papers in?', 'Air Regulation, then Aviation Meteorology, then Technical General, then Air Navigation, and Technical Specific last. Each paper builds vocabulary or technique the next one assumes.'],
      ['How long does it take to cover the whole DGCA syllabus?', 'Four to eight months of full-time study for all five papers, writing each one as you finish it rather than saving them for a single session. There are twelve sittings across 2026.'],
      ['Do I need to buy the aircraft flight manual for Technical Specific?', 'You need access to the Pilot Operating Handbook for the type you will fly. Coaching notes summarise it, but questions can quote limitations exactly, so work from the manual itself.'],
      ['Is the DGCA syllabus the same for CPL and ATPL?', 'The subject names overlap, but ATPL papers are written through the same DGCA Pariksha system at the same 70 per cent standard and are pitched at airline operations. Most first officers clear them while building hours.'],
      ['How many times can I attempt a DGCA paper?', 'DGCA does not prescribe a fixed lifetime cap on attempts. You re-register for the failed subject in a later session and pay the fee again, and papers already cleared stay cleared.'],
      ['How long does a passed DGCA paper stay valid?', 'A pass is not permanent. The validity window for licence issue is commonly cited as five years, but published sources differ, so confirm the current rule against the Civil Aviation Requirements and the DGCA Pariksha examination notice before planning a multi-year schedule.'],
    ],
  },
  sources: [
    ['DGCA Pariksha, flight crew examination portal', 'https://pariksha.dgca.gov.in/home'],
    ['DGCA Pariksha flight crew FAQs, eligibility and fee', 'https://pariksha.dgca.gov.in/Form/PLT_FAQs'],
    ['DGCA Civil Aviation Requirements, Section 7 Flight Crew Standards', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['dgca-exam-pattern-and-passing-marks', 'dgca-exam-dates-2026', 'rtr-a-exam-guide'],
})
