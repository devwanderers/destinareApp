(this.webpackJsonpswapp=this.webpackJsonpswapp||[]).push([[5,11,12],{1122:function(e,a,t){"use strict";var r=t(1e3);a.a=r.a},1123:function(e,a,t){"use strict";var r=t(960);a.a=r.a},170:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(1122),s=t(1123),i=t(971),o=t(29),c=t(22),u=t(249),l=t(42),d=t(20),m=t.n(d),b=t(51),p=function(e){return new Promise((function(a){return setTimeout(a,e)}))},h=function(){var e=Object(b.a)(m.a.mark((function e(a){var t,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:300,e.next=3,p(t);case 3:return e.abrupt("return",a());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),j=t(156),f=t(426),v=t(165),x=t(965),g=t(5),O=["signIn"],N=Object(l.b)((function(e){return{}}),(function(e){return{signIn:function(a){return e(Object(j.signIn)(a))}}}))((function(e){var a=e.signIn,t=Object(u.a)(e,O),n=Object(r.useState)(!1),s=Object(c.a)(n,2),i=s[0],l=s[1],d=Object(r.useState)(""),m=Object(c.a)(d,2),b=m[0],p=m[1],j=function(e){l(!0),p(e)};return Object(g.jsx)(f.default,Object(o.a)({showError:i,errorMessage:b,onSubmit:function(e,t){var r=e.emailOrUsername,n=e.password,s=t.setSubmitting;l(!1),a({email:r,password:n}).then((function(e){var a,t;(null===e||void 0===e?void 0:e.error)?"InvalidCredentials"===(null===(a=e.payload)||void 0===a?void 0:a.message)?j("There was a problem logging in. Please check your email and password"):j(null===(t=e.payload)||void 0===t?void 0:t.message):(Object(x.a)(v.e),h((function(){s(!1)})))}))}},t))})),y=t(427),w=t(415),q=["signUp","signIn"],R=["confirmPassword"],F=Object(l.b)((function(e){return{}}),(function(e){return{signUp:function(a){return e(w.a.signUp(a))},signIn:function(a){return e(w.a.signIn(a))}}}))((function(e){var a=e.signUp,t=e.signIn,n=Object(u.a)(e,q),s=Object(r.useState)(!1),i=Object(c.a)(s,2),l=i[0],d=i[1],m=Object(r.useState)(""),b=Object(c.a)(m,2),p=b[0],j=b[1],f=function(e){d(!0),j(e)};return Object(g.jsx)(y.default,Object(o.a)({showError:l,errorMessage:p,onSubmit:function(e,r){e.confirmPassword;var n=Object(u.a)(e,R),s=r.setSubmitting;d(!1),a(n).then((function(e){if(null===e||void 0===e?void 0:e.error){var a;f(null===(a=e.payload)||void 0===a?void 0:a.message),h((function(){s(!1)}))}else{var r=n.email,i=n.password;t({email:r,password:i}).then((function(e){var a;(null===e||void 0===e?void 0:e.error)?f(null===(a=e.payload)||void 0===a?void 0:a.message):(Object(x.a)(v.e),h((function(){s(!1)})))}))}}))}},n))})),k=t(21);a.default=function(e){var a=e.auth,t="login"===a?N:F,r=Object(k.f)();return Object(g.jsxs)("section",{className:"login-content",children:[Object(g.jsx)("div",{className:"absolute left-0 bottom-0 top-0 right-0 md:right-2/4 bg-sunset3 bg-cover bg-right md:bg-right hidden md:flex"}),Object(g.jsx)("div",{className:"section relative lg:wrapper mx-auto lg:pl-4 lg:pr-4",children:Object(g.jsxs)(n.a,{className:"justify-center ",style:{flex:"1"},children:[Object(g.jsx)(s.a,{sm:12,className:" flex justify-center ",children:Object(g.jsx)("div",{className:"col-inner",children:"login"===a?Object(g.jsx)("h2",{className:"",children:"Reg\xedstrate para apoyar a tus creadores favoritos"}):Object(g.jsx)("h2",{className:"",children:"Reg\xedstrate para apoyar a tus creadores favoritos 2"})})}),Object(g.jsx)(s.a,{sm:12,className:"flex  justify-center",children:Object(g.jsxs)("div",{className:"col-inner",children:[Object(g.jsx)("h1",{className:"mb-2 flex justify-center ",children:Object(g.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),r.push(v.a)},children:Object(g.jsx)(i.a,{width:245,height:64})})}),Object(g.jsx)(t,{})]})})]})})]})}},426:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),s=t(946),i=t(1140),o=t(1139),c=t(1010),u=t(1150),l=t(1133),d=t(926),m=t(21),b=t(928),p=t(929),h=t(165),j=t(5),f=d.f({emailOrUsername:b.a.generic,password:b.a.generic}),v={emailOrUsername:"",password:""};a.default=function(e){var a=e.onSubmit,t=e.showError,r=e.errorMessage,d=Object(m.f)();return Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)("div",{className:"font-medium mb-2",children:"Log in"}),Object(j.jsx)(s.c,{validationSchema:f,initialValues:v,onSubmit:a,children:function(e){var a=e.isSubmitting,n=e.values;return Object(j.jsxs)(s.b,{className:"mb-4",children:[Object(j.jsx)(s.a,{component:p.a,name:"emailOrUsername",type:"email",placeholder:"Email",className:"h-12 rounded-lg",hasFeedback:!0,value:null===n||void 0===n?void 0:n.emailOrUsername}),Object(j.jsx)(s.a,{component:p.b,name:"password",type:"password",placeholder:"Password",className:"h-12 rounded-lg",hasFeedback:!0,iconRender:function(e){return e?Object(j.jsx)(u.a,{}):Object(j.jsx)(l.a,{})},value:null===n||void 0===n?void 0:n.password}),t&&Object(j.jsx)(i.a,{className:"mb-5",message:r,type:"error",showIcon:!0}),Object(j.jsx)(o.a.Item,{className:"mb-0",children:Object(j.jsx)(c.a,{block:!0,type:"primary",htmlType:"submit",className:"text-sm px-4 py-2 py h-12 rounded-full font-medium",loading:a,style:{paddingTop:"9px",paddingBottom:"9px"},children:"LOGIN"})}),Object(j.jsxs)("div",{className:"login-links flex flex-col text-center",children:[Object(j.jsx)("a",{type:"link",className:"text-sm h-auto py-0 text-gray-9 hover:text-info",children:"Forgot password?"}),Object(j.jsxs)("span",{className:"text-gray-9 text-sm h-auto py-0 relative",style:{top:"-7px"},children:["Don't have an account? ",Object(j.jsx)("a",{className:"font-medium text-blue-900 hover:text-info",href:"#",onClick:function(e){e.preventDefault(),d.push(h.d)},children:"Sign up"})]})]})]})}}),!t&&Object(j.jsx)("div",{className:"h-40px mb-5"})]})}},427:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),s=t(946),i=t(1140),o=t(1139),c=t(1010),u=t(926),l=t(1150),d=t(1133),m=t(928),b=t(21),p=t(165),h=t(929),j=t(5),f=u.f({firstName:m.a.name,lastName:m.a.name,email:m.a.mail,userName:m.a.userName,password:m.a.password,confirmPassword:m.a.passwordConfirmation}),v={firstName:"",lastName:"",userName:"",email:"",password:"",confirmPassword:""};a.default=function(e){var a=e.onSubmit,t=e.showError,r=e.errorMessage,u=Object(b.f)();return Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)("div",{className:"font-medium mb-2",children:"Sign up"}),Object(j.jsx)(s.c,{validationSchema:f,initialValues:v,onSubmit:a,children:function(e){var a=e.values,n=e.isSubmitting;return Object(j.jsxs)(s.b,{className:"mb-4",children:[Object(j.jsxs)("div",{className:"flex flex-row space-x-2",children:[Object(j.jsx)(s.a,{component:h.a,type:"text",name:"firstName",placeholder:"* First Name",className:"h-12 rounded-lg",hasFeedback:!0,value:null===a||void 0===a?void 0:a.firstName}),Object(j.jsx)(s.a,{component:h.a,type:"text",name:"lastName",placeholder:"* Last Name",className:"h-12 rounded-lg",hasFeedback:!0,value:null===a||void 0===a?void 0:a.lastName})]}),Object(j.jsx)(s.a,{component:h.a,name:"email",type:"email",placeholder:"Email",className:"h-12 rounded-lg",hasFeedback:!0,value:null===a||void 0===a?void 0:a.email}),Object(j.jsx)(s.a,{component:h.a,type:"text",name:"userName",placeholder:"Username",className:"h-12 rounded-lg",hasFeedback:!0,value:null===a||void 0===a?void 0:a.userName}),Object(j.jsx)(s.a,{component:h.b,name:"password",type:"password",placeholder:"Password",className:"h-12 rounded-lg",hasFeedback:!0,iconRender:function(e){return e?Object(j.jsx)(l.a,{}):Object(j.jsx)(d.a,{})},value:null===a||void 0===a?void 0:a.password}),Object(j.jsx)(s.a,{component:h.b,name:"confirmPassword",type:"password",placeholder:"Confirm Password",className:"h-12 rounded-lg",hasFeedback:!0,iconRender:function(e){return e?Object(j.jsx)(l.a,{}):Object(j.jsx)(d.a,{})},value:null===a||void 0===a?void 0:a.confirmPassword}),t&&Object(j.jsx)(i.a,{className:"mb-5",message:r,type:"error",showIcon:!0}),Object(j.jsx)(o.a.Item,{className:"mb-0",children:Object(j.jsx)(c.a,{type:"primary",block:!0,className:"text-sm px-4 py-2 py h-12 rounded-full font-medium",htmlType:"submit",loading:n,style:{paddingTop:"9px",paddingBottom:"9px"},children:"Register"})})]})}}),Object(j.jsx)("div",{className:"login-links text-center",children:Object(j.jsxs)("span",{className:"text-gray-9 text-sm h-auto py-0 relative",style:{top:"-7px"},children:["Already have an account.",Object(j.jsxs)("a",{className:"font-medium text-blue-200 hover:text-info",href:"#",onClick:function(e){e.preventDefault(),u.push(p.b)},children:[" ","Log in"]})]})}),!t&&Object(j.jsx)("div",{className:"h-40px mb-5"})]})}},928:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(926),n=t(956),s=t.n(n),i=["image/jpg","image/jpeg","image/png"],o=/[A-Z]/,c=/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,u=/^[0-9]{5}$/,l={password:r.h().min(8,"Too Short!").max(64,"Too Long!").matches(o,"Must contain al least one uppercase letter.").required("Required"),passwordConfirmation:r.h().oneOf([r.g("password"),null],"Passwords must match").required("Required"),userName:r.h().min(3,"Too Short!").max(64,"Too Long!").test("alphaNumeric","Must contain only letters and numbers.",(function(e){return e&&s.a.isAlphanumeric(e)})).required("Required"),mail:r.h().max(64,"Too Long!").email("Must be a valid email format. example@email.com").lowercase("Must contain only lower case").required("Required"),phone:r.h().matches(c,"Must be a valid phone number.").required("Required"),name:r.h().min(3,"Too Short!").max(30,"Too Long!").test("alpha","Must contain only letters.",(function(e){return!e||e&&s.a.isAlpha(e.replace(" ",""))})),birthDate:r.c().required("Required"),country:r.h().required("Required"),state:r.h().required("Required"),city:r.h().required("Required"),line:r.h().required("Required"),postalCode:r.h().matches(u,"Must be exactly 5 digits").required("Required"),file:r.d().required("A file is required").test("fileSize","File too large",(function(e){return e&&e[0].size<=102400})).test("fileFormat","Unsupported Format",(function(e){return e&&i.includes(e[0].type)})).required("Required"),min20Usd:r.d().required("Required").test("usdAmount","Minimum to invest is 20 USD",(function(e){if(e){var a=e;return a=a.replace(/\D/g,""),(a=parseFloat(a))>=20}return!1})),no0Usd:r.d().required("Required").test("usdAmount","Usd amount must be higher than 0",(function(e){if(e){var a=e;return(a=parseFloat(a))>0}return!1})),generic:r.h().max(64,"Too Long!").required("Required"),boolean:r.b().oneOf([!0],"Field must be checked"),onlyNumber:r.d().required("Required").test("onlyNumber","Field must be a number",(function(e){return!!e&&/^\d+$/.test(e)})),isColor:r.d().required("Required").test("color","Field must be a valid color format. Examples. RGBA: rgba(0, 0, 0, 1), HEXA: #000000, RGB: rgb(0,0,0), Color: red",(function(e){if(e){var a=(new Option).style;return a.color=e,""!==a.color}return!1})),number:r.e().required("Required"),array:r.a().required("Required"),validateIsNotCurrentUser:function(e,a){return r.d().required("Required").test("validUserName","You can not add yourself",(function(a){return!!a&&(a!==e.userName&&a!==e.userMail)})).test("validateIsNotExistingMember","You can not add existing members",(function(e){if(e){for(var t=!0,r=0;r<a.length;r++){var n=a[r],s=n.userName,i=n.userMail;if(e===s||e===i){t=!1;break}}return t}return!1}))}}},929:function(e,a,t){"use strict";t.d(a,"a",(function(){return h})),t.d(a,"b",(function(){return j}));var r=t(29),n=t(249),s=(t(1),t(1139)),i=t(1144),o=t(1127),c=t(1142),u=t(1136),l=t(5),d=["field","form","hasFeedback","label","selectOptions","submitCount","type"],m=s.a.Item,b=i.a.Option,p=function(e){return function(a){var t=a.field,s=a.form,i=a.hasFeedback,o=a.label,c=a.selectOptions,u=a.submitCount,p=a.type,h=Object(n.a)(a,d),j=s.touched[t.name],f=u>0,v=s.errors[t.name],x=v&&f,g=v&&j;return Object(l.jsx)(m,{label:o,hasFeedback:i&&f||i&&j,help:!(!x&&!g)&&v,validateStatus:x||g?"error":"success",children:Object(l.jsx)(e,Object(r.a)(Object(r.a)(Object(r.a)({},t),h),{},{onBlur:function(){return s.setFieldTouched(t.name,!0)},onChange:p?function(e){var a=e.target.value;return s.setFieldValue(t.name,a)}:function(e){return s.setFieldValue(t.name,e)},children:c&&c.map((function(e){return Object(l.jsx)(b,{children:e},e)}))}))})}},h=(p(i.a),p(o.a),p(c.a)),j=p(c.a.Password);p(u.a)}}]);
//# sourceMappingURL=5.62411532.chunk.js.map