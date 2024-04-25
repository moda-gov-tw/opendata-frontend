<template>
  <div>
    <vue-word-cloud
      style="height: 480px; width: 640px"
      :words="[
        ['romance', 19],
        ['horror', 3],
        ['fantasy', 7],
        ['adventure', 3]
      ]"
      :color="
        ([, weight]: [string, number]) =>
          weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'
      "
      font-family="Roboto"
    />
  </div>
</template>

<script setup lang="ts">
const { VueWordCloud } = useWordCloud()
</script>
