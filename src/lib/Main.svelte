<script>
    import Track from "./Track.svelte";
    import { database, WatchmanList } from "../store";
</script>

<div class="text-center text-white-100 my-3">
    <h1 class="text-3xl">Watchman</h1>
    <p class="my-2">Tracking my progress through Atomic Habits</p>
    <p class="my-2"><b>{new Date().toLocaleDateString()}</b></p>
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
