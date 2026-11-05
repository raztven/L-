<script setup>
import { ArrowUp } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="pt-8 pb-16 border-t border-[#27272A] mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
    <div class="flex items-center gap-2">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
      <p>
        &copy; 2026 Farras Fadhil Hassan. Crafted with Vue 3 &amp; Tailwind CSS.
      </p>
    </div>

    <button
      @click="scrollToTop"
      class="group hover:text-white transition-colors cursor-pointer select-none inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-[#18181B]"
    >
      <span>Back to top</span>
      <ArrowUp class="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  </footer>
</template>
