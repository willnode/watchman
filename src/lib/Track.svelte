<script>
    import { getDateString, getTimeString, parseDateFromTime } from "../util";
    import { onDestroy, onMount } from "svelte";
    import { listenWatchmanItem, user } from "../store";

    /**
     * @type {{ id: string, time?: string[], context: string, actions?: string[],
        limits?: string[], input?: string}}
     */
    export let item;

    let start_time = item.time ? parseDateFromTime(item.time[0]) : 0;
    let end_time = item.time ? parseDateFromTime(item.time[1]) : 0;
    let current_time = Date.now();
    let interval_handler;
    /**
     * @type {import("svelte/store").Writable<any>}
     */
    let data, unsubData;
    let disabled = !user;
    let day = new Date().getDay();

    onMount(() => {
        interval_handler = setInterval(() => {
            current_time = Date.now();
            if (day != new Date().getDay()) {
                location.reload();
            }
        }, 1000);
        var d = listenWatchmanItem(item.id, getDateString(new Date()));
        data = d.store;
        unsubData = d.unsub;
    });
    onDestroy(() => {
        clearInterval(interval_handler);
        unsubData();
    });

    var save = () => {
        data.update((d) => {
            d.ver++;
            return d;
        });
    };
</script>

{#if $data}
    <div class="card bg-base-100 shadow-xl border border-primary">
        <div class="card-body">
            <h2 class="card-title flex">
                {item.context}
                {#if item.time}
                    ({item.time[0]} - {item.time[1]})
                {/if}
                {#if item.limits}
                    <span class="ml-auto">
                        {#each item.limits as limit}
                            {#if limit == "Work"}
                                <span title="Dilarang Kerja">
                                    ⛔
                                </span>
                            {:else if limit == "Meeting"}
                                <span title="Dilarang Meeting">
                                    🙅
                                </span>
                            {:else if limit == "Sosmed"}
                                <span title="Dilarang Buka Sosmed">
                                    🔕
                                </span>
                            {/if}
                        {/each}
                    </span>
                {/if}
            </h2>
            {#if item.time}
                <progress
                    class="progress progress-primary"
                    value={current_time - start_time}
                    max={end_time - start_time}
                />
            {/if}
            {#if item.actions}
                <div class="flex flex-wrap">
                    {#each item.actions as action}
                        <div class="form-control whitespace-nowrap">
                            <label class="cursor-pointer label">
                                <span class="label-text">{action}</span>
                                <input
                                    type="checkbox"
                                    class="checkbox checkbox-primary mx-2"
                                    checked={!!$data.actions[action]}
                                    on:change={(e) => {
                                        if (disabled) {
                                            e.preventDefault();
                                            e.currentTarget.checked =
                                                $data.actions[action];
                                            return false;
                                        }
                                        $data.actions[action] = e.currentTarget
                                            .checked
                                            ? getTimeString(new Date())
                                            : null;
                                        save();
                                    }}
                                />
                                <span class="label-text font-mono"
                                    >{$data.actions[action] || "--:--"}</span
                                >
                            </label>
                        </div>
                    {/each}
                </div>
            {/if}
            {#if item.input}
                <div class="form-control">
                    <textarea
                        class="textarea textarea-bordered min-w-0"
                        placeholder={item.input}
                        bind:value={$data.input}
                        on:change={save}
                        readonly={disabled}
                    />
                </div>
            {/if}
        </div>
    </div>
{/if}
