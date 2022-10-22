
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
        context: "What's Today?",
        actions: [
            'On Journey',
            'On Fasting',
            'Target Archieved',
        ],
    },
    {
        id: "get-up",
        time: ['04:00', '07:00'],
        context: "Get Up",
        actions: [
            'Bangun',
            'Tahajud',
            'Subuh',
            'Jogging',
            'Mandi',
            'Dhuha',
            'Sarapan',
            'Bikin Kopi'
        ],
        limits: [
            'Meeting',
            'WhatsApp',
            'Sosmed'
        ]
    }, {
        id: "morning",
        time: ['07:00', '08:00'],
        context: "Cold Shower",
        input: 'What I\'ll do?',
        limits: [
            'Meeting',
        ]
    }, {
        id: "work-1",
        time: ['08:00', '11:30'],
        context: "Working Round 1",
        input: "What I have done?",
        limits: [
            'WhatsApp',
            'Sosmed',
        ]
    }, {
        id: "noon",
        time: ['11:30', '13:30'],
        context: "Noon Break",
        actions: [
            'Dhuhur',
            'Lunch',
            'Tidur',
        ],
        limits: [
        ]
    }, {
        id: "work-2",
        time: ['13:30', '16:00'],
        context: "Working Round 2",
        input: "What I have done?",
        limits: [
            'Sosmed',
            'WhatsApp',
        ]
    }, {
        id: "evening",
        time: ['16:00', '18:00'],
        context: "Evening Break",
        actions: [
            'Ashar',
            'Mandi',
        ],
        limits: [
        ]
    }, {
        id: "dawn",
        time: ['18:00', '19:00'],
        context: "Dawn Break",
        actions: [
            'Magrib',
            'Tadarus',
            'Isyak',
        ],
        limits: [
            'Meeting',
            'Sosmed',
            'Whatsapp',
        ]
    }, {
        id: "work-3",
        time: ['19:00', '22:30'],
        context: "Working Round 3",
        input: "What I have done?",
        limits: [
            'Sosmed',
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