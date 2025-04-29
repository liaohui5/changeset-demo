<template>
  <div>
    <span>formated date: {{ date }}</span>
  </div>
</template>

<script setup>
import { formatDate } from "@for-study/tools";
const date = formatDate(new Date(), "{Y}-{M}-{D} {H}:{I}:{S}");
</script>
