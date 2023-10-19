import{_ as d,r as m,o as p,c as g,a as e,g as n,f as u,w as _,i as a,m as l,h,e as v}from"./index-fb9adee6.js";const f={name:"Login",mounted(){$(document).trigger("changed")},data(){return{password:"",email:""}},methods:{login(){this.axios.post("https://karte.studiopresto.dev/api/login-user",{email:this.email,password:this.password,end:"end"}).then(o=>{console.log(o),localStorage.setItem("user_logged",JSON.stringify(o.data)),localStorage.removeItem("wishlist"),localStorage.removeItem("cart"),window.location.href="/account"}).finally(o=>{$(document).trigger("changed")})}}},w={class:"overflow-hidden"},b=v('<section class="breadcrumb-area" style="background-image:url(src/assets/images/inner-pages/breadcum-bg.png);"><div class="container"><div class="row"><div class="col-xl-12"><div class="breadcrumb-content text-center wow fadeInUp animated"><h2>Login</h2><div class="breadcrumb-menu"><ul><li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li><li><i class="flaticon-next"></i></li><li class="active">Login</li></ul></div></div></div></div></div></section>',1),x={class:"login-page pt-120 pb-120 wow fadeInUp animated"},y={class:"container"},k={class:"row justify-content-center"},L={class:"col-xl-6 col-lg-8 col-md-9"},S={class:"login-register-form",style:{"background-image":"url('src/assets/images/inner-pages/login-bg.png')"}},V={class:"top-title text-center"},I=e("h2",null,"Login",-1),N={class:"common-form",action:"#"},U={class:"form-group"},B={class:"form-group eye"},C=e("div",{class:"icon icon-1"},[e("i",{class:"flaticon-hidden"})],-1),D=e("div",{class:"icon icon-2"},[e("i",{class:"flaticon-visibility"})],-1);function E(o,s,M,T,t,c){const r=m("router-link");return p(),g("div",null,[e("main",w,[b,e("section",x,[e("div",y,[e("div",k,[e("div",L,[e("div",S,[e("div",V,[I,e("p",null,[n("Don't have an account yet? "),u(r,{to:"/register"},{default:_(()=>[n("Sign up for free")]),_:1})])]),e("form",N,[e("div",U,[a(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=i=>t.email=i),placeholder:"Your User Email Address"},null,512),[[l,t.email]])]),e("div",B,[C,n(),a(e("input",{type:"password",id:"password-field",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=i=>t.password=i),placeholder:"Password"},null,512),[[l,t.password]]),D]),e("button",{onClick:s[2]||(s[2]=h(i=>c.login(),["prevent"])),type:"submit",class:"btn--primary style2"},"Login ")])])])])])])])])}const A=d(f,[["render",E]]);export{A as default};
