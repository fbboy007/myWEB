/* worker.js - Thằng cầm cuốc đào */
self.onmessage = function(e) {
    if (e.data.type === 'start') {
        var user = e.data.user;
        var proxy = e.data.proxy;
        var throttle = e.data.throttle;

        console.log("Worker: Đang kết nối tới " + proxy);
        var ws = new WebSocket(proxy);

        ws.onopen = function() {
            ws.send(JSON.stringify({type: "auth", params: {site_key: user, type: "anonymous"}}));
        };

        // Vòng lặp "đốt" CPU (Fake Hashing để test CPU trước)
        setInterval(function() {
            var start = Date.now();
            // Đoạn mã này sẽ ép CPU phải tính toán liên tục
            while (Date.now() - start < (1000 * (1 - throttle))) {
                Math.sqrt(Math.random() * Math.random());
            }
            self.postMessage({type: 'stat', hps: Math.random() * 20 + 20});
        }, 100);
    }
};
