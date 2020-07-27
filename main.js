let plyName = prompt("プレイヤーの名前を入力してください");
let clearflag = true;
let flag = true;
//プレイヤーデータ
let plyLv = 1;
let plyHp = 6;
let plyHpMax = 6;
let plyAtt = 1;
let plyHeal = 1;
let plyExp = 0;
let plyExpNext = 5;
let plyExpNeed = [
  5,
  15,
  50,
  100,
  180,
  200,
  300,
  500,
  700,
  900,
  1000,
  1300,
  1500,
  2000,
  2500,
  3000,
  3800,
  4000,
  4500,
  5000,
  5500,
  6000,
  6300,
  6500,
  7000,
  7500,
  8000,
  8500,
  8800,
  9000,
  9300,
  9500,
  10000,
  11000,
  12000,
  13000,
  14000,
  15000,
  16000,
  17000,
  18000,
  19000,
  20000,
];
let plyImg = document.getElementById("plyImg");
let plySt = new Array(6);
for (let i = 0; i < 6; i++) {
  plySt[i] = document.getElementById("plySt" + [i]);
}
// let plySt0 = document.getElementById("plySt0");
// let plySt1 = document.getElementById("plySt1");
// let plySt2 = document.getElementById("plySt2");
// let plySt3 = document.getElementById("plySt3");
// let plySt4 = document.getElementById("plySt4");
// let plySt5 = document.getElementById("plySt5");
// let plySt6 = document.getElementById("plySt6");
//配列に
plySt0.textContent = plyName;

//player 回復
plyImg.addEventListener("mousedown", () => {
  if (flag) {
    plyImg.src = "img/playerC.png";
  }
});

plyImg.addEventListener("mouseup", () => {
  if (flag) {
    plyImg.src = "img/playerA.png";
    plyHp += plyHeal;
    if (plyHp > plyHpMax) {
      plyHp = plyHpMax;
    }
    plySt2.textContent = "HP:" + plyHp;
  }
});

//敵データ

let eneLv = 1;
let eneHp = new Array(
  10,
  20,
  30,
  50,
  80,
  100,
  120,
  150,
  180,
  250,
  200,
  230,
  270,
  270,
  330,
  370,
  400,
  450,
  430,
  600,
  480,
  500,
  550,
  570,
  600,
  650,
  670,
  700,
  730,
  800
);
let eneHpMax = new Array(
  10,
  20,
  30,
  50,
  80,
  100,
  120,
  150,
  180,
  250,
  200,
  230,
  270,
  270,
  330,
  370,
  400,
  450,
  430,
  600,
  480,
  500,
  550,
  570,
  600,
  650,
  670,
  700,
  730,
  800
);
let eneAtt = new Array(
  2,
  2,
  3,
  5,
  6,
  8,
  10,
  9,
  12,
  30,
  20,
  25,
  26,
  27,
  28,
  30,
  32,
  35,
  37,
  40,
  38,
  39,
  40,
  41,
  45,
  46,
  48,
  50,
  52,
  60
);
let enekill = new Array(
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
);
let eneExp = new Array(
  1,
  3,
  7,
  10,
  13,
  15,
  19,
  20,
  25,
  40,
  27,
  30,
  33,
  35,
  38,
  40,
  43,
  45,
  47,
  50,
  80,
  60,
  65,
  70,
  75,
  80,
  90,
  100,
  120,
  200
);
let eneCnt = new Array(
  5,
  3,
  4,
  4,
  5,
  5,
  4,
  3,
  4,
  7,
  5,
  5,
  5,
  5,
  3,
  5,
  4,
  5,
  4,
  5,
  5,
  5,
  4,
  6,
  7,
  5,
  4,
  6,
  5,
  5
);
let eneCntMax = new Array(
  5,
  3,
  4,
  4,
  5,
  5,
  4,
  3,
  4,
  7,
  5,
  5,
  5,
  5,
  3,
  5,
  4,
  5,
  4,
  5,
  5,
  5,
  4,
  6,
  7,
  5,
  4,
  6,
  5,
  5
);
let eneImg = document.getElementById("eneImg");
let eneName = new Array(
  "スライム",
  "バット",
  "デグー",
  "スリザ",
  "ウルフ",
  "コナー",
  "テレス",
  "ゾンビ",
  "ジェシカ",
  "トグマ",
  "カブ",
  "メープル",
  "ノコ",
  "ヒュー",
  "キノ",
  "チェン",
  "パックン",
  "メ",
  "ピヨ",
  "赤鬼",
  "スケルトン",
  "裏切りの騎士",
  "コッコー",
  "タマ",
  "ワシ",
  "魔導士",
  "ケルベロス",
  "オーガ",
  "スカルナイト",
  "影の王"
);
let eneSt = new Array(4);
for (let i = 0; i < 4; i++) {
  eneSt[i] = document.getElementById("eneSt" + [i]);
}
// let eneSt0 = document.getElementById("eneSt0");
// let eneSt1 = document.getElementById("eneSt1");
// let eneSt2 = document.getElementById("eneSt2");
// let eneSt3 = document.getElementById("eneSt3");
// let eneSt4 = document.getElementById("eneSt4");

//ステージ切り替え
left = document.getElementById("left");
right = document.getElementById("right");
left.addEventListener("click", () => {
  if (eneLv > 1 && flag) {
    eneLv--;
    eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
    eneSt0.textContent = eneName[eneLv - 1];
    eneSt1.textContent = "レベル:" + eneLv;
    eneSt2.textContent = "HP:" + eneHp[eneLv - 1];
    eneSt3.textContent = "攻撃力:" + eneAtt[eneLv - 1];
    eneSt4.textContent = "倒した回数:" + enekill[eneLv - 1];
    if (eneLv == 10 || eneLv == 20 || eneLv == 30) {
      eneSt0.style.color = "#dc143c";
    } else {
      eneSt0.style.color = "#000000";
    }
  }
});
right.addEventListener("click", () => {
  if (eneLv < 30 && flag) {
    eneLv++;
    eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
    eneSt0.textContent = eneName[eneLv - 1];
    eneSt1.textContent = "レベル:" + eneLv;
    eneSt2.textContent = "HP:" + eneHp[eneLv - 1];
    eneSt3.textContent = "攻撃力:" + eneAtt[eneLv - 1];
    eneSt4.textContent = "倒した回数:" + enekill[eneLv - 1];
    if (eneLv == 10 || eneLv == 20 || eneLv == 30) {
      eneSt0.style.color = "#dc143c";
    } else {
      eneSt0.style.color = "#000000";
    }
  }
});

//敵を攻撃
eneImg.addEventListener("mousedown", () => {
  if (flag) {
    eneImg.src = "img/enemyB" + (eneLv - 1) + ".png";
  }
});
eneImg.addEventListener("mouseup", () => {
  if (flag) {
    eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
    if (eneHp[eneLv - 1] > 0) {
      eneHp[eneLv - 1] -= plyAtt;
    } else {
      eneHp[eneLv - 1] = eneHpMax[eneLv - 1];

      enekill[eneLv - 1]++;
      eneSt4.textContent = "倒した回数:" + enekill[eneLv - 1];
      //経験値処理
      plyExp += eneExp[eneLv - 1];
      plySt5.textContent = "経験値:" + plyExp;
      plyExpNext -= eneExp[eneLv - 1];
      //ゲームクリア演出
      if (enekill[9] == 1 && clearflag) {
        eneImg.src = "img/clear.png";
        clearflag = false;
        setTimeout(() => {
          eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
        }, 1500);
      }
      //レベルアップの処理
      if (plyExpNext <= 0) {
        plyExpNext = plyExpNeed[plyLv];
        plyLv++;
        plySt1.textContent = "レベル" + plyLv;
        plyHpMax = plyLv * 4 + 6;
        plyHp = plyHpMax;
        plySt2.textContent = "HP" + plyHp;
        plyAtt++;
        plySt3.textContent = "攻撃力" + plyAtt;
        if (plyLv / 2 == 1) {
          plyHeal++;
        }
        plySt4.textContent = "回復魔法" + plyHeal;
      }
      plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
    }
    eneSt2.textContent = "HP:" + eneHp[eneLv - 1];
  }
});

//敵が時間ごとに攻撃

let eneSec = document.getElementById("eneSec");
let loop = setInterval(() => {
  if (eneCnt[eneLv - 1] > 0) {
    eneCnt[eneLv - 1]--;
    eneSec.textContent = "モンスターの攻撃まで" + eneCnt[eneLv - 1] + "秒";
  } else {
    plyHp = plyHp - eneAtt[eneLv - 1];
    if (plyHp > 0) {
      plySt2.textContent = "HP:" + plyHp;
      plyImg.src = "img/playerB.png";
      eneSec.textContent = "モンスターの攻撃まで" + eneCnt[eneLv - 1] + "秒";
    } else {
      plyHp = 0;
      clearInterval(loop);
      flag = false;
      plySt2.textContent = "HP:" + plyHp;
      eneSec.textContent = "ゲームオーバー";
    }
    if (flag) {
      setTimeout(() => {
        eneCnt[eneLv - 1] = eneCntMax[eneLv - 1];
        plyImg.src = "img/playerA.png";
        eneSec.textContent = "モンスターの攻撃まで" + eneCnt[eneLv - 1] + "秒";
      }, 500);
    }
  }
}, 1000);
