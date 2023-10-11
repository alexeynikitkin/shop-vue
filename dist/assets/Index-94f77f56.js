import{_ as w,r as x,o as l,c as n,a as t,F as g,b as v,d as _,h as p,t as u,e as P,f as b,w as y,i as C,v as S,g as h,n as k,j as I,p as N,k as q}from"./index-f21a7c8f.js";import{_ as F}from"./product-categories-v1-img1-901f2b2e.js";const O={name:"Index",mounted(){$(document).trigger("changed"),this.getProducts(),this.getFilterList(),this.getCats()},data(){return{products:[],popupProduct:null,filterList:[],categories:[],colors:[],tags:[],prices:[],pagination:[],attrs:[],value:1}},methods:{getProducts(i=1){this.axios.post("http://127.0.0.1:8000/api/products",{categories:this.categories,tags:this.tags,prices:this.prices,colors:this.colors,page:i}).then(o=>{this.products=o.data.data,this.pagination=o.data.meta,$(document).trigger("changed"),console.log("Products",this.products)}).finally(o=>{$(document).trigger("changed")})},changePrice(i=null,o=null){if(i!==null&&o!==null){let d=parseFloat(o);$(".popup-right-content h2 .price").text(d.toFixed(2))}return parseFloat($(".popup-right-content h2 .price").text()).toFixed(2)},getProduct(i){this.axios.get(`http://127.0.0.1:8000/api/products/${i}`).then(o=>{this.popupProduct=o.data.data}).finally(o=>{$(document).trigger("changed")})},getFilterList(){this.axios.get("http://127.0.0.1:8000/api/products/filters").then(i=>{this.filterList=i.data,$("#price-range").length&&($("#price-range").slider({range:!0,min:this.filterList.price.min,max:this.filterList.price.max,values:[this.filterList.price.min,this.filterList.price.max],slide:function(o,d){$("#priceRange").val("$"+d.values[0]+" - $"+d.values[1])}}),$("#priceRange").val("$"+$("#price-range").slider("values",0)+" - $"+$("#price-range").slider("values",1)))}).finally(i=>{$(document).trigger("changed")})},getCats(){this.axios.get("http://127.0.0.1:8000/api/products/filters").then(i=>{this.attrs=i.data.categories}).finally(i=>{$(document).trigger("changed")})},filterProducts(){$(document).trigger("changed");let i=$("#priceRange").val();i=i.replace(/[\s+]|[$]/g,"").split("-"),this.prices=i,this.getProducts()},addColor(i){this.colors.includes(i)?this.colors=this.colors.filter(o=>o!==i):this.colors.push(i)},addTag(i){this.tags.includes(i)?this.tags=this.tags.filter(o=>o!==i):this.tags.push(i)},addToCart(i,o){o&&$(".qtyValue").val(1);let d=localStorage.getItem("cart"),m=$(".qtyValue").val()?$(".qtyValue").val():1;$(".qtyValue").val(1);let s=[{id:i.id,image_url:i.image_url,title:i.title,price:i.price,qty:m,size:i.size,color:i.color,stock:i.stock}];d?(d=JSON.parse(d),d.forEach(c=>{c.id===i.id&&(c.qty=Number(c.qty)+Number(m),s=null)}),Array.prototype.push.apply(d,s),localStorage.setItem("cart",JSON.stringify(d))):(localStorage.setItem("cart",JSON.stringify(s)),$(".cart-icon span").text(s.length)),$(".cart-icon span").text(d.length),window.location.reload()},addToWishlist(i){let o=localStorage.getItem("wishlist"),d=[{id:i.id,image_url:i.image_url,title:i.title,price:i.price,stock:i.stock,qty:i.qty}];o?(o=JSON.parse(o),this.ifInclude(i)||Array.prototype.push.apply(o,d),localStorage.setItem("wishlist",JSON.stringify(o))):localStorage.setItem("wishlist",JSON.stringify(d)),$(".wish-icon span").text(o.length),window.location.reload()},ifInclude(i){let o=localStorage.getItem("wishlist");o=JSON.parse(o);let d=!1;return o&&o.forEach(m=>{m.id===i.id&&(d=!0)}),d},getProductFromCart(i){if(localStorage.getItem("cart")!=null){var o=JSON.parse(localStorage.getItem("cart")).filter(m=>m.id==i);return Object.keys(o).length>0?o[0].qty:0}}}},r=i=>(N("data-v-2da76853"),i=i(),q(),i),L={class:"overflow-hidden"},U=P('<section class="breadcrumb-area" style="background-image:url(/src/assets/images/inner-pages/breadcum-bg.png);" data-v-2da76853><div class="container" data-v-2da76853><div class="row" data-v-2da76853><div class="col-xl-12" data-v-2da76853><div class="breadcrumb-content pb-60 text-center wow fadeInUp animated" data-v-2da76853><h2 data-v-2da76853>Shop Grid</h2><div class="breadcrumb-menu" data-v-2da76853><ul data-v-2da76853><li data-v-2da76853><a href="index.html" data-v-2da76853><i class="flaticon-home pe-2" data-v-2da76853></i>Home</a></li><li data-v-2da76853><i class="flaticon-next" data-v-2da76853></i></li><li class="active" data-v-2da76853>Shop Grid</li></ul></div></div></div></div></div></section>',1),T={class:"product-categories-one pb-60"},V={class:"container"},j={class:"row wow fadeInUp animated"},J={class:"col-xl-12"},z={key:0,class:"product-categories-one__inner"},R={class:"inner"},A=["alt"],B={class:"title"},D={class:"product-grid pt-60 pb-120"},W={class:"container"},E={class:"row gx-4"},Q={class:"col-xl-3 col-lg-4"},G={class:"shop-grid-sidebar"},M=r(()=>t("button",{class:"remove-sidebar d-lg-none d-block"},[t("i",{class:"flaticon-cross"})],-1)),H={class:"sidebar-holder"},K={class:"single-sidebar-box mt-30 wow fadeInUp animated"},X=r(()=>t("h4",null,"Select Categories",-1)),Y={class:"checkbox-item"},Z={class:"form-group"},tt=["value","id"],et=["for"],st={class:"single-sidebar-box mt-30 wow fadeInUp animated"},it=r(()=>t("h4",null,"Color Option ",-1)),ot={class:"color-option"},lt=["onClick","href"],nt={class:"single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0"},at=r(()=>t("h4",null,"Tags ",-1)),ct={class:"popular-tag"},rt=["onClick","href"],dt={class:"single-sidebar-box mt-30 wow fadeInUp animated"},ut=r(()=>t("h4",null,"Filter By Price",-1)),_t={class:"slider-box"},pt=r(()=>t("div",{id:"price-range",class:"slider"},null,-1)),ht=r(()=>t("div",{class:"output-price"},[t("label",{for:"priceRange"},"Price:"),h(),t("input",{type:"text",id:"priceRange",readonly:""})],-1)),gt={class:"col-xl-9 col-lg-8"},vt={class:"row"},mt={class:"col-xl-12"},ft={class:"shop-grid-page-top-info p-0 justify-content-md-between justify-content-center"},bt={class:"left-box wow fadeInUp animated"},yt=r(()=>t("div",{class:"right-box justify-content-md-between justify-content-center wow fadeInUp animated"},null,-1)),kt={class:"row"},wt={class:"col-12"},xt={class:"tab-content",id:"pills-tabContent"},Pt={class:"tab-pane fade show active",id:"pills-grid",role:"tabpanel","aria-labelledby":"pills-grid-tab"},Ct={class:"row"},St={class:"col-xl-4 col-lg-6 col-6"},It={class:"products-three-single w-100 mt-30"},Nt={key:0,class:"products-three-single-img"},qt=["src","alt"],Ft=["src","alt"],Ot={key:0,class:"products-grid-one__badge-box"},Lt={class:"bg_base badge new"},Ut=["onClick"],Tt={key:2,class:"addcart btn--primary style2"},Vt={class:"products-grid__usefull-links"},jt=["onClick"],Jt=r(()=>t("i",{class:"flaticon-heart"},null,-1)),zt=r(()=>t("span",null," wishlist",-1)),Rt=["onClick"],At=r(()=>t("i",{class:"flaticon-heart"},null,-1)),Bt=r(()=>t("span",null," wishlist",-1)),Dt=["onClick","href"],Wt=r(()=>t("i",{class:"flaticon-visibility"},null,-1)),Et=r(()=>t("span",null," quick view",-1)),Qt=[Wt,Et],Gt=["id"],Mt={key:0,class:"container"},Ht={class:"row justify-content-between align-items-center"},Kt={class:"col-lg-6"},Xt={key:0,class:"quick-view__left-content"},Yt={class:"popup-product-single-image"},Zt=["src"],$t={key:1,class:"quick-view__left-content"},te={class:"tabs"},ee={class:"popup-product-thumb-box"},se={class:"tab-nav popup-product-thumb"},ie=["href"],oe=["src"],le={class:"popup-product-main-image-box"},ne=["id"],ae={class:"popup-product-single-image"},ce=["src"],re=r(()=>t("button",{class:"prev"},[t("i",{class:"flaticon-back"})],-1)),de=r(()=>t("button",{class:"next"},[t("i",{class:"flaticon-next"})],-1)),ue={class:"col-lg-6"},_e={class:"popup-right-content"},pe={class:"text"},he={class:"price"},ge={class:"price"},ve={key:0},me={key:1},fe={class:"color-varient"},be=["onClick","href"],ye={class:"add-product"},ke={key:0},we=r(()=>t("br",null,null,-1)),xe={key:1,class:"button-group"},Pe=["data-stock","data-cart-qty"],Ce=r(()=>t("span",{class:"decreaseQty"},[t("i",{class:"flaticon-minus"})],-1)),Se=["value"],Ie=r(()=>t("span",{class:"increaseQty"},[t("i",{class:"flaticon-plus"})],-1)),Ne={key:2,class:"button-group"},qe=r(()=>t("p",{class:"btn--primary"}," Out of Stock ",-1)),Fe=[qe],Oe={class:"products-three-single-content text-center"},Le={class:"price"},Ue={key:0,class:"row"},Te={class:"col-12 d-flex justify-content-center wow fadeInUp animated"},Ve={class:"pagination text-center"},je={key:0,class:"next"},Je=r(()=>t("i",{class:"flaticon-left-arrows","aria-hidden":"true"},null,-1)),ze=[Je],Re=["onClick"],Ae={key:1},Be={key:1,class:"next"},De=r(()=>t("i",{class:"flaticon-next-1","aria-hidden":"true"},null,-1)),We=[De];function Ee(i,o,d,m,s,c){const f=x("router-link");return l(),n("div",null,[t("main",L,[U,t("section",T,[t("div",V,[t("div",j,[t("div",J,[s.attrs?(l(),n("div",z,[t("ul",null,[(l(!0),n(g,null,v(s.attrs,e=>(l(),n("li",null,[b(f,{to:{name:"categories.show",params:{id:e.id}},class:"img-box"},{default:y(()=>[t("div",R,[t("img",{src:F,alt:e.title},null,8,A)])]),_:2},1032,["to"]),t("div",B,[b(f,{to:{name:"categories.show",params:{id:e.id}}},{default:y(()=>[t("h6",null,u(e.title),1)]),_:2},1032,["to"])])]))),256))])])):_("",!0)])])])]),t("div",D,[t("div",W,[t("div",E,[t("div",Q,[t("div",G,[M,t("div",H,[t("div",K,[X,t("div",Y,[t("form",null,[(l(!0),n(g,null,v(s.filterList.categories,e=>(l(),n("div",Z,[C(t("input",{value:e.id,"onUpdate:modelValue":o[0]||(o[0]=a=>s.categories=a),type:"checkbox",id:e.id},null,8,tt),[[S,s.categories]]),h(),t("label",{for:e.id},u(e.title),9,et)]))),256))])])]),t("div",st,[it,t("ul",ot,[(l(!0),n(g,null,v([...new Set(this.filterList.colors)],e=>(l(),n("li",null,[t("a",{onClick:p(a=>c.addColor(e),["prevent"]),href:`#${e}`,class:"color-option-single",style:k(`background: ${e}`)},[t("span",null,u(e),1)],12,lt)]))),256))])]),t("div",nt,[at,t("ul",ct,[(l(!0),n(g,null,v(s.filterList.tags,e=>(l(),n("li",null,[t("a",{onClick:p(a=>c.addTag(e.id),["prevent"]),href:`#${e.id}`},u(e.title),9,rt)]))),256))])]),t("div",dt,[ut,t("div",_t,[pt,ht,t("button",{onClick:o[1]||(o[1]=p(e=>c.filterProducts(),["prevent"])),class:"filterbtn",type:"submit"}," Filter ")])])])])]),t("div",gt,[t("div",vt,[t("div",mt,[t("div",ft,[t("div",bt,[t("p",null,"Showing "+u(s.products.length)+" of "+u(s.pagination.total)+" Results",1)]),yt])])]),t("div",kt,[t("div",wt,[t("div",xt,[t("div",Pt,[t("div",Ct,[(l(!0),n(g,null,v(s.products,e=>(l(),n("div",St,[t("div",It,[e?(l(),n("div",Nt,[t("img",{src:e.image_url,class:"first-img",alt:e.title},null,8,qt),t("img",{src:e.image_url,style:{filter:"grayscale(1)"},alt:e.title,class:"hover-img"},null,8,Ft),e.tags?(l(),n("div",Ot,[(l(!0),n(g,null,v(e.tags,a=>(l(),n("span",Lt,u(a.title),1))),256))])):_("",!0),e.stock!=c.getProductFromCart(e.id)?(l(),n("a",{key:1,onClick:p(a=>c.addToCart(e,!0),["prevent"]),href:"#",class:"addcart btn--primary style2"}," Add To Cart ",8,Ut)):(l(),n("p",Tt," Out Of Stock ")),t("div",Vt,[t("ul",null,[t("li",null,[c.ifInclude(e)?(l(),n("a",{key:0,onClick:p(a=>c.addToWishlist(e),["prevent"]),style:{background:"var(--thm-base)"},href:""},[Jt,h(),zt],8,jt)):(l(),n("a",{key:1,onClick:p(a=>c.addToWishlist(e),["prevent"]),href:""},[At,h(),Bt],8,Rt))]),t("li",null,[t("a",{onClick:a=>c.getProduct(e.id),href:`#popup${e.id}`,class:"popup_link"},Qt,8,Dt)])])])])):_("",!0),t("div",{id:`popup${e.id}`,class:"product-gird__quick-view-popup mfp-hide"},[s.popupProduct?(l(),n("div",Mt,[t("div",Ht,[t("div",Kt,[s.popupProduct.product_images.length==0?(l(),n("div",Xt,[t("div",Yt,[t("img",{src:s.popupProduct.image_url,alt:""},null,8,Zt)])])):_("",!0),s.popupProduct.product_images.length>2?(l(),n("div",$t,[t("div",te,[t("div",ee,[t("ul",null,[(l(!0),n(g,null,v(s.popupProduct.product_images,a=>(l(),n("li",se,[t("a",{href:`#tabb${a.id}`},[t("img",{src:a.file_path,alt:""},null,8,oe)],8,ie)]))),256))])]),t("div",le,[(l(!0),n(g,null,v(s.popupProduct.product_images,a=>(l(),n("div",{id:`tabb${a.id}`,class:"tab-item popup-product-image"},[t("div",ae,[t("img",{src:a.file_path,alt:""},null,8,ce)])],8,ne))),256)),re,de])])])):_("",!0)]),t("div",ue,[t("div",_e,[t("h3",null,u(s.popupProduct.title),1),t("p",pe,u(s.popupProduct.description),1),t("div",he,[t("h2",null,[h(" $"),t("span",ge,u(s.popupProduct.price),1),h(" USD "),t("del",null,u(parseInt(s.popupProduct.price)+10)+" USD",1)]),s.popupProduct.stock>0?(l(),n("h6",ve," In stock")):(l(),n("h6",me," Out of stock"))]),t("div",fe,[(l(!0),n(g,null,v(s.popupProduct.group,a=>(l(),n("a",{onClick:p(Qe=>c.getProduct(a.id),["prevent"]),style:k(`background: ${a.color};`),href:`#popup${a.id}`,class:"color-name"},[t("span",null,"color:"+u(a.color)+", size: "+u(a.size),1)],12,be))),256))]),t("div",ye,[s.popupProduct.stock>0?(l(),n("h6",ke,[h("Qty: "+u(s.popupProduct.stock),1),we,h(" In cart "+u(c.getProductFromCart(s.popupProduct.id)),1)])):_("",!0),s.popupProduct.stock!=c.getProductFromCart(s.popupProduct.id)?(l(),n("div",xe,[t("div",{class:"qtySelector text-center","data-stock":s.popupProduct.stock,"data-cart-qty":c.getProductFromCart(s.popupProduct.id)},[Ce,t("input",{type:"number",class:"qtyValue",value:s.value},null,8,Se),Ie],8,Pe),s.popupProduct.stock!=c.getProductFromCart(s.popupProduct.id)?(l(),n("button",{key:0,class:"btn--primary",onClick:o[2]||(o[2]=p(a=>c.addToCart(s.popupProduct),["prevent"]))}," Add to Cart ")):_("",!0)])):(l(),n("div",Ne,Fe))])])])])])):_("",!0)],8,Gt),t("div",Oe,[t("span",null,[b(f,{to:{name:"categories.show",params:{id:e.category.id}}},{default:y(()=>[h(u(e.category.title),1)]),_:2},1032,["to"])]),t("h5",null,[b(f,{to:{name:"products.show",params:{id:e.id}}},{default:y(()=>[h(u(e.title),1)]),_:2},1032,["to"])]),t("p",null,[t("del",null,"$"+u(parseInt(e.price)+10),1),h(" $"),t("span",Le,u(e.price),1)])])])]))),256))])])])])]),s.pagination.last_page>1?(l(),n("div",Ue,[t("div",Te,[t("ul",Ve,[s.pagination.current_page!==1?(l(),n("li",je,[t("a",{onClick:o[3]||(o[3]=p(e=>c.getProducts(s.pagination.current_page-1),["prevent"])),href:""},ze)])):_("",!0),(l(!0),n(g,null,v(s.pagination.links,e=>(l(),n("li",null,[Number(e.label)&&s.pagination.current_page-e.label<2&&s.pagination.current_page-e.label>-2||Number(e.label)===1||Number(e.label)===s.pagination.last_page?(l(),n("a",{key:0,onClick:p(a=>c.getProducts(e.label),["prevent"]),class:I(e.active?"active":""),href:""},u(e.label),11,Re)):_("",!0),Number(e.label)&&s.pagination.current_page!==3&&s.pagination.current_page-e.label===2||Number(e.label)&&s.pagination.current_page!==s.pagination.last_page-2&&s.pagination.current_page-e.label===-2?(l(),n("a",Ae,"...")):_("",!0)]))),256)),s.pagination.current_page!==s.pagination.last_page?(l(),n("li",Be,[t("a",{onClick:o[4]||(o[4]=p(e=>c.getProducts(s.pagination.current_page+1),["prevent"])),href:""},We)])):_("",!0)])])])):_("",!0)])])])])])])}const He=w(O,[["render",Ee],["__scopeId","data-v-2da76853"]]);export{He as default};