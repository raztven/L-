<script setup>
import { onMounted, onUnmounted } from 'vue'
import { X, Sparkles, Award, Flower2, Heart } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}

const onKeyDown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isOpen"
      @click="handleBackdropClick"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <!-- Modal Container -->
      <div 
        class="relative w-full max-w-lg bg-[#141417]/95 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_80px_rgba(255,255,255,0.12)] overflow-hidden text-[#F4F4F5] animate-in zoom-in-95 duration-300"
      >
        <!-- Luminous Ambient Spotlights -->
        <div class="absolute -top-24 -right-24 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Top Header Bar -->
        <div class="relative z-10 flex items-center justify-between pb-4 border-b border-[#27272A]">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_#FFFFFF]"></span>
            <span class="font-mono text-[11px] tracking-wider uppercase text-zinc-400">
              ✦ 21.08 // JB · Stardust Archive
            </span>
          </div>

          <button 
            @click="emit('close')"
            class="text-zinc-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X class="w-4 h-4" />
          </button>
        </div>

        <!-- Poetic Body -->
        <div class="relative z-10 pt-5 space-y-4">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-mono mb-2">
              <Sparkles class="w-3 h-3 text-white" />
              <span>Constellation 2108</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              To The Resilient Fighter
            </h3>
            <p class="text-xs text-zinc-400 font-mono mt-0.5">
              An unwritten dedication kept in stardust · 2023 — 2026
            </p>
          </div>

          <!-- Letter Excerpt -->
          <div class="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-2.5 font-light bg-[#18181B]/70 border border-zinc-800/80 p-4 rounded-xl">
            <p>
              Dedicated to the one born on the twenty-first of August — someone whose dedication in the arena knows no limits, and whose courage to break out of comfort zones has always inspired me from afar.
            </p>
            <p>
              From that quiet afternoon greeting three years ago, all the late-night perseverance, to the white blooms on graduation day.
            </p>
            <p class="text-zinc-400 italic">
              "Semoga lelahmu selalu berbuah manis, latihanmu membawamu ke puncak tertinggi, dan langkahmu selalu dilindungi."
            </p>
          </div>

          <!-- Micro Highlight Pills -->
          <div class="grid grid-cols-3 gap-2 pt-1">
            <div class="p-2.5 rounded-lg bg-[#18181B] border border-[#27272A] flex flex-col items-center text-center">
              <Award class="w-4 h-4 text-white mb-1" />
              <span class="text-[10px] font-mono text-zinc-400">Arena Spirit</span>
              <span class="text-xs font-medium text-white">Taekwondo</span>
            </div>

            <div class="p-2.5 rounded-lg bg-[#18181B] border border-[#27272A] flex flex-col items-center text-center">
              <Flower2 class="w-4 h-4 text-white mb-1" />
              <span class="text-[10px] font-mono text-zinc-400">First Bouquet</span>
              <span class="text-xs font-medium text-white">02.05.2026</span>
            </div>

            <div class="p-2.5 rounded-lg bg-[#18181B] border border-[#27272A] flex flex-col items-center text-center">
              <Heart class="w-4 h-4 text-white mb-1" />
              <span class="text-[10px] font-mono text-zinc-400">Quiet Hope</span>
              <span class="text-xs font-medium text-white">Always Rooting</span>
            </div>
          </div>

          <!-- Final Quiet Wish -->
          <div class="pt-2 text-center">
            <p class="text-[11px] text-zinc-400 font-mono">
              Until our paths align again. Keep shining in your arena.
            </p>
          </div>
        </div>

        <!-- Footer Close Action -->
        <div class="relative z-10 mt-6 pt-4 border-t border-[#27272A] flex items-center justify-between text-xs">
          <span class="text-zinc-400 font-mono text-[10px]">
            Press <kbd class="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300">ESC</kbd> or click outside
          </span>
          <button 
            @click="emit('close')"
            class="px-3.5 py-1.5 rounded-md bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-colors cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

