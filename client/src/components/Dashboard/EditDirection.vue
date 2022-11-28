<template>
  <div class="EditDirection">
    <div class="grid grid-cols-4 gap-4">
      <div class="">
        <navside />
      </div>
      <div class="col-span-3">
        <section class="ground">
          <div></div>

          <div
            class="card_ground mt-10 p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3"
          >
            <form @submit.prevent="updataDirection" class="space-y-4 text-gray-900">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <select
                  v-model="direction.from._id"
                  class="p-2 px-2 border-2 border_card rounded-md"
                >
                  <option
                    v-for="currency in currencys"
                    :key="currency.id"
                    :value="currency._id"
                  >
                    {{ currency.name }}
                  </option>
                </select>

                <select
                  v-model="direction.to._id"
                  class="p-2 px-2 border-2 border_card rounded-md"
                >
                  <option
                    v-for="currency in currencys"
                    :key="currency.id"
                    :value="currency._id"
                  >
                    {{ currency.name }}
                  </option>
                </select>
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="code">send</label>
                  <input
                    v-model="direction.exchangeRate.send"
                    class="w-full p-3 text-md rounded-lg border-2 border_card placeholder:text-gray-600"
                    placeholder="send"
                    type="text"
                    id="code"
                  />
                </div>

                <div>
                  <label class="sr-only" for="code">receive</label>
                  <input
                    v-model="direction.exchangeRate.receive"
                    class="w-full p-3 text-md rounded-lg border-2 border_card placeholder:text-gray-600"
                    placeholder="receive"
                    type="text"
                    id="code"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="code">minExchange</label>
                  <input
                    v-model="direction.minExchange"
                    class="w-full p-3 text-md rounded-lg border-2 border_card placeholder:text-gray-600"
                    placeholder="minExchange"
                    type="text"
                    id="code"
                  />
                </div>

                <div>
                  <label class="sr-only" for="code">maxExchange</label>
                  <input
                    v-model="direction.maxExchange"
                    class="w-full p-3 text-md rounded-lg border-2 border_card placeholder:text-gray-600"
                    placeholder="maxExchange"
                    type="text"
                    id="code"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="code">description</label>
                <input
                  v-model="direction.description"
                  class="w-full p-3 text-md rounded-lg border-2 border_card placeholder:text-gray-600"
                  placeholder="description"
                  type="text"
                  id="code"
                />
              </div>

              <div>
                <div class="block p-2 mt-3 bg-white w-36 h-10 rounded-md">
                  <input
                    class="appearance-none rounded-full h-4 w-4 border border-gray-600 bg-white checked:bg-[#FCD34D] checked:border-blue-600 focus:outline-none"
                    type="radio"
                    id="true"
                    value="true"
                    v-model="direction.isActive"
                  />
                  <label class="px-4" for="true">مفعلة</label>
                </div>

                <div class="block p-2 mt-3 bg-white w-36 h-10 rounded-md">
                  <input
                    class="appearance-none rounded-full h-4 w-4 border border-gray-600 bg-white checked:bg-[#FCD34D] checked:border-blue-600 focus:outline-none"
                    type="radio"
                    id="false"
                    value="false"
                    v-model="direction.isActive"
                  />
                  <label class="px-4" for="false"
                    >غير مفعلة</label
                  >
                </div>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] rounded-lg sm:w-auto"
                >
                  <span class="font-medium text-gray-900">تعديل الدايركشن </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import navside from "@/components/Dashboard/navside.vue";
import axios from "../../axios";

export default {
  name: "EditDirection",
  components: {
    navside,
  },
  data() {
    return {
      exchangeRate: {
        send: "",
        receive: "",
      },
      from: "",
      to: "",
      name: "",
      code: "",
      isActive: "",
      directions: [],
      direction: "",
      currencys: [],
      users: null,
    };
  },

  async created() {
    const from = this.$attrs.from;
    const to = this.$attrs.to;
    await axios.get("/api/v1/currency/").then((res) => {
      this.currencys = res.data;
    });

    await axios
      .get(`/api/v1/direction?from=${from}&&to=${to}`)
      .then((response) => {
        this.direction = response.data;
      })
      .catch((error) => {
        this.message = error.response.data.msg;
        console.log(message);
      });
  },

  methods: {
    async updataDirection() {
      const response = await axios.post(
        `/api/v1/direction/${this.$attrs.id}`,
        this.direction
      );
      if (response.status === 200) {
        this.$router.push("/dash-direction");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
