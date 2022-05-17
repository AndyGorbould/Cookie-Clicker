const cookie = document.getElementById("cookie");

multiAmount = document.getElementById("multiAmount");


// init
let clicks = 0;
let totalCount = 0;
let multiplier = 1;
let autoClick = 0;


// multiplier One
multiplierOne.addEventListener("click", function () {
    // alert(totalCount);

    if (totalCount >= 20) {
        // alert(multiCost);
        multiCost = 20;
        totalCount = totalCount - multiCost;
        counter.innerHTML = `Counter: ${totalCount.toFixed(0)}`;

        }
        
    multiplier = multiplier + 1.2;
    // show multiplier amt
    multiAmount.innerHTML = `${multiplier.toFixed(1)} x`;
})

// increment
cookie.addEventListener("click", function () {
    clicks = ++totalCount;
    totalCount = totalCount + multiplier;


});


// display score TOTAL
function scoreDisplay() {

    // change title every 1 seconds
    setInterval(function titleUpdater() {
        counter.innerHTML = `Counter: ${totalCount.toFixed(0)}`;
        document.title = `${totalCount.toFixed(0)} Cookie Clicker Score`;
    }, 100);
}

scoreDisplay();













/// i = multiplier
/// countNumb = clicks
/// totalCount = clicks * multiplier

/// mOnePrice = 15;
/// mOnePrice = mOnePrice + 1.4;