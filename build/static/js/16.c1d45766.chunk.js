(this.webpackJsonpswapp=this.webpackJsonpswapp||[]).push([[16],{435:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),l=a(1125),c=a(1124),x=a(22),i=a(1143),d=a(1010),n=a(253),j=a(1127),b=a(116),o=a.n(b),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=Object(s.useState)(!1),r=Object(x.a)(a,2),l=r[0],c=r[1],i=Object(s.useState)(null),d=Object(x.a)(i,2),n=d[0],j=d[1];return Object(s.useEffect)((function(){var a;return l||(c(!0),a=setInterval((function(){var t=o.a.get(e);t&&t!==n&&j(t)}),t)),function(){a&&clearInterval(a)}}),[]),[n]},g=a(404);var h=a(168),O=a(5),f=function(e){var t,a,r=e.date,l=e.day,c=e.totalUser,b=e.totalEther,o=e.currentUser,f=0===o?0:o/b*100,y=m("theme"),p="dark"===Object(x.a)(y,1)[0],v=Object(s.useRef)(null),u=Object(s.useState)(!1),N=Object(x.a)(u,2),w=N[0],k=N[1];t=v,a=function(){k(!1)},Object(g.a)("click",(function(e){null==t.current||t.current.contains(e.target)||a(e)}),document);return Object(O.jsxs)("div",{ref:v,className:"bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 py-5 px-4 rounded-xl relative overflow-hidden dark:overflow-visible",children:[Object(O.jsx)("div",{className:"absolute top-0 right-0 pt-5 pr-4",children:Object(O.jsx)("span",{className:"text-green-1 text-3xl",children:Object(O.jsx)(d.a,{})})}),Object(O.jsxs)("div",{className:"border-b border-gray-7 text-gray-10 dark:text-white flex flex-col pb-3 mt-10 xs:mt-0",children:[Object(O.jsxs)("div",{className:"text-3xl leading-none",children:[Object(O.jsx)("div",{}),Object(O.jsx)("span",{children:Object(O.jsx)("strong",{children:"833,333"})}),Object(O.jsx)("span",{className:"text-primary",children:"\xa0Destinare"})]}),Object(O.jsx)("div",{className:"flex flex-row my-2",children:Object(O.jsxs)("p",{className:"text-gray-10 dark:text-white text-lg",children:["Day ",l," (UTC)",Object(O.jsx)("span",{className:"text-gray-5 pl-3",children:r})]})})]}),Object(O.jsxs)("div",{className:"border-b border-gray-7 flex flex-row justify-between py-3 text-lg text-gray-5",children:[Object(O.jsxs)("div",{className:"flex flex-row",children:[Object(O.jsx)("div",{className:"relative pl-2 pr-4",style:{top:"2px"},children:Object(O.jsx)(d.d,{})}),"Contributions"]}),Object(O.jsx)("div",{className:"font-medium text-gray-10 dark:text-white",children:c})]}),Object(O.jsxs)("div",{className:"border-b border-gray-7 flex flex-row justify-between py-3 text-lg text-gray-5",children:[Object(O.jsxs)("div",{className:"flex flex-row",children:[Object(O.jsx)("div",{className:"relative pl-2 pr-4",style:{top:"2px"},children:Object(O.jsx)(n.d,{})}),"Total Ether"]}),Object(O.jsxs)("div",{className:"font-medium text-gray-10 dark:text-white",children:[Object(h.a)(b,2)," ETH"]})]}),Object(O.jsxs)("div",{className:"flex justify-center text-gray-5 text-lg mb-10 pt-8",children:[Object(O.jsx)("div",{className:"relative mr-2",style:{top:"2px"},children:Object(O.jsx)(j.a,{})}),Object(O.jsx)("span",{className:"",children:"Day is close"})]}),Object(O.jsx)("div",{className:"flex-grow flex justify-end",children:Object(O.jsxs)("div",{className:"cursor-pointer flex flex-row text-blue-600 text-lg",onClick:function(){k(!w)},children:["Show details",Object(O.jsx)("div",{className:"relative ml-2 mt-1",children:w?Object(O.jsx)(n.c,{}):Object(O.jsx)(n.b,{})})]})}),w&&Object(O.jsxs)("div",{className:"dark:border-t-4 border-t dark:border-blue-1 border-gray-11 -mx-18px px-4 mt-3 pt-3",children:[Object(O.jsx)("div",{className:"mb-5 ",children:Object(O.jsx)(i.a,{percent:f,showInfo:!1,trailColor:p?"#fff":"#c9c9c9"})}),Object(O.jsxs)("div",{className:"flex flex-row justify-between leading-none",children:[Object(O.jsxs)("div",{className:"flex flex-col",children:[Object(O.jsx)("div",{className:"text-gray-5 mb-2",children:"Your share"}),Object(O.jsxs)("div",{className:"text-gray-10 dark:text-white text-xl",children:[f.toFixed(2)," %"]})]}),Object(O.jsxs)("div",{className:"flex flex-col items-end",children:[Object(O.jsx)("div",{className:"text-gray-5 text-end mb-2",children:"Total Ether"}),Object(O.jsxs)("div",{className:"text-gray-10 dark:text-white text-xl",children:[Number(b).toFixed(2)," ETH"]})]})]})]})]})},y=a(43),p=a(1149),v=a(1141),u=a(251),N=function(e){var t=e.initDate,a=Object(s.useState)(1),r=Object(x.a)(a,2),l=r[0],c=r[1],d=Object(u.a)(),n=d.data,j=d.reserveToken,b=Object(y.c)().account,o=m("theme"),g="dark"===Object(x.a)(o,1)[0],f=new Date(t),N=new Date,w=N.getDate()-f.getDate(),k=n.getPresaleInfo[0].length>0?n.getPresaleInfo[0][w]:0,D=n.getPresaleInfo[1].length>0?n.getPresaleInfo[1][w]/1e18:0,T=n.getUserInfo.length>0?n.getUserInfo[w]/1e18:0,C=0===Number(T)?0:Number(T)/Number(D)*100;return Object(O.jsxs)("div",{className:"bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 py-6 px-8 rounded-xl relative",children:[Object(O.jsx)("div",{className:"mb-0 lg:mb-3",children:Object(O.jsxs)("div",{className:"text-gray-10 dark:text-white flex flex-col",children:[Object(O.jsxs)("div",{className:"text-3xl leading-none",children:[Object(O.jsx)("span",{className:"text-primary",children:"Daily\xa0"}),Object(O.jsx)("span",{children:"reservation"})]}),Object(O.jsx)("div",{className:"flex flex-row my-2",children:Object(O.jsxs)("p",{className:"text-gray-10 dark:text-white text-lg",children:["Day ",w+1," (UTC)",Object(O.jsxs)("span",{className:"text-gray-5 pl-3",children:[" ",N.getUTCDate(),"/",N.getUTCMonth()+1,"/",N.getUTCFullYear()]})]})})]})}),Object(O.jsxs)("div",{className:"flex flex-col lg:flex-row divide-x-0 divide-y lg:divide-x lg:divide-y-0",children:[Object(O.jsx)("div",{className:"flex-grow py-5 pr-0 lg:py-0 lg:pr-8 xl:pr-16",children:Object(O.jsxs)("div",{className:"flex flex-col",children:[Object(O.jsx)("div",{className:"text-gray-10 dark:text-white text-3xl mb-2 leading-none font-semibold text-center lg:text-left",children:"833,333"}),Object(O.jsx)("div",{className:"text-gray-10 dark:text-white leading-none text-2xl mb-2 text-center lg:text-left",children:"Destinare token"}),Object(O.jsx)("div",{className:"input-amount text-center",children:Object(O.jsxs)(p.b,{children:[Object(O.jsx)(v.a,{min:1,max:999,defaultValue:1,onChange:function(e){return c(e)}}),Object(O.jsx)("span",{className:"text-gray-10 dark:text-white text-2xl",children:"ETH"})]})}),Object(O.jsx)("div",{children:b?Object(O.jsx)("button",{className:"bg-primary rounded-md py-4px px-1 text-white text-lg w-full",style:{paddingTop:"6px",paddingBottom:"6px"},onClick:function(){return j(l)},children:"Reserve Destinare token"}):Object(O.jsx)("button",{className:"disabled:opacity-50 bg-primary rounded-md py-4px px-1 text-white text-lg w-full",style:{paddingTop:"6px",paddingBottom:"6px"},disabled:!0,children:"Reserve Destinare token"})})]})}),Object(O.jsx)("div",{className:"flex flex-shrink w-full lg:w-4/6 px-0 py-5 lg:py-0 lg:pl-5 lg:pr-5 xl:pl-10",children:Object(O.jsxs)("div",{className:"flex-1 flex flex-col justify-between ",children:[Object(O.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap lg:flex-row justify-center md:justify-between",children:[Object(O.jsxs)("div",{className:"text-center py-2 md:py-0",children:[Object(O.jsx)("div",{className:"text-gray-5 text-md px-5 md:p-0",children:"Total contributions"}),Object(O.jsx)("div",{className:"text-gray-10 dark:text-white text-lg",children:Object(h.a)(k,0)})]}),Object(O.jsxs)("div",{className:"text-center py-2 md:py-0",children:[Object(O.jsx)("div",{className:"text-gray-5 text-md px-5 md:p-0",children:"Total Ether"}),Object(O.jsxs)("div",{className:"text-gray-10 dark:text-white text-lg",children:[Object(h.a)(D,2)," ETH"]})]}),Object(O.jsxs)("div",{className:"text-center py-2 md:py-0",children:[Object(O.jsx)("div",{className:"text-gray-5 text-md px-5 md:p-0",children:"Your contribution"}),Object(O.jsxs)("div",{className:"text-gray-10 dark:text-white text-lg",children:[Object(h.a)(T,2)," ETH"]})]})]}),Object(O.jsxs)("div",{className:"pt-5",children:[Object(O.jsxs)("div",{className:"flex flex-col xs:flex-row justify-between",children:[Object(O.jsxs)("div",{className:"text-center py-2 md:py-0",children:[Object(O.jsx)("div",{className:"text-gray-5 text-md",children:"Your share"}),Object(O.jsxs)("div",{className:"text-gray-10 dark:text-white text-xl",children:[C.toFixed(2)," %"]})]}),Object(O.jsxs)("div",{className:"text-center py-2 md:py-0",children:[Object(O.jsx)("div",{className:"text-gray-5 text-md",children:"Total Destinare token"}),Object(O.jsxs)("div",{className:"text-gray-10 dark:text-white text-xl",children:[Number(D).toFixed(2)," ETH"]})]})]}),Object(O.jsx)("div",{className:"",children:Object(O.jsx)(i.a,{percent:C,showInfo:!1,trailColor:g?"#fff":"#c9c9c9"})})]})]})})]})]})},w=function(e){var t=e.initDate,a=Object(u.a)().data,s=a.getPresaleInfo[0].reduce((function(e,t){return e+parseFloat(t)}),0),r=a.getPresaleInfo[1].reduce((function(e,t){return e+parseInt(t)}),0)/1e18,l=new Date(t);return l.setDate(l.getDate()+29),Object(O.jsxs)("div",{className:"bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 flex-1 flex flex-col justify-between py-6 px-8 rounded-xl relative",children:[Object(O.jsxs)("div",{className:"mb-0",children:[Object(O.jsx)("div",{className:"text-gray-10 dark:text-white flex flex-col",children:Object(O.jsxs)("div",{className:"text-3xl leading-none",children:[Object(O.jsx)("span",{className:"text-primary",children:"Claiming\xa0"}),Object(O.jsx)("span",{children:"Day"})]})}),Object(O.jsx)("div",{className:"flex flex-row my-2",children:Object(O.jsxs)("p",{className:"text-gray-10 dark:text-white text-lg",children:["Day 30 (UTC)",Object(O.jsx)("span",{className:"text-gray-5 pl-3",children:"".concat(l.getUTCDate(),"/").concat(l.getUTCMonth()+1,"/").concat(l.getUTCFullYear())})]})})]}),Object(O.jsxs)("div",{className:"flex flex-col lg:flex-row py-5 xl:py-0 divide-x-0 divide-y lg:divide-x lg:divide-y-0",children:[Object(O.jsxs)("div",{className:"text-center py-2 lg:py-0 w-full",children:[Object(O.jsx)("div",{className:"text-gray-5 text-base xxxl:text-2xl",children:"Total Ether"}),Object(O.jsxs)("div",{className:"text-gray-10 dark:text-white text-xl lg:text-2xl xxxl:text-3xl",children:[Object(h.a)(r,2)," ETH"]})]}),Object(O.jsxs)("div",{className:"text-center py-2 lg:py-0 w-full",children:[Object(O.jsx)("div",{className:"text-gray-5 text-base lg:text-lg xxxl:text-2xl",children:"Contributions"}),Object(O.jsx)("div",{className:"text-gray-10 dark:text-white text-xl lg:text-2xl xxxl:text-3xl",children:s})]})]}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("button",{className:"disabled:opacity-50 bg-primary rounded-md py-4px px-1 text-white text-lg w-full xxxl:w-9/12",disabled:!0,children:"Claim your Destinare token"})})]})},k=function(e){for(var t=e.initDate,a=e.userInfo,s=[],l=0;l<30;l++){var c=new Date(t);c.setDate(c.getDate()+l);var x=a.length>0?a[l]:0,i=Number(x)/1e18,d=Object(O.jsxs)("div",{className:"flex flex-row py-2 justify-between text-gray-5 border-b border-gray-5",children:[Object(O.jsxs)("div",{className:"text-base",children:["".concat(c.getUTCDate(),"/").concat(c.getUTCMonth()+1,"/").concat(c.getUTCFullYear())," ","- Day ",l+1," (UTC)"]}),Object(O.jsxs)("div",{className:"text-base",children:[i," ETH"]})]},"dayContribution".concat(l));i>0&&s.push(d)}return Object(O.jsx)(r.a.Fragment,{children:s})},D=function(e){var t=e.initDate,a=Object(u.a)().data,s=a.getUserInfo.reduce((function(e,t){return e+Number(t)}),0),r=Number(s)/1e18;return Object(O.jsxs)("div",{className:"flex-1 flex flex-col justify-between bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 pt-4 pb-4 px-8 rounded-xl relative",children:[Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"mb-2 text-gray-10 dark:text-white flex flex-row justify-between",children:[Object(O.jsx)("div",{className:"text-xl leading-none",children:Object(O.jsx)("span",{className:"text-gray-10 dark:text-white ",children:"Your contribution"})}),Object(O.jsx)("div",{className:"text-2xl leading-none",children:Object(O.jsxs)("span",{className:"text-gray-10 dark:text-white",children:[r," ETH"]})})]})}),Object(O.jsx)("div",{className:"pb-5 space-y-2",children:Object(O.jsx)(k,{initDate:t,userInfo:a.getUserInfo})})]})},T=function(e){for(var t=e.initDate,a=Object(u.a)().data,s=[],c=0;c<30;c++){var x=new Date(t);if(x.setDate(x.getDate()+c),(new Date).getDate()!==x.getDate()){var i=Object(O.jsx)(l.a,{xs:24,sm:24,md:24,lg:12,xl:12,className:"mb-4",children:Object(O.jsx)(f,{day:c+1,date:"".concat(x.getUTCDate(),"/").concat(x.getUTCMonth()+1,"/").concat(x.getUTCFullYear()),totalUser:a.getPresaleInfo[0].length>0?a.getPresaleInfo[0][c]:0,totalEther:a.getPresaleInfo[1].length>0?a.getPresaleInfo[1][c]/1e18:0,currentUser:a.getUserInfo.length>0?a.getUserInfo[c]/1e18:0})},"cardPresale".concat(c));s.push(i)}}return Object(O.jsx)(r.a.Fragment,{children:s})};t.default=function(e){var t=new Date;return Object(O.jsxs)("div",{className:"mx-5",children:[Object(O.jsx)("div",{className:"border-b border-gray-11 dark:border-gray-1 pb-8",children:Object(O.jsx)("div",{className:"pt-6 max-w-1650px mx-auto",children:Object(O.jsxs)("div",{className:"text-gray-5 font-semibold text-center relative dark:bg-blue-1 bg-light-2 mb-5",children:[Object(O.jsx)("div",{className:"text-2xl",children:"Reservations"}),Object(O.jsx)("div",{className:"text-lg",children:"Choose reservation day by 7 of June 2021"})]})})}),Object(O.jsxs)("div",{className:"pt-6 max-w-1650px mx-auto border-b border-gray-11 dark:border-gray-1 pb-8",children:[Object(O.jsxs)(c.a,{gutter:[20,20],className:"flex justify-center",children:[Object(O.jsx)(l.a,{xs:24,sm:24,md:24,lg:24,xl:17,children:Object(O.jsx)(N,{initDate:t})}),Object(O.jsx)(l.a,{xs:24,sm:24,md:24,lg:18,xl:7,className:"flex",children:Object(O.jsx)(w,{initDate:t})})]}),Object(O.jsxs)(c.a,{gutter:[20,20],className:"mt-5 flex justify-center flex-wrap-reverse xl:flex-nowrap",children:[Object(O.jsx)(l.a,{xs:24,sm:24,md:24,lg:24,xl:17,children:Object(O.jsxs)(c.a,{gutter:16,children:[Object(O.jsx)(l.a,{sm:24,className:"mb-4",children:Object(O.jsx)("div",{className:"text-2xl text-gray-10 dark:text-white font-semibold",children:"Reservation Days"})}),Object(O.jsx)(T,{initDate:t})]})}),Object(O.jsx)(l.a,{xs:24,sm:24,md:24,lg:18,xl:7,children:Object(O.jsx)(D,{initDate:t})})]})]})]})}}}]);
//# sourceMappingURL=16.c1d45766.chunk.js.map