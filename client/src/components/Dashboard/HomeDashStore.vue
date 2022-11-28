<template>
    <div class="DashStore">

<div class="grid grid-cols-4 gap-4">
  <div class="col-span-1">
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
            <label class="sr-only" for="name">name</label>
            <input v-model="name" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder="اسم المنتج ..." type="text" id="name" />
          </div>

          <div>
            <label class="sr-only" for="details">details</label>
            <textarea rows="5" cols="50" v-model="details" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder="وصف المنتج ..." type="text" id="details"></textarea>
          </div>

          <div>
            <label class="sr-only" for="price">price</label>
            <input v-model="price" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder="سعر المنتج ..." type="text" id="price" />
          </div>

          <div class="w-[50%]">
                                       <label
                                           class="flex justify-center w-full h-32 px-1 transition border-2 border_card border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                           <span class="flex items-center space-x-2">
                                            <svg class="icon_card p-1 rounded-lg w-10 h-10" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00001 15C5.01503 15.0011 4.06427 14.6387 3.32988 13.9823C2.5955 13.3259 2.12913 12.4216 2.02012 11.4427C1.91112 10.4637 2.16714 9.47899 2.73915 8.67711C3.31115 7.87523 4.15891 7.3126 5.12001 7.097C4.84193 5.80009 5.09044 4.44583 5.81086 3.33215C6.53128 2.21846 7.6646 1.43658 8.96151 1.1585C10.2584 0.880417 11.6127 1.12892 12.7264 1.84934C13.84 2.56976 14.6219 3.70309 14.9 5H15C16.24 4.99875 17.4361 5.45828 18.3563 6.28937C19.2765 7.12046 19.8551 8.26383 19.9797 9.4975C20.1043 10.7312 19.7661 11.9671 19.0307 12.9655C18.2953 13.9638 17.2152 14.6533 16 14.9M14 12L11 9M11 9L8.00001 12M11 9V21" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                               <span class="font-medium px-3">
                                                إضافة صورة للمنتج
                                                  
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
              <span class="font-medium text-gray-900">إضافة المنتج</span>

            </button>
          </div>
        </form>
      </div>

      <div class="mt-10 overflow-hidden overflow-x-auto border border_card rounded">
  <table class="card_ground min-w-full text-sm divide-y divide-gray-200">
    <thead>
      <tr class="text-lg">
        <th  class="px-4 py-2 font-medium text-right  whitespace-nowrap">اسم المنتج </th>
        <th class="px-4 py-2 font-medium text-right  whitespace-nowrap">سعر المنتج </th>
        <th class="px-4 py-2 font-medium text-right  whitespace-nowrap">وصف المنتج </th>
        <th class="px-4 py-2 font-medium text-right  whitespace-nowrap">الإعدادات</th>
      </tr>
    </thead>

    <tbody  v-for="product in products" :key="product.id" class="divide-y divide-red-400">
      <tr>
        <td class="px-4 py-2 font-medium whitespace-nowrap">{{product.name}}</td>
        <td class="px-4 py-2 whitespace-nowrap">{{product.price}}</td>
        <td class="px-4 py-2 whitespace-nowrap">{{product.details.substring(0,70)+"..."}}</td>
       <td class="px-4 py-2 whitespace-nowrap">
        <router-link class="inline-flex w-full items-center justify-center bg-white sm:w-auto  p-1 px-5 "
    :to="{
      name: 'EditProduct',
      params: {id:product._id}
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
    name: 'DashStore',
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
      products:[],
      users: null,
      message:''
    }
  },
  async created(){
  
  await axios.get('api/v1/product/').then((res)=>{
  this.products = res.data.products;
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
  form.append('name', this.name);
  form.append('details', this.details);
  form.append('price',this.price);
  form.append('image', this.image);
  const data = {
    name: this.name,
    details: this.details,
    price: this.price,
    image: this.file
     };
  
  const response = await axios.post('/api/v1/product', form, {
    headers : {
      'content-type': 'multipart/form-data'
    }
  }).then((response) => {
          if (response.status === 201) {
            this.$router.go();
          }
        })
        .catch((error) => {
          this.message = error.response.data.msg;
          console.log(message);
        });

},


  },
  
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  