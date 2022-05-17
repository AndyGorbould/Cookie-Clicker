const cookie = document.getElementById("cookie");

multiAmount = document.getElementById("multiAmount");

// init
let clicks = 0;
let totalCount = 0;
let multiplier = 0;
let autoClick = 0;

// multiplier One
multiplierOne.addEventListener("click", function () {
    // alert(totalCount);

    if (totalCount >= 20) {
        multiplierOne.setAttribute("enabled", "enabled");
        multiCost = 20;
        totalCount = totalCount - multiCost;

    }
    else {
        multiplierOne.setAttribute("disabled", "disabled");
    }

    multiplier = multiplier + 1.2;
    // show multiplier amt
    multiAmount.innerHTML = `${multiplier.toFixed(1)} x`;
})

// increment
cookie.addEventListener("click", function () {
    clicks = clicks * multiplier;
    clicks = ++totalCount;
    // totalCount = totalCount + multiplier;
});

// display score TOTAL
function scoreDisplay() {

    // change title every 1 seconds
    setInterval(function titleUpdater() {
        counter.innerHTML = `Counter: ${totalCount.toFixed(1)}`;
        document.title = `${totalCount.toFixed(1)} Cookie Clicker Score`;
    }, 100);
}

scoreDisplay();