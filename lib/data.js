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
  name: 'Martin Nel',
  role: 'VIP',
  email: 'hellopixency@gmail.com',
  avatar: 'https://i.pravatar.cc/120?img=12',
  coursesInProgress: 8,
  coursesComplete: 23,
}

export const SUBJECTS = [
  { id: 'ar', name: 'Air Regulations', color: '#2BC48A', tests: 14, avg: 78 },
  { id: 'met', name: 'Meteorology', color: '#7B7FF2', tests: 11, avg: 65 },
  { id: 'nav', name: 'Navigation', color: '#FF8B6B', tests: 18, avg: 82 },
  { id: 'tg', name: 'Technical General', color: '#43B7E9', tests: 9, avg: 71 },
  { id: 'rt', name: 'Radio Telephony', color: '#F2C94C', tests: 6, avg: 88 },
]

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

let nextSubjectTestId = 1
const createTests = (subject, chapters) =>
  chapters.map((title, index) => ({
    id: nextSubjectTestId++,
    subject,
    title,
    questions: 20 + (index % 3) * 2,
    duration: 20 + (index % 4) * 5,
    difficulty: ['Easy', 'Medium', 'Hard'][index % 3],
    attempted: false,
    score: null,
  }))

export const SUBJECT_TESTS = [
  ...createTests('Meteorology', METEOROLOGY_CHAPTERS),
  ...createTests('Radio Telephony', RADIO_TELEPHONY_CHAPTERS),
  ...createTests('Navigation', GENERAL_NAVIGATION_CHAPTERS),
  ...createTests('Navigation', RADIO_NAVIGATION_CHAPTERS),
  ...createTests('Technical General', TECHNICAL_GENERAL_CHAPTERS),
]

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
function makeSlots(videos, count) {
  return videos.map((video, index) => ({
    ...video,
    id: `video-${index}`,
    locked: index >= 2, // First 2 videos free, rest locked
  }))
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
      { title: 'Navigation: Climb Gradient, PNR, PSR & Critical Point', chapter: 'Chapter 4', description: 'Flight planning calculations and critical points.', iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OPf0YbXqDm0?si=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' },
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
