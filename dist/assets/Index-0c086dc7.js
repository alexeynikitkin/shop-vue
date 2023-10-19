import{_,o as i,c as a,a as t,F as g,b as m,e as v,t as d,h}from"./index-5f64d841.js";const p={name:"Index",mounted(){$(document).trigger("changed"),this.getProductsWishlist()},data(){return{products:[]}},computed:{},methods:{getProductsWishlist(){this.products=JSON.parse(localStorage.getItem("wishlist")),console.log(this.products)},removeProduct(s){this.products=this.products.filter(o=>o.id!==s),this.updateWishlist(),$(".wish-icon span").text(this.products.length)},updateWishlist(){localStorage.setItem("wishlist",JSON.stringify(this.products))},addToCart(s,o){o&&$(".qtyValue").val(1);let e=localStorage.getItem("cart"),r=$(".qtyValue").val()?$(".qtyValue").val():1;$(".qtyValue").val(1);let c=[{id:s.id,image_url:s.image_url,title:s.title,price:s.price,qty:r,size:s.size,color:s.color,stock:s.stock}];e?(e=JSON.parse(e),e.forEach(n=>{n.id===s.id&&(n.qty=Number(n.qty)+Number(r),c=null)}),Array.prototype.push.apply(e,c),localStorage.setItem("cart",JSON.stringify(e))):(localStorage.setItem("cart",JSON.stringify(c)),$(".cart-icon span").text(c.length)),$(".cart-icon span").text(e.length),window.location.reload()},getProductFromCart(s){if(localStorage.getItem("cart")!=null){var o=JSON.parse(localStorage.getItem("cart")).filter(r=>r.id==s);return Object.keys(o).length>0?o[0].qty:0}}}},f={class:"overflow-hidden"},y=v('<section class="breadcrumb-area" style="background-image:url(/src/assets/images/inner-pages/breadcum-bg.png);"><div class="container"><div class="row"><div class="col-xl-12"><div class="breadcrumb-content text-center wow fadeInUp animated"><h2>Wishlist</h2><div class="breadcrumb-menu"><ul><li><a href="/"><i class="flaticon-home pe-2"></i>Home</a></li><li><i class="flaticon-next"></i></li><li class="active">Wishlist</li></ul></div></div></div></div></div></section>',1),b={class:"wishlist pt-120 pb-120"},k={class:"container"},w={class:"row"},S={class:"col-xl-12 wow fadeInUp animated"},x={class:"wishlist-table-box"},I={class:"wishlist-table-outer"},N={key:0,class:"wishlist-table"},q=t("thead",{class:"wishlist-header"},[t("tr",null,[t("th",null,"Image"),t("th",null,"Product"),t("th",null,"Price"),t("th",null,"Stock Status"),t("th",null,"Add"),t("th",null,"Delete")])],-1),O={class:"wishlist-thumb"},P=["src","alt"],C={class:"price"},W={key:0,class:"instock"},J={key:1,class:"instock"},V={class:"add-to-cart-btn"},F=["onClick"],A={key:1,class:"instock"},B=["onClick"],T=t("i",{class:"flaticon-cross"},null,-1),z=[T],D={key:1,class:"wishlist-table"};function E(s,o,e,r,c,n){return i(),a("div",null,[t("main",f,[y,t("section",b,[t("div",k,[t("div",w,[t("div",S,[t("div",x,[t("div",I,[c.products.length!=0?(i(),a("table",N,[q,t("tbody",null,[(i(!0),a(g,null,m(c.products,l=>(i(),a("tr",null,[t("td",null,[t("div",O,[t("img",{src:l.image_url,alt:l.title},null,8,P)])]),t("td",null,[t("h5",null,d(l.title),1)]),t("td",null,[t("p",C,"$"+d(l.price),1)]),t("td",null,[l.stock>0?(i(),a("p",W,"In Stock")):(i(),a("p",J,"Out Of Stock"))]),t("td",V,[l.stock!=n.getProductFromCart(l.id)?(i(),a("a",{key:0,onClick:h(u=>n.addToCart(l,!0),["prevent"]),class:"btn--primary style2"},"Add To Cart",8,F)):(i(),a("p",A,"Waiting for it..."))]),t("td",null,[t("div",{onClick:h(u=>n.removeProduct(l.id),["prevent"]),class:"remove"},z,8,B)])]))),256))])])):(i(),a("table",D," Nothing to show "))])])])])])])])])}const j=_(p,[["render",E]]);export{j as default};
