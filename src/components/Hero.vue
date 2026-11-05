<script setup>
import { ref } from 'vue'
import { ArrowUpRight, Copy, Check, MapPin, GraduationCap, Award, Layers } from 'lucide-vue-next'

const props = defineProps({
  personal: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['notify'])

const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(props.personal.contact.email)
    copied.value = true
    emit('notify', 'Email address copied to clipboard! ✓')
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}

const stats = [
  {
    id: 'loc',
    label: 'Location',
    value: 'Bandar Lampung, ID',
    subtext: 'Indonesia (WIB / UTC+7)',
    icon: MapPin
  },
  {
    id: 'edu',
    label: 'Education',
    value: 'Polinela TRPL \'26',
    subtext: 'B.App.Sc in Software Engineering',
    icon: GraduationCap
  },
  {
    id: 'cert',
    label: 'Credential',
    value: 'BNSP Certified RPL',
    subtext: 'National Professional Standard',
    icon: Award
  },
  {
    id: 'work',
    label: 'Portfolio',
    value: '6+ Proven Projects',
    subtext: 'Web, Mobile & Smart IoT',
    icon: Layers
  }
]
</script>

<template>
  <section id="hero" class="scroll-mt-24 pt-10 sm:pt-14 pb-8 space-y-7">
    <!-- Header: Avatar Initial & Identity -->
    <div class="flex items-center gap-4">
      <div 
        class="relative group cursor-pointer"
        title="Farras Fadhil Hassan (raztven)"
      >
        <div class="w-14 h-14 rounded-full bg-[#18181B] border border-[#27272A] flex items-center justify-center font-display font-bold text-lg text-white group-hover:border-white/70 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-all duration-300 shadow-sm">
          FH
        </div>
        <span class="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#121214] radar-dot"></span>
      </div>

      <div class="space-y-0.5">
        <h1 class="text-xl sm:text-2xl font-display font-bold text-white tracking-tight flex flex-wrap items-center gap-2">
          <span class="hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all">Farras Fadhil Hassan</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-[#18181B] border border-[#27272A] text-[#A1A1AA] font-mono font-normal">
            raztven
          </span>
        </h1>
        <p class="text-xs sm:text-sm text-[#A1A1AA]">
          Web Developer &amp; Native Android Engineer
        </p>
      </div>
    </div>

    <!-- Authentic Human Narrative -->
    <div class="space-y-3.5 text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
      <p>
        Hello! I am an undergraduate student in <strong class="text-white font-medium">Software Engineering Technology (D4)</strong> at Lampung State Polytechnic (Polinela, Class of 2026) and a vocational graduate of <span class="text-white font-medium">SMK Negeri 3 Metro</span> (Software Engineering).
      </p>

      <p>
        I focus on engineering high-performance modern web architectures using <span class="text-white font-medium">Laravel, Supabase, Vue 3, and Tailwind CSS</span>, as well as native Android applications with <span class="text-white font-medium">Kotlin and Jetpack Compose</span>.
      </p>
    </div>

    <!-- Real-time Status Indicator -->
    <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#A1A1AA]">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-[#D4D4D8]">
        <span class="w-2 h-2 rounded-full bg-emerald-500 radar-dot"></span>
        <span>Open for internships &amp; project collaborations</span>
      </div>

      <span class="text-[#3F3F46] hidden sm:inline">&middot;</span>

      <span class="text-[#71717A] hidden sm:inline">
        Bandar Lampung, Indonesia
      </span>
    </div>

    <!-- Anti-Kotak: Clean Editorial 4 Spec Strip (No Card Boxes) -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-5 border-y border-[#27272A]">
      <div 
        v-for="item in stats" 
        :key="item.id" 
        class="space-y-1 group cursor-default transition-all"
      >
        <div class="flex items-center gap-1.5 text-[#71717A] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] text-[11px] font-mono uppercase tracking-wider transition-all">
          <component :is="item.icon" class="w-3.5 h-3.5 opacity-80" />
          <span>{{ item.label }}</span>
        </div>
        <div class="text-sm sm:text-base font-semibold text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] font-display transition-all break-words">
          {{ item.value }}
        </div>
        <div class="text-xs text-[#A1A1AA] group-hover:text-zinc-200 leading-tight transition-colors break-words">
          {{ item.subtext }}
        </div>
      </div>
    </div>

    <!-- Tactile Action Links -->
    <div class="flex flex-wrap items-center gap-3 pt-1 text-sm">
      <button 
        @click="copyEmail" 
        class="clean-btn"
        :title="personal.contact.email"
      >
        <Check v-if="copied" class="w-4 h-4 text-emerald-400" />
        <Copy v-else class="w-4 h-4" />
        <span>{{ copied ? 'Copied! ✓' : 'Copy Email' }}</span>
      </button>

      <a 
        :href="`mailto:${personal.contact.email}`"
        class="clean-btn-secondary"
      >
        Send Email
      </a>

      <a 
        :href="personal.contact.github" 
        target="_blank" 
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-1 text-xs sm:text-sm text-[#A1A1AA] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all py-2 px-2"
      >
        <span>GitHub</span>
        <ArrowUpRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      <a 
        :href="personal.contact.linkedin" 
        target="_blank" 
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-1 text-xs sm:text-sm text-[#A1A1AA] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all py-2 px-2"
      >
        <span>LinkedIn</span>
        <ArrowUpRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  </section>
</template>
