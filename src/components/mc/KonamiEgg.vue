<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { playAchievementChime } from '../../utils/minecraftAudio'
import McIcon from './McIcon.vue'

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
let keyIndex = 0

const triggered = ref(false)
const blocks = ref([])

const handleKeydown = (e) => {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
  const expectedKey = konamiCode[keyIndex]

  if (key === expectedKey || key === expectedKey.toLowerCase()) {
    keyIndex++
    if (keyIndex === konamiCode.length) {
      triggerEasterEgg()
      keyIndex = 0
    }
  } else {
    keyIndex = 0
  }
}

const triggerEasterEgg = () => {
  triggered.value = true
  playAchievementChime()

  // Generate 45 falling pixel blocks
  const colors = ['#4AEDD9', '#50C878', '#FCDB5C', '#B3261E', '#7F7F7F', '#5D9B3A']
  const newBlocks = []
  for (let i = 0; i < 45; i++) {
    newBlocks.push({
      id: i,
      left: Math.random() * 95 + '%',
      duration: Math.random() * 2 + 2 + 's',
      delay: Math.random() * 1.5 + 's',
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.floor(Math.random() * 12) + 16 + 'px'
    })
  }
  blocks.value = newBlocks

  setTimeout(() => {
    triggered.value = false
    blocks.value = []
  }, 6000)
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div>
    <!-- Achievement Unlocked Toast Banner -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-8"
    >
      <div
        v-if="triggered"
        class="fixed top-6 right-6 z-50 p-3 flex items-center gap-3 border-4 border-black bg-[#222222] text-white shadow-2xl"
        style="box-shadow: inset 3px 3px 0 #555, inset -3px -3px 0 #111;"
      >
        <div class="w-10 h-10 bg-[#333] border-2 border-black flex items-center justify-center shrink-0">
          <McIcon name="trophy" size="24" />
        </div>
        <div>
          <div class="text-[9px] font-pixel text-[#FCDB5C] tracking-tight">ADVANCEMENT MADE!</div>
          <div class="text-sm font-reading text-white font-bold tracking-wide">Secret Konami Code Unlocked: Block Storm!</div>
        </div>
      </div>
    </transition>

    <!-- Falling Blocks Overlay -->
    <div v-if="triggered" class="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <div
        v-for="b in blocks"
        :key="b.id"
        class="absolute border-2 border-black"
        :style="{
          left: b.left,
          top: '-40px',
          width: b.size,
          height: b.size,
          backgroundColor: b.color,
          animation: `block-rain ${b.duration} linear ${b.delay} infinite`,
          boxShadow: 'inset 2px 2px 0 rgba(255,255,255,0.5), inset -2px -2px 0 rgba(0,0,0,0.5)'
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes block-rain {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
  }
}
</style>

