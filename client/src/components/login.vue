<template>
  <div class="login">
    <navbar />
    <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

    <div
      class="mt-20 card_ground w-[90%] max-w-screen-xl px-4 py-16 mx-auto lg:w-1/2 sm:px-6 lg:px-8 rounded-lg"
    >
      <div class="max-w-lg mx-auto text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">
          أهلاً وسهلاً بك
        </h1>

        <p class="sub_text mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>

      <form
        @submit.prevent="handleSubmit"
        class="max-w-md mx-auto mt-8 mb-0 space-y-4"
      >
        <p v-show="message" class="bg-red-300 text-gray-900 rounded-md p-3">
          خطأ : {{ message }}
        </p>
        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              v-model="email"
              type="email"
              class="w-full p-4 pr-12 text-sm border border-gray-400 rounded-lg shadow-sm text-gray-900"
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

        <div>
          <label for="password" class="sr-only">Password</label>
          <div class="relative">
            <input
              v-model="password"
              type="password"
              class="w-full p-4 pr-12 text-sm border border-gray-400 rounded-lg shadow-sm text-gray-900"
              placeholder="أدخل كلمة السر الخاصة بك"
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-sm sub_text">
            نسيت كلمة المرور ؟
            <router-link to="/forgetpass" class="underline"
              >اضغط هنا
            </router-link>
          </p>

          <button
            type="submit"
            class="inline-block py-3"
          >
          <span
             class="button_ground p-3 px-10 rounded-md shadow-md text-xl"
                    >
                    تسجيل دخول
                    </span>
            
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../axios";
import navbar from "@/components/navbar.vue";
export default {
  name: "login",
  components: {
    navbar,
  },
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios
        .post("/api/v1/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push("/");
          }
        })
        .catch((error) => {
          this.message = error.response.data.msg;
          console.log(message);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
