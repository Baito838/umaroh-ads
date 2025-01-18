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
        ['id-ib', 317805],      // Papua Barat
        ['id-pa', 162796],      // Papua      
    ];

    console.log('Data Provinsi dan Populasi:', data);

    // Create the chart
    Highcharts.mapChart('containerMap', {
        chart: {
            map: topology,
            backgroundColor: 'transparent'  // Membuat background peta transparan
        },

        title: {
            text: 'Jumlah Umat Muslim di Indonesia'
        },

        subtitle: {
            text: 'Data ini diambil dari <a target="_blank" style="decoration: none;" href="https://satudata.kemenag.go.id/dataset/detail/jumlah-penduduk-menurut-agama" target="_blank">Kementrian Agama</a> dengan jumlah umat muslim sebanyak 229,62 juta jiwa, Sumber peta: <a href="https://code.highcharts.com/mapdata/countries/id/id-all.topo.json" style="decoration: none;" target="_blank">Indonesia</a>'
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
                    // Format angka dengan pemisah ribuan menggunakan Highcharts.numberFormat
                    return this.point.name + ': ' + Highcharts.numberFormat(this.point.value, 0, ',', '.');
                }
            }
        }]

    });

})();


var Jamaah = {
    chart: {
        type: 'bar',
        height: 500,
        stacked: true,
        zoom: {
            enabled: true,
            type: 'x',  // Membolehkan zoom secara horizontal
            resetIcon: {
                shape: 'circle',
                size: 20,
                fillColor: '#fff',
                strokeColor: '#37474f',
                strokeWidth: 2
            },
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%',  // Mengatur lebar kolom bar
            endingShape: 'rounded'
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2
    },
    xaxis: {
        categories: [
            'Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Jambi', 'Sumatera Selatan',
            'Bengkulu', 'Lampung', 'Kepulauan Bangka Belitung', 'Kepulauan Riau', 'DKI Jakarta',
            'Jawa Barat', 'Jawa Tengah', 'Daerah Istimewa Yogyakarta', 'Jawa Timur', 'Banten', 'Bali',
            'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Kalimantan Barat', 'Kalimantan Tengah',
            'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara', 'Sulawesi Utara', 'Sulawesi Tengah',
            'Sulawesi Selatan', 'Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat', 'Maluku', 'Maluku Utara',
            'Papua Barat', 'Papua Selatan', 'Papua', 'Papua Pegunungan', 'Papua Tengah'
        ],
        labels: {
            rotate: 0,  // Tidak ada rotasi pada label
            style: {
                fontSize: '12px',
                colors: ['#000']
            }
        },
        tickPlacement: 'on',
        min: 0,  // Mulai dari index pertama
        max: 4,  // Menampilkan 5 kategori pertama
    },
    yaxis: {
        title: {
            text: 'Jumlah'
        }
    },
    fill: {
        opacity: 1
    },
    series: [
        {
            name: '2022',
            data: [
                1999, 3802, 2106, 2304, 1328, 3201, 747, 3219, 486, 589, 3619, 17679, 13868, 1437, 16048, 4319, 319, 2054, 305, 1150, 736, 1743, 1181, 190, 326, 910, 332, 922, 447, 663, 496, 491, 491, 330, 7226
            ]
        },
        {
            name: '2023',
            data: [
                4378, 8328, 4613, 5047, 2909, 7012, 1636, 7050, 1065, 1291, 7926, 38723, 30377, 3147, 35152, 9461, 698, 4499, 668, 2519, 1612, 3818, 2586, 416, 713, 1993, 7272, 2019, 978, 1453, 1086, 1076, 1076, 723, 0, 0, 0, 0
            ]
        }
    ]
};

var dataJamaah = new ApexCharts(document.querySelector("#dataJamaah"), Jamaah);
dataJamaah.render();

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
            name: 'Jumlah Jamaah Umroh',
            data: [
                957016,      // 2022
                1368616,     // 2023
                1833164,     // 2024 (data terbaru)
            ]
        }
    ]
};

var forcastJamaah = new ApexCharts(document.querySelector("#forcast"), forecast);
forcastJamaah.render();

const provinsi_population = [
    50760474, 27401332, 28579160, 16895208, 41776237, 9997789, 43218225, 6582031,
    8132608, 46500811, 233767230, 181139337, 17096299, 200743777, 56250565, 2163278,
    26716522, 2598797, 16503056, 9888538, 20067681, 17015344, 2571036, 4210018,
    12094970, 41579557, 12827396, 5910252, 6143812, 4966783, 4976229, 2413582, 1842179
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




