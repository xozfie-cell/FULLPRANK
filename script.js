// script.js

// Minimal JavaScript untuk interaktivitas sederhana pada website prank

// Contoh: Tambahkan event listener pada tombol WhatsApp untuk efek prank sederhana
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(event) {
            // Efek prank: Tampilkan alert lucu sebelum redirect
            alert('Haha! Kamu terkena prank! Tapi tetap saja, sapa pelaku ya!');
            // Redirect tetap berjalan karena href sudah ada
        });
    }

    // Contoh lain: Tambahkan efek hover pada kolom (opsional, untuk interaktivitas)
    const columns = document.querySelectorAll('.column');
    columns.forEach(function(column) {
        column.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        column.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Jika ada video background opsional, tambahkan kontrol (meski tidak digunakan)
    // const bgVideo = document.querySelector('.bg-video');
    // if (bgVideo) {
    //     bgVideo.addEventListener('loadeddata', function() {
    //         console.log('Video background loaded');
    //     });
    // }
});
