<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'header-title',

  setup() {
    const text = "We're launching soon"

    return {
      text,
    }
  },
})
</script>

<template>
  <div class="text-2xl pt-24 font-bold tracking-[0.4rem] text-center text-white uppercase">
    <p>{{ text }}</p>
  </div>
</template>
