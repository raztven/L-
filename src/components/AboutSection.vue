<script setup>
import { ref } from 'vue'
import { TrendingUp, Coffee, Dumbbell, Sparkles, Footprints, GraduationCap } from 'lucide-vue-next'

const props = defineProps({
  about: {
    type: Object,
    required: true
  }
})

const iconMap = {
  TrendingUp,
  Coffee,
  Dumbbell,
  Sparkles,
  Footprints
}

const activeInterestIndex = ref(0)
</script>

<template>
  <section id="tentang" class="scroll-mt-24 py-12 border-t border-[#27272A] space-y-9">
    <div class="space-y-1">
      <h2 class="text-xl font-display font-bold text-white tracking-tight">
        About Me
      </h2>
      <p class="text-xs sm:text-sm text-[#A1A1AA]">
        Vocational engineering foundation, software craftsmanship, and passions beyond code.
      </p>
    </div>

    <!-- Narrative Story -->
    <div class="space-y-3.5 text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
      <p v-for="(p, i) in about.story" :key="i">
        {{ p }}
      </p>
    </div>

    <!-- Education Timeline (Anti-Kotak: Clean Hairline Rows) -->
    <div class="pt-6 border-t border-[#27272A] space-y-4">
      <div class="flex items-center gap-2 text-white font-display font-semibold text-sm sm:text-base">
        <GraduationCap class="w-4 h-4 text-sky-400" />
        <span>Education History</span>
      </div>

      <div class="space-y-0 divide-y divide-[#27272A]">
        <div 
          v-for="edu in about.education" 
          :key="edu.institution"
          class="group py-4 px-2 -mx-2 rounded-lg hover:bg-white/[0.03] transition-all flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
        >
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <h4 class="font-display font-semibold text-white group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] text-sm sm:text-base transition-all">
                {{ edu.institution }}
              </h4>
              <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#18181B] text-[#A1A1AA] border border-[#27272A] group-hover:border-white/40 transition-colors">
                {{ edu.badge }}
              </span>
            </div>
            <p class="text-xs text-[#A1A1AA] group-hover:text-zinc-200 transition-colors">
              {{ edu.degree }}
            </p>
            <p class="text-xs text-[#71717A] pt-0.5 leading-relaxed">
              {{ edu.description }}
            </p>
          </div>

          <span class="text-xs text-[#A1A1AA] font-mono shrink-0 self-start sm:self-auto">
            {{ edu.period }}
          </span>
        </div>
      </div>
    </div>

    <!-- Interactive "Beyond Code" (Interactive Passion Explorer) -->
    <div class="pt-6 border-t border-[#27272A] space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div class="flex items-center gap-2 text-white font-display font-semibold text-sm sm:text-base">
          <Sparkles class="w-4 h-4 text-amber-400" />
          <span>Beyond Code (Exploration &amp; Passions)</span>
        </div>
        <span class="text-xs text-[#71717A]">
          Select a topic to explore details:
        </span>
      </div>

      <!-- Interactive Pills with Bright White Glow -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(item, idx) in about.interests"
          :key="item.title"
          @click="activeInterestIndex = idx"
          class="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5"
          :class="activeInterestIndex === idx
            ? 'bg-white text-[#121214] font-semibold shadow-[0_0_18px_rgba(255,255,255,0.4)]'
            : 'bg-[#18181B] text-[#A1A1AA] hover:text-white hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] border border-[#27272A]'"
        >
          <component :is="iconMap[item.icon]" class="w-3.5 h-3.5" />
          <span>{{ item.title.split('&')[0].trim() }}</span>
        </button>
      </div>

      <!-- Active Passion Detail Note -->
      <div 
        v-if="about.interests[activeInterestIndex]"
        class="p-4 sm:p-5 rounded-lg bg-[#18181B] border border-[#27272A] space-y-2 animate-in fade-in duration-200"
      >
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
          <div class="flex items-center gap-2">
            <component 
              :is="iconMap[about.interests[activeInterestIndex].icon]" 
              class="w-4 h-4 text-sky-400 shrink-0" 
            />
            <h4 class="font-display font-semibold text-sm sm:text-base text-white">
              {{ about.interests[activeInterestIndex].title }}
            </h4>
          </div>
          <span class="text-[11px] font-mono text-[#71717A] tracking-wider uppercase shrink-0">
            {{ about.interests[activeInterestIndex].category }}
          </span>
        </div>

        <p class="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed pt-1">
          {{ about.interests[activeInterestIndex].description }}
        </p>
      </div>
    </div>
  </section>
</template>
