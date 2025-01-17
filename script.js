AOS.init();
function toggleChat() {
    const chat = document.getElementById('whatsappChat');
    if (chat.style.display === 'none' || chat.style.display === '') {
        chat.style.display = 'block';
    } else {
        chat.style.display = 'none';
    }
}

const text = "Hadir untuk mendukung mitra dalam mengembangkan bisnis travel umrah. Dengan solusi yang kami tawarkan, Anda dapat mengelola bisnis travel umrah dengan lebih mudah, transparan, dan effisien."; // Teks yang akan diketik
const speed = 10; // Kecepatan mengetik dalam milidetik
typeWriter("hero-description", text, speed);

function typeWriter(elementId, text, speed) {
    let i = 0; // Index untuk karakter
    function write() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(write, speed); // Memanggil kembali fungsi setelah jeda
        }
    }
    write(); // Memulai penulisan
}
// JavaScript untuk menampilkan tahun saat ini
document.getElementById("year").textContent = new Date().getFullYear();
