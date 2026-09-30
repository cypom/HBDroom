/* =========================================================
   BIRTHDAY ADVENTURE
========================================================= */


/* =========================================================
   GAME SETTINGS
========================================================= */

const PASSWORD = "0530";

const DRAWER_CODE = "10:05";

let treasures = 0;


/* =========================================================
   BASIC ELEMENTS
========================================================= */

const loginScreen =
  document.getElementById("login-screen");

const game =
  document.getElementById("game");

const passwordInput =
  document.getElementById("password-input");

const loginButton =
  document.getElementById("login-button");

const loginMessage =
  document.getElementById("login-message");

const curtain =
  document.getElementById("curtain-transition");

const progressCount =
  document.getElementById("progress-count");

const messageBox =
  document.getElementById("message-box");

const messageText =
  document.getElementById("message-text");


/* =========================================================
   MESSAGE
========================================================= */

let messageTimer = null;

function showMessage(text) {

  messageText.textContent = text;

  messageBox.classList.remove("hidden");

  clearTimeout(messageTimer);

  messageTimer = setTimeout(() => {

    messageBox.classList.add("hidden");

  }, 2600);
}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

  progressCount.textContent = treasures;

  if (treasures >= 5) {

    setTimeout(() => {

      document
        .getElementById("ending")
        .classList.remove("hidden");

    }, 800);

  }

}


/* =========================================================
   LOGIN
========================================================= */

function login() {

  const password =
    passwordInput.value.trim();

  if (password === PASSWORD) {

    loginMessage.textContent =
      "ACCESS GRANTED";

    loginMessage.style.color =
      "#d6c48f";

    setTimeout(() => {

      loginScreen.classList.add("hidden");

      game.classList.remove("hidden");

      startCurtain();

    }, 700);

  } else {

    loginMessage.textContent =
      "ACCESS DENIED";

    passwordInput.value = "";

    passwordInput.focus();

  }

}


loginButton.addEventListener(
  "click",
  login
);


passwordInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {

      login();

    }

  }
);


/* =========================================================
   CURTAIN
========================================================= */

function startCurtain() {

  setTimeout(() => {

    curtain.classList.add("open");

  }, 300);

  setTimeout(() => {

    curtain.remove();

  }, 4300);

}


/* =========================================================
   WINDOW
========================================================= */

document
  .getElementById("window")
  .addEventListener(
    "click",
    () => {

      showMessage(
        "窗外的風很舒服。今天似乎會是很好的日子。"
      );

    }
  );


/* =========================================================
   CLOCK
========================================================= */

document
  .getElementById("clock")
  .addEventListener(
    "click",
    () => {

      showMessage(
        "時鐘停在 10:05。"
      );

    }
  );


/* =========================================================
   DRAWER
========================================================= */

const drawer =
  document.getElementById("drawer");

const drawerModal =
  document.getElementById("drawer-modal");

const closeDrawer =
  document.getElementById("close-drawer-code");

const drawerForm =
  document.getElementById("drawer-form");

const drawerCode =
  document.getElementById("drawer-code");

const drawerMessage =
  document.getElementById("drawer-message");

const drawerReward =
  document.getElementById("drawer-reward");

const closeReward =
  document.getElementById("close-reward");


drawer.addEventListener(
  "click",
  () => {

    drawerModal.classList.remove("hidden");

    drawerCode.focus();

  }
);


closeDrawer.addEventListener(
  "click",
  () => {

    drawerModal.classList.add("hidden");

  }
);


drawerForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const code =
      drawerCode.value.trim();

    if (code === DRAWER_CODE) {

      drawerMessage.textContent =
        "UNLOCKED";

      drawerMessage.style.color =
        "#59704d";

      drawer.classList.add("open");

      setTimeout(() => {

        drawerModal.classList.add("hidden");

        drawerReward.classList.remove("hidden");

        treasures = Math.max(
          treasures,
          1
        );

        updateProgress();

      }, 700);

    } else {

      drawerMessage.textContent =
        "這個時間不對，再看看時鐘。";

      drawerCode.select();

    }

  }
);


closeReward.addEventListener(
  "click",
  () => {

    drawerReward.classList.add("hidden");

    showMessage(
      "第一份寶物收好了。還有其他地方值得看看。"
    );

  }
);


/* =========================================================
   DIARY
========================================================= */

const diary =
  document.getElementById("diary");

const diaryModal =
  document.getElementById("diary-modal");

const closeDiary =
  document.getElementById("close-diary");

const closeDiaryButton =
  document.getElementById(
    "close-diary-button"
  );


diary.addEventListener(
  "click",
  () => {

    diaryModal.classList.remove("hidden");

  }
);


closeDiary.addEventListener(
  "click",
  () => {

    diaryModal.classList.add("hidden");

  }
);


closeDiaryButton.addEventListener(
  "click",
  () => {

    diaryModal.classList.add("hidden");

    showMessage(
      "日記最後寫著：有些回憶，要從小狗開始找。"
    );

  }
);


/* =========================================================
   CAKE
========================================================= */

document
  .getElementById("cake")
  .addEventListener(
    "click",
    () => {

      showMessage(
        "巧克力蛋糕的蠟燭上，好像藏著一個小小的數字。"
      );

    }
  );


/* =========================================================
   DOG MEMORY
========================================================= */

const dogToy =
  document.getElementById("dog-toy");

const dogMemoryModal =
  document.getElementById(
    "dog-memory-modal"
  );

const closeDogMemory =
  document.getElementById(
    "close-dog-memory"
  );

const closeDogMemoryButton =
  document.getElementById(
    "close-dog-memory-button"
  );


dogToy.addEventListener(
  "click",
  () => {

    dogMemoryModal.classList.remove(
      "hidden"
    );

  }
);


closeDogMemory.addEventListener(
  "click",
  () => {

    dogMemoryModal.classList.add(
      "hidden"
    );

  }
);


closeDogMemoryButton.addEventListener(
  "click",
  () => {

    dogMemoryModal.classList.add(
      "hidden"
    );

    showMessage(
      "小狗把這段回憶交給你了。"
    );

  }
);


/* =========================================================
   WARDROBE
========================================================= */

document
  .getElementById("wardrobe")
  .addEventListener(
    "click",
    () => {

      showMessage(
        "衣櫃裡整齊掛著幾件衣服，其中一件黑白襯衫特別顯眼。"
      );

    }
  );


/* =========================================================
   SHIRT
========================================================= */

document
  .getElementById("shirt")
  .addEventListener(
    "click",
    () => {

      showMessage(
        "黑白襯衫的口袋裡，似乎藏著什麼。"
      );

    }
  );


/* =========================================================
   PHOTO FRAME
========================================================= */

document
  .getElementById("photo-frame")
  .addEventListener(
    "click",
    () => {

      showMessage(
        "相框裡的照片讓房間突然變得很安靜。"
      );

    }
  );


/* =========================================================
   SPEAKER
========================================================= */

document
  .getElementById("speaker")
  .addEventListener(
    "click",
    () => {

      showMessage(
        "音響沒有播放音樂，但裡面好像還留著一段錄音。"
      );

    }
  );


/* =========================================================
   RUG
========================================================= */

document
  .getElementById("rug")
  .addEventListener(
    "click",
    () => {

      showMessage(
        "地毯底下似乎有東西，但現在還看不清楚。"
      );

    }
  );


/* =========================================================
   HINT
========================================================= */

document
  .getElementById("hint-button")
  .addEventListener(
    "click",
    () => {

      if (treasures === 0) {

        showMessage(
          "提示：先看看牆上的時鐘。"
        );

      } else if (treasures === 1) {

        showMessage(
          "提示：小狗好像知道一些事情。"
        );

      } else {

        showMessage(
          "提示：仔細觀察每一件家具。"
        );

      }

    }
  );


/* =========================================================
   KEYBOARD ESC
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") {
      return;
    }

    document
      .querySelectorAll(".modal")
      .forEach((modal) => {

        modal.classList.add("hidden");

      });

  }
);
