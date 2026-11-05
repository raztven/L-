<script setup>
defineProps({
  size: {
    type: Number,
    default: 120
  }
})
</script>

<template>
  <div class="inline-block select-none mc-bobbing" :style="`width: ${size}px; height: ${size * 1.5}px;`">
    <svg
      :width="size"
      :height="size * 1.5"
      viewBox="0 0 32 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="pixel-render w-full h-full drop-shadow-md"
    >
      <!-- Head / Hair -->
      <rect x="8" y="2" width="16" height="16" fill="#4A2E18" /> <!-- Brown hair base -->
      <rect x="10" y="4" width="12" height="14" fill="#FCD3A1" /> <!-- Face skin -->
      <rect x="8" y="2" width="16" height="5" fill="#361F0E" /> <!-- Hair top -->
      <rect x="8" y="7" width="3" height="6" fill="#361F0E" /> <!-- Hair left side -->
      <rect x="21" y="7" width="3" height="6" fill="#361F0E" /> <!-- Hair right side -->

      <!-- Tech Glasses / Visor -->
      <rect x="9" y="8" width="6" height="3" fill="#1E293B" />
      <rect x="17" y="8" width="6" height="3" fill="#1E293B" />
      <rect x="10" y="9" width="4" height="1" fill="#4AEDD9" /> <!-- Teal glare -->
      <rect x="18" y="9" width="4" height="1" fill="#4AEDD9" /> <!-- Teal glare -->
      <rect x="15" y="9" width="2" height="1" fill="#1E293B" /> <!-- Bridge -->

      <!-- Mouth & Expression -->
      <rect x="13" y="14" width="6" height="1" fill="#B47A50" />

      <!-- Body / Developer Hoodie (Emerald / Teal Developer Jacket) -->
      <rect x="8" y="18" width="16" height="14" fill="#1B4D3E" /> <!-- Dark emerald hoodie -->
      <rect x="10" y="18" width="12" height="14" fill="#2E7D32" /> <!-- Green hoodie front -->
      <rect x="14" y="18" width="4" height="14" fill="#4CAF50" /> <!-- Hoodie zipper/strip -->

      <!-- Left Arm -->
      <rect x="4" y="18" width="4" height="12" fill="#2E7D32" />
      <rect x="4" y="30" width="4" height="4" fill="#FCD3A1" /> <!-- Hand -->

      <!-- Right Arm (holding glowing code tool or redstone) -->
      <rect x="24" y="18" width="4" height="12" fill="#2E7D32" />
      <rect x="24" y="30" width="4" height="4" fill="#FCD3A1" /> <!-- Hand -->
      <!-- Tool in right hand: Redstone / Diamond stylus -->
      <rect x="27" y="28" width="2" height="6" fill="#4AEDD9" />
      <rect x="26" y="27" width="4" height="2" fill="#FCDB5C" />

      <!-- Pants / Dark Jeans -->
      <rect x="8" y="32" width="16" height="10" fill="#1E293B" />
      <rect x="15" y="36" width="2" height="6" fill="#0F172A" /> <!-- Leg divide -->

      <!-- Shoes / Boots -->
      <rect x="8" y="42" width="7" height="4" fill="#475569" />
      <rect x="17" y="42" width="7" height="4" fill="#475569" />
      <rect x="8" y="45" width="7" height="1" fill="#1E293B" />
      <rect x="17" y="45" width="7" height="1" fill="#1E293B" />

      <!-- Outer pixel stroke -->
      <rect x="7" y="1" width="18" height="45" stroke="#000000" stroke-width="0.75" fill="none" />
    </svg>
  </div>
</template>

<style scoped>
.pixel-render {
  image-rendering: pixelated;
}
</style>

