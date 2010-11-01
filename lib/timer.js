var EventEmitter = require("events").EventEmitter,
    timer = Object.create(EventEmitter.prototype, {
        speed: { value: 0 },
        count: { value: 0 },
        interval: { value: null }
    });

timer.start = function () {
    this.interval = setInterval(function () {
        this.emit("data", this.count % 2 === 0 ? "tick" : "tock");
        this.count += 1;
    }.bind(this), this.speed);
    this.emit("started");
};

timer.stop = function () {
    clearInterval(this.interval);
    this.emit("stopped");
};

exports.create = function (speed) {
    return Object.create(timer, {
        speed: { value: speed }
    });
};
