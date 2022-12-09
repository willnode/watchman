<script>
    import { listenStore } from "../store";
    import { onDestroy, onMount } from "svelte";

    let data, unsub;

    onMount(async () => {
        var d = listenStore("tasks", {
            tasks: [],
            habits: [],
        });
        data = d.store;
        unsub = d.unsub;
    });

    onDestroy(() => {
        unsub();
    });

    const addItem = (ctg) => {
        var title = prompt("Task title", "New item");
        if (title) {
            data.update((d) => {
            d[ctg].push({
                id: Math.random().toString(36).substr(2, 9),
                title,
                count: 0,
                progress: {},
            });
            d.ver++;
            return d;
        });
        }
    };

    const editItem = (id, ctg) => {
        var task = $data[ctg].find((t) => t.id === id);
        var newP = prompt("Task title", task.title);
        if (newP != '-' && newP != task.title && newP) {
            data.update((d) => {
                d[ctg].find((t) => t.id === id).title = newP;
                d.ver++;
                return d;
            });
        } else if (newP) {
            data.update((d) => {
                d[ctg] = d[ctg].filter((t) => t.id !== id);
                d.ver++;
                return d;
            });
        }
    };
</script>

{#if data && $data}
    <h2 class="text-xl">Tasks</h2>

    {#each $data.tasks as task}
        <div class="card mb-2 bg-base-100 shadow-xl py-2 px-4">
            <h3 class="text-2xl my-1" on:click={() => editItem(task.id, 'tasks')} on:keydown={() => {}}>{task.title}</h3>
        </div>
    {/each}

    <button class="btn btn-primary btn-sm my-2" on:click={() => addItem('tasks')}
        >Add new task</button
    >

    <h2 class="text-xl mt-2">Habits</h2>

    {#each $data.habits as habit}
        <div class="card mb-2 bg-base-100 shadow-xl py-2 px-4">
            <h3 class="text-2xl my-1"  on:click={() => editItem(habit.id, 'habits')} on:keydown={() => {}}>{habit.title}</h3>
        </div>
    {/each}

    <button class="btn btn-primary btn-sm my-2" on:click={() => addItem('habits')}
        >Add new habit</button
    >
{/if}
