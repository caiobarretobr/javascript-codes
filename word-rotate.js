var n = "resource";

setInterval(function () {
    n = n[n.length - 1] + n.substring(0, n.length - 1);
    console.log(n)
}, 100);
