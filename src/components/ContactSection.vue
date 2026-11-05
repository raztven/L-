<script setup>
import { ref } from 'vue'
import McIcon from './mc/McIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import { playClick, playPop, playAchievementChime } from '../utils/minecraftAudio'

const props = defineProps({ personal: Object })

const formData = ref({ name: '', email: '', message: '', botField: '' })
const isSubmitting = ref(false)
const submitted = ref(false)
const copied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText(props.personal.contact.email)
  copied.value = true
  playPop()
  setTimeout(() => copied.value = false, 2500)
}

const handleSubmit = () => {
  if (formData.value.botField) return
  if (!formData.value.name || !formData.value.email || !formData.value.message) return
  isSubmitting.value = true
  playClick()

  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true
    playAchievementChime()
    formData.value = { name: '', email: '', message: '', botField: '' }
    setTimeout(() => { submitted.value = false }, 6000)
  }, 700)
}
</script>

<template>
  <section id="contact" class="pt-2 reveal">
    <!-- Header -->
    <div class="flex items-baseline justify-between mb-5 flex-wrap gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1.5">
          <McIcon name="command_block" size="22" />
          <h2 class="font-pixel text-sm sm:text-base tracking-wider uppercase" style="color: var(--mc-gold);">
            CONTACT // CHAT &amp; COMMAND
          </h2>
        </div>
        <p class="font-reading text-lg sm:text-xl" style="color: var(--mc-text-muted);">
          Open for technical discussions, software engineering internships, collaborative initiatives, or consulting.
        </p>
      </div>

      <!-- Server Status Online Badge -->
      <div class="flex items-center gap-2 font-pixel text-[10px] px-3 py-1.5 bg-black/60 border-2 border-black text-[#55FF55] shadow-md">
        <span class="w-2.5 h-2.5 bg-[#55FF55] border border-black animate-pulse"></span>
        <span>SERVER: ONLINE // OPEN FOR INQUIRIES</span>
      </div>
    </div>

    <!-- 3 Contact Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
      <!-- Email Slot -->
      <div class="mc-panel p-4 flex flex-col justify-between">
        <div>
          <div class="font-pixel text-[9px] uppercase tracking-wider mb-2 text-[#FCDB5C] flex items-center gap-1.5">
            <span>// 01_EMAIL</span>
          </div>
          <div class="font-pixel text-[11px] mb-2 truncate text-white" :title="personal.contact.email">
            {{ personal.contact.email }}
          </div>
        </div>

        <button 
          @click="copyEmail" 
          class="mc-btn text-[10px] py-1.5 px-2.5 w-full mt-2"
          :class="copied ? 'bg-[#3B7A24]' : ''"
        >
          <span>{{ copied ? '[ COPIED! ]' : '[ COPY EMAIL ]' }}</span>
        </button>
      </div>

      <!-- GitHub Slot -->
      <a
        :href="personal.contact.github"
        target="_blank"
        rel="noopener noreferrer"
        @click="playClick"
        class="mc-panel p-4 flex flex-col justify-between group block transition-transform hover:-translate-y-0.5"
      >
        <div>
          <div class="font-pixel text-[9px] uppercase tracking-wider mb-2 text-[#4AEDD9] flex items-center gap-1.5">
            <span>// 02_GITHUB</span>
          </div>
          <div class="font-pixel text-xs mb-1 group-hover:text-[#FCDB5C] transition-colors text-white">
            @{{ personal.contact.githubUsername }}
          </div>
        </div>

        <div class="font-pixel text-[10px] text-gray-400 group-hover:text-white mt-3 flex items-center gap-1">
          <GithubIcon class="w-3.5 h-3.5" />
          <span>[ REPOSITORIES ↗ ]</span>
        </div>
      </a>

      <!-- LinkedIn Slot -->
      <a
        v-if="personal.contact.linkedin"
        :href="personal.contact.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        @click="playClick"
        class="mc-panel p-4 flex flex-col justify-between group block transition-transform hover:-translate-y-0.5"
      >
        <div>
          <div class="font-pixel text-[9px] uppercase tracking-wider mb-2 text-[#BD3BEB] flex items-center gap-1.5">
            <span>// 03_LINKEDIN</span>
          </div>
          <div class="font-pixel text-xs mb-1 group-hover:text-[#FCDB5C] transition-colors text-white">
            Farras Fadhil
          </div>
        </div>

        <div class="font-pixel text-[10px] text-gray-400 group-hover:text-white mt-3 flex items-center gap-1">
          <LinkedinIcon class="w-3.5 h-3.5" />
          <span>[ CONNECT ↗ ]</span>
        </div>
      </a>
    </div>

    <!-- Direct Dispatch Form (Command Block Interface) -->
    <div class="mc-panel p-4 sm:p-6">
      <!-- Command Block Header Bar -->
      <div class="flex items-center justify-between pb-3 mb-4 border-b-2 border-black/30 font-pixel text-xs">
        <div class="flex items-center gap-2">
          <McIcon name="command_block" size="18" />
          <span class="tracking-wider uppercase font-bold" style="color: var(--mc-text-heading);">
            DIRECT_DISPATCH // COMMAND_BLOCK
          </span>
        </div>
        <span class="text-[10px] text-[#FCDB5C] font-mono">
          /tell raztven &lt;message&gt;
        </span>
      </div>

      <!-- Success Toast Banner (Minecraft Achievement Style) -->
      <div
        v-if="submitted"
        class="mb-5 p-3.5 bg-black/80 border-2 border-[#55FF55] shadow-lg flex items-center gap-3"
      >
        <McIcon name="emerald" size="24" />
        <div>
          <div class="font-pixel text-[11px] text-[#55FF55] font-bold">
            [TRANSMISSION SENT]
          </div>
          <p class="font-reading text-lg text-white">
            Your message has been successfully dispatched to Farras Fadhil's inbox.
          </p>
        </div>
      </div>

      <!-- Form Inputs -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input type="text" v-model="formData.botField" class="hidden" tabindex="-1" autocomplete="off" />

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-pixel text-[10px] uppercase tracking-wider mb-1.5 text-gray-300">
              FULL NAME:
            </label>
            <input
              type="text"
              v-model="formData.name"
              required
              placeholder="e.g. Alex Steve"
              class="mc-input w-full"
            />
          </div>

          <div>
            <label class="block font-pixel text-[10px] uppercase tracking-wider mb-1.5 text-gray-300">
              EMAIL ADDRESS:
            </label>
            <input
              type="email"
              v-model="formData.email"
              required
              placeholder="user@domain.com"
              class="mc-input w-full"
            />
          </div>
        </div>

        <div>
          <label class="block font-pixel text-[10px] uppercase tracking-wider mb-1.5 text-gray-300">
            MESSAGE / INQUIRY:
          </label>
          <textarea
            v-model="formData.message"
            required
            rows="3"
            placeholder="Type your message, project brief, or collaboration proposal..."
            class="mc-input w-full resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="mc-btn mc-btn-primary w-full sm:w-auto text-xs py-2.5 px-6 disabled:opacity-50"
        >
          <McIcon name="redstone" size="16" />
          <span>{{ isSubmitting ? 'TRANSMITTING...' : '[ /EXECUTE // SEND MESSAGE ]' }}</span>
        </button>
      </form>
    </div>
  </section>
</template>
