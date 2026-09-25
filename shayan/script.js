const noBtn = document.querySelector(".btn2");
const yesBtn = document.querySelector(".btn1");
const box = document.querySelector(".box");

// دکمه No
noBtn.addEventListener("click", () => {
    const boxWidth = box.clientWidth;
    const boxHeight = box.clientHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const randomX = Math.random() * (boxWidth - btnWidth);
    const randomY = Math.random() * (boxHeight - btnHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// دکمه Yes
yesBtn.addEventListener("click", () => {
    window.location.href = "./cong.html";
});

