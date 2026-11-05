<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 20
  }
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block shrink-0 select-none pixel-render"
  >
    <!-- Grass Block (Isometric Pixel Block) -->
    <g v-if="name === 'grass_block'">
      <rect width="16" height="16" fill="#8B5A2B" />
      <rect y="0" width="16" height="6" fill="#5D9B3A" />
      <rect y="0" width="16" height="2" fill="#74B34C" />
      <rect x="2" y="6" width="3" height="3" fill="#5D9B3A" />
      <rect x="8" y="6" width="3" height="4" fill="#5D9B3A" />
      <rect x="13" y="6" width="2" height="2" fill="#5D9B3A" />
      <rect x="4" y="11" width="3" height="2" fill="#5A3816" />
      <rect x="10" y="12" width="2" height="2" fill="#5A3816" />
      <rect x="0" y="0" width="16" height="16" stroke="#000000" stroke-width="1" fill="none" />
    </g>

    <!-- Diamond Sword (Projects) -->
    <g v-else-if="name === 'sword'">
      <rect x="12" y="1" width="3" height="3" fill="#4AEDD9" />
      <rect x="10" y="3" width="3" height="3" fill="#4AEDD9" />
      <rect x="8" y="5" width="3" height="3" fill="#4AEDD9" />
      <rect x="6" y="7" width="3" height="3" fill="#4AEDD9" />
      <rect x="4" y="9" width="3" height="3" fill="#4AEDD9" />
      <!-- Guard -->
      <rect x="2" y="9" width="3" height="2" fill="#2B2B2B" />
      <rect x="7" y="11" width="2" height="3" fill="#2B2B2B" />
      <rect x="4" y="10" width="3" height="3" fill="#5A3816" />
      <!-- Handle -->
      <rect x="2" y="12" width="2" height="2" fill="#8B5A2B" />
      <rect x="1" y="13" width="2" height="2" fill="#5A3816" />
    </g>

    <!-- Crafting Pickaxe (Stack) -->
    <g v-else-if="name === 'pickaxe'">
      <rect x="7" y="2" width="7" height="2" fill="#7F7F7F" />
      <rect x="13" y="4" width="2" height="3" fill="#7F7F7F" />
      <rect x="6" y="4" width="2" height="2" fill="#7F7F7F" />
      <rect x="8" y="5" width="2" height="2" fill="#8B5A2B" />
      <rect x="6" y="7" width="2" height="2" fill="#8B5A2B" />
      <rect x="4" y="9" width="2" height="2" fill="#8B5A2B" />
      <rect x="2" y="11" width="2" height="2" fill="#8B5A2B" />
      <rect x="1" y="13" width="2" height="2" fill="#5A3816" />
    </g>

    <!-- Book & Quill (About / Story) -->
    <g v-else-if="name === 'book'">
      <rect x="2" y="3" width="10" height="11" fill="#7A221E" />
      <rect x="3" y="4" width="8" height="9" fill="#F4E6C3" />
      <rect x="2" y="3" width="2" height="11" fill="#4A1512" />
      <rect x="5" y="6" width="5" height="1" fill="#5A3816" />
      <rect x="5" y="8" width="5" height="1" fill="#5A3816" />
      <rect x="5" y="10" width="3" height="1" fill="#5A3816" />
      <!-- Feather quill -->
      <rect x="11" y="1" width="3" height="5" fill="#EEEEEE" />
      <rect x="10" y="5" width="2" height="3" fill="#CCCCCC" />
      <rect x="9" y="8" width="1" height="2" fill="#222222" />
    </g>

    <!-- Advancement Totem / Trophy (Certs) -->
    <g v-else-if="name === 'trophy' || name === 'totem'">
      <rect x="3" y="1" width="10" height="6" fill="#FCDB5C" />
      <rect x="1" y="2" width="2" height="3" fill="#FCDB5C" />
      <rect x="13" y="2" width="2" height="3" fill="#FCDB5C" />
      <rect x="5" y="3" width="2" height="2" fill="#50C878" />
      <rect x="9" y="3" width="2" height="2" fill="#50C878" />
      <rect x="6" y="7" width="4" height="5" fill="#FCDB5C" />
      <rect x="4" y="12" width="8" height="3" fill="#B88748" />
    </g>

    <!-- Chat / Command Redstone (Contact) -->
    <g v-else-if="name === 'chat' || name === 'redstone'">
      <rect x="2" y="3" width="12" height="9" fill="#B3261E" />
      <rect x="4" y="5" width="8" height="5" fill="#FCDB5C" />
      <rect x="5" y="6" width="6" height="3" fill="#B3261E" />
      <rect x="5" y="12" width="3" height="2" fill="#B3261E" />
      <rect x="0" y="0" width="16" height="16" stroke="#000000" stroke-width="0" />
    </g>

    <!-- Chest (Closed) -->
    <g v-else-if="name === 'chest'">
      <rect x="1" y="2" width="14" height="12" fill="#B88748" stroke="#000000" stroke-width="1" />
      <rect x="2" y="3" width="12" height="4" fill="#A46E34" />
      <line x1="1" y1="7" x2="15" y2="7" stroke="#000000" stroke-width="1" />
      <rect x="7" y="5" width="2" height="3" fill="#D9D9D9" stroke="#000000" stroke-width="0.5" />
    </g>

    <!-- Chest (Open) -->
    <g v-else-if="name === 'chest_open'">
      <rect x="1" y="6" width="14" height="8" fill="#B88748" stroke="#000000" stroke-width="1" />
      <polygon points="1,6 15,6 13,2 3,2" fill="#A46E34" stroke="#000000" stroke-width="1" />
      <rect x="7" y="4" width="2" height="2" fill="#FCDB5C" />
      <rect x="3" y="7" width="10" height="2" fill="#222222" />
    </g>

    <!-- Pixel Sun -->
    <g v-else-if="name === 'sun'">
      <rect x="4" y="4" width="8" height="8" fill="#FCDB5C" />
      <rect x="5" y="5" width="6" height="6" fill="#FFF275" />
      <rect x="2" y="6" width="2" height="4" fill="#FCDB5C" />
      <rect x="12" y="6" width="2" height="4" fill="#FCDB5C" />
      <rect x="6" y="2" width="4" height="2" fill="#FCDB5C" />
      <rect x="6" y="12" width="4" height="2" fill="#FCDB5C" />
    </g>

    <!-- Pixel Moon -->
    <g v-else-if="name === 'moon'">
      <rect x="3" y="3" width="10" height="10" fill="#E6E6FA" />
      <rect x="4" y="4" width="8" height="8" fill="#F0F8FF" />
      <rect x="5" y="5" width="2" height="3" fill="#B0C4DE" />
      <rect x="8" y="9" width="3" height="2" fill="#B0C4DE" />
    </g>

    <!-- Emerald Gem -->
    <g v-else-if="name === 'emerald'">
      <polygon points="8,1 14,4 14,12 8,15 2,12 2,4" fill="#50C878" stroke="#000000" stroke-width="0.5" />
      <polygon points="8,3 12,5 12,11 8,13 4,11 4,5" fill="#74EE9E" />
      <polygon points="8,5 10,6 10,10 8,11 6,10 6,6" fill="#A3FFC2" />
    </g>

    <!-- XP Orb (Green-Yellow Pulsing) -->
    <g v-else-if="name === 'xp_orb'">
      <rect x="5" y="4" width="6" height="8" fill="#55FF55" />
      <rect x="4" y="5" width="8" height="6" fill="#55FF55" />
      <rect x="6" y="5" width="4" height="6" fill="#FFFF55" />
      <rect x="7" y="6" width="2" height="4" fill="#FFFFFF" />
      <rect x="3" y="6" width="1" height="4" fill="#00AA00" />
      <rect x="12" y="6" width="1" height="4" fill="#00AA00" />
    </g>

    <!-- Compass -->
    <g v-else-if="name === 'compass'">
      <circle cx="8" cy="8" r="6" fill="#C0C0C0" stroke="#000000" stroke-width="1" />
      <circle cx="8" cy="8" r="4" fill="#4B4B4B" />
      <polygon points="8,5 10,8 8,8" fill="#B3261E" />
      <polygon points="8,11 6,8 8,8" fill="#FCDB5C" />
    </g>

    <!-- Sound Toggle Icon (Speaker) -->
    <g v-else-if="name === 'sound_on'">
      <rect x="2" y="6" width="3" height="4" fill="#FFFFFF" />
      <polygon points="5,6 9,2 9,14 5,10" fill="#FFFFFF" />
      <path d="M12 5 C13 7 13 9 12 11" stroke="#FCDB5C" stroke-width="1.5" stroke-linecap="square" />
      <path d="M14 3 C16 6 16 10 14 13" stroke="#FCDB5C" stroke-width="1.5" stroke-linecap="square" />
    </g>
    <g v-else-if="name === 'sound_off'">
      <rect x="2" y="6" width="3" height="4" fill="#AAAAAA" />
      <polygon points="5,6 9,2 9,14 5,10" fill="#AAAAAA" />
      <line x1="11" y1="5" x2="15" y2="11" stroke="#B3261E" stroke-width="1.5" />
      <line x1="15" y1="5" x2="11" y2="11" stroke="#B3261E" stroke-width="1.5" />
    </g>

    <!-- Heart HP -->
    <g v-else-if="name === 'heart'">
      <rect x="2" y="3" width="5" height="4" fill="#B3261E" />
      <rect x="9" y="3" width="5" height="4" fill="#B3261E" />
      <rect x="3" y="7" width="10" height="3" fill="#B3261E" />
      <rect x="5" y="10" width="6" height="2" fill="#B3261E" />
      <rect x="7" y="12" width="2" height="2" fill="#B3261E" />
      <rect x="3" y="4" width="2" height="2" fill="#FF8888" />
    </g>

    <!-- Crafting Table -->
    <g v-else-if="name === 'crafting_table'">
      <rect width="16" height="16" fill="#8B5A2B" stroke="#000000" stroke-width="1" />
      <rect x="1" y="1" width="14" height="4" fill="#B88748" />
      <rect x="3" y="6" width="4" height="4" fill="#3D2817" />
      <rect x="9" y="6" width="4" height="4" fill="#3D2817" />
      <rect x="3" y="11" width="4" height="4" fill="#3D2817" />
      <rect x="9" y="11" width="4" height="4" fill="#3D2817" />
      <rect x="4" y="2" width="2" height="2" fill="#222222" />
      <rect x="10" y="2" width="2" height="2" fill="#222222" />
    </g>

    <!-- Diamond -->
    <g v-else-if="name === 'diamond'">
      <polygon points="8,1 15,6 8,15 1,6" fill="#4AEDD9" stroke="#000000" stroke-width="0.5" />
      <polygon points="8,3 13,6 8,13 3,6" fill="#A3FFF4" />
      <polygon points="8,5 11,6 8,11 5,6" fill="#FFFFFF" />
    </g>

    <!-- Gold Ingot -->
    <g v-else-if="name === 'gold_ingot'">
      <polygon points="2,11 12,11 15,8 5,8" fill="#FCDB5C" stroke="#000000" stroke-width="0.5" />
      <polygon points="5,8 15,8 14,5 4,5" fill="#FFF275" />
      <polygon points="2,11 5,8 4,5 1,8" fill="#D4AF37" />
    </g>

    <!-- Iron Ingot -->
    <g v-else-if="name === 'iron_ingot'">
      <polygon points="2,11 12,11 15,8 5,8" fill="#D8D8D8" stroke="#000000" stroke-width="0.5" />
      <polygon points="5,8 15,8 14,5 4,5" fill="#FFFFFF" />
      <polygon points="2,11 5,8 4,5 1,8" fill="#A0A0A0" />
    </g>

    <!-- Redstone Dust -->
    <g v-else-if="name === 'redstone_dust'">
      <rect x="6" y="6" width="4" height="4" fill="#FF2200" />
      <rect x="4" y="7" width="2" height="2" fill="#B3261E" />
      <rect x="10" y="7" width="2" height="2" fill="#B3261E" />
      <rect x="7" y="4" width="2" height="2" fill="#B3261E" />
      <rect x="7" y="10" width="2" height="2" fill="#B3261E" />
      <rect x="7" y="7" width="2" height="2" fill="#FFAAAA" />
    </g>

    <!-- Command Block -->
    <g v-else-if="name === 'command_block'">
      <rect width="16" height="16" fill="#B87333" stroke="#000000" stroke-width="1" />
      <rect x="2" y="2" width="12" height="12" fill="#9C5221" />
      <circle cx="8" cy="8" r="4" fill="#E6D3A3" stroke="#000000" stroke-width="0.5" />
      <polygon points="8,5 11,8 8,11 5,8" fill="#4AEDD9" />
    </g>

    <!-- Sign / Board -->
    <g v-else-if="name === 'sign'">
      <rect x="1" y="1" width="14" height="10" fill="#B88748" stroke="#5A3816" stroke-width="1" />
      <rect x="3" y="3" width="10" height="1" fill="#5A3816" />
      <rect x="3" y="5" width="8" height="1" fill="#5A3816" />
      <rect x="3" y="7" width="10" height="1" fill="#5A3816" />
      <rect x="7" y="11" width="2" height="5" fill="#8B5A2B" stroke="#5A3816" stroke-width="0.5" />
    </g>

    <!-- Fallback Block -->
    <g v-else>
      <rect width="16" height="16" fill="#7F7F7F" stroke="#000000" stroke-width="1" />
      <rect x="4" y="4" width="8" height="8" fill="#A0A0A0" />
    </g>
  </svg>
</template>

<style scoped>
.pixel-render {
  image-rendering: pixelated;
}
</style>
