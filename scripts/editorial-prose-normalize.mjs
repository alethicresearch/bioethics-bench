/**
 * Conservative prose normalization used for the pre-study language-cleaned Bench release.
 *
 * Scope: punctuation/readability only. It does not add, remove, soften, strengthen, or reorder
 * substantive claims. Semicolons that abruptly join clauses are converted to sentence boundaries;
 * coordinating conjunctions remain joined with commas; semicolon-delimited alternatives after a
 * colon remain a list and use commas.
 */
export function normalizeEditorialProse(text) {
  if (typeof text !== 'string' || !text.includes(';')) return text;
  return text.split(/(?<=[.!?])\s+/).map((sentence) => {
    if (!sentence.includes(';')) return sentence;
    const semis = (sentence.match(/;/g) || []).length;
    const firstSemi = sentence.indexOf(';');
    const colon = sentence.indexOf(':');
    if (semis >= 2 && colon >= 0 && colon < firstSemi) {
      return sentence.replace(/;\s+/g, ', ');
    }
    return sentence.replace(/;\s+(and|or|but|while|whereas|although|yet|so)\b/gi, ', $1')
      .replace(/;\s+([a-z])/g, (_, c) => '. ' + c.toUpperCase());
  }).join(' ');
}
