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
  130,
  150,
  200,
  250,
  300,
  450,
  500,
  600,
  700,
  800,
  900,
  1000,
  1100,
  1200,
  1300,
  1400,
  1500,
  1600,
  1800,
  2000,
  2200,
  2400,
  2600,
  2800,
  3000,
  3300,
  3600,
  3900,
  4200,
  4500,
  5000,
  6000,
  7000,
  8000,
  9000,
  10000,
  12000,
  13000,
  14000,
  15000,
  17000,
  19000,
  21000,
  25000,
  30000,
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
  1200
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
  1200
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
  25,
  12,
  14,
  15,
  18,
  20,
  22,
  24,
  26,
  28,
  40,
  30,
  32,
  34,
  35,
  38,
  41,
  42,
  45,
  50,
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
  5,
  10,
  15,
  20,
  25,
  30,
  35,
  40,
  80,
  50,
  62,
  70,
  82,
  100,
  120,
  130,
  150,
  180,
  200,
  400,
  300,
  350,
  400,
  500,
  600,
  700,
  850,
  1000,
  2500
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
  3,
  6,
  7,
  5,
  4,
  6,
  5,
  4
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
  3,
  6,
  7,
  5,
  4,
  6,
  5,
  4
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

//必殺技
let kikku = document.getElementById("kikku");
let count = document.getElementById("count");
let ct = 0;

let looph = setInterval(() => {
  ct--;
  if (ct < 0) {
    ct = 0;
  }
  if (plyHp == 0) {
    clearInterval(looph);
    flag = false;
  }
  count.textContent = "次使えるまで残り" + ct + "秒";
  kikku.addEventListener("mousedown", () => {
    if (ct == 0 && flag) {
      eneImg.src = "img/enemyB" + (eneLv - 1) + ".png";
    }
  });
  kikku.addEventListener("mouseup", () => {
    if (ct == 0 && flag) {
      eneHp[eneLv - 1] -= plyAtt * 15;
      if (eneHp[eneLv - 1] < 0) {
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
          }, 2000);
        }
        //レベルアップの処理
        if (plyExpNext <= 0) {
          plyExpNext = plyExpNeed[plyLv];
          plyLv++;
          plySt1.textContent = "レベル:" + plyLv;
          plyHpMax = plyLv * 6 + 6;
          plyHp = plyHpMax;
          plySt2.textContent = "HP:" + plyHp;
          plyAtt++;
          plySt3.textContent = "攻撃力:" + plyAtt;

          plyHeal = Math.floor(plyLv * 0.3 + 1);

          plySt4.textContent = "回復魔法:" + plyHeal;
        }
        plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
      }
      eneSt2.textContent = "HP:" + eneHp[eneLv - 1];
    }
    ct = 20;
    eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
  });
}, 1000);

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
        }, 2000);
      }
      //レベルアップの処理
      if (plyExpNext <= 0) {
        plyExpNext = plyExpNeed[plyLv];
        plyLv++;
        plySt1.textContent = "レベル:" + plyLv;
        plyHpMax = plyLv * 6 + 6;
        plyHp = plyHpMax;
        plySt2.textContent = "HP:" + plyHp;
        plyAtt++;
        plySt3.textContent = "攻撃力:" + plyAtt;

        plyHeal = Math.floor(plyLv * 0.3 + 1);

        plySt4.textContent = "回復魔法:" + plyHeal;
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
