<template>
    <div class="EditRecommendation">
  
  <div class="grid grid-cols-4 gap-4">
  <div class="">
    <navside />
  </div>
  <div class="col-span-3">
    <section class="ground">
      <div>
      
    </div>
      <div class="card_ground mt-10 p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        <form @submit.prevent="updataRecommendation"  class="space-y-4">
  
          
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
            <label class="sr-only" for="name">name of Recommendation</label>
            <input v-model="recommendation.name" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card   placeholder:text-gray-600 " placeholder="name of product" type="text" id="name" />
          </div>

          <div>
            <label class="sr-only" for="status">status</label>
            <input v-model="recommendation.status" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card  placeholder:text-gray-600 " placeholder="status ..." type="text" id="status" />
          </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="sr-only" for="price">price</label>
            <input v-model="recommendation.price" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card  placeholder:text-gray-600 " placeholder="inter price of recommendation" type="text" id="price" />
          </div>

          <div>
            <label class="sr-only" for="tp1">tp1</label>
            <input v-model="recommendation.tp1" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card  placeholder:text-gray-600 " placeholder="inter value of tp1" type="text" id="tp1" />
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="sr-only" for="tp2">tp2</label>
            <input v-model="recommendation.tp2" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder="inter value of tp2" type="text" id="tp2" />
          </div>

          <div>
            <label class="sr-only" for="tp3">tp3</label>
            <input v-model="recommendation.tp3" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder="inter value of tp3" type="text" id="tp3" />
          </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="sr-only" for="sl">sl</label>
            <input v-model="recommendation.sl" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder="sl ..." type="text" id="sl" />
          </div>

          <div>
            <label class="sr-only" for="date">date</label>
            <input v-model="recommendation.date" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder="date ..." type="text" id="date" />
          </div>
        </div>
  
          
  
          <div class="mt-4">
            <button 
              type="submit"
              class="inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] rounded-lg sm:w-auto"

            >
              <span class="font-medium text-gray-900"> تعديل التوصية </span>
  
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
    name: 'EditRecommendation',
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
      recommendation:'',
      blogs_id:'',
      users: null
    }
  },
 
  async created(){
    const response = await axios.get('/api/v1/recommendation/'+ this.$route.params.id)
    this.recommendation = response.data;

  },
 
  methods:{
    

async updataRecommendation(){

const response = await axios.post('/api/v1/recommendation/'+ this.$route.params.id,this.recommendation);
if(response.status === 200)
{
    this.$router.push("/dash-recommendation");
}

},

  
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  