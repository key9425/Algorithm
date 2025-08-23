function solution(spell, dic) {
  let sort_spell = spell.sort().toString();
  return dic.some((v) => [...v].sort().toString() === sort_spell) ? 1 : 2;
}
