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
        @submit.prevent="handleverify"
        class="max-w-md mx-auto mt-8 mb-0 space-y-4"
      >
        <div>
          <button
            type="submit"
            class="block mr-auto ml-auto px-5 py-3 text-xl font-medium bg-[#FCD34D] text-gray-900 rounded-lg"
          >
            تأكيد بريدك الإلكتروني
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
  name: "verifyemail",
  components: {
    navbar,
  },
  data() {
    return {
      email: "",
      verificationToken: "",
      user: "",
      message: "",
    };
  },

  methods: {
    async handleverify() {
      const token = this.$attrs.token;
      const email = this.$attrs.email;
      console.log(token);
      console.log(email);
      await axios
        .post("/api/v1/auth/verify-email", {
          verificationToken: token,
          email: email,
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
