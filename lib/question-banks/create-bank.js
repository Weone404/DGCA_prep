function pad(value) {
  return String(value).padStart(2, '0')
}

export function makeChapterId(prefix, index) {
  return `${prefix}${pad(index)}`
}

export function buildBank(definitions = [], part = '', color = '') {
  const chapters = definitions.map((definition, index) => {
    const chapterIndex = index + 1
    const id = definition.id || makeChapterId(definition.prefix || '', chapterIndex)

    return {
      id,
      title: definition.title,
      icon: definition.icon || '',
      part: definition.part || part || '',
      color: definition.color || color || '',
    }
  })

  const questions = chapters.reduce((acc, chapter) => {
    acc[chapter.id] = []
    return acc
  }, {})

  return { chapters, questions }
}
