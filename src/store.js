
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { writable } from "svelte/store";

// Initialize Firebase
const fireApp = initializeApp({
    databaseURL: "https://watchman-willnode-default-rtdb.asia-southeast1.firebasedatabase.app/",
    apiKey: "AIzaSyCrG9gLErgO0YmZE37PnIF0Vzb-fjbZ4Rg",
});

const database = getDatabase(fireApp);
const auth = getAuth(fireApp);
const user = JSON.parse(localStorage.getItem("user") || "null");
const defaultUser = "rtI34B6L0Gdgs31EElbAsCvBJ582";

var WatchmanList = [
    {
        id: "breafing",
        context: "What's on Today?",
        actions: [
            'Lagi jalan jalan',
            'Lagi puasa',
            'Lagi sakit',
        ],
    },
    {
        id: "get-up",
        time: ['03:30', '04:00'],
        context: "Get Up",
        actions: [
            'Bangun',
            'Tahajud',
            'Subuh',
        ],
        limits: [
            'Meeting',
            'Work',
            'Sosmed'
        ]
    }, {
        id: "boot-work",
        time: ['04:00', '06:00'],
        context: "Morning Work",
        input: 'What\'s unfinished stuff can be done quickly?',
        limits: [
            'Meeting',
            'Sosmed'
        ]
    }, {
        id: "morning",
        time: ['06:00', '08:00'],
        context: "Planning",
        input: 'What I\'ll do?',
        actions: [
            'Jogging',
            'Mandi',
            'Dhuha',
            'Sarapan',
            'Bikin Kopi'
        ],
        limits: [
            'Meeting',
        ]
    }, {
        id: "work-1",
        time: ['08:00', '11:30'],
        context: "Working Round 1",
        input: "What I have done?",
        limits: [
            'Sosmed',
        ]
    }, {
        id: "noon",
        time: ['11:30', '13:30'],
        context: "Noon Break",
        actions: [
            'Dhuhur',
            'Makan',
            'Tidur',
        ],
        limits: [
            'Work',
        ]
    }, {
        id: "work-2",
        time: ['13:30', '16:30'],
        context: "Working Round 2",
        input: "What I have done?",
        limits: [
            'Sosmed',
        ]
    }, {
        id: "evening",
        time: ['16:30', '17:30'],
        context: "Evening Break",
        actions: [
            'Ashar',
            'Mandi',
            'Bersih-bersih',
            'Post Sosmed',
        ],
        limits: [
            'Work'
        ]
    }, {
        id: "dawn",
        time: ['17:30', '19:00'],
        context: "Dawn Break",
        actions: [
            'Magrib',
            'Tadarus',
            'Dinner',
            'Isyak',
        ],
        limits: [
            'Meeting',
            'Work',
            'Sosmed'
        ]
    }, {
        id: "work-3",
        time: ['19:00', '22:00'],
        context: "Working Round 3",
        input: "What I have done?",
        limits: [
        ]
    }, {
        id: "evaluation",
        context: "Evaluasi",
        actions: [
            'Target Tercapai?',
            'Perlu Lebih Giat?',
            'Screen Off',
        ],
        input: "Plan for tomorrow?",
        limits: [
            'Meeting',
            'Work',
            'Sosmed'
        ]
    },
]

function listenWatchmanItem(name, date) {
    var ref2 = ref(database, `${defaultUser}/${date}/${name}`);
    var store = writable(null);
    var lastVer = 0;
    var unsub = onValue(ref2, (snapshot) => {
        const data = snapshot.val();
        store.set(Object.assign({
            ver: 0,
            input: '',
            actions: {},
        }, data || {}));
    });
    var unsubb = store.subscribe((value) => {
        if (value && value.ver > lastVer) {
            lastVer = value.ver;
            set(ref2, value);
        }
    });
    return {
        store,
        unsub: function () {
            unsub();
            unsubb();
        }
    };
}

export {
    WatchmanList,
    database,
    auth,
    user,
    listenWatchmanItem,
}