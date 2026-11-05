<script setup>
import { ref } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const emit = defineEmits(['trigger-easter-egg'])

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Secret tap counter on the green dot (especially great for mobile)
const tapCount = ref(0)
let tapTimer = null

const handleSecretTap = () => {
  tapCount.value++
  if (tapTimer) clearTimeout(tapTimer)
  if (tapCount.value >= 5) {
    emit('trigger-easter-egg')
    tapCount.value = 0
  } else {
    tapTimer = setTimeout(() => {
      tapCount.value = 0
    }, 2000)
  }
}
</script>

<template>
  <footer class="pt-8 pb-16 border-t border-[#27272A] mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
    <div 
      @click="handleSecretTap"
      class="flex items-center gap-2 select-none cursor-pointer py-1.5 px-1 rounded hover:bg-white/[0.03] active:opacity-75 transition-all"
      title="Tap 5x for a secret"
    >
      <span 
        class="w-1.5 h-1.5 rounded-full bg-emerald-500 active:scale-150 transition-transform"
      ></span>
      <p class="hover:text-zinc-400 transition-colors">
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
