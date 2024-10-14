var count = 0;
function increase() {
    count++;
    document.getElementById("count").innerHTML = "Counter:" + count;
}
function decrease() {
    count--;
    document.getElementById("count").innerHTML = "Counter:" + count;
}
function inc2() {
    count += 2;
    document.getElementById("count").innerHTML = "Counter:" + count;
}
function inc3() {
    count += 3;
    document.getElementById("count").innerHTML = "Counter:" + count;
}
function dec2() {
    count -= 2;
    document.getElementById("count").innerHTML = "Counter:" + count;
}
function dec3() {
    count -= 3;
    document.getElementById("count").innerHTML = "Counter:" + count;
}
function dec4() {
    count -= 4;
    document.getElementById("count").innerHTML = "Counter:" + count;
}
function dec() {
    count -= count;
    document.getElementById("count").innerHTML = "Counter:" + count;
}

