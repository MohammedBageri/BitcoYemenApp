<template>
  <div class="DashDirection">
    <div class="grid grid-cols-4 gap-4">
      <div class="">
        <navside />
      </div>
      <div class="col-span-4 lg:col-span-3">
        <section class="ground">
          <div></div>
          <div
            class="card_ground mt-10 p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3"
          >
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <p
                v-show="message"
                class="bg-red-300 text-gray-900 rounded-md p-3"
              >
                خطأ : {{ message }}
              </p>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <select
                  v-model="from"
                  class="p-2 px-2 rounded-md border-2 border_card  text-gray-900"
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
                  v-model="to"
                  class="p-2 px-2 rounded-md border-2 border_card  text-gray-900"
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
                    v-model="exchangeRate.send"
                    class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600"
                    placeholder="send"
                    type="text"
                    id="code"
                  />
                </div>

                <div>
                  <label class="sr-only" for="code">receive</label>
                  <input
                    v-model="exchangeRate.receive"
                    class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600"
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
                    v-model="minExchange"
                    class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600"
                    placeholder="minExchange"
                    type="text"
                    id="code"
                  />
                </div>

                <div>
                  <label class="sr-only" for="code">maxExchange</label>
                  <input
                    v-model="maxExchange"
                    class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600"
                    placeholder="maxExchange"
                    type="text"
                    id="code"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="code">description</label>
                <input
                  v-model="description"
                  class="w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600"
                  placeholder="description"
                  type="text"
                  id="code"
                />
              </div>

              <div>
                <div class="block p-2 mt-3  w-36 h-10 rounded-md">
                  <input
                  class="appearance-none rounded-full h-4 w-4 border border-gray-600  checked:bg-emerald-400 checked:border-blue-600 focus:outline-none"
                    type="radio"
                    id="true"
                    value="true"
                    v-model="isActive"
                  />
                  <label class="px-4" for="true">مفعلة</label>
                </div>

                <div class="block p-2 mt-3 w-36 h-10 rounded-md">
                  <input
                  class="appearance-none rounded-full h-4 w-4 border border-gray-600  checked:bg-emerald-400 checked:border-blue-600 focus:outline-none"
                    type="radio"
                    id="false"
                    value="false"
                    v-model="isActive"
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
                  <span class="font-medium text-gray-900">أضافة دايركشن</span>
                </button>
              </div>
            </form>
          </div>

          <div
            class="mt-10 overflow-hidden overflow-x-auto border border-gray-100 rounded"
          >
            <table class="card_ground min-w-full text-sm divide-y divide-gray-200">
              <thead>
                <tr class="card_ground">
                  <th
                    class="px-4 py-2 font-medium text-right  whitespace-nowrap"
                  >
                    من
                  </th>
                  <th
                    class="px-4 py-2 font-medium text-right  whitespace-nowrap"
                  >
                    الي
                  </th>
                  <th
                    class="px-4 py-2 font-medium text-right  whitespace-nowrap"
                  >
                    الحالة
                  </th>
                  <th
                    class="px-4 py-2 font-medium text-right  whitespace-nowrap"
                  >
                    الإعدادات
                  </th>
                </tr>
              </thead>
              <tbody
                v-for="direction in directions"
                :key="direction.id"
                class="card_ground divide-y divide-gray-100"
              >
                <tr>
                  <td
                    class="px-4 py-2 font-medium  whitespace-nowrap"
                  >
                    {{ direction.from.name }}
                  </td>
                  <td class="px-4 py-2  whitespace-nowrap">
                    {{ direction.to.name }}
                  </td>
                  <td class="px-4 py-2  whitespace-nowrap">
                    {{ direction.isActive }}
                  </td>

                  <td class="px-4 py-2  whitespace-nowrap">
                    <router-link
                      class="inline-flex w-full items-center justify-center bg-white sm:w-auto p-1 px-5 "
                      :to="{
                        name: 'EditDirection',
                        query: {
                          id: direction._id,
                          from: direction.from._id,
                          to: direction.to._id,
                        },
                      }"
                    >
                      <span class="font-bold text-lg text-gray-800">
                        تعديل
                      </span>
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
import navside from "@/components/Dashboard/navside.vue";
import axios from "../../axios";

export default {
  name: "DashDirection",
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
      currencys: [],
      users: null,
      message: "",
    };
  },

  async created() {
    await axios.get("/api/v1/currency/").then((res) => {
      this.currencys = res.data;
    });

    await axios.get("/api/v1/direction/all").then((res) => {
      this.directions = res.data.exchangeDirections;
      console.log(res.data)
    });
  },
  methods: {
    async handleSubmit() {
      console.log(this.from)
      const data = {
        from: this.from,
        to: this.to,
        exchangeRate: this.exchangeRate,
        minExchange: this.minExchange,
        maxExchange: this.maxExchange,
        description: this.description,
        isActive: this.isActive,
      };

      const response = await axios
        .post("/api/v1/direction", data)
        .then((response) => {
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
