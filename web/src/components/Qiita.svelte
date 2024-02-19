<script lang="ts">
  export let size = 16;
</script>

<style>
  :global(img) {
    width: var(--size);
    height: var(--size);
    object-fit: contain;
  }
</style>

<img src="/qiita-logo.png" alt="" style={`--size: ${size}px;`}>