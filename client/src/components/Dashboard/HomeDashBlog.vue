<template>
  <div class="DashBlog">

<div class="grid grid-cols-4 gap-4">
<div class="">
  <navside />
</div>
<div class="col-span-4 lg:col-span-3">
  <section class="ground">
    <div>
    
  </div>
    <div class="card_ground mt-10 p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <p v-show="message" class="bg-red-300  rounded-md p-3">
          خطأ : {{ message }}
        </p>
        <div>
          <label class="sr-only" for="title">title</label>
          <input v-model="title" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder="عنوان المقال ..." type="text" id="title" />
        </div>
       

        <div>
          <label class="sr-only" for="body">body</label>
          <textarea rows="10" cols="50" v-model="body" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder="محتوى المقال ..." type="text" id="body" ></textarea>
        </div>

        <div class="w-[50%]">
                                       <label
                                           class="flex justify-center w-full h-32 px-1 transition border-2 border_card border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                           <span class="flex items-center space-x-2">
                                            <svg class="icon_card p-1 rounded-lg w-10 h-10" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00001 15C5.01503 15.0011 4.06427 14.6387 3.32988 13.9823C2.5955 13.3259 2.12913 12.4216 2.02012 11.4427C1.91112 10.4637 2.16714 9.47899 2.73915 8.67711C3.31115 7.87523 4.15891 7.3126 5.12001 7.097C4.84193 5.80009 5.09044 4.44583 5.81086 3.33215C6.53128 2.21846 7.6646 1.43658 8.96151 1.1585C10.2584 0.880417 11.6127 1.12892 12.7264 1.84934C13.84 2.56976 14.6219 3.70309 14.9 5H15C16.24 4.99875 17.4361 5.45828 18.3563 6.28937C19.2765 7.12046 19.8551 8.26383 19.9797 9.4975C20.1043 10.7312 19.7661 11.9671 19.0307 12.9655C18.2953 13.9638 17.2152 14.6533 16 14.9M14 12L11 9M11 9L8.00001 12M11 9V21" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                               <span class="font-medium px-3">
                                                إضافة صورة للمقال
                                                  
                                                   <input class="block pt-4 underline" type="file" accept="image/*" @change="onChange" />
                                               </span>
                                           </span>
                                          </label>
                                          
                                               
                                   </div>
       

      

        <div class="mt-4">
          <button
            type="submit"
            class="inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] rounded-lg sm:w-auto"
          >
            <span class="font-extrabold text-gray-900">إضافة مقال</span>

          </button>
        </div>
      </form>
    </div>

    <div class="mt-10 overflow-hidden overflow-x-auto border border_card rounded">
<table
 class="card_ground min-w-full text-sm divide-y divide-gray-400">
  <thead>
    <tr class="text-lg">
      <th  class="px-4 py-2 font-medium text-right  whitespace-nowrap">عنوان المقال </th>
      <th class="px-4 py-2 font-medium text-right  whitespace-nowrap">محتوى المقال </th>
      <th class="px-4 py-2 font-medium text-right  whitespace-nowrap">الإعدادات</th>
    </tr>
  </thead>

  <tbody  v-for="blog in blogs" :key="blog.id" :value="blog._id" class="divide-y divide-gray-400">
    <tr>
      <td class="px-4 py-2 font-medium  whitespace-nowrap">{{blog.title}}</td>
      <td class="px-4 py-2 font-medium  whitespace-nowrap">{{blog.body.substring(0,30)+"..."}}</td>
      <td class="px-4 py-2  whitespace-nowrap"> 
        <button 
        @click="deletePost(blog._id)" 
        class="inline-flex w-full items-center justify-center bg-white  sm:w-auto  p-1 px-5 ">
        <span class="font-bold text-lg text-gray-800"> حذف </span>
        <svg class="w-5 h-5 mr-2" viewBox="0 0 29 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7518 28.1911C14.7518 23.7469 18.3672 20.1316 22.8114 20.1316C23.708 20.1316 24.5698 20.2809 25.3761 20.5523L26.0468 12.5038H0.578491L2.57295 36.4364C2.78616 38.9954 4.9647 41 7.53272 41H19.0927C21.6606 41 23.8392 38.9954 24.0524 36.4364L24.0762 36.1505C23.6639 36.2158 23.2416 36.2507 22.8114 36.2507C18.3673 36.2507 14.7518 32.6353 14.7518 28.1911Z" fill="#EF4444"/>
<path d="M22.8114 22.0025C19.399 22.0025 16.6228 24.7788 16.6228 28.1911C16.6228 31.6035 19.399 34.3797 22.8114 34.3797C26.2237 34.3797 29 31.6035 29 28.1911C29 24.7788 26.2237 22.0025 22.8114 22.0025ZM25.8476 29.9042C26.2129 30.2696 26.2129 30.8619 25.8476 31.2273C25.6649 31.4099 25.4254 31.5012 25.186 31.5012C24.9467 31.5012 24.7071 31.4099 24.5244 31.2273L22.8114 29.5142L21.0983 31.2273C20.9156 31.4099 20.6761 31.5012 20.4367 31.5012C20.1974 31.5012 19.9578 31.4099 19.7751 31.2273C19.4098 30.8619 19.4098 30.2696 19.7751 29.9042L21.4882 28.1911L19.7751 26.478C19.4098 26.1126 19.4098 25.5203 19.7751 25.1549C20.1405 24.7898 20.7327 24.7898 21.0981 25.1549L22.8112 26.868L24.5244 25.1549C24.8899 24.7898 25.4822 24.7898 25.8476 25.1549C26.2129 25.5203 26.2129 26.1126 25.8476 26.478L24.1345 28.1911L25.8476 29.9042Z" fill="#EF4444"/>
<path d="M9.49875 3.7845C9.49875 2.83893 10.2681 2.06961 11.2136 2.06961H15.4114C16.3571 2.06961 17.1264 2.83893 17.1264 3.7845V4.95318H18.9974V3.7845C18.9975 1.80735 17.3888 0.198654 15.4115 0.198654H11.2138C9.23663 0.198654 7.62793 1.80735 7.62793 3.7845V4.95318H9.49875V3.7845V3.7845Z" fill="#EF4444"/>
<path d="M26.6253 8.94182C26.6253 7.77411 25.6753 6.82413 24.5076 6.82413H2.11769C0.949971 6.82413 0 7.77411 0 8.94182V10.6329H26.6253V8.94182Z" fill="#EF4444"/>
</svg>

      </button> 
      |  
        <router-link class="inline-flex w-full items-center justify-center bg-white sm:w-auto  p-1 px-5 "
    :to="{
      name: 'EditBlog',
      params: {id:blog._id}
    }">
    
    <span class="font-bold text-lg text-gray-800"> تعديل </span>
    <svg class="w-5 h-5 mr-2" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.53491 22.6651L20.4879 4.71164L25.2736 9.49732L7.32011 27.4503L2.53491 22.6651Z" fill="#1F262A"/>
<path d="M27.3253 7.44604L28.0089 6.76244C28.648 6.12332 29 5.27389 29 4.36984C29 3.46579 28.648 2.61636 28.0089 1.97724C27.3698 1.33812 26.5199 0.985199 25.6158 0.985199C24.7118 0.985199 23.8624 1.33763 23.2228 1.97676L22.5392 2.66036L27.3253 7.44604Z" fill="#1F262A"/>
<path d="M1.98185 23.4787L0.0248424 29.3488C-0.0331718 29.5223 0.0122726 29.7143 0.141838 29.8433C0.233693 29.9352 0.357457 29.985 0.483637 29.985C0.534883 29.985 0.586129 29.9768 0.636408 29.9599L6.50599 28.0033L1.98185 23.4787Z" fill="#1F262A"/>
<path d="M21.172 4.02802L21.856 3.34393L26.6417 8.12962L25.9576 8.8137L21.172 4.02802Z" fill="#1F262A"/>
</svg>

  </router-link> </td>

      
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
  name: 'DashBlog',
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
    blog:{},
    blogs_id:'',
    users: null,
    message:''
  }
},
async created(){
      await axios.get('/api/v1/blog/')
      .then((res)=>{
      this.blogs = res.data;
    })

},
methods:{
  
  
onChange(e) {
const file = e.target.files[0]
this.image = file
this.item.imageUrl = URL.createObjectURL(file)
},

async handleSubmit(){
let form = new FormData()
form.append('title', this.title);
form.append('body', this.body);
form.append('image', this.image);
const data = {
  title: this.title,
  body: this.body,
  image: this.file
   };

const response = await axios.post('/api/v1/blog', form, {
  headers : {
    'content-type': 'multipart/form-data'
  }
}).then((response) => {
          if (response.status === 200) {
            this.$router.go();
          }
        })
        .catch((error) => {
          this.message = error.response.data.msg;
          console.log(message);
        });

},

async deletePost(_id){
  const response = await axios.delete('/api/v1/blog/'+_id) 
  .then(() => {
    this.$router.go();
   });

}

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
