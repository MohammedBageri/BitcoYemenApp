<template>
    <navbar/>
    <section class="ground mt-10">
    <div class="BlogPost">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">

        <div class="mr-0 text-right col-span-2">
                        <div>
                            <span class="inline-block w-1 h-10 line_ground"></span>
                            
                            <h2 class="inline-block mr-4 mb-5 text-xl font-extrabold tracking-wide md:text-2xl lg:text-3xl title_ground">{{blog.title}}</h2>

                            <img 
                            class="rounded-lg "
                            :src="`${api_url}/${blog.imageUrl}`"
                            crossorigin="true"
                            >
                            

                            <p class="textheight block w-full mt-10 text-md font-light md:text-1xl lg:text-xl">
                                {{blog.body}}
                                
                            </p>
                            
                        </div>
                    </div>

                    <div class="card_ground h-screen overflow-auto rounded-lg sticky top-0 mr-0 text-right">
                      <div class="p-5"> 

                        <div class="relative w-full sticky top-0 card_ground inline-flex items-center "> 
                        <svg class="inlin-block h-5 w-5" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M440.667 150.109L447.81 110.109C449.123 102.754 443.468 96 435.997 96H361.187L375.81 14.109C377.123 6.754 371.468 0 363.997 0H323.365C320.548 5.11667e-05 317.821 0.990994 315.662 2.79931C313.502 4.60762 312.047 7.11805 311.552 9.891L296.175 96H197.54L212.163 14.109C213.477 6.754 207.822 0 200.35 0H159.718C156.901 5.11667e-05 154.174 0.990994 152.015 2.79931C149.855 4.60762 148.4 7.11805 147.905 9.891L132.528 96H53.4321C50.6153 96.0001 47.8883 96.991 45.7286 98.7993C43.5689 100.608 42.1142 103.118 41.6191 105.891L34.4761 145.891C33.1631 153.246 38.8181 160 46.2891 160H121.099L98.2421 288H19.1461C16.3293 288 13.6023 288.991 11.4426 290.799C9.28291 292.608 7.82816 295.118 7.33311 297.891L0.19011 337.891C-1.12289 345.246 4.53211 352 12.0031 352H86.8131L72.1901 433.891C70.8771 441.246 76.5321 448 84.0031 448H124.635C127.452 448 130.179 447.009 132.339 445.201C134.498 443.392 135.953 440.882 136.448 438.109L151.826 352H250.46L235.837 433.891C234.523 441.246 240.178 448 247.65 448H288.282C291.099 448 293.826 447.009 295.986 445.201C298.145 443.392 299.6 440.882 300.095 438.109L315.472 352H394.568C397.385 352 400.112 351.009 402.272 349.201C404.431 347.392 405.886 344.882 406.381 342.109L413.524 302.109C414.837 294.754 409.182 288 401.711 288H326.901L349.758 160H428.854C431.671 160 434.398 159.009 436.558 157.201C438.717 155.392 440.172 152.882 440.667 150.109V150.109ZM261.889 288H163.255L186.112 160H284.746L261.889 288Z" fill="#E0A82E"/>
</svg>

                        <h1 class="inlin-block py-4 px-3">مواضيع اخرى قد تهمك</h1>
                        </div>
                        <div class="max-w-screen-2xl px-0 mx-auto sm:px-6 lg:px-0">
                        
                        <div class="mt-1">
                        <ul class="grid grid-cols-1 mt-3 gap-x-4 gap-y-2">
 <li class="card_ground p-2 rounded-md" v-for="blog in blogs" :key="blog.id" :names="blog.title" :blogid="blog._id">

 <router-link :to="{name: 'BlogPost',params: {id:blog._id}}">
  <a class="p-4">{{blog.title}}</a>
</router-link>
                                                        
                                                    
 
</li>


                                </ul>


  </div>
  </div>
                      </div>
                  </div>
  
        
     </div>
    </div>
    </section>

    <section6/>

  </template>
  
  <script>
  import navbar from '@/components/navbar.vue'
  import blog_list from '@/components/Blog/blog_list.vue'
  import section6 from '@/components/Home/section6.vue'
  import axios from "axios"
  
  export default {
    name: 'BlogPost',
    components: {
        navbar,
        blog_list,
        section6
        },
  data(){
    return{
      api_url: import.meta.env.VITE_API_URL ,
      title:'',
      body:'',
      image : null,
      imageUrl: null,
      blogs:[],
      blog:'',
      blogs_id:'',
      users: null
    }
  },
  
 
  async created(){
    const response = await axios.get('/api/v1/blog/'+ this.$route.params.id)
    this.blog = response.data;

    axios.get('/api/v1/blog/').then((res)=>{
      this.blogs = res.data;
    })
  },
 
  methods:{
    

async updataPost(){

const response = await axios.post('/api/v1/blog/'+ this.$route.params.id,this.blog);
if(response.status === 200)
{
    this.$router.push("/dash-blog");
}

},

  
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .textheight{
    line-height:40px;
  }
  a.router-link-active{
  background-color:none;
  color: #1F262A;
  border-radius: 5px; 
  padding:10px 0px 10px 10px;
}
  </style>
  