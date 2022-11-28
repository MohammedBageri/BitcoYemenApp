<template>
 <navbar />
<section class="ground">
                    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-0">
                        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                            
                            <div class="lg:py-2 lg:col-span-2">
                                <p class="max-w-xl text-lg">
                                يشير الناس الى شبكة الريبل وعملتها الالكترونية الخاصة بها باسم “الريبل”، مما يؤدي غالباً الى حدوث ارتباك حولها لأنها تحمل الاسم ذاته لشبكة المدفوعات والعملة الخاصة
                                </p>
                                
                                <div class="mt-8">
                                    <p class="text-2xl font-bold"> 0151 475 4450 </p>
                                    
                                    <address class="mt-2 not-italic">اليمن - حضرموت - المكلا </address>
                                </div>
                                <img class="lg:w-full md:w-3/6 w-5/6 mb-0 mt-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
                            </div>
                            
                            <div class="p-8 card_ground rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                                <form action="" class="space-y-4">
                                    <div>
                                        <label class="sr-only" for="name">Name</label>
                                        <input class="w-full p-3 text-sm border border-gray-400 rounded-lg" placeholder="Name" type="text" id="name" />
                                    </div>
                                    
                                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label class="sr-only" for="email">Email</label>
                                            <input
                                            class="w-full p-3 text-sm border border-gray-400 rounded-lg"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            />
                                        </div>
                                        
                                        <div>
                                            <label class="sr-only" for="phone">Phone</label>
                                            <input
                                            class="w-full p-3 text-sm border border-gray-400 rounded-lg"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            />
                                        </div>
                                    </div>
                                    
                                   
                                    
                                    <div>
                                        <label class="sr-only" for="message">Message</label>
                                        <textarea
                                            class="w-full p-3 text-sm border border-gray-400 rounded-lg"
                                            placeholder="Message"
                                            rows="14"
                                            id="message"
                                            ></textarea>
                                    </div>
                                    
                                    <div class="mt-4">
                                        <button
                                            type="submit"
                                            class="inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] rounded-lg sm:w-auto"
                                            >
                                            
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-5 h-5 ml-3 text-gray-900"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                >
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                            <span class="font-bold ml-2 text-gray-900">ارسال</span>
                                        </button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
      <section6 />
    </template>
        
        <script>
        import navbar from '@/components/navbar.vue'
        import section6 from '@/components/Home/section6.vue'

import axios from "axios"

export default {
  name: 'support',
  components: {
    navbar,
    section6
  }
}
        </script>
        
        <style scoped>
        
        
          
        
        </style>