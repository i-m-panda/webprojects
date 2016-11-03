function calc(op) {
        var first = 2;
        var second = 3;
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
        return res;
    }