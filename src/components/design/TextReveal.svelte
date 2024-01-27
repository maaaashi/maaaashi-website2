<script lang="ts">
  import { onMount } from 'svelte'
	import { fade } from 'svelte/transition';
  export let text: string;
  export let duration: string;
  let open = false;

  onMount(() => {
    setTimeout(() => {
      open = true
    }, 50)
  })
</script>

{#if open}
  {#each text as char, i}
    <span in:fade|global={{ delay: 1000 + i * 150, duration: +duration }} class="text-stone-800">{char}</span>
  {/each}
{/if}
