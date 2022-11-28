<template>

    <div class="myOrders">
      <navbar />
     <section class="ground mt-10">
     <div class=" mr-0 text-right">
                          <div>
                              <span class="inline-block w-12 h-1 line_ground"></span>
                              
                              <h2 class="mt-1 text-xl font-extrabold tracking-wide md:text-2xl lg:text-3xl">طلباتي</h2>
                              <p class="sub_text inline-block w-full md:w-1/2 mt-5 text-md font-light leading-9 md:text-1xl lg:text-1xl">
                              يشير الناس الى شبكة الريبل وعملتها الالكترونية الخاصة بها باسم “الريبل”، مما يؤدي غالباً الى حدوث ارتباك حولها لأنها تحمل الاسم ذاته لشبكة المدفوعات والعملة الخاصة
                              </p>
                          </div>
                      </div>
                      
                      <div class="max-w-screen-2xl px-0 py-12 mx-auto sm:px-6 lg:px-0">
                          
                        <div class="mt-10 lg:w-[60%] overflow-hidden overflow-x-auto border border_card rounded">
  <table class="card_ground min-w-full text-sm divide-y divide-gray-200">
    <thead>
      <tr class="text-lg">
        <th class="px-4 py-2 font-medium   whitespace-nowrap"> اسم المنتج</th>
        <th class="px-4 py-2 font-medium   whitespace-nowrap">الإعدادات</th>
      </tr>
    </thead>
    <tbody  v-for="order in orders" :key="order.id" class="divide-y table_ground divide-gray-100">
      <tr>
        
        <td class="px-4 py-2 whitespace-nowrap">{{order.product.name}}</td>
        <td class="px-4 py-2 whitespace-nowrap">
          <router-link class="inline-flex w-full items-center justify-center bg-white sm:w-auto  p-1 px-5 "
    :to="{
      name: 'yourOrders',
      params: {id:order._id}
    }">
    
    <span class="font-bold text-lg text-gray-800"> مشاهدة </span>
    <svg class="mr-2 h-5 w-5" viewBox="0 0 355 245" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M174.329 71.8346C147.735 71.8346 126.042 94.5367 126.042 122.5C126.042 150.391 147.663 173.165 174.329 173.165C200.923 173.165 222.616 150.463 222.616 122.5C222.616 94.6088 200.923 71.8346 174.329 71.8346V71.8346Z" fill="#1F262A"/>
<path d="M174.329 202.57C131.519 202.57 96.6372 166.679 96.6372 122.5C96.6372 78.3209 131.519 42.4299 174.329 42.4299C217.139 42.4299 252.021 78.3209 252.021 122.5C252.021 166.679 217.139 202.57 174.329 202.57V202.57ZM351.838 114.716C305.857 40.9164 243.877 0.268753 177.5 0.268753C111.123 0.268753 49.1428 40.9164 3.16196 114.716C0.20708 119.473 0.20708 125.527 3.16196 130.284C49.1428 204.084 111.123 244.731 177.5 244.731C243.877 244.731 305.785 204.084 351.838 130.284C354.793 125.527 354.793 119.473 351.838 114.716Z" fill="#1F262A"/>
</svg>


  </router-link> </td>

      
      </tr>
    </tbody>
  </table>
</div>
    </div>
    </section>
  
  <section6 />
    </div>
  </template>
  
  <script>
  import navbar from '@/components/navbar.vue'
  import product from '@/components/Store/product.vue'
  import section6 from '@/components/Home/section6.vue'
  
  import axios from "axios"
  
  export default {
    name: 'myOrders',
    components: {
      navbar,
      product,
      section6
    },
  data(){
    return{
      api_url: import.meta.env.VITE_API_URL ,
        orders:[],
    }
  },
  async created(){
    
        await axios.get('/api/v1/order/').then((res)=>{
        this.orders = res.data;
       
      })
  
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  