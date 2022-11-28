
<template>

  <nav class="navbar">
                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0 ">
                        <div class="relative flex items-center justify-between h-16">
                            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <!-- Mobile menu button-->
                                <button v-on:click="open = !open" type="button" id="menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span class="sr-only">Open main menu</span>
                                    <!--
                                     Icon when menu is closed.
                                     
                                     Heroicon name: outline/menu
                                     
                                     Menu open: "hidden", Menu closed: "block"
                                     -->
                                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    
                                    <!--
                                     Icon when menu is open.
                                     
                                     Heroicon name: outline/x
                                     
                                     Menu open: "block", Menu closed: "hidden"
                                     -->
                                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>


                            </div>
                            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div class="flex-shrink-0 flex items-center">
                                        <img class="block h-8 w-auto" src="@/assets/logo.svg" alt="bitco">
                                            </div>

                                <div class="hidden lg:block sm:ml-6 mx-10 mt-1">
                                    <div class="flex space-x-3">
                                        <router-link to="/" class="nanbar ml-3  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">الرئيسية
                                        </router-link>

                                        <router-link to="/buy" class="nanbar ml-3  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">شراء
                                        </router-link>

                                        <router-link to="/store" class="nanbar text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">المتجر
                                        </router-link>
                                        
                                        <router-link to="/blog" class="nanbar text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">المدونة
                                        </router-link>
                                        
                                        <router-link to="/recommendation" class="nanbar text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">التوصيات
                                        </router-link>
                                       
                                    </div>
                                </div>

                                <div v-show="open" class="absolute top-1 block lg:hidden z-50 w-[95%] mr-auto ml-auto mt-20 rounded-md navbar">
                                    <div class="flex flex-col">
                                        <router-link to="/" class="nanbar text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">الرئيسية
                                        </router-link>

                                        <router-link to="/buy" class="nanbar text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">شراء
                                        </router-link>
                                        
                                        <router-link to="/store" class="nanbar text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">المتجر
                                        </router-link>
                                        
                                        <router-link to="/blog" class="nanbar text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">المدونة
                                        </router-link>
                                        
                                        <router-link to="/recommendation" class="nanbar text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">التوصيات 
                                        </router-link>
                                        <div class="flex items-center lg:hidden mt-2 mb-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                
<router-link  v-if="!users" to="/login" class="block lg:hidden button_ground p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white">تسجيل دخول</router-link>

<button  @click="logout()" v-if="users" class="block lg:hidden button_ground ml-4 p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white">تسجيل الخروج</button>


<router-link v-if="!users" to="/register" class="block lg:hidden mr-5 button_ground ml-4 p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">انشاء حساب</router-link>




<!-- Profile dropdown -->

<div class="flex flex-row w-auto" >

    <div v-on:click="setting = !setting" class="relative mr-2" >
  <svg class="h-8 w-8 inline-block  rounded-full ring-1 ring-white dark:ring-gray-800" id="user-profile-svgrepo-com" xmlns="http://www.w3.org/2000/svg"
                                       
                                        viewBox="0 0 67.058 67.058">
                                        <g id="Group_25" data-name="Group 25">
                                            <path id="Path_132" data-name="Path 132" d="M33.529,0a33.529,33.529,0,0,0,0,67.058c.338,0,.668-.042,1.006-.05l.117.022a1.518,1.518,0,0,0,.274.028,1.364,1.364,0,0,0,.383-.053l.157-.045A33.508,33.508,0,0,0,33.529,0ZM53.456,56.885a1.37,1.37,0,0,0-.858-.93l-7.354-2.448c-2.568-1.07-3.764-5.18-4.043-6.829,1.9-1.769,3.66-4.4,3.66-6.784a3.742,3.742,0,0,1,.184-1.129A1.4,1.4,0,0,0,46,37.93a18.745,18.745,0,0,0,1.341-5.485,1.368,1.368,0,0,0-.042-.338,3.279,3.279,0,0,0-1.2-1.85v-6.5c0-4.021-1.224-5.706-2.52-6.681-.291-2-2.434-5.893-10.053-5.893-7.79,0-12.573,7.323-12.573,12.573v6.5a3.279,3.279,0,0,0-1.2,1.85,1.4,1.4,0,0,0-.042.338,18.745,18.745,0,0,0,1.341,5.485,1.143,1.143,0,0,0,.824.791c.089.053.319.366.319,1.174,0,2.381,1.758,5.015,3.66,6.784-.277,1.646-1.461,5.753-3.948,6.792l-7.452,2.484a1.385,1.385,0,0,0-.869.922,30.731,30.731,0,1,1,39.869.009Z" fill="#fff"/>
                                        </g>
                                    </svg>
                                   
  <span v-if="users" class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
  <span v-if="!users" class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-red-400"></span>
  
</div>

<div v-show="setting" class="bg-white absolute mt-10  block lg:hidden z-50 w-[45%] rounded-md navbar">
<div class="p-3">
<p class="text-xl text-gray-900 font-bold">العمليات</p>
<hr>
<router-link to="/mytransaction" class="text-gray-700 block py-2 p-2 rounded-md hover:bg-gray-700 hover:text-white">تحويلاتي</router-link>
<router-link to="/myorders" class="text-gray-700 block py-2 p-2 rounded-md hover:bg-gray-700 hover:text-white">طلباتي</router-link>
</div>
</div>


<div class="relative mr-2" >

<svg class="h-8 w-8 inline-block  rounded-full ring-1 ring-white dark:ring-gray-800"  viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="33.53" cy="33.53" r="32.03" stroke="white" stroke-width="3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 24.2857C10 22.3534 10.7744 20.5003 12.1528 19.1339C13.5312 17.7676 15.4007 17 17.35 17H51.65C53.5993 17 55.4688 17.7676 56.8472 19.1339C58.2256 20.5003 59 22.3534 59 24.2857V31.5714H10V24.2857ZM10 36.4286V43.7143C10 45.6466 10.7744 47.4997 12.1528 48.8661C13.5312 50.2324 15.4007 51 17.35 51H51.65C53.5993 51 55.4688 50.2324 56.8472 48.8661C58.2256 47.4997 59 45.6466 59 43.7143V36.4286H10ZM19.8 21.8571C19.1502 21.8571 18.5271 22.113 18.0676 22.5685C17.6081 23.0239 17.35 23.6416 17.35 24.2857C17.35 24.9298 17.6081 25.5475 18.0676 26.003C18.5271 26.4584 19.1502 26.7143 19.8 26.7143H19.8245C20.4743 26.7143 21.0974 26.4584 21.5569 26.003C22.0164 25.5475 22.2745 24.9298 22.2745 24.2857C22.2745 23.6416 22.0164 23.0239 21.5569 22.5685C21.0974 22.113 20.4743 21.8571 19.8245 21.8571H19.8ZM17.35 43.7143C17.35 43.0702 17.6081 42.4525 18.0676 41.997C18.5271 41.5416 19.1502 41.2857 19.8 41.2857H19.8245C20.4743 41.2857 21.0974 41.5416 21.5569 41.997C22.0164 42.4525 22.2745 43.0702 22.2745 43.7143C22.2745 44.3584 22.0164 44.9761 21.5569 45.4315C21.0974 45.887 20.4743 46.1429 19.8245 46.1429H19.8C19.1502 46.1429 18.5271 45.887 18.0676 45.4315C17.6081 44.9761 17.35 44.3584 17.35 43.7143ZM27.15 21.8571C26.5002 21.8571 25.8771 22.113 25.4176 22.5685C24.9581 23.0239 24.7 23.6416 24.7 24.2857C24.7 24.9298 24.9581 25.5475 25.4176 26.003C25.8771 26.4584 26.5002 26.7143 27.15 26.7143H27.1745C27.8243 26.7143 28.4474 26.4584 28.9069 26.003C29.3664 25.5475 29.6245 24.9298 29.6245 24.2857C29.6245 23.6416 29.3664 23.0239 28.9069 22.5685C28.4474 22.113 27.8243 21.8571 27.1745 21.8571H27.15ZM24.7 43.7143C24.7 43.0702 24.9581 42.4525 25.4176 41.997C25.8771 41.5416 26.5002 41.2857 27.15 41.2857H27.1745C27.8243 41.2857 28.4474 41.5416 28.9069 41.997C29.3664 42.4525 29.6245 43.0702 29.6245 43.7143C29.6245 44.3584 29.3664 44.9761 28.9069 45.4315C28.4474 45.887 27.8243 46.1429 27.1745 46.1429H27.15C26.5002 46.1429 25.8771 45.887 25.4176 45.4315C24.9581 44.9761 24.7 44.3584 24.7 43.7143Z" fill="white"/>
<circle cx="19.5" cy="24.5" r="3.5" fill="#34D399"/>
<circle cx="27.5" cy="24.5" r="3.5" fill="#F70808"/>
<circle cx="19.5" cy="43.5" r="3.5" fill="#34D399"/>
<circle cx="27.5" cy="43.5" r="3.5" fill="#F70808"/>
</svg>
                              
  <span v-if="availables.available === true " class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
  <span v-if="availables.available === false " class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-red-400"></span>
  
</div>

<div class="relative mr-2" >
<button @click="toggleTheme" aria-label="Toggle themes">
    <span v-if="this.theme == 'darkMode'"> 
      <svg class="h-8 w-8 inline-block p-1 rounded-full ring-1 ring-white dark:ring-gray-800" viewBox="0 0 457 457" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M241.27 379.3H215.27V456.54H241.27V379.3Z" fill="#FFDE55"/>
<path d="M241.27 0H215.27V77.24H241.27V0Z" fill="#FFDE55"/>
<path d="M57.6667 380.488L76.0513 398.873L130.667 344.257L112.282 325.873L57.6667 380.488Z" fill="#FCEBA2"/>
<path d="M325.872 112.283L344.257 130.667L398.873 76.0518L380.488 57.6672L325.872 112.283Z" fill="#FCEBA2"/>
<path d="M77.24 215.27H0V241.27H77.24V215.27Z" fill="#FFDE55"/>
<path d="M456.54 215.27H379.3V241.27H456.54V215.27Z" fill="#FFDE55"/>
<path d="M76.0521 57.6672L57.6675 76.0518L112.283 130.667L130.668 112.283L76.0521 57.6672Z" fill="#FCEBA2"/>
<path d="M344.257 325.872L325.873 344.257L380.488 398.873L398.873 380.488L344.257 325.872Z" fill="#FCEBA2"/>
<path d="M228.267 352.274C296.752 352.274 352.27 296.756 352.27 228.271C352.27 159.786 296.752 104.268 228.267 104.268C159.782 104.268 104.264 159.786 104.264 228.271C104.264 296.756 159.782 352.274 228.267 352.274Z" fill="#FCEBA2"/>
<path d="M228.267 323.413C280.812 323.413 323.409 280.816 323.409 228.271C323.409 175.725 280.812 133.129 228.267 133.129C175.722 133.129 133.125 175.725 133.125 228.271C133.125 280.816 175.722 323.413 228.267 323.413Z" fill="#FFDE55"/>
</svg>
    </span>
    <span v-else>
      <svg class="h-8 w-8 inline-block p-1 rounded-full ring-1 ring-white dark:ring-gray-800" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.3693 27.793C34.5173 33.728 20.0983 28.931 14.1633 17.079C11.4153 11.591 10.9723 5.55499 12.4613 0.0629883C1.19733 6.23599 -3.25467 20.263 2.54433 31.844C8.47933 43.696 22.8983 48.493 34.7503 42.558C41.1143 39.371 45.4403 33.737 47.1673 27.368C46.9033 27.513 46.6403 27.658 46.3693 27.793Z" fill="#FCD34D"/>
</svg>

    </span> 
</button>
</div>

</div>





</div>
                                    </div>
                                </div>

                            </div>

                            

                            

                         
                            
                            <div class="hidden lg:flex flex-row w-auto">

                                
                                <router-link  v-if="!users" to="/login" class="hidden lg:inline-block  button_ground p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white">تسجيل دخول</router-link>
                        
                                <button  @click="logout()"  v-if="users" class="hidden lg:inline-block  button_ground ml-4 p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white">تسجيل الخروج</button>


                                <router-link v-if="!users" to="/register" class="hidden lg:inline-block   mr-5 button_ground ml-4 p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">انشاء حساب</router-link>
                                
                                
                                
                                
                            
                                
                                <div
                                v-on:click="setting = !setting"
                                 class="relative mr-2" >
  <svg class="h-8 w-8 inline-block  rounded-full ring-1 ring-white dark:ring-gray-800" id="user-profile-svgrepo-com" xmlns="http://www.w3.org/2000/svg"
                                       
                                        viewBox="0 0 67.058 67.058">
                                        <g id="Group_25" data-name="Group 25">
                                            <path id="Path_132" data-name="Path 132" d="M33.529,0a33.529,33.529,0,0,0,0,67.058c.338,0,.668-.042,1.006-.05l.117.022a1.518,1.518,0,0,0,.274.028,1.364,1.364,0,0,0,.383-.053l.157-.045A33.508,33.508,0,0,0,33.529,0ZM53.456,56.885a1.37,1.37,0,0,0-.858-.93l-7.354-2.448c-2.568-1.07-3.764-5.18-4.043-6.829,1.9-1.769,3.66-4.4,3.66-6.784a3.742,3.742,0,0,1,.184-1.129A1.4,1.4,0,0,0,46,37.93a18.745,18.745,0,0,0,1.341-5.485,1.368,1.368,0,0,0-.042-.338,3.279,3.279,0,0,0-1.2-1.85v-6.5c0-4.021-1.224-5.706-2.52-6.681-.291-2-2.434-5.893-10.053-5.893-7.79,0-12.573,7.323-12.573,12.573v6.5a3.279,3.279,0,0,0-1.2,1.85,1.4,1.4,0,0,0-.042.338,18.745,18.745,0,0,0,1.341,5.485,1.143,1.143,0,0,0,.824.791c.089.053.319.366.319,1.174,0,2.381,1.758,5.015,3.66,6.784-.277,1.646-1.461,5.753-3.948,6.792l-7.452,2.484a1.385,1.385,0,0,0-.869.922,30.731,30.731,0,1,1,39.869.009Z" fill="#fff"/>
                                        </g>
                                    </svg>
                                   
  <span v-if="users" class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
  <span v-if="!users" class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-red-400"></span>
  
</div>

<div v-show="setting" v-if="users && users.user.role !== 'admin'" class="bg-white absolute mt-14 block z-50 w-[20%] rounded-md navbar">
<div class="p-3">
<p class="text-xl text-gray-900 font-bold">العمليات</p>
<hr>
<router-link to="/mytransaction" class="text-gray-700 block py-2 p-2 rounded-md hover:bg-gray-700 hover:text-white">تحويلاتي</router-link>
<router-link to="/myorders" class="text-gray-700 block py-2 p-2 rounded-md hover:bg-gray-700 hover:text-white">طلباتي</router-link>
</div>
</div>

<div class="relative mr-2" >
    <svg class="h-8 w-8 inline-block  rounded-full ring-1 ring-white dark:ring-gray-800"  viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="33.53" cy="33.53" r="32.03" stroke="white" stroke-width="3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 24.2857C10 22.3534 10.7744 20.5003 12.1528 19.1339C13.5312 17.7676 15.4007 17 17.35 17H51.65C53.5993 17 55.4688 17.7676 56.8472 19.1339C58.2256 20.5003 59 22.3534 59 24.2857V31.5714H10V24.2857ZM10 36.4286V43.7143C10 45.6466 10.7744 47.4997 12.1528 48.8661C13.5312 50.2324 15.4007 51 17.35 51H51.65C53.5993 51 55.4688 50.2324 56.8472 48.8661C58.2256 47.4997 59 45.6466 59 43.7143V36.4286H10ZM19.8 21.8571C19.1502 21.8571 18.5271 22.113 18.0676 22.5685C17.6081 23.0239 17.35 23.6416 17.35 24.2857C17.35 24.9298 17.6081 25.5475 18.0676 26.003C18.5271 26.4584 19.1502 26.7143 19.8 26.7143H19.8245C20.4743 26.7143 21.0974 26.4584 21.5569 26.003C22.0164 25.5475 22.2745 24.9298 22.2745 24.2857C22.2745 23.6416 22.0164 23.0239 21.5569 22.5685C21.0974 22.113 20.4743 21.8571 19.8245 21.8571H19.8ZM17.35 43.7143C17.35 43.0702 17.6081 42.4525 18.0676 41.997C18.5271 41.5416 19.1502 41.2857 19.8 41.2857H19.8245C20.4743 41.2857 21.0974 41.5416 21.5569 41.997C22.0164 42.4525 22.2745 43.0702 22.2745 43.7143C22.2745 44.3584 22.0164 44.9761 21.5569 45.4315C21.0974 45.887 20.4743 46.1429 19.8245 46.1429H19.8C19.1502 46.1429 18.5271 45.887 18.0676 45.4315C17.6081 44.9761 17.35 44.3584 17.35 43.7143ZM27.15 21.8571C26.5002 21.8571 25.8771 22.113 25.4176 22.5685C24.9581 23.0239 24.7 23.6416 24.7 24.2857C24.7 24.9298 24.9581 25.5475 25.4176 26.003C25.8771 26.4584 26.5002 26.7143 27.15 26.7143H27.1745C27.8243 26.7143 28.4474 26.4584 28.9069 26.003C29.3664 25.5475 29.6245 24.9298 29.6245 24.2857C29.6245 23.6416 29.3664 23.0239 28.9069 22.5685C28.4474 22.113 27.8243 21.8571 27.1745 21.8571H27.15ZM24.7 43.7143C24.7 43.0702 24.9581 42.4525 25.4176 41.997C25.8771 41.5416 26.5002 41.2857 27.15 41.2857H27.1745C27.8243 41.2857 28.4474 41.5416 28.9069 41.997C29.3664 42.4525 29.6245 43.0702 29.6245 43.7143C29.6245 44.3584 29.3664 44.9761 28.9069 45.4315C28.4474 45.887 27.8243 46.1429 27.1745 46.1429H27.15C26.5002 46.1429 25.8771 45.887 25.4176 45.4315C24.9581 44.9761 24.7 44.3584 24.7 43.7143Z" fill="white"/>
<circle cx="19.5" cy="24.5" r="3.5" fill="#34D399"/>
<circle cx="27.5" cy="24.5" r="3.5" fill="#F70808"/>
<circle cx="19.5" cy="43.5" r="3.5" fill="#34D399"/>
<circle cx="27.5" cy="43.5" r="3.5" fill="#F70808"/>
</svg>

                                   
  <span v-if="availables.available === true " class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
  <span v-if="availables.available === false " class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-red-400"></span>
  
</div>

<div class="relative mr-2" >
<button @click="toggleTheme" aria-label="Toggle themes">
    <span v-if="this.theme == 'darkMode'"> 
      <svg class="h-8 w-8 inline-block p-1 rounded-full ring-1 ring-white dark:ring-gray-800" viewBox="0 0 457 457" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M241.27 379.3H215.27V456.54H241.27V379.3Z" fill="#FFDE55"/>
<path d="M241.27 0H215.27V77.24H241.27V0Z" fill="#FFDE55"/>
<path d="M57.6667 380.488L76.0513 398.873L130.667 344.257L112.282 325.873L57.6667 380.488Z" fill="#FCEBA2"/>
<path d="M325.872 112.283L344.257 130.667L398.873 76.0518L380.488 57.6672L325.872 112.283Z" fill="#FCEBA2"/>
<path d="M77.24 215.27H0V241.27H77.24V215.27Z" fill="#FFDE55"/>
<path d="M456.54 215.27H379.3V241.27H456.54V215.27Z" fill="#FFDE55"/>
<path d="M76.0521 57.6672L57.6675 76.0518L112.283 130.667L130.668 112.283L76.0521 57.6672Z" fill="#FCEBA2"/>
<path d="M344.257 325.872L325.873 344.257L380.488 398.873L398.873 380.488L344.257 325.872Z" fill="#FCEBA2"/>
<path d="M228.267 352.274C296.752 352.274 352.27 296.756 352.27 228.271C352.27 159.786 296.752 104.268 228.267 104.268C159.782 104.268 104.264 159.786 104.264 228.271C104.264 296.756 159.782 352.274 228.267 352.274Z" fill="#FCEBA2"/>
<path d="M228.267 323.413C280.812 323.413 323.409 280.816 323.409 228.271C323.409 175.725 280.812 133.129 228.267 133.129C175.722 133.129 133.125 175.725 133.125 228.271C133.125 280.816 175.722 323.413 228.267 323.413Z" fill="#FFDE55"/>
</svg>
    </span>
    <span v-else>
      <svg class="h-8 w-8 inline-block p-1 rounded-full ring-1 ring-white dark:ring-gray-800" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.3693 27.793C34.5173 33.728 20.0983 28.931 14.1633 17.079C11.4153 11.591 10.9723 5.55499 12.4613 0.0629883C1.19733 6.23599 -3.25467 20.263 2.54433 31.844C8.47933 43.696 22.8983 48.493 34.7503 42.558C41.1143 39.371 45.4403 33.737 47.1673 27.368C46.9033 27.513 46.6403 27.658 46.3693 27.793Z" fill="#FCD34D"/>
</svg>

    </span> 
</button>
</div>


 </div>
                                </div>
                              </div>
                              </nav>

                            
</template>

<script>
 import axios from "axios"
export default {
  name: 'navbar',
  data(){
          return{
            users: null,
            availables: '',
            open: false,
            setting:false,
            theme: ''

          }
        },

        async created(){
    const response = await axios.get('/api/v1/users/showMe')
    this.users = response.data;
    

    const res = await axios.get('/api/v1/setting/available')
    this.availables = res.data;
   
},
mounted() {
        let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
        document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
},
methods:{
  toggleTheme() {
            this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
            document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
            localStorage.setItem('theme', this.theme); // stores theme value on local storage
},
    async logout(){
    const response = await axios.delete('/api/v1/auth/logout')
    this.logout = response.data;
    if(response.status === 200)
{
    this.$router.go();
}

  },

  }
  
 
 
}
</script>


<style scoped>
   
    </style>



   