const DEFINITIONS = [
  { id: 'rt01', title: 'RT Procedures - General & Phraseology', icon: '📻', part: 'Radio Telephony', color: '#8B5CF6' },
  { id: 'rt02', title: 'RT - Departure, En-Route & Approach', icon: '🛫', part: 'Radio Telephony', color: '#8B5CF6' },
  { id: 'rt03', title: 'RT - Emergencies & Special Procedures', icon: '🚨', part: 'Radio Telephony', color: '#8B5CF6' },
]

function buildQuestions(chapter, chapterIndex) {
  return Array.from({ length: 10 }, (_, index) => {
    const correct = (chapterIndex + index) % 4
    const prompt = [`For ${chapter.title}, which phrase or procedure is most appropriate?`, `Which RT instruction is most relevant to ${chapter.title}?`, `Which statement best matches ${chapter.title}?`][index % 3]
    const options = [
      `A standard RT phrase for ${chapter.title}`,
      `A common misunderstanding about ${chapter.title}`,
      `A practical RT procedure linked to ${chapter.title}`,
      `An exception relevant to ${chapter.title}`,
    ]

    return {
      id: `${chapter.id}_${String(index + 1).padStart(2, '0')}`,
      question: prompt,
      options,
      correct,
      explanation: `The correct choice reflects the standard radio telephony practice for ${chapter.title}.`,
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
