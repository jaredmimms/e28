(function(t){function e(e){for(var r,s,a=e[0],i=e[1],u=e[2],p=0,l=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&l.push(c[s][0]),c[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(l.length)l.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,a=1;a<o.length;a++){var i=o[a];0!==c[i]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},c={app:0},n=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=i;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"40aa":function(t,e,o){},"4f87":function(t,e,o){},"541e":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r,c=o("7a23");function n(t,e,o,r,n,s){var a=Object(c["w"])("router-link"),i=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["g"])("nav",null,[Object(c["g"])("ul",null,[Object(c["g"])("li",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(n.links,(function(t){return Object(c["p"])(),Object(c["d"])(a,{key:t,to:n.paths[t]},{default:Object(c["D"])((function(){return[Object(c["f"])(Object(c["y"])(t),1)]})),_:2},1032,["to"])})),128))])])]),Object(c["g"])(i,{posts:n.posts,onUpdatePosts:s.loadPosts},null,8,["posts","onUpdatePosts"])])}var s=o("bc3a").create({baseURL:null!==(r="http://e28api.jaredmimms.me")&&void 0!==r?r:"http://e28api.jaredmimms.loc",responseType:"json"}),a={name:"App",data:function(){return{posts:[],links:["home","posts","add a post","favorites","search","categories"],paths:{home:"/",posts:"/posts","add a post":"/post/new",favorites:"/favorites",search:"/search",categories:"/categories"}}},mounted:function(){this.loadPosts()},methods:{loadPosts:function(){var t=this;s.get("post").then((function(e){t.posts=e.data.post}))}}};o("96e7");a.render=n;var i=a,u=o("6c02"),d={id:"home-page"},p=Object(c["g"])("p",null,"MyBlog allows the creation and editing of blog posts.",-1);function l(t,e,o,r,n,s){var a=Object(c["w"])("show-featured");return Object(c["p"])(),Object(c["d"])("div",d,[p,Object(c["g"])(a,{posts:o.posts},null,8,["posts"])])}var b=Object(c["F"])("data-v-738c495e");Object(c["s"])("data-v-738c495e");var f={id:"show-featured"},j=Object(c["g"])("h2",null,"Featured Posts",-1),O={class:"clean-list"};Object(c["q"])();var v=b((function(t,e,o,r,n,s){var a=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])("div",f,[j,Object(c["g"])("ul",O,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(s.featuredPosts,(function(t){return Object(c["p"])(),Object(c["d"])("li",{key:t.id},[Object(c["g"])(a,{to:"/post/"+t.id},{default:b((function(){return[Object(c["f"])(Object(c["y"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])})),h=(o("159b"),o("a9e3"),{props:{category:{type:String},posts:{type:Array,default:null}},data:function(){return{}},computed:{featuredPosts:function(){if(this.posts){var t=[];return this.posts.forEach((function(e){Number(e.featured)&&t.push(e)})),t}return null}}});o("e25d");h.render=v,h.__scopeId="data-v-738c495e";var g=h,y={props:{posts:{type:Array,default:null}},components:{"show-featured":g}};y.render=l;var m=y,k=Object(c["F"])("data-v-7136a93f");Object(c["s"])("data-v-7136a93f");var w={id:"posts-page"},P=Object(c["g"])("h2",null,"Posts",-1),x={id:"posts"};Object(c["q"])();var E=k((function(t,e,o,r,n,s){var a=Object(c["w"])("show-post");return Object(c["p"])(),Object(c["d"])("div",w,[P,Object(c["g"])("div",x,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(o.posts,(function(t){return Object(c["p"])(),Object(c["d"])(a,{key:t.id,post:t},null,8,["post"])})),128))])])})),_=Object(c["F"])("data-v-07b63cc2");Object(c["s"])("data-v-07b63cc2");var A={class:"show-post"},C={class:"title"};Object(c["q"])();var U=_((function(t,e,o,r,n,s){var a=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])("div",A,[Object(c["g"])(a,{to:"/post/"+o.post.id},{default:_((function(){return[Object(c["g"])("div",C,Object(c["y"])(o.post.title),1)]})),_:1},8,["to"])])})),q={props:{post:{type:Object}}};o("da03");q.render=U,q.__scopeId="data-v-07b63cc2";var F=q,V={components:{"show-post":F},props:{posts:{type:Array,default:null}},data:function(){return{}}};o("9f2f");V.render=E,V.__scopeId="data-v-7136a93f";var S=V,B={id:"favorites-page"},T=Object(c["g"])("h2",null,"Favorites",-1),I={class:"clean-list"};function M(t,e,o,r,n,s){var a=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])("div",B,[T,Object(c["g"])("ul",I,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(s.favoritePosts,(function(t){return Object(c["p"])(),Object(c["d"])("li",{key:t.id},[Object(c["g"])(a,{to:"/post/"+t.id},{default:Object(c["D"])((function(){return[Object(c["f"])(Object(c["y"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])}var N={props:{posts:{type:Array,default:null}},data:function(){return{}},computed:{favoritePosts:function(){if(this.posts){var t=[];return this.posts.forEach((function(e){Number(e.favorite)&&t.push(e)})),t}return[]}}};N.render=M;var D=N,L=Object(c["F"])("data-v-d1b20338");Object(c["s"])("data-v-d1b20338");var J={id:"post-page"},R={key:0},$={class:"title"},z={class:"content"},G={key:0},H=Object(c["g"])("label",{for:"title"},"Title",-1),K={key:0,class:"error"},Q={for:"favorite",class:"form-checkbox-label"},W=Object(c["f"])(" Favorite? "),X={for:"featured",class:"form-checkbox-label"},Y=Object(c["f"])(" Featured? "),Z=Object(c["g"])("label",{for:"content"},"Content",-1),tt={key:1,class:"error"},et=Object(c["g"])("label",{for:"categories"},"Categories (seperated by comma)",-1),ot={key:4,class:"success"},rt={key:5,class:"error"},ct={key:1},nt={key:2},st=Object(c["g"])("button",null,"Previous",-1),at={key:3},it=Object(c["g"])("button",null,"Next",-1);Object(c["q"])();var ut=L((function(t,e,o,r,n,s){var a=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])("div",J,[s.post?(Object(c["p"])(),Object(c["d"])("div",R,[Object(c["g"])("h1",null,"Post: "+Object(c["y"])(o.id),1),Object(c["g"])("div",$,Object(c["y"])(s.post.title),1),Object(c["g"])("div",z,Object(c["y"])(s.post.content),1),n.updated?(Object(c["p"])(),Object(c["d"])("div",G,[H,Object(c["E"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.post.title=t}),id:"title"},null,512),[[c["B"],s.post.title]]),n.errors&&n.errors.title?(Object(c["p"])(),Object(c["d"])("div",K,"Title required")):Object(c["e"])("",!0),Object(c["g"])("label",Q,[Object(c["E"])(Object(c["g"])("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=function(t){return s.post.favorite=t}),id:"favorite"},null,512),[[c["A"],s.post.favorite]]),W]),Object(c["g"])("label",X,[Object(c["E"])(Object(c["g"])("input",{type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=function(t){return s.post.featured=t}),id:"featured"},null,512),[[c["A"],s.post.featured]]),Y]),Z,Object(c["E"])(Object(c["g"])("textarea",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return s.post.content=t}),id:"content"},null,512),[[c["B"],s.post.content]]),n.errors&&n.errors.content?(Object(c["p"])(),Object(c["d"])("div",tt," Content required ")):Object(c["e"])("",!0),et,Object(c["E"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=function(t){return s.post.categories=t}),id:"categories"},null,512),[[c["B"],s.post.categories]])])):Object(c["e"])("",!0),n.updated?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("button",{key:1,onClick:e[6]||(e[6]=function(t){return n.updated=!0})},"Update")),n.updated?(Object(c["p"])(),Object(c["d"])("button",{key:2,onClick:e[7]||(e[7]=function(){return s.update&&s.update.apply(s,arguments)})},"Update")):Object(c["e"])("",!0),n.updated?(Object(c["p"])(),Object(c["d"])("button",{key:3,onClick:e[8]||(e[8]=function(t){n.updated=!1,n.success=!1,n.failure=!1})}," Cancel ")):Object(c["e"])("",!0),n.success?(Object(c["p"])(),Object(c["d"])("div",ot,"Post successfully updated")):Object(c["e"])("",!0),n.failure&&n.errors?(Object(c["p"])(),Object(c["d"])("div",rt,"Error updating post")):Object(c["e"])("",!0)])):(Object(c["p"])(),Object(c["d"])("div",ct,[Object(c["g"])("h2",null,"Post "+Object(c["y"])(o.id)+" not found",1)])),s.previousPost?(Object(c["p"])(),Object(c["d"])("div",nt,[Object(c["g"])(a,{to:"/post/"+s.previousPost.id},{default:L((function(){return[st]})),_:1},8,["to"])])):Object(c["e"])("",!0),s.nextPost?(Object(c["p"])(),Object(c["d"])("div",at,[Object(c["g"])(a,{to:"/post/"+s.nextPost.id},{default:L((function(){return[it]})),_:1},8,["to"])])):Object(c["e"])("",!0)])})),dt={props:{id:{type:String},posts:{type:Array,default:null}},data:function(){return{updated:!1,failure:!1,success:!1,errors:[]}},methods:{update:function(){var t=this,e=this.post;e.favorite?e.favorite=1:e.favorite=0,e.featured?e.featured=1:e.featured=0,s.put("/post/"+this.post.id,e).then((function(e){e.data&&e.data.errors?(t.failure=!0,t.success=!1,t.errors=e.data.errors):(t.errors=null,t.success=!0,t.failure=!1,t.$emit("update-posts"))}))}},computed:{nextPost:function(){var t;if(this.posts&&this.post){var e=this.post.id;this.posts.forEach((function(o,r,c){e==o.id&&(c[r+1]?t=c[r+1]:c.length>1&&(t=c[0]))}))}return t},previousPost:function(){var t;if(this.posts&&this.post){var e=this.post.id;this.posts.forEach((function(o,r,c){e==o.id&&(c[r-1]?t=c[r-1]:c.length>1&&(t=c[c.length-1]))}))}return t},post:function(){if(this.posts){var t,e=this.id;return this.posts.forEach((function(o){o.id==e&&(t=o)})),t&&(1==Number(t.favorite)?t.favorite=!0:t.favorite=!1,1==Number(t.featured)?t.featured=!0:t.featured=!1),t}return null}}};o("ab71");dt.render=ut,dt.__scopeId="data-v-d1b20338";var pt=dt,lt=Object(c["F"])("data-v-47008ffd");Object(c["s"])("data-v-47008ffd");var bt=Object(c["g"])("h2",null,"Add a Product",-1),ft={id:"inputs"},jt=Object(c["g"])("label",{for:"title"},"Title",-1),Ot={key:0,class:"error"},vt={for:"favorite",class:"form-checkbox-label"},ht=Object(c["f"])(" Favorite? "),gt={for:"featured",class:"form-checkbox-label"},yt=Object(c["f"])(" Featured? "),mt=Object(c["g"])("label",{for:"content"},"Content",-1),kt={key:1,class:"error"},wt=Object(c["g"])("label",{for:"categories"},"Categories (seperated by comma)",-1),Pt={key:0,class:"success"},xt={key:1,class:"error"};Object(c["q"])();var Et=lt((function(t,e,o,r,n,s){return Object(c["p"])(),Object(c["d"])("div",null,[bt,Object(c["g"])("div",ft,[jt,Object(c["E"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return n.post.title=t}),id:"title"},null,512),[[c["B"],n.post.title]]),n.errors&&n.errors.title?(Object(c["p"])(),Object(c["d"])("div",Ot,"Title required")):Object(c["e"])("",!0),Object(c["g"])("label",vt,[Object(c["E"])(Object(c["g"])("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=function(t){return n.post.favorite=t}),id:"favorite"},null,512),[[c["A"],n.post.favorite]]),ht]),Object(c["g"])("label",gt,[Object(c["E"])(Object(c["g"])("input",{type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=function(t){return n.post.featured=t}),id:"featured"},null,512),[[c["A"],n.post.featured]]),yt]),mt,Object(c["E"])(Object(c["g"])("textarea",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return n.post.content=t}),id:"content"},null,512),[[c["B"],n.post.content]]),n.errors&&n.errors.content?(Object(c["p"])(),Object(c["d"])("div",kt,"Content required")):Object(c["e"])("",!0),wt,Object(c["E"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=function(t){return n.post.categories=t}),id:"categories"},null,512),[[c["B"],n.post.categories]])]),Object(c["g"])("button",{onClick:e[6]||(e[6]=function(){return s.addPost&&s.addPost.apply(s,arguments)})},"Add Post"),n.success?(Object(c["p"])(),Object(c["d"])("div",Pt,"Post successfully added")):Object(c["e"])("",!0),n.failure&&n.errors?(Object(c["p"])(),Object(c["d"])("div",xt,"Error adding post")):Object(c["e"])("",!0)])})),_t={data:function(){return{post:{title:"Lorem ipsum",featured:!1,favorite:!1,categories:"lorem",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},errors:null,success:!1,failure:!1}},methods:{addPost:function(){var t=this,e=this.post;e.featured?e.featured=1:e.featured=0,e.favorite?e.favorite=1:e.favorite=0,s.post("/post",e).then((function(e){e.data&&e.data.errors?(t.failure=!0,t.success=!1,t.errors=e.data.errors):(t.post={},t.errors=null,t.success=!0,t.failure=!1,t.$emit("update-posts"))}))}}};o("f3e1");_t.render=Et,_t.__scopeId="data-v-47008ffd";var At=_t,Ct=(o("841c"),o("ac1f"),Object(c["F"])("data-v-165d3ace"));Object(c["s"])("data-v-165d3ace");var Ut={id:"search-page"},qt=Object(c["g"])("h2",null,"Posts Search",-1),Ft=Object(c["g"])("label",{for:"search"},"Search: ",-1),Vt={id:"posts"};Object(c["q"])();var St=Ct((function(t,e,o,r,n,s){var a=Object(c["w"])("show-post");return Object(c["p"])(),Object(c["d"])("div",Ut,[qt,Ft,Object(c["E"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return n.search=t}),id:"search"},null,512),[[c["B"],n.search]]),Object(c["g"])("div",Vt,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(s.searchPosts,(function(t){return Object(c["p"])(),Object(c["d"])(a,{key:t.id,post:t},null,8,["post"])})),128))])])})),Bt=(o("4d63"),o("25f0"),{components:{"show-post":F},props:{posts:{type:Array,default:null}},data:function(){return{search:""}},computed:{searchPosts:function(){var t=[],e=this.search;if(this.posts&&e){var o=new RegExp(e,"i");this.posts.forEach((function(e){-1==e.title.search(o)&&-1==e.content.search(o)||t.push(e)}))}return t}}});o("b55a");Bt.render=St,Bt.__scopeId="data-v-165d3ace";var Tt=Bt,It={id:"categories-page"},Mt=Object(c["g"])("h2",null,"Categories",-1),Nt={key:1,class:"clean-list"};function Dt(t,e,o,r,n,s){var a=Object(c["w"])("show-post");return Object(c["p"])(),Object(c["d"])("div",It,[Mt,n.postArray[0]?(Object(c["p"])(),Object(c["d"])("button",{key:0,onClick:e[1]||(e[1]=function(){return s.cancel&&s.cancel.apply(s,arguments)})},"Cancel")):Object(c["e"])("",!0),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(n.postArray,(function(t){return Object(c["p"])(),Object(c["d"])(a,{key:t.id,post:t},null,8,["post"])})),128)),n.postArray[0]?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("ul",Nt,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(s.categories,(function(t,e){return Object(c["p"])(),Object(c["d"])("li",{key:e},[Object(c["g"])("button",{onClick:function(e){return s.showCategory(t.postArray)}},Object(c["y"])(t.item),9,["onClick"])])})),128))]))])}var Lt=o("2909"),Jt=(o("d81d"),o("1276"),o("99af"),o("6062"),o("d3b7"),o("3ca3"),o("ddb0"),{components:{"show-post":F},props:{posts:{type:Array,default:null}},data:function(){return{postArray:[]}},methods:{showCategory:function(t){this.postArray=t},cancel:function(){this.postArray=[]}},computed:{categories:function(){var t=[];if(this.posts){var e=this.posts.map((function(t){if(t.categories)return t.categories.split(",")})),o=[].concat.apply([],e),r=Object(Lt["a"])(new Set(o)).sort(),c=this.posts;r.forEach((function(e){var o=[];c.forEach((function(t){if(t.categories){var r=t.categories.split(",");r.forEach((function(r){r==e&&o.push(t)}))}})),o[0]&&t.push({item:e,postArray:o})}))}return t}}});Jt.render=Dt;var Rt=Jt,$t=Object(u["a"])({history:Object(u["b"])(),routes:[{path:"/",component:m},{path:"/posts",component:S},{path:"/post/new",component:At},{path:"/post/:id",component:pt,props:!0},{path:"/favorites",component:D},{path:"/search",component:Tt},{path:"/categories",component:Rt}]});Object(c["c"])(i).use($t).mount("#app")},5878:function(t,e,o){},"6adc":function(t,e,o){},"6fa9":function(t,e,o){},"96e7":function(t,e,o){"use strict";o("541e")},"9f2f":function(t,e,o){"use strict";o("eeee")},ab71:function(t,e,o){"use strict";o("6fa9")},b55a:function(t,e,o){"use strict";o("4f87")},da03:function(t,e,o){"use strict";o("40aa")},e25d:function(t,e,o){"use strict";o("6adc")},eeee:function(t,e,o){},f3e1:function(t,e,o){"use strict";o("5878")}});
//# sourceMappingURL=app.95b8aa54.js.map