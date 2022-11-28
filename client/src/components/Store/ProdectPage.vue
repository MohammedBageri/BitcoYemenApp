<template>
    <navbar/>
    <section class="ground mt-10">
    <div class="ProdectPage">

      

<section>
  <div class="relative mx-auto max-w-screen-xl px-4 py-8">
    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      
      <div class="lg:sticky top-0">
        

        <div class="mt-8 flex justify-between">
          <div class="max-w-[35ch]">
            <h1 class="text-3xl font-bold">
              {{product.name}}
            </h1>


           
          </div>

          <p class="text-2xl font-bold">{{' $ ' + product.price }}</p>
        </div>

        <details class="group relative mt-4">
          <summary class="block">
            <div>
              <div class="sub_text text-xl prose max-w-none group-open:hidden">
                <p>
                    {{product.details}}
                </p>
              </div>

            
            </div>
          </summary>
         
         
        </details>
        <span class="inline-block w-full h-1 line_ground"></span>
       
        <div class="container
      px-4
      max-w-screen-md
      py-16
      mx-auto
      sm:max-w-screen-3xl sm:px-6
      lg:px-8
      rounded-md
      card_ground">

          <form @submit.prevent="handleSubmit"  class="space-y-4 bg-white rounded-md shadow-md px-10">
            <p v-show="message" class="bg-red-300 text-gray-900 rounded-md p-3">
          خطأ : {{ message }}
        </p>        
                                    <div class="block ml-auto mr-auto pt-10 w-[90%]">
                                        <div>
                                            <label class="sr-only" for="رقم"></label>
                                            <input
                                            v-model="paymentDetails"
                                            placeholder="رقم السند ..."
                                            type="text"
                                            id="name"
                                            class="px-5 py-3
                    focus:ring-indigo-500 focus:border-indigo-500
                    w-full
                    rounded-none rounded-r-md
                    text-md
                    text-gray-900
                    border border-gray-300
                    placeholder:text-gray-500 text-md"
                                            />
                                        </div>
                                        
                                    </div>
                                   
                                    
                                    <div class="flex justify-center mt-4 pb-5">
                                        <button
                                       
                                            type="submit"
                                            class="inline-flex items-center justify-center w-full button_ground rounded-lg sm:w-auto"
                                            >
                                           
                                            
                                            <span  class="button_ground p-3 px-10 rounded-md shadow-md text-xl text-gray-800"> ارسال </span>
                                        
                                        </button>
                                    </div>
                                    
                                </form>
       </div>

      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
        <img
          alt="---"
          :src="`${api_url}/${product.imageUrl}`"
                             crossorigin="true"
          class="aspect-square w-full rounded-xl object-cover"
        />

      
      </div>

    </div>
  </div>
</section>

  
        
     
    </div>
    </section>

    <section6/>

  </template>
  
  <script>
  import navbar from '@/components/navbar.vue'
  import section6 from '@/components/Home/section6.vue'
  import axios from "axios"
  
  export default {
    name: 'ProdectPage',
    components: {
        navbar,
        section6
        },
  data(){
    return{
      api_url: import.meta.env.VITE_API_URL ,
      products:[],
      product:'',
      products_id:'',
      users: null,
      message: "",
    }
  },
  async created(){
  
  await axios.get('/api/v1/product/'+ this.$route.params.id).then((res)=>{
  this.product = res.data;
 
})

},
 
  methods:{

  async handleSubmit(){
  // let form = new FormData();
  // form.append('paymentDetails', this.paymentDetails);
  
  const product_id = this.product._id;
  try {
    const res = await axios.post('/api/v1/order', {
    productId: product_id
    })
    if(res.status == 200)
    {
      alert("تمت العملية بنجاح");

      axios.post('/api/v1/order/details/' + res.data._id, {
        paymentDetails: this.paymentDetails,
      })
    }
  } catch (err) {
    this.message = err.msg;
    console.log(message);
  }
  // const data = {
  //   paymentDetails: this.paymentDetails
  //    };
  // const response = await axios.post('/api/v1/order/details/'+product_id, form, {
  //   headers : {
  //     'content-type': 'multipart/form-data'
  //   }
  // }).catch((error) => {
  //         this.message = error.response.data.msg;
  //         console.log(message);
  //       });

}


  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  