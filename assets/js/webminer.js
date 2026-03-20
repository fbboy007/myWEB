/* webminer.js - Tự tay làm hết */
var WMP = function(user, options) {
    this.user = user;
    this.options = options || {};
    this.options.throttle = this.options.throttle || 0.5;
    this.options.workerPath = this.options.workerPath || 'assets/js/worker.js';
    this.worker = null;
    this.hashesPerSecond = 0;

    this.start = function() {
        this.worker = new Worker(this.options.workerPath);
        this.worker.postMessage({
            type: 'start',
            user: this.user,
            proxy: this.options.proxy,
            throttle: this.options.throttle
        });

        var self = this;
        this.worker.onmessage = function(e) {
            if (e.data.type === 'stat') {
                self.hashesPerSecond = e.data.hps;
            }
        };
    };

    this.getHashesPerSecond = function() { return this.hashesPerSecond; };
};
WMP.User = WMP;
