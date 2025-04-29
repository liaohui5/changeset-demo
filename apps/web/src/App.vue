<template>
  <div>
    <span>date: {{ date }}</span>
    <div :style="divStyle" @click="setBgColor"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { formatDate, getRandomHexColor } from "@for-study/tools";

const date = formatDate(new Date(), "{Y}-{M}-{D} {H}:{I}:{S}");
const bgColor = ref("");
const divStyle = computed(() => {
  return {
    cursor: "pointer",
    width: "100px",
    height: "100px",
    backgroundColor: bgColor.value,
  };
});

function setBgColor() {
  bgColor.value = getRandomHexColor();
  console.log("setBgColor:", bgColor.value);
}

onMounted(setBgColor);
</script>
