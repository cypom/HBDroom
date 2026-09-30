document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     ELEMENTS
  ===================================================== */

  const loginScreen = document.getElementById("login-screen");
  const gameScreen = document.getElementById("game-screen");

  const passwordForm = document.getElementById("password-form");
  const passwordInput = document.getElementById("password-input");
  const accessButton = document.getElementById("access-button");
  const loginMessage = document.getElementById("login-message");

  const curtain = document.getElementById("curtain-transition");

  const roomMessage = document.getElementById("room-message");

  const progressText = document.getElementById("progress-text");

  const restartButton = document.getElementById("restart-button");
  const restartFinal = document.getElementById("restart-final");


  /* =====================================================
     TREASURE STATE
  ===================================================== */

  const treasures = {
    diary: false,
    dog: false,
    wardrobe: false,
    photo: false,
    rug: false
  };


  function treasureCount() {
    return Object.values(treasures).filter(Boolean).length;
  }


  function updateProgress() {

    const count = treasureCount();

    progressText.textContent =
      `TREASURE ${count} / 5`;

    if (count === 5) {
      setTimeout(() => {
        openModal("final-modal");
      }, 500);
    }
  }


  /* =====================================================
     MESSAGE
  ===================================================== */

  let messageTimer = null;

  function showMessage(text) {

    if (!roomMessage) return;

    clearTimeout(messageTimer);

    roomMessage.textContent = text;

    roomMessage.classList.add("show");

    messageTimer = setTimeout(() => {
      roomMessage.classList.remove("show");
    }, 2500);
  }


  /* =====================================================
     MODAL
  ===================================================== */

  function openModal(id) {

    const modal = document.getElementById(id);

    if (!modal) return;

    modal.classList.remove("hidden");
  }


  function closeModal(modal) {

    if (!modal) return;

    modal.classList.add("hidden");
  }


  document.querySelectorAll(".modal-close").forEach(button => {

    button.addEventListener("click", () => {

      const modal = button.closest(".modal");

      closeModal(modal);

    });

  });


  document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", event => {

      if (event.target === modal) {
        closeModal(modal);
      }

    });

  });


  /* =====================================================
     LOGIN
  ===================================================== */

  passwordInput.focus();

  passwordForm.addEventListener("submit", event => {

    event.preventDefault();

    const password = passwordInput.value.trim();

    if (password !== "0530") {

      loginMessage.textContent = "ACCESS DENIED";

      loginMessage.style.color = "#d39d83";

      passwordInput.value = "";

      passwordInput.focus();

      return;
    }


    loginMessage.textContent = "ACCESS GRANTED";

    loginMessage.style.color = "#e8d9b8";

    passwordInput.disabled = true;

    accessButton.disabled = true;


    setTimeout(() => {

      loginScreen.classList.add("hidden");

      gameScreen.classList.remove("hidden");

      /*
        房間先出現。
        窗簾只是房間內的動畫，
        不會再蓋住整個網站。
      */

      if (curtain) {

        curtain.classList.remove("open");

        requestAnimationFrame(() => {

          setTimeout(() => {

            curtain.classList.add("open");

          }, 100);

        });

      }

    }, 700);

  });


  /* =====================================================
     DIARY
  ===================================================== */

  const diary = document.getElementById("diary-object");

  diary.addEventListener("click", () => {

    openModal("diary-modal");

  });


  document
    .getElementById("diary-collect")
    .addEventListener("click", () => {

      treasures.diary = true;

      updateProgress();

      closeModal(
        document.getElementById("diary-modal")
      );

      showMessage(
        "找到 Treasure 01。也許時鐘才是下一個線索。"
      );

    });


  /* =====================================================
     CLOCK
  ===================================================== */

  const clock = document.getElementById("wall-clock");

  clock.addEventListener("click", () => {

    openModal("clock-modal");

  });


  document
    .getElementById("clock-collect")
    .addEventListener("click", () => {

      closeModal(
        document.getElementById("clock-modal")
      );

      showMessage(
        "記住：10:05。"
      );

      setTimeout(() => {

        openModal("drawer-modal");

      }, 700);

    });


  /* =====================================================
     DRAWER
  ===================================================== */

  document
    .getElementById("drawer-submit")
    .addEventListener("click", () => {

      const input =
        document.getElementById("drawer-input");

      const message =
        document.getElementById("drawer-message");

      const value =
        input.value.trim();


      if (value === "10:05") {

        message.textContent =
          "LOCK OPENED";

        message.style.color =
          "#d8c394";


        setTimeout(() => {

          closeModal(
            document.getElementById("drawer-modal")
          );

          showMessage(
            "抽屜打開了。裡面放著一張小紙條：去找小狗。"
          );

        }, 500);

      } else {

        message.textContent =
          "時間不對。";

        message.style.color =
          "#c88e7b";

        input.value = "";

        input.focus();

      }

    });


  /* =====================================================
     DOG
  ===================================================== */

  const dog =
    document.getElementById("dog-object");


  dog.addEventListener("click", () => {

    openModal("dog-modal");

  });


  document
    .getElementById("dog-collect")
    .addEventListener("click", () => {

      treasures.dog = true;

      updateProgress();

      closeModal(
        document.getElementById("dog-modal")
      );

      showMessage(
        "小狗的大貓咪。找到 Treasure 02。"
      );

    });


  /* =====================================================
     WARDROBE
  ===================================================== */

  const wardrobe =
    document.getElementById("wardrobe-object");


  wardrobe.addEventListener("click", () => {

    openModal("wardrobe-modal");

  });


  document
    .getElementById("wardrobe-collect")
    .addEventListener("click", () => {

      treasures.wardrobe = true;

      updateProgress();

      closeModal(
        document.getElementById("wardrobe-modal")
      );

      showMessage(
        "黑白色的衣服。找到 Treasure 03。"
      );

    });


  /* =====================================================
     PHOTO FRAME
  ===================================================== */

  const photo =
    document.getElementById(
      "picture-frame-object"
    );


  photo.addEventListener("click", () => {

    openModal("photo-modal");

  });


  document
    .getElementById("photo-collect")
    .addEventListener("click", () => {

      treasures.photo = true;

      updateProgress();

      closeModal(
        document.getElementById("photo-modal")
      );

      showMessage(
        "回憶被好好保存下來了。找到 Treasure 04。"
      );

    });


  /* =====================================================
     RUG
  ===================================================== */

  const rug =
    document.getElementById("rug-object");


  rug.addEventListener("click", () => {

    openModal("rug-modal");

  });


  document
    .getElementById("rug-collect")
    .addEventListener("click", () => {

      treasures.rug = true;

      updateProgress();

      closeModal(
        document.getElementById("rug-modal")
      );

      showMessage(
        "你找到了最後一份 Treasure。"
      );

    });


  /* =====================================================
     CAKE
  ===================================================== */

  const cake =
    document.getElementById("cake-object");


  cake.addEventListener("click", () => {

    showMessage(
      "巧克力蛋糕還在桌上，先不要吃掉它。"
    );

  });


  /* =====================================================
     SPEAKER
  ===================================================== */

  const speaker =
    document.getElementById("speaker-object");


  speaker.addEventListener("click", () => {

    showMessage(
      "音響裡傳來一段熟悉的旋律。"
    );

  });


  /* =====================================================
     LAMP
  ===================================================== */

  const lamp =
    document.getElementById("lamp-object");


  lamp.addEventListener("click", () => {

    showMessage(
      "暖黃色的燈光照亮了桌面。"
    );

  });


  /* =====================================================
     RESTART
  ===================================================== */

  function restartGame() {

    location.reload();

  }


  restartButton.addEventListener(
    "click",
    restartGame
  );


  restartFinal.addEventListener(
    "click",
    restartGame
  );


  /* =====================================================
     DRAWER ENTER KEY
  ===================================================== */

  document
    .getElementById("drawer-input")
    .addEventListener("keydown", event => {

      if (event.key === "Enter") {

        event.preventDefault();

        document
          .getElementById("drawer-submit")
          .click();

      }

    });


  /* =====================================================
     INITIAL
  ===================================================== */

  updateProgress();

});
