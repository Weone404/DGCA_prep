const fs = require('fs')
const path = require('path')

const dir = path.resolve(process.cwd(), '.next')
try {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true })
    console.log('.next removed')
  } else {
    console.log('.next not present')
  }
} catch (err) {
  console.error('Failed to remove .next cache:', err)
  process.exit(1)
}
