import{_ as w,r as x,o,c as l,a as t,F as g,b as v,d as _,h as p,t as u,e as P,f as b,w as y,i as C,v as S,g as h,n as k,j as I,p as N,k as q}from"./index-00706f86.js";import{_ as F}from"./product-categories-v1-img1-901f2b2e.js";const O={name:"Index",mounted(){$(document).trigger("changed"),this.getProducts(),this.getFilterList(),this.getCats()},data(){return{products:[],popupProduct:null,filterList:[],categories:[],colors:[],tags:[],prices:[],pagination:[],attrs:[],value:1}},methods:{getProducts(i=1){this.axios.post("http://127.0.0.1:8000/api/products",{categories:this.categories,tags:this.tags,prices:this.prices,colors:this.colors,page:i}).then(c=>{this.products=c.data.data,this.pagination=c.data.meta,$(document).trigger("changed"),console.log("Products",this.products)}).finally(c=>{$(document).trigger("changed")})},changePrice(i=null,c=null){if(i!==null&&c!==null){let a=parseFloat(c);$(".popup-right-content h2 .price").text(a.toFixed(2))}return parseFloat($(".popup-right-content h2 .price").text()).toFixed(2)},getProduct(i){this.axios.get(`http://127.0.0.1:8000/api/products/${i}`).then(c=>{this.popupProduct=c.data.data}).finally(c=>{$(document).trigger("changed")})},getFilterList(){this.axios.get("http://127.0.0.1:8000/api/products/filters").then(i=>{this.filterList=i.data,$("#price-range").length&&($("#price-range").slider({range:!0,min:this.filterList.price.min,max:this.filterList.price.max,values:[this.filterList.price.min,this.filterList.price.max],slide:function(c,a){$("#priceRange").val("$"+a.values[0]+" - $"+a.values[1])}}),$("#priceRange").val("$"+$("#price-range").slider("values",0)+" - $"+$("#price-range").slider("values",1)))}).finally(i=>{$(document).trigger("changed")})},getCats(){this.axios.get("http://127.0.0.1:8000/api/products/filters").then(i=>{this.attrs=i.data.categories}).finally(i=>{$(document).trigger("changed")})},filterProducts(){$(document).trigger("changed");let i=$("#priceRange").val();i=i.replace(/[\s+]|[$]/g,"").split("-"),this.prices=i,this.getProducts()},addColor(i){this.colors.includes(i)?this.colors=this.colors.filter(c=>c!==i):this.colors.push(i)},addTag(i){this.tags.includes(i)?this.tags=this.tags.filter(c=>c!==i):this.tags.push(i)},addToCart(i,c){c&&$(".qtyValue").val(1);let a=localStorage.getItem("cart"),f=$(".qtyValue").val()?$(".qtyValue").val():1;$(".qtyValue").val(1);let s=[{id:i.id,image_url:i.image_url,title:i.title,price:i.price,qty:f,size:i.size,color:i.color,stock:i.stock}];a?(a=JSON.parse(a),a.forEach(r=>{r.id===i.id&&(r.qty=Number(r.qty)+Number(f),s=null)}),Array.prototype.push.apply(a,s),localStorage.setItem("cart",JSON.stringify(a))):(localStorage.setItem("cart",JSON.stringify(s)),$(".cart-icon span").text(s.length)),$(".cart-icon span").text(a.length),window.location.reload()},addToWishlist(i){let c=localStorage.getItem("wishlist"),a=[{id:i.id,image_url:i.image_url,title:i.title,price:i.price,stock:i.stock,qty:i.qty}];c?(c=JSON.parse(c),this.ifInclude(i)||Array.prototype.push.apply(c,a),localStorage.setItem("wishlist",JSON.stringify(c))):localStorage.setItem("wishlist",JSON.stringify(a)),$(".wish-icon span").text(c.length),window.location.reload()},ifInclude(i){let c=localStorage.getItem("wishlist");c=JSON.parse(c);let a=!1;return c&&c.forEach(f=>{f.id===i.id&&(a=!0)}),a},getProductFromCart(i){var a=JSON.parse(localStorage.getItem("cart")).filter(f=>f.id==i);return Object.keys(a).length>0?a[0].qty:0}}},d=i=>(N("data-v-13029fec"),i=i(),q(),i),L={class:"overflow-hidden"},U=P('<section class="breadcrumb-area" style="background-image:url(/src/assets/images/inner-pages/breadcum-bg.png);" data-v-13029fec><div class="container" data-v-13029fec><div class="row" data-v-13029fec><div class="col-xl-12" data-v-13029fec><div class="breadcrumb-content pb-60 text-center wow fadeInUp animated" data-v-13029fec><h2 data-v-13029fec>Shop Grid</h2><div class="breadcrumb-menu" data-v-13029fec><ul data-v-13029fec><li data-v-13029fec><a href="index.html" data-v-13029fec><i class="flaticon-home pe-2" data-v-13029fec></i>Home</a></li><li data-v-13029fec><i class="flaticon-next" data-v-13029fec></i></li><li class="active" data-v-13029fec>Shop Grid</li></ul></div></div></div></div></div></section>',1),T={class:"product-categories-one pb-60"},V={class:"container"},j={class:"row wow fadeInUp animated"},J={class:"col-xl-12"},z={key:0,class:"product-categories-one__inner"},R={class:"inner"},A=["alt"],B={class:"title"},D={class:"product-grid pt-60 pb-120"},W={class:"container"},E={class:"row gx-4"},Q={class:"col-xl-3 col-lg-4"},G={class:"shop-grid-sidebar"},M=d(()=>t("button",{class:"remove-sidebar d-lg-none d-block"},[t("i",{class:"flaticon-cross"})],-1)),H={class:"sidebar-holder"},K={class:"single-sidebar-box mt-30 wow fadeInUp animated"},X=d(()=>t("h4",null,"Select Categories",-1)),Y={class:"checkbox-item"},Z={class:"form-group"},tt=["value","id"],et=["for"],st={class:"single-sidebar-box mt-30 wow fadeInUp animated"},it=d(()=>t("h4",null,"Color Option ",-1)),ot={class:"color-option"},lt=["onClick","href"],ct={class:"single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0"},nt=d(()=>t("h4",null,"Tags ",-1)),at={class:"popular-tag"},rt=["onClick","href"],dt={class:"single-sidebar-box mt-30 wow fadeInUp animated"},ut=d(()=>t("h4",null,"Filter By Price",-1)),_t={class:"slider-box"},pt=d(()=>t("div",{id:"price-range",class:"slider"},null,-1)),ht=d(()=>t("div",{class:"output-price"},[t("label",{for:"priceRange"},"Price:"),h(),t("input",{type:"text",id:"priceRange",readonly:""})],-1)),gt={class:"col-xl-9 col-lg-8"},vt={class:"row"},ft={class:"col-xl-12"},mt={class:"shop-grid-page-top-info p-0 justify-content-md-between justify-content-center"},bt={class:"left-box wow fadeInUp animated"},yt=d(()=>t("div",{class:"right-box justify-content-md-between justify-content-center wow fadeInUp animated"},null,-1)),kt={class:"row"},wt={class:"col-12"},xt={class:"tab-content",id:"pills-tabContent"},Pt={class:"tab-pane fade show active",id:"pills-grid",role:"tabpanel","aria-labelledby":"pills-grid-tab"},Ct={class:"row"},St={class:"col-xl-4 col-lg-6 col-6"},It={class:"products-three-single w-100 mt-30"},Nt={key:0,class:"products-three-single-img"},qt=["src","alt"],Ft=["src","alt"],Ot={key:0,class:"products-grid-one__badge-box"},Lt={class:"bg_base badge new"},Ut=["onClick"],Tt={key:2,class:"addcart btn--primary style2"},Vt={class:"products-grid__usefull-links"},jt=["onClick"],Jt=d(()=>t("i",{class:"flaticon-heart"},null,-1)),zt=d(()=>t("span",null," wishlist",-1)),Rt=["onClick"],At=d(()=>t("i",{class:"flaticon-heart"},null,-1)),Bt=d(()=>t("span",null," wishlist",-1)),Dt=["onClick","href"],Wt=d(()=>t("i",{class:"flaticon-visibility"},null,-1)),Et=d(()=>t("span",null," quick view",-1)),Qt=[Wt,Et],Gt=["id"],Mt={key:0,class:"container"},Ht={class:"row justify-content-between align-items-center"},Kt={class:"col-lg-6"},Xt={key:0,class:"quick-view__left-content"},Yt={class:"popup-product-single-image"},Zt=["src"],$t={key:1,class:"quick-view__left-content"},te={class:"tabs"},ee={class:"popup-product-thumb-box"},se={class:"tab-nav popup-product-thumb"},ie=["href"],oe=["src"],le={class:"popup-product-main-image-box"},ce=["id"],ne={class:"popup-product-single-image"},ae=["src"],re=d(()=>t("button",{class:"prev"},[t("i",{class:"flaticon-back"})],-1)),de=d(()=>t("button",{class:"next"},[t("i",{class:"flaticon-next"})],-1)),ue={class:"col-lg-6"},_e={class:"popup-right-content"},pe={class:"text"},he={class:"price"},ge={class:"price"},ve={key:0},fe={key:1},me={class:"color-varient"},be=["onClick","href"],ye={class:"add-product"},ke={key:0},we=d(()=>t("br",null,null,-1)),xe={key:1,class:"button-group"},Pe=["data-stock","data-cart-qty"],Ce=d(()=>t("span",{class:"decreaseQty"},[t("i",{class:"flaticon-minus"})],-1)),Se=["value"],Ie=d(()=>t("span",{class:"increaseQty"},[t("i",{class:"flaticon-plus"})],-1)),Ne={key:2,class:"button-group"},qe=d(()=>t("p",{class:"btn--primary"}," Out of Stock ",-1)),Fe=[qe],Oe={class:"products-three-single-content text-center"},Le={class:"price"},Ue={key:0,class:"row"},Te={class:"col-12 d-flex justify-content-center wow fadeInUp animated"},Ve={class:"pagination text-center"},je={key:0,class:"next"},Je=d(()=>t("i",{class:"flaticon-left-arrows","aria-hidden":"true"},null,-1)),ze=[Je],Re=["onClick"],Ae={key:1},Be={key:1,class:"next"},De=d(()=>t("i",{class:"flaticon-next-1","aria-hidden":"true"},null,-1)),We=[De];function Ee(i,c,a,f,s,r){const m=x("router-link");return o(),l("div",null,[t("main",L,[U,t("section",T,[t("div",V,[t("div",j,[t("div",J,[s.attrs?(o(),l("div",z,[t("ul",null,[(o(!0),l(g,null,v(s.attrs,e=>(o(),l("li",null,[b(m,{to:{name:"categories.show",params:{id:e.id}},class:"img-box"},{default:y(()=>[t("div",R,[t("img",{src:F,alt:e.title},null,8,A)])]),_:2},1032,["to"]),t("div",B,[b(m,{to:{name:"categories.show",params:{id:e.id}}},{default:y(()=>[t("h6",null,u(e.title),1)]),_:2},1032,["to"])])]))),256))])])):_("",!0)])])])]),t("div",D,[t("div",W,[t("div",E,[t("div",Q,[t("div",G,[M,t("div",H,[t("div",K,[X,t("div",Y,[t("form",null,[(o(!0),l(g,null,v(s.filterList.categories,e=>(o(),l("div",Z,[C(t("input",{value:e.id,"onUpdate:modelValue":c[0]||(c[0]=n=>s.categories=n),type:"checkbox",id:e.id},null,8,tt),[[S,s.categories]]),h(),t("label",{for:e.id},u(e.title),9,et)]))),256))])])]),t("div",st,[it,t("ul",ot,[(o(!0),l(g,null,v([...new Set(this.filterList.colors)],e=>(o(),l("li",null,[t("a",{onClick:p(n=>r.addColor(e),["prevent"]),href:`#${e}`,class:"color-option-single",style:k(`background: ${e}`)},[t("span",null,u(e),1)],12,lt)]))),256))])]),t("div",ct,[nt,t("ul",at,[(o(!0),l(g,null,v(s.filterList.tags,e=>(o(),l("li",null,[t("a",{onClick:p(n=>r.addTag(e.id),["prevent"]),href:`#${e.id}`},u(e.title),9,rt)]))),256))])]),t("div",dt,[ut,t("div",_t,[pt,ht,t("button",{onClick:c[1]||(c[1]=p(e=>r.filterProducts(),["prevent"])),class:"filterbtn",type:"submit"}," Filter ")])])])])]),t("div",gt,[t("div",vt,[t("div",ft,[t("div",mt,[t("div",bt,[t("p",null,"Showing "+u(s.products.length)+" of "+u(s.pagination.total)+" Results",1)]),yt])])]),t("div",kt,[t("div",wt,[t("div",xt,[t("div",Pt,[t("div",Ct,[(o(!0),l(g,null,v(s.products,e=>(o(),l("div",St,[t("div",It,[e?(o(),l("div",Nt,[t("img",{src:e.image_url,class:"first-img",alt:e.title},null,8,qt),t("img",{src:e.image_url,style:{filter:"grayscale(1)"},alt:e.title,class:"hover-img"},null,8,Ft),e.tags?(o(),l("div",Ot,[(o(!0),l(g,null,v(e.tags,n=>(o(),l("span",Lt,u(n.title),1))),256))])):_("",!0),e.stock!=r.getProductFromCart(e.id)?(o(),l("a",{key:1,onClick:p(n=>r.addToCart(e,!0),["prevent"]),href:"#",class:"addcart btn--primary style2"}," Add To Cart ",8,Ut)):(o(),l("p",Tt," Out Of Stock ")),t("div",Vt,[t("ul",null,[t("li",null,[r.ifInclude(e)?(o(),l("a",{key:0,onClick:p(n=>r.addToWishlist(e),["prevent"]),style:{background:"var(--thm-base)"},href:""},[Jt,h(),zt],8,jt)):(o(),l("a",{key:1,onClick:p(n=>r.addToWishlist(e),["prevent"]),href:""},[At,h(),Bt],8,Rt))]),t("li",null,[t("a",{onClick:n=>r.getProduct(e.id),href:`#popup${e.id}`,class:"popup_link"},Qt,8,Dt)])])])])):_("",!0),t("div",{id:`popup${e.id}`,class:"product-gird__quick-view-popup mfp-hide"},[s.popupProduct?(o(),l("div",Mt,[t("div",Ht,[t("div",Kt,[s.popupProduct.product_images.length==0?(o(),l("div",Xt,[t("div",Yt,[t("img",{src:s.popupProduct.image_url,alt:""},null,8,Zt)])])):_("",!0),s.popupProduct.product_images.length>2?(o(),l("div",$t,[t("div",te,[t("div",ee,[t("ul",null,[(o(!0),l(g,null,v(s.popupProduct.product_images,n=>(o(),l("li",se,[t("a",{href:`#tabb${n.id}`},[t("img",{src:n.file_path,alt:""},null,8,oe)],8,ie)]))),256))])]),t("div",le,[(o(!0),l(g,null,v(s.popupProduct.product_images,n=>(o(),l("div",{id:`tabb${n.id}`,class:"tab-item popup-product-image"},[t("div",ne,[t("img",{src:n.file_path,alt:""},null,8,ae)])],8,ce))),256)),re,de])])])):_("",!0)]),t("div",ue,[t("div",_e,[t("h3",null,u(s.popupProduct.title),1),t("p",pe,u(s.popupProduct.description),1),t("div",he,[t("h2",null,[h(" $"),t("span",ge,u(s.popupProduct.price),1),h(" USD "),t("del",null,u(parseInt(s.popupProduct.price)+10)+" USD",1)]),s.popupProduct.stock>0?(o(),l("h6",ve," In stock")):(o(),l("h6",fe," Out of stock"))]),t("div",me,[(o(!0),l(g,null,v(s.popupProduct.group,n=>(o(),l("a",{onClick:p(Qe=>r.getProduct(n.id),["prevent"]),style:k(`background: ${n.color};`),href:`#popup${n.id}`,class:"color-name"},[t("span",null,"color:"+u(n.color)+", size: "+u(n.size),1)],12,be))),256))]),t("div",ye,[s.popupProduct.stock>0?(o(),l("h6",ke,[h("Qty: "+u(s.popupProduct.stock),1),we,h(" In cart "+u(r.getProductFromCart(s.popupProduct.id)),1)])):_("",!0),s.popupProduct.stock!=r.getProductFromCart(s.popupProduct.id)?(o(),l("div",xe,[t("div",{class:"qtySelector text-center","data-stock":s.popupProduct.stock,"data-cart-qty":r.getProductFromCart(s.popupProduct.id)},[Ce,t("input",{type:"number",class:"qtyValue",value:s.value},null,8,Se),Ie],8,Pe),s.popupProduct.stock!=r.getProductFromCart(s.popupProduct.id)?(o(),l("button",{key:0,class:"btn--primary",onClick:c[2]||(c[2]=p(n=>r.addToCart(s.popupProduct),["prevent"]))}," Add to Cart ")):_("",!0)])):(o(),l("div",Ne,Fe))])])])])])):_("",!0)],8,Gt),t("div",Oe,[t("span",null,[b(m,{to:{name:"categories.show",params:{id:e.category.id}}},{default:y(()=>[h(u(e.category.title),1)]),_:2},1032,["to"])]),t("h5",null,[b(m,{to:{name:"products.show",params:{id:e.id}}},{default:y(()=>[h(u(e.title),1)]),_:2},1032,["to"])]),t("p",null,[t("del",null,"$"+u(parseInt(e.price)+10),1),h(" $"),t("span",Le,u(e.price),1)])])])]))),256))])])])])]),s.pagination.last_page>1?(o(),l("div",Ue,[t("div",Te,[t("ul",Ve,[s.pagination.current_page!==1?(o(),l("li",je,[t("a",{onClick:c[3]||(c[3]=p(e=>r.getProducts(s.pagination.current_page-1),["prevent"])),href:""},ze)])):_("",!0),(o(!0),l(g,null,v(s.pagination.links,e=>(o(),l("li",null,[Number(e.label)&&s.pagination.current_page-e.label<2&&s.pagination.current_page-e.label>-2||Number(e.label)===1||Number(e.label)===s.pagination.last_page?(o(),l("a",{key:0,onClick:p(n=>r.getProducts(e.label),["prevent"]),class:I(e.active?"active":""),href:""},u(e.label),11,Re)):_("",!0),Number(e.label)&&s.pagination.current_page!==3&&s.pagination.current_page-e.label===2||Number(e.label)&&s.pagination.current_page!==s.pagination.last_page-2&&s.pagination.current_page-e.label===-2?(o(),l("a",Ae,"...")):_("",!0)]))),256)),s.pagination.current_page!==s.pagination.last_page?(o(),l("li",Be,[t("a",{onClick:c[4]||(c[4]=p(e=>r.getProducts(s.pagination.current_page+1),["prevent"])),href:""},We)])):_("",!0)])])])):_("",!0)])])])])])])}const He=w(O,[["render",Ee],["__scopeId","data-v-13029fec"]]);export{He as default};
