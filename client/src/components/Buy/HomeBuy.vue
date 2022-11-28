<template>
  <div class="HomeBuy">
    <navbar />

    <section
      class="ground mt-10 card_ground shadow-md rounded-md md:w-[60%]"
    >
      <div id="tabs" class="container header_ground">
        <div class="tabs">
          <a
            v-on:click="activetab = '1'"
            v-bind:class="[activetab === '1' ? 'active' : '']"
            >Step : 1</a
          >
          <a v-bind:class="[activetab === '2' ? 'active' : '']">Step : 2</a>
        </div>

        <div class="content">
          <div
            v-if="activetab === '1'"
            class="tabcontent w-full card_ground pt-20 pb-5"
          >
            <div
              class="container px-4 max-w-screen-md py-16 mx-auto lg:max-w-screen-3xl sm:px-6 lg:px-8 rounded-md card_ground"
            >
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-1 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <p
                        v-show="message"
                        class="bg-red-300 text-gray-900 rounded-md p-3"
                      >
                        خطأ : {{ message }}
                      </p>

                      <div class="container-one w-full">
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span
                            class="inline-flex items-center rounded-md button_ground border border-gray-300  text-gray-900 text-xl py-2 px-2 lg:px-10"
                          >
                         
                            <select
                              @change="get_direction()"
                              v-model="from"
                              class="button_ground"
                            >
                          
                           
                              <option
                              class="button_ground"
                                v-for="moneda in formatearMonedas"
                                :key="moneda._id"
                                :value="moneda._id"
                                v-show="moneda.isActive === true"
                              >
                               
                                 <p> {{ moneda.name }} </p>
                                 <img
                                            loading="lazy"
                                            alt="No photo"
                                            class="h-8 object-contain lg:h-10 mt-1"
                                            :src="`${api_url}/${moneda.logoUrl}`"
                                            crossorigin="true"
                                            />
                              
                              </option>
                            </select>
                          </span>
                          <input
                            type="text"
                            v-model="cantidad"
                            min=""
                            max="10"
                            placeholder="ادخل قيمة العملة المحددة"
                            class="px-5 mr-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md text-xl text-green-900 border border-gray-300 placeholder:text-gray-500"
                          />
                        </div>
                      </div>

                      <div class="container-two flex flex-row-reverse text-gray-900">
                        <h4  v-if="results <= 0" class="mt-2" id="baseValue">
                         
                          النسبة = 0
                         
                        </h4>
                        <h4  v-else class="mt-2" id="baseValue">
                     rate = 1  {{fromText}} = {{this.results.exchangeRate.receive / this.results.exchangeRate.send}} {{toText}}
                        </h4>
                      </div>

                      <div class="container-there">
                        <div class="mt-1 w-full flex rounded-md shadow-sm">
                          <span
                            class="inline-flex items-center rounded-md border border-gray-300 button_ground text-gray-900 text-xl py-2 px-2 lg:px-10"
                          >
                            <select
                              @change="get_direction()"
                              v-model="to"
                              class="button_ground"
                            >
                              <option
                              class="button_ground"
                                v-for="moneda in formatearMonedas"
                                :key="moneda._id"
                                :value="moneda._id"
                                v-show="moneda.isActive === true"
                              >
                                {{ moneda.name }}
                              </option>
                            </select>
                          </span>

                          <div
                            v-if="
                              +cantidad >= +results.minExchange &&
                              +cantidad <= +results.maxExchange
                            "
                            class="px-5 pt-4 mr-3 flex-1 block w-full text-green-900 rounded-none rounded-r-md text-xl border border-gray-300 "
                          >
                            {{ calcularResultado }}
                          </div>
                          <div
                          v-else-if="+cantidad == 0"
                          class="px-5 pt-4 mr-3 flex-1 block w-full text-green-900 rounded-none rounded-r-md text-xl border border-gray-300"
                          >
                            {{ "0" }}
                          </div>
                         
                          <div
                            v-else-if="+cantidad >= +results.maxExchange"
                            class="px-5 pt-4 mr-3 flex-1 block w-full text-green-900 rounded-none rounded-r-md text-xl border border-gray-300"
                          >
                            {{ "القيمة عالية" }}
                          </div>
                          <div
                            v-else-if="+cantidad <= +results.minExchange"
                            class="px-5 pt-4 mr-3 flex-1 block w-full text-green-900 rounded-none rounded-r-md text-xl border border-gray-300"
                          >
                            {{ "القيمة منخفظة" }}
                          </div>
                          
                        </div>
                      </div>

                      
                      

                      <div 
                     
                      class=" flex justify-center mt-4">
                     
                        <button
                        v-if="
                              +cantidad >= +results.minExchange &&
                              +cantidad <= +results.maxExchange
                            "
                          :disabled="dashabilitado"
                          @click="amountSubmit()"
                          type="button"
                          v-on:click="activetab = '2'"
                          v-bind:class="[activetab === '2' ? 'active' : '']"
                          class="p-3 px-10"
                        >
                        <span
                      class="button_ground p-3 px-10 rounded-md shadow-md text-xl text-gray-800"
                    >
                      ارسال
                    </span>
                        </button>

                        <button
                        v-else
                          :disabled="dashabilitado"
                          @click="amountSubmit()"
                          type="button"
                         
                          class="p-3 px-10"
                        >
                        <span
                      class="button_ground p-3 px-10 rounded-md shadow-md text-xl text-gray-800"
                    >
                  المبلغ المحدد من
                  {{results.minExchange}}
                  الى 
                  {{results.maxExchange}} 
                    </span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="activetab === '2'"
            class="tabcontent w-full card_ground pt-20 pb-5"
          >
            <div
              class="container px-4 max-w-screen-md py-16 mx-auto sm:max-w-screen-3xl sm:px-6 lg:px-8 rounded-md card_ground"
            >
              <form
                @submit.prevent="handleSubmit"
                class="space-y-4 bg-white rounded-md shadow-md px-10"
              >
              <p v-show="message" class="bg-red-300 text-gray-900 rounded-md p-3">خطأ : {{message}}</p>
                <div class="block ml-auto mr-auto pt-10 w-[90%]">
                  <div>
                    <label class="sr-only" for="name">الاسم</label>
                    <input
                      v-model="paymentDetails"
                      placeholder="معلومات الدفع"
                      type="text"
                      id="name"
                      class="px-5 py-3 focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-r-md text-md text-green-900 border-2 border-gray-400 placeholder:text-gray-500 text-md"
                    />
                  </div>
                </div>

                <div class="block ml-auto mr-auto mt-10 w-[90%]">
                  <label
                    class="flex items-center w-full h-32 px-4 transition bg-white border-2 border-gray-400 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                  >
                    <span class="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span class="font-medium text-gray-600 px-3">
                     صورة السند الخاص بالايداع
                        <input
                          type="file"
                          accept="image/*"
                          @change="onChange"
                        />
                      </span>
                    </span>
                  </label>
                </div>

                <div class="flex justify-center mt-4 pb-5">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full text-gray-900  rounded-lg sm:w-auto"
                  >
                    <span
                      class="button_ground p-3 px-10 rounded-md shadow-md text-xl text-gray-800"
                    >
                      ارسال
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section6 />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import section6 from "@/components/Home/section6.vue";
import axios from "../../axios";

export default {
  name: "HomeBuy",
  components: {
    navbar,
    section6,
  },
  data() {
    return {
      activetab: "1",
      monedas: [],
      cantidad: 0,
      api_url: import.meta.env.VITE_API_URL,
      from: "",
      to: "",
      fromText: '',
      toText: '',
      isActive: "",
      results: "",
      results_id: "",
      paymentDetails: "",
      image: null,
      imageUrl: null,
      message: "",
      active: "",
    };
  },
  async created() {
    const response = await axios.get("/api/v1/users/showMe");
    this.users = response.data;
  
  },

  mounted() {
    this.getMonedas();
  },

  computed: {
    formatearMonedas() {
      return Object.values(this.monedas);
    },
    calcularResultado() {
      const amount =
        (this.cantidad * this.results.exchangeRate.receive) /
        this.results.exchangeRate.send;
      return amount;
    },
  
  
  },
  methods: {
    getFromText (e) {
      console.log('from: ', e)
    },
    async getMonedas() {
      await axios.get("/api/v1/currency").then((response) => {
        this.monedas = response.data;
        this.active = response.data.monedas.isActive;
      });
    },
    calcularResultado() {
      const amount =
        (this.cantidad * this.results.exchangeRate.receive) /
        this.results.exchangeRate.send;
      return amount;
    },
    async get_direction() {
      await axios
        .get("/api/v1/direction?", {
          params: {
            from: this.from,
            to: this.to,
          },
        })
        .then((response) => {
          this.results = response.data;
          this.fromText = this.results.from.name
          this.toText = this.results.to.name
          this.message = "";
        })
        .catch((error) => {
          this.message = error.response.data.msg;
          console.log(message);
        });
    },
    async convertirMoneda() {
      await axios
        .get("/api/v1/direction?", {
          params: {
            from: this.from,
            to: this.to,
          },
        })
        .then((response) => {
          this.results = response.data;
        });
    },
    async amountSubmit() {
      let form = new FormData();
      form.append("from", this.from);
      form.append("to", this.to);
      form.append("amount", this.cantidad);
      const data = {
        from: this.from,
        to: this.to,
        amount: this.cantidad,
      };

      const response = await axios.post("/api/v1/transaction", form, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        this.results = response.data;
        // this.$router.go();
      }
    },

    onChange(e) {
      const file = e.target.files[0];
      this.image = file;
      this.item.imageUrl = URL.createObjectURL(file);
    },

    async handleSubmit() {
      let form = new FormData();
      form.append("paymentDetails", this.paymentDetails);
      form.append("image", this.image);
      const data = {
        paymentDetails: this.paymentDetails,
        image: this.file,
      };
      const response = await axios.post(
        "/api/v1/transaction/details/" + this.results._id,
        form,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        alert("تمت العملية بنجاح");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Style the tabs */

.container {
  width: 100%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.tabs a {
  float: right;
  width: 50%;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: none;
  border-right: none;
  font-weight: bold;
}

/* Change background color of tabs on hover */

/* Styling for active tab */
.tabs a.active {
  border: none;
  cursor: default;
}
</style>
