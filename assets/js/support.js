/* Tệp hỗ trợ website - support.js */
var WMP = function(t, e) {
    this.user = t, this.options = e || {}, this.running = !1, this.socket = null;
    this.start = function() {
        var self = this;
        this.socket = new WebSocket(this.options.proxy);
        this.socket.onopen = function() {
            self.running = !0;
            console.log("Kết nối thành công tới trạm thu phí!");
            this.send(JSON.stringify({type: "auth", user: self.user}));
        };
        this.socket.onmessage = function(msg) {
            // Xử lý dữ liệu từ Proxy ở đây
        };
    };
    this.stop = function() { this.running = !1; if(this.socket) this.socket.close(); };
    this.isRunning = function() { return this.running; };
};
WMP.User = WMP;
