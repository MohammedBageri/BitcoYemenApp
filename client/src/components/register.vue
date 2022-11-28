<template>
   <navbar />
    <div class="register">

      <section class="sm:h-screen lg:max-w-screen-3xl">
                    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 mt-10">
                            
                            <div class="card_ground lg:py-12 lg:col-span-2 rounded-lg shadow-lg px-4 py-4">
                                <p class="max-w-xl text-right text-lg">
                                  يشير الناس الى شبكة الريبل وعملتها الالكترونية الخاصة بها باسم “الريبل”، مما يؤدي غالباً الى حدوث ارتباك حولها لأنها تحمل الاسم ذاته لشبكة المدفوعات والعملة الخاصة
                                </p>

                                <p class="max-w-xl text-right text-lg">
                                  يشير الناس الى شبكة الريبل وعملتها الالكترونية الخاصة بها باسم “الريبل”، مما يؤدي غالباً الى حدوث ارتباك حولها لأنها تحمل الاسم ذاته لشبكة المدفوعات والعملة الخاصة
                                </p>
                                
                                <div class="mt-8">
                                    <a href="" class="text-2xl font-bold sub_text"> 0151 475 4450 </a>
                                    
                                </div>
                            </div>
                            
                            <div class="p-8 card_ground  rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                     <form @submit.prevent="handleSubmit"  class="space-y-4">
                      <p v-show="message" class="bg-red-300 text-gray-900 rounded-md p-3">خطأ : {{message}}</p>
                                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label class="sr-only" for="name">الاسم</label>
                                            <input
                                            v-model="name"
                                            placeholder="أدخل اسمك الرباعي"
                                            type="text"
                                            id="name"
                                            class="w-full p-3 text-md rounded-lg text-[#1F262A] placeholder:text-gray-600 "
                                            />
                                        </div>
                                        
                                        <div>
                                            <label class="sr-only" for="number">الرقم</label>
                                            <input
                                            v-model="number_phone"
                                            placeholder="أدخل رقم جوالك"
                                            type="tel"
                                            id="phone"
                                            class="w-full border-2 border-gray-400 p-3 text-sm rounded-lg text-[#1F262A]"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label class="sr-only" for="email">الايميل</label>
                                            <input
                                            v-model="email"
                                            
                                            placeholder="أدخل بريدك الإلكتروني"
                                            type="email"
                                            id="email"
                                            class="w-full p-3 text-md rounded-lg text-[#1F262A] placeholder:text-gray-600 "
                                            />
                                        </div>
                                        
                                        <div>
                                            <label class="sr-only" for="password">كلمة السر</label>
                                            <input
                                            v-model="password"
                                            placeholder="أدخل كلمة السر الخاصة بك"
                                            type="password"
                                            id="password"
                                            class="w-full border-2 border-gray-400 p-3 text-sm rounded-lg text-[#1F262A]"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="sr-only" for="address">العنوان</label>
                                        <input 
                                        v-model="address"
                                        class="w-full p-3 text-md rounded-lg text-[#1F262A] placeholder:text-gray-600 " 
                                        placeholder="أدخل محل اقامتك" 
                                        type="address" 
                                        id="address" />
                                    </div>
                                   
                                   <div class="max-w-2xl">
                                    <div class="w-[100%]">
                                       <label
                                           class=" flex justify-center w-full h-32 px-1 transition border-2 border_card border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                           <span class="relative flex items-center ">
                                            <svg class="absolute icon_card p-1 rounded-lg right-12 w-10 h-10" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00001 15C5.01503 15.0011 4.06427 14.6387 3.32988 13.9823C2.5955 13.3259 2.12913 12.4216 2.02012 11.4427C1.91112 10.4637 2.16714 9.47899 2.73915 8.67711C3.31115 7.87523 4.15891 7.3126 5.12001 7.097C4.84193 5.80009 5.09044 4.44583 5.81086 3.33215C6.53128 2.21846 7.6646 1.43658 8.96151 1.1585C10.2584 0.880417 11.6127 1.12892 12.7264 1.84934C13.84 2.56976 14.6219 3.70309 14.9 5H15C16.24 4.99875 17.4361 5.45828 18.3563 6.28937C19.2765 7.12046 19.8551 8.26383 19.9797 9.4975C20.1043 10.7312 19.7661 11.9671 19.0307 12.9655C18.2953 13.9638 17.2152 14.6533 16 14.9M14 12L11 9M11 9L8.00001 12M11 9V21" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                               <span class="font-medium sub_text mr-32">
                                                إضافة صورة شخصية
                                                  
                                                   <input class="block pt-4 sub_text underline" type="file" accept="image/*" @change="onChange" />
                                               </span>
                                           </span>
                                          </label>
                                          
                                               
                                   </div>
                                   </div>
                                  
                                    
                                    <div class="mt-4">
                                      <button
            type="submit"
            class="
             py-5
            "
          >
          <span
             class="button_ground p-3 px-10 rounded-md shadow-md text-xl"
                    >
                    انشاء حساب
                    </span>
            
          </button>
                                      
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
  
    </div>
  </template>
  
  <script>
 import axios from"axios"
 import navbar from '@/components/navbar.vue'
  export default {
    name: 'register',
    components: {
      navbar
    },
    data(){
      return{
       name:'',
       email:'',
       password:'',
       number_phone:'',
       address:'',
       image : null,
      imageUrl: null,
      message:''
      }
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
        form.append('email', this.email);
        form.append('password',this.password);
        form.append('phoneNumber', this.number_phone);
        form.append('address', this.address);
        form.append('image', this.image);
        const data = {
          name: this.name,
          email: this.email,
          password: this.password,
          number_phone: this.number_phone,
          address:this.address,
          image: this.file
           };
        
        const response = await axios.post('/api/v1/auth/register', form, {
          headers : {
            'content-type': 'application/x-www-form-urlencoded'
          }
        }).then((response) => {
    if(response.status === 201)
  {
    this.$router.push('/')
   
  }
  }).catch((error) => {
  
  this.message = error.response.data.msg;
  console.log(message)
})
      
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  