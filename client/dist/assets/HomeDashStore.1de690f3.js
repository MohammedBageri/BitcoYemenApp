import{n as _}from"./navside.284ec745.js";import{_ as f,a as p,r as h,o as r,c as d,d as e,b as m,w,e as n,v as x,t as i,f as c,g as y,F as v,k as b,u as C}from"./index.33eb67fe.js";const L={name:"DashStore",components:{navside:_},data(){return{name:"",details:"",price:"",image:null,imageUrl:null,products:[],users:null,message:""}},async created(){await p.get("api/v1/product/").then(o=>{this.products=o.data.products})},methods:{onChange(o){const t=o.target.files[0];this.image=t,this.item.imageUrl=URL.createObjectURL(t)},async handleSubmit(){let o=new FormData;o.append("name",this.name),o.append("details",this.details),o.append("price",this.price),o.append("image",this.image),this.name,this.details,this.price,this.file,await p.post("/api/v1/product",o,{headers:{"content-type":"multipart/form-data"}}).then(t=>{t.status===201&&this.$router.go()}).catch(t=>{this.message=t.response.data.msg,console.log(message)})}}},k={class:"DashStore"},M={class:"grid grid-cols-4 gap-4"},S={class:"col-span-1"},D={class:"col-span-4 lg:col-span-3"},F={class:"ground"},U=e("div",null,null,-1),V={class:"card_ground mt-10 p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3"},j=e("label",{class:"sr-only",for:"name"},"name",-1),B=e("label",{class:"sr-only",for:"details"},"details",-1),A=e("label",{class:"sr-only",for:"price"},"price",-1),Z={class:"w-[50%]"},N={class:"flex justify-center w-full h-32 px-1 transition border-2 border_card border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"},E={class:"flex items-center space-x-2"},H=e("svg",{class:"icon_card p-1 rounded-lg w-10 h-10",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6.00001 15C5.01503 15.0011 4.06427 14.6387 3.32988 13.9823C2.5955 13.3259 2.12913 12.4216 2.02012 11.4427C1.91112 10.4637 2.16714 9.47899 2.73915 8.67711C3.31115 7.87523 4.15891 7.3126 5.12001 7.097C4.84193 5.80009 5.09044 4.44583 5.81086 3.33215C6.53128 2.21846 7.6646 1.43658 8.96151 1.1585C10.2584 0.880417 11.6127 1.12892 12.7264 1.84934C13.84 2.56976 14.6219 3.70309 14.9 5H15C16.24 4.99875 17.4361 5.45828 18.3563 6.28937C19.2765 7.12046 19.8551 8.26383 19.9797 9.4975C20.1043 10.7312 19.7661 11.9671 19.0307 12.9655C18.2953 13.9638 17.2152 14.6533 16 14.9M14 12L11 9M11 9L8.00001 12M11 9V21",stroke:"#484848","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),R={class:"font-medium px-3"},T=e("div",{class:"mt-4"},[e("button",{type:"submit",class:"inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] rounded-lg sm:w-auto"},[e("span",{class:"font-medium text-gray-900"},"\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0646\u062A\u062C")])],-1),O={class:"mt-10 overflow-hidden overflow-x-auto border border_card rounded"},P={class:"card_ground min-w-full text-sm divide-y divide-gray-200"},q=e("thead",null,[e("tr",{class:"text-lg"},[e("th",{class:"px-4 py-2 font-medium text-right whitespace-nowrap"},"\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C "),e("th",{class:"px-4 py-2 font-medium text-right whitespace-nowrap"},"\u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062A\u062C "),e("th",{class:"px-4 py-2 font-medium text-right whitespace-nowrap"},"\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C "),e("th",{class:"px-4 py-2 font-medium text-right whitespace-nowrap"},"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A")])],-1),z={class:"px-4 py-2 font-medium whitespace-nowrap"},G={class:"px-4 py-2 whitespace-nowrap"},I={class:"px-4 py-2 whitespace-nowrap"},J={class:"px-4 py-2 whitespace-nowrap"},K=e("span",{class:"font-bold text-lg text-gray-800"}," \u062A\u0639\u062F\u064A\u0644 ",-1),Q=e("svg",{class:"w-5 h-5 mr-2",viewBox:"0 0 29 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M2.53491 22.6651L20.4879 4.71164L25.2736 9.49732L7.32011 27.4503L2.53491 22.6651Z",fill:"#1F262A"}),e("path",{d:"M27.3253 7.44604L28.0089 6.76244C28.648 6.12332 29 5.27389 29 4.36984C29 3.46579 28.648 2.61636 28.0089 1.97724C27.3698 1.33812 26.5199 0.985199 25.6158 0.985199C24.7118 0.985199 23.8624 1.33763 23.2228 1.97676L22.5392 2.66036L27.3253 7.44604Z",fill:"#1F262A"}),e("path",{d:"M1.98185 23.4787L0.0248424 29.3488C-0.0331718 29.5223 0.0122726 29.7143 0.141838 29.8433C0.233693 29.9352 0.357457 29.985 0.483637 29.985C0.534883 29.985 0.586129 29.9768 0.636408 29.9599L6.50599 28.0033L1.98185 23.4787Z",fill:"#1F262A"}),e("path",{d:"M21.172 4.02802L21.856 3.34393L26.6417 8.12962L25.9576 8.8137L21.172 4.02802Z",fill:"#1F262A"})],-1);function W(o,t,X,Y,a,l){const u=h("navside"),g=h("router-link");return r(),d("div",k,[e("div",M,[e("div",S,[m(u)]),e("div",D,[e("section",F,[U,e("div",V,[e("form",{onSubmit:t[4]||(t[4]=w((...s)=>l.handleSubmit&&l.handleSubmit(...s),["prevent"])),class:"space-y-4"},[n(e("p",{class:"bg-red-300 rounded-md p-3"}," \u062E\u0637\u0623 : "+i(a.message),513),[[x,a.message]]),e("div",null,[j,n(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>a.name=s),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C ...",type:"text",id:"name"},null,512),[[c,a.name]])]),e("div",null,[B,n(e("textarea",{rows:"5",cols:"50","onUpdate:modelValue":t[1]||(t[1]=s=>a.details=s),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C ...",type:"text",id:"details"},null,512),[[c,a.details]])]),e("div",null,[A,n(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>a.price=s),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"\u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062A\u062C ...",type:"text",id:"price"},null,512),[[c,a.price]])]),e("div",Z,[e("label",N,[e("span",E,[H,e("span",R,[y(" \u0625\u0636\u0627\u0641\u0629 \u0635\u0648\u0631\u0629 \u0644\u0644\u0645\u0646\u062A\u062C "),e("input",{class:"block pt-4 underline",type:"file",accept:"image/*",onChange:t[3]||(t[3]=(...s)=>l.onChange&&l.onChange(...s))},null,32)])])])]),T],32)]),e("div",O,[e("table",P,[q,(r(!0),d(v,null,b(a.products,s=>(r(),d("tbody",{key:s.id,class:"divide-y divide-red-400"},[e("tr",null,[e("td",z,i(s.name),1),e("td",G,i(s.price),1),e("td",I,i(s.details.substring(0,70)+"..."),1),e("td",J,[m(g,{class:"inline-flex w-full items-center justify-center bg-white sm:w-auto p-1 px-5",to:{name:"EditProduct",params:{id:s._id}}},{default:C(()=>[K,Q]),_:2},1032,["to"])])])]))),128))])])])])])])}const te=f(L,[["render",W]]);export{te as default};
