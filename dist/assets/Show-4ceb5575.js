import{_ as w,r as b,o as e,c as o,a as t,t as r,d as p,F as u,b as _,h as g,g as h,n as k,l as E,w as y,f as Q,p as S,k as C,e as m}from"./index-882c1471.js";const P="/assets/breadcum-bg-2e8a052f.png",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAkCAMAAAATrPI7AAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAACAgIAgICDf39/v7++fn59AQEC/v78QEBDPz89wcHCvr69QUFBgYGAwMDB/f3+QkJCPj4+hEz7zAAAADXRSTlOfH78AgN+PQO8Qz3BQgP7cHgAAAUtJREFUOMvN1dluwyAQBVAcnK0tAzMs3tP//8teFLsPcaPAQ9VeyTYGDiDkRWmtr+8nVZRTe9YITEsVOTYwdQToqlVDlWm1OuGymMKwI7podSBKpjg9ETXZuHJj/9CI5VqDfak2E/XVawvLfTpEikzuJpwLlBP4pekS0Rhw08FMMS7JyQvDidZEGJubUZLBRwyHw0jkR+M30pvVDOQxUKJgesKMN+oeTb+ZYTMTxeAYDUOkG7ZnNk+NzSZYGzABIpG8ScEw3NO1pbwHyTm3iBkCKmBsEk+8M5I25Na1oY5Glg4mUhzDD3ttN+O/TZevFhUmjDjvjcx3MpvVIDOFOffOXXlvgPynMA6UbDRrlR3EdnnGsfr9wQIrDSeaTKURH//D9+D3jCJKXGwmGK0+cHa9LUt+Zg9a6SPV5QzT1KFWw+hGvZWCyyH/HL8ALJBfMkH13V8AAAAASUVORK5CYII=",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAkCAMAAAD1hTl/AAAAbFBMVEUGXf8GXv8FXf8AAAAGXv8FXf8GXv8FXf8GXv8GXf8AWP8AWP8EXP8GXv////8lcv8WaP/g6/9Ehv/B1//v9f80fP+Crv+Suf9zpP9jmv9UkP+hw/+Cr//R4f+xzP+xzf+SuP9TkP/Q4f+Tuf+/ZE4bAAAADXRSTlOfoL8A32Cwj4BwIBBAYJzSPAAAAVtJREFUOMvtk8luwzAMRN06e6oRaS3enaT9/38sJUEuiqQHGwXaQ3gwjBk9cSjLRXk+7otFtd+eyuK0UYtrcy4OakUdipc12G4d9vrEfhfTUvRwAQXru0AZqxCKuwcYB8fWX8IFU8Y6pKL7ZkjVzopBnTEPKNUD1R0mOW7B9rNiRUiYNH6PmHMXNt3FuNqEWB9m6EQMbEMDj/VgGpLNMzaC28GC04xieFhSDaCvkq9lUTg5XpZQxpJkHWMkbcTQslBbDMoka+hlzxD21sDmD+AAniavq5BItbBxcAaHHHYy10omapTS4l9hMtbFvAJErA+Gh5QOOdLZQzqH1CT7ZczHvHE37o2sjK9hfxefcXr0E+TkGE3GeokllXoYizae86TmHMKzzD7CkAgZo/n66M6peM08OGqzQ5UjEkeEn6+ydGlX/AGdb//f//bE/grbFW9rsG1RbjdLITqWn01qZIp0qXaNAAAAAElFTkSuQmCC",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAjCAMAAAAHQmL5AAAANlBMVEUAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBA9ksNAAAAEXRSTlMAQJ8f37/vcBBgkIAwUM+wr5ZmOm4AAAExSURBVDjL7ZPLroMwDEQdnJdDQvH//+z1YNBdhC7oqouOKhQNOe4wSohqWZ5qZSKK+lyRKOgn4h/3TVyOkFu2yHoptbWl/JaLDSeHk1skWomK6hYIKrCLL6acC7u/4OhlezSNRkMNk7EIEwdgHOuB18k2JQ0WoaVdEEPA1TuuBKk+d9GXPbP+Jzv+2n7bzNle7hEx2WYcs7EXGT39GEg8c/imXTtasYTwVzLxfpa1rHg1c9hcol/I7gnLVUtCihceM4fxQwiG12lKjDYyWpHDzRPnQ5FHzzoPFQRAiiBS4c4cevAoXmc6Q1AWutTuuEAm0bPOTDwEVrBdl+SOa+SteJ2JXBwXt72dG27zo3TWuXVQtUTtbnsxEzcrbyl+1739cRPHH3GVqD2n/Eb38FRM9AfRNWBGifNa1QAAAABJRU5ErkJggg==",T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAhCAMAAACoVtiLAAAAkFBMVEX1nRoAAADpABj0mhjnABfsABvzehnfnyD2nRn2nRnsABrvMxvwRRr3nRjnABjvnxPrBRvsCxvrABvrABr1nBnynBnuJBrrABvrABvtABrrABv1nRrqABv0nBn2nxf0mhvtFxrrABvyaxr0ixr0nRjznBrsERruJRrsABztGRvuIBrsAB30nxvqABvqlRXrABuKkD42AAAAL3RSTlOAAEAgEO+QCHhw38GxQCAQ9++QgFAoz7+gf3BoYEg4MN/PmIhgWOfPr5h3UDAwGHP3yc8AAAEqSURBVDjLlZXZcoMwDEUlbMqSsqRASQmBJum+6f//rhmgdmW2+Lwxc88IWcIAMmLnglSPyY8QwmOJf4KsSpc6jjsHEUXuQ0eQFxOCzC5pTfgxpAenNQUnJIPXG2BKwoQHGrPlhl8oQec56QkYX0pQ+eUaIAbBoTkeuRB4vRDSLLfcyDuhpnnSs/lSwAqM2XDhgMA6WO3C9wDvaBHjoArAkjjLbR8AXSKLJp5B0jL3XNhDbCcE1hVse3gCPNqd0uocTsYc1ia9BU4CKF2bMSAgZqubwbd1scRm6nvAz/kOznxXk16YPajUeKFG3RpvV80gQiVM1khHeS1MHdWLcfMJZALGOxZ333m7kYdK0Er4ly4riUmzVxvXx7WgHafOqvpbYo8n2qhp+Q/iF7h4k+RxvTi8AAAAAElFTkSuQmCC";const U={name:"Show",mounted(){$(document).trigger("changed"),this.getCats(),this.getCategory()},methods:{getCategory(s){this.axios.get(`http://127.0.0.1:8000/api/categories/${this.$route.params.id}`).then(l=>{this.category=l.data.data,console.log(this.category)}).finally(l=>{$(document).trigger("changed")})},getCats(){this.axios.get("http://127.0.0.1:8000/api/products/filters").then(s=>{this.attrs=s.data.categories}).finally(s=>{$(document).trigger("changed")})},addTag(s){this.tags.includes(s)?this.tags=this.tags.filter(l=>l!==s):this.tags.push(s)},addToCart(s,l){l&&$(".qtyValue").val(1);let n=localStorage.getItem("cart"),v=$(".qtyValue").val()?$(".qtyValue").val():1;$(".qtyValue").val(1);let a=[{id:s.id,image_url:s.image_url,title:s.title,price:s.price,qty:v,size:s.size,color:s.color}];n?(n=JSON.parse(n),n.forEach(A=>{A.id===s.id&&(A.qty=Number(A.qty)+Number(v),a=null)}),Array.prototype.push.apply(n,a),localStorage.setItem("cart",JSON.stringify(n)),$(".cart-icon span").text(n.length),window.location.reload()):(localStorage.setItem("cart",JSON.stringify(a)),$(".cart-icon span").text(a.length))},addToWishlist(s){let l=localStorage.getItem("wishlist"),n=[{id:s.id,image_url:s.image_url,title:s.title,price:s.price,stock:s.stock,qty:s.qty}];l?(l=JSON.parse(l),this.ifInclude(s)||Array.prototype.push.apply(l,n),localStorage.setItem("wishlist",JSON.stringify(l))):localStorage.setItem("wishlist",JSON.stringify(n)),window.location.reload()},ifInclude(s){let l=localStorage.getItem("wishlist");l=JSON.parse(l);let n=!1;return l&&l.forEach(v=>{v.id===s.id&&(n=!0)}),n},getProduct(s){this.axios.get(`http://127.0.0.1:8000/api/products/${s}`).then(l=>{this.popupProduct=l.data.data}).finally(l=>{$(document).trigger("changed")})}},data(){return{category:[],attrs:[],products:[],popupProduct:null,filterList:[],categories:[],colors:[],tags:[],prices:[]}}},d=s=>(S("data-v-479a6a14"),s=s(),C(),s),M={class:"overflow-hidden cat"},O={class:"breadcrumb-area",style:{"background-image":"url(/src/assets/images/inner-pages/breadcum-bg.png)"}},G={class:"container"},z={class:"row"},N={class:"col-xl-12"},V={class:"breadcrumb-content pb-60 text-center wow fadeInUp animated"},X=d(()=>t("h2",null,"Shop Grid",-1)),I={class:"breadcrumb-menu"},q=d(()=>t("li",null,[t("a",{href:"/"},[t("i",{class:"flaticon-home pe-2"}),h("Home")])],-1)),H=d(()=>t("li",null,[t("i",{class:"flaticon-next"})],-1)),J={key:0,class:"active"},K={class:"product-categories-one pb-60"},F={class:"container"},L={class:"row"},j={class:"col-xl-12 wow fadeInUp animated"},W={key:0,class:"product-categories-one__inner"},Y=["href"],Z={class:"inner"},tt=["alt"],st={key:0,class:"product-grid pt-60 pb-120"},et={class:"container"},at={class:"row"},ot={class:"col-xl-3 col-lg-4 col-6 wow fadeInUp animated"},it={class:"products-three-single w-100 wow fadeInUp animated mt-30"},lt={key:0,class:"products-three-single-img"},ct=["src","alt"],nt=["src","alt"],rt={class:"products-grid-one__badge-box"},dt={class:"bg_base badge new"},At=["onClick"],pt={key:1,class:"addcart btn--primary style2"},ht={class:"products-grid__usefull-links"},ut=["onClick"],_t=d(()=>t("i",{class:"flaticon-heart"},null,-1)),gt=d(()=>t("span",null," wishlist",-1)),vt=["onClick"],mt=d(()=>t("i",{class:"flaticon-heart"},null,-1)),ft=d(()=>t("span",null," wishlist",-1)),kt=["onClick","href"],yt=d(()=>t("i",{class:"flaticon-visibility"},null,-1)),Bt=d(()=>t("span",null," quick view",-1)),wt=[yt,Bt],bt=["id"],Et={key:0,class:"container"},Qt={class:"row justify-content-between align-items-center"},St={class:"col-lg-6"},Ct={key:0,class:"quick-view__left-content"},Pt={class:"popup-product-single-image"},xt=["src"],Rt={key:1,class:"quick-view__left-content"},Dt={class:"tabs"},Tt={class:"popup-product-thumb-box"},Ut={class:"tab-nav popup-product-thumb"},Mt=["href"],Ot=["src"],Gt={class:"popup-product-main-image-box"},zt=["id"],Nt={class:"popup-product-single-image"},Vt=["src"],Xt=d(()=>t("button",{class:"prev"},[t("i",{class:"flaticon-back"})],-1)),It=d(()=>t("button",{class:"next"},[t("i",{class:"flaticon-next"})],-1)),qt={class:"col-lg-6"},Ht={class:"popup-right-content"},Jt=m('<div class="ratting" data-v-479a6a14><i class="flaticon-star" data-v-479a6a14></i> <i class="flaticon-star" data-v-479a6a14></i> <i class="flaticon-star" data-v-479a6a14></i><i class="flaticon-star" data-v-479a6a14></i> <i class="flaticon-star" data-v-479a6a14></i><span data-v-479a6a14>(112)</span></div>',1),Kt={class:"text"},Ft={class:"price"},Lt={class:"price"},jt={key:0},Wt={key:1},Yt={class:"color-varient"},Zt=["onClick","href"],$t={class:"color-varient"},ts=["onClick","data-price"],ss={class:"add-product"},es=d(()=>t("h6",null,"Qty:",-1)),as={class:"button-group"},os=m('<div class="qtySelector text-center" data-v-479a6a14><span class="decreaseQty" data-v-479a6a14><i class="flaticon-minus" data-v-479a6a14></i></span> <input type="number" class="qtyValue" value="1" data-v-479a6a14><span class="increaseQty" data-v-479a6a14><i class="flaticon-plus" data-v-479a6a14></i></span></div>',1),is=m('<div class="payment-method" data-v-479a6a14><a href="#0" data-v-479a6a14><img src="'+x+'" alt="" data-v-479a6a14></a><a href="#0" data-v-479a6a14><img src="'+R+'" alt="" data-v-479a6a14></a> <a href="#0" data-v-479a6a14><img src="'+D+'" alt="" data-v-479a6a14></a><a href="#0" data-v-479a6a14><img src="'+T+'" alt="" data-v-479a6a14></a></div>',1),ls={class:"products-three-single-content text-center"};function cs(s,l,n,v,a,A){const f=b("router-link");return e(),o("div",null,[t("main",M,[t("section",O,[t("div",G,[t("div",z,[t("div",N,[t("div",V,[X,t("div",I,[t("ul",null,[q,H,a.category?(e(),o("li",J,r(a.category.title),1)):p("",!0)])])])])])])]),t("section",K,[t("div",F,[t("div",L,[t("div",j,[a.attrs?(e(),o("div",W,[t("ul",null,[(e(!0),o(u,null,_(a.attrs,i=>(e(),o("li",null,[t("a",{href:`/categories/${i.id}`,class:"img-box"},[t("div",Z,[t("img",{src:P,alt:i.title},null,8,tt)])],8,Y),t("h6",null,r(i.title),1)]))),256))])])):p("",!0)])])])]),a.category?(e(),o("section",st,[t("div",et,[t("div",at,[(e(!0),o(u,null,_(a.category.products,i=>(e(),o("div",ot,[t("div",it,[i?(e(),o("div",lt,[t("img",{src:i.image_url,class:"first-img",alt:i.title},null,8,ct),t("img",{src:i.image_url,style:{filter:"grayscale(1)"},alt:i.title,class:"hover-img"},null,8,nt),t("div",rt,[t("span",dt,r(i.category.title),1)]),i.stock!=0?(e(),o("a",{key:0,onClick:g(c=>A.addToCart(i,!0),["prevent"]),href:"#",class:"addcart btn--primary style2"}," Add To Cart ",8,At)):(e(),o("p",pt," Out Of Stock ")),t("div",ht,[t("ul",null,[t("li",null,[A.ifInclude(i)?(e(),o("a",{key:0,onClick:g(c=>A.addToWishlist(i),["prevent"]),style:{background:"var(--thm-base)"},href:""},[_t,h(),gt],8,ut)):(e(),o("a",{key:1,onClick:g(c=>A.addToWishlist(i),["prevent"]),href:""},[mt,h(),ft],8,vt))]),t("li",null,[t("a",{onClick:c=>A.getProduct(i.id),href:`#popup${i.id}`,class:"popup_link"},wt,8,kt)])])])])):p("",!0),t("div",{id:`popup${i.id}`,class:"product-gird__quick-view-popup mfp-hide"},[a.popupProduct?(e(),o("div",Et,[t("div",Qt,[t("div",St,[a.popupProduct.product_images.length==0?(e(),o("div",Ct,[t("div",Pt,[t("img",{src:a.popupProduct.image_url,alt:""},null,8,xt)])])):p("",!0),a.popupProduct.product_images.length>2?(e(),o("div",Rt,[t("div",Dt,[t("div",Tt,[t("ul",null,[(e(!0),o(u,null,_(a.popupProduct.product_images,c=>(e(),o("li",Ut,[t("a",{href:`#tabb${c.id}`},[t("img",{src:c.file_path,alt:""},null,8,Ot)],8,Mt)]))),256))])]),t("div",Gt,[(e(!0),o(u,null,_(a.popupProduct.product_images,c=>(e(),o("div",{id:`tabb${c.id}`,class:"tab-item popup-product-image"},[t("div",Nt,[t("img",{src:c.file_path,alt:""},null,8,Vt)])],8,zt))),256)),Xt,It])])])):p("",!0)]),t("div",qt,[t("div",Ht,[t("h3",null,r(a.popupProduct.title),1),Jt,t("p",Kt,r(a.popupProduct.description),1),t("div",Ft,[t("h2",null,[h(" $"),t("span",Lt,r(a.popupProduct.price),1),h(" USD "),t("del",null,r(parseInt(a.popupProduct.price)+10)+" USD",1)]),a.popupProduct.stock>0?(e(),o("h6",jt," In stock")):(e(),o("h6",Wt," Out of stock"))]),t("div",Yt,[(e(!0),o(u,null,_(a.popupProduct.group,c=>(e(),o("a",{onClick:g(B=>A.getProduct(c.id),["prevent"]),style:k(`background: ${c.color};`),href:`#popup${c.id}`,class:"color-name"},[t("span",null,r(c.color),1)],12,Zt))),256))]),t("div",$t,[(e(!0),o(u,null,_(a.popupProduct.group,c=>(e(),o("a",{onClick:g(B=>s.changePrice(a.popupProduct.price,c.price),["prevent"]),style:k(`background: ${c.size};`),"data-price":c.size,class:"color-name"},[t("span",null,r(c.size),1)],12,ts))),256))]),t("div",ss,[es,t("div",as,[os,t("button",{class:"btn--primary",onClick:l[0]||(l[0]=g(c=>A.addToCart(a.popupProduct),["prevent"]))}," Add to Cart ")])]),is])])])])):p("",!0)],8,bt),t("div",ls,[t("span",null,[i?(e(),E(f,{key:0,to:{name:"categories.show",params:{id:i.category.id}}},{default:y(()=>[h(r(i.category.title),1)]),_:2},1032,["to"])):p("",!0)]),t("h5",null,[Q(f,{to:{name:"products.show",params:{id:i.id}}},{default:y(()=>[h(r(i.title),1)]),_:2},1032,["to"])]),t("p",null,[t("del",null,"$"+r(i.price),1),h(" $"+r(parseFloat(i.price)+10),1)])])])]))),256))])])])):p("",!0)])])}const rs=w(U,[["render",cs],["__scopeId","data-v-479a6a14"]]);export{rs as default};
