<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(true)
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
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    html.classList.remove('light')
  } else {
    html.classList.remove('dark')
    html.classList.add('light')
  }
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
  <header class="sticky top-0 z-40 bg-[#121214]/85 backdrop-blur-md border-b border-[#27272A] select-none transition-colors duration-200">
    <div class="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
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

      <!-- Clean Navigation Links with Live Active Pill -->
      <nav class="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
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

        <!-- Theme Toggle Button -->
        <button
          @click="toggleTheme"
          class="p-1.5 rounded-md text-[#A1A1AA] hover:text-white hover:bg-[#18181B] transition-all duration-200 cursor-pointer ml-1"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Sun v-if="isDark" class="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
          <Moon v-else class="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform duration-300" />
        </button>
      </nav>
    </div>
  </header>
</template>
