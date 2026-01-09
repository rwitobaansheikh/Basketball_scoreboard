let guest_score=document.getElementById("guest_score");
let home_score=document.getElementById("home_score");
let guest=0;
let home=0;

function add(score_type, num) {
    if (score_type === 'h') {
        home += num;
        home_score.textContent = home;
    } else {
        guest += num;
        guest_score.textContent = guest;
    }
}

function newGame() {
    guest=0;
    home=0;
    guest_score.textContent=guest;
    home_score.textContent=home;
}

