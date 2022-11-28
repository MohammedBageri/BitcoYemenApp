import{n as c}from"./navside.284ec745.js";import{_ as m,a,r as p,o as u,c as g,d as e,b as _,w as x,e as s,f as d}from"./index.33eb67fe.js";const y={name:"EditRecommendation",components:{navside:c},data(){return{title:"",body:"",image:null,imageUrl:null,blogs:[],recommendation:"",blogs_id:"",users:null}},async created(){const n=await a.get("/api/v1/recommendation/"+this.$route.params.id);this.recommendation=n.data},methods:{async updataRecommendation(){(await a.post("/api/v1/recommendation/"+this.$route.params.id,this.recommendation)).status===200&&this.$router.push("/dash-recommendation")}}},f={class:"EditRecommendation"},b={class:"grid grid-cols-4 gap-4"},v={class:""},h={class:"col-span-3"},w={class:"ground"},V=e("div",null,null,-1),U={class:"card_ground mt-10 p-8 rounded-lg shadow-lg lg:p-12 lg:col-span-3"},R={class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},E=e("label",{class:"sr-only",for:"name"},"name of Recommendation",-1),B=e("label",{class:"sr-only",for:"status"},"status",-1),D={class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},k=e("label",{class:"sr-only",for:"price"},"price",-1),C=e("label",{class:"sr-only",for:"tp1"},"tp1",-1),M={class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},N=e("label",{class:"sr-only",for:"tp2"},"tp2",-1),j=e("label",{class:"sr-only",for:"tp3"},"tp3",-1),F={class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},S=e("label",{class:"sr-only",for:"sl"},"sl",-1),T=e("label",{class:"sr-only",for:"date"},"date",-1),q=e("div",{class:"mt-4"},[e("button",{type:"submit",class:"inline-flex items-center justify-center w-full px-5 py-3 bg-[#FCD34D] rounded-lg sm:w-auto"},[e("span",{class:"font-medium text-gray-900"}," \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0629 ")])],-1);function z(n,t,A,G,l,r){const i=p("navside");return u(),g("div",f,[e("div",b,[e("div",v,[_(i)]),e("div",h,[e("section",w,[V,e("div",U,[e("form",{onSubmit:t[8]||(t[8]=x((...o)=>r.updataRecommendation&&r.updataRecommendation(...o),["prevent"])),class:"space-y-4"},[e("div",R,[e("div",null,[E,s(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>l.recommendation.name=o),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"name of product",type:"text",id:"name"},null,512),[[d,l.recommendation.name]])]),e("div",null,[B,s(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>l.recommendation.status=o),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"status ...",type:"text",id:"status"},null,512),[[d,l.recommendation.status]])])]),e("div",D,[e("div",null,[k,s(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>l.recommendation.price=o),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"inter price of recommendation",type:"text",id:"price"},null,512),[[d,l.recommendation.price]])]),e("div",null,[C,s(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>l.recommendation.tp1=o),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"inter value of tp1",type:"text",id:"tp1"},null,512),[[d,l.recommendation.tp1]])])]),e("div",M,[e("div",null,[N,s(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>l.recommendation.tp2=o),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"inter value of tp2",type:"text",id:"tp2"},null,512),[[d,l.recommendation.tp2]])]),e("div",null,[j,s(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>l.recommendation.tp3=o),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"inter value of tp3",type:"text",id:"tp3"},null,512),[[d,l.recommendation.tp3]])])]),e("div",F,[e("div",null,[S,s(e("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>l.recommendation.sl=o),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"sl ...",type:"text",id:"sl"},null,512),[[d,l.recommendation.sl]])]),e("div",null,[T,s(e("input",{"onUpdate:modelValue":t[7]||(t[7]=o=>l.recommendation.date=o),class:"w-full p-3 text-md rounded-lg text-gray-900 border-2 border_card placeholder:text-gray-600",placeholder:"date ...",type:"text",id:"date"},null,512),[[d,l.recommendation.date]])])]),q],32)])])])])])}const J=m(y,[["render",z]]);export{J as default};
