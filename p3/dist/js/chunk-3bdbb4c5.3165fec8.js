(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bdbb4c5"],{"159b":function(t,e,r){var o=r("da84"),a=r("fdbc"),i=r("17c2"),n=r("9112");for(var c in a){var s=o[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{n(u,"forEach",i)}catch(d){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var o=r("b727").forEach,a=r("a640"),i=a("forEach");t.exports=i?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"545e":function(t,e,r){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var o=r("1d80"),a=r("5899"),i="["+a+"]",n=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),s=function(t){return function(e){var r=String(o(e));return 1&t&&(r=r.replace(n,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,r){var o=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var i,n;return a&&"function"==typeof(i=e.constructor)&&i!==r&&o(n=i.prototype)&&n!==r.prototype&&a(t,n),t}},a0ab:function(t,e,r){"use strict";r("545e")},a640:function(t,e,r){"use strict";var o=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&o((function(){r.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,r){"use strict";var o=r("83ab"),a=r("da84"),i=r("94ca"),n=r("6eeb"),c=r("5135"),s=r("c6b6"),u=r("7156"),d=r("c04e"),f=r("d039"),p=r("7c73"),l=r("241c").f,b=r("06cf").f,v=r("9bf2").f,O=r("58a8").trim,j="Number",h=a[j],y=h.prototype,g=s(p(y))==j,k=function(t){var e,r,o,a,i,n,c,s,u=d(t,!1);if("string"==typeof u&&u.length>2)if(u=O(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+u}for(i=u.slice(2),n=i.length,c=0;c<n;c++)if(s=i.charCodeAt(c),s<48||s>a)return NaN;return parseInt(i,o)}return+u};if(i(j,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var E,m=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof m&&(g?f((function(){y.valueOf.call(r)})):s(r)!=j)?u(new h(k(e)),r,m):k(e)},N=o?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;N.length>F;F++)c(h,E=N[F])&&!c(m,E)&&v(m,E,b(h,E));m.prototype=y,y.constructor=m,n(a,j,m)}},c78c:function(t,e,r){"use strict";r.r(e);var o=r("7a23"),a=Object(o["F"])("data-v-17faa984");Object(o["s"])("data-v-17faa984");var i={id:"post-page"},n={key:0},c={class:"title"},s={class:"content"},u={key:0},d=Object(o["g"])("label",{for:"title"},"Title",-1),f={key:0,class:"error"},p={for:"favorite",class:"form-checkbox-label"},l=Object(o["f"])(" Favorite? "),b={for:"featured",class:"form-checkbox-label"},v=Object(o["f"])(" Featured? "),O=Object(o["g"])("label",{for:"content"},"Content",-1),j={key:1,class:"error"},h=Object(o["g"])("label",{for:"categories"},"Categories (separated by comma)",-1),y={key:2,class:"error"},g={key:4,class:"success"},k={key:5,class:"error"},E={key:1},m={key:2},N={key:3},F={key:4},I={key:5},x=Object(o["g"])("button",null,"Previous",-1),_={key:6},A=Object(o["g"])("button",null,"Next",-1);Object(o["q"])();var w=a((function(t,e,r,w,C,P){var U=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",i,[P.post?(Object(o["p"])(),Object(o["d"])("div",n,[Object(o["g"])("h1",null,"Post: "+Object(o["y"])(r.id),1),Object(o["g"])("div",c,Object(o["y"])(P.post.title),1),Object(o["g"])("div",s,Object(o["y"])(P.post.content),1),C.updated?(Object(o["p"])(),Object(o["d"])("div",u,[d,Object(o["E"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return P.post.title=t}),id:"title",onBlur:e[2]||(e[2]=function(){return P.validate&&P.validate.apply(P,arguments)})},null,544),[[o["B"],P.post.title]]),C.errors&&C.errors.title?(Object(o["p"])(),Object(o["d"])("div",f,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(C.errors.title,(function(t,e){return Object(o["p"])(),Object(o["d"])("li",{key:e},Object(o["y"])(t),1)})),128))])):Object(o["e"])("",!0),Object(o["g"])("label",p,[Object(o["E"])(Object(o["g"])("input",{type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=function(t){return P.post.favorite=t}),id:"favorite"},null,512),[[o["A"],P.post.favorite]]),l]),Object(o["g"])("label",b,[Object(o["E"])(Object(o["g"])("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=function(t){return P.post.featured=t}),id:"featured"},null,512),[[o["A"],P.post.featured]]),v]),O,Object(o["E"])(Object(o["g"])("textarea",{"onUpdate:modelValue":e[5]||(e[5]=function(t){return P.post.content=t}),id:"content",onBlur:e[6]||(e[6]=function(){return P.validate&&P.validate.apply(P,arguments)})},null,544),[[o["B"],P.post.content]]),C.errors&&C.errors.content?(Object(o["p"])(),Object(o["d"])("div",j,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(C.errors.content,(function(t,e){return Object(o["p"])(),Object(o["d"])("li",{key:e},Object(o["y"])(t),1)})),128))])):Object(o["e"])("",!0),h,Object(o["E"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":e[7]||(e[7]=function(t){return P.post.categories=t}),id:"categories",onBlur:e[8]||(e[8]=function(){return P.validate&&P.validate.apply(P,arguments)})},null,544),[[o["B"],P.post.categories]]),C.errors&&C.errors.categories?(Object(o["p"])(),Object(o["d"])("div",y,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(C.errors.categories,(function(t,e){return Object(o["p"])(),Object(o["d"])("li",{key:e},Object(o["y"])(t),1)})),128))])):Object(o["e"])("",!0)])):Object(o["e"])("",!0),!C.updated&&P.user?(Object(o["p"])(),Object(o["d"])("button",{key:1,onClick:e[9]||(e[9]=function(t){return C.updated=!0})}," Update ")):Object(o["e"])("",!0),C.updated&&P.user?(Object(o["p"])(),Object(o["d"])("button",{key:2,onClick:e[10]||(e[10]=function(){return P.update&&P.update.apply(P,arguments)})},"Update")):Object(o["e"])("",!0),C.updated?(Object(o["p"])(),Object(o["d"])("button",{key:3,onClick:e[11]||(e[11]=function(t){C.updated=!1,C.success=!1,C.failure=!1})}," Cancel ")):Object(o["e"])("",!0),C.success?(Object(o["p"])(),Object(o["d"])("div",g,"Post successfully updated")):Object(o["e"])("",!0),C.failure&&C.errors?(Object(o["p"])(),Object(o["d"])("div",k,"Error updating post")):Object(o["e"])("",!0)])):(Object(o["p"])(),Object(o["d"])("div",E,[Object(o["g"])("h2",null,"Post "+Object(o["y"])(r.id)+" not found",1)])),P.user?(Object(o["p"])(),Object(o["d"])("div",m,[Object(o["g"])("button",{onClick:e[12]||(e[12]=function(){return P.deleted&&P.deleted.apply(P,arguments)})},"Delete")])):Object(o["e"])("",!0),C.favorite?(Object(o["p"])(),Object(o["d"])("div",N,[Object(o["g"])("button",{onClick:e[13]||(e[13]=function(){return P.removeFavorite&&P.removeFavorite.apply(P,arguments)})},"Remove Favorite")])):Object(o["e"])("",!0),C.favorite?Object(o["e"])("",!0):(Object(o["p"])(),Object(o["d"])("div",F,[Object(o["g"])("button",{onClick:e[14]||(e[14]=function(){return P.addFavorite&&P.addFavorite.apply(P,arguments)})},"Add Favorite")])),P.previousPost?(Object(o["p"])(),Object(o["d"])("div",I,[Object(o["g"])(U,{to:"/post/"+P.previousPost.id},{default:a((function(){return[x]})),_:1},8,["to"])])):Object(o["e"])("",!0),P.nextPost?(Object(o["p"])(),Object(o["d"])("div",_,[Object(o["g"])(U,{to:"/post/"+P.nextPost.id},{default:a((function(){return[A]})),_:1},8,["to"])])):Object(o["e"])("",!0)])})),C=(r("159b"),r("a9e3"),r("0091")),P=r("1c4a"),U=r.n(P),V=r("5780"),S={props:{id:{type:String},posts:{type:Array,default:null}},data:function(){return{updated:!1,failure:!1,success:!1,errors:[],favorite:!1}},methods:{update:function(){var t=this;if(this.validate()){var e=this.post;e.favorite?e.favorite=1:e.favorite=0,e.featured?e.featured=1:e.featured=0,C["a"].put("/post/"+this.post.id,e).then((function(e){e.data&&e.data.errors?(t.failure=!0,t.success=!1,t.errors=e.data.errors):(t.errors=null,t.success=!0,t.failure=!1,t.$emit("update-posts"))}))}},validate:function(){var t=new U.a(this.post,{title:"required|between:3,100",categories:"required|between:3,100",content:"required|min:100"});return t.fails()?this.errors=t.errors.all():this.errors=null,t.passes()},deleted:function(){var t=this;C["a"].delete("/post/"+this.post.id).then((function(e){e.data&&e.data.errors?(t.failure=!0,t.success=!1,t.errors=e.data.errors):(t.errors=null,t.success=!0,t.failure=!1,C["a"].get("favorite/query?post_id="+t.post.id).then((function(t){t.data&&t.data.favorite[0]&&t.data.favorite.forEach((function(t){C["a"].delete("/favorite/"+t.id).then((function(){}))}))})),t.$emit("update-posts"),V["a"].push("/posts"))}))},loadFavorites:function(){var t=this;C["a"].get("favorite/query?post_id="+this.post.id).then((function(e){var r;e.data&&e.data.favorite[0]?(e.data.favorite.forEach((function(e){e.user_id==t.user.id&&(t.favorite=e,r=!0)})),r||(t.favorite=!1)):t.favorite=!1}))},removeFavorite:function(){var t=this;C["a"].delete("/favorite/"+this.favorite.id).then((function(){t.favorite=!1}))},addFavorite:function(){var t=this;C["a"].post("/favorite",{user_id:this.user.id,post_id:this.post.id}).then((function(){t.favorite={user_id:t.user.id,post_id:t.post.id}}))}},computed:{user:function(){return this.$store.state.user},nextPost:function(){var t;if(this.posts&&this.post){var e=this.post.id;this.posts.forEach((function(r,o,a){e==r.id&&(a[o+1]?t=a[o+1]:a.length>1&&(t=a[0]))}))}return this.loadFavorites(),t},previousPost:function(){var t;if(this.posts&&this.post){var e=this.post.id;this.posts.forEach((function(r,o,a){e==r.id&&(a[o-1]?t=a[o-1]:a.length>1&&(t=a[a.length-1]))}))}return this.loadFavorites(),t},post:function(){if(this.posts){var t,e=this.id;return this.posts.forEach((function(r){r.id==e&&(t=r)})),t&&(1==Number(t.favorite)?t.favorite=!0:t.favorite=!1,1==Number(t.featured)?t.featured=!0:t.featured=!1),t}return null}},mounted:function(){this.loadFavorites()}};r("a0ab");S.render=w,S.__scopeId="data-v-17faa984";e["default"]=S}}]);
//# sourceMappingURL=chunk-3bdbb4c5.3165fec8.js.map