<script>
    import { getYearProgress } from "../util";
    import { onDestroy, onMount } from "svelte";
    import { user } from "../store";
    import Summary from "./Summary.svelte";
    import Tasks from "./Tasks.svelte";
    import Journal from "./Journal.svelte";
    import Habit from "./Habit.svelte";
    let yearProgress = getYearProgress(new Date());
    let yearInterval;
    let activeTab = 0;

    onMount(async () => {
        yearInterval = setInterval(() => {
            yearProgress = getYearProgress(new Date());
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(yearInterval);
    });

    function logout() {
        localStorage.removeItem("user");
        window.location.href = "?login=1";
    }
</script>

<div class="text-center text-white-100 my-3">
    <h1 class="text-3xl my-2">Journal Theme</h1>
    <p>
        Hi, <a href="?login=1" title="Click to logout" on:click={logout}
            >{user.displayName}</a
        >
    </p>
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

<div class="container max-w-screen-sm mx-auto px-5">
    <div class="tabs mb-5">
        <button
            class="tab tab-lifted"
            class:tab-active={activeTab == 0}
            on:click={() => (activeTab = 0)}>Summary</button
        >
        <button
            class="tab tab-lifted"
            class:tab-active={activeTab == 1}
            on:click={() => (activeTab = 1)}>Your Tasks</button
        >
        <button
            class="tab tab-lifted"
            class:tab-active={activeTab == 2}
            on:click={() => (activeTab = 2)}>Historical Journal</button
        >
        <button
            class="tab tab-lifted"
            class:tab-active={activeTab == 3}
            on:click={() => (activeTab = 3)}>Daily Routine Clock</button
        >
    </div>
    {#if activeTab == 0}
        <Summary />
    {/if}
    {#if activeTab == 1}
        <Tasks />
    {/if}
    {#if activeTab == 2}
        <Journal />
    {/if}
    {#if activeTab == 3}
        <Habit />
    {/if}
</div>
