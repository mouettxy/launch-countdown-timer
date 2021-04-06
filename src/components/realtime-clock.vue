<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useNow } from '@vueuse/core'

export default defineComponent({
  name: 'realtime-clock',

  setup() {
    const timeEntries = ref({
      D: {
        text: 'Days',
        time: 0,
      },
      H: {
        text: 'Hours',
        time: 0,
      },
      M: {
        text: 'Minutes',
        time: 0,
      },
      S: {
        text: 'Seconds',
        time: 0,
      },
    })

    const { now } = useNow()

    watch(now, () => {
      timeEntries.value.D.time = now.value.getDay()
      timeEntries.value.H.time = now.value.getHours()
      timeEntries.value.M.time = now.value.getMinutes()
      timeEntries.value.S.time = now.value.getSeconds()
    })

    return {
      timeEntries,
      now,
    }
  },
})
</script>

<template>
  <div class="flex justify-center pt-16 space-x-8">
    <div v-for="entry in timeEntries" :key="entry.text">
      <div class="relative shadow-md">
        <div class="realtime-clock__flipper--base rounded-b-md"></div>
        <div class="realtime-clock__flipper--base rounded-t-md"></div>
        <!-- for animation -->
        <div class="absolute top-1/2 animate realtime-clock__flipper--base rounded-t-md"></div>

        <div class="absolute z-1 shadow-inner left-[5%] w-[90%] bg-desaturated-blue h-2 top-1/2"></div>
        <p class="absolute z-2 text-3xl text-center inset-3.5 text-secondary">{{ entry.time }}</p>
      </div>

      <p class="mt-2 font-bold text-center uppercase text-ultra-xs text-primary">{{ entry.text }}</p>
    </div>
  </div>
</template>

<style lang="postcss">
.realtime-clock__flipper--base {
  @apply w-16 h-8 rounded-md bg-desaturated-blue;
}
</style>
