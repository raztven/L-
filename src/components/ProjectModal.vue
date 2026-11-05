<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { ExternalLink } from '@lucide/vue'
import McIcon from './mc/McIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import { playClick, playPop } from '../utils/minecraftAudio'

const props = defineProps({ project: Object, isOpen: Boolean })
const emit = defineEmits(['close'])

const handleClose = () => {
  playClick()
  emit('close')
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') handleClose()
}

watch(() => props.isOpen, (val) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : ''
  }
  if (val) playPop()
})

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style="background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(4px);"
      @click.self="handleClose"
    >
      <div
        class="mc-panel relative w-full max-w-xl max-h-[88vh] flex flex-col shadow-2xl select-none"
      >
        <!-- Modal Top Bar (Minecraft Container Header) -->
        <div
          class="flex items-center justify-between px-4 sm:px-5 py-3 border-b-2 border-black/40 font-pixel text-xs bg-black/30"
        >
          <div class="flex items-center gap-2">
            <McIcon name="chest_open" size="18" />
            <span class="font-bold uppercase tracking-wider text-[#FCDB5C]">
              CHEST // {{ project.id }}
            </span>
          </div>
          
          <button
            @click="handleClose"
            class="mc-btn text-[9px] py-1 px-2"
            aria-label="Tutup"
          >
            [ESC / X]
          </button>
        </div>

        <!-- Modal Content Body (Scrollable Inventory Inspect) -->
        <div class="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          <div>
            <span class="font-pixel text-[10px] uppercase tracking-wider font-semibold text-[#4AEDD9]">
              {{ project.category }}
            </span>
            <h3 class="font-pixel text-base sm:text-lg font-bold tracking-tight mt-1" style="color: var(--mc-text-heading);">
              {{ project.title }}
            </h3>
            <p class="font-reading text-lg sm:text-xl text-gray-400 mt-0.5">
              {{ project.subtitle }}
            </p>
          </div>

          <!-- Summary Box -->
          <div class="mc-slot p-3.5 font-reading text-lg leading-relaxed text-gray-200">
            {{ project.summary }}
          </div>

          <!-- Competition / Badge Notice -->
          <div
            v-if="project.competition"
            class="p-2.5 bg-black/60 border-2 border-[#FCDB5C] font-pixel text-[10px] text-[#FCDB5C] flex items-center gap-2"
          >
            <McIcon name="trophy" size="16" />
            <span><strong>COMPETITION:</strong> {{ project.competition }} &bull; {{ project.subtheme }}</span>
          </div>
          <div
            v-else-if="project.badge"
            class="p-2.5 bg-black/60 border-2 border-gray-600 font-pixel text-[10px] text-gray-300"
          >
            <strong>STATUS:</strong> {{ project.subtheme || project.badge }}
          </div>

          <!-- Problem Context -->
          <div v-if="project.details?.problem">
            <h4 class="font-pixel text-[10px] font-bold uppercase tracking-wider mb-1 text-[#FCDB5C]">
              // 01_PROBLEM_CONTEXT
            </h4>
            <p class="font-reading text-lg text-gray-300 leading-snug">
              {{ project.details.problem }}
            </p>
          </div>

          <!-- Engineering Role -->
          <div v-if="project.details?.role">
            <h4 class="font-pixel text-[10px] font-bold uppercase tracking-wider mb-1 text-[#FCDB5C]">
              // 02_ENGINEERING_ROLE
            </h4>
            <p class="font-reading text-lg text-gray-300 leading-snug">
              {{ project.details.role }}
            </p>
          </div>

          <!-- Architectural Solution -->
          <div v-if="project.details?.solution">
            <h4 class="font-pixel text-[10px] font-bold uppercase tracking-wider mb-1 text-[#FCDB5C]">
              // 03_ARCHITECTURAL_SOLUTION
            </h4>
            <p class="font-reading text-lg text-gray-300 leading-snug">
              {{ project.details.solution }}
            </p>
          </div>

          <!-- Technical Highlights -->
          <div v-if="project.details?.highlights?.length">
            <h4 class="font-pixel text-[10px] font-bold uppercase tracking-wider mb-1.5 text-[#FCDB5C]">
              // 04_KEY_TECHNICAL_HIGHLIGHTS
            </h4>
            <ul class="space-y-1.5">
              <li
                v-for="(h, idx) in project.details.highlights"
                :key="idx"
                class="flex items-start gap-2 font-reading text-lg text-gray-300"
              >
                <span class="text-[#55FF55] font-pixel text-xs">+</span>
                <span>{{ h }}</span>
              </li>
            </ul>
          </div>

          <!-- Results Impact -->
          <div
            v-if="project.details?.results"
            class="mc-slot p-3 font-pixel text-[11px] text-white"
          >
            <div class="text-[#55FF55] mb-1 font-bold">// RESULT_IMPACT:</div>
            <p class="font-reading text-lg text-gray-200">
              {{ project.details.results }}
            </p>
          </div>

          <!-- Tech Stack Tags -->
          <div>
            <h4 class="font-pixel text-[10px] font-bold uppercase tracking-wider mb-2 text-gray-400">
              // ITEM_STACK_TAGS
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in project.tags"
                :key="t"
                class="mc-slot px-2 py-1 font-pixel text-[10px] text-[#4AEDD9]"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>

        <!-- Footer Actions Bar -->
        <div
          class="flex items-center justify-between px-4 sm:px-5 py-3 border-t-2 border-black/40 font-pixel text-xs bg-black/30"
        >
          <div class="flex items-center gap-2">
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click="playClick"
              class="mc-btn mc-btn-primary text-[10px] py-1.5 px-3"
            >
              <ExternalLink class="w-3 h-3" />
              <span>LIVE_DEMO</span>
            </a>

            <a
              v-if="project.repoUrl"
              :href="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click="playClick"
              class="mc-btn text-[10px] py-1.5 px-3"
            >
              <GithubIcon class="w-3 h-3" />
              <span>REPOSITORY</span>
            </a>
          </div>

          <button
            @click="handleClose"
            class="mc-btn text-[10px] py-1.5 px-3"
          >
            [CLOSE]
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
