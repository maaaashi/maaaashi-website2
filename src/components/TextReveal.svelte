<script lang="ts">
  import { onMount } from 'svelte'
	import { fade } from 'svelte/transition';

  export let text: string;
  export let duration: string;

  let open = false;

  onMount(() => {
    setTimeout(() => {
      open = true
    }, 10)
  })
</script>

{#if open}
  {#each text as char, i}
    <span in:fade|global={{ delay: 1000 + (i - 1) * 50 + +duration, duration: 0 }}>{char}</span>
  {/each}
{/if}
