<script>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <router-view></router-view>
  
</template>

<style scoped>

</style>
