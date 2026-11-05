<script setup>
import { ref } from 'vue'
import { playClick, playPop } from '../utils/minecraftAudio'
import McIcon from './mc/McIcon.vue'
import McCharacter from './mc/McCharacter.vue'
import GithubIcon from './icons/GithubIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'

const props = defineProps({ personal: Object })

const toastMessage = ref('')
let toastTimer = null

const copyEmail = () => {
  playPop()
  navigator.clipboard.writeText(props.personal.contact.email)
  toastMessage.value = 'Item copied to inventory: ' + props.personal.contact.email
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastMessage.value = ''
  }, 3500)
}
</script>

<template>
  <section id="top" class="pt-4 sm:pt-8 relative">

    <!-- Toast Banner: Item Copied -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="toastMessage"
        class="fixed top-20 right-6 z-50 p-3 bg-[#111111] border-3 border-[#50C878] text-[#50C878] font-pixel text-[10px] shadow-2xl flex items-center gap-2.5"
      >
        <McIcon name="emerald" size="18" />
        <span>{{ toastMessage }}</span>
      </div>
    </transition>

    <!-- Main World Select / Container Panel -->
    <div class="mc-panel p-5 sm:p-7">
      
      <!-- World Info Header Strip -->
      <div class="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b-2 border-black/40 font-pixel text-[9px] sm:text-[10px] text-[#555555] dark:text-[#AAAAAA]">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 bg-[#5D9B3A] border border-black inline-block"></span>
          <span>MODE: SURVIVAL MULTIPLAYER</span>
        </div>
        <div class="text-[#FCDB5C]">
          DIFFICULTY: HARDCORE CODING
        </div>
      </div>

      <!-- Hero Two-Column Layout (Avatar + Bio) -->
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6 mb-7">
        
        <!-- Blocky Developer Character (Bobbing Idle) -->
        <div class="flex flex-col items-center shrink-0">
          <div class="p-3 mc-slot flex items-center justify-center bg-black/20">
            <McCharacter :size="100" />
          </div>
          <span class="font-pixel text-[9px] mt-2 px-2 py-0.5 bg-black/40 text-[#4AEDD9] border border-black">
            PLAYER: RAZTVEN
          </span>
        </div>

        <!-- Headline & Bio Narrative -->
        <div class="flex-1 text-center md:text-left">
          <!-- Level & Name -->
          <div class="inline-flex items-center gap-2 mb-2 font-pixel text-xs text-[#50C878]">
            <McIcon name="xp_orb" size="14" />
            <span>SOFTWARE ENGINEERING SPECIALIST</span>
          </div>

          <h1 class="text-xl sm:text-3xl font-pixel mb-3 tracking-tight" style="color: var(--mc-text-title);">
            {{ personal.name }}
          </h1>

          <p class="font-reading text-xl sm:text-2xl leading-relaxed mb-3" style="color: var(--mc-text-body);">
            Undergraduate in <strong class="text-[#5D9B3A] font-bold">Software Engineering Technology at Politeknik Negeri Lampung</strong> (Class of 2026) and vocational alumnus from <strong class="text-[#FCDB5C] font-bold">SMK Negeri 3 Metro (RPL)</strong>.
          </p>

          <p class="font-reading text-lg sm:text-xl leading-relaxed" style="color: var(--mc-text-muted);">
            Specializing in interactive web frontends on <span class="text-[#4AEDD9]">Vue 3 &amp; Tailwind CSS</span>, resilient backend architectures with <span class="text-[#B3261E]">Laravel &amp; Supabase</span>, and native Android apps with <span class="text-[#50C878]">Kotlin Jetpack Compose</span>.
          </p>
        </div>

      </div>

      <!-- ── 4 INVENTORY SLOTS INFO (LOCATION, INSTITUTION, CREDENTIAL, DELIVERED) ── -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-7">
        
        <!-- Slot 1: Location -->
        <div class="mc-slot p-3 flex items-center gap-3">
          <div class="w-9 h-9 border border-black bg-black/30 flex items-center justify-center shrink-0">
            <McIcon name="compass" size="22" />
          </div>
          <div>
            <div class="font-pixel text-[8px] text-[#FCDB5C] leading-none mb-1">LOCATION</div>
            <div class="font-reading text-lg font-bold leading-tight" style="color: var(--mc-text-title);">
              Bandar Lampung, ID
            </div>
          </div>
        </div>

        <!-- Slot 2: Institution -->
        <div class="mc-slot p-3 flex items-center gap-3">
          <div class="w-9 h-9 border border-black bg-black/30 flex items-center justify-center shrink-0">
            <McIcon name="book" size="20" />
          </div>
          <div>
            <div class="font-pixel text-[8px] text-[#FCDB5C] leading-none mb-1">INSTITUTION</div>
            <div class="font-reading text-lg font-bold leading-tight" style="color: var(--mc-text-title);">
              Polinela TRPL '26
            </div>
          </div>
        </div>

        <!-- Slot 3: Credential (Emerald Highlight) -->
        <div class="mc-slot p-3 flex items-center gap-3 mc-enchanted">
          <div class="w-9 h-9 border border-black bg-black/40 flex items-center justify-center shrink-0">
            <McIcon name="emerald" size="22" />
          </div>
          <div>
            <div class="font-pixel text-[8px] text-[#50C878] leading-none mb-1">CREDENTIAL</div>
            <div class="font-reading text-lg font-bold leading-tight text-[#50C878]">
              BNSP Certified RPL
            </div>
          </div>
        </div>

        <!-- Slot 4: Delivered -->
        <div class="mc-slot p-3 flex items-center gap-3">
          <div class="w-9 h-9 border border-black bg-black/30 flex items-center justify-center shrink-0">
            <McIcon name="sword" size="20" />
          </div>
          <div>
            <div class="font-pixel text-[8px] text-[#FCDB5C] leading-none mb-1">DELIVERED</div>
            <div class="font-reading text-lg font-bold leading-tight" style="color: var(--mc-text-title);">
              6+ Production Apps
            </div>
          </div>
        </div>

      </div>

      <!-- ── 4 MINECRAFT BUTTONS ACTION ROW ── -->
      <div class="flex flex-wrap items-center gap-3">
        <a 
          :href="`mailto:${personal.contact.email}`"
          @click="playClick" 
          class="mc-btn mc-btn-primary"
        >
          <span>SEND EMAIL</span>
        </a>

        <button 
          @click="copyEmail" 
          class="mc-btn"
        >
          <span>COPY EMAIL</span>
        </button>

        <a 
          :href="personal.contact.github" 
          target="_blank" 
          rel="noopener noreferrer"
          @click="playClick" 
          class="mc-btn"
        >
          <GithubIcon class="w-4 h-4" />
          <span>GITHUB</span>
        </a>

        <a 
          v-if="personal.contact.linkedin" 
          :href="personal.contact.linkedin" 
          target="_blank" 
          rel="noopener noreferrer"
          @click="playClick" 
          class="mc-btn"
        >
          <LinkedinIcon class="w-4 h-4 text-[#4AEDD9]" />
          <span>LINKEDIN</span>
        </a>
      </div>

    </div>

  </section>
</template>
