/**
 * Language normalization shared by Bioethics Bench v2 release builders.
 *
 * Scope is intentionally narrow: evaluation-facing prose may change punctuation, capitalization,
 * and whitespace only. No words may be added, deleted, or reordered. This keeps v2 an editorial
 * normalization rather than a substantive rewrite.
 */

const INLINE_CONTINUATIONS = /^(?:and|but|or|whether|with|without|including|rather\s+than)\b/i;
const TRANSITIONS = /^(?:however|nonetheless|nevertheless|otherwise|instead|therefore|thus|accordingly)\b/i;

export function lexicalSignature(text) {
  return String(text ?? '')
    .toLocaleLowerCase('en-US')
    .match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu)?.join(' ') || '';
}

function capitalizeFirstLetter(text) {
  return String(text).replace(/^([^\p{L}]*)(\p{L})/u, (_, prefix, letter) =>
    `${prefix}${letter.toLocaleUpperCase('en-US')}`);
}

export function normalizeEvaluationText(input) {
  if (typeof input !== 'string' || !input.includes(';')) return input;
  const parts = input.split(/;\s*/);
  let out = parts[0];
  for (let i = 1; i < parts.length; i += 1) {
    let next = parts[i];
    const trimmed = next.trimStart();
    if (INLINE_CONTINUATIONS.test(trimmed)) {
      out += `, ${trimmed}`;
      continue;
    }
    if (TRANSITIONS.test(trimmed)) {
      let sentence = capitalizeFirstLetter(trimmed);
      const firstWord = sentence.match(/^([^\p{L}]*\p{L}+[\p{L}-]*)/u)?.[1] || '';
      if (firstWord && !sentence.slice(firstWord.length).trimStart().startsWith(',')) {
        sentence = `${firstWord},${sentence.slice(firstWord.length)}`;
      }
      out += `. ${sentence}`;
      continue;
    }
    out += `. ${capitalizeFirstLetter(trimmed)}`;
  }
  return out;
}

export function normalizeField(value, label) {
  if (typeof value !== 'string') return value;
  const normalized = normalizeEvaluationText(value);
  if (lexicalSignature(value) !== lexicalSignature(normalized)) {
    throw new Error(`${label}: language normalization changed lexical content`);
  }
  return normalized;
}
