// Central mock "database" for the whole app. In a real product this would
// come from an API, but every page here reads/writes this in-memory store
// through React state so the UI is fully interactive.

export const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: 'grid' },
  { label: 'Subject Tests', href: '/subject-tests', icon: 'book' },
  { label: 'Class Test', href: '/class-test', icon: 'edit' },
  { label: 'AI Doubt Chat', href: '/ai-doubt-chat', icon: 'chat' },
  { label: 'My Progress', href: '/my-progress', icon: 'chart' },
  { label: 'Live Classes', href: '/live-classes', icon: 'video' },
  { label: 'Lectures', href: '/lectures', icon: 'play' },
  { label: 'Interview', href: '/interview', icon: 'mic' },
  { label: 'Mock Tests', href: '/mock-tests', icon: 'target' },
  { label: 'Resources', href: '/resources', icon: 'bookmark' },
  { label: 'My Profile', href: '/profile', icon: 'user' },
]

export const USER = {
  name: 'Nisha',
  role: 'VIP',
  email: 'nishaweoneaviation@gmail.com',
  avatar: 'https://i.pravatar.cc/120?img=12',
  coursesInProgress: 8,
  coursesComplete: 23,
}

import {
  QUESTION_BANK_SUBJECTS,
  QUESTION_BANK_CHAPTERS as _QUESTION_BANK_CHAPTERS,
  QUESTION_BANK_SUBJECT_TESTS,
} from './question-bank-data'

export const SUBJECTS = QUESTION_BANK_SUBJECTS.map((subject) => ({
  ...subject,
  tests: QUESTION_BANK_SUBJECT_TESTS.filter((test) => test.subject === subject.name).length,
  avg: 78,
}))

const METEOROLOGY_CHAPTERS = [
  'Atmosphere',
  'Atmospheric Pressure',
  'Temperature',
  'Air Density',
  'Humidity',
  'Winds',
  'Visibility and Fog',
  'Vertical Motion and Clouds',
  'Stability',
  'Optical Phenomena',
  'Precipitation',
  'Ice Accretion',
  'Thunderstorm',
  'Air Masses and Fronts and WDs',
  'Jet Streams',
  'Clear Air Turbulence',
  'Mountain Waves',
  'Tropical Systems',
  'Climatology of India',
  'Met Services',
  'Station Model',
  'METAR, SPECI and TREND',
  'TAF, ARFOR, ROFOR',
]

const RADIO_TELEPHONY_CHAPTERS = [
  'RT Procedures – General & Phraseology',
  'RT – Departure, En-Route & Approach',
  'RT – Emergencies & Special Procedures',
]

const GENERAL_NAVIGATION_CHAPTERS = [
  'Departure, Convergency & Conversion Angle',
  'Scale, Distance & Velocity',
  'One in 60 Rule',
  'Climb Gradient, PNR, PSR & Critical Point',
  'Magnetic Compasses',
  'Mercator Projection',
  'Lambert Conical Projection',
  'Polar Stereographic Projection',
  'PNR & PSR',
  'Flight Planning (Fuel Planning, Weight & Balance, ROD)',
  'Solar System & Time',
]

const RADIO_NAVIGATION_CHAPTERS = [
  'Properties of Radio Waves',
  'Modulation',
  'VOR & ADF',
  'ILS (Instrument Landing System)',
  'VOR',
  'Radar Principles',
  'Ground Radar',
  'AWR (Airborne Weather Radar)',
  'SSR (Secondary Surveillance Radar)',
  'DME (Distance Measuring Equipment)',
  'Radio Altimeter',
  'GPS',
  'Doppler Radar',
]

const AIR_REGULATIONS_CHAPTERS = [
  'Rules of the Air',
  'Air Traffic Services',
  'Personnel Licensing',
  'Accidents and Incidents',
]

const TECHNICAL_GENERAL_CHAPTERS = [
  'Overview and Definitions',
  'Atmosphere',
  'Basic Aerodynamic Theory',
  'Subsonic Airflow',
  'Lift',
  'Drag',
  'Stalling',
  'High Lift Devices',
  'Airframe Contamination',
  'Stability and Control',
  'Controls',
  'Flight Mechanics',
  'High Speed Flight',
  'Limitations',
  'Windshear',
  'Propellers',
  'Performance',
  'Basics of Jet Engine',
  'Types of Engine',
  'Compressors',
  'Combustion Chamber',
  'Turbine Assembly',
  'Jet Pipe',
  'Reverse Thrust',
  'Engine Starting System Requirements',
  'APU (Auxiliary Power Unit)',
  'Introduction',
  'General',
  'Lubrication',
  'Cooling',
  'Ignition',
  'Fuel',
  'Mixture',
  'Carburettors',
  'Icing',
  'Fuel Injection',
  'Performance and Power Augmentation',
  'Propellers',
  'Fuselage, Wings and Stabilizing Surfaces',
  'Basic Hydraulics',
  'Landing Gear',
  'Aircraft Wheels',
  'Aircraft Tyres',
  'Aircraft Brakes',
  'Flight Control System',
  'Flight Controls',
  'Powered Flying Controls',
  'Aircraft Pneumatic Systems',
  'Pressurization Systems',
  'Ice and Rain Protection',
  'Aircraft Oxygen Equipment',
  'Smoke Detection',
  'Fire Detection and Protection',
  'Aircraft Fuel Systems',
  'Aircraft Systems – Electrical & Electronics',
  'Aircraft Systems – Environmental & Emergency',
  'Flight Performance & Weight',
]

export const SUBJECT_TESTS = QUESTION_BANK_SUBJECT_TESTS

// Expose question bank chapters under both the original name and
// a legacy export name used elsewhere in the codebase.
export const QUESTION_BANK_CHAPTERS = _QUESTION_BANK_CHAPTERS
export const QUESTION_BANK_CHAPTERS_EXPORT = _QUESTION_BANK_CHAPTERS

export const CLASS_TESTS = [
  { id: 1, title: 'Weekly Test - Air Regulations', class: 'ATPL', date: 'Jul 14', time: '10:00 AM', status: 'upcoming', questions: 20 },
  { id: 2, title: 'Unit Test - Navigation Systems', class: 'CPL', date: 'Jul 16', time: '09:00 AM', status: 'upcoming', questions: 25 },
  { id: 3, title: 'Monthly Test - Meteorology', class: 'PPL', date: 'Jul 02', time: '11:00 AM', status: 'completed', score: 68, questions: 30 },
  { id: 4, title: 'Surprise Test - Radio Telephony', class: 'ATPL', date: 'Jun 28', time: '02:00 PM', status: 'completed', score: 92, questions: 15 },
  { id: 5, title: 'Quarterly Test - Technical General', class: 'CPL', date: 'Jul 21', time: '10:30 AM', status: 'upcoming', questions: 40 },
]

export const CHAT_SUGGESTIONS = [
  'Explain the difference between VFR and IFR conditions',
  'What are the main types of clouds and their formations?',
  'How do I navigate using VOR systems?',
  'Summarize basic aircraft systems and their functions',
]

export const PROGRESS_WEEKLY = [
  { day: 'Sat', hours: 1.2 },
  { day: 'Sun', hours: 2.1 },
  { day: 'Mon', hours: 1.6 },
  { day: 'Tue', hours: 2.8 },
  { day: 'Wed', hours: 1.9 },
  { day: 'Thu', hours: 3.2 },
  { day: 'Fri', hours: 2.4 },
]

export const PROGRESS_SUBJECTS = [
  { subject: 'Air Regulations', progress: 78 },
  { subject: 'Meteorology', progress: 65 },
  { subject: 'Navigation', progress: 82 },
  { subject: 'Technical General', progress: 71 },
  { subject: 'Radio Telephony', progress: 88 },
]

export const LIVE_CLASSES = [
  { id: 1, title: 'Navigation Techniques Deep Dive', teacher: 'Dr. Asha Rao', time: '10:00 AM', date: 'Today', status: 'live', subject: 'Navigation' },
  { id: 2, title: 'Meteorology Workshop', teacher: 'Prof. Imran Hossain', time: '01:00 PM', date: 'Today', status: 'upcoming', subject: 'Meteorology' },
  { id: 3, title: 'Radio Telephony Masterclass', teacher: 'Ms. Lena Cho', time: '04:00 PM', date: 'Today', status: 'upcoming', subject: 'Radio Telephony' },
  { id: 4, title: 'Aircraft Systems Explained', teacher: 'Dr. Asha Rao', time: '09:00 AM', date: 'Tomorrow', status: 'scheduled', subject: 'Technical General' },
  { id: 5, title: 'Air Regulations Review', teacher: 'Mr. Noah Bennett', time: '11:00 AM', date: 'Tomorrow', status: 'scheduled', subject: 'Air Regulations' },
]

// Helper function to process video slots
let nextLectureSlotId = 1
function makeSlots(overrides = [], count = 26) {
  return Array.from({ length: count }, (_, index) => {
    const override = overrides[index] || {}
    return {
      id: override.id ?? `video-${nextLectureSlotId++}`,
      order: index + 1,
      title: override.title ?? `Lecture ${index + 1}`,
      chapter: override.chapter ?? `Chapter ${index + 1}`,
      description: override.description ?? '',
      iframeCode: override.iframeCode ?? '',
      duration: override.duration ?? '',
      uploadedAt: override.uploadedAt ?? new Date(Date.now() - (count - index) * 86400000).toISOString(),
      ...override,
    }
  })
}

function buildSectionData(source) {
  return Object.keys(source).reduce((acc, subjectKey) => {
    const subject = source[subjectKey]
    acc[subjectKey] = {
      icon: subject.icon,
      subtitle: subject.subtitle,
      examTags: subject.examTags,
      color: subject.color,
      lectures: subject.videos ?? subject.lectures ?? [],
    }
    return acc
  }, {})
}

// Flatten all lectures from object structure into array for backward compatibility
function flattenLectures(lecturesObj) {
  const result = []
  let id = 1
  Object.keys(lecturesObj).forEach((subject) => {
    const subjectData = lecturesObj[subject]
    if (subjectData.videos && Array.isArray(subjectData.videos)) {
      subjectData.videos.forEach((video) => {
        result.push({
          ...video,
          id: id++,
          subject: subject,
        })
      })
    }
  })
  return result
}

export const LECTURES = {
  'Meteorology': {
    icon: '🌤️',
    subtitle: 'Quick Met concept bursts',
    examTags: ['ATPL', 'CPL'],
    color: '#0EA5E9',
    videos: makeSlots([
      { title: 'Met : Atmosphere Composition, Structure, and Standard Specifications', chapter: 'Chapter 1', description: 'Structure of the atmosphere, layers, and standard atmosphere.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9JdYfqbPQ6g?si=SKQbsC4kWbS_sNUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met : Atmospheric Pressure and Altimetry Fundamentals', chapter: 'Chapter 2', description: 'Temperature gradients, lapse rates, and inversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ks2598HPflQ?si=LLwIQ7X8KEGiSVp6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Principles of Temperature and Heat Dynamics', chapter: 'Chapter 3', description: 'Continued study of temperature effects and atmospheric stability.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/36VHcqi8Qyc?si=nvjT_tlt1zBaV4mn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Air Density in Aviation Principles and Effects', chapter: 'Chapter 4', description: 'Air Density in Aviation Principles and Effects', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lTPUZum-Lrc?si=_zO5Nfon9lW05ptw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Principles and Measurements of Atmospheric Humidity', chapter: 'Chapter 5', description: 'Principles and Measurements of Atmospheric Humidity.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iMBvaoH9OU0?si=4xyZV35HhzBn8TL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Meteorological Principles of Wind and Atmospheric Motion', chapter: 'Chapter 6', description: 'Meteorological Principles of Wind and Atmospheric Motion', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/08bD_5amrdI?si=Yz5o4LpvxgJrixiV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Aeronautical Meteorology Visibility and Fog Analysis', chapter: 'Chapter 7', description: 'Aeronautical Meteorology Visibility and Fog Analysis', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JkJ6BAur4VA?si=QCownWE0CuMOOr4Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Vertical Motion and Clouds', chapter: 'Chapter 8', description: 'Vertical Motion and Clouds.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XD56qfNTFjQ?si=TIRbbaAKIPB5JRTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Stability and Instability of the Atmosphere', chapter: 'Chapter 9', description: 'Stability and Instability of the Atmosphere', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0blqi_2TyMQ?si=YTYrQ0nj6W7hymzH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
    ], 10),
  },
  
  'Air Regulations': {
    icon: '📋',
    subtitle: 'Quick AR concept bursts',
    examTags: ['ATPL', 'CPL', 'DGCA'],
    color: '#6366F1',
    videos: makeSlots([
      { title: 'AR: Aircraft Nationality and Registration Marks', chapter: '3', description: 'Aircraft nationality and registration mark requirements.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/b2UQAaWuhd0?si=QHQYYYDW6hTjw6ZG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Rules of the Air and General Flight Regulations', chapter: '4', description: 'General flight rules and air traffic procedures.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IuoFKoUTe_Q?si=nKT5dUJndbTNcDuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Air Traffic Services and Indian Airspace Regulations', chapter: '5', description: 'ATS and Indian airspace structure.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xqdrSjlWF6A?si=srdtx0RfPQ66DOTa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Separation in the Vicinity of Aerodromes', chapter: '7', description: 'Aerodrome separation standards.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cOf8Lq60Jm0?si=RPhNJPsKNeTvW9Mf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Procedures for Aerodrome Control Service', chapter: '8', description: 'Aerodrome control procedures and rules.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/edzz9508vHs?si=apZlQRUE7GGHSpvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: International Organisations and Conventions for Civil Aviation', chapter: '2', description: 'ICAO and international conventions overview.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6zEsGtg4QFk?si=06_ielweJTZ8tMzS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Aviation Regulatory Definitions and Abbreviations', chapter: '1', description: 'Key aviation terms and definitions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-MJSaWAYd0I?si=BhqdRMuwtX8Wdik6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Air Traffic Separation Methods and Minima Standards', chapter: '6', description: 'Separation minima and standards.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sU3vReXDcLg?si=s6nTvtRewURFYvex" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Indian Aviation Law and National Air Regulations', chapter: '14', description: 'Indian aviation regulations and DGCA rules.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/joEmd8ePcyw?si=pjTK5imC8bTwBVO6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Procedures for Air Navigation Services', chapter: '13', description: 'Air navigation service procedures.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oC4kuSKKOFM?si=Jfp3nq7-bKm9KwSN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
    ], 10),
  },

  'Navigation': {
    icon: '🧭',
    subtitle: 'Quick Nav concept bursts',
    examTags: ['ATPL', 'CPL'],
    color: '#10B981',
    videos: makeSlots([
      { title: 'Navigation: Departure, Convergency & Conversion Angle', chapter: 'Chapter 1', description: 'Departure and convergency angles in navigation.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aqz-KE-bpKQ?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Navigation: Scale, Distance & Velocity', chapter: 'Chapter 2', description: 'Map scales and distance calculations.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xktxkf6fW7o?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Navigation: One in 60 Rule', chapter: 'Chapter 3', description: 'One-in-sixty navigation rule explained.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Xl5tnrStees?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      
      { title: 'Navigation: Magnetic Compasses', chapter: 'Chapter 5', description: 'Magnetic compass operations and errors.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Navigation: Mercator Projection', chapter: 'Chapter 6', description: 'Mercator chart projections.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Navigation: Lambert Conical Projection', chapter: 'Chapter 7', description: 'Lambert chart projections.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Navigation: Flight Planning and Fuel Planning', chapter: 'Chapter 8', description: 'Flight planning procedures and fuel calculations.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JGwWNGJdvx8?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Navigation: Solar System & Time', chapter: 'Chapter 9', description: 'Solar system basics and time zones in aviation.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kxj8r8E8j0I?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Navigation: Radio Navigation Systems', chapter: 'Chapter 10', description: 'Radio navigation aids and systems overview.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RH1ajX20s90?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
    ], 10),
  },

  'Instrument Navigation': {
    icon: '📡',
    subtitle: 'Quick IN concept bursts',
    examTags: ['ATPL', 'CPL'],
    color: '#8B5CF6',
    videos: makeSlots([
      { title: 'IN: Fundamentals of Aircraft Instrumentation and Display Characteristics', chapter: '1', description: 'Introduction to aircraft instruments.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vYwMIMddzQM?si=xClxkc58Ur5SsTbV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Pitot and Static Pressure Systems', chapter: '2', description: 'Airspeed and altitude measurement systems.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mQj5tj37FQA?si=lIE4mYyk7Ai1qask" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Principles of Aviation Air Temperature Measurement', chapter: '3', description: 'Temperature measurement in aircraft.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DdUtOxwd2Ao?si=n8mMLXWiJ4P1wI3n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Pressure Altimeter Operation and Principles', chapter: '4', description: 'Altitude measurement and calibration.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/M9h_JVVLmA0?si=apeOcVxFm0SWd5XC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Airspeed Indicators and True Airspeed Computation', chapter: '5', description: 'Airspeed measurement and calculation.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DG78oVOTrdw?si=IpP4KtpgnyEDXG9u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: The Vertical Speed Indicator', chapter: '6', description: 'Rate of climb/descent measurement.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eakWL3CuxPM?si=S5Mbi852n-keVPgv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: The Principles and Mechanics of the Machmeter', chapter: '7', description: 'Mach number measurement systems.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cSsbmwhHvlk?si=kJ9VJoRqnZEu91di" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Air Data Computer and Instrumentation Systems', chapter: '8', description: 'Integrated air data systems.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mf6PpoKYsXg?si=BCX5BXlfM_YKkOFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Direct Indicating Compass Operation', chapter: '10', description: 'Compass systems and deviation.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kIcfhDAulJ0?si=HXAZ3EK2kD3QdcWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Principles and Applications of Aircraft Gyroscopes', chapter: '11', description: 'Gyroscopic instruments in aircraft.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZM4xJjzT5qM?si=STR48zIGCso6U6Ha" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
    ], 10),
  },

  'Technical General': {
    icon: '⚙️',
    subtitle: 'Quick Tech concept bursts',
    examTags: ['AME', 'ATPL'],
    color: '#F59E0B',
    videos: makeSlots([
      { title: 'TG: Overview and Basic Aerodynamic Theory', chapter: 'Chapter 1', description: 'Introduction to aerodynamics and aircraft design.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vqDBMEdFrzw?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Atmosphere and Flight Environment', chapter: 'Chapter 2', description: 'Atmospheric conditions affecting flight.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0N_fBCAwhyY?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Aircraft Engines and Propulsion Systems', chapter: 'Chapter 3', description: 'Engine types and principles of operation.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wNzOrXL1kqE?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Landing Gear and Braking Systems', chapter: 'Chapter 4', description: 'Landing gear design and brake systems.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qsQpxdv0rMg?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Aircraft Hydraulic Systems', chapter: 'Chapter 5', description: 'Hydraulic system operation and maintenance.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JGwWNGJdvx8?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Electrical and Power Systems', chapter: 'Chapter 6', description: 'Aircraft electrical systems and generators.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kxj8r8E8j0I?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Flight Control Systems', chapter: 'Chapter 7', description: 'Control surfaces and flight control mechanisms.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RH1ajX20s90?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Pressurization and Environmental Control', chapter: 'Chapter 8', description: 'Cabin pressurization and air conditioning systems.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/e-IWRmpefzE?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Fuel Systems and Management', chapter: 'Chapter 9', description: 'Fuel storage, distribution, and management.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/30bD_5amrdI?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Airframe Structure and Materials', chapter: 'Chapter 10', description: 'Aircraft structure, materials, and design principles.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/08bD_5amrdI?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
    ], 10),
  },

  'Radio Telephony': {
    icon: '📡',
    subtitle: 'Quick RTF concept bursts',
    examTags: ['RTR (Aero)', 'ATPL', 'CPL'],
    color: '#EF4444',
    videos: makeSlots([
      { title: 'RTF: Radiotelephony Procedures and General Phraseology', chapter: 'Chapter 1', description: 'Basic RT procedures and standard phraseology.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LAC9eS3wyFI?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTF: Departure and En-Route Procedures', chapter: 'Chapter 2', description: 'RT procedures for departure and cruise phases.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/l7AWnB1VY00?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTF: Approach and Landing Procedures', chapter: 'Chapter 3', description: 'RT procedures for approach and landing.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fX4YjYt4oM4?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTF: Emergency Procedures and Special Situations', chapter: 'Chapter 4', description: 'Emergency RT phraseology and procedures.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/36VHcqi8Qyc?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTF: Weather Information and ATIS', chapter: 'Chapter 5', description: 'Weather reporting and ATIS procedures.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lTPUZum-Lrc?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTF: Communication with ATC and Ground Services', chapter: 'Chapter 6', description: 'Standard ATC communication procedures.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iMBvaoH9OU0?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTF: Pilot-to-Pilot Communications', chapter: 'Chapter 7', description: 'Pilot communication on common frequencies.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/08bD_5amrdI?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTF: Technical Radiotelephony Operations', chapter: 'Chapter 8', description: 'Radio equipment operation and troubleshooting.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JkJ6BAur4VA?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTF: International Civil Aviation Organization Standards', chapter: 'Chapter 9', description: 'ICAO standards for radiotelephony.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XD56qfNTFjQ?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTF: Advanced Communication Scenarios', chapter: 'Chapter 10', description: 'Complex and advanced communication situations.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0blqi_2TyMQ?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
    ], 10),
  },
}

// Create flat array from LECTURES object for backward compatibility with lectures page
export const LECTURES_ARRAY = flattenLectures(LECTURES)

export const SHORT_VIDEOS_DATA = {
  'Meteorology': {
    icon: '🌤️',
    subtitle: 'Quick Met concept bursts',
    examTags: ['ATPL', 'CPL'],
    color: '#0EA5E9',
    videos: [
       { title: 'Met : Atmosphere Composition, Structure, and Standard Specifications', chapter: 'Chapter 1', description: 'Structure of the atmosphere, layers, and standard atmosphere.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9JdYfqbPQ6g?si=SKQbsC4kWbS_sNUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met : Atmospheric Pressure and Altimetry Fundamentals', chapter: 'Chapter 2', description: 'Temperature gradients, lapse rates, and inversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ks2598HPflQ?si=LLwIQ7X8KEGiSVp6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Principles of Temperature and Heat Dynamics', chapter: 'Chapter 3', description: 'Continued study of temperature effects and atmospheric stability.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/36VHcqi8Qyc?si=nvjT_tlt1zBaV4mn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Air Density in Aviation Principles and Effects', chapter: 'Chapter 4', description: 'Air Density in Aviation Principles and Effects', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lTPUZum-Lrc?si=_zO5Nfon9lW05ptw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Principles and Measurements of Atmospheric Humidity', chapter: 'Chapter 5', description: 'Principles and Measurements of Atmospheric Humidity.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iMBvaoH9OU0?si=4xyZV35HhzBn8TL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Meteorological Principles of Wind and Atmospheric Motion', chapter: 'Chapter 6', description: 'Meteorological Principles of Wind and Atmospheric Motion', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/08bD_5amrdI?si=Yz5o4LpvxgJrixiV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Aeronautical Meteorology Visibility and Fog Analysis', chapter: 'Chapter 7', description: 'Aeronautical Meteorology Visibility and Fog Analysis', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JkJ6BAur4VA?si=QCownWE0CuMOOr4Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Vertical Motion and Clouds', chapter: 'Chapter 8', description: 'Vertical Motion and Clouds.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XD56qfNTFjQ?si=TIRbbaAKIPB5JRTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Stability and Instability of the Atmosphere', chapter: 'Chapter 9', description: 'Stability and Instability of the Atmosphere', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0blqi_2TyMQ?si=YTYrQ0nj6W7hymzH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Atmospheric Optical Phenomena and Electricity', chapter: 'Chapter 10', description: 'Atmospheric Optical Phenomena and Electricity.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9JdYfqbPQ6g?si=69Cyw3GynXw2lJlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Precipitation Theories, Classifications, and Mechanisms', chapter: 'Chapter 11', description: 'Precipitation theories, classifications, and mechanisms.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y0jlY-U_SZM?si=83w7KjX0xm5p5ms6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Aviation Meteorology Ice Accretion and its Effects on Flight', chapter: 'Chapter 12', description: 'Ice accretion and its effects on flight operations.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wEFrC9Qi24o?si=ZGeFL9q3yV25CEMX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Thunderstorms and Severe Weather Phenomena Structures and Hazards', chapter: 'Chapter 13', description: 'Thunderstorms and severe weather phenomena, structures, and hazards.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NgkGB6jTjs8?si=RruhR06xriR7zH3X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Air Masses, Fronts, and Western Disturbances', chapter: 'Chapter 14', description: 'Air masses, fronts, and western disturbances in aviation meteorology.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/D29mYN0vxLw?si=S0Vhi7BK0t8FnWWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Air Masses, Fronts, and Western Disturbances', chapter: 'Chapter 15', description: 'Air masses, fronts, and western disturbances in aviation meteorology.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VWK1eyCBwK8?si=K01pKbHevuzT2iN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Air Masses, Fronts, and Western Disturbances', chapter: 'Chapter 16', description: 'Air masses, fronts, and western disturbances in aviation meteorology.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Kh8Aeq4Oq0I?si=UoMrhW8lHpT8GGnF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Air Masses, Fronts, and Western Disturbances', chapter: 'Chapter 17', description: 'Air masses, fronts, and western disturbances in aviation meteorology.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wvw6B4UBv1c?si=2S7oOj0TMhFXiXju" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Climatology of India', chapter: 'Chapter 18', description: 'Climatology of India.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JK7yJnBFANs?si=H3I0EiHZwUl3AR5h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: General Circulation of the Atmosphere', chapter: 'Chapter 19', description: 'General Circulation of the Atmosphere.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8hbpbHX7KiU?si=LpoxGAwEMrk97tVO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Radar Reports, SIGMET Messages, and Satellite Bulletins', chapter: 'Chapter 20', description: 'Radar reports, SIGMET messages, and satellite bulletins in aviation meteorology.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/I_seSfqO59w?si=kKrKyA1h6Cj4sTvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Aviation Meteorological Documentation and Briefing Procedures', chapter: 'Chapter 21', description: 'Documentation and briefing procedures in aviation meteorology.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/a3C39KMMsqE?si=r8_jD_XIcaub8VxO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      
    ],
  },
  'Air Regulations': {
    icon: '📋',
    subtitle: 'Quick AR concept bursts',
    examTags: ['ATPL', 'CPL', 'DGCA'],
    color: '#6366F1',
    videos: [
       { title: 'AR: Aircraft Nationality and Registration Marks ', chapter: '3', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/b2UQAaWuhd0?si=QHQYYYDW6hTjw6ZG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Rules of the Air and General Flight Regulations ', chapter: '4', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IuoFKoUTe_Q?si=nKT5dUJndbTNcDuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Air Traffic Services and Indian Airspace Regulations', chapter: '5', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xqdrSjlWF6A?si=srdtx0RfPQ66DOTa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Separation in the Vicinity of Aerodromes', chapter: '7', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cOf8Lq60Jm0?si=RPhNJPsKNeTvW9Mf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Procedures for Aerodrome Control Service ', chapter: ' 8 ', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/edzz9508vHs?si=apZlQRUE7GGHSpvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: International Organisations and Conventions for Civil Aviation', chapter: '2', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6zEsGtg4QFk?si=06_ielweJTZ8tMzS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Aviation Regulatory Definitions and Abbreviations', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-MJSaWAYd0I?si=BhqdRMuwtX8Wdik6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Air Traffic Separation Methods and Minima Standards', chapter: '6', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sU3vReXDcLg?si=s6nTvtRewURFYvex" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Indian Aviation Law and National Air Regulations', chapter: '14', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/joEmd8ePcyw?si=pjTK5imC8bTwBVO6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Procedures for Air Navigation Services', chapter: '13', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oC4kuSKKOFM?si=Jfp3nq7-bKm9KwSN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Visual Aids for Navigation and Aerodrome Marking Standards', chapter: '12 ', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hmMMZ47Iv4o?si=4lKRL0ERzDbQUwi7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Aviation Search and Rescue', chapter: '11', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sTQ0TH3l75A?si=htIMLcfJx-ZJK6uZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AB: Aeronautical Information Services and Civil Aviation Requirements', chapter: '10', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Pp1RaBX6WkE?si=m2jkiJkBbrpug9lP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Use of Air Traffic Services Surveillance System', chapter: '9', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/H1Hl3r6wBOE?si=gsxMoOHA_cSslpsF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Aviation Operational Procedures and Regulatory Requirements ', chapter: '17', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3ODEGQ5NJeU?si=kN2_O9blqj_53wxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Airworthiness of Aircraft', chapter: '16', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mwMCSEAlkFA?si=aemi07iD39Kb3JzV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Aviation Personnel Licensing Standards and Flight Crew Regulations', chapter: '15', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AtRsTNXexDo?si=jEnz42jMvmLRF185" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Aviation Human Factors', chapter: '23', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ne1yNPx51hk?si=AUd6oyuXWKfE1O56" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Human Performance and Limitations in Aviation Regulations', chapter: '22', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UTEWobvGiVQ?si=xwft_EMY6lPlDVq6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Safeguarding Civil Aviation Against Acts of Unlawful Interference', chapter: '21', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VwEngngC_2Y?si=b3AwCho2-ZR4QLlW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Aviation Incident Protocols and International Facilitation Standards', chapter: '20', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WR2BZ2ix51U?si=yGGmA0L8_ol4uSAH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Aviation Communications and Radiotelephony Procedures', chapter: '19', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2LGKAFvbR2A?si=B0N-4wfBW5Bw9TgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Special Operational Procedures and Hazards General Aspects', chapter: '18', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zRBGJ2MCst8?si=m-N2NuyojjadA611" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Aviation Psychology and Human Factors', chapter: '24', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ubcYOq3wfPY?si=mCYkKg1-rKIxi8_e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'AR: Aviation Physiology and Human Factors', chapter: '25', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Dfv_PmjdylM?si=FtU5qbCa9QQMksCy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
  
    ],
  },
  'Navigation': {
    icon: '🧭',
    subtitle: 'Quick Nav concept bursts',
    examTags: ['ATPL', 'CPL'],
    color: '#10B981',
    videos: [
      {
        title: 'Short Video: One in 60 Rule',
        subject: 'Navigation',
        chapter: 'Navigation',
        description: 'A quick walkthrough of the one-in-sixty rule.',
        iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vYwMIMddzQM?si=xClxkc58Ur5SsTbV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        duration: '4 min',
      },
     
    ],
  },
  'Instrument Navigation': {
    icon: '📡',
    subtitle: 'Quick IN concept bursts',
    examTags: ['ATPL', 'CPL'],
    color: '#8B5CF6',
    videos: [
        { title: 'IN: Fundamentals of Aircraft Instrumentation and Display Characteristics', chapter: '1', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vYwMIMddzQM?si=xClxkc58Ur5SsTbV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Pitot and Static Pressure Systems', chapter: '2', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mQj5tj37FQA?si=lIE4mYyk7Ai1qask" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Principles of Aviation Air Temperature Measurement', chapter: '3', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DdUtOxwd2Ao?si=n8mMLXWiJ4P1wI3n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: 4', chapter: '4', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/M9h_JVVLmA0?si=apeOcVxFm0SWd5XC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: 5', chapter: '5', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DG78oVOTrdw?si=IpP4KtpgnyEDXG9u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: The Vertical Speed Indicator ', chapter: '6', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eakWL3CuxPM?si=S5Mbi852n-keVPgv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: The Principles and Mechanics of the Machmeter', chapter: '7', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cSsbmwhHvlk?si=kJ9VJoRqnZEu91di" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Air Data Computer and Instrumentation Systems', chapter: '8', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mf6PpoKYsXg?si=BCX5BXlfM_YKkOFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: The Direct Indicating Compass', chapter: '10', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kIcfhDAulJ0?si=HXAZ3EK2kD3QdcWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Principles and Applications of Aircraft Gyroscopes', chapter: '11', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZM4xJjzT5qM?si=STR48zIGCso6U6Ha" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Directional Gyro Indicator', chapter: '12', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VY1z4DTIbAc?si=m5a4Q9VfIYJDnwNx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Principles and Operation of the Artificial Horizon', chapter: '13', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dYLkPuU3RC0?si=UD16F0x62ajvNM22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: The Turn and Slip Indicator', chapter: '14', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z6bUXZjykCc?si=h6BWAltMjy4tHb0L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: The Turn Co ordinator', chapter: '15', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/L84asB74pgI?si=byqHuJrTuCcZKn2C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Aircraft Magnetism and Compass Deviation Correction', chapter: '16', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GoX4hp7Pvck?si=Mxf5JixECV7dsR5q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: The Remote Indicating Magnetic Compass', chapter: '17', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kZYaSDoqFLw?si=2tXYEMWsapqnNBdO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Inertial Navigation Systems', chapter: '18', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kU0y4PUwv6k?si=HeXydl-6WOO0FHaP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Aircraft Inertial Reference Systems and Laser Gyros', chapter: '19', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pAAFJcFcE04?si=nnkizjqTn_K5mv2P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Flight Management System Principles and Operations', chapter: '20', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wuOsnZI98hQ?si=V56haGSnNtaG7PNS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Electronic Flight Information Systems', chapter: '21', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bXWmnrjNthg?si=IhyuoKzmLPdRXIFa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Foundations of Aviation Computing and Instrumentation', chapter: '22', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eXivRE_Dzqg?si=CjNh-tgeI6HrygBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
     
    ],
  },
  // 'Technical General': {
  //   icon: '⚙️',
  //   subtitle: 'Quick Tech concept bursts',
  //   examTags: ['AME', 'ATPL'],
  //   color: '#F59E0B',
  //   videos: [
  //     {
  //       title: 'TG: Overview and Basic Aerodynamic Theory',
  //       subject: 'Technical General',
  //       chapter: 'Technical General',
  //       description: 'Introduction to aerodynamics and aircraft design.',
  //       iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vqDBMEdFrzw?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  //       duration: '8 min',
  //     },
  //     {
  //       title: 'TG: Aircraft Engines and Propulsion Systems',
  //       subject: 'Technical General',
  //       chapter: 'Technical General',
  //       description: 'Engine types and principles of operation.',
  //       iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wNzOrXL1kqE?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  //       duration: '8 min',
  //     },
  //   ],
  // },
  // 'Radio Telephony': {
  //   icon: '📡',
  //   subtitle: 'Quick RTF concept bursts',
  //   examTags: ['RTR (Aero)'],
  //   color: '#EF4444',
  //   videos: [
  //     {
  //       title: 'Short Video: RT Phraseology',
  //       subject: 'Radio Telephony',
  //       chapter: 'Radio Telephony',
  //       description: 'Core phraseology for smooth ATC communication.',
  //       iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LAC9eS3wyFI?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  //       duration: '5 min',
  //     },
  //     {
  //       title: 'RTF: Departure and En-Route Procedures',
  //       subject: 'Radio Telephony',
  //       chapter: 'Radio Telephony',
  //       description: 'RT procedures for departure and cruise phases.',
  //       iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/l7AWnB1VY00?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  //       duration: '8 min',
  //     },
  //   ],
  // },
}

export const PERSONALYSIS_DATA = {
  'Meteorology': {
    icon: '🌤️',
    subtitle: 'Premium guided breakdown sessions',
    examTags: ['Premium', 'Personalysis'],
    color: '#0EA5E9',
    videos: [
      { title: 'Met: Temprature 3 – Ch 2', chapter: 'Chapter 2', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PfEBY2yYCKA?si=Z_VGf5PF3Su0I-69" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: IC Density 4 – Ch 2', chapter: 'Chapter 2', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Jpm8m4uDcAA?si=hxwILX-ERRlauxfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: IC 2– Ch 2', chapter: 'Chapter 2', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/l17FL8NS2p4?si=09JWPUCS6AJcA-PJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Humidity 5 – Ch 2', chapter: 'Chapter 2', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Hrno1TrkhFs?si=tyh-ZhyzB1cDm-mZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Atmosphere 1 IC – Ch 2', chapter: 'Chapter 2', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/37QmsGWjfl0?si=BXzzqKQnBZet9OfI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: WINDS – Ch 2', chapter: 'Chapter 2', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FAoLwmtB6v4?si=3AhA7_GadJeavkk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: VISIBILTY AND FOG – Ch 2', chapter: 'Chapter 2', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/F8rfU_ajod0?si=nftR32Zks_8HpOr6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Vertical Motion and Clouds – Ch 2', chapter: 'Chapter 2', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/txKwiYc4TJI?si=1JL6fi5oqxXPpKEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      // { title: 'Met: Humidity 5 – Ch 2', chapter: 'Chapter 2', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '' },
      { title: 'Met: Stability Instability at Atsmophere', chapter: '9', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eyN2ih-kn-c?si=gqSPgtSpMkwpDEHv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: optical phonemnon', chapter: '10', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FTGfXiRyk6U?si=GEo_-X77QDFJdY48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: preciptation', chapter: '11', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/P_aatWxDQ7Y?si=8fbemttxt_vPoiXC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: ice Accretion', chapter: '12', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/I2sMMLAPbd8?si=_RV1q0sF3MC4pKvB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: Thaunderstom', chapter: '13', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kMjWMrWnvM4?si=VRkn-mdfYEFVylWn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: AIRMASS FRONT AND WDS', chapter: '14', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OXJImQ3aw_8?si=xHh_tUhqrSaZUx68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: jet streame', chapter: '15', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ttTzuD5Jsvs?si=fMiTTnmxmzB42ckF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: CAT and Mountain waves', chapter: '16', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/j7st7MFYmXc?si=rn6aYTRN-0hNNOZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: METRELOGY SERVICE', chapter: '17', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4FPHtzRKLWk?si=bycOUNwic-pQslH7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Met: TROPICAL SYSTEM', chapter: '18', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AV_wbf16VZo?si=PQ7fsj4V6I28NqVT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      
    ],
  },
  // Navigation: {
  //   icon: '🧭',
  //   subtitle: 'Premium guided breakdown sessions',
  //   examTags: ['Premium', 'Personalysis'],
  //   color: '#10B981',
  //   videos: [
  //     {
  //       title: 'Personalysis: Navigation Problem Solving',
  //       subject: 'Navigation',
  //       chapter: 'Navigation',
  //       description: 'Step-by-step route planning and calculation approach.',
  //       iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cSqRnfnstyg?si=IyXR5VIFBNmw2J2N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  //       duration: '14 min',
  //     },
  //   ],
  // },
  'Technical General': {
    icon: '⚙️',
    subtitle: 'Premium guided breakdown sessions',
    examTags: ['Premium', 'Personalysis'],
    color: '#F59E0B',
    videos: [
      { title: 'TG:  pp tech Fundamentel of pisten engine', chapter: '1', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cSqRnfnstyg?si=IyXR5VIFBNmw2J2N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: PP PRINCIPAL AND CONSTRUCTION', chapter: '2', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z-WA5KPmar8?si=bZ0FSaYuE6hhl7KY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: PISTON ENGINE LUBRICATION ', chapter: '3', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Iej5W-oh9Vc?si=F6OdMo-CG0SgA8cr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: PISTON ENGINE COOLING', chapter: '4', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xfZ0adsObb8?si=C-Lb7ATGCORedg3Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: GENITION SYSTEM ', chapter: '5', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jvp7NtaW5wU?si=MK98GjdCcJTrorrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: PISTON ENGINE FUEL', chapter: '6', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EFR44dhhj6w?si=aiOsZfP_NaUCY8rt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: FUEL MIXTURE CONTROL', chapter: '7', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PZToAOx0V6I?si=ICGS7GdsYJiPss_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: CARBURETTER', chapter: '8', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PmADKWg6OCA?si=_SkEEZrUXwB48jZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: INDUCTION AND CARBURETTOR ICING', chapter: '9', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-PUW9p2zAaU?si=nnu4KaJyJOo60cN2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: FUEL INJECTION', chapter: '10', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9ZmfxJLA_9M?si=vjTrvDMM33kr734E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: TURBOCHARGER AND SUPERCHARGER', chapter: '11', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rsIRP_fDsiM?si=VoSagYb_XS6zsfhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: GAS TURBINE ENGINE INTRODUCTION', chapter: '12', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/deRRUIGpXZY?si=Q511SLF0aQmwIXbp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: GAS TURBINE AIR 1NLET', chapter: '13', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dP-UT7-12TE?si=X_xlf0ZB79JivOwz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: GAS TURBINE COMPRESSOR', chapter: '14', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tD1ZtF5Ipxc?si=GTVtwjEkK8DRp6HT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Jet Engine Combustion Chamber', chapter: '15', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nmUEGdwfYP8?si=N0Ngm1Vfwy_RJVRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: Jet Engine Turbines', chapter: '16', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/D_qqnDC_SIE?si=e1cridBy15Pdx_oM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: JET ENGNE EXAUST', chapter: '17', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/a1I1iftlMxw?si=6lO8-Bjno2nGPbHX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: GAS TURBINE LUBRATION', chapter: '18', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OuWh__LmAXQ?si=NeCRbg9dMDzJrL-R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG:  RADIO FREQUENCY', chapter: '19', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GjDg_2ZBaSU?si=8QfZ2sGKJoTubUfG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: REVRSE THURST', chapter: '20', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fvxmvkfUAe8?si=m-Q0YGsF1RRTr-2u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'TG: APU AND ENGINE STARTING', chapter: '21', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zCoDf95lU98?si=8PTh_0aRsiZVoBAR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
    ],
  },
  
    'Air Regulations': {
    icon: '📋',
    subtitle: 'AR paper analysis & exam insights',
    examTags: ['ATPL', 'CPL', 'DGCA'],
    color: '#6366F1',
    videos: [
      { title: 'Regs: International conventions ', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y2TMi0aSSrE?si=bCxvW54nTp4IMT75" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: Rules of air ', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tR7KjkEZRlY?si=3ujH5DCXDk7iOR4r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: rega aircraft nationality ', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iiAQCeKA3F8?si=xd-lT5fCgXZw1jYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: regs 1', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vcEkwZ--w7M?si=Bx4iORpOg3OKOoXW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: VISUAL AIDS ', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vMzppnx4z5E?si=AOxlB4J5e-qvFg6m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: SEARCH RESUE', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Lf4gioW5uTI?si=PwvQCmVNzZguqVQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: SEPERATION IN VICINITY', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6wwFOfnqYx0?si=QZGvMS3B8CnA71Ni" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: AIR TRAFFIC SERVOILANCE', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eFSLstxkkOQ?si=ebxhou-6moIRG9ak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: AERONOTICAL INFORMANTION SERVICE', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aOAsgj8MuhI?si=Dnlu4v2z0TNN43zx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: AIR TRAFFIC SERVICE', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5bQG6nhcujo?si=C0ukY7uIhiTLnapA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: Regs International conventions', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MqoBKm2FPgw?si=aKG1KeIvmV0vg_xF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: AERONOTICAL INFORMANTION SERVICE', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fbV37_1exs4?si=5IWVO09a5I0h10oS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: PERSONAL LICENCE', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/38rJxv6LOG8?si=Oeq6dkH0nYv457XX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: Human Factors', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DvYi6Jk_ITI?si=QSXni5vtkK2_4jH2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: Regs International conventions 2', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kwBUZ8cYi3I?si=G9-x3m9awE_zh9-p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'Regs: AIR TRAFFIC SERVICE', chapter: '', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/moG94sQ06WQ?si=YPVFATBRE06PZT40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },
      // { title: 'Regs: ', chapter: '', description: '.', iframeCode: '' },

      

    ],
  },
  'Radio Navigation': {
    icon: '📡',
    subtitle: 'Premium guided breakdown sessions',
    examTags: ['Premium', 'Personalysis'],
    color: '#EF4444',
    videos: [
       { title: 'RN: RADIO WAVES', chapter: '1', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3ov6_H_b0dI?si=rW5gzPaeSwrUj7bJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RN: RADIO PROPAGATION', chapter: '2', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_kUuHc9JGSI?si=RRwcXnk2b1HuhHur" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RN: RADIO WAVE MODULATION', chapter: '3', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2sfAK5Ig7dM?si=tGwIT-Y26MjjNJfX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RN: VDF', chapter: '4', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3TDTzuIgfQ4?si=_q08U1rDo34mVRE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RN: ADF', chapter: '5', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hBFnoIhqkBM?si=r53No-z4ifuMHniy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RN: VOR', chapter: '6', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_ApjWrRli18?si=7fALm2-0v1bbCBPr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RN: ILS', chapter: '7', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kEeVD08qkgw?si=7diipADLz2TjGi_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RN: MLS MICRO LANDING SYSTEM', chapter: '8', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/J5vv_5o8Q5Y?si=7ZZz-rcks6bl9vSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RN: DME', chapter: '9', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xHowMkejWpo?si=Upb8SZL4gkAhDm7R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RN: RADAR', chapter: '10', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Oob44-T3oKY?si=2ZDYLhlDacM1dlnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      // { title: 'RN: ', chapter: '11', description: '.', iframeCode: '' },
      // { title: 'RN: ', chapter: '12', description: '.', iframeCode: '' },
      // { title: 'RN: ', chapter: '13', description: '.', iframeCode: '' },
      { title: 'RN: Secondary Surveillance Radar Principles and Operations', chapter: '14', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7lqR92uBzKs?si=t3xJlxS-ZXFOdeZ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RN: Distance Measuring Equipment', chapter: '15', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JYcSNLHhL4Y?si=dvIb5hnVXsGDHAlS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
   
    ],
  },
  'General Navigation': {
    icon: '📡',
    subtitle: 'Premium guided breakdown sessions',
    examTags: ['Premium', 'Personalysis'],
    color: '#8B5CF6',
    videos: [
      { title: 'GN: Great Circle and Rumbling – Ch 2', chapter: 'Chapter 2', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OhYnZJjpRgQ?si=e87gLl9CdGY2IkYG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: MEGNETISM – Ch 3', chapter: 'Chapter 3', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NDaEWTdDImM?si=VCLd6Bl0PIX_UT-d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: Convergency and Conversion Angle', chapter: 'Chapter 4', description: 'Convergency of meridians and conversion angle on charts.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RHWrdDJz_fY?si=wjsgh_lB6sJmdWME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: General properties chart  – Ch 5', chapter: 'Chapter 5', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GNDCdCMy0yY?si=r0yATJ5PBZWBN7Gn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: Departure – Ch 6', chapter: 'Chapter 6', description: 'Departure calculations and east-west distance measurement.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8zJjENPaURE?si=Jti8bLY6VnO999oQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: Scale ', chapter: 'Chapter 7', description: 'Understanding map and chart scales used in aviation navigation.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WnSSqaffoB0?si=yvHP4z0DzE7Hiycu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: 1 in 60 and 1/14 Rule – Ch 8', chapter: 'Chapter 8', description: 'The 1 in 60 rule and 1/14 rule for track error and heading corrections.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rnSFFAfkJqQ?si=sm-oVIbEBi5SEJPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: Lembart chart 1 – Ch 10', chapter: 'Chapter 10', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UkmJuHTbIjo?si=TBG1uXTciVRksDlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: Lembert chart part 2 – Ch 10', chapter: 'Chapter 10', description: 'UTC, LMT, standard time, and time zone conversions.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8GhYrIXVtdM?si=_tCpyQkTPvIj1Tc_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: Polar Stereographic Projection – Ch 11', chapter: 'Chapter 11', description: 'Polar stereographic chart properties and plotting.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/95zN5KuWeLA?si=jZWEFqGnegEZ1_4T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: Mercator char – Ch ', chapter: 'Chapter 11', description: 'Polar stereographic chart properties and plotting.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CjnqC8Fz68w?si=4gM61Fqb4BCcKAZj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: FANDAMENTEL OF DIRECTION  – Ch 11', chapter: 'Chapter 1', description: 'Polar stereographic chart properties and plotting.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CPeyZDv-ju0?si=WjH9K7rGqTbr6Pgn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: Polar Stereographic Projection – Ch 11', chapter: 'Chapter 11', description: 'Polar stereographic chart properties and plotting.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/95zN5KuWeLA?si=jZWEFqGnegEZ1_4T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: Soler system', chapter: '12', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8PMHGHruJNo?si=pAangs_MNO7UJlwi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'GN: TIME CONVERSION', chapter: '15', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DzY7Hgrm2dE?si=PXIUsN7kv4Sv86nZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
     
    ],
  },
  'RTR': {
    icon: '📋',
    subtitle: 'Premium guided breakdown sessions',
    examTags: ['Premium', 'Personalysis'],
    color: '#6366F1',
    videos: [
       { title: 'RTR: AVIATION BODIES AND REGISLATION', chapter: '1', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4lBRPbm6bKE?si=QdGb4voaouayUn87" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTR: RADIO WAVE PROPAGATION', chapter: '2', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EZSXEu9wvDc?si=c6t2eXj339TC-WyG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTR: RADIO TRANSMITTION AND PHONETICS', chapter: '3 , 4', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WR_r7WuzYbQ?si=oY_l7AhksdZMr_ZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTR: NAV AIDS', chapter: '5', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UJMTOr0FEk4?si=RgISLf4K3ZCOS7mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTR: OPERATIONAL PROCUDURE', chapter: '7', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5P5vtfxRpKw?si=okZufOK4cXWhm8JF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'RTR: RT PROTOCOL AND DISTRESS', chapter: '8 , 9', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lTgbnDrWeqo?si=CvKG7zD3-SNgHC_z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
     
    ],
  },
  'Instrument Navigation': {
    icon: '📡',
    subtitle: 'Premium guided breakdown sessions',
    examTags: ['Premium', 'Personalysis'],
    color: '#8B5CF6',
    videos: [
       { title: 'IN: PITOT AND STATIC', chapter: '1', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cl79lwok_ko?si=dQHOjCeUK6CAHi29" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: ASI', chapter: '2', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7qhckvUt8M0?si=8ZvZv3Lfh24E30Fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: ', chapter: '3', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0zktWXkZ4XI?si=aidr4C5IxyfvvcS-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: The Principles and Mechenis of the Mecmiter', chapter: '4', description: 'The Principles and Mechenis of the Mecmiter.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qZcH7NbSoF8?si=0LxVHDgTslr5wUpP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Altimiter', chapter: '5', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_Kqi0lOqNeY?si=MTQ0FbhiYxIPvqTv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Air Temprature', chapter: '6', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JXk1FZyxLHw?si=OkzyLflBLORSGSf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: directional gyaro indicator', chapter: '7', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/S9-c81hqDNE?si=nDA-XZs5M3QJTL2J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: Turn Cordinater 1', chapter: '8', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HTM84FYW9DI?si=4eRQ8ZRPwxg3568u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: ARTIFICIAL HONZON', chapter: '9', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SXQIr0UIO0E?si=GxI_dkjWcihq2Sbx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: AIRCRAFT MEGNTISM', chapter: '10', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4GTsSWB-EiE?si=gGbZ9-pZgnmY93h7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: TURN AND SLIP INDICATOR', chapter: '11', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZK_zswwy54Q?si=pdUEmKCnfs4Tvz70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: ARM', chapter: '12', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/y9i1ljffZAo?si=r81w8hz-DyhcXT4y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: EFIS', chapter: '13', description: '.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TT5upf6NDPM?si=UWvsNT4ijVlmeIWf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
      { title: 'IN: ', chapter: '14', description: '.', iframeCode: '' },
      { title: 'IN: ', chapter: '15', description: '.', iframeCode: '' },
      // { title: 'IN: ', chapter: '', description: '.', iframeCode: '' },

    ],
  },
}

export const FULL_LECTURES_DATA = buildSectionData(LECTURES)

export const INTERVIEWS = [
  { id: 1, title: 'HR Round Practice', type: 'Behavioral', duration: '20 min', level: 'Beginner' },
  { id: 2, title: 'Technical: Data Structures', type: 'Technical', duration: '35 min', level: 'Intermediate' },
  { id: 3, title: 'System Design Basics', type: 'Technical', duration: '40 min', level: 'Advanced' },
  { id: 4, title: 'Group Discussion Simulation', type: 'Behavioral', duration: '25 min', level: 'Intermediate' },
]

export const MOCK_TESTS = [
  { id: 1, title: 'Full Syllabus Mock Test 1', questions: 100, duration: 180, attempts: 1, bestScore: 72 },
  { id: 2, title: 'Full Syllabus Mock Test 2', questions: 100, duration: 180, attempts: 0, bestScore: null },
  { id: 3, title: 'Physics + Chemistry Combo', questions: 60, duration: 90, attempts: 2, bestScore: 81 },
  { id: 4, title: 'Speed Test - Mathematics', questions: 40, duration: 45, attempts: 0, bestScore: null },
]

export const RESOURCES = [
  { id: 1, title: 'Navigation Chart Pack', type: 'PDF', size: '1.2 MB', subject: 'Navigation' },
  { id: 2, title: 'Meteorology Study Notes', type: 'PDF', size: '3.4 MB', subject: 'Meteorology' },
  { id: 3, title: 'Radio Telephony Phraseology Guide', type: 'PDF', size: '0.8 MB', subject: 'Radio Telephony' },
  { id: 4, title: 'Aircraft Systems Diagrams', type: 'ZIP', size: '12 MB', subject: 'Technical General' },
  { id: 5, title: 'ICAO Regulations Handbook', type: 'PDF', size: '2.1 MB', subject: 'Air Regulations' },
  { id: 6, title: 'Previous Year Exam Papers', type: 'PDF', size: '5.6 MB', subject: 'General' },
]
