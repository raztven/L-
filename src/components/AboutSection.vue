<script setup>
import McIcon from './mc/McIcon.vue'
import { playPop, playClick } from '../utils/minecraftAudio'

defineProps({
  about: Object,
  personal: Object
})
</script>

<template>
  <section id="about" class="pt-2 reveal">
    <!-- Section Header -->
    <div class="flex items-baseline justify-between mb-5 flex-wrap gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1.5">
          <McIcon name="book" size="22" />
          <h2 class="font-pixel text-sm sm:text-base tracking-wider uppercase" style="color: var(--mc-gold);">
            ABOUT // BOOK &amp; QUILL
          </h2>
        </div>
        <p class="font-reading text-lg sm:text-xl" style="color: var(--mc-text-muted);">
          Chronicles of engineering journey, educational quests, and personal passions beyond the terminal.
        </p>
      </div>

      <div class="flex items-center gap-1.5 font-pixel text-[10px] px-2.5 py-1 bg-black/40 border-2 border-black text-[#FCDB5C]">
        <McIcon name="sign" size="14" />
        <span>ENTRY: RAZTVEN_BIO</span>
      </div>
    </div>

    <!-- Storybook Parchment (Book & Quill View) -->
    <div class="mc-parchment p-5 sm:p-7 mb-7">
      <!-- Book Header / Bookmark -->
      <div class="flex items-center justify-between pb-3 mb-4 border-b-2 border-current/20 font-pixel text-xs">
        <div class="flex items-center gap-2">
          <McIcon name="book" size="18" />
          <span class="tracking-widest uppercase font-bold">WRITTEN BOOK &bull; RAZTVEN</span>
        </div>
        <span class="text-[10px] opacity-75 font-mono">PAGE 1 / 1</span>
      </div>

      <!-- Story Paragraphs -->
      <div class="space-y-4 font-reading text-lg sm:text-xl leading-relaxed">
        <p v-for="(p, i) in about.story" :key="i">
          {{ p }}
        </p>
      </div>

      <!-- Book Signature -->
      <div class="mt-6 pt-3 border-t-2 border-current/20 flex items-center justify-between font-pixel text-[11px]">
        <span class="opacity-75">POLINELA TRPL '26</span>
        <span class="text-[#8B5A2B] dark:text-[#FCDB5C] font-bold">~ Farras Fadhil</span>
      </div>
    </div>

    <!-- Academic Record (Minecraft Quest Log) -->
    <div class="mb-8">
      <div class="flex items-center gap-2 mb-3 font-pixel text-xs uppercase" style="color: var(--mc-text-heading);">
        <McIcon name="compass" size="16" />
        <span>// ACADEMIC_QUEST_LOG</span>
      </div>

      <div class="space-y-3">
        <div
          v-for="(edu, idx) in about.education"
          :key="idx"
          @mouseenter="playPop"
          class="mc-panel p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
        >
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-2 mb-1.5">
              <h3 class="font-pixel text-xs sm:text-sm font-bold" style="color: var(--mc-text-heading);">
                {{ edu.institution }}
              </h3>
              <span
                v-if="edu.highlight"
                class="font-pixel text-[9px] px-2 py-0.5 bg-[#3B7A24] text-white border border-black"
              >
                {{ edu.highlight }}
              </span>
            </div>

            <div class="font-pixel text-[11px] mb-2 text-[#4AEDD9]">
              {{ edu.degree }}
            </div>

            <p class="font-reading text-base sm:text-lg leading-snug" style="color: var(--mc-text-muted);">
              {{ edu.description }}
            </p>
          </div>

          <div class="font-pixel text-[10px] shrink-0 px-2 py-1 bg-black/40 border border-black text-[#FCDB5C]">
            {{ edu.period }}
          </div>
        </div>
      </div>
    </div>

    <!-- Personal Interests & XP Orbs -->
    <div>
      <div class="flex items-center gap-2 mb-3 font-pixel text-xs uppercase" style="color: var(--mc-text-heading);">
        <McIcon name="xp_orb" size="16" />
        <span>// XP_ORBS &amp; PASSIONS</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          v-for="(item, idx) in about.interests"
          :key="idx"
          @mouseenter="playPop"
          class="mc-slot p-3.5 flex flex-col justify-between hover:border-[#FCDB5C] transition-colors"
        >
          <div>
            <div class="flex items-start justify-between gap-2 mb-2 font-pixel">
              <div class="flex items-center gap-2">
                <McIcon name="xp_orb" size="16" />
                <span class="text-[11px] font-bold text-white">
                  {{ item.title }}
                </span>
              </div>
              <span class="text-[8px] px-1.5 py-0.5 bg-black/50 text-[#FCDB5C] border border-black">
                {{ item.category }}
              </span>
            </div>
            <p class="font-reading text-base leading-snug text-gray-300">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
