<template>
    <div class="EditUser">
  
  <div class="grid grid-cols-4 gap-4">
  <div class="">
    <navside />
  </div>
  <div class="col-span-3">
    <section class="ground">
      <div>
      
    </div>
      <div class="card_ground mt-10 p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        <form @submit.prevent="updataUser"  class="space-y-4">
  
          
         
          <div>
            <label class="sr-only" for="name">name</label>
            <input v-model="user.name" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card   placeholder:text-gray-600 " placeholder="name of user" type="text" id="name" />
          </div>

          <div>
            <label class="sr-only" for="phoneNumber">phoneNumber</label>
            <input v-model="user.phoneNumber" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card   placeholder:text-gray-600 " placeholder="phoneNumber of user" type="text" id="phoneNumber" />
          </div>
         
  
          <div>
            <label class="sr-only" for="email">address</label>
            <input v-model="user.address" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card   placeholder:text-gray-600 " placeholder="address of user" type="text" id="address" />
          </div>

          <div>
            <label class="sr-only" for="email">role</label>
            <input v-model="user.role" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card   placeholder:text-gray-600 " placeholder="role of user" type="text" id="role" />
          </div>

          

    <div class="inline-block m-1 p-2 mt-3 w-auto h-10 rounded-md" >
  <input class="appearance-none rounded-full h-4 w-4 mt-1 border border-gray-600  checked:bg-emerald-400 checked:border-blue-600 focus:outline-none" type="radio" id="true" value="true" v-model="user.isActive" />
  <label class="px-4 mt-1" for="true">مستخدم مفعل</label>
  
  </div>
  
  <div class="inline-block m-1 p-2 mt-3 w-auto h-10 rounded-md " >
  <input class="appearance-none rounded-full h-4 w-4 mt-1 border border-gray-600  checked:bg-emerald-400 checked:border-blue-600 focus:outline-none" type="radio" id="false" value="false" v-model="user.isActive" />
  <label class="px-4 mt-1" for="false">مستخدم غير مفعل</label>
  
  </div>
<hr>
  <div>
    <div class="inline-block m-1 p-2 mt-3  w-auto h-10 rounded-md" >
  <input class="appearance-none rounded-full h-4 w-4 mt-1 border border-gray-600 checked:bg-emerald-400 checked:border-blue-600 focus:outline-none" type="radio" id="true" value="true" v-model="user.isVerified" />
  <label class="px-4 mt-1" for="true">مستخدم موثق</label>
  
  </div>
  
  <div class="inline-block m-1 p-2 mt-3  w-auto h-10 rounded-md " >
  <input class="appearance-none rounded-full h-4 w-4 mt-1 border border-gray-600 checked:bg-emerald-400 checked:border-blue-600 focus:outline-none" type="radio" id="false" value="false" v-model="user.isVerified" />
  <label class="px-4 mt-1" for="false">مستخدم غير موثق</label>
  
  </div>      
 </div>

  
         
  
         
  
          <div class="mt-4">
            <button 
              type="submit"
              class="inline-flex items-center justify-center w-full px-5 py-3  bg-[#FCD34D] rounded-lg sm:w-auto"
          >
              <span class="font-medium text-gray-900"> تعديل المستخدم </span>
  
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
    name: 'EditUser',
    components: {
        navside
        },
  data(){
    return{
      name:'',
      email:'',
      phoneNumber:'',
      image : null,
      imageUrl: null,
      isActive: '',
      isVerified:'',
      users:[],
      user:'',
      blogs_id:'',
    }
  },
 
  async created(){
     await axios.get('/api/v1/users/'+ this.$route.params.id)
      .then((res)=>{
      this.user = res.data.user;
    })

},
 
  methods:{
    

async updataUser(){

const response = await axios.post('/api/v1/users/updateUser/'+ this.$route.params.id,this.user);
if(response.status === 200)
{
    this.$router.push("/dash-users");
}

},

  
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  