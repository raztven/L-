<script setup>
import { ref } from 'vue'
import { Code2, Server, Smartphone, Cpu } from 'lucide-vue-next'

const stackGroups = [
  {
    id: 'frontend',
    category: 'Frontend Development',
    icon: Code2,
    description: 'Modern, reactive, and high-performance web user interfaces.',
    skills: [
      { name: 'Vue.js 3', desc: 'Composition API, Pinia, Vue Router', primary: true },
      { name: 'Tailwind CSS', desc: 'v3 & v4 Utility Architecture', primary: true },
      { name: 'JavaScript', desc: 'Modern ES6+, Async/Await, DOM', primary: false },
      { name: 'React.js', desc: 'Component Architecture & Hooks', primary: false },
      { name: 'Bootstrap 5', desc: 'Rapid Grid Prototyping', primary: false }
    ]
  },
  {
    id: 'backend',
    category: 'Backend & Database',
    icon: Server,
    description: 'Robust APIs, relational data integrity, and backend business logic.',
    skills: [
      { name: 'Laravel 11', desc: 'RESTful API, Eloquent ORM, MVC', primary: true },
      { name: 'Supabase', desc: 'PostgreSQL, Realtime DB, Auth & Storage', primary: true },
      { name: 'PHP 8+', desc: 'Object-Oriented Programming, PDO', primary: true },
      { name: 'MySQL', desc: 'Relational Schema Design & Indexing', primary: false },
      { name: 'Python', desc: 'Automation Scripts & Backend Tooling', primary: false }
    ]
  },
  {
    id: 'mobile',
    category: 'Mobile Native Android',
    icon: Smartphone,
    description: 'Native Android mobile development utilizing modern declarative paradigms.',
    skills: [
      { name: 'Kotlin', desc: 'Coroutines, StateFlow, Modern Idioms', primary: true },
      { name: 'Jetpack Compose', desc: 'Declarative UI, State Hoisting, Material 3', primary: true },
      { name: 'Room Database', desc: 'SQLite Local Storage (Offline-first)', primary: true },
      { name: 'Android SDK', desc: 'Lifecycle Architecture & Navigation', primary: false }
    ]
  },
  {
    id: 'tools',
    category: 'Tools & Architecture',
    icon: Cpu,
    description: 'Git workflows, UML system modeling, and microcontroller sensor integration.',
    skills: [
      { name: 'ESP32 IoT', desc: 'PJBL Smart Fertigation Sensors & MQTT', primary: true },
      { name: 'Clean Architecture', desc: 'Separation of Concerns & Modularity', primary: true },
      { name: 'Git & GitHub', desc: 'Branching, Collaboration, Version Control', primary: false },
      { name: 'UML Modeling', desc: 'Use Case, Activity, Sequence & Class Diagrams', primary: false }
    ]
  }
]
</script>

<template>
  <section id="stack" class="scroll-mt-24 py-12 border-t border-[#27272A] space-y-7">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div class="space-y-1">
        <h2 class="text-xl font-display font-bold text-white tracking-tight">
          Stack &amp; Toolchain
        </h2>
        <p class="text-xs sm:text-sm text-[#A1A1AA]">
          Programming languages, frameworks, and technologies I actively use in production projects.
        </p>
      </div>

      <!-- Core Technologies Pill List -->
      <div class="flex items-center gap-1.5 text-xs text-[#71717A] self-start sm:self-auto font-mono">
        <span class="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
        <span>White Dot = Primary Focus</span>
      </div>
    </div>

    <!-- 4 Clean Stack Grid Columns (Anti-Kotak: Clean Hairlines) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
      <div 
        v-for="group in stackGroups" 
        :key="group.id"
        class="space-y-3"
      >
        <div class="flex items-center gap-2.5 pb-2 border-b border-[#27272A]">
          <div class="text-sky-400">
            <component :is="group.icon" class="w-4 h-4" />
          </div>
          <div>
            <h3 class="font-display font-semibold text-sm sm:text-base text-white">
              {{ group.category }}
            </h3>
            <p class="text-[11px] text-[#A1A1AA]">
              {{ group.description }}
            </p>
          </div>
        </div>

        <ul class="space-y-1 text-xs sm:text-sm">
          <li 
            v-for="skill in group.skills" 
            :key="skill.name"
            class="group flex items-center justify-between gap-3 py-1.5 px-2 rounded-md hover:bg-white/[0.04] transition-all cursor-default"
          >
            <div class="flex items-center gap-2">
              <span 
                v-if="skill.primary" 
                class="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)] group-hover:shadow-[0_0_12px_rgba(255,255,255,1)] transition-all" 
                title="Primary Skill"
              ></span>
              <span 
                v-else 
                class="w-1.5 h-1.5 rounded-full bg-[#3F3F46] group-hover:bg-white/80 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all"
              ></span>

              <span 
                :class="skill.primary ? 'text-white font-medium' : 'text-[#D4D4D8]'"
                class="group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all"
              >
                {{ skill.name }}
              </span>
            </div>

            <span class="text-[11px] text-[#71717A] group-hover:text-zinc-300 text-right truncate font-mono transition-colors">
              {{ skill.desc }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
