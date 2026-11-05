<script setup>
import { ref } from 'vue'
import McIcon from './mc/McIcon.vue'
import { playPop, playClick } from '../utils/minecraftAudio'

defineProps({ skillsData: Object })

const activeSkill = ref(null)

const getCategoryIcon = (id) => {
  const map = {
    frontend: 'diamond',
    backend: 'redstone_dust',
    mobile: 'gold_ingot',
    tools: 'iron_ingot'
  }
  return map[id] || 'crafting_table'
}

const handleSkillHover = (skill) => {
  activeSkill.value = skill
  playPop()
}

const handleSkillLeave = () => {
  activeSkill.value = null
}
</script>

<template>
  <section id="skills" class="pt-2 reveal">
    <!-- Section Header (Minecraft HUD Style) -->
    <div class="flex items-baseline justify-between mb-5 flex-wrap gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1.5">
          <McIcon name="crafting_table" size="22" />
          <h2 class="font-pixel text-sm sm:text-base tracking-wider uppercase" style="color: var(--mc-gold);">
            TECH_ARSENAL // CRAFTING_TABLE
          </h2>
        </div>
        <p class="font-reading text-lg sm:text-xl" style="color: var(--mc-text-muted);">
          Software, programming languages, and system infrastructure in the active development inventory.
        </p>
      </div>

      <div class="flex items-center gap-1.5 font-pixel text-[10px] px-2.5 py-1 bg-black/40 border-2 border-black text-[#55FF55]">
        <McIcon name="xp_orb" size="14" />
        <span>LVL 26 ARSENAL</span>
      </div>
    </div>

    <!-- 4 Category Panels (Crafting Table Grid) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="(category, idx) in skillsData.categories"
        :key="category.id"
        class="mc-panel p-4 sm:p-5 flex flex-col justify-between"
      >
        <div>
          <!-- Category Header -->
          <div class="flex items-center justify-between mb-3 pb-2.5 border-b-2 border-black/30 font-pixel text-xs">
            <div class="flex items-center gap-2">
              <McIcon :name="getCategoryIcon(category.id)" size="18" />
              <h3 class="uppercase font-bold tracking-wider" style="color: var(--mc-text-heading);">
                {{ category.name }}
              </h3>
            </div>
            <span class="text-[10px]" style="color: var(--mc-text-muted);">
              [0{{ idx + 1 }}]
            </span>
          </div>

          <p class="font-reading text-base leading-snug mb-3.5" style="color: var(--mc-text-muted);">
            {{ category.description }}
          </p>

          <!-- Skills Grid (Inventory Slots) -->
          <div class="flex flex-wrap gap-2">
            <div
              v-for="(skill, sIdx) in category.skills"
              :key="sIdx"
              @mouseenter="handleSkillHover(skill)"
              @mouseleave="handleSkillLeave"
              @click="playClick"
              :class="[
                'mc-slot px-2.5 py-1.5 flex items-center gap-2 select-none transition-transform hover:-translate-y-0.5 cursor-pointer relative group',
                skill.badge === 'Primary' ? 'mc-enchanted ring-1 ring-[#BD3BEB]/50' : ''
              ]"
            >
              <!-- Primary Star Indicator -->
              <span v-if="skill.badge === 'Primary'" class="text-[10px] text-[#FCDB5C] font-bold">
                ★
              </span>
              <span v-else class="text-[10px] text-gray-500 font-bold">
                •
              </span>

              <span class="font-pixel text-[10px] text-white">
                {{ skill.name }}
              </span>

              <span
                v-if="skill.badge"
                class="font-pixel text-[8px] px-1 py-0.5 bg-[#BD3BEB] text-white shadow-sm"
              >
                {{ skill.badge }}
              </span>

              <!-- Minecraft Item Lore Tooltip -->
              <div
                class="mc-tooltip hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 text-left shadow-2xl z-50 pointer-events-none"
              >
                <!-- Item Name -->
                <div class="text-[#4AEDD9] font-pixel text-[11px] mb-1 font-bold">
                  {{ skill.name }}
                </div>

                <!-- Enchantment / Tier -->
                <div v-if="skill.badge === 'Primary'" class="text-[#D87093] font-pixel text-[9px] mb-1">
                  Enchanted: Primary Mastery I
                </div>

                <!-- Proficiency Level -->
                <div class="text-[#FCDB5C] font-pixel text-[9px] mb-1">
                  Proficiency: {{ skill.level }}
                </div>

                <!-- Lore / Detail -->
                <div class="font-reading text-sm text-[#CCCCCC] leading-tight pt-1 border-t border-[#331144]">
                  {{ skill.detail }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel Footer -->
        <div class="mt-4 pt-2 border-t border-black/20 flex items-center justify-between font-pixel text-[9px] text-[#888888]">
          <span>SLOTS: {{ category.skills.length }}</span>
          <span class="text-[#55FF55]">SYNCED</span>
        </div>
      </div>
    </div>
  </section>
</template>
