document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     取得主要畫面
     ===================================================== */

  const loginScreen = document.getElementById("login-screen");
  const gameScreen = document.getElementById("game-screen");

  const passwordForm = document.getElementById("password-form");
  const passwordInput = document.getElementById("password-input");
  const accessButton = document.getElementById("access-button");
  const loginMessage = document.getElementById("login-message");

  const curtainTransition =
    document.getElementById("curtain-transition");


  /* =====================================================
     初始狀態
     ===================================================== */

  // 登入顯示
  loginScreen.classList.remove("hidden");

  // 房間隱藏
  gameScreen.classList.add("hidden");

  // 密碼欄位自動取得焦點
  setTimeout(function () {
    passwordInput.focus();
  }, 100);


  /* =====================================================
     密碼登入
     ===================================================== */

  passwordForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const password = passwordInput.value.trim();


    // 正確密碼
    if (password === "0530") {

      loginMessage.textContent = "ACCESS GRANTED";

      loginMessage.style.color = "#f4e8cf";

      passwordInput.disabled = true;

      accessButton.disabled = true;


      /* ---------------------------------------------
         登入畫面消失
         --------------------------------------------- */

      setTimeout(function () {

        // 隱藏登入
        loginScreen.classList.add("hidden");

        // 顯示真正的房間
        gameScreen.classList.remove("hidden");

        // 確保房間可以點
        gameScreen.style.display = "flex";

        console.log("ROOM OPEN");


        /* ---------------------------------------------
           房間內部窗簾開始打開
           --------------------------------------------- */

        if (curtainTransition) {

          // 先確保窗簾是關閉的
          curtainTransition.classList.remove("open");

          // 稍微等待房間出現
          setTimeout(function () {

            curtainTransition.classList.add("open");

          }, 200);

        }

      }, 700);


    } else {

      /* ---------------------------------------------
         密碼錯誤
         --------------------------------------------- */

      loginMessage.textContent = "ACCESS DENIED";

      loginMessage.style.color = "#d6a88e";

      passwordInput.value = "";

      passwordInput.focus();

    }

  });



  /* =====================================================
     房間物件
     ===================================================== */

  const diary = document.getElementById("diary-object");

  const drawer = document.getElementById("drawer-object");

  const dog = document.getElementById("dog-object");

  const wardrobe = document.getElementById("wardrobe-object");

  const frame = document.getElementById("frame-object");

  const rug = document.getElementById("rug-object");

  const cake = document.getElementById("cake-object");

  const clock = document.getElementById("clock-object");

  const speaker = document.getElementById("speaker-object");

  const lamp = document.getElementById("lamp-object");

  const windowObject =
    document.getElementById("window-object");

  const sceneHint =
    document.getElementById("scene-hint");



  /* =====================================================
     顯示房間提示
     ===================================================== */

  function showHint(text) {

    if (!sceneHint) return;

    sceneHint.textContent = text;

    sceneHint.classList.remove("hidden");

    setTimeout(function () {

      sceneHint.classList.add("hidden");

    }, 2500);

  }



  /* =====================================================
     日記
     ===================================================== */

  if (diary) {

    diary.addEventListener("click", function () {

      const modal =
        document.getElementById("diary-modal");

      if (modal) {

        modal.classList.remove("hidden");

      }

    });

  }



  /* =====================================================
     抽屜
     ===================================================== */

  if (drawer) {

    drawer.addEventListener("click", function () {

      const modal =
        document.getElementById("drawer-modal");

      if (modal) {

        modal.classList.remove("hidden");

      }

    });

  }



  /* =====================================================
     小狗
     ===================================================== */

  if (dog) {

    dog.addEventListener("click", function () {

      const modal =
        document.getElementById("dog-modal");

      if (modal) {

        modal.classList.remove("hidden");

      }

    });

  }



  /* =====================================================
     衣櫃
     ===================================================== */

  if (wardrobe) {

    wardrobe.addEventListener("click", function () {

      showHint(
        "衣櫃裡掛著一件黑白色的衣服。"
      );

    });

  }



  /* =====================================================
     相框
     ===================================================== */

  if (frame) {

    frame.addEventListener("click", function () {

      showHint(
        "一張被好好保存的回憶照片。"
      );

    });

  }



  /* =====================================================
     地毯
     ===================================================== */

  if (rug) {

    rug.addEventListener("click", function () {

      showHint(
        "地毯下面好像藏著什麼……"
      );

    });

  }



  /* =====================================================
     蛋糕
     ===================================================== */

  if (cake) {

    cake.addEventListener("click", function () {

      showHint(
        "今天的蛋糕，似乎不只是蛋糕。"
      );

    });

  }



  /* =====================================================
     時鐘
     ===================================================== */

  if (clock) {

    clock.addEventListener("click", function () {

      showHint(
        "時鐘停在 10:05。"
      );

    });

  }



  /* =====================================================
     音響
     ===================================================== */

  if (speaker) {

    speaker.addEventListener("click", function () {

      showHint(
        "音響裡似乎還留著一段熟悉的旋律。"
      );

    });

  }



  /* =====================================================
     檯燈
     ===================================================== */

  if (lamp) {

    lamp.addEventListener("click", function () {

      showHint(
        "燈光讓房間變得更溫暖了。"
      );

    });

  }



  /* =====================================================
     窗戶
     ===================================================== */

  if (windowObject) {

    windowObject.addEventListener("click", function () {

      showHint(
        "窗外的天氣很好。"
      );

    });

  }



  /* =====================================================
     Modal 關閉
     ===================================================== */

  const closeButtons =
    document.querySelectorAll("[data-close]");

  closeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const targetId =
        button.getAttribute("data-close");

      const target =
        document.getElementById(targetId);

      if (target) {

        target.classList.add("hidden");

      }

    });

  });



  /* =====================================================
     抽屜密碼
     ===================================================== */

  const drawerInput =
    document.getElementById("drawer-input");

  const drawerSubmit =
    document.getElementById("drawer-submit");

  const drawerMessage =
    document.getElementById("drawer-message");


  if (drawerSubmit) {

    drawerSubmit.addEventListener("click", function () {

      const answer =
        drawerInput.value.trim();


      if (answer === "10:05") {

        drawerMessage.textContent =
          "UNLOCKED";

        drawerMessage.style.color =
          "#71806a";

        setTimeout(function () {

          const modal =
            document.getElementById("drawer-modal");

          if (modal) {

            modal.classList.add("hidden");

          }

          showHint(
            "Treasure 01 找到了！"
          );

        }, 700);


      } else {

        drawerMessage.textContent =
          "錯誤的時間";

        drawerMessage.style.color =
          "#a47f61";

      }

    });

  }



  /* =====================================================
     重新開始
     ===================================================== */

  const restartButton =
    document.getElementById("restart-button");

  if (restartButton) {

    restartButton.addEventListener("click", function () {

      location.reload();

    });

  }

});
