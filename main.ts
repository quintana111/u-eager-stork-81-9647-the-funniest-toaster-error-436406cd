// The Funniest Toaster Error Message — entry program (Node, stdlib only).
// Writes exactly one line, 105 characters, to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader container).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const LINE = 'Toast ejected successfully. Toast status: deceased. Please hold a small funeral before reinserting bread.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), `${LINE}\n`, 'utf8');
