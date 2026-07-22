const DEFINITIONS = [
  { id: 'ch01', title: 'Definitions & Abbreviations', icon: '📖', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch02', title: 'International Organisations & Conventions', icon: '🌐', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch03', title: 'Aircraft Nationality & Registration Marks', icon: '🛩️', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch04', title: 'Rules of the Air', icon: '📏', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch05', title: 'Air Traffic Services', icon: '🗼', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch06', title: 'Separation Methods & Minima', icon: '↔️', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch07', title: 'Separation in the Vicinity of Aerodromes', icon: '🛬', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch08', title: 'Procedures for Aerodrome Control Service', icon: '🏢', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch09', title: 'ATS Surveillance System', icon: '📡', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch10', title: 'Aeronautical Information Services', icon: '📢', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch11', title: 'Search and Rescue', icon: '🆘', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch12', title: 'Visual Aids for Navigation', icon: '💡', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch13', title: 'Procedures for ANS – Aircraft Operations', icon: '✈️', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch14', title: 'National Law', icon: '⚖️', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch15', title: 'Personnel Licensing', icon: '🪪', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch16', title: 'Airworthiness of Aircraft', icon: '🔧', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch17', title: 'Operational Procedures', icon: '📋', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch18', title: 'Special Operational Procedures & Hazards', icon: '⚠️', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch19', title: 'Communications', icon: '📻', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch20', title: 'Aircraft Accident and Incident', icon: '🚨', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch21', title: 'Facilitation', icon: '🛂', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch22', title: 'Security – Safeguarding International Civil Aviation', icon: '🔒', part: 'Part I – Air Regulations', color: '#64748B' },
  { id: 'ch23', title: 'Human Performance and Limitations', icon: '🧠', part: 'Part II – Human Factors', color: '#7C3AED' },
  { id: 'ch24', title: 'CRM, TEM & LOFT', icon: '👥', part: 'Part II – Human Factors', color: '#7C3AED' },
  { id: 'ch25', title: 'Aviation Psychology & Human Factors', icon: '🧬', part: 'Part II – Human Factors', color: '#7C3AED' },
  { id: 'ch26', title: 'Aviation Physiology & Human Factors', icon: '🫀', part: 'Part II – Human Factors', color: '#7C3AED' },
  { id: 'qb01', title: 'ATC, Airspace & Separation (QB)', icon: '🗺️', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb02', title: 'Wake Turbulence (QB)', icon: '🌀', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb03', title: 'Airspace Classification & VFR/IFR Rules (QB)', icon: '🌤️', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb04', title: 'Flight Planning & Communication (QB)', icon: '📝', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb05', title: 'Aerodrome Signals, Lighting & Markings (QB)', icon: '🚦', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb06', title: 'ATC Light Signals (QB)', icon: '🔦', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb07', title: 'Navigation Lights & Night Operations (QB)', icon: '🌙', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb08', title: 'Flight Time, Duty Time & Licensing (QB)', icon: '🕐', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb09', title: 'Emergencies, Accidents & Incidents (QB)', icon: '🚑', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb10', title: 'Human Factors & Physiology (QB)', icon: '🩺', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb11', title: 'Rules of the Air & Right of Way (QB)', icon: '↕️', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb12', title: 'Fuel, Oxygen & Equipment Requirements (QB)', icon: '⛽', part: 'Part III – QB Extra', color: '#F59E0B' },
  { id: 'qb13', title: 'Indian Aviation Regulations & Specific Rules (QB)', icon: '🇮🇳', part: 'Part III – QB Extra', color: '#F59E0B' },
]

function buildQuestions(chapter, chapterIndex) {
  return Array.from({ length: 10 }, (_, index) => {
    const correct = (chapterIndex + index) % 4
    const prompt = [`For ${chapter.title}, which rule is most directly relevant?`, `Which statement best fits ${chapter.title}?`, `Which procedure is most applicable to ${chapter.title}?`][index % 3]
    const options = [
      `A standard rule for ${chapter.title}`,
      `A common confusion about ${chapter.title}`,
      `A practical procedure linked to ${chapter.title}`,
      `An exception related to ${chapter.title}`,
    ]

    return {
      id: `${chapter.id}_${String(index + 1).padStart(2, '0')}`,
      question: prompt,
      options,
      correct,
      explanation: `The correct choice reflects the standard regulation or procedure for ${chapter.title}.`,
    }
  })
}

export const chapters = DEFINITIONS.map((definition) => ({
  id: definition.id,
  title: definition.title,
  icon: definition.icon,
  part: definition.part,
  color: definition.color,
}))

export const questions = Object.fromEntries(
  chapters.map((chapter, chapterIndex) => [chapter.id, buildQuestions(chapter, chapterIndex)])
)
