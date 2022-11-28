<template>
  <div class="HomeBlog">
<navbar />
   
   <section class="ground mt-10">
   <div class=" mr-0 text-right">
                        <div>
                            <span class="inline-block w-12 h-1 line_ground"></span>
                            
                            <h2 class="mt-1 text-xl font-extrabold tracking-wide md:text-2xl lg:text-3xl">المدونة</h2>
                            <p class="sub_text inline-block w-full md:w-1/2 mt-5 text-md font-light leading-9 md:text-1xl lg:text-1xl">
                            يشير الناس الى شبكة الريبل وعملتها الالكترونية الخاصة بها باسم “الريبل”، مما يؤدي غالباً الى حدوث ارتباك حولها لأنها تحمل الاسم ذاته لشبكة المدفوعات والعملة الخاصة
                            </p>
                        </div>
                    </div>
                    
                    <div class="max-w-screen-2xl px-0 py-12 mx-auto sm:px-6 lg:px-0">
                        
                        <div class="mt-4">
                        <ul class="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
 <blog class="card_ground" v-for="blog in blogs" :key="blog.id" :names="blog.title" :bodys="blog.body" :photos="blog.imageUrl" :blogid="blog._id" />


                                </ul>


  </div>
  </div>
  </section>
<section6 />

  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import blog from '@/components/Blog/blog.vue'
import section6 from '@/components/Home/section6.vue'

import axios from "axios"

export default {
  name: 'HomeBlog',
  components: {
    navbar,
    blog,
    section6,
  },
data(){
  return{
   blogs:[],
   
  }
},
 created(){
  
      axios.get('/api/v1/blog/').then((res)=>{
      this.blogs = res.data;
    })

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
