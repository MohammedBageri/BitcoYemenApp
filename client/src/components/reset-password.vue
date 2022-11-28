<template>
  <div class="verifyemail">
    <div
      class="mt-20 card_ground w-[90%] lg:w-1/2 max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 rounded-lg"
    >
      <div class="max-w-lg mx-auto text-center">
        <p v-show="message" class="bg-red-300 rounded-md p-3">
          خطأ : {{ message }}
        </p>
        <h1 class="text-2xl mt-5 font-bold sm:text-3xl">
          أهلاً وسهلاً بك
        </h1>

        <p class="mt-4 sub_text">
          انت على بعد خطوة واحد لنجاح العملية الرجاء قم بتاكيد بريد الإكتروني
        </p>
      </div>

      <form
        @submit.prevent="handlereset"
        class="max-w-md mx-auto mt-8 mb-0 space-y-4"
      >
        <div>
          <input
            type="password"
            v-model="password"
            class="w-full p-4 pr-12 mt-3 text-sm border border-gray-400 rounded-lg shadow-sm"
            placeholder="أدخل المرور الجديدة"
          />
          <button
            type="submit"
            class="block mr-auto ml-auto px-5 py-3 mt-5 text-xl font-medium button_ground rounded-lg"
          >
            تغيير كلمة المرور
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
  name: "reset-password",
  components: {
    navbar,
  },
  data() {
    return {
      password: "",
      email: "",
      verificationToken: "",
      user: "",
      message: "",
    };
  },

  methods: {
    async handlereset() {
      const token = this.$attrs.token;
      const email = this.$attrs.email;
      const password = this.password;
      await axios
        .post("/api/v1/auth/reset-password", {
          token: token,
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push("/login");
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
