/* ==================================================
   GAME DATA
================================================== */

const PASSWORD = "0530";
const CLOCK_CODE = "10:05";

let treasures = 0;
let finalShown = false;


/* ==================================================
   ELEMENTS
================================================== */

const loginScreen = document.getElementById("login-screen");
const gameScreen = document.getElementById("game-screen");

const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");

const progressText = document.getElementById("progress-text");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const modalInputArea = document.getElementById("modal-input-area");
const modalAction = document.getElementById("modal-action");
const modalClose = document.getElementById("modal-close");

const finalScreen = document.getElementById("final-screen");


/* ==================================================
   LOGIN
================================================== */

function login() {

  const password = passwordInput.value.trim();

  if (password === PASSWORD) {

    loginMessage.textContent = "ACCESS GRANTED";

    loginMessage.style.color = "#d7c19a";

    setTimeout(() => {

      loginScreen.style.display = "none";
      gameScreen.style.display = "block";

      const curtains = document.querySelector(".window-object");

      if (curtains) {
        curtains.classList.add("window-open");
      }

    }, 700);

  } else {

    loginMessage.textContent = "ACCESS DENIED";

    loginMessage.style.color = "#c27d68";

    passwordInput.value = "";

  }

}


loginButton.addEventListener("click", login);

passwordInput.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    login();
  }

});


/* ==================================================
   MODAL
================================================== */

function openModal(title, content, inputHTML = "", buttonText = "CONTINUE", callback = null) {

  modalTitle.textContent = title;
  modalContent.textContent = content;

  modalInputArea.innerHTML = inputHTML;

  modalAction.textContent = buttonText;

  modal.style.display = "flex";

  modalAction.onclick = () => {

    if (callback) {
      callback();
    } else {
      closeModal();
    }

  };

}


function closeModal() {

  modal.style.display = "none";

  modalInputArea.innerHTML = "";

}


modalClose.addEventListener("click", closeModal);


/* ==================================================
   TREASURE
================================================== */

function collectTreasure(number) {

  if (treasures >= number) {
    return;
  }

  treasures++;

  progressText.textContent =
    `TREASURES FOUND : ${treasures} / 5`;

  if (treasures >= 5 && !finalShown) {

    finalShown = true;

    setTimeout(() => {

      finalScreen.style.display = "flex";

    }, 800);

  }

}


/* ==================================================
   CLOCK
================================================== */

document.getElementById("clock-object").addEventListener("click", () => {

  openModal(
    "CLOCK",
    "指針停在一個特別的時間。\n\n10 : 05\n\n也許這不是普通的時間。",
    "",
    "記住時間",
    () => {
      collectTreasure(1);
      closeModal();
    }
  );

});


/* ==================================================
   DIARY
================================================== */

document.getElementById("diary-object").addEventListener("click", () => {

  openModal(
    "白色日記本",
    "翻開日記，第一頁只有一句話：\n\n「有些甜甜的東西，總要留給最重要的人。」\n\n桌上似乎還有什麼東西。",
    "",
    "繼續尋找",
    () => {
      closeModal();
    }
  );

});


/* ==================================================
   CAKE
================================================== */

document.getElementById("cake-object").addEventListener("click", () => {

  openModal(
    "桌上的蛋糕",
    "小小的蛋糕安靜地放在桌上。\n\n蛋糕旁邊壓著一張紙條：\n\n「真正重要的東西，不在桌上。」",
    "",
    "尋找線索",
    () => {
      collectTreasure(2);
      closeModal();
    }
  );

});


/* ==================================================
   DOG
================================================== */

document.getElementById("dog-object").addEventListener("click", () => {

  openModal(
    "小狗玩偶",
    "你拿起小狗玩偶。\n\n背後縫著一小張紙條：\n\n「小狗的大貓咪」\n\n這個稱呼似乎只屬於某個人。",
    "",
    "打開紙條",
    () => {

      openModal(
        "小狗的大貓咪",
        "紙條裡還夾著一張照片。\n\n照片背面寫著：\n\n「【把照片日期寫在這裡】」",
        "",
        "收下這段記憶",
        () => {
          collectTreasure(3);
          closeModal();
        }
      );

    }
  );

});


/* ==================================================
   WARDROBE
================================================== */

document.getElementById("wardrobe-object").addEventListener("click", () => {

  openModal(
    "衣櫃",
    "衣櫃裡掛著一件黑白相間的衣服。\n\n衣服口袋裡有一張照片。",
    "",
    "查看照片",
    () => {

      openModal(
        "黑白照片",
        "照片裡保存著一個普通卻珍貴的瞬間。\n\n也許真正的寶物，就是這些一起走過的日子。",
        "",
        "收下回憶",
        () => {
          collectTreasure(4);
          closeModal();
        }
      );

    }
  );

});


/* ==================================================
   PICTURE
================================================== */

document.getElementById("picture-object").addEventListener("click", () => {

  openModal(
    "照片框",
    "照片框裡沒有寫名字。\n\n但你知道，這個位置一定是為某個重要的人留下的。",
    "",
    "繼續",
    () => {
      closeModal();
    }
  );

});


/* ==================================================
   RUG
================================================== */

document.getElementById("rug-object").addEventListener("click", () => {

  openModal(
    "地毯",
    "你掀起地毯的一角。\n\n底下藏著最後一張紙條：\n\n「如果你走到這裡，代表你已經找回了所有東西。」\n\n「那麼，生日快樂。」",
    "",
    "找到最後的寶物",
    () => {
      collectTreasure(5);
      closeModal();
    }
  );

});


/* ==================================================
   SPEAKER
================================================== */

document.getElementById("speaker-object").addEventListener("click", () => {

  openModal(
    "音響",
    "音響裡沒有播放音樂。\n\n只有一個小小的標籤：\n\nPLAY WHEN YOU MISS THIS ROOM.",
    "",
    "關閉",
    () => {
      closeModal();
    }
  );

});


/* ==================================================
   CLOSE MODAL WITH ESC
================================================== */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});
