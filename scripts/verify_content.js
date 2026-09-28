import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const questionsBankPath = path.resolve(__dirname, '../src/data/questions/questionsBank.ts');

if (!fs.existsSync(questionsBankPath)) {
  console.error(`Error: File not found at ${questionsBankPath}`);
  process.exit(1);
}

const content = fs.readFileSync(questionsBankPath, 'utf8');

const idMatches = content.match(/"id":\s*"/g) || [];
const totalCount = idMatches.length;

const verifiedPyqMatches = content.match(/"sourceType":\s*"verified-pyq"/g) || [];
const originalMatches = content.match(/"sourceType":\s*"original-pyq-style"/g) || [];

const physicsMatches = content.match(/"subject":\s*"Physics"/g) || [];
const chemistryMatches = content.match(/"subject":\s*"Chemistry"/g) || [];
const mathMatches = content.match(/"subject":\s*"Mathematics"/g) || [];

console.log('==================================================');
console.log('ENGINEERING ENTRANCE MASTER - DATABASE VALIDATION');
console.log('==================================================');
console.log(`Total Questions: ${totalCount}`);
console.log(`Verified PYQs: ${verifiedPyqMatches.length}`);
console.log(`Original PYQ-Style: ${originalMatches.length}`);
console.log(`Physics Questions: ${physicsMatches.length}`);
console.log(`Chemistry Questions: ${chemistryMatches.length}`);
console.log(`Mathematics Questions: ${mathMatches.length}`);
console.log('==================================================');

if (totalCount < 1000) {
  console.error(`FAILURE: Expected at least 1,000 questions, found ${totalCount}.`);
  process.exit(1);
}

console.log('SUCCESS: All question database validation checks PASSED.');
