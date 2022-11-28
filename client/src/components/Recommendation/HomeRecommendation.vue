<template>
  <div class="HomeRecommendation">
<navbar />
   
   <section class="ground mt-10">
   <div class=" mr-0 text-right">
                        <div>
                            <span class="inline-block w-12 h-1 line_ground"></span>
                            
                            <h2 class="mt-1 text-xl font-extrabold tracking-wide md:text-2xl lg:text-3xl">التوصيات</h2>
                            <p class="sub_text inline-block w-full md:w-1/2 mt-5 text-md font-light leading-9 md:text-1xl lg:text-1xl">
                            يشير الناس الى شبكة الريبل وعملتها الالكترونية الخاصة بها باسم “الريبل”، مما يؤدي غالباً الى حدوث ارتباك حولها لأنها تحمل الاسم ذاته لشبكة المدفوعات والعملة الخاصة
                            </p>
                        </div>
                    </div>
                    
                    <div class="max-w-screen-2xl px-0 py-12 mx-auto sm:px-6 lg:px-0">
                        
                        <div class="mt-4">
                        <div class="grid grid-cols-1 mt-8 md:grid-cols-1 lg:grid-cols-1 gap-x-4 gap-y-8">
                       <recommendation v-for="recommendation in recommendations" :key="recommendation.id" :names="recommendation.name" :prices="recommendation.price" :tp1s="recommendation.tp1" :tp2s="recommendation.tp2" :tp3s="recommendation.tp3" :sls="recommendation.sl" :statuss="recommendation.status" :dates="recommendation.date" />


                                </div>


  </div>
  </div>
  </section>

<section6/>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import recommendation from '@/components/Recommendation/recommendation.vue'
import section6 from '@/components/Home/section6.vue'
import axios from "axios"

export default {
  name: 'HomeRecommendation',
  components: {
    navbar,
    recommendation,
    section6
  },
data(){
  return{
   recommendations:[],
  }
},
async created(){
  const recommendations = localStorage.getItem("recommendations");

      if (recommendations) {
        this.recommendations = JSON.parse(recommendations);
        return;
      }
     await axios.get('/api/v1/recommendation/').then((res)=>{
      this.recommendations = res.data.recommendations;
      localStorage.setItem("recommendations", JSON.stringify(response.data));
    })

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

