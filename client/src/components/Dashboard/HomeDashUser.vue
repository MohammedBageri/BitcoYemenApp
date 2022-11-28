<template>
  <div class="DashUser">

<div class="grid grid-cols-4 gap-4">
<div class="">
  <navside />
</div>
<div class="col-span-4 lg:col-span-3">
  <section class="ground">
    <div>
    
  </div>
  

    <div class="mt-10 overflow-hidden overflow-x-auto border border-gray-100 rounded">
<table class="card_ground min-w-full text-sm divide-y divide-gray-200">
  <thead>
    <tr class="text-lg">
      <th  class="px-4 py-2 font-medium text-right  whitespace-nowrap">Name of user</th>
      <th class="px-4 py-2 font-medium text-right  whitespace-nowrap">email</th>
      <th class="px-4 py-2 font-medium text-right  whitespace-nowrap">Number</th>
      <th class="px-4 py-2 font-medium text-right  whitespace-nowrap">address</th>
      <th class="px-4 py-2 font-medium text-right  whitespace-nowrap">Settings</th>
    </tr>
  </thead>

  <tbody  v-for="user in users" :key="user.id" class="card_ground divide-y divide-gray-400">
    <tr>
      <td class="px-4 py-2 font-medium  whitespace-nowrap">{{user.name}}</td>
      <td class="px-4 py-2  whitespace-nowrap">{{user.email}}</td>
      <td class="px-4 py-2  whitespace-nowrap">{{user.phoneNumber}}</td>
      <td class="px-4 py-2  whitespace-nowrap">{{user.address}}</td>
      <td class="px-4 py-2  whitespace-nowrap"><router-link class="inline-flex w-full items-center justify-center bg-white sm:w-auto  p-1 px-5 "
    :to="{
      name: 'EditUser',
      params: {id:user._id}
    }">
    
    <span class="font-bold text-lg text-gray-800"> Edit </span>
    <svg class="w-5 h-5 mr-2" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.53491 22.6651L20.4879 4.71164L25.2736 9.49732L7.32011 27.4503L2.53491 22.6651Z" fill="#1F262A"/>
<path d="M27.3253 7.44604L28.0089 6.76244C28.648 6.12332 29 5.27389 29 4.36984C29 3.46579 28.648 2.61636 28.0089 1.97724C27.3698 1.33812 26.5199 0.985199 25.6158 0.985199C24.7118 0.985199 23.8624 1.33763 23.2228 1.97676L22.5392 2.66036L27.3253 7.44604Z" fill="#1F262A"/>
<path d="M1.98185 23.4787L0.0248424 29.3488C-0.0331718 29.5223 0.0122726 29.7143 0.141838 29.8433C0.233693 29.9352 0.357457 29.985 0.483637 29.985C0.534883 29.985 0.586129 29.9768 0.636408 29.9599L6.50599 28.0033L1.98185 23.4787Z" fill="#1F262A"/>
<path d="M21.172 4.02802L21.856 3.34393L26.6417 8.12962L25.9576 8.8137L21.172 4.02802Z" fill="#1F262A"/>
</svg>

  </router-link></td>
    

    </tr>
  </tbody>
</table>
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
  name: 'DashUser',
  components: {
      navside,
  },
data(){
  return{
    name:'',
    details:'',
    price:'',
    image : null,
    imageUrl: null,
    users:[],
    user:''
  }
},
async created(){
     await axios.get('/api/v1/users/')
      .then((res)=>{
      this.users = res.data.users;
    })

},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
