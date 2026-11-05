<script setup>
import { ArrowUp } from '@lucide/vue'
import McIcon from './mc/McIcon.vue'
import { playClick } from '../utils/minecraftAudio'

defineProps({ personal: Object })

const scrollToTop = () => {
  playClick()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="w-full relative mt-16 select-none font-pixel">
    <!-- Strata Layer 1: Grass Block Top -->
    <div class="mc-strata-grass w-full"></div>

    <!-- Strata Layer 2: Dirt Layer -->
    <div class="mc-strata-dirt w-full py-2"></div>

    <!-- Strata Layer 3: Stone Layer -->
    <div class="mc-strata-stone w-full py-2.5"></div>

    <!-- Strata Layer 4: Deep Bedrock Layer (Main Content) -->
    <div class="mc-strata-bedrock w-full py-8 text-xs text-white">
      <div class="max-w-3xl mx-auto px-5 sm:px-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
          <!-- Left Info -->
          <div class="text-center sm:text-left space-y-1.5">
            <div class="flex items-center justify-center sm:justify-start gap-2">
              <McIcon name="grass_block" size="16" />
              <span class="text-sm font-bold text-[#FCDB5C]">
                raztven.dev
              </span>
              <span class="text-gray-500">//</span>
              <span class="text-gray-300 text-xs">
                &copy; 2026 {{ personal.name }}
              </span>
            </div>

            <div class="font-reading text-base text-gray-400">
              Bachelor of Applied Software Engineering &bull; Politeknik Negeri Lampung
            </div>
          </div>

          <!-- Right Actions -->
          <div class="flex items-center gap-4 text-[10px]">
            <div class="hidden sm:flex items-center gap-1.5 text-gray-400">
              <span class="text-[#55FF55]">VUE 3</span>
              <span>/</span>
              <span class="text-[#4AEDD9]">VITE</span>
              <span>/</span>
              <span class="text-[#FCDB5C]">TAILWIND</span>
            </div>

            <button
              @click="scrollToTop"
              class="mc-btn text-[10px] py-1.5 px-3 flex items-center gap-1.5"
              title="Back to top"
              aria-label="Back to top"
            >
              <span>[ TOP</span>
              <ArrowUp class="w-3 h-3" />
              <span>]</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
