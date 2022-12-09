<script>
    import { ParsedRoutineHabit, RoutineHabit } from "../store";
    import { onDestroy, onMount } from "svelte";

    let routineMap = RoutineHabit.reduce((acc, routine) => {
        acc[routine.id] = routine;
        return acc;
    }, {});
</script>

<div>
    <p><i>This currently can't be changed yet </i>🫠</p>
    {#each ParsedRoutineHabit as routine}
        <div class="card mb-2 bg-base-100 shadow-xl py-2 px-4">
                <h3 class="text-2xl my-1">{routineMap[routine.id].context}</h3>
                <p class="my-1">{routine.start} - {routine.end}</p>
        </div>
    {/each}
</div>
