
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { writable } from "svelte/store";
import { parseDateFromTime } from "./util";

// Initialize Firebase
const fireApp = initializeApp({
    databaseURL: "https://watchman-willnode-default-rtdb.asia-southeast1.firebasedatabase.app/",
    apiKey: "AIzaSyCrG9gLErgO0YmZE37PnIF0Vzb-fjbZ4Rg",
});

const database = getDatabase(fireApp);
const auth = getAuth(fireApp);
const user = JSON.parse(localStorage.getItem("user") || "null");

var RoutineHabit = [
    {
        id: "sleep",
        context: "Sleep",
        detail: "Relax. Take a rest and sleep.",
        times: [ // 8
            ['03:30', '04:30'], // 1
            ['11:00', '12:00'], // 1
            ['21:00', '03:00'], // 6
        ]
    }, {
        id: "rest",
        context: "Rest",
        detail: "Eat. Shower. Relax. Set your mood.",
        times: [ // 5.5
            ['03:00', '03:30'], // 0.5
            ['04:30', '06:00'], // 1.5
            ['08:30', '09:00'], // 0.5
            ['12:00', '12:30'], // 0.5
            ['15:00', '15:30'], // 0.5
            ['17:30', '19:30'], // 2
        ]
    }, {
        id: "work",
        context: "Work",
        detail: "Work. Study. Learn. Do productive things.",
        times: [ // 10.5
            ['06:00', '08:30'], // 1.5
            ['09:00', '11:00'], // 3
            ['12:30', '15:00'], // 2.5
            ['15:30', '17:30'], // 2
            ['19:30', '21:00'], // 1.5
        ]
    },
]

// Get sorted routine habit
var ParsedRoutineHabit = RoutineHabit.map((item) => {
    var times = item.times.map((time) => {
        var [start, end] = time;
        return [parseDateFromTime(start), parseDateFromTime(end)];
    });
    return {
        ...item,
        timesParsed: times,
    }
}).reduce((acc, item) => {
    for (let i = 0; i < item.times.length; i++) {
        acc.push({
            id: item.id,
            start: item.times[i][0],
            end: item.times[i][1],
            startParsed: item.timesParsed[i][0],
            endParsed: item.timesParsed[i][1],
        })
    }
    return acc;
}, []).sort((a, b) => {
    return a.startParsed - b.startParsed;
});


function listenStore(path, defaultObj = {}) {
    var ref2 = ref(database, `${user.uid}/${path}`);
    var store = writable(null);
    var lastVer = 0;
    var unsub = onValue(ref2, (snapshot) => {
        const data = snapshot.val();
        store.set(Object.assign({
            ...defaultObj,
            ver: 0,
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
    RoutineHabit,
    ParsedRoutineHabit,
    listenStore,
    database,
    auth,
    user,
    // listenWatchmanItem,
}