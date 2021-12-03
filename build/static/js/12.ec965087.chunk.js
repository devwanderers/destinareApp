(this.webpackJsonpswapp=this.webpackJsonpswapp||[]).push([[12],{427:function(e,a,r){"use strict";r.r(a);var t=r(1),s=r.n(t),n=r(946),i=r(1140),o=r(1139),u=r(1010),d=r(926),l=r(1150),c=r(1133),m=r(928),p=r(21),b=r(165),h=r(929),f=r(5),j=d.f({firstName:m.a.name,lastName:m.a.name,email:m.a.mail,userName:m.a.userName,password:m.a.password,confirmPassword:m.a.passwordConfirmation}),x={firstName:"",lastName:"",userName:"",email:"",password:"",confirmPassword:""};a.default=function(e){var a=e.onSubmit,r=e.showError,t=e.errorMessage,d=Object(p.f)();return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)("div",{className:"font-medium mb-2",children:"Sign up"}),Object(f.jsx)(n.c,{validationSchema:j,initialValues:x,onSubmit:a,children:function(e){var a=e.values,s=e.isSubmitting;return Object(f.jsxs)(n.b,{className:"mb-4",children:[Object(f.jsxs)("div",{className:"flex flex-row space-x-2",children:[Object(f.jsx)(n.a,{component:h.a,type:"text",name:"firstName",placeholder:"* First Name",className:"h-12 rounded-lg",hasFeedback:!0,value:null===a||void 0===a?void 0:a.firstName}),Object(f.jsx)(n.a,{component:h.a,type:"text",name:"lastName",placeholder:"* Last Name",className:"h-12 rounded-lg",hasFeedback:!0,value:null===a||void 0===a?void 0:a.lastName})]}),Object(f.jsx)(n.a,{component:h.a,name:"email",type:"email",placeholder:"Email",className:"h-12 rounded-lg",hasFeedback:!0,value:null===a||void 0===a?void 0:a.email}),Object(f.jsx)(n.a,{component:h.a,type:"text",name:"userName",placeholder:"Username",className:"h-12 rounded-lg",hasFeedback:!0,value:null===a||void 0===a?void 0:a.userName}),Object(f.jsx)(n.a,{component:h.b,name:"password",type:"password",placeholder:"Password",className:"h-12 rounded-lg",hasFeedback:!0,iconRender:function(e){return e?Object(f.jsx)(l.a,{}):Object(f.jsx)(c.a,{})},value:null===a||void 0===a?void 0:a.password}),Object(f.jsx)(n.a,{component:h.b,name:"confirmPassword",type:"password",placeholder:"Confirm Password",className:"h-12 rounded-lg",hasFeedback:!0,iconRender:function(e){return e?Object(f.jsx)(l.a,{}):Object(f.jsx)(c.a,{})},value:null===a||void 0===a?void 0:a.confirmPassword}),r&&Object(f.jsx)(i.a,{className:"mb-5",message:t,type:"error",showIcon:!0}),Object(f.jsx)(o.a.Item,{className:"mb-0",children:Object(f.jsx)(u.a,{type:"primary",block:!0,className:"text-sm px-4 py-2 py h-12 rounded-full font-medium",htmlType:"submit",loading:s,style:{paddingTop:"9px",paddingBottom:"9px"},children:"Register"})})]})}}),Object(f.jsx)("div",{className:"login-links text-center",children:Object(f.jsxs)("span",{className:"text-gray-9 text-sm h-auto py-0 relative",style:{top:"-7px"},children:["Already have an account.",Object(f.jsxs)("a",{className:"font-medium text-blue-200 hover:text-info",href:"#",onClick:function(e){e.preventDefault(),d.push(b.b)},children:[" ","Log in"]})]})}),!r&&Object(f.jsx)("div",{className:"h-40px mb-5"})]})}},928:function(e,a,r){"use strict";r.d(a,"a",(function(){return l}));var t=r(926),s=r(956),n=r.n(s),i=["image/jpg","image/jpeg","image/png"],o=/[A-Z]/,u=/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,d=/^[0-9]{5}$/,l={password:t.h().min(8,"Too Short!").max(64,"Too Long!").matches(o,"Must contain al least one uppercase letter.").required("Required"),passwordConfirmation:t.h().oneOf([t.g("password"),null],"Passwords must match").required("Required"),userName:t.h().min(3,"Too Short!").max(64,"Too Long!").test("alphaNumeric","Must contain only letters and numbers.",(function(e){return e&&n.a.isAlphanumeric(e)})).required("Required"),mail:t.h().max(64,"Too Long!").email("Must be a valid email format. example@email.com").lowercase("Must contain only lower case").required("Required"),phone:t.h().matches(u,"Must be a valid phone number.").required("Required"),name:t.h().min(3,"Too Short!").max(30,"Too Long!").test("alpha","Must contain only letters.",(function(e){return!e||e&&n.a.isAlpha(e.replace(" ",""))})),birthDate:t.c().required("Required"),country:t.h().required("Required"),state:t.h().required("Required"),city:t.h().required("Required"),line:t.h().required("Required"),postalCode:t.h().matches(d,"Must be exactly 5 digits").required("Required"),file:t.d().required("A file is required").test("fileSize","File too large",(function(e){return e&&e[0].size<=102400})).test("fileFormat","Unsupported Format",(function(e){return e&&i.includes(e[0].type)})).required("Required"),min20Usd:t.d().required("Required").test("usdAmount","Minimum to invest is 20 USD",(function(e){if(e){var a=e;return a=a.replace(/\D/g,""),(a=parseFloat(a))>=20}return!1})),no0Usd:t.d().required("Required").test("usdAmount","Usd amount must be higher than 0",(function(e){if(e){var a=e;return(a=parseFloat(a))>0}return!1})),generic:t.h().max(64,"Too Long!").required("Required"),boolean:t.b().oneOf([!0],"Field must be checked"),onlyNumber:t.d().required("Required").test("onlyNumber","Field must be a number",(function(e){return!!e&&/^\d+$/.test(e)})),isColor:t.d().required("Required").test("color","Field must be a valid color format. Examples. RGBA: rgba(0, 0, 0, 1), HEXA: #000000, RGB: rgb(0,0,0), Color: red",(function(e){if(e){var a=(new Option).style;return a.color=e,""!==a.color}return!1})),number:t.e().required("Required"),array:t.a().required("Required"),validateIsNotCurrentUser:function(e,a){return t.d().required("Required").test("validUserName","You can not add yourself",(function(a){return!!a&&(a!==e.userName&&a!==e.userMail)})).test("validateIsNotExistingMember","You can not add existing members",(function(e){if(e){for(var r=!0,t=0;t<a.length;t++){var s=a[t],n=s.userName,i=s.userMail;if(e===n||e===i){r=!1;break}}return r}return!1}))}}},929:function(e,a,r){"use strict";r.d(a,"a",(function(){return h})),r.d(a,"b",(function(){return f}));var t=r(29),s=r(249),n=(r(1),r(1139)),i=r(1144),o=r(1127),u=r(1142),d=r(1136),l=r(5),c=["field","form","hasFeedback","label","selectOptions","submitCount","type"],m=n.a.Item,p=i.a.Option,b=function(e){return function(a){var r=a.field,n=a.form,i=a.hasFeedback,o=a.label,u=a.selectOptions,d=a.submitCount,b=a.type,h=Object(s.a)(a,c),f=n.touched[r.name],j=d>0,x=n.errors[r.name],v=x&&j,g=x&&f;return Object(l.jsx)(m,{label:o,hasFeedback:i&&j||i&&f,help:!(!v&&!g)&&x,validateStatus:v||g?"error":"success",children:Object(l.jsx)(e,Object(t.a)(Object(t.a)(Object(t.a)({},r),h),{},{onBlur:function(){return n.setFieldTouched(r.name,!0)},onChange:b?function(e){var a=e.target.value;return n.setFieldValue(r.name,a)}:function(e){return n.setFieldValue(r.name,e)},children:u&&u.map((function(e){return Object(l.jsx)(p,{children:e},e)}))}))})}},h=(b(i.a),b(o.a),b(u.a)),f=b(u.a.Password);b(d.a)}}]);
//# sourceMappingURL=12.ec965087.chunk.js.map