(this.webpackJsonpswapp=this.webpackJsonpswapp||[]).push([[11],{493:function(e,r,t){"use strict";t.r(r);var a=t(1),n=t.n(a),i=t(1007),s=t(1207),o=t(1199),u=t(989),d=t(1209),l=t(1191),c=t(985),m=t(35),p=t(987),h=t(988),b=t(68),f=t(13),j=c.f({emailOrUsername:p.a.generic,password:p.a.generic}),x={emailOrUsername:"",password:""};r.default=function(e){var r=e.onSubmit,t=e.showError,a=e.errorMessage,c=Object(m.f)();return Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)("div",{className:"font-medium mb-2",children:"Log in"}),Object(f.jsx)(i.c,{validationSchema:j,initialValues:x,onSubmit:r,children:function(e){var r=e.isSubmitting,n=e.values;return Object(f.jsxs)(i.b,{className:"mb-4",children:[Object(f.jsx)(i.a,{component:h.a,name:"emailOrUsername",type:"email",placeholder:"Email",className:"h-12 rounded-lg",hasFeedback:!0,value:null===n||void 0===n?void 0:n.emailOrUsername}),Object(f.jsx)(i.a,{component:h.b,name:"password",type:"password",placeholder:"Password",className:"h-12 rounded-lg",hasFeedback:!0,iconRender:function(e){return e?Object(f.jsx)(d.a,{}):Object(f.jsx)(l.a,{})},value:null===n||void 0===n?void 0:n.password}),t&&Object(f.jsx)(s.a,{className:"mb-5",message:a,type:"error",showIcon:!0}),Object(f.jsx)(o.a.Item,{className:"mb-0",children:Object(f.jsx)(u.a,{block:!0,type:"primary",htmlType:"submit",className:"text-sm px-4 py-2 py h-12 rounded-full font-medium",loading:r,style:{paddingTop:"9px",paddingBottom:"9px"},children:"LOGIN"})}),Object(f.jsxs)("div",{className:"login-links flex flex-col text-center",children:[Object(f.jsx)("a",{type:"link",className:"text-sm h-auto py-0 text-gray-9 hover:text-info",children:"Forgot password?"}),Object(f.jsxs)("span",{className:"text-gray-9 text-sm h-auto py-0 relative",style:{top:"-7px"},children:["Don't have an account? ",Object(f.jsx)("a",{className:"font-medium text-blue-900 hover:text-info",href:"#",onClick:function(e){e.preventDefault(),c.push(b.d)},children:"Sign up"})]})]})]})}}),!t&&Object(f.jsx)("div",{className:"h-40px mb-5"})]})}},987:function(e,r,t){"use strict";t.d(r,"a",(function(){return l}));var a=t(985),n=t(1014),i=t.n(n),s=["image/jpg","image/jpeg","image/png"],o=/[A-Z]/,u=/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,d=/^[0-9]{5}$/,l={password:a.h().min(8,"Too Short!").max(64,"Too Long!").matches(o,"Must contain al least one uppercase letter.").required("Required"),passwordConfirmation:a.h().oneOf([a.g("password"),null],"Passwords must match").required("Required"),userName:a.h().min(3,"Too Short!").max(64,"Too Long!").test("alphaNumeric","Must contain only letters and numbers.",(function(e){return e&&i.a.isAlphanumeric(e)})).required("Required"),mail:a.h().max(64,"Too Long!").email("Must be a valid email format. example@email.com").lowercase("Must contain only lower case").required("Required"),phone:a.h().matches(u,"Must be a valid phone number.").required("Required"),name:a.h().min(3,"Too Short!").max(30,"Too Long!").test("alpha","Must contain only letters.",(function(e){return!e||e&&i.a.isAlpha(e.replace(" ",""))})),birthDate:a.c().required("Required"),country:a.h().required("Required"),state:a.h().required("Required"),city:a.h().required("Required"),line:a.h().required("Required"),postalCode:a.h().matches(d,"Must be exactly 5 digits").required("Required"),file:a.d().required("A file is required").test("fileSize","File too large",(function(e){return e&&e[0].size<=102400})).test("fileFormat","Unsupported Format",(function(e){return e&&s.includes(e[0].type)})).required("Required"),min20Usd:a.d().required("Required").test("usdAmount","Minimum to invest is 20 USD",(function(e){if(e){var r=e;return r=r.replace(/\D/g,""),(r=parseFloat(r))>=20}return!1})),no0Usd:a.d().required("Required").test("usdAmount","Usd amount must be higher than 0",(function(e){if(e){var r=e;return(r=parseFloat(r))>0}return!1})),generic:a.h().max(64,"Too Long!").required("Required"),boolean:a.b().oneOf([!0],"Field must be checked"),onlyNumber:a.d().required("Required").test("onlyNumber","Field must be a number",(function(e){return!!e&&/^\d+$/.test(e)})),isColor:a.d().required("Required").test("color","Field must be a valid color format. Examples. RGBA: rgba(0, 0, 0, 1), HEXA: #000000, RGB: rgb(0,0,0), Color: red",(function(e){if(e){var r=(new Option).style;return r.color=e,""!==r.color}return!1})),number:a.e().required("Required"),array:a.a().required("Required"),validateIsNotCurrentUser:function(e,r){return a.d().required("Required").test("validUserName","You can not add yourself",(function(r){return!!r&&(r!==e.userName&&r!==e.userMail)})).test("validateIsNotExistingMember","You can not add existing members",(function(e){if(e){for(var t=!0,a=0;a<r.length;a++){var n=r[a],i=n.userName,s=n.userMail;if(e===i||e===s){t=!1;break}}return t}return!1}))}}},988:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var a=t(30),n=t(165),i=(t(1),t(1199)),s=t(1064),o=t(1185),u=t(1202),d=t(1195),l=t(13),c=["field","form","hasFeedback","label","selectOptions","submitCount","type"],m=i.a.Item,p=s.a.Option,h=function(e){return function(r){var t=r.field,i=r.form,s=r.hasFeedback,o=r.label,u=r.selectOptions,d=r.submitCount,h=r.type,b=Object(n.a)(r,c),f=i.touched[t.name],j=d>0,x=i.errors[t.name],q=x&&j,g=x&&f;return Object(l.jsx)(m,{label:o,hasFeedback:s&&j||s&&f,help:!(!q&&!g)&&x,validateStatus:q||g?"error":"success",children:Object(l.jsx)(e,Object(a.a)(Object(a.a)(Object(a.a)({},t),b),{},{onBlur:function(){return i.setFieldTouched(t.name,!0)},onChange:h?function(e){var r=e.target.value;return i.setFieldValue(t.name,r)}:function(e){return i.setFieldValue(t.name,e)},children:u&&u.map((function(e){return Object(l.jsx)(p,{children:e},e)}))}))})}},b=(h(s.a),h(o.a),h(u.a)),f=h(u.a.Password);h(d.a)}}]);
//# sourceMappingURL=11.4441cac5.chunk.js.map