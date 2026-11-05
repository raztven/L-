<script setup>
import McIcon from './mc/McIcon.vue'
import { playPop, playClick } from '../utils/minecraftAudio'

defineProps({ journals: Array })
</script>

<template>
  <section id="journal" class="pt-2 reveal">
    <!-- Header -->
    <div class="flex items-baseline justify-between mb-5 flex-wrap gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1.5">
          <McIcon name="book" size="22" />
          <h2 class="font-pixel text-sm sm:text-base tracking-wider uppercase" style="color: var(--mc-gold);">
            LOGS // LECTERN ARCHIVES
          </h2>
        </div>
        <p class="font-reading text-lg sm:text-xl" style="color: var(--mc-text-muted);">
          Field observations on equity markets, espresso calibration chemistry, and reactive code architectures.
        </p>
      </div>

      <div class="flex items-center gap-1.5 font-pixel text-[10px] px-2.5 py-1 bg-black/40 border-2 border-black text-[#4AEDD9]">
        <McIcon name="sign" size="14" />
        <span>{{ journals.length }} DISPATCHES</span>
      </div>
    </div>

    <!-- Journal Entries (Minecraft Lectern Books) -->
    <div class="space-y-3.5">
      <article
        v-for="item in journals"
        :key="item.id"
        @mouseenter="playPop"
        @click="playClick"
        class="mc-panel p-4 sm:p-5 group cursor-pointer transition-transform hover:-translate-y-0.5"
      >
        <div class="flex flex-wrap items-center gap-2 mb-2 font-pixel text-[10px] text-gray-400">
          <span class="text-white">{{ item.date }}</span>
          <span>&bull;</span>
          <span>{{ item.readTime }}</span>
          <span>&bull;</span>
          <span class="px-1.5 py-0.5 bg-[#3B7A24] text-white border border-black">
            {{ item.tag }}
          </span>
        </div>

        <h3
          class="font-pixel text-xs sm:text-sm mb-2 group-hover:text-[#FCDB5C] transition-colors leading-snug"
          style="color: var(--mc-text-heading);"
        >
          {{ item.title }}
        </h3>

        <p class="font-reading text-base sm:text-lg leading-relaxed" style="color: var(--mc-text-muted);">
          {{ item.summary }}
        </p>
      </article>
    </div>
  </section>
</template>
