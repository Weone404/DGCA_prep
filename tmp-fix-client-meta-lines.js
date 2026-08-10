const fs = require('fs');
const path = require('path');
const files = [
  'app/ai-doubt-chat/page.jsx',
  'app/dashboard/page.jsx',
  'app/flying-training-license/page.jsx',
  'app/interview/page.jsx',
  'app/lectures/page.jsx',
  'app/live-classes/page.jsx',
  'app/mock-tests/page.jsx',
  'app/my-progress/page.jsx',
  'app/profile/page.jsx',
  'app/resources/page.jsx',
  'app/student-education-loan/page.jsx',
  'app/student-visa/page.jsx',
  'app/student-visa/usa-visa/admission-letter/form/page.jsx',
  'app/student-visa/usa-visa/admission-letter/page.jsx',
  'app/student-visa/usa-visa/interview/interview-questions/page.jsx',
  'app/subject-tests/page.jsx'
];
for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.log('missing', file);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim().startsWith('export const metadata ='));
  if (start === -1) {
    console.log('no metadata block:', file);
    continue;
  }
  let end = start;
  let braceCount = 0;
  const openLine = lines[start];
  braceCount += (openLine.match(/\{/g) || []).length;
  braceCount -= (openLine.match(/\}/g) || []).length;
  while (end + 1 < lines.length && braceCount > 0) {
    end += 1;
    const line = lines[end];
    braceCount += (line.match(/\{/g) || []).length;
    braceCount -= (line.match(/\}/g) || []).length;
  }
  if (braceCount !== 0) {
    console.log('brace mismatch:', file);
    continue;
  }
  const removeEnd = end + 1 < lines.length && lines[end + 1].trim() === '' ? end + 1 : end;
  const newLines = [...lines.slice(0, start), '/* metadata moved to server route or layout */', ...lines.slice(removeEnd + 1)];
  fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  console.log('patched', file);
}
