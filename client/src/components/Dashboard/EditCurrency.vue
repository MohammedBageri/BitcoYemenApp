<template>
    <div class="EditBlog">
  
  <div class="grid grid-cols-4 gap-4">
  <div class="">
    <navside />
  </div>
  <div class="col-span-3">
    <section class="ground">
      <div>
      
    </div>
      <div class="card_ground mt-10 p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        <form @submit.prevent="updataPost"  class="space-y-4">
  
          
         
          <div>
            <label class="sr-only" for="title">name</label>
            <input v-model="currency.name" class="w-full p-3 text-md rounded-lg text-gray-900 " placeholder="title of post" type="text" id="title" />
          </div>
         
  
          <div>
            <label class="sr-only" for="body">code</label>
            <input v-model="currency.code" class="w-full p-3 text-md rounded-lg text-gray-900  " placeholder="body of post" type="text" id="body" />
          </div>

          <div>

<div class="block p-2 mt-3  w-36 h-10 rounded-md" >
<input class="appearance-none rounded-full h-4 w-4 border border-gray-600  border border-gray-600  checked:bg-emerald-400 checked:border-blue-600 focus:outline-none" type="radio" id="true" value="true" v-model="currency.isActive" />
<label class="px-4" for="true">مفعلة</label>
</div>

<div class="block p-2 mt-3  w-36 h-10 rounded-md " >
<input class="appearance-none rounded-full h-4 w-4 border border-gray-600  border border-gray-600  checked:bg-emerald-400 checked:border-blue-600 focus:outline-none" type="radio" id="false" value="false" v-model="currency.isActive" />
<label class="px-4" for="false">غير مفعلة</label>

</div>

</div>

<div class="w-[50%]">
                                       <label
                                           class="flex justify-center w-full h-32 px-1 transition border-2 border_card border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                           <span class="flex items-center space-x-2">
                                            <svg class="icon_card p-1 rounded-lg w-10 h-10" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00001 15C5.01503 15.0011 4.06427 14.6387 3.32988 13.9823C2.5955 13.3259 2.12913 12.4216 2.02012 11.4427C1.91112 10.4637 2.16714 9.47899 2.73915 8.67711C3.31115 7.87523 4.15891 7.3126 5.12001 7.097C4.84193 5.80009 5.09044 4.44583 5.81086 3.33215C6.53128 2.21846 7.6646 1.43658 8.96151 1.1585C10.2584 0.880417 11.6127 1.12892 12.7264 1.84934C13.84 2.56976 14.6219 3.70309 14.9 5H15C16.24 4.99875 17.4361 5.45828 18.3563 6.28937C19.2765 7.12046 19.8551 8.26383 19.9797 9.4975C20.1043 10.7312 19.7661 11.9671 19.0307 12.9655C18.2953 13.9638 17.2152 14.6533 16 14.9M14 12L11 9M11 9L8.00001 12M11 9V21" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                               <span class="font-medium  px-3">
                                                إضافة صورة للمقال
                                                  
                                                   <input class="block pt-4  underline" type="file" accept="image/*" @change="onChange" />
                                               </span>
                                           </span>
                                          </label>
                                          
                                               
                                   </div>
  
          <div class="mt-4">
            <button 
              type="submit"
              class="inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] rounded-lg sm:w-auto"
          >
              <span class="font-medium text-gray-900"> تعديل العملة </span>
  
            </button>
          </div>
        </form>
      </div>

  
  
    </section>
  </div>
  
  </div>
        
     
  
  
    </div>
  </template>
  
  <script>
  import navside from '@/components/Dashboard/navside.vue'
  import axios from "axios"
  
  export default {
    name: 'EditBlog',
    components: {
        navside
        },
  data(){
    return{
      title:'',
      body:'',
      image : null,
      imageUrl: null,
      blogs:[],
      currency:'',
      isActive:'',
      blogs_id:'',
      users: null
    }
  },
 
  async created(){
    const response = await axios.get('/api/v1/currency/'+ this.$route.params.id)
    this.currency = response.data;

  },
 
  methods:{
    

async updataPost(){

const response = await axios.post('/api/v1/currency/'+ this.$route.params.id,this.currency);
if(response.status === 200)
{
    this.$router.push("/dash-currency");
}

},

  
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  