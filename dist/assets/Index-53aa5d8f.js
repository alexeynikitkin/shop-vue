import{_ as p,r as b,o as n,c as o,a as s,t as l,g as e,F as d,b as c,d as _,e as v,f as h,w as g}from"./index-882c1471.js";const m={name:"Show",mounted(){$(document).trigger("changed"),this.user=this.getUser(),console.log(this.user)},data(){return{user:[]}},methods:{getUser(){let i=localStorage.getItem("user_logged");return i!=""?(i=JSON.parse(i),i):!1}}},f={key:0,class:"overflow-hidden"},y=v('<section class="breadcrumb-area" style="background-image:url(src/assets/images/inner-pages/breadcum-bg.png);"><div class="container"><div class="row"><div class="col-xl-12"><div class="breadcrumb-content text-center wow fadeInUp animated"><h2>My Account </h2><div class="breadcrumb-menu"><ul><li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li><li><i class="flaticon-next"></i></li><li class="active">My Account</li></ul></div></div></div></div></div></section>',1),w={class:"my-account-page pt-120 pb-120"},x={class:"container"},N={class:"row wow fadeInUp animated"},k=s("div",{class:"col-xl-3 col-lg-4"},[s("div",{class:"d-flex align-items-start"},[s("div",{class:"nav my-account-page__menu flex-column nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},[s("button",{class:"nav-link active",id:"v-pills-dashboard-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-dashboard",type:"button",role:"tab","aria-controls":"v-pills-dashboard","aria-selected":"true"},[s("span",null," Dashboard")]),e(),s("button",{class:"nav-link",id:"v-pills-orders-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-orders",type:"button",role:"tab","aria-controls":"v-pills-orders","aria-selected":"false"},[s("span",null," Orders")]),s("button",{class:"nav-link",id:"v-pills-address-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-address",type:"button",role:"tab","aria-controls":"v-pills-address","aria-selected":"false"},[s("span",null," Address")]),e(),s("button",{class:"nav-link",id:"v-pills-account-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-account",type:"button",role:"tab","aria-controls":"v-pills-account","aria-selected":"false"},[s("span",null," Account Details")])])])],-1),A={class:"col-lg-7"},S={class:"tab-content",id:"v-pills-tabContent"},C={class:"tab-pane fade show active",id:"v-pills-dashboard",role:"tabpanel","aria-labelledby":"v-pills-dashboard-tab"},H={class:"tabs-content__single"},L=s("h5",null,[e("From your account dashboard you can view your "),s("span",null,"Recent Orders, manage your shipping"),e(" and "),s("span",null,"billing addresses,"),e(" and edit your "),s("span",null,"Password and account details")],-1),V={class:"tab-pane fade",id:"v-pills-orders",role:"tabpanel","aria-labelledby":"v-pills-orders-tab"},I={class:"tabs-content__single"},O={class:"item d-flex gap-2"},U=["src","alt"],B={class:"details"},D=s("hr",null,null,-1),F={class:"tab-pane fade",id:"v-pills-address",role:"tabpanel","aria-labelledby":"v-pills-address-tab"},z={class:"tabs-content__single"},E={class:"tab-pane fade",id:"v-pills-account",role:"tabpanel","aria-labelledby":"v-pills-account-tab"},J={class:"tabs-content__single"};function M(i,P,T,q,a,Q){const u=b("router-link");return n(),o("div",null,[a.user!=""?(n(),o("main",f,[y,s("section",w,[s("div",x,[s("div",N,[k,s("div",A,[s("div",S,[s("div",C,[s("div",H,[s("h4",null,[s("span",null,"Hello "+l(a.user.name),1),e(" (Not Admin? Logout)")]),L])]),s("div",V,[s("div",I,[s("h4",null,[s("span",null,"Hello "+l(a.user.name),1),e(" (Not Admin? Logout)")]),s("ul",null,[(n(!0),o(d,null,c(a.user.orders,r=>(n(),o("li",null,[(n(!0),o(d,null,c(JSON.parse(r.products),t=>(n(),o("div",O,[s("img",{width:"100",height:"100",src:t.image_url,alt:t.title},null,8,U),s("div",B,[s("h4",null,"#: "+l(r.id),1),s("p",null,[e("Title: "),h(u,{to:{name:"products.show",params:{id:t.id}}},{default:g(()=>[e(l(t.title),1)]),_:2},1032,["to"])]),s("p",null,"Price: $"+l(t.price),1),s("p",null,"Qty: "+l(t.qty),1),s("p",null,"Size: "+l(t.size),1),s("p",null,"Color: "+l(t.color),1)])]))),256)),D]))),256))])])]),s("div",F,[s("div",z,[s("h4",null,[s("span",null,"Hello "+l(a.user.name),1),e(" (Not Admin? Logout)")]),s("h5",null,l(a.user.address),1)])]),s("div",E,[s("div",J,[s("h4",null,[s("span",null,"Hello "+l(a.user.name),1),e(" (Not Admin? Logout)")]),s("h5",null,"Name: "+l(a.user.name),1),s("p",null,"Email: "+l(a.user.email),1),s("p",null,"Address: "+l(a.user.address),1)])])])])])])])])):_("",!0)])}const j=p(m,[["render",M]]);export{j as default};
