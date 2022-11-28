<template>

                        
     <!--
    Graphic from https://www.opendoodles.com/
-->

<div class="grid h-screen place-content-center bg-white">
  <div class="text-center">
    <img class="mx-auto h-56 w-auto text-black sm:h-64" src="@/assets/img/404.jpg">

    

    <p class="mt-5 uppercase tracking-widest text-2xl text-gray-500">404 | Not Found</p>

    <router-link to="/" class="group block h-auto mt-6 mb-6">
  <div
    class="relative flex h-full items-end rounded-3xl border-4 border-black button_ground p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000000]"
  >
    <div class="lg:group-hover:absolute lg:group-hover:opacity-0">
      <p class="mt-1 text-xl text-right text-gray-900  font-bold sm:text-2xl">  لقد أضعت الطريق لا تقلق يمكنك العودة من هنا ...</p>
    </div>

    <div
      class="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100"
    >
      <p class="text-2xl text-gray-900 font-bold">العودة للصفحة الرئيسية</p>

    </div>
  </div>
</router-link>

    
  </div>
</div>


    
        
    </template>
    
    <script>
    export default {
      name: 'error'
    }
    </script>
    
    <style scoped>
    
    </style>