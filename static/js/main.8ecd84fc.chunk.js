(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":1,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0","name":"CHECK PRINT SHIRT","price":110},{"id":2,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0","name":"GLORIA HIGH LOGO SNEAKER","price":91},{"id":3,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0","name":"CATE RIGID BAG","price":94.5},{"id":4,"imgUrl":"http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0","name":"GUESS CONNECT WATCH","price":438.9},{"id":5,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0","name":"70s RETRO GLAM KEFIAH","price":20},{"id":6,"imgUrl":"https://66.media.tumblr.com/56662f7a19dda16764c6478e75f417fa/tumblr_pdqqhluiOL1vf8b0wo1_1280.jpg","name":"CHECK PRINT SHIRT","price":110},{"id":7,"imgUrl":"https://66.media.tumblr.com/b0cc80d736d00854018d4b06d4fd60e8/tumblr_pbqh2tOUeu1vf8b0wo1_1280.jpg","name":"GLORIA HIGH LOGO SNEAKER","price":91},{"id":8,"imgUrl":"https://66.media.tumblr.com/e9952cd5ac99ef8b4463f04c0373841c/tumblr_p86xu35FGm1vf8b0wo1_1280.jpg","name":"CATE RIGID BAG","price":94.5},{"id":9,"imgUrl":"https://66.media.tumblr.com/ee4c9b1fb1af619d43e054e3287ead35/tumblr_pbrds2xAGs1vf8b0wo1_1280.jpg","name":"GUESS CONNECT WATCH","price":438.9},{"id":10,"imgUrl":"https://66.media.tumblr.com/6780757c04cb236e4aed8c7a647a146b/tumblr_pbuaqsVmwT1vf8b0wo1_1280.jpg","name":"70s RETRO GLAM KEFIAH","price":20},{"id":11,"imgUrl":"https://66.media.tumblr.com/8f8c72166a1726c78efc56f12a171d4c/tumblr_pbzuzoXShE1vf8b0wo1_1280.jpg","name":"CHECK PRINT SHIRT","price":110},{"id":12,"imgUrl":"https://66.media.tumblr.com/c1fd82538c5c3b5256e38e3fa02570a1/tumblr_pc0g1wsotn1vf8b0wo1_1280.jpg","name":"GLORIA HIGH LOGO SNEAKER","price":91},{"id":13,"imgUrl":"https://66.media.tumblr.com/3e7c99dbee80a50296430b8d6bdeabc6/tumblr_pc7bgdBIJl1vf8b0wo1_1280.jpg","name":"CATE RIGID BAG","price":94.5},{"id":14,"imgUrl":"https://66.media.tumblr.com/3d30e1f82520645c02445d22f446612d/tumblr_pc7biajng61vf8b0wo1_1280.jpg","name":"GUESS CONNECT WATCH","price":438.9},{"id":15,"imgUrl":"https://66.media.tumblr.com/13004fcaf026088b364b78de84b8dcbf/tumblr_pc7bjkrhME1vf8b0wo1_1280.jpg","name":"70s RETRO GLAM KEFIAH","price":20}]')},55:function(e,t,n){e.exports=n(82)},60:function(e,t,n){},61:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),i=(n(60),n(61),n(11)),o=n(5),m=n(10),u=n(18),s=n(27),h=n.n(s),p=n(17),d=("".concat("counter","/COUNTER_INC"),"".concat("counter","/COUNTER_DEC"),function(e){return console.log(e),{type:"ADD_TO_CART",id:e}});var g=Object(p.b)((function(e){return{cart:e.cart,qty:e.qty}}),(function(e){return{addToCartActions:function(t){return e(d(t))},removeItemFromCart:function(t){return e(function(e){return{type:"REMOVE_FROM_CART",id:e}}(t))},updateItemFromCart:function(t){return e(function(e){var t=e.id,n=Number(e.qty);return console.log(t),console.log(n),{type:"ADD_QUANTITY",id:t,qty:n}}(t))}}}))((function(e){var t=e.removeItemFromCart,n=e.updateItemFromCart,r=e.cart,l=(e.qty,{textDecoration:"none",float:"left",listStyleType:"none",border:".1px dotted gray",borderRadius:"5px",padding:"5px",margin:"5px",height:"380x",width:"210px"}),i=0,o=r.products.length>0?r.products.map((function(e,r){var o;if(o=Object(a.useRef)(),!0===e.selected)return i+=e.quantity*e.price,c.a.createElement("div",{className:"content",key:e.id.toString()},c.a.createElement("div",null,c.a.createElement("ul",{className:"col-sm-3",style:l},c.a.createElement("a",{href:""},c.a.createElement("li",null,c.a.createElement("img",{src:e.imgUrl,alt:"",width:"100",height:"200"}))),c.a.createElement("hr",null),c.a.createElement("li",null,e.quantity*e.price," $"),c.a.createElement("li",{style:{height:"50px"}},e.name),c.a.createElement("li",null,"QTY :",c.a.createElement("input",{className:"form form-control",type:"number",ref:o,defaultValue:e.quantity,name:"qty"})),c.a.createElement("button",{onClick:function(){t(e.id)},className:"btn btn-primary"},"Remove"),c.a.createElement("button",{style:{margin:"0px 10px"},onClick:function(){n({id:e.id,qty:o.current.value})},className:"btn btn-primary"},"Update"))))})):null;return c.a.createElement("div",{style:{border:"1px solid blue",borderRadius:"10px"}},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("h1",null,"This is Cart Page")),o,c.a.createElement("br",{style:{clear:"both"}}),0!==i?c.a.createElement("h2",null,"Total: ",i):"khong co sp")})),b={textDecoration:"none",float:"left",listStyleType:"none",border:".1px dotted gray",borderRadius:"5px",padding:"5px",margin:"5px",height:"355px",width:"210px"};var E=Object(p.b)((function(e){return{cart:e.cart}}),(function(e){return{addToCartActions:function(t){return e(d(t))}}}))((function(e){var t=e.addToCartActions,n=e.cart,r=Object(a.useState)([]),l=Object(m.a)(r,2),s=l[0],p=l[1],d=Object(a.useState)(1),E=Object(m.a)(d,2),v=E[0],f=E[1];Object(a.useEffect)((function(){p(u)}),[]);var y=s.length>0?s.map((function(e,n){return 1===v&&n<5?c.a.createElement("div",{className:"content",key:e.id.toString()},c.a.createElement("div",{key:e.id},c.a.createElement("ul",{className:"col-sm-3",style:b},c.a.createElement("a",{href:""},c.a.createElement("li",null,c.a.createElement("img",{src:e.imgUrl,alt:"",width:"100",height:"200"})),c.a.createElement("hr",null),c.a.createElement("li",null,e.price," $"),c.a.createElement("li",{style:{height:"50px"}},e.name)),c.a.createElement("button",{onClick:function(){t(e.id)},className:"btn btn-primary"},"Add To Cart")))):v>1&&n>5*(v-1)&&n<=5*v?c.a.createElement("div",{className:"content",key:e.id.toString()},c.a.createElement("div",null,c.a.createElement("ul",{className:"col-sm-3",style:b},c.a.createElement("a",{href:""},c.a.createElement("li",null,c.a.createElement("img",{src:e.imgUrl,alt:"",width:"100",height:"200"})),c.a.createElement("hr",null),c.a.createElement("li",null,e.price," $"),c.a.createElement("li",{style:{height:"50px"}},e.name)),c.a.createElement("button",{onClick:function(){t(e.id)},className:"btn btn-primary",value:e.id},"Add To Cart")))):void 0})):c.a.createElement("h1",null,"Loading posts...");return c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("h1",null,"This is Home Page")),c.a.createElement(i.a,null,c.a.createElement("div",{style:{float:"right",width:"150px",height:"40px",lineHeight:"40px",textAlign:"center",borderRadius:"10px",backgroundColor:"gray",color:"white"}},c.a.createElement(i.b,{to:"/shoppingCart",style:{color:"white"}},c.a.createElement("span",null,"Gio hang (",function(e){var t=0;return e.products.length>0&&e.products.map((function(e,n){!0===e.selected&&(t+=e.quantity)})),t}(n),")"))),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/shoppingCart",component:g}))),c.a.createElement("br",{style:{clear:"both"}}),y,c.a.createElement("br",{style:{clear:"both"}}),c.a.createElement(h.a,{activePage:v,itemsCountPerPage:5,totalItemsCount:s.length,pageRangeDisplayed:3,onChange:function(e){f(e)},itemClass:"page-item",linkClass:"page-link"}))})),v=n(28),f=n.n(v),y=(n(69),n(34)),O=n.n(y),C=n(19),N=n(20),T=n(21),j=n(24),x=n(23),_=n(46),k=n.n(_),w=function(e){Object(j.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).state={pictures:[]},a.onDrop=a.onDrop.bind(Object(T.a)(a)),a}return Object(N.a)(n,[{key:"onDrop",value:function(e){this.setState({pictures:this.state.pictures.concat(e)})}},{key:"render",value:function(){return c.a.createElement(k.a,{withIcon:!0,buttonText:"Choose images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880})}}]),n}(c.a.Component);function A(e){var t=Object(m.a)(e.data,1)[0];return console.log(t),c.a.createElement("div",null,c.a.createElement("li",null,t.name),c.a.createElement("li",null,t.dob),c.a.createElement("li",null,t.des),c.a.createElement("li",null,t.gender))}var R=function(){var e=c.a.useState(!1),t=Object(m.a)(e,2),n=t[0],a=t[1],r=c.a.useState(!1),l=Object(m.a)(r,2),i=l[0],o=l[1],u=c.a.useState(!1),s=Object(m.a)(u,2),h=s[0],p=s[1];function d(){a(!1)}return O.a.setAppElement("body"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){a(!0)}},"Who you are?"),c.a.createElement(O.a,{isOpen:n,onRequestClose:d,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"800px"}},contentLabel:"Example Modal"},c.a.createElement("div",null,"Please Choose?"),c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(e),o(!0),d();var t=[{name:e.target.Name.value,dob:e.target.DOB.value,des:e.target.Description.value,gender:e.target.gender.value}];p(t)}},c.a.createElement("label",null,"Name:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"Name",id:"Name"})),c.a.createElement("br",null),c.a.createElement("label",null,"DOB:",c.a.createElement("br",null),c.a.createElement("input",{type:"date",name:"DOB",id:"DOB"})),c.a.createElement("br",null),c.a.createElement("label",null,"Description:",c.a.createElement("br",null),c.a.createElement("textarea",{name:"Description"})),c.a.createElement("br",null),c.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"male"}),c.a.createElement("label",{htmlFor:"male"}," Male"),c.a.createElement("br",null),c.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female"}),c.a.createElement("label",{htmlFor:"female"}," Female"),c.a.createElement("br",null),c.a.createElement(w,null),c.a.createElement("button",{className:"btn btn-primary",style:{margin:"10px"},type:"submit"},"Submit"),c.a.createElement("button",{className:"btn btn-primary",onClick:d},"close"))),i?c.a.createElement(A,{data:h}):null)},q=n(14),I=n(35),S=n(36);function U(){var e=Object(I.a)(["\n         background: ",";\n                color: ",";\n                font-size: 1em;\n                margin: 1em;\n                padding: 0.25em 1em;\n                border: 2px solid palevioletred;\n                border-radius: 3px;\n        "]);return U=function(){return e},e}function L(){var e=Object(I.a)(["\n         background: ",";\n                color: ",";\n                font-size: 1em;\n                margin: 1em;\n                padding: 0.25em 1em;\n                border: 2px solid palevioletred;\n                border-radius: 3px;\n        "]);return L=function(){return e},e}var G=S.a.button(L(),(function(e){return e.primary?"palevioletred":"white"}),(function(e){return e.primary?"white":"palevioletred"})),B=S.a.text(U(),(function(e){return e.primary?"palevioletred":"white"}),(function(e){return e.primary?"white":"palevioletred"}));var D=function(){return c.a.createElement("div",null,c.a.createElement(G,null,"Normal"),c.a.createElement(G,{primary:!0},"Primary"),c.a.createElement(B,null))};var H=function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2),n=t[0],r=t[1],l={color:"black"};return c.a.createElement("div",{className:"content"},c.a.createElement(D,null),c.a.createElement(q.a,{activeIndex:n,onSelect:function(e,t){r(e)}},c.a.createElement(q.a.Item,null,c.a.createElement("img",{className:"d-block w-100",src:"https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",alt:"First slide",width:"auto",height:"500px"}),c.a.createElement("span",{style:{backgroundColor:"black"},"aria-hidden":"true",className:"carousel-control-next-icon"}),c.a.createElement(q.a.Caption,null,c.a.createElement("h3",{style:l},"First slide label"))),c.a.createElement(q.a.Item,null,c.a.createElement("img",{className:"d-block w-100",src:"https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",alt:"Second slide",width:"auto",height:"500px"}),c.a.createElement("span",{style:{backgroundColor:"black"},"aria-hidden":"true",className:"carousel-control-next-icon"}),c.a.createElement(q.a.Caption,null,c.a.createElement("h3",{style:l},"Second slide label"))),c.a.createElement(q.a.Item,null,c.a.createElement("img",{className:"d-block w-100",src:"https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",alt:"Third slide",width:"auto",height:"500px"}),c.a.createElement("span",{style:{backgroundColor:"black"},"aria-hidden":"true",className:"carousel-control-next-icon"}),c.a.createElement(q.a.Caption,null,c.a.createElement("h3",{style:l},"Third slide label")))))},F=function(e){Object(j.a)(n,e);var t=Object(x.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"This is Contact page"))}}]),n}(a.Component);var M=function(){var e={backgroundColor:"#d7dbda",borderRadius:"10px",padding:"10px",margin:"10px 5px"};return c.a.createElement("div",{className:"row"},c.a.createElement("div",{style:e,className:"col-sm-6"},c.a.createElement("h2",{style:{textAlign:"center"}},"Leonel Messi"),c.a.createElement("hr",null),"Sau c\xe1c th\xf4ng b\xe1o La Liga b\u1ecb ho\xe3n v\xf4 th\u1eddi h\u1ea1n, UEFA x\xe1c nh\u1eadn Champions League ch\u01b0a bi\u1ebft th\u1eddi gian quay tr\u1edf l\u1ea1i, Barca c\u0169ng nh\u01b0 nhi\u1ec1u CLB kh\xe1c ph\u1ea3i  \u0111\u1ed1i m\u1eb7t m\u1ea5t h\xe0ng tri\u1ec7u euro trong c\xe1c kho\u1ea3n thu truy\u1ec1n h\xecnh v\xe0 ti\u1ec1n th\u01b0\u1edfng n\u1ebfu m\xf9a gi\u1ea3i kh\xf4ng \u0111\u01b0\u1ee3c ti\u1ebfp t\u1ee5c. Th\u1eadm ch\xed, trong t\xecnh hu\u1ed1ng x\u1ea5u nh\u1ea5t c\xf3 th\u1ec3 'x\xf3a s\u1ed5'. L\u01b0\u01a1ng c\u1ee7a Messi v\xe0 \u0111\u1ed3ng \u0111\u1ed9i chi\u1ebfm kho\u1ea3ng m\u1ed9t n\u1eeda ng\xe2n s\xe1ch h\xe0ng n\u0103m c\u1ee7a Barca, v\u1edbi h\u01a1n 500 tri\u1ec7u euro Ngo\xe0i m\u1ea5t doanh thu t\u1eeb c\xe1c tr\u1eadn \u0111\u1ea5u, mua b\xe1n b\u1ea3n quy\u1ec1n, \u0111\u1ed9i ch\u1ee7 s\xe2n Nou Camp c\u0169ng thi\u1ec7t h\u1ea1i t\u1eeb ngu\u1ed3n du kh\xe1ch \u0111\xe1ng k\u1ec3 tham quan b\u1ea3o t\xe0ng CLB,\u2026 V\xec th\u1ebf, \u0111\u1ec3 gi\u1ea3m thi\u1ec3u r\u1ee7i ro cho c\xe2u l\u1ea1c b\u1ed9, h\xf4m qua, \u0111\u1ed9i tr\u01b0\u1edfng c\u1ee7a CLB v\xe0 Ban l\xe3nh \u0111\u1ea1o \u0111\xe3 c\xf3 c\xe1c cu\u1ed9c \u0111\xe0m ph\xe1n v\u1ec1 c\u1eaft gi\u1ea3m l\u01b0\u01a1ng. Tuy nhi\xean, do c\xf3 nh\u1eefng kh\xfac m\u1eafc t\u1eeb tr\u01b0\u1edbc \u0111\xf3 gi\u1eefa m\u1ed9t s\u1ed1 c\u1ea7u th\u1ee7 v\u1edbi th\xe0nh vi\xean c\u1ee7a H\u1ed9i \u0111\u1ed3ng qu\u1ea3n tr\u1ecb Barca, khi\u1ebfn cu\u1ed9c b\xe0n b\u1ea1c ch\u01b0a c\xf3 ti\u1ebfng n\xf3i chung. Do \u0111\xf3, ph\xeda Barca m\u1edbi \u0111\xe2y l\xean ti\u1ebfng x\xe1c nh\u1eadn, h\u1ecd s\u1ebd d\xf9ng lu\u1eadt lao \u0111\u1ed9ng t\u1ed3n t\u1ea1i \u1edf T\xe2y Ban Nha, \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 ERTE cho ph\xe9p c\xe1c c\xf4ng ty \xe1p d\u1ee5ng vi\u1ec7c sa th\u1ea3i nh\xe2n vi\xean ho\u1eb7c gi\u1ea3m l\u01b0\u01a1ng trong nh\u1eefng tr\u01b0\u1eddng h\u1ee3p \u0111\u1eb7c bi\u1ec7t. Vi\u1ec7c \xe1p d\u1ee5ng n\xe0y, ch\u1ec9 l\xe0 trong l\xfac b\u0129 c\u1ef1c, khi c\xe1c b\xean kh\xf4ng c\xf3 s\u1ef1 chia s\u1ebb v\xe0 \u0111\u1ed3ng c\u1ea3m. H\u1ed9i \u0111\u1ed3ng qu\u1ea3n tr\u1ecb v\u1eabn hi v\u1ecdng Messi v\xe0 \u0111\u1ed3ng \u0111\u1ed9i s\u1ebd ch\u1ea5p nh\u1eadn gi\u1ea3m l\u01b0\u01a1ng m\xe0 kh\xf4ng c\u1ea7n ph\u1ea3i l\xf4i lu\u1eadt lao \u0111\u1ed9ng kia ra. Tuy nhi\xean, v\u1edbi y\xeau c\u1ea7u gi\u1ea3m t\u1edbi 70% l\u01b0\u01a1ng, \u0111\u1ed9i tr\u01b0\u1edfng c\u1ee7a CLB v\xe0 ph\u1ea7n c\xf2n l\u1ea1i c\u1ee7a Barca \u0111\xe3 ph\u1ea3n \u0111\u1ed1i con s\u1ed1 n\xe0y. N\u1ebfu vi\u1ec7c gi\u1ea3m l\u01b0\u01a1ng t\u1edbi 70% th\xec Messi, ng\u01b0\u1eddi nh\u1eadn l\u01b0\u01a1ng cao nh\u1ea5t \u0111\u01b0\u01a1ng nhi\xean s\u1ebd l\xe0 c\u1ea7u th\u1ee7 b\u1ecb \u1ea3nh h\u01b0\u1edfng nhi\u1ec1u nh\u1ea5t, t\u1eeb 500.000 b\u1ea3ng/tu\u1ea7n s\u1ebd ch\u1ec9 c\xf2n 150.000 b\u1ea3ng/tu\u1ea7n."),c.a.createElement("div",{style:e,className:"col-sm-5"},c.a.createElement("h2",{style:{textAlign:"center"}},"Cristiano Ronaldo"),c.a.createElement("hr",null),"Sau c\xe1c th\xf4ng b\xe1o La Liga b\u1ecb ho\xe3n v\xf4 th\u1eddi h\u1ea1n, UEFA x\xe1c nh\u1eadn Champions League ch\u01b0a bi\u1ebft th\u1eddi gian quay tr\u1edf l\u1ea1i, Barca c\u0169ng nh\u01b0 nhi\u1ec1u CLB kh\xe1c ph\u1ea3i  \u0111\u1ed1i m\u1eb7t m\u1ea5t h\xe0ng tri\u1ec7u euro trong c\xe1c kho\u1ea3n thu truy\u1ec1n h\xecnh v\xe0 ti\u1ec1n th\u01b0\u1edfng n\u1ebfu m\xf9a gi\u1ea3i kh\xf4ng \u0111\u01b0\u1ee3c ti\u1ebfp t\u1ee5c. Th\u1eadm ch\xed, trong t\xecnh hu\u1ed1ng x\u1ea5u nh\u1ea5t c\xf3 th\u1ec3 'x\xf3a s\u1ed5'. L\u01b0\u01a1ng c\u1ee7a Messi v\xe0 \u0111\u1ed3ng \u0111\u1ed9i chi\u1ebfm kho\u1ea3ng m\u1ed9t n\u1eeda ng\xe2n s\xe1ch h\xe0ng n\u0103m c\u1ee7a Barca, v\u1edbi h\u01a1n 500 tri\u1ec7u euro Ngo\xe0i m\u1ea5t doanh thu t\u1eeb c\xe1c tr\u1eadn \u0111\u1ea5u, mua b\xe1n b\u1ea3n quy\u1ec1n, \u0111\u1ed9i ch\u1ee7 s\xe2n Nou Camp c\u0169ng thi\u1ec7t h\u1ea1i t\u1eeb ngu\u1ed3n du kh\xe1ch \u0111\xe1ng k\u1ec3 tham quan b\u1ea3o t\xe0ng CLB,\u2026 V\xec th\u1ebf, \u0111\u1ec3 gi\u1ea3m thi\u1ec3u r\u1ee7i ro cho c\xe2u l\u1ea1c b\u1ed9, h\xf4m qua, \u0111\u1ed9i tr\u01b0\u1edfng c\u1ee7a CLB v\xe0 Ban l\xe3nh \u0111\u1ea1o \u0111\xe3 c\xf3 c\xe1c cu\u1ed9c \u0111\xe0m ph\xe1n v\u1ec1 c\u1eaft gi\u1ea3m l\u01b0\u01a1ng. Tuy nhi\xean, do c\xf3 nh\u1eefng kh\xfac m\u1eafc t\u1eeb tr\u01b0\u1edbc \u0111\xf3 gi\u1eefa m\u1ed9t s\u1ed1 c\u1ea7u th\u1ee7 v\u1edbi th\xe0nh vi\xean c\u1ee7a H\u1ed9i \u0111\u1ed3ng qu\u1ea3n tr\u1ecb Barca, khi\u1ebfn cu\u1ed9c b\xe0n b\u1ea1c ch\u01b0a c\xf3 ti\u1ebfng n\xf3i chung. Do \u0111\xf3, ph\xeda Barca m\u1edbi \u0111\xe2y l\xean ti\u1ebfng x\xe1c nh\u1eadn, h\u1ecd s\u1ebd d\xf9ng lu\u1eadt lao \u0111\u1ed9ng t\u1ed3n t\u1ea1i \u1edf T\xe2y Ban Nha, \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 ERTE cho ph\xe9p c\xe1c c\xf4ng ty \xe1p d\u1ee5ng vi\u1ec7c sa th\u1ea3i nh\xe2n vi\xean ho\u1eb7c gi\u1ea3m l\u01b0\u01a1ng trong nh\u1eefng tr\u01b0\u1eddng h\u1ee3p \u0111\u1eb7c bi\u1ec7t. Vi\u1ec7c \xe1p d\u1ee5ng n\xe0y, ch\u1ec9 l\xe0 trong l\xfac b\u0129 c\u1ef1c, khi c\xe1c b\xean kh\xf4ng c\xf3 s\u1ef1 chia s\u1ebb v\xe0 \u0111\u1ed3ng c\u1ea3m. H\u1ed9i \u0111\u1ed3ng qu\u1ea3n tr\u1ecb v\u1eabn hi v\u1ecdng Messi v\xe0 \u0111\u1ed3ng \u0111\u1ed9i s\u1ebd ch\u1ea5p nh\u1eadn gi\u1ea3m l\u01b0\u01a1ng m\xe0 kh\xf4ng c\u1ea7n ph\u1ea3i l\xf4i lu\u1eadt lao \u0111\u1ed9ng kia ra. Tuy nhi\xean, v\u1edbi y\xeau c\u1ea7u gi\u1ea3m t\u1edbi 70% l\u01b0\u01a1ng, \u0111\u1ed9i tr\u01b0\u1edfng c\u1ee7a CLB v\xe0 ph\u1ea7n c\xf2n l\u1ea1i c\u1ee7a Barca \u0111\xe3 ph\u1ea3n \u0111\u1ed1i con s\u1ed1 n\xe0y. N\u1ebfu vi\u1ec7c gi\u1ea3m l\u01b0\u01a1ng t\u1edbi 70% th\xec Messi, ng\u01b0\u1eddi nh\u1eadn l\u01b0\u01a1ng cao nh\u1ea5t \u0111\u01b0\u01a1ng nhi\xean s\u1ebd l\xe0 c\u1ea7u th\u1ee7 b\u1ecb \u1ea3nh h\u01b0\u1edfng nhi\u1ec1u nh\u1ea5t, t\u1eeb 500.000 b\u1ea3ng/tu\u1ea7n s\u1ebd ch\u1ec9 c\xf2n 150.000 b\u1ea3ng/tu\u1ea7n."))};var V=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,c.a.createElement(f.a,{text:"Hello cac ban ahiii!!!!!!!!!!!!!"})),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",null,c.a.createElement(i.b,{to:"/",className:"nav-link"}," Home ")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/about",className:"nav-link"},"About")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/blog",className:"nav-link"},"Blog")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/modal",className:"nav-link"},"Modal")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/contact",className:"nav-link"},"Contact")))),c.a.createElement("hr",null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:E}),c.a.createElement(o.a,{path:"/about",component:H}),c.a.createElement(o.a,{path:"/blog",component:M}),c.a.createElement(o.a,{path:"/modal",component:R}),c.a.createElement(o.a,{path:"/contact",component:F}),c.a.createElement(o.a,{path:"/shoppingCart",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=n(16),P="".concat("counter","/COUNTER_INC"),K="".concat("counter","/COUNTER_DEC"),J={data:1},z=n(4),X="".concat("timer","/TIMER_INC"),Y={data:1},Q={products:[]},$=Object(W.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return{data:t.payload};case K:return{result:t.payload};default:return e}},timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(z.a)(Object(z.a)({},e),{},{data:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return Object(z.a)(Object(z.a)({},e),{},{products:e.products.map((function(e){return e.id===t.id?Object(z.a)(Object(z.a)({},e),{},{selected:!0,quantity:e.quantity>=0?e.quantity+1:1}):e}))});case"REMOVE_FROM_CART":return Object(z.a)(Object(z.a)({},e),{},{products:e.products.map((function(e){return e.id===t.id?Object(z.a)(Object(z.a)({},e),{},{selected:!1,quantity:0}):e}))});case"ADD_QUANTITY":return console.log(e.products),Object(z.a)(Object(z.a)({},e),{},{products:e.products.map((function(e){return e.id===t.id?Object(z.a)(Object(z.a)({},e),{},{quantity:t.qty}):e}))});case"SUB_QUANTITY":return Object(z.a)(Object(z.a)({},e),{},{products:e.products.map((function(e){return e.id===t.id?Object(z.a)(Object(z.a)({},e),{},{quantity:1!==e.quantity?e.quantity-1:1}):e}))});case"EMPTY_CART":return Object(z.a)(Object(z.a)({},e),{},{products:e.products.map((function(e){return e.selected?Object(z.a)(Object(z.a)({},e),{},{selected:!1,quantity:1}):e}))});default:return e}}}),Z={counter:{data:2},timer:{data:1},cart:{products:u}};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z;return Object(W.c)($,e,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}()},c.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.8ecd84fc.chunk.js.map