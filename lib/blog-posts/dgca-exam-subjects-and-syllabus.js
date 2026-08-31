import { createPost, CATEGORIES } from './_shared'

export default createPost({
  title: 'DGCA Exam Subjects and Syllabus: All Five CPL Papers Explained',
  slug: 'dgca-exam-subjects-and-syllabus',
  excerpt:
    'Topic-by-topic breakdown of the five DGCA CPL theory papers - Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific.',
  coverImage: '/blog/dgca-exam-subjects-and-syllabus.webp',
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
      'A DGCA CPL candidate writes five theory papers: Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific. Each paper carries 100 multiple-choice questions over roughly two hours, each question is worth one mark, there is no negative marking, and you need 70 per cent to pass. PPL candidates write three of the five.',
    sections: [
      {
        heading: 'Which subjects are in the DGCA CPL exam?',
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
        note: 'RTR(A) sits outside this table. It is a separate radio telephony licence with its own two-part examination.',
      },
      {
        heading: 'What is covered in Air Navigation?',
        paragraphs: [
          'Air Navigation is the paper students fail most often, because it is the only one that demands sustained calculation under time pressure. Roughly half the marks come from problems you solve on a CR-3 or navigation computer.',
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
        note: 'Practice the wind triangle daily rather than weekly. Speed on this paper comes from repetition, not from re-reading theory.',
      },
      {
        heading: 'What is covered in Aviation Meteorology?',
        paragraphs: [
          'Meteorology rewards students who learn to read charts and coded reports rather than memorise definitions. Decoding a METAR and a TAF correctly is worth a disproportionate share of marks.',
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
      },
      {
        heading: 'What is covered in Air Regulation?',
        paragraphs: [
          'Air Regulation is a memory paper, and it is the one where a student can score 90 per cent with disciplined revision. The examiner tests whether you know the Indian rule, not the general principle.',
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
      },
      {
        heading: 'What is covered in Technical General?',
        paragraphs: [
          'Technical General covers how the aeroplane and its systems work, independent of type. Aerodynamics carries the largest block of questions.',
        ],
        list: [
          'Aerodynamics: lift, weight, thrust and drag, aerofoil theory, stall and spin',
          'Stability, control surfaces, trim and load factor',
          'Aircraft structures, materials and flight controls',
          'Piston engines: carburettor and fuel injection, ignition, mixture, detonation',
          'Turbine engines: compressor, combustion, turbine, thrust and EPR',
          'Propellers, constant speed units and feathering',
          'Electrical, hydraulic, pneumatic, fuel, ice and rain protection systems',
          'Flight instruments: pitot-static, gyroscopic, magnetic compass and errors',
          'Weight and balance, loading and centre of gravity limits',
        ],
      },
      {
        heading: 'What is Technical Specific?',
        paragraphs: [
          'Technical Specific is tied to one aircraft type. You write it on the aeroplane your licence will be endorsed for, so a student flying a Cessna 172 writes a different paper from one flying a Diamond DA40 or a Piper Seneca. The syllabus comes from that aircraft flight manual: limitations, systems, normal and emergency procedures, and performance charts.',
          'Read the actual POH for your type. Coaching notes are a supplement, never the source.',
        ],
      },
      {
        heading: 'Which papers does a PPL candidate write?',
        paragraphs: [
          'Three: Air Regulation, Aviation Meteorology and Air Navigation. Technical General and Technical Specific belong to the CPL route. PPL candidates are also exempt from the 10+2 Physics and Mathematics requirement that applies to every other flight crew category.',
        ],
      },
    ],
    faqs: [
      ['How many subjects are there in the DGCA CPL exam?', 'Five theory papers: Air Navigation, Aviation Meteorology, Air Regulation, Technical General and Technical Specific. RTR(A) is a separate licence examination.'],
      ['Which DGCA subject is the hardest?', 'Most students find Air Navigation hardest because it is calculation-heavy and time-bound. Air Regulation is usually the easiest to score in with disciplined revision.'],
      ['Is there negative marking in DGCA exams?', 'No. DGCA papers carry no negative marking, so attempt every question rather than leaving blanks.'],
      ['How many questions come in each DGCA paper?', 'Each paper carries about 100 multiple-choice questions worth one mark each, over roughly two hours.'],
      ['Can I write DGCA subjects one at a time?', 'Yes. You book papers individually on the DGCA Pariksha portal and pay per paper, so most students clear two or three in a session and the rest later.'],
    ],
  },
  sources: [
    ['DGCA Pariksha, flight crew examination portal', 'https://pariksha.dgca.gov.in/home'],
    ['DGCA Civil Aviation Requirements, Section 7 Series B', 'https://www.dgca.gov.in/digigov-portal/'],
  ],
  related: ['dgca-exam-pattern-and-passing-marks', 'dgca-exam-dates-2026', 'rtr-a-exam-guide'],
})
