import{_ as c,r as m,o as p,c as u,a as e,g as a,f as g,w as h,i,m as n,h as _,e as v}from"./index-00706f86.js";const f={name:"Show",mounted(){$(document).trigger("changed")},data(){return{name:"",email:"",address:"",password:""}},methods:{registerUser(){this.axios.post("http://127.0.0.1:8000/api/register-user",{name:this.name,email:this.email,address:this.address,password:this.password}).then(l=>{console.log(l),window.location.replace("/login")}).finally(l=>{$(document).trigger("changed")})}}},w={class:"overflow-hidden"},b=v('<section class="breadcrumb-area" style="background-image:url(src/assets/images/inner-pages/breadcum-bg.png);"><div class="container"><div class="row"><div class="col-xl-12"><div class="breadcrumb-content text-center wow fadeInUp animated"><h2>Register</h2><div class="breadcrumb-menu"><ul><li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li><li><i class="flaticon-next"></i></li><li class="active">Register</li></ul></div></div></div></div></div></section>',1),x={class:"login-page pt-120 pb-120"},y={class:"container"},U={class:"row justify-content-center"},V={class:"col-xl-6 col-lg-8 col-md-9 wow fadeInUp animated"},k={class:"login-register-form",style:{"background-image":"url('src/assets/images/inner-pages/login-bg.png')"}},N={class:"top-title text-center"},R=e("h2",null,"Register",-1),B={class:"common-form"},C={class:"form-group"},A={class:"form-group"},E={class:"form-group"},I={class:"form-group eye"},M=e("div",{class:"icon icon-1"},[e("i",{class:"flaticon-hidden"})],-1),S=e("div",{class:"icon icon-2"},[e("i",{class:"flaticon-visibility"})],-1);function T(l,s,Y,j,o,r){const d=m("router-link");return p(),u("div",null,[e("main",w,[b,e("section",x,[e("div",y,[e("div",U,[e("div",V,[e("div",k,[e("div",N,[R,e("p",null,[a("Already have an account? "),g(d,{to:"/login"},{default:h(()=>[a("Log in")]),_:1})])]),e("form",B,[e("div",C,[i(e("input",{type:"text",class:"form-control",placeholder:"Your Name","onUpdate:modelValue":s[0]||(s[0]=t=>o.name=t)},null,512),[[n,o.name]])]),e("div",A,[i(e("input",{type:"text",class:"form-control",placeholder:"Address","onUpdate:modelValue":s[1]||(s[1]=t=>o.address=t)},null,512),[[n,o.address]])]),e("div",E,[i(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=t=>o.email=t),placeholder:"Your Email"},null,512),[[n,o.email]])]),e("div",I,[M,a(),i(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>o.password=t),type:"password",id:"password-field",class:"form-control",placeholder:"Password"},null,512),[[n,o.password]]),S]),e("button",{onClick:s[4]||(s[4]=_(t=>r.registerUser(),["prevent"])),type:"submit",class:"btn--primary style2"},"Register ")])])])])])])])])}const H=c(f,[["render",T]]);export{H as default};
