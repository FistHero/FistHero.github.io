"use strict";(self.webpackChunkfisthero_ui=self.webpackChunkfisthero_ui||[]).push([[260],{1361:function(e,n,t){t.d(n,{t:function(){return g},u:function(){return f}});var r=t(3032),a=t(4322),s=t.n(a),i=t(334),c=t(7998),u=t(56),o=t(1114),l=t(658),d=t.n(l),m=t(8955),p=t(1843);function f(){var e=(0,i.I1)(),n=(0,c.K)().account,t=(0,u.useQueryClient)();return(0,u.useQuery)(["queryHero",{account:n}],(0,r.Z)(s().mark((function a(){var i,c,u,l,f,g,x,b,v,h,w,k,y,j,I,N;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(0,o.Kc)(e),(0,o.Kc)(n),a.next=4,e.getConfig(n);case 4:return i=a.sent,(0,m.f)("hero config",i),c=i.NFTIds,u=i.purchaseTokenApproved,l=i.sellingStartTime,f=i.isInWhitelist,g=i.nativeBalance,x=i.buyBoxTokenBalance,b=i.heroMainTokenBalance,v=i.boxes,h=i.airdropBoxes,w=u,k=d()(),y=l>0&&k.isAfter(l),j=c,a.next=13,e.checkFHTApproved();case 13:return I=a.sent,a.next=16,e.getInviteesInfo(n);case 16:return N=a.sent,a.abrupt("return",{config:i,isApproved:w,isWithinSellingPeriod:y,isInWhitelist:f,nftIds:j,nativeBalance:g,buyBoxTokenBalance:x,heroMainTokenBalance:b,boxes:v,airdropBoxes:h,DHTApproved:I,inviteesInfo:N,approve:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r="",w){n.next=8;break}return n.next=4,e.approveToken();case 4:return r=n.sent,n.next=7,t.invalidateQueries("queryHero");case 7:p.Z.success({message:"Approve BUSD Succeed"});case 8:return n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),approveDHT:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.approveDHT();case 2:return r=n.sent,n.next=5,t.invalidateQueries("queryHero");case 5:return n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),buyBoxesWithInviter:function(){var n=(0,r.Z)(s().mark((function n(r,a){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.buyBoxesWithInviter(r,a);case 2:return i=n.sent,n.next=5,t.invalidateQueries("queryHero");case 5:return n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),buyAndOpenBoxesWithInviter:function(){var n=(0,r.Z)(s().mark((function n(r,a){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(w){n.next=6;break}return n.next=3,e.approveToken();case 3:return n.next=5,t.invalidateQueries("queryHero");case 5:p.Z.success({message:"approve success"});case 6:if(y){n.next=11;break}return p.Z.error({message:"sell not start"}),n.abrupt("return",[]);case 11:return n.next=13,e.buyAndOpenBoxesWithInviter(r,a);case 13:return i=n.sent,n.next=16,t.invalidateQueries("queryHero");case 16:return n.abrupt("return",i);case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),openBoxes:function(){var n=(0,r.Z)(s().mark((function n(r){var a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.openBoxes(r);case 2:return a=n.sent,n.next=5,t.invalidateQueries("queryHero");case 5:return n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),mergeNFT:function(){var n=(0,r.Z)(s().mark((function n(r){var a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,m.f)(I),I){n.next=8;break}return p.Z.success({message:"start approve DHT"}),n.next=5,e.approveDHT();case 5:return n.next=7,t.invalidateQueries("queryHero");case 7:p.Z.success({message:"approve DHT succeed"});case 8:return n.next=10,e.mergeNFT(r);case 10:return a=n.sent,n.next=13,t.invalidateQueries("queryHero");case 13:return n.abrupt("return",a);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),generateAttack:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,m.f)("nftIds",j),n.next=3,e.generateAttack(j);case 3:return r=n.sent,n.next=6,t.invalidateQueries("queryHero");case 6:return n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()});case 18:case"end":return a.stop()}}),a)}))),{enabled:!!n&&!!e})}function g(){var e=(0,i.LM)(),n=(0,c.K)().account,t=(0,u.useQueryClient)();return(0,u.useQuery)(["queryWeapon",{account:n}],(0,r.Z)(s().mark((function a(){var i,c,u,l,f,g,x,b,v,h,w,k,y,j,I,N;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(0,o.Kc)(e),(0,o.Kc)(n),a.next=4,e.getConfig(n);case 4:return i=a.sent,(0,m.f)("queryWeapon config",i),c=i.NFTIds,u=i.purchaseTokenApproved,l=i.sellingStartTime,f=i.isInWhitelist,g=i.nativeBalance,x=i.buyBoxTokenBalance,b=i.heroMainTokenBalance,v=i.boxes,h=i.airdropBoxes,w=u,k=d()(),y=l>0&&k.isAfter(l),j=c,a.next=13,e.checkFHTApproved();case 13:return I=a.sent,a.next=16,e.getInviteesInfo(n);case 16:return N=a.sent,a.abrupt("return",{config:i,isApproved:w,isWithinSellingPeriod:y,isInWhitelist:f,nftIds:j,nativeBalance:g,buyBoxTokenBalance:x,heroMainTokenBalance:b,boxes:v,airdropBoxes:h,DHTApproved:I,inviteesInfo:N,approve:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r="",w){n.next=8;break}return n.next=4,e.approveToken();case 4:return r=n.sent,n.next=7,t.invalidateQueries("queryWeapon");case 7:p.Z.success({message:"Approve BUSD Succeed"});case 8:return n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),approveDHT:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.approveDHT();case 2:return r=n.sent,n.next=5,t.invalidateQueries("queryWeapon");case 5:return n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),buyBoxesWithInviter:function(){var n=(0,r.Z)(s().mark((function n(r,a){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.buyBoxesWithInviter(r,a);case 2:return i=n.sent,n.next=5,t.invalidateQueries("queryWeapon");case 5:return n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),buyAndOpenBoxesWithInviter:function(){var n=(0,r.Z)(s().mark((function n(r,a){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(w){n.next=6;break}return n.next=3,e.approveToken();case 3:return n.next=5,t.invalidateQueries("queryWeapon");case 5:p.Z.success({message:"approve success"});case 6:if(y){n.next=11;break}return p.Z.error({message:"sell not start"}),n.abrupt("return",[]);case 11:return n.next=13,e.buyAndOpenBoxesWithInviter(r,a);case 13:return i=n.sent,n.next=16,t.invalidateQueries("queryWeapon");case 16:return n.abrupt("return",i);case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),openBoxes:function(){var n=(0,r.Z)(s().mark((function n(r){var a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.openBoxes(r);case 2:return a=n.sent,n.next=5,t.invalidateQueries("queryWeapon");case 5:return n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),mergeNFT:function(){var n=(0,r.Z)(s().mark((function n(r){var a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,m.f)(I),I){n.next=8;break}return p.Z.success({message:"start approve DHT"}),n.next=5,e.approveDHT();case 5:return n.next=7,t.invalidateQueries("queryWeapon");case 7:p.Z.success({message:"approve DHT succeed"});case 8:return n.next=10,e.mergeNFT(r);case 10:return a=n.sent,n.next=13,t.invalidateQueries("queryWeapon");case 13:return n.abrupt("return",a);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),generateAttack:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,m.f)("nftIds",j),n.next=3,e.generateAttack(j);case 3:return r=n.sent,n.next=6,t.invalidateQueries("queryWeapon");case 6:return n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()});case 18:case"end":return a.stop()}}),a)}))),{enabled:!!n&&!!e})}},1158:function(e,n,t){t.d(n,{o:function(){return h}});var r=t(3032),a=t(4322),s=t.n(a),i=t(334),c=t(7998),u=t(56),o=t(1114),l=t(8955),d=t(658),m=t.n(d),p=t(1635),f=t.n(p),g=t(9694),x=t.n(g),b=t(6446),v=t.n(b);function h(){var e="queryHeroGame",n=(0,i.T6)(),t=(0,c.K)().account,a=(0,u.useQueryClient)();return(0,u.useQuery)([e,{account:t}],(0,r.Z)(s().mark((function i(){var c,u,d,p,f,g,x,b,v,h,w,k;return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return(0,o.Kc)(n),(0,o.Kc)(t),i.next=4,n.getGameInfo(t);case 4:if(c=i.sent,u=c.squadIds,d=c.pendingRewards,p=c.fightInfos,f=c._pendingReward,g=c._lastClaimTime,x=c._rewardFee,(0,l.f)("hero game config",c),b={},!(u&&p&&p.length>0)){i.next=20;break}v=0;case 10:if(!(v<u.length)){i.next=20;break}if(h=c.squadIds[v],p[v]){i.next=14;break}return i.abrupt("continue",17);case 14:w=p[v].fightStartAt.mul(1e3).toNumber(),k=p[v].fightEndAt.mul(1e3).toNumber(),b[h]={fightStartTime:w,fightEndTime:k,isFighting:m()().isAfter(w)&&m()().isBefore(k),heroIds:p[v].Heroes.map((function(e){return e.toString()})),weaponIds:p[v].Weapons.map((function(e){return e.toString()})),fightPendingReward:d[v],fightClaimedReward:p[v].claimedReward,pendingReward:f,lastClaimTime:g.mul(1e3).toNumber(),rewardFee:x.toNumber(),attack:p[v].attack};case 17:v++,i.next=10;break;case 20:return i.abrupt("return",{config:c,squadIdToFightInfo:b,createSquad:function(){var t=(0,r.Z)(s().mark((function t(r,i){var c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createSquad(r,i);case 2:return c=t.sent,t.next=5,a.invalidateQueries(e);case 5:return t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),fight:function(){var t=(0,r.Z)(s().mark((function t(r,i){var c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.fight(r,i);case 2:return c=t.sent,t.next=5,a.invalidateQueries(e);case 5:return t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),deleteSquad:function(){var t=(0,r.Z)(s().mark((function t(r){var i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.deleteSquad(r);case 2:return i=t.sent,t.next=5,a.invalidateQueries(e);case 5:return t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),transferSquadToPendingReward:function(){var t=(0,r.Z)(s().mark((function t(r){var i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.transferSquadToPendingReward(r);case 2:return i=t.sent,t.next=5,a.invalidateQueries(e);case 5:return t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),claimFightReward:function(){var t=(0,r.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.claimFightReward();case 2:return r=t.sent,t.next=5,a.invalidateQueries(e);case 5:return t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()});case 21:case"end":return i.stop()}}),i)}))),{enabled:!!t&&!!n})}m().extend(f()),m().extend(x()),m().extend(v())},6260:function(e,n,t){t.r(n),t.d(n,{FullContainer:function(){return B},StartModal:function(){return A}});var r,a=t(7186),s=t(3430),i=t(7313),c=t(7890),u=t(9466),o=t(1843),l=t(8197),d=t(9624),m=t(3912),p=t(1114),f=t(9184),g=t(8805),x=t(5035),b=t(1361),v=t(1733),h=t.n(v),w=t(6749),k=t(56),y=t(1158),j=t(508),I=t(9560),N=t(8955),T=t(3557),Z=t(3122),F=t(658),q=t.n(F),D=t(6417);n.default=function(){var e,n=(0,b.u)(),t=n.data,r=(n.isLoading,(0,y.o)()),a=r.data,m=(r.isLoading,(0,i.useState)(!1)),f=(0,s.Z)(m,2),v=f[0],T=f[1],Z=(0,i.useState)(!1),F=(0,s.Z)(Z,2),q=F[0],_=F[1],S=(0,i.useState)(!1),Q=(0,s.Z)(S,2),H=Q[0],W=Q[1],C=(0,c.bS)("/gaming/:subPath"),M=null===C||void 0===C||null===(e=C.params.subPath)||void 0===e?void 0:e.split("-"),R=(0,s.Z)(M,2),P=R[0],K=R[1];console.log("scene",P,"squadId",K);var E=[],O=!1,L=0,U=!1;a&&a.squadIdToFightInfo&&a.squadIdToFightInfo[K]&&(O=a.squadIdToFightInfo[K].isFighting,E=a.squadIdToFightInfo[K].heroIds,L=a.squadIdToFightInfo[K].fightEndTime,U=a.squadIdToFightInfo[K].pendingReward.gt(I.O$.from(0)),(0,N.f)("game.squadIdToFightInfo[squadId]",a.squadIdToFightInfo[K]));var $=(0,k.useMutation)((function(){return(0,p.Kc)(a),a.claimFightReward()}),{onSuccess:function(){o.Z.success({message:"claim success"})},onError:function(e){var n;return o.Z.error({message:"claim failed",description:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message})}}),z=$.mutateAsync,G=($.isLoading,function(e){return t&&e in t.config.NFTInfoMap?t.config.NFTInfoMap[e].name.toLowerCase():"-"}),V=function(e){return t&&e in t.config.NFTInfoMap?t.config.NFTInfoMap[e].rarity:"-"};return(0,D.jsxs)(B,{className:"gaming",children:[(null===C||void 0===C?void 0:C.params.subPath)&&(0,D.jsx)("img",{className:"bg-full",src:(0,p.vg)("gaming/boss_scene_desktop/boss_scene".concat(P,"_desktop.png")),alt:"gaming"}),(0,D.jsxs)("div",{className:"header mask  text-2xl text-[#FFDDA8]]",children:[(0,D.jsx)(u.rU,{to:"/gaming",children:(0,D.jsx)("div",{className:"absolute  mt-[0.2rem] left-[0.7rem] w-[4rem]  flex flex-row justify-center  items-center",children:(0,D.jsx)("div",{className:"clickable w-[9rem] h-[5rem] mr-2 bg-[url(/public/assets/gaming/button-back.png)] bg-contain bg-center bg-no-repeat"})})}),(0,D.jsx)(g.pB,{type:"primary",className:"hidden md:block clickable absolute left-[5.5rem] w-[10rem] h-[4rem] leading-[1.8rem] mt-3 text-xl bg-[url(/public/assets/gaming/connect-bg-border.png)] bg-contain bg-center bg-no-repeat"}),(0,D.jsxs)("div",{className:"hidden lg:flex absolute mt-[0.2rem] left-[18rem] w-[33rem] flex-row justify-center items-center display-none",children:[(0,D.jsx)("div",{className:"clickable w-[10rem] h-[5rem] mr-4 bg-[url(/public/assets/gaming/my-hero.png)] bg-contain bg-center bg-no-repeat"}),(0,D.jsx)("div",{className:"clickable w-[10rem] h-[5rem] mr-4 bg-[url(/public/assets/gaming/my-squad.png)] bg-contain bg-center bg-no-repeat"}),(0,D.jsx)("div",{className:"clickable w-[10rem] h-[5rem] bg-[url(/public/assets/gaming/my-backpack.png)] bg-contain bg-center bg-no-repeat"})]}),(0,D.jsxs)("div",{className:"absolute right-[0.1rem] lg:right-[15rem] w-[20rem] mt-[0.2rem]  flex flex-row justify-center items-center",children:[(0,D.jsx)("div",{className:"pl-[2rem] text-xl text-[#FFDDA8] text-center leading-[5rem] clickable w-[10rem] h-[5rem] mr-4 bg-[url(/public/assets/gaming/coin.png)] bg-contain bg-center bg-no-repeat",onClick:function(){return z()},children:a?h()((0,w.formatEther)(a.config._pendingReward)).format("0,0"):0}),(0,D.jsxs)("div",{className:"text-sm text-[#FFDDA8] text-center leading-[5rem] clickable w-[7rem] h-[5rem] mr-4 bg-[url(/public/assets/gaming/fee.png)] bg-contain bg-center bg-no-repeat",children:["Fee: ",a?h()((0,w.formatUnits)(a.config._rewardFee,2)).format("0,0%"):"0%"]}),(0,D.jsx)("div",{className:"clickable w-[3rem] h-[4rem] mt bg-[url(/public/assets/gaming/setting.png)] bg-contain bg-center bg-no-repeat",onClick:function(){return T((function(e){return!e}))}})]})]}),(0,D.jsxs)("div",{className:"main relative content content--contains-header",children:[(0,D.jsx)("div",{className:"absolute top-[10rem]",children:O&&(0,D.jsx)(g.IT,{targetDatetime:L})}),(0,D.jsxs)(l.Z,{gutter:60,className:"absolute bottom-[2rem]",children:[(0,D.jsx)(d.Z,{xs:24,sm:16,md:16,lg:16,className:"flex flex-row justify-center items-center w-[50rem]",children:(0,D.jsx)(l.Z,{gutter:10,className:"w-full flex flex-row justify-center items-center",children:E.map((function(e){return(0,D.jsx)(d.Z,{xs:8,sm:8,md:8,lg:8,className:"flex justify-center items-center",children:(0,D.jsx)(j.Z,{className:"w-[34rem]",autoPlay:O,src:(0,p.vg)("gaming/attack_apng_desktop/attack_".concat(G(e)+V(e),"_desktop.png")),alt:"gaming/attack_apng_desktop/attack_".concat(G(e)+V(e),"_desktop.png")})},"attack-"+e)}))})}),(0,D.jsxs)(d.Z,{xs:24,sm:8,md:8,lg:8,className:"mt-[-1rem] md:mt-[-0.1rem]",children:[(O||!U)&&(0,D.jsx)(j.Z,{className:"w-[42rem]",autoPlay:!0,src:(0,p.vg)("gaming/boss_apng_desktop/boss".concat(P,"_idle_desktop.png")),alt:"gaming/boss_apng_desktop/boss1_idle_desktop.png"}),!O&&U&&(0,D.jsx)(j.Z,{className:"w-[42rem]",autoPlay:!0,isOneTime:!0,src:(0,p.vg)("gaming/boss_apng_desktop/boss".concat(P,"_dead_desktop.png")),alt:"gaming/boss_apng_desktop/boss1_idle_desktop.png"})]})]})]}),(0,D.jsxs)(x.V,{open:v,onClose:function(){return T(!1)},className:"gaming relative z-50",children:[(0,D.jsx)("div",{className:"fixed inset-0 bg-black/30","aria-hidden":"true"}),(0,D.jsx)("div",{className:"fixed inset-0 flex items-center justify-center p-4",children:(0,D.jsxs)(x.V.Panel,{className:"flex flex-column justify-center items-center mx-auto max-w-lg rounded w-[20rem] h-[29rem] bg-[url(/public/assets/gaming/bg-dialog.png)] bg-contain bg-center bg-no-repeat",children:[(0,D.jsx)(x.V.Title,{className:"text-3xl text-[#28170B] font-extrabold\tstroke-current",children:"Sound Setting"}),(0,D.jsxs)("div",{className:"w-7/12 mt-6",children:[(0,D.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,D.jsx)("div",{className:"text-2xl text-black",children:"BGM"}),(0,D.jsx)("div",{className:"clickable w-[1.6rem] h-[1.6rem] bg-contain bg-center bg-no-repeat ".concat(H?"bg-[url(/public/assets/gaming/vol-muted.png)]":"bg-[url(/public/assets/gaming/vol.png)]"),onClick:function(){W((function(e){return!e}))}})]}),(0,D.jsxs)("div",{className:"mt-2 flex flex-row justify-between items-center",children:[(0,D.jsx)("div",{className:"text-2xl text-black",children:"SoundEffect"}),(0,D.jsx)("div",{className:"clickable w-[1.6rem] h-[1.6rem] bg-contain bg-center bg-no-repeat ".concat(q?"bg-[url(/public/assets/gaming/vol-muted.png)]":"bg-[url(/public/assets/gaming/vol.png)]"),onClick:function(){_((function(e){return!e}))}})]})]})]})})]}),!O&&a&&a.squadIdToFightInfo[K]&&(0,D.jsx)(A,{squadId:K,gameId:P,fightInfo:a.squadIdToFightInfo[K]})]})};var B=f.ZP.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n\n  .bg-full {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    object-fit: cover;\n    z-index: 0;\n  }\n\n  .mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n\n    z-index: 11;\n    background: rgba(0, 0, 0, 0.25);\n  }\n\n  .content {\n    position: relative;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    &--contains-header {\n      margin-top: 80px;\n      height: calc(100vh - 80px);\n    }\n  }\n\n  @media (max-width: 768px) {\n    .content {\n      &--contains-header {\n        margin-top: 60px;\n        height: calc(100vh - 60px);\n      }\n    }\n  }\n\n  & + * {\n    position: relative;\n    top: 100vh;\n  }\n"]))),A=function(e){var n=e.squadId,t=e.gameId,r=e.fightInfo,a=(0,y.o)(),s=a.data,i=(a.isLoading,(0,k.useMutation)((function(){return(0,N.f)("start fight, fightInfo",r),(0,p.Kc)(s),s.fight(I.O$.from(n),I.O$.from(t))}),{onSuccess:function(){o.Z.success({message:"Start Fight"})},onError:function(e){var n;return o.Z.error({message:"Send fight tx failed",description:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message})}})),c=i.mutateAsync,l=i.isLoading,d=(0,k.useMutation)((function(){return(0,N.f)("start claim, fightInfo",r),(0,p.Kc)(s),r.fightPendingReward.eq(I.O$.from(0))&&o.Z.error({message:"No Fight Reward"}),s.transferSquadToPendingReward(I.O$.from(n))}),{onSuccess:function(){o.Z.success({message:"claim succeed"})},onError:function(e){var n;return o.Z.error({message:"claim failed",description:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message})}}),f=d.mutateAsync,g=d.isLoading;return(0,D.jsx)(m.Z,{visible:!0,maskStyle:{background:"rgba(0,0,0,.3)"},className:"gaming relative z-50",width:800,footer:null,closable:!1,children:(0,D.jsxs)("div",{className:"relative w-[25rem] h-[23.5rem] md:w-[45rem] md:h-[36rem] flex flex-col justify-center items-center  bg-[url(/public/assets/gaming/start-modal-bg.png)] bg-contain bg-center bg-no-repeat",children:[(0,D.jsx)(u.rU,{to:"/gaming",children:(0,D.jsx)("div",{className:"absolute top-[5rem] mt-[0.2rem] left-[2rem] w-[4rem]  flex flex-row justify-center items-center",children:(0,D.jsx)("div",{className:"clickable w-[9rem] h-[5rem] mr-2 bg-[url(/public/assets/gaming/button-back.png)] bg-contain bg-center bg-no-repeat"})})}),(0,D.jsxs)("div",{className:"px-3 mb-2 md:w-[24rem] w-[17rem] md:h-[3rem]  h-[1.7rem] flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,D.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,D.jsx)(T.xv,{tid:"pending-reward"})}),(0,D.jsx)("div",{className:"text-[#00A660]",children:h()((0,w.formatEther)(r.fightPendingReward)).format("0,0")})]}),(0,D.jsxs)("div",{className:"px-3 mb-2 md:w-[24rem] w-[17rem] md:h-[3rem]  h-[1.7rem] flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,D.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,D.jsx)(T.xv,{tid:"attack"})}),(0,D.jsx)("div",{className:"text-[#00A660]",children:h()((0,w.formatEther)(r.attack)).format("0,0")})]}),(0,D.jsxs)("div",{className:"px-3 mb-2 md:w-[24rem] w-[17rem] md:h-[3rem]  h-[1.7rem] flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,D.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,D.jsx)(T.xv,{tid:"last-fight-end-at"})}),(0,D.jsx)("div",{className:"text-[#00A660]",children:q()(r.fightEndTime).utc().format("DD MMM, HH:mm:ss")+" UTC"})]}),(0,D.jsxs)("div",{className:"flex flex-row justify-center items-center mb-2",children:[(0,D.jsxs)("div",{className:"text-center md:text-xl text-md text-[#FFDDA8] md:leading-[5rem]  font-extrabold md:w-[12rem] md:h-[4.7rem] w-[10rem] h-[3.6rem]  bg-[url(/public/assets/mining/button-claim-1.png)] bg-contain bg-center bg-no-repeat cursor-pointer",onClick:function(){return c()},children:[l&&(0,D.jsx)(Z.fCD,{className:"animate-spin inline-block mx-auto"}),!l&&(0,D.jsx)(T.xv,{tid:"start-fight"})]}),(0,D.jsxs)("div",{className:"text-center md:text-xl text-md text-[#FFDDA8] md:leading-[5rem]  font-extrabold md:w-[12rem] md:h-[4.7rem] w-[10rem] h-[3.6rem]  bg-[url(/public/assets/mining/button-claim-2.png)] bg-contain bg-center bg-no-repeat cursor-pointer",onClick:function(){return f()},children:[g&&(0,D.jsx)(Z.fCD,{className:"animate-spin inline-block mx-auto"}),!g&&(0,D.jsx)(T.xv,{tid:"claim-fight-reward"})]})]})]})})}}}]);