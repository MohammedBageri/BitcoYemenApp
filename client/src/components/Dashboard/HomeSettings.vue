<template>
    <div class="HomeDash">
      <div class="grid grid-cols-4 gap-4">
    <div class="col-span-1">
      <navside />
    </div>
    
    <div class="col-span-4 lg:col-span-3">
     
    <section class="ground">
    <div class="max-w-screen-xl px-0 py-12 mx-auto md:py-16 sm:px-6 lg:px-0">
      
  
      <div class="mt-8 sm:mt-12">
        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-1">
          
            <a
  class="group flex flex-col h-auto justify-between  card_ground p-8 rounded-lg shadow-xl transition-shadow hover:shadow-lg"
>
  <div>
    <div class="relative flex flex-row">

<svg class="absolute -my-10 h-14 w-14 transform transition-transform group-hover:translate-y-6" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="59.8857" rx="9" fill="#FCD34D"/>
<path d="M32.5 48C22.835 48 15 40.165 15 30.5C15 20.835 22.835 13 32.5 13C42.165 13 50 20.835 50 30.5C50 40.165 42.165 48 32.5 48ZM40.6088 27.6724C41.4633 26.8185 41.4639 25.4334 40.6099 24.5788C39.7562 23.7242 38.371 23.7237 37.5164 24.5776L30.3074 31.7808L27.4855 28.9544C26.6319 28.0995 25.2469 28.0984 24.3919 28.952C23.537 29.8056 23.5359 31.1906 24.3895 32.0456L28.7575 36.4205C29.1675 36.8313 29.7238 37.0621 30.3042 37.0625C30.8845 37.0629 31.4411 36.8326 31.8516 36.4224L40.6088 27.6724Z" fill="#1F262A"/>
</svg>


  <h5 v-if="available === true " class="mr-16 text-3xl font-bold ">النظام متاح</h5>
  <h5 v-if="available === false " class="mr-16 text-3xl font-bold ">النظام غير متاح</h5>
      </div>
    <div class="mt-4 border-t-4 border-[#171C1F] pt-2">

        <div class="inline-block m-1 p-2 mt-3 bg-white text-gray-900 w-auto h-10 rounded-md" >
  <input @change="isavailable()" class="appearance-none rounded-full h-4 w-4 mt-1 border border-gray-600 bg-white checked:bg-[#FCD34D] checked:border-blue-600 focus:outline-none" type="radio" id="true" value="true" v-model="available" />
  <label class="px-4 mt-1" for="true">النظام متاح</label>
  
  </div>
  
  <div class="inline-block m-1 p-2 mt-3 bg-white text-gray-900 w-auto h-10 rounded-md " >
  <input @change="isavailable()" class="appearance-none rounded-full h-4 w-4 mt-1 text-gray-900 border border-gray-600 bg-white checked:bg-[#FCD34D] checked:border-blue-600 focus:outline-none" type="radio" id="false" value="false" v-model="available" />
  <label class="px-4 mt-1" for="false">النظام غير متاح</label>
  
  </div>

    </div>
  </div>

</a>

<a
  class="group flex flex-col h-auto justify-between  card_ground p-8 rounded-lg shadow-xl transition-shadow hover:shadow-lg"
>
  <div>
    <div class="relative flex flex-row">

<svg class="absolute -my-10 h-14 w-14 transform transition-transform group-hover:translate-y-6" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="59.8857" rx="9" fill="#FCD34D"/>
<path d="M47.4758 24.0778C48.1501 24.0778 48.7839 23.8154 49.2606 23.3386C49.7374 22.8618 50 22.228 50 21.5538C50 20.8795 49.7374 20.2457 49.2606 19.769L46.762 17.2703C46.2853 16.7934 45.6515 16.531 44.9772 16.531C44.3029 16.531 43.6692 16.7934 43.1925 17.2703C42.2875 18.1751 42.2154 19.6015 42.9745 20.5904L42.3801 21.1474C40.2565 19.4503 37.7124 18.2586 34.931 17.7575V16.4874C36.9307 16.4124 38.5347 14.7632 38.5347 12.7455C38.5347 10.6802 36.8545 9 34.7893 9H29.1281C27.0628 9 25.3826 10.6802 25.3826 12.7455C25.3826 14.7632 26.9866 16.4124 28.9863 16.4874V17.7575C26.1806 18.263 23.6165 19.4713 21.4817 21.1921L20.9701 20.6605C21.7879 19.6701 21.7339 18.1968 20.8075 17.2703C20.3308 16.7934 19.6969 16.531 19.0227 16.531C18.3485 16.531 17.7146 16.7934 17.2379 17.2703L14.7393 19.769C14.2626 20.2457 14 20.8795 14 21.5538C14 22.228 14.2626 22.8618 14.7393 23.3385C15.216 23.8154 15.85 24.0778 16.5242 24.0778C17.0946 24.0778 17.6359 23.8892 18.0778 23.5426L18.6353 24.1219C16.5036 26.9289 15.2364 30.4267 15.2364 34.2153C15.2364 43.4359 22.738 50.9375 31.9587 50.9375C41.1794 50.9375 48.681 43.4359 48.681 34.2153C48.681 30.4003 47.3959 26.8803 45.2372 24.0635L45.8528 23.4865C46.307 23.8691 46.8752 24.0778 47.4758 24.0778ZM45.7075 34.2152C45.7075 41.7962 39.5398 47.9639 31.9587 47.9639C24.3776 47.9639 18.2098 41.7962 18.2098 34.2152C18.2098 26.634 24.3776 20.4663 31.9587 20.4663C39.5399 20.4664 45.7075 26.634 45.7075 34.2152Z" fill="#1F262A"/>
<path d="M31.9588 23.6136C26.113 23.6136 21.3572 28.3694 21.3572 34.2152C21.3572 40.0609 26.113 44.8166 31.9588 44.8166C37.8045 44.8166 42.5602 40.0609 42.5602 34.2152C42.5602 28.3694 37.8045 23.6136 31.9588 23.6136ZM37.5918 31.2582L34.0908 34.3243C34.065 34.8343 33.8596 35.3369 33.4701 35.7265C32.6354 36.5611 31.2821 36.5611 30.4474 35.7265C29.6128 34.8917 29.6128 33.5385 30.4474 32.7038C30.9092 32.2421 31.5296 32.0369 32.1332 32.0862L35.6327 29.0214C36.2505 28.4805 37.1896 28.5426 37.7306 29.1603C38.2716 29.7781 38.2094 30.7173 37.5918 31.2582Z" fill="#1F262A"/>
</svg>

  
    <h5 class="mr-16 text-3xl font-bold ">{{expirations.transactionExpiration}}</h5>
    </div>
    <div class="mt-4 border-t-4 border-[#171C1F] pt-2">

        <form @submit.prevent="updataExpiration" class="space-y-6">
          <div>
            <label class="sr-only" for="name">مدة الطلب</label>
            <input v-model="transactionExpiration" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder=" مدة الطلب ..." type="text" id="name" />
          </div>
          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] text-gray-900 rounded-lg sm:w-auto"
          >
              <span class="font-medium">تحديث مدة الطلب </span>

            </button>
          </div>
          </form>
  
  

    </div>
  </div>

</a>

<a
  class="group flex flex-col h-auto justify-between  card_ground p-8 rounded-lg shadow-xl transition-shadow hover:shadow-lg"
>
  <div>
    <div class="relative flex flex-row">

      <svg class="absolute -my-10 h-14 w-14 transform transition-transform group-hover:translate-y-4" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="59.8857" rx="9" fill="#FCD34D"/>
<path d="M32.5 10C21.1786 10 12 19.1786 12 30.5C12 41.8214 21.1786 51 32.5 51C43.8214 51 53 41.8214 53 30.5C53 19.1786 43.8214 10 32.5 10ZM38.3885 38.5819C37.4942 39.6702 36.33 40.4041 34.9718 40.7753C34.3813 40.9356 34.1113 41.2477 34.1451 41.8636C34.1704 42.471 34.1451 43.07 34.1366 43.6774C34.1366 44.2173 33.8582 44.5041 33.3267 44.521C32.9809 44.5294 32.635 44.5379 32.2891 44.5379C31.9854 44.5379 31.6817 44.5379 31.378 44.5294C30.8043 44.521 30.5344 44.192 30.5344 43.6352C30.5259 43.1965 30.5259 42.7494 30.5259 42.3107C30.5175 41.3321 30.4837 41.2984 29.5473 41.1465C28.3494 40.9525 27.1683 40.6825 26.0716 40.151C25.2111 39.7292 25.1183 39.5183 25.363 38.6072C25.5486 37.9323 25.7342 37.2574 25.9451 36.5909C26.0969 36.1016 26.2403 35.8823 26.5019 35.8823C26.6537 35.8823 26.8477 35.9582 27.1093 36.0932C28.3241 36.7259 29.6148 37.0802 30.973 37.249C31.2008 37.2743 31.4286 37.2912 31.6564 37.2912C32.2891 37.2912 32.9049 37.173 33.5039 36.9115C35.014 36.2535 35.2502 34.5072 33.9763 33.4611C33.5461 33.1068 33.0484 32.8453 32.5337 32.6175C31.2093 32.0354 29.8342 31.5967 28.5856 30.8459C26.5609 29.6311 25.2786 27.9691 25.4305 25.5058C25.5992 22.7218 27.1767 20.984 29.7329 20.056C30.7874 19.6763 30.7959 19.6848 30.7959 18.5881C30.7959 18.2169 30.7874 17.8457 30.8043 17.466C30.8296 16.6393 30.9646 16.4959 31.7914 16.4706C31.8842 16.4706 31.9854 16.4706 32.0782 16.4706C32.2385 16.4706 32.3988 16.4706 32.5591 16.4706C32.6265 16.4706 32.694 16.4706 32.7531 16.4706C34.3222 16.4706 34.3222 16.5381 34.3307 18.2337C34.3391 19.4823 34.3391 19.4823 35.5792 19.6763C36.5325 19.8282 37.4352 20.1066 38.3126 20.4947C38.7934 20.7056 38.979 21.043 38.8272 21.5576C38.6078 22.3169 38.3969 23.0846 38.1607 23.8354C38.0088 24.2909 37.8654 24.5019 37.5955 24.5019C37.4436 24.5019 37.258 24.4428 37.0218 24.3247C35.807 23.7342 34.5331 23.4473 33.2002 23.4473C33.0315 23.4473 32.8543 23.4558 32.6856 23.4642C32.2891 23.4895 31.901 23.5401 31.5298 23.7004C30.2138 24.2741 30.0029 25.7251 31.1249 26.6193C31.6901 27.0749 32.3397 27.3955 33.0062 27.6739C34.1704 28.1547 35.3346 28.6187 36.4397 29.2261C39.9154 31.1665 40.8603 35.5786 38.3885 38.5819Z" fill="#1F262A"/>
</svg>
  
    <h5 class="mr-16 text-3xl font-bold ">{{affiliateRates.affiliateRate}}</h5>
    </div>
    <div class="mt-4 border-t-4 border-[#171C1F] pt-2">

        <form @submit.prevent="updataAffiliateRate" class="space-y-4">
          <div>
            <label class="sr-only" for="name"> قيمة العمولة</label>
            <input v-model="affiliateRate" class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600 " placeholder="قيمة العمولة ..." type="text" id="name" />
          </div>
          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] text-gray-900 rounded-lg sm:w-auto"
          >
              <span class="font-medium"> تحديث العمولة </span>

            </button>
          </div>
          </form>
  
  

    </div>
  </div>

</a>

        </dl>
      </div>
  
      
 
  
    </div>
  </section>
  
    </div>
    
  </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import axios from "axios"
  import navside from '@/components/Dashboard/navside.vue'
  
  export default {
    name: 'HomeSettings',
    components: {
      navside,
    },
    data(){
    return{
        availables:'',
        available:"",
        expirations:'',
        transactionExpiration:'',
        affiliateRates:'',
        affiliateRate:''
    }
  },
  
  
    async created(){
      const response = await axios.get('/api/v1/setting/available')
      this.available = response.data.available;

      const res = await axios.get('/api/v1/setting/transactionExpiration')
      this.expirations = res.data;

      const res1 = await axios.get('/api/v1/setting/affiliateRate')
      this.affiliateRates = res1.data;
      
 
    },
  
    
    methods:{
     
    async isavailable(){
let form = new FormData()
form.append('available',this.available);
console.log(this.available)
const data = {
    available: this.available,
 
   };

const response = await axios.post('/api/v1/setting/available', data);
if(response.status === 200)
{
    this.$router.go();
}

},

async updataExpiration(){
let form = new FormData()
form.append('transactionExpiration',this.transactionExpiration);

const data = {
    transactionExpiration: this.transactionExpiration,
 
   };

const response = await axios.post('/api/v1/setting/transactionExpiration', form, {
  headers : {
    'content-type': 'multipart/form-data'
  }
});
if(response.status === 200)
{
    this.$router.go();
}

},

async updataAffiliateRate(){
let form = new FormData()
form.append('affiliateRate',this.affiliateRate);

const data = {
    affiliateRate: this.affiliateRate,
 
   };

const response = await axios.post('/api/v1/setting/affiliateRate', form, {
  headers : {
    'content-type': 'multipart/form-data'
  }
});
if(response.status === 200)
{
    this.$router.go();
}

},

    },
   
      
    }
  
  
  
  </script>