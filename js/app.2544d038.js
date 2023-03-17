(function(){"use strict";var e={7763:function(e,s,r){var t=r(9242),n=r(3396);const u={id:"app"};function i(e,s){const r=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(r)])}var o=r(89);const c={},a=(0,o.Z)(c,[["render",i]]);var l=a,p=r(678);const d={class:"users-list"};function f(e,s,r,t,u,i){const o=(0,n.up)("user-block");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.users.users,(e=>((0,n.wg)(),(0,n.j4)(o,{key:e.id,user:e},null,8,["user"])))),128))])])}var h=r(7139);const m={class:"user-block__img"},v=["alt"],_={class:"user-block__info"};function w(e,s,r,t,u,i){return(0,n.wg)(),(0,n.iD)("div",{class:"user-block",onClick:s[0]||(s[0]=(...e)=>i.detailedUser&&i.detailedUser(...e))},[(0,n._)("div",m,[(0,n._)("img",{src:"https://uprostim.com/wp-content/uploads/2021/05/image011-7.jpg",alt:r.user.username},null,8,v)]),(0,n._)("div",_,[(0,n._)("h2",null,(0,h.zw)(r.user.username),1),(0,n._)("span",null,(0,h.zw)(r.user.name)+" ("+(0,h.zw)(r.user.address.city)+" city) ",1),(0,n._)("span",null,(0,h.zw)(r.user.company.name),1),(0,n._)("span",null,(0,h.zw)(r.user.website),1),(0,n._)("span",null,(0,h.zw)(r.user.phone)+" - "+(0,h.zw)(r.user.email),1)])])}var b={name:"user-block",props:{user:{type:Object,required:!0}},methods:{detailedUser(){this.$router.push({name:"details",params:{id:this.user.id}})}}};const g=(0,o.Z)(b,[["render",w]]);var y=g,z={name:"UsersListView",components:{UserBlock:y},created(){this.$store.dispatch("fetchUsers")},computed:{users(){return this.$store.state.users}}};const k=(0,o.Z)(z,[["render",f]]);var U=k;const O={class:"specific-user-block"},j={class:"specific-user-block__img"},x=["alt"],$={class:"specific-user-block__info"},C=(0,n._)("h2",null,"User",-1),D={class:"specific-user-block__info"},P=(0,n._)("h2",null,"Address",-1),Z={class:"specific-user-block__info"},L=(0,n._)("h2",null,"Company",-1);function S(e,s,r,t,u,i){return(0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",j,[(0,n._)("img",{src:"https://uprostim.com/wp-content/uploads/2021/05/image011-7.jpg",alt:u.user.username},null,8,x)]),(0,n._)("div",$,[C,(0,n._)("p",null,"Username: "+(0,h.zw)(u.user.username),1),(0,n._)("p",null,"Name: "+(0,h.zw)(u.user.name),1),(0,n._)("p",null,"Website: "+(0,h.zw)(u.user.website),1),(0,n._)("p",null,"Phone: "+(0,h.zw)(u.user.phone),1),(0,n._)("p",null,"Email: "+(0,h.zw)(u.user.email),1)]),(0,n._)("div",D,[P,(0,n._)("p",null,(0,h.zw)(u.user.address.suite)+", "+(0,h.zw)(u.user.address.street)+" street "+(0,h.zw)(u.user.address.city)+" city ",1),(0,n._)("p",null,"Zipcode: "+(0,h.zw)(u.user.address.city),1),(0,n._)("p",null," Location: lat "+(0,h.zw)(u.user.address.geo.lat)+" lng "+(0,h.zw)(u.user.address.geo.lat),1)]),(0,n._)("div",Z,[L,(0,n._)("p",null,"Name: "+(0,h.zw)(u.user.company.name),1),(0,n._)("p",null,"Catch phrase: "+(0,h.zw)(u.user.company.catchPhrase),1),(0,n._)("p",null,"Specialization: "+(0,h.zw)(u.user.company.bs),1)])])}var T={name:"SpecificUserView",components:{},data(){return{user:null}},async created(){try{const{id:e}=this.$route.params;if(e){const{data:s}=await this.$store.dispatch("fetchSpecificUser",e);this.user=s}}catch(e){console.log(e)}}};const E=(0,o.Z)(T,[["render",S]]);var M=E;const N=[{path:"/",name:"UsersList",component:U},{path:"/user/:id",name:"details",component:M}],V=(0,p.p7)({history:(0,p.PO)("/test-vuex/"),routes:N});var W=V,q=r(9749),A=r(6265),B=r.n(A);const F=B().create({baseURL:"https://jsonplaceholder.typicode.com/"});var H=F;const K=()=>"users",R=e=>`users/${e}`;var Y=(0,q.MT)({state:{users:{}},getters:{},mutations:{setUsers(e,s){e.users=s}},actions:{fetchUsers({commit:e}){return H.get(K()).then((s=>{e("setUsers",{users:s.data})})).catch((e=>console.log(e)))},fetchSpecificUser(e,s){return H.get(R(s))}},modules:{}});(0,t.ri)(l).use(Y).use(W).mount("#app")}},s={};function r(t){var n=s[t];if(void 0!==n)return n.exports;var u=s[t]={exports:{}};return e[t](u,u.exports,r),u.exports}r.m=e,function(){var e=[];r.O=function(s,t,n,u){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],n=e[l][1],u=e[l][2];for(var o=!0,c=0;c<t.length;c++)(!1&u||i>=u)&&Object.keys(r.O).every((function(e){return r.O[e](t[c])}))?t.splice(c--,1):(o=!1,u<i&&(i=u));if(o){e.splice(l--,1);var a=n();void 0!==a&&(s=a)}}return s}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[t,n,u]}}(),function(){r.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(s,{a:s}),s}}(),function(){r.d=function(e,s){for(var t in s)r.o(s,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};r.O.j=function(s){return 0===e[s]};var s=function(s,t){var n,u,i=t[0],o=t[1],c=t[2],a=0;if(i.some((function(s){return 0!==e[s]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(c)var l=c(r)}for(s&&s(t);a<i.length;a++)u=i[a],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(l)},t=self["webpackChunktestvuex"]=self["webpackChunktestvuex"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(7763)}));t=r.O(t)})();
//# sourceMappingURL=app.2544d038.js.map
