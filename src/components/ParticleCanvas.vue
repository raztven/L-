<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)

let animationFrameId = null
let ctx = null
let width = 0
let height = 0
let dpr = 1

// Particle Arrays
const interactiveParticles = []
const ambientParticles = []

// Mouse tracking
let mouseX = -1000
let mouseY = -1000
let isHoveringInteractive = false

class Particle {
  constructor(x, y, isBurst = false) {
    this.x = x
    this.y = y
    const angle = Math.random() * Math.PI * 2
    const speed = isBurst ? (Math.random() * 2.8 + 1) : (Math.random() * 1.4 + 0.4)
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed - (isBurst ? 0.5 : 0.8) // slight upward drift
    this.size = Math.random() * 1.8 + 1
    this.alpha = 1
    this.decay = Math.random() * 0.02 + (isBurst ? 0.025 : 0.015)
    this.maxLife = 1 / this.decay
    this.life = 0
    this.twinkleSpeed = Math.random() * 0.2 + 0.1
    this.twinklePhase = Math.random() * Math.PI
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.vx *= 0.98
    this.vy *= 0.98
    this.life++
    this.alpha = Math.max(0, 1 - (this.life / this.maxLife))
    return this.alpha > 0
  }

  draw(context) {
    const twinkle = Math.sin(this.life * this.twinkleSpeed + this.twinklePhase) * 0.25 + 0.75
    const finalAlpha = Math.min(1, Math.max(0, this.alpha * twinkle))

    context.save()
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    context.fillStyle = `rgba(255, 255, 255, ${finalAlpha})`
    context.shadowColor = '#FFFFFF'
    context.shadowBlur = 8
    context.fill()
    context.restore()
  }
}

class AmbientStar {
  constructor(w, h) {
    this.reset(w, h)
  }

  reset(w, h) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.size = Math.random() * 1.4 + 0.6
    this.vy = -(Math.random() * 0.25 + 0.1) // gentle upward float
    this.vx = (Math.random() - 0.5) * 0.15
    this.baseAlpha = Math.random() * 0.4 + 0.15
    this.alpha = this.baseAlpha
    this.phase = Math.random() * Math.PI * 2
    this.speed = Math.random() * 0.03 + 0.01
  }

  update(w, h) {
    this.y += this.vy
    this.x += this.vx
    this.phase += this.speed
    this.alpha = this.baseAlpha + Math.sin(this.phase) * 0.2

    if (this.y < -10) this.y = h + 10
    if (this.x < -10) this.x = w + 10
    if (this.x > w + 10) this.x = -10
  }

  draw(context) {
    const clampedAlpha = Math.min(0.65, Math.max(0.05, this.alpha))
    context.save()
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    context.fillStyle = `rgba(255, 255, 255, ${clampedAlpha})`
    context.shadowColor = '#FFFFFF'
    context.shadowBlur = 5
    context.fill()
    context.restore()
  }
}

const handleResize = () => {
  if (!canvasRef.value) return
  const canvas = canvasRef.value
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = width * dpr
  canvas.height = height * dpr
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  if (ctx) {
    ctx.scale(dpr, dpr)
  }
}

const handleMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY

  // Check if mouse is hovering over an interactive element
  const target = e.target
  isHoveringInteractive = !!(
    target && 
    (target.closest('a, button, [role="button"], input, textarea, .clean-tag, .filter-pill, article, .interactive-item, .clean-btn, .clean-btn-secondary') ||
     target.matches('h1, h2, h3, a, button'))
  )

  // Spawn rate: spawn 1 particle on movement, or 2-3 when hovering interactive items
  const count = isHoveringInteractive ? 2 : 1
  for (let i = 0; i < count; i++) {
    const jitterX = mouseX + (Math.random() - 0.5) * (isHoveringInteractive ? 16 : 8)
    const jitterY = mouseY + (Math.random() - 0.5) * (isHoveringInteractive ? 16 : 8)
    interactiveParticles.push(new Particle(jitterX, jitterY, isHoveringInteractive))
  }

  // Cap particles to prevent memory issues
  if (interactiveParticles.length > 120) {
    interactiveParticles.splice(0, interactiveParticles.length - 120)
  }
}

const handleClick = (e) => {
  // Burst of white sparkles on click!
  const burstCount = 10
  for (let i = 0; i < burstCount; i++) {
    interactiveParticles.push(new Particle(e.clientX, e.clientY, true))
  }
}

const render = () => {
  if (!ctx) return

  ctx.clearRect(0, 0, width, height)

  // 1. Draw ambient floating stardust
  for (let i = 0; i < ambientParticles.length; i++) {
    const star = ambientParticles[i]
    star.update(width, height)
    star.draw(ctx)
  }

  // 2. Draw interactive white sparkles
  for (let i = interactiveParticles.length - 1; i >= 0; i--) {
    const p = interactiveParticles[i]
    if (p.update()) {
      p.draw(ctx)
    } else {
      interactiveParticles.splice(i, 1)
    }
  }

  animationFrameId = requestAnimationFrame(render)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d', { alpha: true })

  handleResize()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('click', handleClick, { passive: true })

  // Initialize subtle ambient dust (25 stars)
  for (let i = 0; i < 25; i++) {
    ambientParticles.push(new AmbientStar(width, height))
  }

  animationFrameId = requestAnimationFrame(render)
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('click', handleClick)
})
</script>

<template>
  <canvas 
    ref="canvasRef" 
    class="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
    aria-hidden="true"
  ></canvas>
</template>

