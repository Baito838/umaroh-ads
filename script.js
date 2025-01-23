AOS.init();

// Fungsi untuk memeriksa posisi scroll dan menampilkan tombol WhatsApp
function checkScroll() {
  var firstSectionHeight = document.getElementById('hook').offsetHeight;
  var whatsappContainer = document.querySelector('.whatsapp-container');

  if (window.scrollY >= firstSectionHeight) {
    // Menampilkan WhatsApp container setelah scroll melewati section pertama
    whatsappContainer.style.display = 'block';
  } else {
    // Menyembunyikan WhatsApp container jika scroll belum melewati section pertama
    whatsappContainer.style.display = 'none';
  }
}

// Panggil fungsi checkScroll saat scroll dan saat halaman dimuat
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);  // Menjalankan saat halaman dimuat ulang


lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});


