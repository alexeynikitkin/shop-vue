import{_ as d,r as m,o as g,c as p,a as e,g as n,f as u,w as _,i as a,m as l,h,e as f}from"./index-00706f86.js";const v={name:"Login",mounted(){$(document).trigger("changed")},data(){return{password:"",email:""}},methods:{login(){this.axios.post("http://127.0.0.1:8000/api/login-user",{email:this.email,password:this.password,end:"end"}).then(o=>{console.log(o),localStorage.setItem("user_logged",JSON.stringify(o.data)),window.location.href="/account",$(document).trigger("changed")}).finally(o=>{$(document).trigger("changed")})}}},w={class:"overflow-hidden"},b=f('<section class="breadcrumb-area" style="background-image:url(src/assets/images/inner-pages/breadcum-bg.png);"><div class="container"><div class="row"><div class="col-xl-12"><div class="breadcrumb-content text-center wow fadeInUp animated"><h2>Login</h2><div class="breadcrumb-menu"><ul><li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li><li><i class="flaticon-next"></i></li><li class="active">Login</li></ul></div></div></div></div></div></section>',1),x={class:"login-page pt-120 pb-120 wow fadeInUp animated"},y={class:"container"},k={class:"row justify-content-center"},L={class:"col-xl-6 col-lg-8 col-md-9"},V={class:"login-register-form",style:{"background-image":"url('src/assets/images/inner-pages/login-bg.png')"}},N={class:"top-title text-center"},U=e("h2",null,"Login",-1),S={class:"common-form",action:"#"},B={class:"form-group"},C={class:"form-group eye"},I=e("div",{class:"icon icon-1"},[e("i",{class:"flaticon-hidden"})],-1),D=e("div",{class:"icon icon-2"},[e("i",{class:"flaticon-visibility"})],-1);function E(o,s,M,T,t,c){const r=m("router-link");return g(),p("div",null,[e("main",w,[b,e("section",x,[e("div",y,[e("div",k,[e("div",L,[e("div",V,[e("div",N,[U,e("p",null,[n("Don't have an account yet? "),u(r,{to:"/register"},{default:_(()=>[n("Sign up for free")]),_:1})])]),e("form",S,[e("div",B,[a(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=i=>t.email=i),placeholder:"Your User Email Address"},null,512),[[l,t.email]])]),e("div",C,[I,n(),a(e("input",{type:"password",id:"password-field",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=i=>t.password=i),placeholder:"Password"},null,512),[[l,t.password]]),D]),e("button",{onClick:s[2]||(s[2]=h(i=>c.login(),["prevent"])),type:"submit",class:"btn--primary style2"},"Login ")])])])])])])])])}const A=d(v,[["render",E]]);export{A as default};
