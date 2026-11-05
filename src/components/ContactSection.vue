<script setup>
import { ref } from 'vue'
import { Send, Check, Mail, Copy } from 'lucide-vue-next'

const props = defineProps({
  personal: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['notify'])

const form = ref({
  name: '',
  email: '',
  topic: 'Internship Inquiry',
  message: ''
})

const quickTopics = [
  'Internship Inquiry',
  'Web / Mobile Project',
  'IoT Collaboration',
  'Casual Chat'
]

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const selectTopic = (topic) => {
  form.value.topic = topic
}

const handleSend = () => {
  if (!form.value.name || !form.value.email || !form.value.message) return
  isSubmitting.value = true

  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    emit('notify', 'Your message has been sent successfully! Thank you for reaching out.')
    form.value = { name: '', email: '', topic: 'Internship Inquiry', message: '' }
    setTimeout(() => {
      isSubmitted.value = false
    }, 5000)
  }, 750)
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(props.personal.contact.email)
    emit('notify', 'Email address copied to clipboard! ✓')
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <section id="kontak" class="scroll-mt-24 py-12 border-t border-[#27272A] space-y-7">
    <div class="space-y-1">
      <h2 class="text-xl font-display font-bold text-white tracking-tight">
        Contact &amp; Collaboration
      </h2>
      <p class="text-xs sm:text-sm text-[#A1A1AA]">
        Have a project idea, internship opportunity, or just want to discuss software engineering?
      </p>
    </div>

    <!-- Direct Email Row -->
    <div class="py-3 border-y border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
      <div class="flex items-center gap-2.5 min-w-0">
        <Mail class="w-4 h-4 text-sky-400 shrink-0" />
        <span class="text-[#D4D4D8] truncate sm:overflow-visible">
          Direct email: 
          <a :href="`mailto:${personal.contact.email}`" class="text-white font-medium hover:underline break-all sm:break-normal">
            {{ personal.contact.email }}
          </a>
        </span>
      </div>

      <button
        @click="copyEmail"
        class="text-xs px-3 py-1.5 rounded-md bg-[#18181B] hover:bg-white/10 text-[#A1A1AA] hover:text-white border border-[#27272A] hover:border-white/50 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all cursor-pointer flex items-center gap-1.5 self-start sm:self-auto shrink-0"
      >
        <Copy class="w-3.5 h-3.5" />
        <span>Copy Address</span>
      </button>
    </div>

    <!-- Interactive Contact Form -->
    <form @submit.prevent="handleSend" class="space-y-4 pt-1">
      <!-- Quick Topic Pill Selection -->
      <div class="space-y-1.5">
        <label class="block text-xs text-[#A1A1AA]">
          Select Discussion Topic:
        </label>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="t in quickTopics"
            :key="t"
            type="button"
            @click="selectTopic(t)"
            class="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer"
            :class="form.topic === t 
              ? 'bg-white text-[#121214] font-semibold shadow-[0_0_18px_rgba(255,255,255,0.4)]' 
              : 'bg-[#18181B] text-[#A1A1AA] hover:text-white hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] border border-[#27272A]'"
          >
            {{ t }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="space-y-1">
          <label class="block text-xs text-[#A1A1AA]">
            Full Name
          </label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="e.g. Raditya"
            class="clean-input"
          />
        </div>

        <div class="space-y-1">
          <label class="block text-xs text-[#A1A1AA]">
            Email Address
          </label>
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="name@email.com"
            class="clean-input"
          />
        </div>
      </div>

      <div class="space-y-1">
        <label class="block text-xs text-[#A1A1AA]">
          Message
        </label>
        <textarea
          v-model="form.message"
          required
          rows="4"
          placeholder="Write your message or inquiry here..."
          class="clean-input resize-none"
        ></textarea>
      </div>

      <div class="pt-1 flex flex-wrap items-center gap-4">
        <button 
          type="submit"
          :disabled="isSubmitting"
          class="clean-btn"
        >
          <span v-if="isSubmitting">Sending Message...</span>
          <span v-else-if="isSubmitted" class="inline-flex items-center gap-1.5">
            <Check class="w-4 h-4 text-emerald-400" />
            <span>Message Sent!</span>
          </span>
          <span v-else class="inline-flex items-center gap-1.5">
            <Send class="w-3.5 h-3.5" />
            <span>Send Message</span>
          </span>
        </button>

        <span v-if="isSubmitted" class="text-xs text-emerald-400 animate-in fade-in">
          Thank you! Your message has been sent successfully.
        </span>
      </div>
    </form>
  </section>
</template>
