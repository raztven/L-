<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { soundEnabled, toggleSound, playClick } from '../utils/minecraftAudio'
import McIcon from './mc/McIcon.vue'

const props = defineProps({ isDark: Boolean })
const emit = defineEmits(['toggle-theme'])

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('projects')

const navSlots = [
  { name: 'projects',       label: 'Projects', icon: 'sword',    keyNum: '1' },
  { name: 'skills',         label: 'Stack',    icon: 'pickaxe',  keyNum: '2' },
  { name: 'about',          label: 'About',    icon: 'book',     keyNum: '3' },
  { name: 'certifications', label: 'Certs',    icon: 'trophy',   keyNum: '4' },
  { name: 'contact',        label: 'Contact',  icon: 'chat',     keyNum: '5' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  const sections = ['projects', 'skills', 'about', 'certifications', 'contact']
  let current = ''
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 200) current = id
    }
  }
  if (current) activeSection.value = current
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const scrollTo = (id) => {
  playClick()
  mobileMenuOpen.value = false
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const handleThemeToggle = () => {
  playClick()
  emit('toggle-theme')
}
</script>

<template>
  <header
    :class="[
      'sticky top-0 left-0 right-0 z-40 transition-colors duration-150 py-2 sm:py-3',
      isScrolled ? 'border-b-4 border-black shadow-lg' : 'bg-transparent'
    ]"
    :style="isScrolled ? 'background-color: var(--mc-header-bg);' : ''"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2">

      <!-- ── LOGO: PIXEL GRASS BLOCK + RAZTVEN ── -->
      <a
        href="#top"
        @click.prevent="scrollTo('top')"
        class="flex items-center gap-2.5 group cursor-pointer select-none shrink-0"
        aria-label="Back to top"
      >
        <div class="p-1 border-2 border-black bg-[#8B5A2B] group-hover:scale-105 transition-transform" style="box-shadow: inset 1px 1px 0 #5D9B3A;">
          <McIcon name="grass_block" size="22" />
        </div>

        <div class="flex flex-col">
          <div class="font-pixel text-[11px] sm:text-xs tracking-tight flex items-center gap-1.5" style="color: var(--mc-text-title);">
            <span>raztven</span>
            <span class="w-2 h-2 bg-[#50C878] border border-black animate-pulse"></span>
          </div>
          <span class="text-xs font-reading uppercase tracking-widest text-[#50C878] font-bold leading-none">
            LVL 26 DEVELOPER
          </span>
        </div>
      </a>

      <!-- ── DESKTOP MINECRAFT HOTBAR (CENTER) ── -->
      <nav class="hidden md:flex items-center mc-hotbar">
        <a
          v-for="slot in navSlots"
          :key="slot.name"
          :href="`#${slot.name}`"
          @click.prevent="scrollTo(slot.name)"
          class="mc-hotbar-slot w-11 h-11 flex flex-col items-center justify-center relative cursor-pointer group"
          :class="{ active: activeSection === slot.name }"
          :title="`${slot.label} [Key ${slot.keyNum}]`"
        >
          <!-- Pixel Icon -->
          <McIcon :name="slot.icon" size="20" class="transition-transform group-hover:scale-110" />

          <!-- Key Number in slot corner -->
          <span 
            class="absolute bottom-0.5 right-1 font-pixel text-[8px] leading-none pointer-events-none"
            :style="activeSection === slot.name ? 'color: #FCDB5C;' : 'color: #AAAAAA;'"
          >
            {{ slot.keyNum }}
          </span>

          <!-- Tooltip on hover -->
          <div class="absolute -bottom-9 left-1/2 -translate-x-1/2 mc-tooltip whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {{ slot.label }}
          </div>
        </a>
      </nav>

      <!-- ── RIGHT CONTROLS: DAY/NIGHT & AUDIO ── -->
      <div class="flex items-center gap-2 shrink-0">
        <!-- Sound Effect Toggle -->
        <button
          @click="toggleSound"
          class="mc-btn p-2"
          :title="soundEnabled ? 'Audio Effects: ON' : 'Audio Effects: MUTED'"
          aria-label="Toggle Sound"
        >
          <McIcon :name="soundEnabled ? 'sound_on' : 'sound_off'" size="16" />
        </button>

        <!-- Day/Night Theme Toggle -->
        <button
          @click="handleThemeToggle"
          class="mc-btn p-2 flex items-center gap-1.5"
          :title="isDark ? 'Mode: Night (Click for Day)' : 'Mode: Day (Click for Night)'"
          aria-label="Toggle Day / Night"
        >
          <McIcon :name="isDark ? 'moon' : 'sun'" size="16" />
          <span class="hidden sm:inline font-pixel text-[9px]">
            {{ isDark ? 'NIGHT' : 'DAY' }}
          </span>
        </button>

        <!-- Mobile Menu Toggle Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen; playClick()"
          class="md:hidden mc-btn p-2 font-pixel text-xs"
          aria-label="Open Inventory Navigation"
        >
          {{ mobileMenuOpen ? 'X' : 'INV' }}
        </button>
      </div>

    </div>

    <!-- ── MOBILE HOTBAR / INVENTORY DROPDOWN ── -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden mt-2 p-3 border-y-4 border-black bg-stone-700 mx-3 shadow-xl"
      style="background-color: var(--mc-ui-bg);"
    >
      <div class="font-pixel text-[10px] text-center mb-2 pb-1 border-b-2 border-black" style="color: var(--mc-text-title);">
        NAVIGATION INVENTORY
      </div>
      <div class="grid grid-cols-5 gap-1.5">
        <a
          v-for="slot in navSlots"
          :key="slot.name"
          :href="`#${slot.name}`"
          @click.prevent="scrollTo(slot.name)"
          class="mc-hotbar-slot h-14 flex flex-col items-center justify-center p-1"
          :class="{ active: activeSection === slot.name }"
        >
          <McIcon :name="slot.icon" size="20" />
          <span class="font-pixel text-[7px] mt-1 text-center truncate w-full leading-none" :style="activeSection === slot.name ? 'color: #FCDB5C;' : 'color: #FFFFFF;'">
            {{ slot.label }}
          </span>
        </a>
      </div>
    </div>
  </header>
</template>
