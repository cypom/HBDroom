/* =========================================================
   Birthday Adventure
   ========================================================= */


/* =========================================================
   遊戲設定
   ========================================================= */

const PASSWORD = "0530";
const DRAWER_CODE = "10:05";


/* =========================================================
   DOM
   ========================================================= */

const loginScreen =
  document.getElementById("login-screen");

const gameScreen =
  document.getElementById("game-screen");

const passwordForm =
  document.getElementById("password-form");

const passwordInput =
  document.getElementById("password-input");

const loginMessage =
  document.getElementById("login-message");

const curtainTransition =
  document.getElementById("curtain-transition");

const progressText =
  document.getElementById("progress-text");

const sceneHint =
  document.getElementById("scene-hint");


/* =========================================================
   遊戲進度
   ========================================================= */

let treasureCount = 0;

const foundTreasures = new Set();


/* =========================================================
   工具
   ========================================================= */

function showHint(message, duration = 2500) {

  sceneHint.textContent = message;

  sceneHint.classList.remove("hidden");

  clearTimeout(showHint.timer);

  showHint.timer = setTimeout(() => {

    sceneHint.classList.add("hidden");

  }, duration);
}


function updateProgress() {

  progressText.textContent =
    `TREASURE ${treasureCount} / 5`;

}


function collectTreasure(number) {

  if (foundTreasures.has(number)) {
    return;
  }

  foundTreasures.add(number);

  treasureCount++;

  updateProgress();

  showHint(
    `找到 Treasure ${number}！`,
    2200
  );

  if (treasureCount >= 5) {

    setTimeout(() => {

      openModal("final-modal");

    }, 1200);

  }

}


/* =========================================================
   Modal
   ========================================================= */

function openModal(id) {

  const modal =
    document.getElementById(id);

  if (!modal) return;

  modal.classList.remove("hidden");

}


function closeModal(id) {

  const modal =
    document.getElementById(id);

  if (!modal) return;

  modal.classList.add("hidden");

}


/* =========================================================
   登入
   ========================================================= */

passwordForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const password =
    passwordInput.value.trim();

  if (password === PASSWORD) {

    loginMessage.textContent =
      "ACCESS GRANTED";

    loginMessage.style.color =
      "#f4e8cf";

    passwordInput.disabled = true;

    document.getElementById("access-button").disabled = true;

    setTimeout(() => {

      loginScreen.classList.add("hidden");

      gameScreen.classList.remove("hidden");

      startCurtainTransition();

    }, 700);

  } else {

    loginMessage.textContent =
      "ACCESS DENIED";

    loginMessage.style.color =
      "#d6a88e";

    passwordInput.value = "";

    passwordInput.focus();

  }

});


/* =========================================================
   確保一開始輸入框真的能使用
   ========================================================= */

window.addEventListener("load", () => {

  if (
    loginScreen &&
    !loginScreen.classList.contains("hidden")
  ) {

    setTimeout(() => {

      passwordInput.focus();

    }, 100);

  }

});


/* =========================================================
   窗簾動畫
   ========================================================= */

function startCurtainTransition() {

  curtainTransition.classList.remove("open");

  setTimeout(() => {

    curtainTransition.classList.add("open");

  }, 300);

}


/* =========================================================
   窗戶
   ========================================================= */

document
  .getElementById("window-object")
  .addEventListener("click", () => {

    showHint(
      "窗外的光線照進房間，好像有人正在等待。",
      3000
    );

  });


/* =========================================================
   時鐘
   ========================================================= */

document
  .getElementById("clock-object")
  .addEventListener("click", () => {

    showHint(
      "時鐘停在 10:05。",
      3000
    );

  });


/* =========================================================
   抽屜
   ========================================================= */

document
  .getElementById("drawer-object")
  .addEventListener("click", () => {

    openModal("drawer-modal");

    const input =
      document.getElementById("drawer-input");

    setTimeout(() => {

      input.focus();

    }, 100);

  });


/* =========================================================
   抽屜解鎖
   ========================================================= */

document
  .getElementById("drawer-submit")
  .addEventListener("click", unlockDrawer);


document
  .getElementById("drawer-input")
  .addEventListener("keydown", event => {

    if (event.key === "Enter") {

      unlockDrawer();

    }

  });


function unlockDrawer() {

  const input =
    document.getElementById("drawer-input");

  const message =
    document.getElementById("drawer-message");

  const value =
    input.value.trim();

  if (value === DRAWER_CODE) {

    message.textContent =
      "UNLOCKED — 你找到第一個寶物。";

    message.style.color =
      "#725847";

    collectTreasure(1);

    setTimeout(() => {

      closeModal("drawer-modal");

    }, 1000);

  } else {

    message.textContent =
      "密碼不對，再看看房間裡的時鐘。";

    message.style.color =
      "#9b6652";

    input.select();

  }

}


/* =========================================================
   日記
   ========================================================= */

document
  .getElementById("diary-object")
  .addEventListener("click", () => {

    openModal("diary-modal");

    collectTreasure(2);

  });


/* =========================================================
   蛋糕
   ========================================================= */

document
  .getElementById("cake-object")
  .addEventListener("click", () => {

    showHint(
      "蛋糕旁似乎留下了一點線索……小狗知道答案。",
      3000
    );

  });


/* =========================================================
   小狗
   ========================================================= */

document
  .getElementById("dog-object")
  .addEventListener("click", () => {

    openModal("dog-modal");

    collectTreasure(3);

  });


/* =========================================================
   衣櫃
   ========================================================= */

document
  .getElementById("wardrobe-object")
  .addEventListener("click", () => {

    showHint(
      "衣櫃裡掛著一件黑白相間的衣服。",
      3000
    );

    collectTreasure(4);

  });


/* =========================================================
   照片框
   ========================================================= */

document
  .getElementById("frame-object")
  .addEventListener("click", () => {

    showHint(
      "照片框裡藏著一段回憶。再看看地毯附近。",
      3200
    );

  });


/* =========================================================
   音響
   ========================================================= */

document
  .getElementById("speaker-object")
  .addEventListener("click", () => {

    showHint(
      "音響沒有播放音樂，房間卻好像還留著某段旋律。",
      3200
    );

  });


/* =========================================================
   地毯
   ========================================================= */

document
  .getElementById("rug-object")
  .addEventListener("click", () => {

    showHint(
      "地毯底下好像壓著什麼東西……",
      2800
    );

    collectTreasure(5);

  });


/* =========================================================
   Modal 關閉按鈕
   ========================================================= */

document
  .querySelectorAll("[data-close]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const id =
        button.getAttribute("data-close");

      closeModal(id);

    });

  });


/* =========================================================
   點 Modal 外部關閉
   ========================================================= */

document
  .querySelectorAll(".modal")
  .forEach(modal => {

    modal.addEventListener("click", event => {

      if (event.target === modal) {

        modal.classList.add("hidden");

      }

    });

  });


/* =========================================================
   ESC 關閉 Modal
   ========================================================= */

document.addEventListener("keydown", event => {

  if (event.key !== "Escape") {
    return;
  }

  document
    .querySelectorAll(".modal:not(.hidden)")
    .forEach(modal => {

      modal.classList.add("hidden");

    });

});


/* =========================================================
   狗狗照片錯誤處理
   ========================================================= */

const dogPhoto =
  document.getElementById("dog-photo");

const photoFallback =
  document.getElementById("photo-fallback");


dogPhoto.addEventListener("error", () => {

  dogPhoto.style.display = "none";

  photoFallback.style.display = "flex";

});


dogPhoto.addEventListener("load", () => {

  dogPhoto.style.display = "block";

  photoFallback.style.display = "none";

});


/* =========================================================
   最終重新開始
   ========================================================= */

document
  .getElementById("restart-button")
  .addEventListener("click", () => {

    treasureCount = 0;

    foundTreasures.clear();

    updateProgress();

    closeModal("final-modal");

    showHint(
      "房間裡的秘密又重新等待著你。",
      2500
    );

  });


/* =========================================================
   初始進度
   ========================================================= */

updateProgress();
