<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import JournalSection from './components/JournalSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import KonamiEgg from './components/mc/KonamiEgg.vue'
import McIcon from './components/mc/McIcon.vue'

const isDark = ref(true)

// Realtime Clock
const clock = ref('')
let clockTimer = null

const updateClock = () => {
  const now = new Date()
  const h = String(now.getHours()).padStart(2, '0')
  const m = String(now.getMinutes()).padStart(2, '0')
  const s = String(now.getSeconds()).padStart(2, '0')
  clock.value = `${h}:${m}:${s} WIB`
}

const applyTheme = (dark) => {
  if (dark) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = true
  }
  applyTheme(isDark.value)

  updateClock()
  clockTimer = setInterval(updateClock, 1000)

  // Intersection Observer for section reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.05 }
  )
  
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }, 100)
})

onUnmounted(() => {
  if (clockTimer) clearInterval(clockTimer)
})
</script>

<template>
  <div class="min-h-screen relative overflow-x-hidden">
    <!-- Parallax Pixel Background Layers (Day Clouds / Night Stars) -->
    <div class="mc-sky-backdrop">
      <div class="mc-pixel-cloud-layer"></div>
      <div class="mc-pixel-star-layer"></div>
    </div>

    <!-- Konami Code Easter Egg (Blocks Rain & Achievement) -->
    <KonamiEgg />

    <!-- Top Minecraft Debug / F3 Status Strip -->
    <div 
      class="relative z-20 border-b-2 border-black/40 font-pixel text-[10px] select-none" 
      style="background-color: var(--mc-header-bg);"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-7 text-gray-300">
        <div class="flex items-center gap-2 sm:gap-3">
          <span class="inline-flex items-center gap-1.5 text-[#55FF55] font-bold">
            <span class="w-2 h-2 bg-[#55FF55] border border-black animate-pulse"></span>
            WORLD: OVERWORLD
          </span>
          <span class="text-gray-500">//</span>
          <span class="hidden sm:inline text-[#FCDB5C]">SEED: 2026.TRPL</span>
          <span class="hidden md:inline text-gray-400">XYZ: -5.397 / 64.0 / 105.266</span>
        </div>

        <div class="flex items-center gap-3">
          <span class="hidden sm:inline text-gray-400">FPS: 60 (STABLE)</span>
          <span class="text-white font-bold tabular-nums">{{ clock }}</span>
        </div>
      </div>
    </div>

    <!-- Navigation Bar (Hotbar) -->
    <Navbar
      :is-dark="isDark"
      @toggle-theme="toggleTheme"
    />

    <!-- Main Content Container -->
    <main class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-20 space-y-12 sm:space-y-16">
      <HeroSection :personal="portfolioData.personal" />

      <hr class="mc-divider" />
      <ProjectsSection :projects="portfolioData.projects" />

      <hr class="mc-divider" />
      <TechStackSection :skills-data="portfolioData.skills" />

      <hr class="mc-divider" />
      <AboutSection :about="portfolioData.about" :personal="portfolioData.personal" />

      <hr class="mc-divider" />
      <CertificationsSection :certifications="portfolioData.certifications" />

      <hr class="mc-divider" />
      <JournalSection :journals="portfolioData.journals" />

      <hr class="mc-divider" />
      <ContactSection :personal="portfolioData.personal" />
    </main>

    <!-- Strata Layer Footer -->
    <Footer :personal="portfolioData.personal" />
  </div>
</template>
