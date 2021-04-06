<script lang="ts">
import { defineComponent } from 'vue'
import FooterIcons from './components/footer-icons.vue'
import HeaderTitle from './components/header-title.vue'
import RealtimeClock from './components/realtime-clock.vue'

export default defineComponent({
  name: 'app',

  components: {
    FooterIcons,
    HeaderTitle,
    RealtimeClock,
  },
})
</script>

<template>
  <section class="relative h-screen font-default bg-stars bg-dark-blue">
    <header class="flex justify-center">
      <header-title></header-title>
    </header>
    <main>
      <realtime-clock></realtime-clock>
    </main>
    <footer class="fixed bottom-0 left-0 right-0 flex justify-center bg-cover bg-hills bg-left-85 h-[30%]">
      <footer-icons class="absolute bottom-8"></footer-icons>
    </footer>
  </section>
</template>
