<script lang="ts">
  let count = 0
  const add = () => {
    count += 1
  }
  const subtract = () => {
    count -= 1
  }
</script>

<div class="text-black">
  Svelte Component {count}
  <button class="btn" on:click={add}>+</button>
  <button class="btn" on:click={subtract}>-</button>
</div>