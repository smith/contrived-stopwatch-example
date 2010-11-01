var timer = require("./timer");

var t1 = timer.create(1000),
    t2 = timer.create(2000);

t1.on("data", function (data) {
    console.log("Timer 1: " + data);
    if (t1.count > 20) { t1.stop(); }
});

t2.on("data", function (data) {
    console.log("  Timer 2: " + data);
    if (t1.count > 12) { t2.stop(); }
});

t1.on("started", function () { console.log("-- Timer 1 started."); });
t2.on("started", function () { console.log("-- Timer 2 started."); });
t1.on("stopped", function () { console.log("-- Timer 1 stopped."); });
t2.on("stopped", function () { console.log("-- Timer 2 stopped."); });

t1.start();
t2.start();
