<script setup>
import { ref, computed } from 'vue'
import { playClick, playPop } from '../utils/minecraftAudio'
import McIcon from './mc/McIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import ProjectModal from './ProjectModal.vue'

const props = defineProps({ projects: Array })

const selectedProject = ref(null)
const isModalOpen = ref(false)
const activeFilter = ref('All')
const hoveredChestId = ref(null)

const categories = ['All', 'Web Application', 'Mobile Application', 'IoT & AgriTech']

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return props.projects
  return props.projects.filter(p => p.category === activeFilter.value)
})

const openDetail = (project) => {
  playPop()
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  playClick()
  isModalOpen.value = false
  selectedProject.value = null
}

const setFilter = (cat) => {
  playClick()
  activeFilter.value = cat
}

const globalIndex = (project) => {
  return props.projects.findIndex(p => p.id === project.id)
}
</script>

<template>
  <section id="projects" class="pt-6 relative">
    
    <!-- Section Title Banner (Chest Collection) -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
      <div>
        <div class="flex items-center gap-2 font-pixel text-xs text-[#FCDB5C] mb-1">
          <McIcon name="chest" size="18" />
          <span>CHEST_COLLECTION // SELECTED_WORKS</span>
        </div>
        <h2 class="text-xl sm:text-2xl font-pixel tracking-tight" style="color: var(--mc-text-title);">
          FEATURED INVENTORY
        </h2>
      </div>

      <div class="font-pixel text-[10px] text-[#50C878] bg-black/30 px-3 py-1 border border-black">
        UNLOCKED: {{ filteredProjects.length }} / {{ projects.length }} PROJECTS
      </div>
    </div>

    <!-- ── CREATIVE INVENTORY TABS FILTER ── -->
    <div class="flex flex-wrap gap-1.5 mb-6 p-1.5 mc-slot bg-black/20">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="setFilter(cat)"
        class="mc-btn text-[9px] py-1.5 px-3"
        :class="{ 'mc-btn-primary active': activeFilter === cat }"
      >
        <span>{{ cat === 'All' ? 'ALL ITEMS' : cat.replace(' Application', '').toUpperCase() }}</span>
      </button>
    </div>

    <!-- ── PROJECTS LIST (CHEST & ACHIEVEMENT TOAST CARDS) ── -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(project, idx) in filteredProjects"
        :key="project.id"
        class="mc-panel p-4 flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1 mc-item-drop"
        :style="`animation-delay: ${idx * 60}ms;`"
        @mouseenter="hoveredChestId = project.id"
        @mouseleave="hoveredChestId = null"
        @click="openDetail(project)"
      >
        <div>
          <!-- Card Header (Chest Icon + Index + Achievement Badge) -->
          <div class="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b-2 border-black/30">
            
            <!-- Chest Icon (Toggles on hover to open chest) -->
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 mc-slot flex items-center justify-center shrink-0">
                <McIcon 
                  :name="hoveredChestId === project.id ? 'chest_open' : 'chest'" 
                  size="20" 
                />
              </div>
              <span class="font-pixel text-xs text-[#FCDB5C]">
                #{{ String(globalIndex(project) + 1).padStart(2, '0') }}
              </span>
            </div>

            <!-- Golden Achievement Badge -->
            <div v-if="project.competition" class="font-pixel text-[8px] bg-[#FCDB5C] text-black px-2 py-0.5 border border-black font-bold flex items-center gap-1 shadow-xs">
              <span>🏆 COMPETITION 2026</span>
            </div>
            <div v-else-if="project.badge" class="font-pixel text-[8px] bg-black/40 text-[#4AEDD9] px-2 py-0.5 border border-black">
              {{ project.badge }}
            </div>
          </div>

          <!-- Title -->
          <h3 class="font-pixel text-sm sm:text-base mb-1.5 text-[#2B2B2B] dark:text-white group-hover:text-[#50C878] transition-colors leading-snug">
            {{ project.title }}
          </h3>

          <div class="font-reading text-lg text-[#FCDB5C] font-bold mb-2">
            {{ project.subtitle }}
          </div>

          <!-- Summary -->
          <p class="font-reading text-lg sm:text-xl leading-relaxed mb-4 text-[#444444] dark:text-[#CCCCCC]">
            {{ project.summary }}
          </p>

          <!-- Tech Tags as Small Pixel Item Slots -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="font-pixel text-[8px] px-2 py-1 bg-black/40 border border-black text-[#4AEDD9]"
            >
              [{{ tag }}]
            </span>
          </div>
        </div>

        <!-- Action Row -->
        <div class="flex items-center justify-between pt-3 border-t-2 border-black/30 font-pixel text-[9px]">
          <button
            @click.stop="openDetail(project)"
            class="mc-btn py-1 px-2.5 text-[9px] text-[#FCDB5C]"
          >
            <span>CASE STUDY &rarr;</span>
          </button>

          <div class="flex items-center gap-2" @click.stop>
            <a
              v-if="project.repoUrl"
              :href="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click="playClick"
              class="mc-btn py-1 px-2 text-[8px]"
              title="View Source Code"
            >
              <GithubIcon class="w-3.5 h-3.5" />
              <span>SRC</span>
            </a>

            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click="playClick"
              class="mc-btn mc-btn-primary py-1 px-2 text-[8px]"
              title="Visit Live Demo"
            >
              <span>DEMO ↗</span>
            </a>
          </div>
        </div>

      </div>
    </div>

    <!-- Case Study Modal (Minecraft Dialog Container) -->
    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />

  </section>
</template>
