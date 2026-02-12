const surpriseBtn = document.getElementById("surpriseBtn");
const proposal = document.getElementById("proposal");
const yesBtn = document.getElementById("yesBtn");
const yesMsg = document.getElementById("yesMsg");

surpriseBtn.addEventListener("click", () => {
    surpriseBtn.style.display = "none";
    proposal.classList.remove("hidden");
});

yesBtn.addEventListener("click", () => {
    proposal.style.display = "none";
    yesMsg.classList.remove("hidden");
});

// Floating hearts animation
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 500);
