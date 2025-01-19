AOS.init();

function toggleChat() {
    const chat = document.getElementById('whatsappChat');
    if (chat.style.display === 'none' || chat.style.display === '') {
        chat.style.display = 'block';
    } else {
        chat.style.display = 'none';
    }
}

const text = "Kamu bisa dapatkan keuntungan hingga 10 juta hanya dengan modal 5 juta rupiah saja."; // Teks yang akan diketik
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


(async () => {
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/id/id-all.topo.json'
    ).then(response => response.json());

    // Data jumlah umat Muslim di beberapa provinsi utama
    const data = [
        ['id-ac', 5438906],     // Aceh
        ['id-su', 10334224],    // Sumatera Utara
        ['id-sb', 5610761],     // Sumatera Barat
        ['id-ri', 5973722],     // Riau
        ['id-ja', 3574753],     // Jambi
        ['id-sl', 8642068],     // Sumatera Selatan
        ['id-be', 2050109],     // Bengkulu
        ['id-1024', 8700424],   // Lampung
        ['id-bb', 1375701],     // Kepulauan Bangka Belitung
        ['id-kr', 1708333],     // Kepulauan Riau
        ['id-jk', 9507379],     // DKI Jakarta
        ['id-jr', 48581396],    // Jawa Barat
        ['id-jt', 37116014],    // Jawa Tengah
        ['id-yo', 3460903],     // Daerah Istimewa Yogyakarta
        ['id-ji', 40512073],    // Jawa Timur
        ['id-bt', 11823585],    // Banten
        ['id-ba', 441454],      // Bali
        ['id-nb', 5445137],     // Nusa Tenggara Barat
        ['id-nt', 529807],      // Nusa Tenggara Timur
        ['id-kb', 3359978],     // Kalimantan Barat
        ['id-kt', 2047295],     // Kalimantan Tengah
        ['id-ks', 4108232],     // Kalimantan Selatan
        ['id-ki', 3502646],     // Kalimantan Timur
        ['id-ku', 548332],      // Kalimantan Utara
        ['id-sw', 847968],      // Sulawesi Utara
        ['id-st', 2496568],     // Sulawesi Tengah
        ['id-se', 8474724],     // Sulawesi Selatan
        ['id-sg', 2638449],     // Sulawesi Tenggara
        ['id-go', 1213059],     // Gorontalo
        ['id-sr', 1217968],     // Sulawesi Barat
        ['id-ma', 1007051],     // Maluku
        ['id-la', 1020356],     // Maluku Utara
        ['id-ib', 533344],      // Papua Barat
        ['id-pa', 567038],      // Papua
    ];

    Highcharts.mapChart('containerMap', {
        chart: {
            map: topology,
            backgroundColor: 'transparent'
        },

        title: {
            text: 'Jumlah Umat Muslim di Indonesia'
        },

        subtitle: {
            text: 'Data dari <a target="_blank" href="https://satudata.kemenag.go.id">Kementerian Agama</a> Tahun 2023.'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0,
            max: 50000000,
            stops: [
                [0, '#F7FCF5'],
                [0.1, '#4DFFD0FF'],
                [0.3, '#3EE43EFF'],
                [0.5, '#FFF200FF'],
                [0.7, '#FFB700FF'],
                [1, '#FE0000FF']
            ]
        },

        series: [{
            data: data,
            name: 'Jumlah',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return this.point.name
                        ? `${this.point.name}: ${Highcharts.numberFormat(this.point.value, 0, ',', '.')}`
                        : null; // Tidak tampilkan jika nama undefined
                }
            }
        }]
    });

})();



var forecast = {
    chart: {
        type: 'bar',  // Mengubah tipe chart menjadi bar
        height: 500,
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val.toLocaleString('id'); // Memformat angka dengan pemisah ribuan
        }
    },
    stroke: {
        width: 2
    },
    xaxis: {
        categories: ['2022', '2023', '2024'],
        title: {
            text: 'Tahun'
        }
    },
    yaxis: {
        title: {
            text: 'Jumlah Jamaah'
        },
        labels: {
            formatter: function (val) {
                return val.toLocaleString(); // Memformat angka dengan pemisah ribuan
            }
        }
    },
    series: [
        {
            name: 'Jumlah Jamaah Haji',
            data: [
                92825 - 157,    // 2022: Kuota dikurangi sisa
                210680 - 898,   // 2023: Kuota dikurangi sisa
                213320 - 45     // 2024: Kuota dikurangi sisa
            ]
        },
        {
            name: 'Jumlah Jamaah Umroh',
            data: [
                957016,      // 2022
                1368616,     // 2023
                1833164,     // 2024 (data terbaru)
            ]
        },
       
    ]
};

var forcastJamaah = new ApexCharts(document.querySelector("#forcast"), forecast);
forcastJamaah.render();


const provinsi_population = [
    5438906, 10334224, 5610761, 5973722, 3574753, 8642068, 2050109, 8700424,
    1375701, 1708333, 9507379, 48581396, 37116014, 3460903, 40512073, 11823585,
    441454, 5445137, 529807, 3359978, 2047295, 4108232, 3502646, 548332,
    847968, 2496568, 8474724, 2638449, 1213059, 1217968, 1007051, 1020356,
    533344, 567038
];

let total_population = 0;
for (let i = 0; i < provinsi_population.length; i++) {
    total_population += provinsi_population[i];
}

console.log("Total Population: " + total_population);


document.addEventListener("DOMContentLoaded", function () {
    lightbox.init();  // or other initialization code depending on your version
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});


var pertumbuhanUmrahHaji = {
    chart: {
        type: 'line',
        height: 350
    },
    series: [
        {
            name: 'Jamaah Umrah',
            data: [957016, 1368616, 1833164, 2537501, 3514825, 4864151, 6731582, 9319703, 12896381]
        },
        {
            name: 'Jamaah Haji',
            data: [92668, 209782, 213275, 217000, 220500, 224000, 227500, 231000, 234500] // Perkiraan pertumbuhan jamaah haji
        }
    ],
    xaxis: {
        categories: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030']
    },
    yaxis: {
        labels: {
            formatter: function(value) {
                return value.toLocaleString('id');  // Format angka menjadi format ribuan
            }
        }
    },
    title: {
        text: '',
        align: 'center'
    }
};

var pertumbuhanUmrah = new ApexCharts(document.querySelector("#pertumbuhanUmrah"), pertumbuhanUmrahHaji);
pertumbuhanUmrah.render();






