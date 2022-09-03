"use strict";(self.webpackChunkfisthero_ui=self.webpackChunkfisthero_ui||[]).push([[483],{1871:function(e,n,t){t.d(n,{R:function(){return s},n:function(){return i}});var r=t(9751),a=(t(7313),t(6417));function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.currency,t=e.value;return n?t?new r.x(n,t).format({suffix:" "+n.ticker}):"0 "+n.ticker:"-"}var i=function(e){return(0,a.jsx)(a.Fragment,{children:s(e.asset)})}},1361:function(e,n,t){t.d(n,{t:function(){return m},u:function(){return x}});var r=t(3032),a=t(4322),s=t.n(a),i=t(334),o=t(7998),c=t(56),u=t(1114),l=t(658),p=t.n(l),f=t(8955),d=t(1843);function x(){var e=(0,i.I1)(),n=(0,o.K)().account,t=(0,c.useQueryClient)();return(0,c.useQuery)(["queryHero",{account:n}],(0,r.Z)(s().mark((function a(){var i,o,c,l,x,m,v,g,b,h,y,w,k,Z,N,j;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(0,u.Kc)(e),(0,u.Kc)(n),a.next=4,e.getConfig(n);case 4:return i=a.sent,(0,f.f)("hero config",i),o=i.NFTIds,c=i.purchaseTokenApproved,l=i.sellingStartTime,x=i.isInWhitelist,m=i.nativeBalance,v=i.buyBoxTokenBalance,g=i.heroMainTokenBalance,b=i.boxes,h=i.airdropBoxes,y=c,w=p()(),k=l>0&&w.isAfter(l),Z=o,a.next=13,e.checkFHTApproved();case 13:return N=a.sent,a.next=16,e.getInviteesInfo(n);case 16:return j=a.sent,a.abrupt("return",{config:i,isApproved:y,isWithinSellingPeriod:k,isInWhitelist:x,nftIds:Z,nativeBalance:m,buyBoxTokenBalance:v,heroMainTokenBalance:g,boxes:b,airdropBoxes:h,DHTApproved:N,inviteesInfo:j,approve:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r="",y){n.next=8;break}return n.next=4,e.approveToken();case 4:return r=n.sent,n.next=7,t.invalidateQueries("queryHero");case 7:d.Z.success({message:"Approve BUSD Succeed"});case 8:return n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),approveDHT:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.approveDHT();case 2:return r=n.sent,n.next=5,t.invalidateQueries("queryHero");case 5:return n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),buyBoxesWithInviter:function(){var n=(0,r.Z)(s().mark((function n(r,a){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.buyBoxesWithInviter(r,a);case 2:return i=n.sent,n.next=5,t.invalidateQueries("queryHero");case 5:return n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),buyAndOpenBoxesWithInviter:function(){var n=(0,r.Z)(s().mark((function n(r,a){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y){n.next=6;break}return n.next=3,e.approveToken();case 3:return n.next=5,t.invalidateQueries("queryHero");case 5:d.Z.success({message:"approve success"});case 6:if(k){n.next=11;break}return d.Z.error({message:"sell not start"}),n.abrupt("return",[]);case 11:return n.next=13,e.buyAndOpenBoxesWithInviter(r,a);case 13:return i=n.sent,n.next=16,t.invalidateQueries("queryHero");case 16:return n.abrupt("return",i);case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),openBoxes:function(){var n=(0,r.Z)(s().mark((function n(r){var a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.openBoxes(r);case 2:return a=n.sent,n.next=5,t.invalidateQueries("queryHero");case 5:return n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),mergeNFT:function(){var n=(0,r.Z)(s().mark((function n(r){var a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,f.f)(N),N){n.next=8;break}return d.Z.success({message:"start approve DHT"}),n.next=5,e.approveDHT();case 5:return n.next=7,t.invalidateQueries("queryHero");case 7:d.Z.success({message:"approve DHT succeed"});case 8:return n.next=10,e.mergeNFT(r);case 10:return a=n.sent,n.next=13,t.invalidateQueries("queryHero");case 13:return n.abrupt("return",a);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),generateAttack:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,f.f)("nftIds",Z),n.next=3,e.generateAttack(Z);case 3:return r=n.sent,n.next=6,t.invalidateQueries("queryHero");case 6:return n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()});case 18:case"end":return a.stop()}}),a)}))),{enabled:!!n&&!!e})}function m(){var e=(0,i.LM)(),n=(0,o.K)().account,t=(0,c.useQueryClient)();return(0,c.useQuery)(["queryWeapon",{account:n}],(0,r.Z)(s().mark((function a(){var i,o,c,l,x,m,v,g,b,h,y,w,k,Z,N,j;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(0,u.Kc)(e),(0,u.Kc)(n),a.next=4,e.getConfig(n);case 4:return i=a.sent,(0,f.f)("queryWeapon config",i),o=i.NFTIds,c=i.purchaseTokenApproved,l=i.sellingStartTime,x=i.isInWhitelist,m=i.nativeBalance,v=i.buyBoxTokenBalance,g=i.heroMainTokenBalance,b=i.boxes,h=i.airdropBoxes,y=c,w=p()(),k=l>0&&w.isAfter(l),Z=o,a.next=13,e.checkFHTApproved();case 13:return N=a.sent,a.next=16,e.getInviteesInfo(n);case 16:return j=a.sent,a.abrupt("return",{config:i,isApproved:y,isWithinSellingPeriod:k,isInWhitelist:x,nftIds:Z,nativeBalance:m,buyBoxTokenBalance:v,heroMainTokenBalance:g,boxes:b,airdropBoxes:h,DHTApproved:N,inviteesInfo:j,approve:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r="",y){n.next=8;break}return n.next=4,e.approveToken();case 4:return r=n.sent,n.next=7,t.invalidateQueries("queryWeapon");case 7:d.Z.success({message:"Approve BUSD Succeed"});case 8:return n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),approveDHT:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.approveDHT();case 2:return r=n.sent,n.next=5,t.invalidateQueries("queryWeapon");case 5:return n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),buyBoxesWithInviter:function(){var n=(0,r.Z)(s().mark((function n(r,a){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.buyBoxesWithInviter(r,a);case 2:return i=n.sent,n.next=5,t.invalidateQueries("queryWeapon");case 5:return n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),buyAndOpenBoxesWithInviter:function(){var n=(0,r.Z)(s().mark((function n(r,a){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y){n.next=6;break}return n.next=3,e.approveToken();case 3:return n.next=5,t.invalidateQueries("queryWeapon");case 5:d.Z.success({message:"approve success"});case 6:if(k){n.next=11;break}return d.Z.error({message:"sell not start"}),n.abrupt("return",[]);case 11:return n.next=13,e.buyAndOpenBoxesWithInviter(r,a);case 13:return i=n.sent,n.next=16,t.invalidateQueries("queryWeapon");case 16:return n.abrupt("return",i);case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),openBoxes:function(){var n=(0,r.Z)(s().mark((function n(r){var a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.openBoxes(r);case 2:return a=n.sent,n.next=5,t.invalidateQueries("queryWeapon");case 5:return n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),mergeNFT:function(){var n=(0,r.Z)(s().mark((function n(r){var a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,f.f)(N),N){n.next=8;break}return d.Z.success({message:"start approve DHT"}),n.next=5,e.approveDHT();case 5:return n.next=7,t.invalidateQueries("queryWeapon");case 7:d.Z.success({message:"approve DHT succeed"});case 8:return n.next=10,e.mergeNFT(r);case 10:return a=n.sent,n.next=13,t.invalidateQueries("queryWeapon");case 13:return n.abrupt("return",a);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),generateAttack:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,f.f)("nftIds",Z),n.next=3,e.generateAttack(Z);case 3:return r=n.sent,n.next=6,t.invalidateQueries("queryWeapon");case 6:return n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()});case 18:case"end":return a.stop()}}),a)}))),{enabled:!!n&&!!e})}},9563:function(e,n,t){t.d(n,{W:function(){return u}});var r,a=t(7186),s=(t(7313),t(1114)),i=t(508),o=t(9184),c=t(6417),u=function(e){var n=e.className,t=e.NFTInfo,r=e.enableSelect,a=e.toggleNFT;if(!t)return(0,c.jsx)("div",{});var o=t.tokenId,u=t.rarity?t.rarity:"1";return(u<"1"||u>"5")&&(u="1"),(0,c.jsxs)(l,{className:"relative rounded-md  ".concat(t.isSelected?"shadow-xl ring-4 ring-red-800":""),onClick:function(){return r&&a(o)},children:[t.isBuilt&&(0,c.jsx)("div",{className:"absolute inset-0 bg-black/70","aria-hidden":"true"}),r&&t.isSelected&&(0,c.jsx)("div",{className:"absolute inset-0 bg-black/20","aria-hidden":"true"}),(0,c.jsx)(i.Z,{src:(0,s.vg)("weapon/nft_weapon_0".concat(u,".png")),autoPlay:!0,className:n}),(0,c.jsxs)("div",{className:"absolute bottom-[8%] left-[18%] w-[8rem] flex justify-between items-center text-[#28170B] md:text-xs text-xs",children:[(0,c.jsx)("div",{className:"absolute left-[0%]",children:t.attack}),(0,c.jsxs)("div",{className:"absolute right-[37%]",children:["#",o]})]}),(0,c.jsx)("img",{className:"absolute left-[40%] top-[43%] ".concat(t.isBuilt?"block":"hidden"),src:(0,s.vg)("mining/staked-status.png"),alt:"staked-status"})]})},l=o.ZP.div(r||(r=(0,a.Z)([""])))},3483:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var r,a=t(5531),s=t(3032),i=t(3430),o=t(7186),c=t(4322),u=t.n(c),l=t(7313),p=(t(9560),t(8552)),f=(t(6321),t(9466)),d=t(7504),x=t(8805),m=t(1843),v=t(8197),g=t(3690),b=t(9491),h=t(9624),y=t(3912),w=t(7671),k=t(7998),Z=t(1114),N=t(6487),j=t(1871),T=t(9184),C=t(1361),I=t(8955),B=t(56),S=t(8489),F=t(508),M=t(6417),A="opening",W="end",E=(0,Z.vg)("weapon/box_weapon_normal.png"),P=(0,Z.vg)("weapon/box_weapon_opening.png"),D=(0,Z.vg)("weapon/box_weapon_open.png"),O=function(e){return(0,M.jsx)(F.Z,(0,S.Z)((0,S.Z)({},e),{},{src:e.status===A?P:e.status===W?D:E,autoPlay:!0,isOneTime:e.status===W}))},Q=t(3557),q=t(9563),z=t(1733),H=t.n(z),_=t(6749),L=t(3122),R=T.ZP.div(r||(r=(0,o.Z)(["\n  width: 40%;\n  input.ant-input::placeholder {\n    color: rgba(69, 73, 80, 0.81);\n  }\n\n  @media (max-width: 768px) {\n    width: 70%;\n  }\n"]))),K=function(){var e=(0,k.K)().account,n=(0,f.lr)(),t=(0,i.Z)(n,1)[0],r=(0,C.t)(),o=r.data,c=r.isLoading,T=(0,l.useState)(!1),S=(0,i.Z)(T,2),F=S[0],E=S[1],P=(0,l.useState)(""),D=(0,i.Z)(P,2),z=D[0],K=D[1],U=(0,l.useState)(!1),X=(0,i.Z)(U,2),G=X[0],V=X[1],$=(0,l.useState)([]),J=(0,i.Z)($,2),Y=J[0],ee=J[1],ne=(0,l.useState)([]),te=(0,i.Z)(ne,2),re=te[0],ae=te[1],se=(0,l.useState)(1),ie=(0,i.Z)(se,2),oe=ie[0],ce=ie[1],ue=window.innerWidth>768?6:2,le=(0,B.useMutation)((0,s.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,Z.Kc)(o),(0,I.f)("open Box inviter",be),e.next=4,o.buyAndOpenBoxesWithInviter(Number(z),be);case 4:if(!(n=e.sent)){e.next=10;break}return V(!0),e.next=9,(0,Z.gk)(500);case 9:ee(n.map((function(e){return e.toString()})));case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)}))),{onError:function(){var e=(0,s.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.Z.error({message:"open box failed",description:null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}),pe=le.mutate,fe=le.isLoading,de=(0,B.useMutation)((0,s.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,Z.Kc)(o),e.next=3,o.openBoxes(Number(z));case 3:if(!(n=e.sent)){e.next=9;break}return V(!0),e.next=8,(0,Z.gk)(500);case 8:ee(n.map((function(e){return e.toString()})));case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)}))),{onError:function(){var e=(0,s.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.Z.error({message:"open box failed",description:null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}),xe=(de.mutate,de.isLoading),me=(0,B.useMutation)((0,s.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,Z.Kc)(o),e.next=3,o.mergeNFT(re);case 3:if(!((n=e.sent)&&n.length>0)){e.next=11;break}return V(!0),e.next=8,(0,Z.gk)(500);case 8:ee(n.map((function(e){return e.toString()}))),e.next=12;break;case 11:m.Z.info({message:"upgrade failed"});case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)}))),{onError:function(){var e=(0,s.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.Z.error({message:"send upgrade tx failed",description:null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}),ve=me.mutate,ge=me.isLoading,be=(0,l.useMemo)((function(){var e=t.get("inviter");return e&&p.isAddress(e)?e:""}),[t]);if(!e)return(0,M.jsx)("div",{className:"flex justify-center items-center mt-[20rem]",children:(0,M.jsx)(x.pB,{type:"primary"})});if(c||!o)return(0,M.jsx)(x.gb,{});var he=function(e){return o&&e in o.config.NFTInfoMap?H()((0,_.formatEther)(o.config.NFTInfoMap[e].hashPower)).format("0,0"):"-"},ye=function(e){return o&&e in o.config.NFTInfoMap?H()((0,_.formatEther)(o.config.NFTInfoMap[e].attack)).format("0,0"):"-"},we=function(e){return o&&e in o.config.NFTInfoMap?o.config.NFTInfoMap[e].name:"-"},ke=function(e){return o&&e in o.config.NFTInfoMap?o.config.NFTInfoMap[e].rarity:"-"},Ze=(o?o.nftIds:[]).sort((function(e,n){var t=o.config.NFTInfoMap[e].attack,r=o.config.NFTInfoMap[n].attack;return t.gt(r)?-1:1})),Ne=function(e){ae((function(n){if(n.includes(e)){var t=(0,a.Z)(n);return(0,I.f)(t.filter((function(n){return n!==e}))),t.filter((function(n){return n!==e}))}return n.length<2?((0,I.f)([].concat((0,a.Z)(n),[e])),[].concat((0,a.Z)(n),[e])):(0,a.Z)(n)}))},je=function(e){return o&&e in o.config.NFTInfoMap?H()((0,_.formatEther)(o.config.NFTInfoMap[e].attack)).format("0,0"):"-"},Te=function(e){return o&&e in o.config.NFTInfoMap?o.config.NFTInfoMap[e].rarity:"-"};return(0,M.jsxs)("div",{className:"px-4 container mx-auto",children:[(0,M.jsx)("div",{className:"h-32 flex justify-center mx-auto text-center bg-[url(/public/assets/hero/hero-title-bar.png)] bg-no-repeat bg-center bg-contain mt-6 text-2xl",children:(0,M.jsxs)("span",{className:"inline-block mt-16 text-[#FFDDA8] font-bold",children:[" ",(0,M.jsx)(Q.xv,{tid:"weapon-box"})," "]})}),o.config.sellingStartTime>0&&!o.isWithinSellingPeriod&&e&&(0,M.jsx)(x.IT,{targetDatetime:o.config.sellingStartTime}),(0,M.jsx)(v.Z,{justify:"center",className:"md:mt-4 mt-[1rem] h-100 flex justify-center items-center bg-[url(/public/assets/hero/bg-box.png)] bg-no-repeat bg-center bg-contain",children:(0,M.jsx)(O,{status:G?W:fe||xe?A:"before",className:"block w-11/12 md:w-9/12 center"})}),(0,M.jsx)(v.Z,{gutter:16,justify:"center",className:"flex justify-center mt3 mt4-ns w-full",children:(0,M.jsx)("div",{className:"flex flex-wrap flex-nowrap-ns justify-center w-full mb-[20rem]",children:(0,M.jsxs)(R,{children:[(0,M.jsx)(g.Z,{className:"ba b--gray mr-2 mb-2 mt-2 h-10 text-1xl",disabled:fe||xe,value:z,onChange:function(e){return(/^[1-9]\d*$/.test(e.target.value)||""===e.target.value)&&K(e.target.value)},placeholder:"Boxes Count",suffix:(0,M.jsx)(b.Z,{size:"small",type:"link",onClick:function(){(0,Z.Kc)(o);var e=o.config.boxes;e>10&&(e=10),K(e.toString())},children:"MAX"})}),(0,M.jsxs)(v.Z,{className:"w-full flex justify-between",children:[(0,M.jsx)(h.Z,{sm:12,md:12,lg:10,children:(0,M.jsxs)("div",{className:"text-[#FFDDA8] w-auto text-[0.7rem] md:text-[1rem]",children:[(0,M.jsx)(Q.xv,{tid:"box-price"}),": ",(0,j.R)(o.config.purchasePrice)]})}),(0,M.jsx)(h.Z,{sm:12,md:12,lg:10,className:"",children:(0,M.jsxs)("div",{className:"text-[#FFDDA8] w-auto text-[0.7rem] md:text-[1rem] inline-block",children:[(0,M.jsx)(Q.xv,{tid:"balance"}),": ",(0,j.R)({currency:N.rg,value:o.buyBoxTokenBalance})]})})]}),!o.isInWhitelist&&(0,M.jsx)("div",{className:"fixed inset-0 bg-black/60","aria-hidden":"true"}),(0,M.jsxs)("div",{className:"mt-4 w-full flex items-center",children:[o.isInWhitelist?(0,M.jsxs)(d.X,{loading:fe||xe,className:"text-white bg-[url(/public/assets/hero/button-open-left.png)] bg-contain bg-no-repeat bg-center px-4 py-4 w-6/12 md:text-2xl text-xs",type:"primary",onClick:(0,s.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:pe();case 1:case"end":return e.stop()}}),e)}))),children:[(fe||xe)&&(o.isApproved,"Opening..."),!fe&&!xe&&(o.isApproved,(0,M.jsx)(Q.xv,{tid:"open-box"}))]}):(0,M.jsx)(d.X,{disabled:!o.buyBoxTokenBalance||!z,className:"text-white bg-[url(/public/assets/hero/button-open-left.png)] bg-contain bg-no-repeat bg-center px-4 py-4 w-6/12 md:text-2xl text-xs",children:"Not Whitelist"}),(0,M.jsx)(d.X,{className:"bg-[url(/public/assets/hero/button-open-right.png)] bg-contain bg-no-repeat bg-center px-4 py-4 w-6/12 md:text-2xl text-xs text-white",type:"primary",onClick:function(){return E(!0)},children:(0,M.jsx)(Q.xv,{tid:"upgrade"})})]})]})})}),(0,M.jsx)(y.Z,{maskStyle:{background:"rgba(0,0,0,.95)"},visible:F,onCancel:function(){return E(!1)},footer:null,closable:!1,className:"gaming relative z-50",children:(0,M.jsxs)("div",{className:"w-9/12 mt-10 flex flex-col justify-center items-center",children:[(0,M.jsx)(v.Z,{gutter:10,justify:"start",className:"flex items-center justify-center relative top-[1.5rem] md:h-[26rem] md:w-[28rem] h-[12rem] w-[21.5rem] overflow-hidden scroll",children:Ze.slice((oe-1)*ue,oe*ue).map((function(e,n){return(0,M.jsx)(h.Z,{xs:12,sm:12,md:8,lg:8,className:"flex justify-center items-center mb-2",children:(0,M.jsx)(q.W,{className:"w-[8.6rem] hover:cursor-pointer",NFTInfo:{name:we(e),rarity:Te(e),tokenId:e,hashPower:he(e),attack:je(e),isSelected:re.includes(e)},enableSelect:!0,toggleNFT:Ne})},e+n)}))}),(0,M.jsx)(w.Z,{className:"absolute bottom-[1rem] left-[3rem] z-999",size:"small",pageSize:ue,total:Ze.length,onChange:function(e){return ce(e)},current:oe,hideOnSinglePage:!1,showSizeChanger:!1}),(0,M.jsxs)("div",{className:"relative left-[10rem] top-[2rem] md:text-xl text-lg text-[#FFDDA8] font-extrabold md:w-[10rem] md:h-[4.3rem] w-[17rem] h-[3.5rem] flex flex-col justify-center items-center  bg-[url(/public/assets/mining/button-pink.png)] bg-contain bg-center bg-no-repeat cursor-pointer",onClick:(0,s.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!re||re.length>2||re.length<1)){e.next=3;break}return m.Z.error({message:"only 2 weapons for upgrade"}),e.abrupt("return");case 3:return e.next=5,ve();case 5:case"end":return e.stop()}}),e)}))),children:[ge&&(0,M.jsx)(L.fCD,{className:"animate-spin inline-block mx-auto"}),!ge&&(0,M.jsx)(Q.xv,{tid:"upgrade"})]})]})}),(0,M.jsxs)(y.Z,{visible:G&&Y.length>0,maskStyle:{background:"rgba(0,0,0,.95)"},width:800,footer:null,closable:!1,children:[(0,M.jsx)(v.Z,{gutter:24,justify:"center",children:Y.map((function(e){return(0,M.jsx)(h.Z,{xs:12,sm:12,md:6,lg:6,className:"mb-4",children:(0,M.jsx)(q.W,{className:"w-[10.2rem] hover:cursor-pointer",NFTInfo:((0,I.f)("tokenIdStr",e,we(e)),{name:we(e),rarity:ke(e),tokenId:e,hashPower:he(e),attack:ye(e),isStaked:!1,isSelected:!1}),enableSelect:!1,toggleNFT:function(){}})},e)}))}),(0,M.jsx)(b.Z,{onClick:function(){V(!1),ee([])},className:"center mw5 tc db shadow-3",block:!0,type:"primary",children:(0,M.jsx)(Q.xv,{tid:"collect"})})]})]})}},3690:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(7462),a=t(4942),s=t(6123),i=t.n(s),o=t(7313),c=t(4714),u=t(4431),l=function(e){var n,t=(0,o.useContext)(c.E_),s=t.getPrefixCls,l=t.direction,p=e.prefixCls,f=e.className,d=void 0===f?"":f,x=s("input-group",p),m=i()(x,(n={},(0,a.Z)(n,"".concat(x,"-lg"),"large"===e.size),(0,a.Z)(n,"".concat(x,"-sm"),"small"===e.size),(0,a.Z)(n,"".concat(x,"-compact"),e.compact),(0,a.Z)(n,"".concat(x,"-rtl"),"rtl"===l),n),d),v=(0,o.useContext)(u.aM),g=(0,o.useMemo)((function(){return(0,r.Z)((0,r.Z)({},v),{isFormItemInput:!1})}),[v]);return o.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},o.createElement(u.aM.Provider,{value:g},e.children))},p=t(9919),f=t(9439),d=t(8428),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},m=t(3718),v=function(e,n){return o.createElement(m.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:n,icon:x}))};v.displayName="EyeInvisibleOutlined";var g=o.forwardRef(v),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},h=function(e,n){return o.createElement(m.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:n,icon:b}))};h.displayName="EyeOutlined";var y=o.forwardRef(h),w=t(205),k=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},Z={click:"onClick",hover:"onMouseOver"},N=o.forwardRef((function(e,n){var t=(0,o.useState)(!1),s=(0,f.Z)(t,2),u=s[0],l=s[1],d=function(){e.disabled||l(!u)},x=function(t){var s=t.getPrefixCls,c=e.className,l=e.prefixCls,f=e.inputPrefixCls,x=e.size,m=e.visibilityToggle,v=k(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),g=s("input",f),b=s("input-password",l),h=m&&function(n){var t,r=e.action,s=e.iconRender,i=Z[r]||"",c=(void 0===s?function(){return null}:s)(u),l=(t={},(0,a.Z)(t,i,d),(0,a.Z)(t,"className","".concat(n,"-icon")),(0,a.Z)(t,"key","passwordIcon"),(0,a.Z)(t,"onMouseDown",(function(e){e.preventDefault()})),(0,a.Z)(t,"onMouseUp",(function(e){e.preventDefault()})),t);return o.cloneElement(o.isValidElement(c)?c:o.createElement("span",null,c),l)}(b),y=i()(b,c,(0,a.Z)({},"".concat(b,"-").concat(x),!!x)),N=(0,r.Z)((0,r.Z)({},(0,w.Z)(v,["suffix","iconRender"])),{type:u?"text":"password",className:y,prefixCls:g,suffix:h});return x&&(N.size=x),o.createElement(p.ZP,(0,r.Z)({ref:n},N))};return o.createElement(c.C,null,x)}));N.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(e){return e?o.createElement(y,null):o.createElement(g,null)}};var j=N,T=t(765),C=t(6945),I=t(9491),B=t(1631),S=t(8138),F=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};var M=o.forwardRef((function(e,n){var t,s,u=e.prefixCls,l=e.inputPrefixCls,f=e.className,d=e.size,x=e.suffix,m=e.enterButton,v=void 0!==m&&m,g=e.addonAfter,b=e.loading,h=e.disabled,y=e.onSearch,w=e.onChange,k=e.onCompositionStart,Z=e.onCompositionEnd,N=F(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),j=o.useContext(c.E_),M=j.getPrefixCls,A=j.direction,W=o.useContext(B.Z),E=o.useRef(!1),P=d||W,D=o.useRef(null),O=function(e){var n;document.activeElement===(null===(n=D.current)||void 0===n?void 0:n.input)&&e.preventDefault()},Q=function(e){var n,t;y&&y(null===(t=null===(n=D.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},q=M("input-search",u),z=M("input",l),H="boolean"===typeof v?o.createElement(T.Z,null):null,_="".concat(q,"-button"),L=v||{},R=L.type&&!0===L.type.__ANT_BUTTON;s=R||"button"===L.type?(0,S.Tm)(L,(0,r.Z)({onMouseDown:O,onClick:function(e){var n,t;null===(t=null===(n=null===L||void 0===L?void 0:L.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),Q(e)},key:"enterButton"},R?{className:_,size:P}:{})):o.createElement(I.Z,{className:_,type:v?"primary":void 0,size:P,disabled:h,key:"enterButton",onMouseDown:O,onClick:Q,loading:b,icon:H},v),g&&(s=[s,(0,S.Tm)(g,{key:"addonAfter"})]);var K=i()(q,(t={},(0,a.Z)(t,"".concat(q,"-rtl"),"rtl"===A),(0,a.Z)(t,"".concat(q,"-").concat(P),!!P),(0,a.Z)(t,"".concat(q,"-with-button"),!!v),t),f);return o.createElement(p.ZP,(0,r.Z)({ref:(0,C.sQ)(D,n),onPressEnter:function(e){E.current||Q(e)}},N,{size:P,onCompositionStart:function(e){E.current=!0,null===k||void 0===k||k(e)},onCompositionEnd:function(e){E.current=!1,null===Z||void 0===Z||Z(e)},prefixCls:z,addonAfter:s,suffix:x,onChange:function(e){e&&e.target&&"click"===e.type&&y&&y(e.target.value,e),w&&w(e)},className:K,disabled:h}))})),A=t(5907),W=p.ZP;W.Group=l,W.Search=M,W.TextArea=A.Z,W.Password=j;var E=W}}]);