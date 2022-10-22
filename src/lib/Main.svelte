<script>
    import Track from "./Track.svelte";
    import { WatchmanList } from "../store";
    import { getYearProgress } from "../util";
    import { onDestroy, onMount } from "svelte";
    let yearProgress = getYearProgress(new Date());
    let yearInterval;

    onMount(async () => {
        yearInterval = setInterval(() => {
            yearProgress = getYearProgress(new Date());
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(yearInterval);
    });

</script>

<div class="text-center text-white-100 my-3">
    <h1 class="text-3xl">Watchman</h1>
    <p class="my-2">Tracking my progress through Atomic Habits</p>
    <p class="my-2">
        <b
            >{new Date().toLocaleDateString()} ({(yearProgress * 100).toFixed(
                2
            )}%)</b
        >
    </p>
    <progress
    title="{(yearProgress * 100).toFixed(5)}%"
        class="progress progress-secondary"
        value={yearProgress}
        max={1}
    />
</div>

<div class="container mx-auto px-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        {#each WatchmanList as item, i}
            <div class:md:col-span-2={i == 0}>
                <Track {item} />
            </div>
        {/each}
    </div>
</div>
