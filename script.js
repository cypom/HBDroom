/* =====================================================
   BIRTHDAY ADVENTURE
   Vanilla JavaScript
===================================================== */


/* =====================================================
   1. GAME CONTENT
   只需要修改這裡，就可以更換個人化內容
===================================================== */

const GAME_CONTENT = {

  password: "0530",

  drawerCode: "10:05",

  dogPhoto: "images/dog.jpg",

  dogTitle: "小狗的大貓咪",

  dogDate: "2024.07.24",

  memoryPhoto: "images/memory1.jpg",

  memoryDate: "2024.07.24",

  birthdayName: "YOUR FRIEND",

  birthdayMessage: "Happy Birthday!"

};


/* =====================================================
   2. GAME STATE
===================================================== */

const GAME_STATE = {

  gameStarted: false,

  drawerSolved: false,

  dogMemorySeen: false,

  wardrobeOpened: false,

  wardrobeSolved: false,

  photoMemorySeen: false,

  rugSolved: false,

  diarySeen: false,

  finalClockSolved: false,

  treasures: 0

};


/* =====================================================
   3. DOM
===================================================== */

const loginScreen =
  document.getElementById("login-screen");

const game =
  document.getElementById("game");

const passwordInput =
  document.getElementById("password-input");

const passwordSubmit =
  document.getElementById("password-submit");

const passwordMessage =
  document.getElementById("password-message");

const curtainTransition =
  document.getElementById("curtain-transition");

const treasureCount =
  document.getElementById("treasure-count");

const clock =
  document.getElementById("clock");

const drawer =
  document.getElementById("drawer");

const diary =
  document.getElementById("diary");

const cake =
  document.getElementById("cake");

const dogToy =
  document.getElementById("dog-toy");

const wardrobe =
  document.getElementById("wardrobe");

const photoFrame =
  document.getElementById("photo-frame");

const rug =
  document.getElementById("rug");

const speaker =
  document.getElementById("speaker");

const windowObject =
  document.getElementById("window");

const hintButton =
  document.getElementById("hint-button");


/* =====================================================
   4. PERSONALIZED CONTENT
===================================================== */

const dogPhoto =
  document.querySelector("#dog-memory-modal img");

if (dogPhoto) {
  dogPhoto.src = GAME_CONTENT.dogPhoto;
}

const dogTitle =
  document.querySelector("#dog-memory-modal h2");

if (dogTitle) {
  dogTitle.textContent = GAME_CONTENT.dogTitle;
}

const dogDate =
  document.getElementById("dog-date");

if (dogDate) {
  dogDate.textContent = GAME_CONTENT.dogDate;
}

const memoryPhoto =
  document.querySelector("#photo-memory-modal img");

if (memoryPhoto) {
  memoryPhoto.src = GAME_CONTENT.memoryPhoto;
}

const birthdayName =
  document.getElementById("birthday-name");

if (birthdayName) {
  birthdayName.textContent =
    GAME_CONTENT.birthdayName;
}

const birthdayMessage =
  document.getElementById("birthday-message");

if (birthdayMessage) {
  birthdayMessage.textContent =
    GAME_CONTENT.birthdayMessage;
}


/* =====================================================
   5. MODALS
===================================================== */

function showModal(modal) {

  if (!modal) return;

  modal.classList.remove("hidden");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );
}


function hideModal(modal) {

  if (!modal) return;

  modal.classList.add("hidden");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );
}


/* =====================================================
   6. LOGIN
===================================================== */

function checkPassword() {

  const value =
    passwordInput.value.trim();

  if (value === GAME_CONTENT.password) {

    passwordMessage.textContent =
      "ACCESS GRANTED";

    passwordMessage.style.color =
      "#d5bc8e";

    passwordInput.disabled = true;
    passwordSubmit.disabled = true;

    startCurtainTransition();

  } else {

    passwordMessage.textContent =
      "ACCESS DENIED";

    passwordMessage.style.color =
      "#b87563";

    passwordInput.value = "";

    passwordInput.focus();
  }
}


passwordSubmit.addEventListener(
  "click",
  checkPassword
);


passwordInput.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Enter") {

      checkPassword();

    }

  }
);


/* =====================================================
   7. CURTAIN
===================================================== */

function startCurtainTransition() {

  curtainTransition.classList.remove("hidden");

  setTimeout(() => {

    curtainTransition.classList.add("open");

  }, 400);

  setTimeout(() => {

    loginScreen.classList.add("hidden");

    game.classList.remove("hidden");

    game.classList.add("room-lit");

    GAME_STATE.gameStarted = true;

  }, 3500);

  setTimeout(() => {

    curtainTransition.classList.add("hidden");

  }, 4300);
}


/* =====================================================
   8. TREASURE SYSTEM
===================================================== */

function collectTreasure() {

  if (GAME_STATE.treasures >= 5) {
    return;
  }

  GAME_STATE.treasures += 1;

  treasureCount.textContent =
    GAME_STATE.treasures;

  if (GAME_STATE.treasures >= 5) {

    setTimeout(() => {

      completeGame();

    }, 1000);

  }
}


/* =====================================================
   9. DRAWER
===================================================== */

const drawerModal =
  document.getElementById("drawer-modal");

const drawerCode =
  document.getElementById("drawer-code");

const drawerSubmit =
  document.getElementById("drawer-submit");

const drawerMessage =
  document.getElementById("drawer-message");

const closeDrawerCode =
  document.getElementById("close-drawer-code");


drawer.addEventListener(
  "click",
  openDrawer
);


function openDrawer() {

  if (GAME_STATE.drawerSolved) {

    showHint(
      "抽屜已經打開了。"
    );

    return;
  }

  showModal(drawerModal);

  drawerCode.value = "";

  drawerMessage.textContent = "";

  setTimeout(() => {
    drawerCode.focus();
  }, 100);
}


drawerSubmit.addEventListener(
  "click",
  checkDrawerCode
);


drawerCode.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Enter") {

      checkDrawerCode();

    }

  }
);


function checkDrawerCode() {

  const value =
    drawerCode.value.trim();

  if (value === GAME_CONTENT.drawerCode) {

    GAME_STATE.drawerSolved = true;

    drawer.classList.add("open");

    hideModal(drawerModal);

    collectTreasure();

    showRewardModal();

  } else {

    drawerMessage.textContent =
      "時間好像不對。再看看房間裡的時鐘。";

  }
}


closeDrawerCode.addEventListener(
  "click",
  () => hideModal(drawerModal)
);


/* =====================================================
   10. REWARD
===================================================== */

const rewardModal =
  document.getElementById("reward-modal");

const closeReward =
  document.getElementById("close-reward");


function showRewardModal() {

  const label =
    rewardModal.querySelector(".reward-label");

  if (label) {

    label.textContent =
      "TREASURE 01";

  }

  showModal(rewardModal);
}


closeReward.addEventListener(
  "click",
  () => hideModal(rewardModal)
);


/* =====================================================
   11. CLOCK
===================================================== */

clock.addEventListener(
  "click",
  handleClock
);


function handleClock() {

  if (
    GAME_STATE.treasures >= 4 &&
    !GAME_STATE.finalClockSolved
  ) {

    GAME_STATE.finalClockSolved = true;

    collectTreasure();

    showHint(
      "10:05。\n原來答案從一開始就沒有離開。"
    );

    return;
  }

  showHint(
    "時鐘停在 10:05。"
  );
}


/* =====================================================
   12. CAKE
===================================================== */

cake.addEventListener(
  "click",
  function () {

    showHint(
      "一塊巧克力蛋糕，還插著一根蠟燭。\n\n蠟燭上的數字是：3"
    );

  }
);


/* =====================================================
   13. DOG MEMORY
===================================================== */

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
  openDogMemory
);


function openDogMemory() {

  GAME_STATE.dogMemorySeen = true;

  showModal(dogMemoryModal);
}


closeDogMemory.addEventListener(
  "click",
  () => hideModal(dogMemoryModal)
);


closeDogMemoryButton.addEventListener(
  "click",
  function () {

    hideModal(dogMemoryModal);

    showHint(
      "照片裡的日期，也許藏著下一個線索。"
    );

  }
);


/* =====================================================
   14. WARDROBE
===================================================== */

wardrobe.addEventListener(
  "click",
  function () {

    if (!GAME_STATE.dogMemorySeen) {

      showHint(
        "也許先看看房間裡的其他回憶。"
      );

      return;

    }

    if (!GAME_STATE.wardrobeOpened) {

      GAME_STATE.wardrobeOpened = true;

      wardrobe.classList.add("open");

      setTimeout(() => {

        showHint(
          "衣櫃裡掛著一件黑白襯衫。\n\n口袋裡似乎有東西。"
        );

      }, 700);

      return;
    }


    if (
      GAME_STATE.wardrobeOpened &&
      !GAME_STATE.wardrobeSolved
    ) {

      GAME_STATE.wardrobeSolved = true;

      collectTreasure();

      showHint(
        "你在黑白襯衫的口袋裡找到一張紙條。\n\n上面寫著：24\n\nTREASURE 03"
      );

    }

  }
);


/* =====================================================
   15. PHOTO FRAME
===================================================== */

const photoMemoryModal =
  document.getElementById(
    "photo-memory-modal"
  );

const closePhotoMemory =
  document.getElementById(
    "close-photo-memory"
  );

const closePhotoMemoryButton =
  document.getElementById(
    "close-photo-memory-button"
  );


photoFrame.addEventListener(
  "click",
  function () {

    if (!GAME_STATE.wardrobeSolved) {

      showHint(
        "相框裡的照片好像還在等你找到更多線索。"
      );

      return;

    }

    GAME_STATE.photoMemorySeen = true;

    showModal(photoMemoryModal);

  }
);


closePhotoMemory.addEventListener(
  "click",
  () => hideModal(photoMemoryModal)
);


closePhotoMemoryButton.addEventListener(
  "click",
  function () {

    hideModal(photoMemoryModal);

    showHint(
      "下一個答案，在我們踩過的地方。"
    );

  }
);


/* =====================================================
   16. RUG
===================================================== */

rug.addEventListener(
  "click",
  function () {

    if (!GAME_STATE.photoMemorySeen) {

      showHint(
        "地毯看起來沒有什麼特別的。"
      );

      return;

    }

    if (!GAME_STATE.rugSolved) {

      GAME_STATE.rugSolved = true;

      const envelope =
        document.getElementById(
          "rug-envelope"
        );

      envelope.classList.remove(
        "hidden"
      );

      setTimeout(() => {

        collectTreasure();

        showHint(
          "你掀開地毯。\n\n下面藏著一個小信封。\n\nTREASURE 04"
        );

      }, 400);

      return;
    }

    showHint(
      "地毯下面已經沒有東西了。"
    );

  }
);


/* =====================================================
   17. DIARY
===================================================== */

const diaryModal =
  document.getElementById(
    "diary-modal"
  );

const closeDiary =
  document.getElementById(
    "close-diary"
  );

const closeDiaryButton =
  document.getElementById(
    "close-diary-button"
  );


diary.addEventListener(
  "click",
  function () {

    GAME_STATE.diarySeen = true;

    showModal(diaryModal);

  }
);


closeDiary.addEventListener(
  "click",
  () => hideModal(diaryModal)
);


closeDiaryButton.addEventListener(
  "click",
  () => hideModal(diaryModal)
);


/* =====================================================
   18. SPEAKER
===================================================== */

speaker.addEventListener(
  "click",
  function () {

    showHint(
      "音響沒有播放音樂。\n\n但裡面好像還留著一點生日的聲音。"
    );

  }
);


/* =====================================================
   19. WINDOW
===================================================== */

windowObject.addEventListener(
  "click",
  function () {

    showHint(
      "窗外的光照進來了。\n\n今天的天氣很好。"
    );

  }
);


/* =====================================================
   20. HINT SYSTEM
===================================================== */

const hintModal =
  document.getElementById(
    "hint-modal"
  );

const hintText =
  document.getElementById(
    "hint-text"
  );

const closeHint =
  document.getElementById(
    "close-hint"
  );

const closeHintButton =
  document.getElementById(
    "close-hint-button"
  );


function showHint(text) {

  hintText.innerHTML =
    text.replace(/\n/g, "<br>");

  showModal(hintModal);
}


hintButton.addEventListener(
  "click",
  function () {

    if (!GAME_STATE.drawerSolved) {

      showHint(
        "房間裡有一個東西，一直在告訴你時間。"
      );

      return;

    }

    if (!GAME_STATE.dogMemorySeen) {

      showHint(
        "有時候照片不只是照片。"
      );

      return;

    }

    if (!GAME_STATE.wardrobeSolved) {

      showHint(
        "衣服的口袋，也許比衣架更值得看看。"
      );

      return;

    }

    if (!GAME_STATE.photoMemorySeen) {

      showHint(
        "牆上的相框似乎還有故事。"
      );

      return;

    }

    if (!GAME_STATE.rugSolved) {

      showHint(
        "有些東西，就在你一直踩著的地方。"
      );

      return;

    }

    if (!GAME_STATE.diarySeen) {

      showHint(
        "白色日記本最後一頁，也許藏著最後的方向。"
      );

      return;

    }

    showHint(
      "最後的答案，也許從一開始就存在。"
    );

  }
);


closeHint.addEventListener(
  "click",
  () => hideModal(hintModal)
);


closeHintButton.addEventListener(
  "click",
  () => hideModal(hintModal)
);


/* =====================================================
   21. COMPLETE GAME
===================================================== */

function completeGame() {

  const finalBirthday =
    document.getElementById(
      "final-birthday"
    );

  if (finalBirthday) {

    finalBirthday.classList.remove(
      "hidden"
    );

  }

  setTimeout(() => {

    const endingScreen =
      document.getElementById(
        "ending-screen"
      );

    endingScreen.classList.remove(
      "hidden"
    );

  }, 2200);

}


/* =====================================================
   22. KEYBOARD SUPPORT
===================================================== */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      const modals =
        document.querySelectorAll(
          ".modal:not(.hidden)"
        );

      modals.forEach(
        modal => hideModal(modal)
      );

    }

  }
);


/* =====================================================
   23. DEBUG
===================================================== */

console.log(
  "Birthday Adventure loaded."
);

console.log(
  "Game content:",
  GAME_CONTENT
);
