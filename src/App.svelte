<script>
  import Login from "./lib/Login.svelte";
  import Main from "./lib/Main.svelte";
  var login = !!new URLSearchParams(window.location.search).get("login");
</script>

<main>
  {#if login}
    <Login />
  {:else}
    <Main />
  {/if}
</main>
