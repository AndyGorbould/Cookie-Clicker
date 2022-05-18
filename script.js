// elements from document
const cookie = document.getElementById("cookie");
const multiplierOne = document.getElementById("multiplierOne");
// remember to write html ids correctly!
const multiplierTotalWrite = document.getElementById("multiTotal");
const autoClickWrite = document.getElementById("autoClick");

// init writes
counter.innerHTML = `Counter: 0`;
multiplierOne.innerHTML = `Buy a Multiplier: 20c (purchased: 0)`;
autoClickWrite.innerHTML = `Buy an Autoclick cost: 20c (purchased: 0)`;
multiAmount.innerHTML = `Multiplier: 1 x`;





// init values
let totalCount = 1000; // default should be 0, this is for testing only
let multiplier = 1;
let multiCost = 20;
let multiplierTotal = 0;
let autoClickTotal = 0;
let autoClickCost = 20;

// gameplay loop (runs all functions every 0.1s)
function gameplayLoop() {

    setInterval(function () {
        writeAll();
        multiEnable();
        autoEnable();

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
    multiplierOne.innerText = `Next multiplier cost: ${multiCost.toFixed(2)} (purchased: ${multiplierTotal+1})`;
    // amount of multipliers
    multiplierTotal++;
    // multiplierTotalWrite.innerText = `Multipliers purchased: ${multiplierTotal}`;
});


// clicks
cookie.addEventListener("click", function () {
    totalCount = totalCount + multiplier;
});

// display score TOTAL
function writeAll() {
    counter.innerHTML = `Counter: ${totalCount.toFixed(1)}`;
    document.title = `${totalCount.toFixed(1)} Cookie Clicker Score`;
    multiAmount.innerHTML = `Multiplier: ${multiplier.toFixed(1)} x`;
}

// multi enable/disable (in gameplayLoop)
function multiEnable() {
    //  need to disable button on pageload
    if (multiCost <= totalCount) {
        multiplierOne.disabled = false;
    }
    else {
        multiplierOne.disabled = true;
    }
}

// auto clicker - button
autoClick.addEventListener("click", function () {
    // calculate new total count
    totalCount = totalCount - autoClickCost;
    // increase multi cost
    autoClickCost = autoClickCost * 2;
    // next cost
    autoClickWrite.innerText = `Next autoclick cost: ${autoClickCost} (purchased: ${autoClickTotal+1})`;
    autoClickTotal++;
})

// auto clicker - timed func
function autoClickFunc() {
    setInterval(function () {
        totalCount = totalCount + autoClickTotal; 
    }, 1000);

}

autoClickFunc();

// autoclick enable/disable (in gameplayLoop)
function autoEnable() {
    //  need to disable button on pageload
    if (autoClickCost <= totalCount) {
        autoClickWrite.disabled = false;
    }
    else {
        autoClickWrite.disabled = true;
    }
}

// hyperspeed button
// hyperspeed timer (countdown style)
// hyperspeed enable