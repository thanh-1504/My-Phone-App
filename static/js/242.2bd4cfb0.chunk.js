"use strict";(self.webpackChunkmyphoneapp=self.webpackChunkmyphoneapp||[]).push([[242],{3559:function(e,n,t){t(2791);var s=t(1632),i=t(9806),l=t(9434),a=t(7508),r=t(184);n.Z=function(){var e=(0,l.I0)();return(0,r.jsx)("div",{className:"bg-[#006d9c] h-[80px] w-full flex items-center justify-end",children:(0,r.jsx)(i.G,{icon:s.WA2,onClick:function(){return e((0,a.Lv)(!1))},className:"text-white w-[60px] h-7 cursor-pointer mr-4 mb:hidden lg:block sm:block"})})}},6370:function(e,n,t){t(2791);var s=t(184);n.Z=function(e){var n=e.style,t=void 0===n?"":n,i=e.children;return(0,s.jsx)("div",{className:"px-4 py-3 bg-[#ebf4f8] ".concat(t),children:i})}},5242:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var s=t(1413),i=t(9439),l=t(1830),a=t.n(l),r=t(2791),c=t(9434),o=t(9806),d=t(1632),m=t(8498),u=t(7508),h=t(184),x=function(){var e,n,t,s,l=(0,c.v9)((function(e){return e.option})).dataOption,a=(0,c.v9)((function(e){return e.option})).dataPayment,m=(0,c.v9)((function(e){return e.detailSlice})).data,u=(0,r.useState)(1),x=(0,i.Z)(u,2),p=x[0],f=x[1],v=+(null===a||void 0===a||null===(e=a.price)||void 0===e||null===(n=e.replaceAll(".",""))||void 0===n?void 0:n.replace("\u0111","")),b=(v*p).toLocaleString("vi-VN",{style:"currency",currency:"VND"}),N=v.toLocaleString("vi-VN",{style:"currency",currency:"VND"});return p<1&&f(1),(0,h.jsxs)("div",{className:"bg-white rounded-t-lg",children:[(0,h.jsxs)("div",{className:"flex items-center relative",children:[(0,h.jsx)("img",{className:"w-[83px] h-[88px] object-cover mr-4 ml-6",src:null===(t=m[0])||void 0===t?void 0:t.imgSrc,alt:"imgProduct"}),(0,h.jsx)("p",{className:"font-semibold",children:null===(s=l[0])||void 0===s?void 0:s.name}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"flex mt-8 mb-1 absolute right-5 top-[6px]",children:[(0,h.jsx)("div",{className:"cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded ",children:(0,h.jsx)(o.G,{icon:d.Kl4,onClick:function(){return f(p--)},className:"w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] "})}),(0,h.jsx)("span",{className:"h-5 px-[0.314rem] ml-2 border rounded border-[rgba(34, 49, 63, 0.1)] select-none relative leading-4 mr-2 ",children:p}),(0,h.jsx)("div",{className:"cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded",children:(0,h.jsx)(o.G,{icon:d.r8p,onClick:function(){return f(p++)},className:"w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] "})})]}),(0,h.jsx)("span",{className:"text-[#98a4b1] font-medium text-base absolute right-4 top-[64px]",children:N})]})]}),(0,h.jsx)("div",{className:"w-full h-10 bg-[#f9f9f9]",children:(0,h.jsxs)("div",{className:"leading-[2.5rem] float-right mr-[16px]",children:[(0,h.jsx)("span",{className:"pr-6 text-sm font-semibold",children:"Gi\xe1 tr\u1ecb \u0111\u01a1n h\xe0ng: "}),(0,h.jsx)("span",{className:"text-base font-semibold text-red-500 ",children:b})]})})]})},p=t(3559),f=function(){return(0,h.jsx)("div",{className:"pt-6 pb-12 text-center",children:(0,h.jsx)("button",{className:"w-[265px] h-[45px] bg-[#006d9c] text-white font-medium rounded-lg hover:scale-x-105 hover:scale-y-105 ease-in duration-100",children:"X\xe1c nh\u1eadn \u0111\u1eb7t h\xe0ng"})})},v=t(6370),b=t(6727),N=t(4695),j=t(7689),g=t(1134),y=t(9085),w=b.Ry({name:b.Z_().required("Vui l\xf2ng nh\u1eadp t\xean c\u1ee7a b\u1ea1n"),email:b.Z_().email().required("Vui l\xf2ng nh\u1eadp email c\u1ee7a b\u1ea1n"),phoneNumber:b.Rx().min(10,"Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i c\xf3 \xedt nh\u1ea5t 10 s\u1ed1").required("Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i").typeError("Vui l\xf2ng nh\u1eadp s\u1ed1 kh\xf4ng nh\u1eadp ch\u1eef"),address:b.Z_().required("Vui l\xf2ng nh\u1eadp \u0111\u1ecba ch\u1ec9!")}),_=function(){var e,n,t,l=(0,g.cI)({resolver:(0,N.X)(w),mode:"onSubmit"}),b=l.register,_=l.handleSubmit,k=l.formState,C=k.errors,Z=k.touchedFields,S=k.isSubmitSuccessful,T=(0,r.useState)(""),B=(0,i.Z)(T,2),P=B[0],V=B[1],F=(0,r.useState)(""),q=(0,i.Z)(F,2),D=q[0],G=q[1],H=(0,r.useState)(""),A=(0,i.Z)(H,2),E=A[0],W=A[1],L=(0,r.useState)(""),I=(0,i.Z)(L,2),X=I[0],z=I[1],O=(0,r.useState)(""),M=(0,i.Z)(O,2),Q=M[0],R=M[1],K=(0,j.s0)(),U=(0,c.v9)((function(e){return e.payment})),Y=U.showProvince,J=U.showDistrict,$=U.showWards,ee=(0,c.v9)((function(e){return e.payment})),ne=ee.dataProvince,te=ee.dataDistrict,se=ee.dataWards,ie=ee.infoBuyer,le=(0,c.I0)(),ae=(0,c.v9)((function(e){return e.option})).dataOption;(0,r.useEffect)((function(){le((0,m.a2)()),le((0,m.xD)(P)),le((0,m.fP)(Q))}),[le,P,Q]);return S&&a().fire({title:"\u0110\u1eb7t h\xe0ng th\xe0nh c\xf4ng",iconHtml:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="#57d17c" height="80" width="80" xmlns="http://www.w3.org/2000/svg" style="color: rgb(87, 209, 124);"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>',customClass:{icon:"no-border"},html:'\n      <div >\n      <h2 class="info_text">Th\xf4ng tin \u0111\u01a1n h\xe0ng</h2>\n      <span class="info_text-time">Th\xf4ng tin giao h\xe0ng</span>\n      <div>\n        <p class="info_buyer">H\u1ecd t\xean: '.concat(ie.nameBuyer,'</p>\n        <p class="info_buyer">S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: ').concat(ie.phoneBuyer,'</p>\n        <p class="info_buyer">\u0110\u1ecba ch\u1ec9: ').concat(ie.addressBuyer,'</p>\n      </div>\n      <div class="info__wrap-ship">\n      <p class="info_text">Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n</p>\n      <p class="info_buyer">Thanh to\xe1n khi giao h\xe0ng (COD)</p>\n      </div>\n    </div>\n    '),showCloseButton:!1,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'\n        <i class="fa fa-thumbs-up"></i> Ti\u1ebfp t\u1ee5c mua h\xe0ng\n      ',cancelButtonText:'\n        <i class="fa fa-thumbs-down"></i> H\u1ee7y b\u1ecf\n      '}),(0,r.useEffect)((function(){var e,n,t,s,i,l;null!==(e=C.name)&&void 0!==e&&e.message&&y.Am.error(null===(n=C.name)||void 0===n?void 0:n.message),Z.phoneNumber&&null!==(t=C.phoneNumber)&&void 0!==t&&t.message&&y.Am.error(null===(s=C.phoneNumber)||void 0===s?void 0:s.message),Z.email&&null!==(i=C.email)&&void 0!==i&&i.message&&y.Am.error(null===(l=C.email)||void 0===l?void 0:l.message)}),[C,null===C||void 0===C?void 0:C.email,null===C||void 0===C?void 0:C.phoneNumber]),(0,r.useEffect)((function(){var e=document.querySelector(".swal2-confirm");e&&e.addEventListener("click",(function(){K("/")}))})),(0,h.jsxs)("div",{children:[(0,h.jsx)(p.Z,{onDevice:{mobile:!0,pc:!1}}),(0,h.jsxs)("form",{onSubmit:_((function(e){le((0,u.pU)({nameBuyer:e.name,phoneBuyer:e.phoneNumber,addressBuyer:e.address}))})),autoComplete:"off",children:[(0,h.jsxs)(v.Z,{style:" bg-[#ebf4f8] ",children:[(0,h.jsx)(x,{dataPay:ae}),(0,h.jsxs)("div",{className:"px-8 py-6 pt-6 mt-3 bg-white rounded-lg",children:[(0,h.jsx)("span",{children:"Th\xf4ng tin kh\xe1ch h\xe0ng"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"flex items-center mt-3",children:[(0,h.jsxs)("div",{className:"flex items-center",children:[(0,h.jsx)("input",{type:"radio",name:"sex",id:"male",checked:!0,className:"mt-1 mr-[6px]"}),(0,h.jsx)("label",{className:"text-sm font-medium select-none",htmlFor:"male",children:"Anh"})]}),(0,h.jsxs)("div",{className:"flex items-center ml-3",children:[(0,h.jsx)("input",{type:"radio",name:"sex",id:"female",className:"mt-1 mr-[6px]"}),(0,h.jsx)("label",{className:"text-sm font-medium select-none",htmlFor:"female",children:"Ch\u1ecb"})]})]}),(0,h.jsxs)("div",{className:"mt-3",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"buyer__name",className:"text-sm font-medium",children:"H\u1ecd v\xe0 t\xean"}),(0,h.jsx)("input",(0,s.Z)((0,s.Z)({},b("name")),{},{type:"text",name:"name",id:"buyer__name",className:"w-[340px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75 mb-3 ".concat((null===C||void 0===C||null===(e=C.name)||void 0===e?void 0:e.message)&&"focus:border-b-red-500"),placeholder:"D\u01b0\u01a1ng Nh\u1eadt Th\xe0nh"}))]}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("label",{htmlFor:"phoneNumber",className:"text-sm font-medium",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),(0,h.jsx)("input",(0,s.Z)((0,s.Z)({},b("phoneNumber")),{},{id:"phoneNumber",name:"phoneNumber",type:"text",className:"w-[340px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] mb-3 ".concat((null===C||void 0===C||null===(n=C.phoneNumber)||void 0===n?void 0:n.message)&&"focus:border-b-red-500"),placeholder:"0123456789"}))]}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),(0,h.jsx)("input",(0,s.Z)((0,s.Z)({id:"email"},b("email")),{},{name:"email",type:"text",className:"w-[340px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] focus:border-b-[#80bdff] ".concat((null===C||void 0===C||null===(t=C.email)||void 0===t?void 0:t.message)&&"focus:border-b-red-500"),placeholder:"abc@gmail.com"}))]})]})]})]}),(0,h.jsxs)("div",{className:"px-8 py-6 pt-6 mt-3 bg-white rounded-lg",children:[(0,h.jsx)("span",{children:"Y\xeau c\u1ea7u nh\u1eadn h\xe0ng"}),(0,h.jsx)("div",{className:"flex items-center mt-3",children:(0,h.jsxs)("div",{className:"flex items-center",children:[(0,h.jsx)("input",{type:"radio",name:"input__request",id:"request_order",className:"mt-1 mr-[6px]"}),(0,h.jsx)("label",{className:"text-sm font-medium select-none",htmlFor:"request_order",children:"Nh\u1eadn h\xe0ng t\u1ea1i nh\xe0"})]})}),(0,h.jsxs)("div",{className:"flex flex-col mt-5",children:[(0,h.jsx)("label",{className:"mb-3 text-sm font-medium",children:"T\u1ec9nh / Th\xe0nh ph\u1ed1"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{onClick:function(){return le((0,u.ev)(!Y))},className:"w-[340px] cursor-pointer flex items-center",children:[(0,h.jsx)("span",{className:"text-sm ".concat(D?"text-black font-semibold":"text-[#e3e0de]"," mb-1"),children:D||"Ch\u1ecdn T\u1ec9nh / Th\xe0nh Ph\u1ed1"}),(0,h.jsx)(o.G,{icon:d.eW2,className:"ml-auto cursor-pointer"})]}),(0,h.jsx)("div",{className:"w-[340px] h-[0.5px] bg-[#ced4da]"}),Y&&(0,h.jsx)("div",{className:"max-w-[780px] border border-[#ced4da] w-[340px] relative top-[-10px] mt-5",children:(0,h.jsx)("ul",{className:"list-country list-none max-h-[10em] overflow-y-auto w-[340px]",children:ne.map((function(e){return(0,h.jsx)("li",{onClick:function(){le((0,u.ev)(!1)),V(e.province_id),G(e.province_name)},className:"cursor-pointer py-[5px] hover:bg-blue-500 hover:text-white pl-2",children:e.province_name})}))})})]}),(0,h.jsx)("label",{className:"mt-3 mb-3 text-sm font-medium",children:"Qu\u1eadn / Huy\u1ec7n"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{onClick:function(){return le((0,u.Cx)(!J))},className:"w-[340px] cursor-pointer flex items-center",children:[(0,h.jsx)("span",{className:"text-sm ".concat(E?"text-black font-semibold":"text-[#e3e0de]"," mb-1"),children:E||"Ch\u1ecdn Qu\u1eadn / Huy\u1ec7n"}),(0,h.jsx)(o.G,{icon:d.eW2,className:"ml-auto cursor-pointer"})]}),(0,h.jsx)("div",{className:"w-[340px] h-[0.5px] bg-[#ced4da]"}),J&&(0,h.jsx)("div",{className:"max-w-[780px] border border-[#ced4da] w-[340px] relative top-[-10px] mt-5",children:(0,h.jsx)("ul",{className:"list-country list-none max-h-[10em] overflow-y-auto w-[340px]",children:te.length>0&&te.map((function(e){return(0,h.jsx)("li",{onClick:function(){le((0,u.Cx)(!1)),R(e.district_id),W(e.district_name)},className:"cursor-pointer py-[5px] hover:bg-blue-500 hover:text-white pl-2",children:e.district_name})}))})})]}),(0,h.jsx)("label",{className:"mt-3 mb-3 text-sm font-medium",children:"Ph\u01b0\u1eddng / X\xe3"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{onClick:function(){return le((0,u.tk)(!$))},className:"w-[340px] cursor-pointer flex items-center",children:[(0,h.jsx)("span",{className:"text-sm ".concat(X?"text-black font-semibold":"text-[#e3e0de]"," mb-1"),children:X||"Ch\u1ecdn Ph\u01b0\u1eddng / X\xe3"}),(0,h.jsx)(o.G,{icon:d.eW2,className:"ml-auto cursor-pointer"})]}),(0,h.jsx)("div",{className:"w-[340px] h-[0.5px] bg-[#ced4da]"}),$&&(0,h.jsx)("div",{className:"max-w-[780px] border border-[#ced4da] w-[340px] relative top-[-10px] mt-5",children:(0,h.jsx)("ul",{className:"list-country list-none max-h-[10em] overflow-y-auto w-[340px]",children:se.length>0&&se.map((function(e){return(0,h.jsx)("li",{onClick:function(){le((0,u.tk)(!1)),z(e.ward_name)},className:"cursor-pointer py-[5px] hover:bg-blue-500 hover:text-white pl-2",children:e.ward_name})}))})})]})]}),(0,h.jsxs)("div",{className:"mt-3",children:[(0,h.jsx)("label",{htmlFor:"input__address",className:"text-sm font-medium",children:"\u0110\u01b0\u1eddng / Th\xf4n x\xf3m"}),(0,h.jsx)("input",(0,s.Z)((0,s.Z)({},b("address")),{},{type:"text",name:"address",id:"input__address",className:"w-[340px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75 mb-4",placeholder:"Nh\u1eadp \u0110\u01b0\u1eddng / Th\xf4n x\xf3m"})),(0,h.jsx)("label",{htmlFor:"input__note",className:"text-sm font-medium",children:"Ghi ch\xfa"}),(0,h.jsx)("input",{type:"text",name:"input__note",id:"input__note",className:"w-[340px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75",placeholder:"\u0110i\u1ec1n ghi ch\xfa"})]})]}),(0,h.jsx)(f,{})]}),(0,h.jsx)(y.Ix,{})]})]})}}}]);
//# sourceMappingURL=242.2bd4cfb0.chunk.js.map