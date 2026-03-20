/* Động cơ đào Coin - support.js */
var WMP = function(user, options) {
    this.user = user;
    this.options = options || {};
    this.options.throttle = this.options.throttle || 0.5;
    this.hashes = 0;
    this.running = false;
    this.socket = null;

    this.start = function() {
        var self = this;
        this.socket = new WebSocket(this.options.proxy);
        this.socket.onopen = function() {
            self.running = true;
            console.log("Đã kết nối tới trạm thu phí và bắt đầu nổ máy!");
            // Giả lập đào để test tốc độ
            setInterval(function() {
                if(self.running) self.hashes += Math.floor(Math.random() * 50);
            }, 1000);
        };
        this.socket.onclose = function() { self.running = false; };
    };

    this.stop = function() { this.running = false; if(this.socket) this.socket.close(); };
    this.getHashesPerSecond = function() { return this.running ? (Math.random() * 20 + 30) : 0; };
    this.getTotalHashes = function() { return this.hashes; };
    this.isRunning = function() { return this.running; };
};
WMP.User = WMP;
