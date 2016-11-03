window.addEventListener("DOMContentLoaded", function () {
    function calc(op) {
        var first = document.getElementById("fnum").value;
        var second = document.getElementById("snum").value;
        var res = 0;
        if (op === "A") {
            res = Number(first) + Number(second);
        }
        if (op === "S") {
            res = first - second;
        }
        if (op === "M") {
            res = first * second;
        }
        if (op === "D") {
            res = first / second;
        }
        document.getElementById("Result").innerHTML = res;
    }
    var output = 0;
    document.getElementById("A").addEventListener("click", function () {
        document.getElementById("Result").className = "r";
        calc("A");
    });
    document.getElementById("S").addEventListener("click", function () {
        document.getElementById("Result").className = "b";
        calc("S");
    });
    document.getElementById("M").addEventListener("click", function () {
        document.getElementById("Result").className = "g";
        calc("M");
    });
    document.getElementById("D").addEventListener("click", function () {
        document.getElementById("Result").className = "y";
        calc("D");
    })
});