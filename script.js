


const cookie = document.getElementById("cookie");

multiAmount = document.getElementById("multiAmount");

// init
let clicks = 0;
let totalCount = 0;
let multiplier = 1;


// multiplier One
multiplierOne.addEventListener("click", function () {
    multiplier = multiplier + 1.2;
    multiAmount.innerHTML = `${multiplier}`;
})

// increment
cookie.addEventListener("click", function () {
    clicks++;
    totalCount = clicks * multiplier;
    counter.innerHTML = `Counter: ${totalCount.toFixed(3)}`;

});








// change title every 5 seconds
setInterval (function titleUpdater() {
document.title = `${totalCount.toFixed(3)} Cookie Clicker Score`;
}, 5000);





/// i = multiplier
/// countNumb = clicks
/// totalCount = clicks * multiplier