import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry: string = "I didn't lose — I was calibrating the judges' tolerance for excellence.\n";
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const filename: string = 'entry.txt';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, filename), entry, { encoding: 'utf8' });
