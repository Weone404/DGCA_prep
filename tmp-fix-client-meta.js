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
  let content = fs.readFileSync(filePath, 'utf8');
  const regex = /export const metadata = \{[\s\S]*?\n\};\r?\n/;
  if (regex.test(content)) {
    content = content.replace(regex, '/* metadata moved to server route or layout */\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('patched', file);
  } else {
    console.log('no-match', file);
  }
}
