import{n as c}from"./navside.284ec745.js";import{_ as p,a,r as u,o as m,c as _,d as e,b as g,w as h,e as d,f as l,g as f}from"./index.33eb67fe.js";const x={name:"EditProduct",components:{navside:c},data(){return{title:"",body:"",image:null,imageUrl:null,blogs:[],product:"",blogs_id:"",users:null}},async created(){const r=await a.get("/api/v1/product/"+this.$route.params.id);this.product=r.data},methods:{async updataProduct(){(await a.post("/api/v1/product/"+this.$route.params.id,this.product)).status===200&&this.$router.push("/dash-store")}}},v={class:"EditProduct"},b={class:"grid grid-cols-4 gap-4"},y={class:""},w={class:"col-span-3"},C={class:"ground"},k=e("div",null,null,-1),V={class:"card_ground mt-10 p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3"},M=e("label",{class:"sr-only",for:"name"},"name",-1),P=e("label",{class:"sr-only",for:"details"},"details",-1),B=e("label",{class:"sr-only",for:"price"},"price",-1),E={class:"w-[50%]"},U={class:"flex justify-center w-full h-32 px-1 transition border-2 border_card border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"},j={class:"flex items-center space-x-2"},D=e("svg",{class:"icon_card p-1 rounded-lg w-10 h-10",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6.00001 15C5.01503 15.0011 4.06427 14.6387 3.32988 13.9823C2.5955 13.3259 2.12913 12.4216 2.02012 11.4427C1.91112 10.4637 2.16714 9.47899 2.73915 8.67711C3.31115 7.87523 4.15891 7.3126 5.12001 7.097C4.84193 5.80009 5.09044 4.44583 5.81086 3.33215C6.53128 2.21846 7.6646 1.43658 8.96151 1.1585C10.2584 0.880417 11.6127 1.12892 12.7264 1.84934C13.84 2.56976 14.6219 3.70309 14.9 5H15C16.24 4.99875 17.4361 5.45828 18.3563 6.28937C19.2765 7.12046 19.8551 8.26383 19.9797 9.4975C20.1043 10.7312 19.7661 11.9671 19.0307 12.9655C18.2953 13.9638 17.2152 14.6533 16 14.9M14 12L11 9M11 9L8.00001 12M11 9V21",stroke:"#484848","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),N={class:"font-medium px-3"},L=e("div",{class:"mt-4"},[e("button",{type:"submit",class:"inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] rounded-lg sm:w-auto"},[e("span",{class:"font-medium text-gray-900"}," \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C ")])],-1);function T(r,t,F,H,o,n){const i=u("navside");return m(),_("div",v,[e("div",b,[e("div",y,[g(i)]),e("div",w,[e("section",C,[k,e("div",V,[e("form",{onSubmit:t[4]||(t[4]=h((...s)=>n.updataProduct&&n.updataProduct(...s),["prevent"])),class:"space-y-4"},[e("div",null,[M,d(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.product.name=s),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"name of product",type:"text",id:"name"},null,512),[[l,o.product.name]])]),e("div",null,[P,d(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.product.details=s),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"details ...",type:"text",id:"details"},null,512),[[l,o.product.details]])]),e("div",null,[B,d(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>o.product.price=s),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"inter price of product",type:"text",id:"price"},null,512),[[l,o.product.price]])]),e("div",E,[e("label",U,[e("span",j,[D,e("span",N,[f(" \u0625\u0636\u0627\u0641\u0629 \u0635\u0648\u0631\u0629 \u0644\u0644\u0645\u0642\u0627\u0644 "),e("input",{class:"block pt-4 underline",type:"file",accept:"image/*",onChange:t[3]||(t[3]=(...s)=>r.onChange&&r.onChange(...s))},null,32)])])])]),L],32)])])])])])}const z=p(x,[["render",T]]);export{z as default};