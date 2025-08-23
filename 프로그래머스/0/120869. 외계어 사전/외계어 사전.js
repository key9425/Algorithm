function solution(spell, dic) {
  return dic.some((v) => new Set([...v]).size === spell.length && new Set([...v, ...spell]).size === spell.length) ? 1 : 2;
}
