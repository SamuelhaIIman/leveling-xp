let saveXP = 0;
let levelUp = 0;
let xpGain = setInterval(seconds, 100);
function seconds() {
    let xpBar = document.getElementById("xp-bar");
    if (saveXP >= 100) {
            xpBar.style.width = 1 + "%";
            saveXP = 0;
            levelUpDecoration();
        } else {
            xpBar.style.width = saveXP + "%";
        }
    saveXP++;
}

function levelUpDecoration() {
    let level = document.getElementById("level");
    levelUp++;
    level.innerHTML = "Level: " + levelUp;
}