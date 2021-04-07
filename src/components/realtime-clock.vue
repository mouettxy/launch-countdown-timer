<script lang="ts">
import { defineComponent, ref } from 'vue'
import moment, { Moment } from 'moment'

const TIME_TO = moment('24.04.2021', 'DD.MM.YYYY').startOf('day')

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

    const setDays = (days: number): void => {
      timeEntries.value.D.time = days
    }

    const setHours = (hours: number) => {
      timeEntries.value.H.time = hours
    }

    const setMinutes = (minutes: number) => {
      timeEntries.value.M.time = minutes
    }

    const setSeconds = (seconds: number) => {
      timeEntries.value.S.time = seconds
    }

    const setCountdown = (days: number, hours: number, minutes: number, seconds: number): void => {
      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }

    const calculateCountdown = (startDate: Moment) => {
      const dateDiff = moment.duration(startDate.diff(moment()))

      if (dateDiff.milliseconds() < 0) {
        clearInterval(updateDateTimer)
        setCountdown(0, 0, 0, 0)
        return
      }

      setCountdown(dateDiff.days(), dateDiff.hours(), dateDiff.minutes(), dateDiff.seconds())
    }

    calculateCountdown(TIME_TO)

    const updateDateTimer = setInterval(() => {
      calculateCountdown(TIME_TO)
    }, 1000)

    return {
      timeEntries,
    }
  },
})
</script>

<template>
  <div class="flex justify-center pt-16 space-x-8">
    <div v-for="entry in timeEntries" :key="entry.text">
      <div class="relative shadow-md">
        <div class="relative top-0 realtime-clock__flipper--base rounded-b-md"></div>

        <div class="relative bottom-0 realtime-clock__flipper--base rounded-t-md"></div>

        <div class="absolute z-1 shadow-inner left-[5%] w-[90%] bg-desaturated-blue h-2 top-1/2"></div>
        <p
          :class="{ 'lg:left-3.5': entry.time.toString().length === 2 }"
          class="absolute z-2 text-3xl text-center lg:text-6xl lg:inset-5 inset-3.5 text-secondary"
        >
          {{ entry.time }}
        </p>
      </div>

      <p class="mt-2 font-bold text-center uppercase text-ultra-xs text-primary lg:text-xs lg:tracking-[.15rem]">
        {{ entry.text }}
      </p>
    </div>
  </div>
</template>

<style lang="postcss">
.realtime-clock__flipper--base {
  @apply w-16 h-8 lg:w-24 lg:h-12 rounded-md bg-desaturated-blue;
}
</style>
