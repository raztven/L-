<script setup>
import { ref } from 'vue'
import McIcon from './mc/McIcon.vue'
import { playAchievementChime, playPop } from '../utils/minecraftAudio'

const props = defineProps({ certifications: Array })

const activeCert = ref(null)

const getAdvancementTier = (certId) => {
  if (certId === 'bnsp-rpl') return 'challenge'
  return 'goal'
}

const getAdvancementIcon = (certId) => {
  if (certId === 'bnsp-rpl') return 'emerald'
  return 'sword'
}

const handleCertClick = (cert) => {
  activeCert.value = cert.id
  playAchievementChime()
}
</script>

<template>
  <section id="certifications" class="pt-2 reveal">
    <!-- Header -->
    <div class="flex items-baseline justify-between mb-5 flex-wrap gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1.5">
          <McIcon name="trophy" size="22" />
          <h2 class="font-pixel text-sm sm:text-base tracking-wider uppercase" style="color: var(--mc-gold);">
            CERTS // ADVANCEMENTS TREE
          </h2>
        </div>
        <p class="font-reading text-lg sm:text-xl" style="color: var(--mc-text-muted);">
          National BNSP competency certifications, production system profiling, and debugging mastery.
        </p>
      </div>

      <div class="flex items-center gap-1.5 font-pixel text-[10px] px-2.5 py-1 bg-black/40 border-2 border-black text-[#FCDB5C]">
        <McIcon name="emerald" size="14" />
        <span>{{ certifications.length }} / {{ certifications.length }} UNLOCKED</span>
      </div>
    </div>

    <!-- Advancements Display Window (Minecraft GUI Style) -->
    <div class="mc-panel p-4 sm:p-6 relative overflow-hidden">
      <!-- Window Title Tab -->
      <div class="flex items-center justify-between pb-3 mb-5 border-b-2 border-black/30 font-pixel text-xs">
        <div class="flex items-center gap-2">
          <span class="text-[#FCDB5C]">★</span>
          <span class="uppercase tracking-wider font-bold" style="color: var(--mc-text-heading);">
            ADVANCEMENT TREE: SOFTWARE_ENGINEERING
          </span>
        </div>
        <span class="text-[10px] text-[#55FF55] hidden sm:inline">
          100% COMPLETE
        </span>
      </div>

      <!-- Tree Nodes Container -->
      <div class="space-y-4 relative">
        <!-- Connecting Tree Branch Guide (Visual Minecraft Stem) -->
        <div class="hidden sm:block absolute left-[29px] top-6 bottom-6 w-1 bg-black/40 border-r border-white/20 z-0"></div>

        <div
          v-for="cert in certifications"
          :key="cert.id"
          @mouseenter="playPop"
          @click="handleCertClick(cert)"
          :class="[
            'mc-advancement-card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-4 relative z-10 cursor-pointer',
            activeCert === cert.id ? 'ring-2 ring-[#FCDB5C]' : ''
          ]"
        >
          <!-- Advancement Icon Frame (Minecraft Challenge / Goal / Task) -->
          <div
            :class="[
              'mc-advancement-icon-frame',
              getAdvancementTier(cert.id)
            ]"
          >
            <McIcon :name="getAdvancementIcon(cert.id)" size="24" />
          </div>

          <!-- Advancement Content -->
          <div class="flex-1 min-w-0">
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="font-pixel text-xs sm:text-sm font-bold tracking-tight" style="color: var(--mc-text-heading);">
                  {{ cert.title }}
                </h3>
                <span
                  v-if="cert.badge"
                  :class="[
                    'font-pixel text-[8px] px-1.5 py-0.5 border border-black',
                    getAdvancementTier(cert.id) === 'challenge' ? 'bg-[#BD3BEB] text-white' : 'bg-[#B88748] text-white'
                  ]"
                >
                  {{ cert.badge }}
                </span>
              </div>

              <span class="font-pixel text-[10px] text-[#FCDB5C] shrink-0">
                {{ cert.date }}
              </span>
            </div>

            <!-- Issuer & Status -->
            <div class="flex flex-wrap items-center gap-2 font-pixel text-[10px] mb-2 text-gray-400">
              <span class="text-white">{{ cert.issuer }}</span>
              <span>&bull;</span>
              <span class="text-[#55FF55] font-bold">
                {{ cert.status }}
              </span>
            </div>

            <!-- Description -->
            <p class="font-reading text-base sm:text-lg leading-snug mb-3" style="color: var(--mc-text-muted);">
              {{ cert.description }}
            </p>

            <!-- Skills List -->
            <div v-if="cert.skills?.length" class="flex flex-wrap gap-1.5">
              <span
                v-for="(sk, sIdx) in cert.skills"
                :key="sIdx"
                class="font-pixel text-[9px] px-2 py-0.5 bg-black/50 text-[#4AEDD9] border border-black/60"
              >
                + {{ sk }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
