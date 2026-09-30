document.addEventListener("DOMContentLoaded", function () {

  const loginScreen = document.getElementById("login-screen");
  const curtainScreen = document.getElementById("curtain-screen");
  const gameScreen = document.getElementById("game-screen");

  const passwordForm = document.getElementById("password-form");
  const passwordInput = document.getElementById("password-input");
  const accessButton = document.getElementById("access-button");
  const loginMessage = document.getElementById("login-message");

  // 一開始只顯示登入畫面
  loginScreen.classList.remove("hidden");
  curtainScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");

  // 自動讓密碼欄位可以直接輸入
  passwordInput.focus();


  // =========================
  // 密碼
  // =========================

  passwordForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const password = passwordInput.value.trim();

    console.log("輸入密碼：", password);


    if (password === "0530") {

      // 顯示成功
      loginMessage.textContent = "ACCESS GRANTED";
      loginMessage.style.color = "#f4e8cf";

      passwordInput.disabled = true;
      accessButton.disabled = true;


      // 登入畫面消失
      setTimeout(function () {

        loginScreen.classList.add("hidden");

        // 顯示窗簾過場
        curtainScreen.classList.remove("hidden");

        // 確保房間其實已經存在
        gameScreen.classList.remove("hidden");

        // 窗簾動畫
        setTimeout(function () {

          curtainScreen.classList.add("curtain-open");

        }, 100);


        // 窗簾完全打開後
        setTimeout(function () {

          curtainScreen.classList.add("hidden");

        }, 1800);

      }, 700);


    } else {

      // 密碼錯誤
      loginMessage.textContent = "ACCESS DENIED";
      loginMessage.style.color = "#d6a88e";

      passwordInput.value = "";

      setTimeout(function () {
        passwordInput.focus();
      }, 50);

    }

  });


  // =========================
  // 房間物件
  // =========================

  const dog = document.getElementById("dog-plush");
  const diary = document.getElementById("diary");
  const wardrobe = document.getElementById("wardrobe");
  const pictureFrame = document.getElementById("picture-frame");
  const rug = document.getElementById("rug");
  const roomMessage = document.getElementById("room-message");


  function showMessage(text) {

    roomMessage.textContent = text;
    roomMessage.classList.add("show");

    setTimeout(function () {
      roomMessage.classList.remove("show");
    }, 2500);

  }


  // 小狗
  if (dog) {

    dog.addEventListener("click", function () {

      showMessage("小狗的大貓咪");

    });

  }


  // 日記
  if (diary) {

    diary.addEventListener("click", function () {

      showMessage("桌上的日記似乎藏著什麼秘密……");

    });

  }


  // 衣櫃
  if (wardrobe) {

    wardrobe.addEventListener("click", function () {

      showMessage("黑白色的衣服整齊掛在裡面。");

    });

  }


  // 相框
  if (pictureFrame) {

    pictureFrame.addEventListener("click", function () {

      showMessage("一張被好好保存的回憶。");

    });

  }


  // 地毯
  if (rug) {

    rug.addEventListener("click", function () {

      showMessage("地毯下面好像藏著東西……");

    });

  }

});
