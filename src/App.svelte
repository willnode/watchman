<script>
    import { onMount } from "svelte";
  import Login from "./lib/Login.svelte";
  import Main from "./lib/Main.svelte";
    import { user } from "./store";
  var login = !!new URLSearchParams(window.location.search).get("login");

  onMount(() => {
    if (user == null && !login) {
     window.location.href = '?login=1';
    }
  })
</script>

<main>
  {#if login}
    <Login />
  {:else if user}
    <Main />
  {/if}
</main>
