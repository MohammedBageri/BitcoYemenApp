import{_,r as e,o as n,c as i,d as t,t as r,b as d,u as h,n as b,s as f,a as v,F as y,k as $,q as k}from"./index.33eb67fe.js";const w={data(){return{api_url:"https://bitcoyemen-api.novelsoft.com.co"}},name:"blog",props:["names","bodys","photos","blogid"]},B={class:"card_ground_3 rounded-xl"},j={class:"relative block"},H=["src"],N={class:"p-6"},C={class:"mt-0 text-xl font-bold"},F={class:"mt-2 text-md font-light sub_text"},V={class:"flex flex-row justify-between"},q=t("span",{class:"text-xl font-medium"}," \u0623\u0642\u0631\u0623 \u0627\u0644\u0645\u0642\u0627\u0644 ",-1);function z(a,m,s,g,l,u){const c=e("router-link");return n(),i("li",B,[t("a",j,[t("img",{loading:"lazy",alt:"No photo",class:"object-contain photo_ground_3 h-56 lg:h-72 mt-1",src:`${l.api_url}/${s.photos}`,crossorigin:"true"},null,8,H),t("div",N,[t("h5",C,r(s.names),1),t("p",F,r(s.bodys.substring(0,100)+"..."),1),t("div",V,[d(c,{to:{name:"BlogPost",params:{id:s.blogid}},class:"flex items-center justify-center w-2/3 button_ground rounded-sm px-8 py-4 mt-4"},{default:h(()=>[q]),_:1},8,["to"])])])])])}const D=_(w,[["render",z]]),E={name:"HomeBlog",components:{navbar:b,blog:D,section6:f},data(){return{blogs:[]}},created(){v.get("/api/v1/blog/").then(a=>{this.blogs=a.data})}},L={class:"HomeBlog"},P={class:"ground mt-10"},S=t("div",{class:"mr-0 text-right"},[t("div",null,[t("span",{class:"inline-block w-12 h-1 line_ground"}),t("h2",{class:"mt-1 text-xl font-extrabold tracking-wide md:text-2xl lg:text-3xl"},"\u0627\u0644\u0645\u062F\u0648\u0646\u0629"),t("p",{class:"sub_text inline-block w-full md:w-1/2 mt-5 text-md font-light leading-9 md:text-1xl lg:text-1xl"}," \u064A\u0634\u064A\u0631 \u0627\u0644\u0646\u0627\u0633 \u0627\u0644\u0649 \u0634\u0628\u0643\u0629 \u0627\u0644\u0631\u064A\u0628\u0644 \u0648\u0639\u0645\u0644\u062A\u0647\u0627 \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0647\u0627 \u0628\u0627\u0633\u0645 \u201C\u0627\u0644\u0631\u064A\u0628\u0644\u201D\u060C \u0645\u0645\u0627 \u064A\u0624\u062F\u064A \u063A\u0627\u0644\u0628\u0627\u064B \u0627\u0644\u0649 \u062D\u062F\u0648\u062B \u0627\u0631\u062A\u0628\u0627\u0643 \u062D\u0648\u0644\u0647\u0627 \u0644\u0623\u0646\u0647\u0627 \u062A\u062D\u0645\u0644 \u0627\u0644\u0627\u0633\u0645 \u0630\u0627\u062A\u0647 \u0644\u0634\u0628\u0643\u0629 \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0644\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 ")])],-1),U={class:"max-w-screen-2xl px-0 py-12 mx-auto sm:px-6 lg:px-0"},A={class:"mt-4"},G={class:"grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"};function I(a,m,s,g,l,u){const c=e("navbar"),p=e("blog"),x=e("section6");return n(),i("div",L,[d(c),t("section",P,[S,t("div",U,[t("div",A,[t("ul",G,[(n(!0),i(y,null,$(l.blogs,o=>(n(),k(p,{class:"card_ground",key:o.id,names:o.title,bodys:o.body,photos:o.imageUrl,blogid:o._id},null,8,["names","bodys","photos","blogid"]))),128))])])])]),d(x)])}const K=_(E,[["render",I]]);export{K as default};