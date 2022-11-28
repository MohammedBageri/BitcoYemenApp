<template>
  <div class="home">
    <navbar />
    <router-view />

    <hero />
    <section1 />
    <section2 />
    <section3 />
    <section4 />
    <section5 />
    <section6 />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "../axios";
import navbar from "@/components/navbar.vue";
import login from "@/components/login.vue";
import hero from "@/components/Home/hero.vue";
import section1 from "@/components/Home/section1.vue";
import section2 from "@/components/Home/section2.vue";
import section3 from "@/components/Home/section3.vue";
import section4 from "@/components/Home/section4.vue";
import section5 from "@/components/Home/section5.vue";
import section6 from "@/components/Home/section6.vue";

export default {
  name: "HomeView",
  data() {
    return {
      users: null,
    };
  },
  components: {
    navbar,
    login,
    hero,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
  },
};
</script>
