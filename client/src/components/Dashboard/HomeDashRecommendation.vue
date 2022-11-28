<template>
    <div class="DashRecommendation">

<div class="grid grid-cols-4 gap-4">
  <div class="">
    <navside />
  </div>
  <div class="col-span-4 lg:col-span-3">
    <section class="ground">
      <div class="card_ground mt-10 p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        <form @submit.prevent="handleSubmit" class="space-y-4 ">
          <p v-show="message" class="bg-red-300 rounded-md p-3">
          خطأ : {{ message }}
        </p>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="sr-only" for="name">زوج العملات</label>
            <input v-model="name" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 "  placeholder="زوج العملات ..." type="text" id="name" />
          </div>

          <div>
            <label class="sr-only" for="status">الوضع الحالي</label>
            <input v-model="status" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 "  placeholder="الوضع الحالي ..." type="text" id="status" />
          </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="sr-only" for="price">سعر الشراء</label>
            <input v-model="price" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 "  placeholder=" الشراء ..." type="text" id="price" />
          </div>

          <div>
            <label class="sr-only" for="tp1">Tp1</label>
            <input v-model="tp1" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 "  placeholder="Tp1 ..." type="text" id="tp1" />
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="sr-only" for="tp2">Tp2</label>
            <input v-model="tp2" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 "  placeholder="Tp2 ..." type="text" id="tp2" />
          </div>

          <div>
            <label class="sr-only" for="tp3">Tp3</label>
            <input v-model="tp3" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 "  placeholder="Tp3 ..." type="text" id="tp3" />
          </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="sr-only" for="sl">وقف الخساره</label>
            <input v-model="sl" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 "  placeholder="وقف الخساره ..." type="text" id="sl" />
          </div>

          <div>
            <label class="sr-only" for="date">تاريخ نشر التوصيه</label>
            <input v-model="date" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 "  placeholder="تاريخ نشر التوصيه ..." type="text" id="date" />
          </div>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] rounded-lg sm:w-auto"
          >
              <span class="font-medium text-gray-900">إضافة التوصيه</span>

            </button>
          </div>
        </form>
      </div>


    <div class="mt-10 overflow-hidden overflow-x-auto border border-gray-100 rounded">
  <table class="card_ground w-full text-md divide-y divide-gray-200">
    <thead>
      <tr class="text-lg ">
        <th class="px-4 py-4 font-larg text-right whitespace-nowrap"> الوضع الحالي</th>
        <th class="px-4 py-4 font-larg text-right whitespace-nowrap">زوج العملات</th>
        <th class="px-4 py-4 font-larg text-right whitespace-nowrap">سعر الشراء</th>
        <th class="px-4 py-3 font-larg text-right whitespace-nowrap">Tp1</th>
        <th class="px-4 py-3 font-larg text-right whitespace-nowrap">Tp2</th>
        <th class="px-4 py-3 font-larg text-right whitespace-nowrap">Tp3</th>
        <th class="px-4 py-3 font-larg text-right whitespace-nowrap">وقف الخساره</th>
        <th class="px-4 py-4 font-larg text-right whitespace-nowrap">تاريخ نشر التوصيه</th>
        <th class="px-4 py-2 font-medium text-right whitespace-nowrap">الإعدادات</th>
        
      </tr>
    </thead>

    <tbody class="card_ground divide-y divide-gray-400">
      <tr v-for="recommendation in recommendations" :key="recommendation.id" >
       
        <td class="px-4 py-3  whitespace-nowrap">{{recommendation.status}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{recommendation.name}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{recommendation.price}}</td>
        <td class="px-4 py-3  font-medium whitespace-nowrap">{{recommendation.tp1}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{recommendation.tp2}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{recommendation.tp3}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{recommendation.sl}}</td>
        <td class="px-4 py-3  whitespace-nowrap">{{recommendation.date}}</td>
        <td class="px-4 py-3  whitespace-nowrap">
          <button 
        @click="deleteRecommendation(recommendation._id)" 
        class="inline-flex w-full items-center justify-center bg-white  sm:w-auto  p-1 px-5">
        <span class="font-bold text-lg text-gray-800"> حذف </span>
        <svg class="w-5 h-5 mr-2" viewBox="0 0 29 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7518 28.1911C14.7518 23.7469 18.3672 20.1316 22.8114 20.1316C23.708 20.1316 24.5698 20.2809 25.3761 20.5523L26.0468 12.5038H0.578491L2.57295 36.4364C2.78616 38.9954 4.9647 41 7.53272 41H19.0927C21.6606 41 23.8392 38.9954 24.0524 36.4364L24.0762 36.1505C23.6639 36.2158 23.2416 36.2507 22.8114 36.2507C18.3673 36.2507 14.7518 32.6353 14.7518 28.1911Z" fill="#EF4444"/>
<path d="M22.8114 22.0025C19.399 22.0025 16.6228 24.7788 16.6228 28.1911C16.6228 31.6035 19.399 34.3797 22.8114 34.3797C26.2237 34.3797 29 31.6035 29 28.1911C29 24.7788 26.2237 22.0025 22.8114 22.0025ZM25.8476 29.9042C26.2129 30.2696 26.2129 30.8619 25.8476 31.2273C25.6649 31.4099 25.4254 31.5012 25.186 31.5012C24.9467 31.5012 24.7071 31.4099 24.5244 31.2273L22.8114 29.5142L21.0983 31.2273C20.9156 31.4099 20.6761 31.5012 20.4367 31.5012C20.1974 31.5012 19.9578 31.4099 19.7751 31.2273C19.4098 30.8619 19.4098 30.2696 19.7751 29.9042L21.4882 28.1911L19.7751 26.478C19.4098 26.1126 19.4098 25.5203 19.7751 25.1549C20.1405 24.7898 20.7327 24.7898 21.0981 25.1549L22.8112 26.868L24.5244 25.1549C24.8899 24.7898 25.4822 24.7898 25.8476 25.1549C26.2129 25.5203 26.2129 26.1126 25.8476 26.478L24.1345 28.1911L25.8476 29.9042Z" fill="#EF4444"/>
<path d="M9.49875 3.7845C9.49875 2.83893 10.2681 2.06961 11.2136 2.06961H15.4114C16.3571 2.06961 17.1264 2.83893 17.1264 3.7845V4.95318H18.9974V3.7845C18.9975 1.80735 17.3888 0.198654 15.4115 0.198654H11.2138C9.23663 0.198654 7.62793 1.80735 7.62793 3.7845V4.95318H9.49875V3.7845V3.7845Z" fill="#EF4444"/>
<path d="M26.6253 8.94182C26.6253 7.77411 25.6753 6.82413 24.5076 6.82413H2.11769C0.949971 6.82413 0 7.77411 0 8.94182V10.6329H26.6253V8.94182Z" fill="#EF4444"/>
</svg>

      </button> 
          | 
          <router-link class="inline-flex w-full items-center justify-center bg-white sm:w-auto  p-1 px-5"
    :to="{
      name: 'EditRecommendation',
      params: {id:recommendation._id}
    }">
    
    <span class="font-bold text-lg text-gray-800"> تعديل </span>
    <svg class="w-5 h-5 mr-2" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.53491 22.6651L20.4879 4.71164L25.2736 9.49732L7.32011 27.4503L2.53491 22.6651Z" fill="#1F262A"/>
<path d="M27.3253 7.44604L28.0089 6.76244C28.648 6.12332 29 5.27389 29 4.36984C29 3.46579 28.648 2.61636 28.0089 1.97724C27.3698 1.33812 26.5199 0.985199 25.6158 0.985199C24.7118 0.985199 23.8624 1.33763 23.2228 1.97676L22.5392 2.66036L27.3253 7.44604Z" fill="#1F262A"/>
<path d="M1.98185 23.4787L0.0248424 29.3488C-0.0331718 29.5223 0.0122726 29.7143 0.141838 29.8433C0.233693 29.9352 0.357457 29.985 0.483637 29.985C0.534883 29.985 0.586129 29.9768 0.636408 29.9599L6.50599 28.0033L1.98185 23.4787Z" fill="#1F262A"/>
<path d="M21.172 4.02802L21.856 3.34393L26.6417 8.12962L25.9576 8.8137L21.172 4.02802Z" fill="#1F262A"/>
</svg>

  </router-link>
          </td>

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
      name: 'DashRecommendation',
      components: {
          navside
          },
    data(){
      return{
        name:'',
        price:'',
        tp1:'',
        tp2:'',
        tp3:'',
        sl:'',
        status:'',
        date:'',
        image : null,
        imageUrl: null,
        recommendations:[],
        users: null,
        message:''
      }
    },
    methods:{
    
    async handleSubmit(){
    let form = new FormData()
    form.append('name', this.name);
    form.append('price', this.price);
    form.append('tp1', this.tp1);
    form.append('tp2', this.tp2);
    form.append('tp3', this.tp3);
    form.append('sl', this.sl);
    form.append('date', this.date);
    form.append('status', this.status);
    const data = {
      name: this.name,
      price: this.price,
      tp1: this.tp1,
      tp2: this.tp2,
      tp3: this.tp3,
      sl: this.sl,
      date: this.date,
      status: this.status,
       };
    
    const response = await axios.post('/api/v1/recommendation/', form, {
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
    async deleteRecommendation(_id){
  const response = await axios.delete('/api/v1/recommendation/'+_id) 
  .then(() => {
    this.$router.go();
   });

},

    },
    
    async created(){
  
      await axios.get('/api/v1/recommendation/').then((res)=>{
      this.recommendations = res.data.recommendations;
      
    })

}
    
    
    
    }
    </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  