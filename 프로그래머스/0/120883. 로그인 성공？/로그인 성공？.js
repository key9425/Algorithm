function solution(id_pw, db) {
  let [id, pw] = id_pw;
  let data = db.find((v) => v[0] === id);
  return data ? (data[1] === pw ? "login" : "wrong pw") : "fail";
}
