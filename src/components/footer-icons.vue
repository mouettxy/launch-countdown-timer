<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'footer-icons',

  setup() {
    const icons = ['bg-facebook', 'bg-pinterest', 'bg-instagram']

    return {
      icons,
    }
  },
})
</script>

<template>
  <div class="flex h-8 space-x-8">
    <a
      v-for="icon in icons"
      :key="icon"
      href="#"
      :class="{ [icon]: true }"
      class="block w-8 h-8 bg-no-repeat bg-cover lg:w-5 lg:h-5"
    ></a>
  </div>
</template>
