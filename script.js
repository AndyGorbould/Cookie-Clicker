const cookie = document.getElementById("cookie");

// init
let countNumb = 0;


let i = 1;


// multiplier One
multiplierOne.addEventListener("click", function () {
    i++;
})

// increment
cookie.addEventListener("click", function () {
    countNumb++;
    counter.innerHTML = `Counter: ${countNumb * i}`;

});
