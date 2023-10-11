import{_ as x,r as f,o as i,c as a,a as t,F as w,b as k,g as n,t as r,h as d,d as p,f as _,w as m,i as v,m as g,e as C}from"./index-882c1471.js";const S={name:"Index",mounted(){$(document).trigger("changed"),this.getProductsCart(),this.getLoggedInUser(),this.discounts=this.user.discounts,console.log(this.user),console.log("Discounts",this.discounts)},data(){return{products:[],name:"",address:"",email:"",user:"",discounts:"",totalDisc:null}},computed:{totalPrice(){let e=0;return this.products.forEach(o=>{e+=o.price*o.qty}),e}},methods:{getProductsCart(){this.products=JSON.parse(localStorage.getItem("cart"))},minusQty(e){e.qty>1&&e.qty--,this.updateCart()},plusQty(e){let o=e.stock,u=e.qty;o>u&&e.qty++,this.updateCart()},removeProduct(e){this.products=this.products.filter(o=>o.id!==e),this.updateCart()},updateCart(){localStorage.setItem("cart",JSON.stringify(this.products)),$(".cart-icon span").text(this.products.length)},storeOrder(){this.axios.post("http://127.0.0.1:8000/api/orders",{products:this.products,name:this.name,email:this.email,address:this.address,total_price:this.totalPrice,total_disc:this.totalDisc}).then(e=>{this.products=[],localStorage.setItem("cart","[]"),window.location.reload()}).finally(e=>{$(document).trigger("changed")})},storeOrderLoggedIn(){this.axios.post("http://127.0.0.1:8000/api/orders",{products:this.products,name:this.user.name,email:this.user.email,address:this.user.address,total_price:this.totalPrice,total_disc:this.totalDisc}).then(e=>{this.products=[],localStorage.setItem("cart","[]"),window.location.reload()}).finally(e=>{$(document).trigger("changed")})},getLoggedInUser(){this.user=JSON.parse(localStorage.getItem("user_logged"))},applyCoupon(){$(".cart-total-box .price, .cart-check-out-list .price-sub").text(this.totalPrice-this.discounts[0].value),$(".cart-check-out-list .price").text(this.totalPrice-this.discounts[0].value+50),this.totalDisc=this.totalPrice-this.discounts[0].value,this.axios.post("http://127.0.0.1:8000/api/discount",{discount_id:this.discounts[0].id}).then(e=>{console.log(e),$(".coupon-button").text("Applied"),$(".coupon-button").css("pointer-events","none"),$(".coupon-times").text($(".coupon-times").attr("data-value")-1)}).finally(e=>{$(document).trigger("changed")})},getProductFromCart(e){var u=JSON.parse(localStorage.getItem("cart")).filter(b=>b.id==e);return Object.keys(u).length>0?u[0].qty:0}}},I={class:"overflow-hidden"},P=C('<section class="breadcrumb-area" style="background-image:url(src/assets/images/inner-pages/breadcum-bg.png);"><div class="container"><div class="row"><div class="col-xl-12"><div class="breadcrumb-content text-center wow fadeInUp animated"><h2>Cart</h2><div class="breadcrumb-menu"><ul><li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li><li><i class="flaticon-next"></i></li><li class="active">Cart</li></ul></div></div></div></div></div></section>',1),q={class:"cart-area pt-120 pb-120"},U={class:"container"},N={class:"row wow fadeInUp animated"},O={class:"col-xl-12 col-lg-12 col-md-12 col-sm-12"},V={class:"cart-table-box"},Q={class:"table-outer"},D={class:"cart-table"},F=t("thead",{class:"cart-header"},[t("tr",null,[t("th",{class:""},"Product Name"),t("th",{class:"price"},"Price"),t("th",null,"Attributes"),t("th",null,"Quantity"),t("th",null,"Subtotal"),t("th",{class:"hide-me"})])],-1),L={class:"thumb-box"},A=["src","alt"],E=t("br",null,null,-1),J=t("br",null,null,-1),T={class:"qty"},B=["data-stock","data-cart-qty"],z=["onClick"],M=t("i",{class:"flaticon-minus"},null,-1),j=[M],H=["value"],G=["onClick"],K=t("i",{class:"flaticon-plus"},null,-1),R=[K],W={class:"sub-total"},X=["onClick"],Y=t("i",{class:"flaticon-cross"},null,-1),Z=[Y],tt={class:"row"},st={key:0,class:"col-xl-12"},et={class:"cart-button-box"},ot={key:0,class:"apply-coupon wow fadeInUp animated"},lt={class:"apply-coupon-input-box mt-30"},it=["data-value"],at={class:"apply-coupon-button mt-30"},nt={class:"cart-button-box-right wow fadeInUp animated"},ct={key:1,class:"col-xl-12"},rt={key:0,class:"row w-25"},dt={key:0,class:"cart-button-box"},ut={key:1,class:"cart-button-box"},ht={key:1,class:"row pt-120"},pt=t("div",{class:"col-xl-6 col-lg-7 wow fadeInUp animated"},[t("div",{class:"cart-total-box"},[t("div",{class:"inner-title"},[t("h3",null,"Cart Totals")])])],-1),_t=[pt],mt={key:2,class:"row mt--30"},vt={class:"col-xl-6 col-lg-7 wow fadeInUp animated"},gt={class:"cart-total-box mt-30"},bt={class:"table-outer"},yt={class:"cart-table2"},xt={class:"cart-header clearfix"},ft=t("th",{colspan:"1",class:"shipping-title"},"Price with Coupon",-1),wt={class:"price"},kt={class:"col-xl-6 col-lg-5 wow fadeInUp animated"},Ct={class:"cart-check-out mt-30"},St=t("h3",null,"Check Out",-1),It={class:"cart-check-out-list"},Pt=t("div",{class:"left"},[t("p",null,"Subtotal")],-1),qt={class:"right"},Ut={class:"price-sub"},Nt=t("li",null,[t("div",{class:"left"},[t("p",null,"Shipping")]),t("div",{class:"right"},[t("p",null,[t("span",null,"Flat rate:"),n(" $50.00")])])],-1),Ot=t("div",{class:"left"},[t("p",null,"Total Price:")],-1),Vt={class:"right"},Qt={class:"price"};function Dt(e,o,u,b,l,c){const h=f("router-link");return i(),a("div",null,[t("main",I,[P,t("section",q,[t("div",U,[t("div",N,[t("div",O,[t("div",V,[t("div",Q,[t("table",D,[F,t("tbody",null,[(i(!0),a(w,null,k(l.products,s=>(i(),a("tr",null,[t("td",null,[t("div",L,[_(h,{to:{name:"products.show",params:{id:s.id}},class:"thumb"},{default:m(()=>[t("img",{src:s.image_url,alt:s.title},null,8,A)]),_:2},1032,["to"]),_(h,{to:{name:"products.show",params:{id:s.id}},class:"title"},{default:m(()=>[t("h5",null,r(s.title),1)]),_:2},1032,["to"])])]),t("td",null,"$"+r(s.price),1),t("td",null,[n("Size - "+r(s.size),1),E,n("Color - "+r(s.color),1),J]),t("td",T,[t("div",{class:"qtySelector text-center","data-stock":s.stock,"data-cart-qty":c.getProductFromCart(s.id)},[t("span",{onClick:d(y=>c.minusQty(s),["prevent"]),class:"decreaseQty"},j,8,z),t("input",{type:"number",class:"qtyValue",value:s.qty},null,8,H),t("span",{onClick:d(y=>c.plusQty(s),["prevent"]),class:"increaseQty"},R,8,G)],8,B)]),t("td",W,"$"+r(s.price*s.qty),1),t("td",null,[t("div",{onClick:d(y=>c.removeProduct(s.id),["prevent"]),class:"remove"},Z,8,X)])]))),256))])])])])])]),t("div",tt,[l.products.length>0?(i(),a("div",st,[t("div",et,[l.discounts.length>0?(i(),a("div",ot,[t("div",lt,[t("p",null,[n("U have coupon for "),t("span",{class:"coupon-times","data-value":l.discounts[0].times},r(l.discounts[0].times),9,it),n(" times with discount $"+r(l.discounts[0].value),1)])]),t("div",at,[t("button",{onClick:o[0]||(o[0]=d(s=>c.applyCoupon(),["prevent"])),class:"btn--primary style2 coupon-button",type:"submit"},"Apply Coupon")])])):p("",!0),t("div",nt,[_(h,{to:{name:"products.index"},class:"btn--primary mt-30",type:"submit"},{default:m(()=>[n("Continue Shopping")]),_:1},8,["to"])])])])):(i(),a("div",ct,[n(" Empty Cart "),_(h,{to:{name:"products.index"},class:"btn--primary mt-30",type:"submit"},{default:m(()=>[n("Continue Shopping")]),_:1},8,["to"])]))]),l.products.length>0?(i(),a("div",rt,[l.user==""?(i(),a("div",dt,[v(t("input",{type:"text",name:"name","onUpdate:modelValue":o[1]||(o[1]=s=>l.name=s),placeholder:"Name"},null,512),[[g,l.name]]),v(t("input",{type:"text",name:"email","onUpdate:modelValue":o[2]||(o[2]=s=>l.email=s),placeholder:"Email"},null,512),[[g,l.email]]),v(t("input",{type:"text",name:"address","onUpdate:modelValue":o[3]||(o[3]=s=>l.address=s),placeholder:"Address"},null,512),[[g,l.address]]),t("input",{onClick:o[4]||(o[4]=d(s=>c.storeOrder(),["prevent"])),type:"submit",class:"btn btn--primary style2",value:"Submit"})])):(i(),a("div",ut,[t("input",{onClick:o[5]||(o[5]=d(s=>c.storeOrderLoggedIn(),["prevent"])),type:"submit",class:"btn btn--primary style2",value:"Submit"})]))])):p("",!0),l.products.length>0?(i(),a("div",ht,_t)):p("",!0),l.products.length>0?(i(),a("div",mt,[t("div",vt,[t("div",gt,[t("div",bt,[t("table",yt,[t("thead",xt,[t("tr",null,[ft,t("th",null,[n("$"),t("span",wt,r(c.totalPrice),1)])])])])])])]),t("div",kt,[t("div",Ct,[St,t("ul",It,[t("li",null,[Pt,t("div",qt,[t("p",null,[n("$"),t("span",Ut,r(c.totalPrice),1)])])]),Nt,t("li",null,[Ot,t("div",Vt,[t("p",null,[n("$"),t("span",Qt,r(c.totalPrice+50),1)])])])])])])])):p("",!0)])])])])}const Lt=x(S,[["render",Dt]]);export{Lt as default};
