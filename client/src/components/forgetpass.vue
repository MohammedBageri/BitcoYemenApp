<template>
  <div class="forgetpass">
    <navbar />
    <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

    <div
      class="
        mt-20
        card_ground
        w-[90%]
        lg:w-1/2
        max-w-screen-xl
        px-4
        py-16
        mx-auto
        sm:px-6
        lg:px-8
        rounded-lg
      "
    >
      <div class="max-w-lg mx-auto text-center">
        <h1 class="text-xl font-bold sm:text-2xl">نسيت كلمة المرور ؟</h1>
      </div>

      <form
        @submit.prevent="handlepass"
        class="max-w-md mx-auto mt-8 mb-0 space-y-4"
      >
        <div>
          <p
            v-show="message"
            class="mb-4 bg-red-300 rounded-md p-3"
          >
            خطأ : {{ message }}
          </p>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              type="email"
              v-model="email"
              class="
                w-full
                p-4
                pr-12
                text-sm
                border border-gray-400
                rounded-lg
                shadow-sm
              "
              placeholder="أدخل بريدك الإلكتروني"
            />

            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="
            block mr-auto ml-auto py-5
            "
          >
          <span
             class="button_ground p-3 px-10 rounded-md shadow-md text-xl"
                    >
                    ارسال
                    </span>
            
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script>
  import axios from "axios"
  import navbar from '@/components/navbar.vue'
  export default {
    name: 'forgetpass',
    components: {
      navbar
    },
  data(){
    return{
      email: "",
      message:''
     
    }
    
  },
  methods: {
    async handlepass() {
      const email = this.email;
      console.log(email);
      await axios
        .post("/api/v1/auth/forgot-password", {
          email: email,
        })
        .then((response) => {
            if(response.status === 200)
  {
    this.$router.push('/user/reset-password')
   
  }
        }).catch((error) => {
  
  this.message = error.response.data.msg;
  this.message = "";
  console.log(message)
})
    },
  },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
</style>
  