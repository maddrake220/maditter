(this.webpackJsonpmaditter=this.webpackJsonpmaditter||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(36),s=n.n(r),i=n(11),o=n(23),u=n(9),l=n(13),j=n.n(l),d=n(18),b=n(25);n(47),n(48),n(49);b.a.initializeApp({apiKey:"AIzaSyDU38Ar8ioBY3qscYk4D-poTMbflkBIKSQ",authDomain:"maditter-9e9d0.firebaseapp.com",projectId:"maditter-9e9d0",storageBucket:"maditter-9e9d0.appspot.com",messagingSenderId:"168707011353",appId:"1:168707011353:web:dbe75844f0befdd76f8b88"});var p=b.a,m=b.a.auth(),f=b.a.firestore(),h=b.a.storage(),O=n(2),x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(""),b=Object(i.a)(l,2),p=b[0],f=b[1],h=Object(a.useState)(!0),x=Object(i.a)(h,2),g=x[0],v=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},w=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),f(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{onSubmit:w,className:"container",children:[Object(O.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(O.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:y,className:"authInput"}),Object(O.jsx)("input",{type:"submit",className:"authInput authSubmit",value:g?"Create Account":"Log in"}),p&&Object(O.jsx)("span",{className:"authError",children:p})]}),Object(O.jsx)("span",{onClick:function(){return v((function(e){return!e}))},className:"authSwitch",children:g?"Sign In":"Create Account"})]})},g=n(14),v=n(24),y=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"authContainer",children:[Object(O.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"authBtns",children:[Object(O.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(O.jsx)(g.a,{icon:v.b})]}),Object(O.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(O.jsx)(g.a,{icon:v.a})]})]})]})},w=n(38),N=n(19),k=function(e){var t=e.mWeetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),b=l[0],p=l[1],m=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure to delete this mweek ?")){e.next=7;break}return e.next=4,f.doc("madweet/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,h.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,f.doc("madweet/".concat(t.id)).update({text:b});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){return o((function(e){return!e}))};return Object(O.jsx)("div",{className:"nweet",children:s?Object(O.jsx)(O.Fragment,{children:n&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{onSubmit:x,className:"container nweetEdit",children:[Object(O.jsx)("input",{type:"text",placeholder:"Edit your mweet",value:b,onChange:function(e){var t=e.target.value;p(t),console.log(b)},required:!0,autoFocus:!0,className:"formInput"}),Object(O.jsx)("input",{type:"submit",value:"Update Mweet",className:"formBtn"})]}),Object(O.jsx)("span",{onClick:v,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(O.jsx)("img",{src:t.attachmentUrl}),n&&Object(O.jsxs)("div",{className:"nweet__actions",children:[Object(O.jsx)("span",{onClick:m,children:Object(O.jsx)(g.a,{icon:N.d})}),Object(O.jsx)("span",{onClick:v,children:Object(O.jsx)(g.a,{icon:N.a})})]})]})})},S=n(60),I=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],b=u[1],p=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return c=h.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,f.collection("madweet").add(o);case 15:s(""),b("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(O.jsxs)("div",{className:"factoryInput__container",children:[Object(O.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(O.jsx)("input",{type:"submit",value:"mWeet",className:"factoryInput__arrow"})]}),Object(O.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(O.jsx)("span",{children:"Add photos"}),Object(O.jsx)(g.a,{icon:N.b})]}),Object(O.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;b(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(O.jsxs)("div",{className:"factoryForm__attachment",children:[Object(O.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(O.jsxs)("div",{className:"factoryForm__clear",onClick:function(e){document.getElementById("onFileChange").value=null,b("")},children:[Object(O.jsx)("span",{children:"Remove"}),Object(O.jsx)(g.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){f.collection("madweet").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(I,{userObj:t}),Object(O.jsx)("div",{style:{marginTop:30},children:r&&r.map((function(e){return Object(O.jsx)(k,{mWeetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj;return Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(O.jsx)("li",{children:Object(O.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(O.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"2x"})})}),Object(O.jsx)("li",{children:Object(O.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(O.jsx)(g.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(O.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},F=function(e){var t=e.refreshUser,n=e.userObj,c=Object(u.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],b=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o===n.displayName){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(O.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;l(t)},placeholder:"Display Name",value:o,autoFocus:!0,className:"formInput"}),Object(O.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(O.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),c.push("/")},children:"Log Out"})]})},B=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(O.jsxs)(o.a,{children:[n&&Object(O.jsx)(A,{userObj:a}),Object(O.jsx)(u.c,{children:n?Object(O.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(O.jsx)(u.a,{exact:!0,path:"/",children:Object(O.jsx)(C,{userObj:a})}),Object(O.jsx)(u.a,{exact:!0,path:"/profile",children:Object(O.jsx)(F,{userObj:a,refreshUser:t})})]}):Object(O.jsx)(u.a,{exact:!0,path:"/",children:Object(O.jsx)(y,{})})})]})},U=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];Object(a.useEffect)((function(){m.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]);return Object(O.jsxs)(O.Fragment,{children:[n?Object(O.jsx)(B,{refreshUser:function(){var e=m.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"initializing...",Object(O.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Maditter"]})]})};n(57);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.cf78082b.chunk.js.map