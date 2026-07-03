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
  'Limitation',
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
  'Propeller',
  'Fuselage, Wings and Stabilizing Surfaces',
  'Basic Hydraulics',
  'Landing Gear',
  'Aircraft Wheel',
  'Aircraft Tyres',
  'Aircraft Brakes',
  'Flight Control System',
  'Flight Control',
  'Powered Flying Control',
  'Aircraft Pneumatic System',
  'Pressurization System',
  'Ice and Rain Protection',
  'Aircraft Oxygen Equipment',
  'Smoke Detection',
  'Fire Detection and Protection',
  'Aircraft Fuel System',
  'Aircraft Systems – Electrical & Electronic',
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

export const LECTURES = [
  { id: 1, title: 'Introduction to Navigation Systems', subject: 'Navigation', duration: '45 min', watched: 100, thumb: '🧭' },
  { id: 2, title: 'Cloud Types and Weather', subject: 'Meteorology', duration: '38 min', watched: 60, thumb: '☁️' },
  { id: 3, title: 'Radio Communication Basics', subject: 'Radio Telephony', duration: '52 min', watched: 20, thumb: '📡' },
  { id: 4, title: 'Aircraft Engine Systems', subject: 'Technical General', duration: '41 min', watched: 0, thumb: '✈️' },
  { id: 5, title: 'ICAO Regulations Overview', subject: 'Air Regulations', duration: '25 min', watched: 100, thumb: '📋' },
  { id: 6, title: 'Flight Planning & Routes', subject: 'Navigation', duration: '47 min', watched: 0, thumb: '🗺️' },
]

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
