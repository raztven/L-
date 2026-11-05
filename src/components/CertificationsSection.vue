<script setup>
import { CheckCircle2, ShieldCheck } from 'lucide-vue-next'

const props = defineProps({
  certifications: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="sertifikasi" class="scroll-mt-24 py-12 border-t border-[#27272A] space-y-7">
    <div class="space-y-1">
      <h2 class="text-xl font-display font-bold text-white tracking-tight flex items-center gap-2">
        <span>Certifications &amp; Achievements</span>
        <ShieldCheck class="w-5 h-5 text-emerald-400" />
      </h2>
      <p class="text-xs sm:text-sm text-[#A1A1AA]">
        Verified professional competency standards, technical deep-dives, and engineering credentials.
      </p>
    </div>

    <!-- Credentials (Anti-Kotak: Clean Hairline Rows) -->
    <div class="space-y-0 divide-y divide-[#27272A]">
      <div
        v-for="cert in certifications"
        :key="cert.id"
        class="py-5 first:pt-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
      >
        <div class="space-y-2">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="font-display font-semibold text-white text-sm sm:text-base group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all">
              {{ cert.title }}
            </h3>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium group-hover:border-emerald-400/50 transition-colors">
              {{ cert.badge }}
            </span>
          </div>

          <p class="text-xs text-[#A1A1AA]">
            {{ cert.issuer }}
          </p>

          <p class="text-xs text-[#71717A] leading-relaxed max-w-xl">
            {{ cert.description }}
          </p>

          <!-- Skills Chips for Certifications -->
          <div v-if="cert.skills?.length" class="flex flex-wrap gap-1.5 pt-1">
            <span
              v-for="skill in cert.skills"
              :key="skill"
              class="clean-tag"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="flex sm:flex-col items-center sm:items-end justify-between gap-1 shrink-0 text-xs">
          <span class="text-emerald-400 font-medium flex items-center gap-1">
            <CheckCircle2 class="w-3.5 h-3.5" />
            <span>Verified</span>
          </span>
          <span class="text-[#71717A] font-mono text-[11px]">
            {{ cert.date }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
