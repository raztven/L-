<script setup>
import { ref, computed } from 'vue'
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-vue-next'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const currentFilter = ref('all')
const expandedId = ref(null)

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Application' },
  { id: 'mobile', label: 'Mobile Native' },
  { id: 'iot', label: 'IoT & AgriTech' }
]

const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') return props.projects
  return props.projects.filter(p => p.categoryFilter === currentFilter.value)
})

const toggleExpand = (id) => {
  expandedId.value = expandedId.value === id ? null : id
}
</script>

<template>
  <section id="proyek" class="scroll-mt-24 py-12 border-t border-[#27272A] space-y-7">
    <!-- Section Header & Filter Pills -->
    <div class="space-y-4">
      <div class="space-y-1">
        <h2 class="text-xl font-display font-bold text-white tracking-tight flex items-center gap-2">
          <span>Featured Projects</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-[#18181B] text-[#A1A1AA] border border-[#27272A] font-mono font-normal">
            {{ filteredProjects.length }}
          </span>
        </h2>
        <p class="text-xs sm:text-sm text-[#A1A1AA]">
          Modern web applications, native Android mobile systems, and IoT hardware integration.
        </p>
      </div>

      <!-- Clean Individual Filter Pills -->
      <div class="flex flex-wrap items-center gap-2 pt-1">
        <button
          v-for="f in filters"
          :key="f.id"
          @click="currentFilter = f.id"
          class="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer"
          :class="currentFilter === f.id
            ? 'bg-white text-[#121214] font-semibold shadow-[0_0_18px_rgba(255,255,255,0.4)]'
            : 'bg-[#18181B] text-[#A1A1AA] hover:text-white hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_14px_rgba(255,255,255,0.2)] border border-[#27272A]'"
        >
          {{ f.label }}
        </button>
      </div>
    </div>

    <!-- Project List -->
    <div class="space-y-6 divide-y divide-[#27272A]">
      <article
        v-for="project in filteredProjects"
        :key="project.id"
        class="pt-6 first:pt-0 space-y-4 group transition-colors duration-200"
      >
        <!-- Title & Category Header -->
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div class="flex flex-wrap items-center gap-2.5">
            <h3 class="text-base sm:text-lg font-display font-semibold text-white group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all">
              {{ project.title }}
            </h3>
            <span class="text-xs text-[#71717A] font-mono">
              &middot; {{ project.category }}
            </span>
            <span v-if="project.demoUrl" class="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 radar-dot"></span>
              <span>Live Demo</span>
            </span>
          </div>

          <span 
            v-if="project.badge" 
            class="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-medium self-start sm:self-auto"
          >
            {{ project.badge }}
          </span>
        </div>

        <!-- Summary -->
        <p class="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
          {{ project.summary }}
        </p>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-1.5 pt-0.5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="clean-tag"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Links & Toggle Accordion Row -->
        <div class="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm pt-1">
          <div class="flex items-center gap-3 sm:gap-4">
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group/link inline-flex items-center gap-1 text-white font-medium hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all py-1"
            >
              <span>Live Demo</span>
              <ArrowUpRight class="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>

            <a
              v-if="project.repoUrl"
              :href="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group/link inline-flex items-center gap-1 text-[#A1A1AA] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all py-1"
            >
              <span>Repository</span>
              <ArrowUpRight class="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>

          <button
            @click="toggleExpand(project.id)"
            class="text-xs text-[#A1A1AA] hover:text-white hover:border-white/50 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all cursor-pointer flex items-center gap-1 px-2.5 py-1 rounded bg-[#18181B] hover:bg-white/10 border border-[#27272A]"
          >
            <span>{{ expandedId === project.id ? 'Close Overview' : 'Read Details' }}</span>
            <ChevronUp v-if="expandedId === project.id" class="w-3.5 h-3.5" />
            <ChevronDown v-else class="w-3.5 h-3.5" />
          </button>
        </div>

        <!-- Smooth Collapsible Details -->
        <div 
          v-if="expandedId === project.id" 
          class="p-5 rounded-lg bg-[#18181B] border border-[#27272A] text-xs sm:text-sm space-y-4 text-[#D4D4D8] mt-3 animate-in fade-in duration-200"
        >
          <div v-if="project.details?.problem" class="space-y-1">
            <strong class="text-white block font-medium">Background &amp; Problem:</strong>
            <p class="text-[#A1A1AA] leading-relaxed">{{ project.details.problem }}</p>
          </div>

          <div v-if="project.details?.solution" class="space-y-1">
            <strong class="text-white block font-medium">Solution &amp; Technical Approach:</strong>
            <p class="text-[#A1A1AA] leading-relaxed">{{ project.details.solution }}</p>
          </div>

          <div v-if="project.details?.highlights?.length" class="space-y-1.5">
            <strong class="text-white block font-medium">Key Highlights:</strong>
            <ul class="space-y-1 text-[#A1A1AA]">
              <li 
                v-for="(hl, i) in project.details.highlights" 
                :key="i"
                class="flex items-start gap-2"
              >
                <span class="text-sky-400 font-bold select-none">&bull;</span>
                <span>{{ hl }}</span>
              </li>
            </ul>
          </div>

          <div v-if="project.details?.results" class="pt-2 border-t border-[#27272A]/80 text-emerald-400 flex items-baseline gap-2">
            <strong class="text-emerald-300 shrink-0">Results &amp; Impact:</strong>
            <span>{{ project.details.results }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
