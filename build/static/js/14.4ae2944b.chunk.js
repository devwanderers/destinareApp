(this.webpackJsonpswapp=this.webpackJsonpswapp||[]).push([[14],{1007:function(e,t,n){"use strict";var a=n(13),r=n(1);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,s=Object(r.useState)(e),i=Object(a.a)(s,2),c=i[0],l=i[1];return console.log(e),{value:c,setValue:l,reset:function(){return l(e)},bind:{value:c,onChange:function(e){var a=e.target.value;("function"===typeof t&&t(e.target.value)||"function"!==typeof t)&&("function"===typeof n&&(a=n(a)),l(a))}}}}},1008:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(971),r=RegExp("^\\d*(?:\\\\[.])?\\d*$"),s=function(e){return!(""!==e&&!r.test(Object(a.b)(e)))},i=function(e){return function(t){return!!(""===t||t&&parseFloat(t.replace(/,/g,""))>=e)}},c=function(e){return function(t){return!!(""===t||t&&parseFloat(t.replace(/,/g,""))<=e)}}},1009:function(e,t,n){"use strict";n(1);var a=n(292),r=n(115),s=n(299),i=n(971),c=n(9);t.a=function(){var e=Object(a.a)().reloadData,t=Object(r.b)().fetching;return Object(c.jsx)("button",{disabled:t,className:"flex items-start justify-center",onClick:function(){e(!0)},children:Object(c.jsx)("div",{className:"h-8 w-8 lg:h-9 lg:w-9",children:Object(c.jsx)(s.a,{className:Object(i.a)("".concat(t&&"animate-spin")),size:"100%"})})})}},489:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(13),i=n(1202);var c=n(1199),l=n(158),o=n(9),d=c.a.Countdown;function x(){console.log("finished!")}var b=function(e){var t=e.value,n=e.size,a=void 0===n?"1.1rem":n,r=e.color,s=void 0===r?"#fff":r;return Object(o.jsxs)("div",{className:"flex flex-row justify-center items-center bg-benefits-blue-1 text-white px-3 border rounded-xl font-bold text-sm py-1",children:[Object(o.jsx)(l.e,{className:"mr-1",size:a,color:s}),Object(o.jsx)(d,{className:"text-xxs",value:t,format:"DD:HH:mm:ss",valueStyle:{fontSize:a,color:s,lineHeight:0},onFinish:x})]})},u=n(6),j=n(1201),m=n(990),f=n(209),p=n(1007),g=n(979),O=n(972),h=n(1008),v=n(1185),y=n.n(v),w=Object(h.b)(0),N=function(e){return y()({})(e,{})},k=function(e){if(""===e)return"0";var t=e.replace(/,/g,"");return t.includes(".")?(t=t.split("."),"".concat(N(parseInt(t[0])),".").concat(t[1])):N(parseInt(t))},S=function(e){var t=e.index,n=e.title,r=e.visibleModal,i=e.onCloseModal,c=e.deposit,l=e.userTokens,d=e.loadingStaking;l/=1e18;var x=Math.floor(l),b=Object(h.a)(x),f=Object(p.a)("0",(function(e){return w(e)&&b(e)&&Object(h.c)(e.replace(/,/g,""))}),k),v=f.value,y=f.bind,S=f.setValue,D=f.reset,z=Object(m.a)({base:"100%",md:"70%",lg:"50%",xl:"30%"}),T=Object(s.a)(z,1)[0];return Object(a.useEffect)((function(){r&&D()}),[r]),Object(o.jsx)(j.a,{title:n,visible:r,onCancel:i,width:T,maskClosable:!1,footer:null,children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"mb-2",children:[Object(o.jsxs)("div",{className:"flex justify-between items-center",children:[Object(o.jsx)("p",{className:"font-bold text-base",children:"Stake"}),Object(o.jsxs)("p",{className:"font-bold text-base",children:["Balance:"," ",Object(o.jsx)("span",{className:"font-normal",children:k(l.toString())})]})]}),Object(o.jsxs)("div",{className:"flex justify-between items-center",children:[Object(o.jsxs)("div",{className:"  flex flex-row items-start",children:[Object(o.jsx)("div",{className:"mr-2",children:Object(o.jsx)(g.a,Object(u.a)({variant:"secondary",className:"mr-2 w-full",onBlur:function(){S(function(e){if(console.log("entro"),""===e)return"0";var t=e.replace(/,/g,"");return t.includes(".")?(t=t.split("."),"".concat(N(parseInt(t[0])),".").concat(""!==t[1]?t[1]:"0")):N(parseInt(t))}(v))}},y))}),Object(o.jsx)("button",{type:"button",className:"disabled:opacity-50 bg-primary rounded-md py-1 px-3 text-white text-base font-bold",onClick:function(){S(k(x.toString()))},children:"MAX"})]}),Object(o.jsx)("p",{className:"text-2xl font-bold",children:"DDOT"})]})]}),Object(o.jsx)("div",{className:"mt-8",children:Object(o.jsxs)("div",{className:"flex justify-around items-center mb-5",children:[Object(o.jsx)(O.a,{size:"none",variant:"primaryborder",className:"py-1 px-10 text-lg font-bold",disabled:d,onClick:function(){i()},children:"Cancel"}),Object(o.jsx)(O.a,{size:"none",className:"py-1 px-10 text-lg font-bold",disabled:d||Number(v)<=0,loading:d,onClick:function(){c(Number(v.replace(/,/g,"")),t)},children:"Confirm"})]})})]})})},D=n(33),z=n(72),T=n(1198),I=n(1206),C=n(211);var R=n(292),M=n(16),_=n(936),A=n(983),F=["loading","disabled","textLoading","children"],L=Object(o.jsx)(A.a,{className:" text-white",style:{fontSize:24},spin:!0}),P=function(e){var t=e.loading,n=e.disabled,a=e.textLoading,s=e.children,i=Object(M.a)(e,F);return Object(o.jsx)("button",Object(u.a)(Object(u.a)({className:" bg-primary text-lg px-12 py-2 rounded-md text-white disabled:opacity-50",disabled:n},i),{},{children:t?Object(o.jsxs)("span",{children:[Object(o.jsx)("span",{className:"pr-2",children:Object(o.jsx)(_.a,{indicator:L})}),a]}):Object(o.jsxs)(r.a.Fragment,{children:[" ",s]})}))},B=n(971),E=[{title:"Deposit date",dataIndex:"deposit_date",key:"deposit_date",ellipsis:!0},{title:"Deposit amount",dataIndex:"deposit_amount",key:"deposit_amount",ellipsis:!0},{title:"Reward",dataIndex:"reward",key:"reward",ellipsis:!0},{title:"Staking Duration",dataIndex:"lock_duration",key:"lock_duration",ellipsis:!0},{title:"",dataIndex:"unStake",key:"unStake",ellipsis:!0}],H=function(){return Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)(I.a,{style:{fontSize:40}}),Object(o.jsx)("p",{children:"No Data"})]})},$=function(e){var t,n=e.item,r=e.lockDuration,i=Object(R.a)().getReward,c=Object(a.useState)(!1),l=Object(s.a)(c,2),d=l[0],x=l[1],b=Object(a.useState)(!1),u=Object(s.a)(b,2),j=u[0],m=u[1],f=function(){var e=new Date,t=new Date(r);m(e.getTime()>t.getTime())};t=function(){f()},Object(a.useEffect)(t,[]),Object(C.a)((function(){f()}),j?null:500);return Object(o.jsx)("div",{className:"flex w-full",children:Object(o.jsx)(P,{onClick:function(){x(!0),i(n,(function(e){null!==e&&void 0!==e&&e.err&&console.log(e),x(!1)}))},className:"disabled:opacity-50 bg-primary border-solid border border-primary rounded-md py-1 w-full md:w-8/12 text-white text-lg font-bold mx-auto",disabled:!j||d,loading:d,children:"Unstake"})})},J=function(e){var t=e.stake,n=e.lokedTime,a=e.isStakeholder,r=e.userStakes,i=e.getReward,c=e.isDarkMode,l=Object(m.a)({base:150,md:"100%"}),d=Object(s.a)(l,1)[0],x=r.reduce((function(e,a,r){if(Number(a.type)===t&&null!=a.reward){var s=new Date(1e3*a.stakeTime).toLocaleString("en-GB"),c=a.tokensLocked/1e18,l=(Number(a.reward)-Number(a.tokensLocked))/1e18,d=Number(a.stakeTime)+Number(n);return console.log({item:a}),d*=1e3,[].concat(Object(D.a)(e),[{key:r,deposit_date:s,deposit_amount:Object(f.a)(c,0),reward:Object(f.a)(l,2),lock_duration:Object(o.jsx)(b,{value:d,size:"1rem",color:"white"}),width:100,unStake:Object(o.jsx)($,{item:r,getReward:i,lockDuration:d})}])}return e}),[]);return Object(o.jsx)("div",{className:"table-info overflow-y-auto ",children:a&&Object(o.jsx)(z.a,{renderEmpty:H,children:Object(o.jsx)(T.a,{pagination:!1,columns:E.reduce((function(e,t){return[].concat(Object(D.a)(e),[Object(u.a)(Object(u.a)({},t),{},{width:d})])}),[]),dataSource:x,className:Object(B.a)("".concat(c&&"ant-table-wrapper-dark")),bordered:!0,scroll:{x:"100%"}})})})},U=n(215),V=n(1032),Y=n(115),G=n(294),X=n(163),q=n(988),K=i.a.Panel,Q=function(e){var t=e.info,n=t.APR,a=t.lockedTime,r=t.totalDeposit,s=t.active;r/=1e18;var i=a*(1/86400);Date.now();return Object(o.jsxs)("div",{className:"w-full flex flex-row justify-between items-center py-2",children:[Object(o.jsxs)("div",{className:" flex flex-row text-gray-13 dark:text-white items-center leading-none",children:[Object(o.jsx)(V.e,{className:"w-9 mr-2 "}),Object(o.jsx)("span",{className:"font-bold text-sm md:text-lg ",children:"DDOT"})]}),Object(o.jsxs)("div",{className:" text-gray-13 dark:text-white  text-center flex flex-row items-center leading-none",children:[Object(o.jsx)("div",{className:"font-light text-sm md:text-sm mr-1",children:"APR:"}),Object(o.jsxs)("div",{className:"font-bold text-xxs md:text-base",children:[n,"%"]})]}),Object(o.jsxs)("div",{className:" text-gray-13 dark:text-white text-center flex flex-row items-center leading-none",children:[Object(o.jsx)("div",{className:"font-light text-xs md:text-sm mr-1",children:"Total deposit:"}),Object(o.jsx)("div",{className:"font-bold text-xxs md:text-base",children:Object(f.a)(r,0)})]}),Object(o.jsxs)("div",{className:" text-gray-13 dark:text-white text-center flex flex-row items-center leading-none",children:[Object(o.jsx)("div",{className:"font-light text-xs md:text-sm mr-1 ",children:"Duration:"}),Object(o.jsxs)("div",{className:"font-bold text-xxs md:text-base ",children:[Math.ceil(i)," days"]})]}),Object(o.jsx)("div",{className:" flex flex-row justify-center items-center leading-none",children:!s&&Object(o.jsx)("div",{className:"bg-red-300 text-red-0 text-center rounded-md px-3 py-1  mx-auto font-medium text-xs md:text-sm ",children:"Inactive"})})]})},W=function(e){var t=e.info,n=t.APR,a=t.lockedTime,r=t.totalDeposit,s=t.active;r/=1e18;var i=a*(1/86400),c=Date.now()+1728e5+3e4;return Object(o.jsxs)("div",{className:"w-full py-2",children:[Object(o.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(o.jsxs)("div",{className:" flex flex-row text-gray-13 dark:text-white items-center leading-none",children:[Object(o.jsx)(V.e,{className:"w-9 mr-2 "}),Object(o.jsx)("span",{className:"font-bold text-sm ",children:"DDOT"})]})," ",Object(o.jsxs)("div",{className:" flex flex-row justify-center items-center leading-none",children:[Object(o.jsx)("div",{className:"font-light text-xs text-gray-13 dark:text-white text-center mr-1",children:"Contract end time:"}),Object(o.jsx)("div",{className:"font-medium text-xs flex",children:s?Object(o.jsx)(b,{value:c,size:"1rem",color:"white"}):Object(o.jsx)("div",{className:"bg-red-1 text-red-0 text-center font-medium rounded-md px-3 py-2  mx-auto",children:"Inactive"})})]})]}),Object(o.jsxs)("div",{className:" flex flex-row justify-between mt-4",children:[Object(o.jsxs)("div",{className:" text-gray-13 dark:text-white  text-center flex flex-row items-center leading-none",children:[Object(o.jsx)("div",{className:"font-light text-xs  mr-1",children:"APR:"}),Object(o.jsxs)("div",{className:"font-bold text-sm ",children:[n,"%"]})]}),Object(o.jsxs)("div",{className:" text-gray-13 dark:text-white text-center flex flex-row items-center leading-none",children:[Object(o.jsx)("div",{className:"font-light text-xs  mr-1",children:"Total deposit:"}),Object(o.jsx)("div",{className:"font-bold text-sm",children:Object(f.a)(r,0)})]}),Object(o.jsxs)("div",{className:" text-gray-13 dark:text-white text-center flex flex-row items-center leading-none",children:[Object(o.jsx)("div",{className:"font-light text-xs mr-1",children:"Duration:"}),Object(o.jsxs)("div",{className:"font-bold text-sm",children:[i," days"]})]})]})]})},Z=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),d=Object(s.a)(l,2),x=d[0],b=d[1],u=Object(a.useState)(0),j=Object(s.a)(u,2),m=j[0],f=j[1],p=Object(G.a)().width,g=Object(Y.b)().data,O=Object(R.a)().createStake,h=Object(X.a)("theme"),v="dark"===Object(s.a)(h,1)[0],y=g.contractStakes,w=g.userStakes,N=g.userTokens,k=g.isStakeholder,D=g.totalUserStakes,z=function(e){b(!x),f(e)};return!y||y&&0===y.length?Object(o.jsxs)("div",{className:"flex flex-col justify-center items-center flex-grow opacity-75",children:[Object(o.jsx)("img",{className:" w-80 h-auto",src:q.a.wallet,alt:q.a.wallet}),Object(o.jsx)("p",{className:"text-xl mt-8 font-medium",children:"In order to stake your wallet should"}),Object(o.jsxs)("p",{className:"text-xl font-medium",children:["be connected to"," ",Object(o.jsx)("span",{className:"text-orange-2",children:"Destinare"})]})]}):Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(S,{loadingStaking:n,index:m,title:"Stake tokens",visibleModal:x,onCloseModal:z,deposit:function(e,t){c(!0);var n=function(e){var t=0;if(e<1e3)t=1e18*e;else{e*=1e18;var n=parseInt(e.toString().split("+")[1]);n-=20,e/=Math.pow(10,n),t=e+=new Array(n+1).join("0")}return t.toString()}(e);O(n,t,(function(e){null!==e&&void 0!==e&&e.err&&console.log(e),c(!1),b(!x)}))},userTokens:N}),y.map((function(e,t){return Object(o.jsx)(i.a,{bordered:!1,expandIcon:function(e){var t=e.isActive;return Object(o.jsx)(U.a,{className:"text-gray-13 dark:text-white",rotate:t?90:0})},expandIconPosition:"right",className:"mb-3 rounded-xl dark:bg-gray-4",children:Object(o.jsx)(K,{header:p>425?Object(o.jsx)(Q,{info:e}):Object(o.jsx)(W,{info:e}),children:Object(o.jsxs)("div",{className:"text-gray-13 dark:text-white border-t dark:border-gray-1 pt-4",children:[Object(o.jsx)("div",{className:"button-section text-right mb-4",children:D>=5?Object(o.jsx)("div",{className:"alert alert-info",role:"alert",children:"You only can have 5 stakes"}):Object(o.jsx)(o.Fragment,{children:N>0?Object(o.jsx)("button",{onClick:function(){return z(t)},className:"disabled:opacity-50 bg-primary text-white font-semibold border-none text-base px-6 py-2 rounded-md",disabled:!e.active,children:"Deposit"}):Object(o.jsx)("p",{children:"You need tokens to continue"})})}),Object(o.jsx)(J,{stake:t,lokedTime:e.lockedTime,isStakeholder:k,userStakes:w,isDarkMode:v})]})},t)},t)}))]})},ee=n(1009);t.default=function(e){return Object(o.jsx)("div",{className:"mx-5 ",style:{height:"100%"},children:Object(o.jsxs)("div",{className:"max-w-1650px mx-auto h-full flex flex-col pb-8",children:[Object(o.jsx)("div",{className:"mb-6 mt-4 flex justify-end",children:Object(o.jsx)(ee.a,{})}),Object(o.jsx)(Z,{})]})})}},971:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(e){return e.replace(/\s+/gm," ").split(" ").filter((function(e){return"string"===typeof e&&"undefined"!==e})).join(" ").trim()},r=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}},972:function(e,t,n){"use strict";var a=n(6),r=n(16),s=n(1),i=n(158),c=n(971),l=n(9),o=["children","className","loading","disabled","type","size","variant","pill","spinnerSize"],d={base:"inline-flex items-center justify-center focus:outline-none transition ease-in-out duration-300 rounded-md gap-2",disabled:"opacity-50 cursor-not-allowed",pill:"rounded-full",size:{none:"",small:"px-2 py-1 text-sm",normal:"px-4 py-2",large:"px-8 py-3 text-lg"},variant:{primary:"bg-primary hover:bg-blue-green-2 focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-white",secondary:"bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",danger:"bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",primaryborder:"border-primary border hover:bg-blue-green-2 focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-primary",warning:"bg-yellow-600 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 text-white",warningLink:"bg-transparent hover:bg-gray-100 border border-yellow-600 focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 text-yellow-600"},spinnerSize:{small:"text-xl",normal:"text-2xl",large:"text-3xl"}},x=Object(s.forwardRef)((function(e,t){var n=e.children,s=e.className,x=e.loading,b=void 0!==x&&x,u=e.disabled,j=e.type,m=void 0===j?"button":j,f=e.size,p=void 0===f?"small":f,g=e.variant,O=void 0===g?"primary":g,h=e.pill,v=e.spinnerSize,y=void 0===v?"normal":v,w=Object(r.a)(e,o);return Object(l.jsxs)("button",Object(a.a)(Object(a.a)({ref:t,disabled:u,type:m,className:Object(c.a)("\n                ".concat(d.base,"\n                ").concat(d.size[p],"\n                ").concat(d.variant[O],"\n                ").concat(h&&d.pill,"\n                ").concat(u&&d.disabled,"\n                ").concat(s,"\n            "))},w),{},{children:[b&&Object(l.jsx)(i.g,{className:Object(c.a)("animate-spin ".concat(d.spinnerSize[y]))}),n]}))}));x.displayName="ButtonSpinner",t.a=x},979:function(e,t,n){"use strict";var a=n(6),r=n(16),s=n(1),i=n(971),c=n(9),l=["className","disabled","type","size","variant","rounded"],o={base:"focus:outline-none transition ease-in-out duration-300 px-1",disabled:"opacity-50 cursor-not-allowed",size:{small:"px-3 py-1 text-sm",normal:"px-3 py-2",large:"px-3 py-3 text-lg"},variant:{primary:"border border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50",secondary:"border border-light-4 focus:ring-2 focus:ring-light-4 focus:ring-opacity-50",danger:"border border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"},rounded:{none:"rounded-none",small:"rounded-sm",medium:"rounded-md",large:"rounded-lg",xl:"rounded-xl"}},d=Object(s.forwardRef)((function(e,t){var n=e.className,s=e.disabled,d=e.type,x=void 0===d?"text":d,b=e.size,u=void 0===b?"small":b,j=e.variant,m=void 0===j?"primary":j,f=e.rounded,p=void 0===f?"none":f,g=Object(r.a)(e,l);return Object(c.jsx)("input",Object(a.a)({ref:t,disabled:s,type:x,className:Object(i.a)("\n                ".concat(o.base,"\n                ").concat(o.size[u],"\n                ").concat(o.variant[m],"\n                ").concat(o.rounded[p],"\n                ").concat(s&&o.disabled,"\n                ").concat(n,"\n            "))},g))}));d.displayName="Input",t.a=d},988:function(e,t,n){"use strict";var a={wallet:n.p+"static/media/wallet2.c6e6fab9.png"};t.a=a},990:function(e,t,n){"use strict";var a=n(13),r=n(1),s=n(294),i=n(291),c=function(e){for(var t=0;t<e.length;t++)if("undefined"!==typeof e[t])return e[t]};t.a=function(e){var t=e.xxl,n=e.xl,l=e.lg,o=e.md,d=e.sm,x=e.base,b=Object(r.useState)((function(){return c([t,n,l,o,d,x])})),u=Object(a.a)(b,2),j=u[0],m=u[1],f=Object(s.a)().width;return Object(i.a)((function(){m(f>=1536?c([t,n,l,o,d,x]):f>=1280?c([n,l,o,d,x]):f>=1024?c([l,o,d,x]):f>=768?c([o,d,x]):f>=640?c([d,x]):x)}),[f]),[j]}}}]);
//# sourceMappingURL=14.4ae2944b.chunk.js.map