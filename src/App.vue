<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import AboutSection from './components/AboutSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import ParticleCanvas from './components/ParticleCanvas.vue'
import { Check } from 'lucide-vue-next'

// Mouse spotlight tracking
const mousePos = ref({ x: -1000, y: -1000 })
const onMouseMove = (e) => {
  mousePos.value = { x: e.clientX, y: e.clientY }
}

// Scroll progress percentage
const scrollProgress = ref(0)
const onScroll = () => {
  const total = document.documentElement.scrollHeight - window.innerHeight
  if (total > 0) {
    scrollProgress.value = (window.scrollY / total) * 100
  }
}

// Global Toast Notification
const toastMessage = ref('')
const toastVisible = ref(false)
let toastTimeout = null

const showNotification = (msg) => {
  if (toastTimeout) clearTimeout(toastTimeout)
  toastMessage.value = msg
  toastVisible.value = true
  toastTimeout = setTimeout(() => {
    toastVisible.value = false
  }, 3500)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('scroll', onScroll)
  if (toastTimeout) clearTimeout(toastTimeout)
})
</script>

<template>
  <div class="min-h-screen bg-[#121214] text-[#F4F4F5] selection:bg-white/20 selection:text-white relative">
    <!-- Top Hairline Scroll Progress Bar -->
    <div 
      class="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-white via-zinc-200 to-white/70 z-50 transition-all duration-75 pointer-events-none shadow-[0_0_8px_rgba(255,255,255,0.7)]"
      :style="{ width: `${scrollProgress}%` }"
    ></div>

    <!-- Interactive Glowing White Particle Canvas -->
    <ParticleCanvas />

    <!-- Pure White Subtle Ambient Mouse Spotlight -->
    <div 
      class="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500 opacity-60 hidden md:block"
      :style="{
        background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.055), transparent 65%)`
      }"
    ></div>

    <!-- Minimalist Sticky Navbar -->
    <Navbar />

    <!-- Main Single-Column Content Stream -->
    <main class="max-w-3xl mx-auto px-6 relative z-10">
      <!-- 01 Hero -->
      <Hero 
        :personal="portfolioData.personal" 
        @notify="showNotification"
      />

      <!-- 02 Projects with Interactive Filter -->
      <ProjectsSection 
        :projects="portfolioData.projects" 
      />

      <!-- 03 Tech Stack -->
      <TechStackSection />

      <!-- 04 About & Interactive Passions -->
      <AboutSection 
        :about="portfolioData.about" 
      />

      <!-- 05 Certifications -->
      <CertificationsSection 
        :certifications="portfolioData.certifications" 
      />

      <!-- 06 Contact Form & Direct Links -->
      <ContactSection 
        :personal="portfolioData.personal" 
        @notify="showNotification"
      />

      <!-- 07 Footer -->
      <Footer />
    </main>

    <!-- Tactile Toast Notification -->
    <div 
      v-if="toastVisible"
      class="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 px-4 py-3 rounded-lg bg-[#18181B] border border-white/30 text-white text-xs sm:text-sm shadow-[0_0_25px_rgba(255,255,255,0.15)] flex items-center gap-2.5 animate-in slide-in-from-bottom-3 duration-200 select-none"
    >
      <div class="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <Check class="w-3.5 h-3.5" />
      </div>
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>
