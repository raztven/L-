<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
const activeSection = ref('')
const currentTime = ref('')

const navLinks = [
  { id: 'proyek', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'tentang', label: 'About' },
  { id: 'sertifikasi', label: 'Certifications' },
  { id: 'kontak', label: 'Contact' }
]

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Jakarta',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }) + ' WIB (UTC+7)'
}

let timer = null

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = id
  }
  isMobileMenuOpen.value = false
}

let observer = null

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)

  // Intersection Observer for scroll spy
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-15% 0px -65% 0px' }
  )

  navLinks.forEach((link) => {
    const el = document.getElementById(link.id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
  if (observer) observer.disconnect()
})
</script>

<template>
  <header class="sticky top-0 z-40 bg-[#121214]/90 backdrop-blur-md border-b border-[#27272A] select-none">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Name Brand with Subtle Pulse -->
      <a 
        href="#" 
        @click.prevent="scrollTo('hero')"
        class="group flex items-center gap-2.5 font-display font-semibold text-sm text-white hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all shrink-0"
      >
        <span class="w-2 h-2 rounded-full bg-emerald-500 radar-dot"></span>
        <span class="hidden sm:inline">Farras Fadhil Hassan</span>
        <span class="sm:hidden">Farras</span>
      </a>

      <!-- Desktop Navigation Links (>= sm screens) -->
      <nav class="hidden sm:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollTo(link.id)"
          class="px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer relative"
          :class="activeSection === link.id 
            ? 'text-white font-medium bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.15)]' 
            : 'text-[#A1A1AA] hover:text-white hover:bg-white/10 hover:shadow-[0_0_10px_rgba(255,255,255,0.15)]'"
        >
          {{ link.label }}
        </button>

        <div class="w-[1px] h-4 bg-[#27272A] mx-1 sm:mx-2 hidden md:block"></div>

        <!-- Live Clock (WIB) for authentic personal developer touch -->
        <div class="hidden lg:flex items-center gap-1.5 text-xs text-[#71717A] font-mono px-2">
          <span>{{ currentTime }}</span>
        </div>
      </nav>

      <!-- Mobile Hamburger Button (< sm screens) -->
      <div class="flex sm:hidden items-center">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="p-2 rounded-md text-[#A1A1AA] hover:text-white hover:bg-[#18181B] transition-colors cursor-pointer"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <X v-if="isMobileMenuOpen" class="w-5 h-5 text-white" />
          <Menu v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Slide-Down Menu Drawer -->
    <div 
      v-if="isMobileMenuOpen" 
      class="sm:hidden border-t border-[#27272A] bg-[#121214]/98 backdrop-blur-xl px-4 py-3 space-y-1 animate-in slide-in-from-top-2 duration-200 shadow-2xl"
    >
      <button
        v-for="link in navLinks"
        :key="link.id"
        @click="scrollTo(link.id)"
        class="w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all cursor-pointer flex items-center justify-between"
        :class="activeSection === link.id 
          ? 'text-white font-medium bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.15)]' 
          : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'"
      >
        <span>{{ link.label }}</span>
        <span v-if="activeSection === link.id" class="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFF]"></span>
      </button>

      <div class="pt-2 border-t border-[#27272A] text-xs text-[#71717A] font-mono px-3 py-1 flex items-center justify-between">
        <span>Current Time:</span>
        <span>{{ currentTime }}</span>
      </div>
    </div>
  </header>
</template>
