// elements from document
const cookie = document.getElementById("cookie");
const multiplierOne = document.getElementById("multiplierOne");
// remember to write html ids correctly!
const multiplierTotalWrite = document.getElementById("multiTotal");

// init values
let totalCount = 1000; // default should be 0, this is for testing only ;)
let multiplier = 1;
let autoClick = 0;
let multiCost = 20;
let multiplierTotal = 0;

// gameplay loop (runs all functions every 0.1s)
function gameplayLoop() {

    setInterval(function () {
        writeAll();
        multiEnable()

    }, 100);

}

gameplayLoop();

// multiplier One buy
multiplierOne.addEventListener("click", function () {
    // calculate new total count
    totalCount = totalCount - multiCost;
    // increase click values
    multiplier = multiplier + 0.2;
    // increase multi cost
    multiCost = multiCost * 1.5;
    // next cost
    console.log(`Next multiplier cost: ${multiCost}`);
    multiplierOne.innerText = `Next multiplier cost: ${multiCost}`;
    // amount of multipliers
    multiplierTotal++;
    // console.log(multiplierTotal);
    multiplierTotalWrite.innerText = `Multipliers purchased: ${multiplierTotal}`;
});


// clicks
cookie.addEventListener("click", function () {
    totalCount = totalCount + multiplier;
});

// display score TOTAL
function writeAll() {
    counter.innerHTML = `Counter: ${totalCount.toFixed(1)}`;
    document.title = `${totalCount.toFixed(1)} Cookie Clicker Score`;
    multiAmount.innerHTML = `${multiplier.toFixed(1)} x`;
}

// multi enable/disable
function multiEnable() {
    // multiplierOne.disabled = true;
    ///////  need to disable button on pageload
    if (multiCost <= totalCount) {
        multiplierOne.disabled = false;
    }
    else {
        multiplierOne.disabled = true;
    }
}