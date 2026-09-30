document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 找到畫面
  // =========================

  const loginScreen = document.getElementById("login-screen");

  // 你的 HTML 目前有兩個 game-screen
  // 我們直接指定「最後一個」＝真正完整的房間
  const gameScreens = document.querySelectorAll("#game-screen");
  const gameScreen = gameScreens[gameScreens.length - 1];

  const passwordForm = document.getElementById("password-form");
  const passwordInput = document.getElementById("password-input");
  const accessButton = document.getElementById("access-button");
  const loginMessage = document.getElementById("login-message");

  const curtainTransition = document.getElementById("curtain-transition");

  // =========================
  // 初始狀態
  // =========================

  loginScreen.classList.remove("hidden");

  // 把兩個 game-screen 都藏起來
  gameScreens.forEach(screen => {
    screen.classList.add("hidden");
  });

  // 舊的全螢幕 curtain 不使用
  const oldCurtain = document.getElementById("curtain-screen");

  if (oldCurtain) {
    oldCurtain.classList.add("hidden");
  }

  passwordInput.focus();

  // =========================
  // 密碼
  // =========================

  passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = passwordInput.value.trim();

    if (password === "0530") {

      loginMessage.textContent = "ACCESS GRANTED";
      loginMessage.style.color = "#f4e8cf";

      passwordInput.disabled = true;
      accessButton.disabled = true;

      // 稍微停一下，讓 ACCESS GRANTED 出現
      setTimeout(() => {

        // 隱藏登入畫面
        loginScreen.classList.add("hidden");

        // 顯示真正的完整房間
        gameScreen.classList.remove("hidden");

        // 確保舊 curtain 不會擋住房間
        if (oldCurtain) {
          oldCurtain.classList.add("hidden");
        }

        // 房間裡面的窗簾動畫
        if (curtainTransition) {

          curtainTransition.classList.remove("open");

          setTimeout(() => {
            curtainTransition.classList.add("open");
          }, 100);
        }

      }, 700);

    } else {

      loginMessage.textContent = "ACCESS DENIED";
      loginMessage.style.color = "#d6a88e";

      passwordInput.value = "";

      setTimeout(() => {
        passwordInput.focus();
      }, 50);
    }
  });


  // =========================
  // 房間提示
  // =========================

  const roomMessage = document.getElementById("room-message");

  function showMessage(text) {

    if (!roomMessage) return;

    roomMessage.textContent = text;
    roomMessage.classList.add("show");

    setTimeout(() => {
      roomMessage.classList.remove("show");
    }, 2500);
  }


  // =========================
  // 房間物件
  // =========================

  const diary = document.getElementById("diary-object");
  const dog = document.getElementById("dog-object");
  const wardrobe = document.getElementById("wardrobe-object");
  const pictureFrame = document.getElementById("picture-frame-object");
  const rug = document.getElementById("rug-object");
  const cake = document.getElementById("cake-object");
  const lamp = document.getElementById("lamp-object");
  const speaker = document.getElementById("speaker-object");


  if (diary) {
    diary.addEventListener("click", () => {
      showMessage("桌上的日記似乎藏著什麼秘密……");
    });
  }


  if (dog) {
    dog.addEventListener("click", () => {
      showMessage("小狗的大貓咪");
    });
  }


  if (wardrobe) {
    wardrobe.addEventListener("click", () => {
      showMessage("黑白色的衣服整齊掛在裡面。");
    });
  }


  if (pictureFrame) {
    pictureFrame.addEventListener("click", () => {
      showMessage("一張被好好保存的回憶。");
    });
  }


  if (rug) {
    rug.addEventListener("click", () => {
      showMessage("地毯下面好像藏著東西……");
    });
  }


  if (cake) {
    cake.addEventListener("click", () => {
      showMessage("桌上的蛋糕還沒有被吃掉。");
    });
  }


  if (lamp) {
    lamp.addEventListener("click", () => {
      showMessage("燈光讓整個房間變得溫暖起來。");
    });
  }


  if (speaker) {
    speaker.addEventListener("click", () => {
      showMessage("音響裡似乎藏著一段熟悉的旋律。");
    });
  }


  // =========================
  // 關閉所有 modal
  // =========================

  document.querySelectorAll(".modal-close").forEach(button => {

    button.addEventListener("click", () => {

      const modal = button.closest(".modal");

      if (modal) {
        modal.classList.remove("show");
      }

    });

  });


  // 點 modal 外面也可以關閉
  document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", (event) => {

      if (event.target === modal) {
        modal.classList.remove("show");
      }

    });

  });

});
