const init_users = {
    "NE000000": {ID : "NE000000", password: "aaaaaa", name: "たいちゃん", one_interview: 0},
    "NE000001": {ID : "NE000001", password: "Gkde4d", name: "まえやん", one_interview: 0},
    "NE000002": {ID : "NE000002", password: "Kt2jes", name: "フフフ大魔王", one_interview: 1},
    "NE000003": {ID : "NE000003", password: "altnyu", name: "ふくいけん", one_interview: 1},
    "NE000004": {ID : "NE000004", password: "Kt2jes", name: "フフフ大魔王の母", one_interview: 1}
  };


  localStorage.clear();
// localStorage に保存されてなければ、初期データを保存
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(init_users));
  }
  
  // 常に localStorage から読み込む
  var users = JSON.parse(localStorage.getItem("users"));

  localStorage.setItem("users", JSON.stringify(init_users));
