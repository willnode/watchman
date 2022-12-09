<script>
    import { ParsedRoutineHabit, RoutineHabit } from "../store";
    import { onDestroy, onMount } from "svelte";

    let currentRoutine;
    let routineInterval;
    let currentTime = Date.now();
    let routineMap = RoutineHabit.reduce((acc, routine) => {
        acc[routine.id] = routine;
        return acc;
    }, {});

    onMount(async () => {
        routineInterval = setInterval(updateRoutine, 1000);
        updateRoutine();
    });

    const updateRoutine = () => {
        currentTime = Date.now();
        if (currentRoutine && currentTime < currentRoutine.endParsed) {
            return;
        }

        currentRoutine = ParsedRoutineHabit.find(
            (routine) =>
                currentTime >= routine.startParsed &&
                currentTime < routine.endParsed
        );
    };

    onDestroy(() => {
        clearInterval(routineInterval);
    });
</script>

{#if currentRoutine}
    <div>
        <p class="text-slate-600"> Now is the time to...</p>
        <h3 class="text-5xl my-3">{routineMap[currentRoutine.id].context}</h3>
        <h4 class="text-xl my-3">{routineMap[currentRoutine.id].detail}</h4>
        <p class=" my-3">{currentRoutine.start} - {currentRoutine.end}</p>

        <progress
            class="progress bg-stone-900 progress-primary"
            value={currentTime - currentRoutine.startParsed}
            max={currentRoutine.endParsed - currentRoutine.startParsed}
        />
    </div>
{/if}
