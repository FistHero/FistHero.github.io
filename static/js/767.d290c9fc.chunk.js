"use strict";(self.webpackChunkfisthero_ui=self.webpackChunkfisthero_ui||[]).push([[767],{1361:function(e,n,t){t.d(n,{u:function(){return f}});var r=t(3032),a=t(4322),s=t.n(a),i=t(334),c=t(7998),u=t(56),o=t(1114),l=t(658),m=t.n(l),d=t(8955),g=t(1843);function f(){var e=(0,i.I1)(),n=(0,c.K)().account,t=(0,u.useQueryClient)();return(0,u.useQuery)(["queryHero",{account:n}],(0,r.Z)(s().mark((function a(){var i,c,u,l,f,p,x,h,b,v,w,N,k,j,y,F;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(0,o.Kc)(e),(0,o.Kc)(n),a.next=4,e.getConfig(n);case 4:return i=a.sent,(0,d.f)("hero config",i),c=i.NFTIds,u=i.purchaseTokenApproved,l=i.sellingStartTime,f=i.isInWhitelist,p=i.nativeBalance,x=i.buyBoxTokenBalance,h=i.heroMainTokenBalance,b=i.boxes,v=i.airdropBoxes,w=u,N=m()(),k=l>0&&N.isAfter(l),j=c,a.next=13,e.checkFHTApproved();case 13:return y=a.sent,a.next=16,e.getInviteesInfo(n);case 16:return F=a.sent,a.abrupt("return",{config:i,isApproved:w,isWithinSellingPeriod:k,isInWhitelist:f,nftIds:j,nativeBalance:p,buyBoxTokenBalance:x,heroMainTokenBalance:h,boxes:b,airdropBoxes:v,DHTApproved:y,inviteesInfo:F,approve:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r="",w){n.next=8;break}return n.next=4,e.approveToken();case 4:return r=n.sent,n.next=7,t.invalidateQueries("queryHero");case 7:g.Z.success({message:"Approve BUSD Succeed"});case 8:return n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),approveDHT:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.approveDHT();case 2:return r=n.sent,n.next=5,t.invalidateQueries("queryHero");case 5:return n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),buyBoxesWithInviter:function(){var n=(0,r.Z)(s().mark((function n(r,a){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.buyBoxesWithInviter(r,a);case 2:return i=n.sent,n.next=5,t.invalidateQueries("queryHero");case 5:return n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),buyAndOpenBoxesWithInviter:function(){var n=(0,r.Z)(s().mark((function n(r,a){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(w){n.next=6;break}return n.next=3,e.approveToken();case 3:return n.next=5,t.invalidateQueries("queryHero");case 5:g.Z.success({message:"approve success"});case 6:if(k){n.next=11;break}return g.Z.error({message:"sell not start"}),n.abrupt("return",[]);case 11:return n.next=13,e.buyAndOpenBoxesWithInviter(r,a);case 13:return i=n.sent,n.next=16,t.invalidateQueries("queryHero");case 16:return n.abrupt("return",i);case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),openBoxes:function(){var n=(0,r.Z)(s().mark((function n(r){var a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.openBoxes(r);case 2:return a=n.sent,n.next=5,t.invalidateQueries("queryHero");case 5:return n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),mergeNFT:function(){var n=(0,r.Z)(s().mark((function n(r){var a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,d.f)(y),y){n.next=8;break}return g.Z.success({message:"start approve DHT"}),n.next=5,e.approveDHT();case 5:return n.next=7,t.invalidateQueries("queryHero");case 7:g.Z.success({message:"approve DHT succeed"});case 8:return n.next=10,e.mergeNFT(r);case 10:return a=n.sent,n.next=13,t.invalidateQueries("queryHero");case 13:return n.abrupt("return",a);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),generateAttack:function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,d.f)("nftIds",j),n.next=3,e.generateAttack(j);case 3:return r=n.sent,n.next=6,t.invalidateQueries("queryHero");case 6:return n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()});case 18:case"end":return a.stop()}}),a)}))),{enabled:!!n&&!!e})}},4775:function(e,n,t){t.d(n,{o:function(){return g}});var r=t(3032),a=t(4322),s=t.n(a),i=t(334),c=t(7998),u=t(56),o=t(1114),l=t(8955),m=t(658),d=t.n(m);function g(){var e="queryHeroGame",n=(0,i.T6)(),t=(0,c.K)().account,a=(0,u.useQueryClient)();return(0,u.useQuery)([e,{account:t}],(0,r.Z)(s().mark((function i(){var c,u,m,g,f,p,x,h,b;return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return(0,o.Kc)(n),(0,o.Kc)(t),i.next=4,n.getGameInfo(t);case 4:if(c=i.sent,u=c.squadIds,m=c.pendingRewards,g=c.fightInfos,(0,l.f)("hero game config",c),f={},!(u&&g&&g.length>0)){i.next=20;break}p=0;case 10:if(!(p<u.length)){i.next=20;break}if(x=c.squadIds[p],g[p]){i.next=14;break}return i.abrupt("continue",17);case 14:h=g[p].fightStartAt.mul(1e3).toNumber(),b=g[p].fightEndAt.mul(1e3).toNumber(),f[x]={fightStartTime:h,fightEndTime:b,isFighting:d()().isAfter(h)&&d()().isBefore(b),heroIds:g[p].Heroes.map((function(e){return e.toString()})),weaponIds:g[p].Weapons.map((function(e){return e.toString()})),pendingReward:m[p],claimedReward:g[p].claimedReward};case 17:p++,i.next=10;break;case 20:return i.abrupt("return",{config:c,squadIdToFightInfo:f,createSquad:function(){var t=(0,r.Z)(s().mark((function t(r,i){var c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createSquad(r,i);case 2:return c=t.sent,t.next=5,a.invalidateQueries(e);case 5:return t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),fight:function(){var t=(0,r.Z)(s().mark((function t(r){var i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.fight(r);case 2:return i=t.sent,t.next=5,a.invalidateQueries(e);case 5:return t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),claimFightReward:function(){var t=(0,r.Z)(s().mark((function t(r){var i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.claimFightReward(r);case 2:return i=t.sent,t.next=5,a.invalidateQueries(e);case 5:return t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});case 21:case"end":return i.stop()}}),i)}))),{enabled:!!t&&!!n})}},4967:function(e,n,t){t.d(n,{p:function(){return g}});var r=t(3032),a=t(4322),s=t.n(a),i=t(7998),c=t(56),u=t(1114),o=t(334),l=t(8955),m=t(9560),d=t(2388);function g(){var e=(0,o.FJ)(),n=(0,i.K)().account,t=(0,c.useQueryClient)();return(0,c.useQuery)(["queryNFTPool",{account:n}],(0,r.Z)(s().mark((function a(){var i,c,o,g,f,p,x,h;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(0,u.Kc)(e),(0,u.Kc)(n),(0,l.f)("before getFarmInfo"),a.next=5,e.getFarmInfo(n);case 5:return i=a.sent,(0,l.f)("getFarmInfo",i),a.next=9,e.getStakedNFTIds(n);case 9:return c=a.sent,(0,l.f)("stakedNFTs",c),o=1e8,g=i.userHashPower.mul(o).div(i.totalHashPower),f=i.rewardPerSecond.mul(3).div(1e3),p=m.O$.from(86400),x=f.mul(p).mul(g).div(o),h={historyReward:i.claimed.mul(3).div(1e3),oneDayReward:x,monthReward:x.mul(30),yearReward:x.mul(365)},(0,l.f)("rewardsMap",(0,d.formatEther)(h.historyReward),(0,d.formatEther)(h.oneDayReward)),a.abrupt("return",{farmInfo:i,stakedNFTs:c,rewardsMap:h,harvest:function(){var n=(0,r.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.harvest().then((function(e){return t.invalidateQueries("queryNFTPool"),e})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),harvestUSDT:function(){var n=(0,r.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.harvestUSDT().then((function(e){return t.invalidateQueries("queryNFTPool"),e})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),stakeNFT:function(){var n=(0,r.Z)(s().mark((function n(r){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.stakeNFT(r).then((function(e){return t.invalidateQueries("queryNFTPool"),e})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),withdrawNFT:function(){var n=(0,r.Z)(s().mark((function n(r){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.withdrawNFT(r).then((function(e){return t.invalidateQueries("queryNFTPool"),e})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()});case 19:case"end":return a.stop()}}),a)}))),{enabled:!!e&&!!n})}},4767:function(e,n,t){t.r(n),t.d(n,{AdventureModal:function(){return P},FullContainer:function(){return C},default:function(){return D}});var r,a=t(7186),s=t(3032),i=t(3430),c=t(4322),u=t.n(c),o=t(7313),l=t(9466),m=t(8197),d=t(9624),g=t(1843),f=t(3912),p=t(9491),x=t(1114),h=t(9184),b=t(8805),v=t(5035),w=t(5531),N=t(4967),k=t(7671),j=t(8955),y=t(3557),F=t(1361),Z=t(56),T=t(3122),I=t(1733),S=t.n(I),q=t(2388),M=t(4412),A=t(4775),B=t(6417),H=function(e){var n=e.isOpen,t=e.setIsOpen,r=e.setTeam,a=(0,N.p)(),c=a.data,l=(a.isLoading,(0,F.u)()),p=l.data,h=(l.isLoading,(0,A.o)()),v=h.data,I=(h.isLoading,(0,o.useState)([])),H=(0,i.Z)(I,2),D=H[0],C=H[1],Q=(0,o.useState)(1),P=(0,i.Z)(Q,2),z=P[0],E=P[1],K=p&&c?p.nftIds.filter((function(e){return!c.stakedNFTs.includes(e)})):[],W=(0,Z.useMutation)((function(){return(0,x.Kc)(c),D||g.Z.info({message:"No Selected Hero"}),c.stakeNFT(D)}),{onSuccess:function(){g.Z.success({message:"Stake Succeed"}),C([])},onError:function(e){var n;return g.Z.error({message:"Stake Failed",description:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message})}}),L=(W.mutateAsync,W.isLoading),O=(0,Z.useMutation)((function(){return(0,x.Kc)(p),p.generateAttack()}),{onSuccess:function(){g.Z.success({message:"generate Attacks Succeed"})},onError:function(e){var n;return g.Z.error({message:"generate Attacks Failed",description:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message})}}),R=(O.mutateAsync,O.isLoading,(0,Z.useMutation)((function(){return(0,x.Kc)(c),D||g.Z.error({message:"No Selected Hero"}),c.withdrawNFT(D)}),{onSuccess:function(){g.Z.success({message:"Withdraw Succeed"}),C([])},onError:function(e){var n;return g.Z.error({message:"Withdraw Failed",description:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message})}})),U=(R.mutateAsync,R.isLoading),_=(0,Z.useMutation)((function(){return(0,x.Kc)(v),v.createSquad(D,[])}),{onSuccess:function(){g.Z.success({message:"createSquad Succeed"}),r(D),C([])},onError:function(e){var n;return g.Z.error({message:"createSquad Failed",description:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message})}}),G=_.mutateAsync;_.isLoading;if(!c)return null;if(!p)return(0,B.jsx)(b.gb,{});var V=K.concat(c.stakedNFTs),J=window.innerWidth>768?6:2,$=V.sort((function(e,n){var t=p.config.NFTInfoMap[e].hashPower,r=p.config.NFTInfoMap[n].hashPower;return t.gt(r)?-1:1})),X=function(e){C((function(n){if(n.includes(e)){var t=(0,w.Z)(n);return(0,j.f)(t.filter((function(n){return n!==e}))),t.filter((function(n){return n!==e}))}return n.length<3?((0,j.f)([].concat((0,w.Z)(n),[e])),[].concat((0,w.Z)(n),[e])):(0,w.Z)(n)}))},Y=function(e){return p&&e in p.config.NFTInfoMap?S()((0,q.formatEther)(p.config.NFTInfoMap[e].hashPower)).format("0,0"):"-"},ee=function(e){return p&&e in p.config.NFTInfoMap?S()((0,q.formatEther)(p.config.NFTInfoMap[e].attack)).format("0,0"):"-"},ne=function(e){return p&&e in p.config.NFTInfoMap?p.config.NFTInfoMap[e].name:"-"},te=function(e){return p&&e in p.config.NFTInfoMap?p.config.NFTInfoMap[e].rarity:"-"};return(0,B.jsx)(f.Z,{visible:n,onCancel:function(){return t(!1)},className:"gaming relative z-50",width:1200,footer:null,closable:!1,children:(0,B.jsx)("div",{className:"flex items-center justify-center p-4 mx-auto md:mt-0 mt-[-5rem]",children:(0,B.jsxs)(m.Z,{gutter:30,className:"flex justify-center items-center",children:[(0,B.jsxs)(d.Z,{xs:24,sm:24,md:24,lg:12,className:"px-6 py-7 relative w-[25rem] h-[23.5rem] md:w-[45rem] md:h-[36rem] flex flex-col justify-center items-center  bg-[url(/public/assets/mining/bg-select-hero.png)] bg-contain bg-center bg-no-repeat",children:[(0,B.jsx)("div",{className:"absolute top-[5%] md:text-3xl  text-lg text-[#28170B] font-extrabold\tstroke-current",children:(0,B.jsx)(y.xv,{tid:"hero-collection"})}),(0,B.jsx)(m.Z,{gutter:10,justify:"start",className:"flex relative top-[1.5rem] md:h-[29rem] md:w-[32rem] h-[14rem] w-[21.5rem] overflow-hidden scroll",children:$.slice((z-1)*J,z*J).map((function(e,n){return(0,B.jsx)(d.Z,{xs:12,sm:12,md:8,lg:8,className:"flex justify-center items-center mb-2",children:(0,B.jsx)(M.F,{className:"w-[9.6rem] hover:cursor-pointer",NFTInfo:{name:ne(e),rarity:te(e),tokenId:e,hashPower:Y(e),attack:ee(e),isStaked:c&&c.stakedNFTs.includes(e),isBuilt:c&&[].includes(e),isSelected:D.includes(e)},enableSelect:!0,toggleNFT:X})},e+n)}))}),(0,B.jsx)(k.Z,{className:"absolute bottom-[1rem] z-999",size:"small",pageSize:J,total:V.length,onChange:function(e){return E(e)},current:z,hideOnSinglePage:!1,showSizeChanger:!1})]}),(0,B.jsxs)(d.Z,{xs:24,sm:24,md:24,lg:12,className:"relative w-[25rem] h-[25rem] md:w-[38rem] md:h-[36rem] flex flex-col justify-center items-center bg-[url(/public/assets/mining/bg-staking.png)] bg-contain bg-center bg-no-repeat",children:[(0,B.jsx)("div",{className:"absolute top-[6.5%] md:text-3xl  text-xl  text-[#28170B] font-extrabold\tstroke-current shadow-red drop-shadow-lg",children:(0,B.jsx)(y.xv,{tid:"squad-center"})}),(0,B.jsxs)("div",{className:"w-9/12 mt-10 flex flex-col justify-center items-center",children:[(0,B.jsxs)("div",{className:"md:text-xl text-lg text-[#FFDDA8] font-extrabold md:w-[20rem] md:h-[4.3rem] w-[17rem] h-[3.5rem] flex flex-col justify-center items-center  bg-[url(/public/assets/mining/button-pink.png)] bg-contain bg-center bg-no-repeat cursor-pointer",onClick:(0,s.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!D||D.length>3||D.length<1)){e.next=3;break}return g.Z.error({message:"1 squad = 1 ~ 3 heroes"}),e.abrupt("return");case 3:return e.next=5,G();case 5:t(!1);case 6:case"end":return e.stop()}}),e)}))),children:[L&&(0,B.jsx)(T.fCD,{className:"animate-spin inline-block mx-auto"}),!L&&(0,B.jsx)(y.xv,{tid:"build-squad"})]}),(0,B.jsxs)("div",{className:"md:text-xl text-lg text-[#FFDDA8] font-extrabold\t md:h-[4.3rem] w-[15rem] h-[3.5rem] flex flex-col justify-center items-center  bg-[url(/public/assets/mining/button-gray.png)] bg-contain bg-center bg-no-repeat cursor-pointer",children:[U&&(0,B.jsx)(T.fCD,{className:"animate-spin inline-block mx-auto"}),!U&&(0,B.jsx)(y.xv,{tid:"withdraw"})]})]})]})]})})})},D=function(){var e=(0,A.o)(),n=e.data,t=(e.isLoading,(0,o.useState)(!1)),r=(0,i.Z)(t,2),a=r[0],c=r[1],g=(0,o.useState)(!1),f=(0,i.Z)(g,2),p=f[0],h=f[1],w=(0,o.useState)(!1),N=(0,i.Z)(w,2),k=N[0],y=N[1],F=(0,o.useState)(!1),Z=(0,i.Z)(F,2),T=Z[0],I=Z[1],S=(0,o.useState)(!1),q=(0,i.Z)(S,2),M=q[0],D=q[1],z=(0,o.useState)(0),E=(0,i.Z)(z,2),K=E[0],W=E[1],L=[[]],O=[""];if(n&&n.config.fightInfos){for(var R=0;R<n.config.fightInfos.length;R++){var U=n.config.fightInfos[R];U&&(L.push(U[1].map((function(e){return e.toString()}))),O.push(n.config.squadIds[R]))}(0,j.f)("squads",L),(0,j.f)("squadIds",O)}return(0,B.jsxs)(C,{className:"gaming",children:[(0,B.jsx)("img",{className:"bg-full",src:(0,x.vg)("gaming/bg-gaming.png"),alt:"gaming"}),(0,B.jsxs)("div",{className:"mask  text-2xl text-[#FFDDA8]]",children:[(0,B.jsx)(l.rU,{to:"/",children:(0,B.jsx)("div",{className:"absolute  mt-[0.2rem] left-[0.7rem] w-[4rem]  flex flex-row justify-center  items-center",children:(0,B.jsx)("div",{className:"clickable w-[9rem] h-[5rem] mr-2 bg-[url(/public/assets/gaming/button-back.png)] bg-contain bg-center bg-no-repeat"})})}),(0,B.jsx)(b.pB,{type:"primary",className:"hidden md:block clickable absolute left-[5.5rem] w-[10rem] h-[4rem] leading-[1.8rem] mt-3 text-xl bg-[url(/public/assets/gaming/connect-bg-border.png)] bg-contain bg-center bg-no-repeat"}),(0,B.jsxs)("div",{className:"hidden lg:flex absolute mt-[0.2rem] left-[18rem] w-[33rem] flex-row justify-center items-center display-none",children:[(0,B.jsx)("div",{className:"clickable w-[10rem] h-[5rem] mr-4 bg-[url(/public/assets/gaming/my-hero.png)] bg-contain bg-center bg-no-repeat"}),(0,B.jsx)("div",{className:"clickable w-[10rem] h-[5rem] mr-4 bg-[url(/public/assets/gaming/my-squad.png)] bg-contain bg-center bg-no-repeat"}),(0,B.jsx)("div",{className:"clickable w-[10rem] h-[5rem] bg-[url(/public/assets/gaming/my-backpack.png)] bg-contain bg-center bg-no-repeat"})]}),(0,B.jsxs)("div",{className:"absolute right-[0.1rem] lg:right-[15rem] w-[20rem] mt-[0.2rem]  flex flex-row justify-center items-center",children:[(0,B.jsx)("div",{className:"clickable w-[10rem] h-[5rem] mr-4 bg-[url(/public/assets/gaming/coin.png)] bg-contain bg-center bg-no-repeat"}),(0,B.jsx)("div",{className:"clickable w-[3rem] h-[4rem] mt bg-[url(/public/assets/gaming/setting.png)] bg-contain bg-center bg-no-repeat",onClick:function(){return c((function(e){return!e}))}})]})]}),(0,B.jsx)("div",{className:"content content--contains-header",children:(0,B.jsxs)(m.Z,{gutter:60,className:"lg:mt-40 mt-40",children:[(0,B.jsxs)(d.Z,{xs:24,sm:14,md:14,lg:14,className:"flex flex-col justify-center items-center",children:[(0,B.jsx)("div",{className:"w-40 h-[8rem] bg-[url(/public/assets/gaming/fist-squad.png)] bg-contain bg-center bg-no-repeat text-center leading-[9rem] text-[#FFDDA8] text-xl",children:K}),(0,B.jsxs)("div",{className:"w-[40rem] flex justify-center",children:[(0,B.jsx)("img",{className:"clickable z-20 md:w-[3rem] md:h-[3.864rem] w-[1.5rem] h-[1.93rem] mr-[1.3rem]",src:(0,x.vg)("gaming/arrow-left.png"),alt:"",onClick:(0,s.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(!1),W((function(e){return(e+L.length-1)%L.length}));case 2:case"end":return e.stop()}}),e)})))}),L&&K>=0&&K<L.length&&L[K].length>0?(0,B.jsx)(Q,{team:L[K]}):(0,B.jsx)("img",{className:"adventure clickable md:mt-6 mt-9 z-20 w-80-ns w-70",src:(0,x.vg)("gaming/build-your-squad.png"),alt:"",onClick:function(){return I(!0)}}),(0,B.jsx)("img",{className:"clickable z-20 md:w-[3rem] md:h-[3.864rem] w-[1.5rem] h-[1.93rem] ml-[1rem]",src:(0,x.vg)("gaming/arrow-right.png"),alt:"",onClick:function(){D(!1),W((function(e){return(e+1)%L.length}))}})]})]}),(0,B.jsx)(d.Z,{xs:24,sm:8,md:8,lg:8,className:"mt-[-1rem] md:mt-[-0.1rem]",children:(0,B.jsxs)("div",{className:"md:pt-20 pt-16 md:h-[42rem] h-[32rem] bg-[url(/public/assets/gaming/task-panel.png)] bg-contain bg-center bg-no-repeat flex flex-column justify-center items-center",children:[(0,B.jsx)("img",{className:"adventure clickable md:mt-6 mt-9 z-20 w-80-ns w-70",src:(0,x.vg)("gaming/pve.png"),alt:"",onClick:function(){return D(!0)}}),(0,B.jsx)("img",{className:"dungeon clickable z-20 lg:mt-[-1rem] mt-[-0.1rem] w-80-ns w-70",src:(0,x.vg)("gaming/pvp.png"),alt:""}),(0,B.jsxs)("div",{className:"flex md:mt-[0.5rem] mt-[0.7rem] w-70-ns w-60 flex-row justify-center items-center",children:[(0,B.jsx)("div",{className:"clickable w-[4rem] h-[3rem] mr-4 bg-[url(/public/assets/gaming/panel-1.png)] bg-contain bg-center bg-no-repeat"}),(0,B.jsx)("div",{className:"clickable w-[4rem] h-[3rem] mr-4 bg-[url(/public/assets/gaming/panel-2.png)] bg-contain bg-center bg-no-repeat"}),(0,B.jsx)("div",{className:"clickable w-[4rem] h-[3rem] mr-4 bg-[url(/public/assets/gaming/panel-3.png)] bg-contain bg-center bg-no-repeat"}),(0,B.jsx)("div",{className:"clickable w-[4rem] h-[3rem] bg-[url(/public/assets/gaming/panel-4.png)] bg-contain bg-center bg-no-repeat"})]})]})})]})}),(0,B.jsxs)(v.V,{open:a,onClose:function(){return c(!1)},className:"gaming relative z-50",children:[(0,B.jsx)("div",{className:"fixed inset-0 bg-black/30","aria-hidden":"true"}),(0,B.jsx)("div",{className:"fixed inset-0 flex items-center justify-center p-4",children:(0,B.jsxs)(v.V.Panel,{className:"flex flex-column justify-center items-center mx-auto max-w-lg rounded w-[20rem] h-[29rem] bg-[url(/public/assets/gaming/bg-dialog.png)] bg-contain bg-center bg-no-repeat",children:[(0,B.jsx)(v.V.Title,{className:"text-3xl text-[#28170B] font-extrabold\tstroke-current",children:"Sound Setting"}),(0,B.jsxs)("div",{className:"w-7/12 mt-6",children:[(0,B.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,B.jsx)("div",{className:"text-2xl text-black",children:"BGM"}),(0,B.jsx)("div",{className:"clickable w-[1.6rem] h-[1.6rem] bg-contain bg-center bg-no-repeat ".concat(k?"bg-[url(/public/assets/gaming/vol-muted.png)]":"bg-[url(/public/assets/gaming/vol.png)]"),onClick:function(){y((function(e){return!e}))}})]}),(0,B.jsxs)("div",{className:"mt-2 flex flex-row justify-between items-center",children:[(0,B.jsx)("div",{className:"text-2xl text-black",children:"SoundEffect"}),(0,B.jsx)("div",{className:"clickable w-[1.6rem] h-[1.6rem] bg-contain bg-center bg-no-repeat ".concat(p?"bg-[url(/public/assets/gaming/vol-muted.png)]":"bg-[url(/public/assets/gaming/vol.png)]"),onClick:function(){h((function(e){return!e}))}})]})]})]})})]}),(0,B.jsx)(H,{isOpen:T,setIsOpen:I,setTeam:function(){W(L.length-1)}}),(0,B.jsx)(P,{isOpen:M&&K>0,setIsOpen:D,squadId:O[K]})]})},C=h.ZP.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n\n  .bg-full {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    object-fit: cover;\n    z-index: 0;\n  }\n\n  .mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n\n    z-index: 11;\n    background: rgba(0, 0, 0, 0.25);\n  }\n\n  .content {\n    position: relative;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    &--contains-header {\n      margin-top: 80px;\n      height: calc(100vh - 80px);\n    }\n  }\n\n  @media (max-width: 768px) {\n    .content {\n      &--contains-header {\n        margin-top: 60px;\n        height: calc(100vh - 60px);\n      }\n    }\n  }\n\n  & + * {\n    position: relative;\n    top: 100vh;\n  }\n"]))),Q=function(e){var n=e.team,t=(0,F.u)().data,r=function(e){return t&&e in t.config.NFTInfoMap?S()((0,q.formatEther)(t.config.NFTInfoMap[e].hashPower)).format("0,0"):"-"},a=function(e){return t&&e in t.config.NFTInfoMap?S()((0,q.formatEther)(t.config.NFTInfoMap[e].attack)).format("0,0"):"-"},s=function(e){return t&&e in t.config.NFTInfoMap?t.config.NFTInfoMap[e].name:"-"},i=function(e){return t&&e in t.config.NFTInfoMap?t.config.NFTInfoMap[e].rarity:"-"};return(0,B.jsx)(m.Z,{gutter:16,children:n.map((function(e){return(0,B.jsx)(d.Z,{xs:8,sm:8,md:8,lg:8,className:"flex flex-col justify-center items-center",children:(0,B.jsx)(M.F,{className:"w-[9.6rem] hover:cursor-pointer",NFTInfo:{name:s(e),rarity:i(e),tokenId:e,hashPower:r(e),attack:a(e)}})},"team-"+e)}))})},P=function(e){var n=e.isOpen,t=(e.setIsOpen,e.squadId),r=(0,N.p)(),a=r.data,s=(r.isLoading,(0,F.u)()),c=(s.data,s.isLoading,(0,A.o)()),u=(c.data,c.isLoading,(0,o.useState)([])),h=(0,i.Z)(u,2),b=h[0],v=h[1],w=(0,Z.useMutation)((function(){return(0,x.Kc)(a),b||g.Z.error({message:"No Selected Hero"}),a.withdrawNFT(b)}),{onSuccess:function(){g.Z.success({message:"Withdraw Succeed"}),v([])},onError:function(e){var n;return g.Z.error({message:"Withdraw Failed",description:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message})}});w.mutateAsync,w.isLoading;return(0,B.jsx)(f.Z,{visible:n,maskStyle:{background:"rgba(0,0,0,.95)"},className:"gaming relative z-50",width:"80rem",footer:null,closable:!1,children:(0,B.jsxs)(m.Z,{gutter:0,justify:"center",children:[(0,B.jsx)(l.rU,{to:"/gaming/".concat(1,"-",t),children:(0,B.jsx)(p.Z,{children:"Start"})}),(0,B.jsx)(d.Z,{sm:24,md:24,lg:24,children:(0,B.jsx)("img",{className:"db center mw-100 mb4 shadow-3",src:(0,x.vg)("gaming/adventure-modal.png"),alt:""})})]})})}},4412:function(e,n,t){t.d(n,{F:function(){return o}});var r,a=t(7186),s=(t(7313),t(1114)),i=t(508),c=t(9184),u=t(6417),o=function(e){var n=e.className,t=e.NFTInfo,r=e.enableSelect,a=e.toggleNFT;if(!t)return(0,u.jsx)("div",{});var c=t.tokenId,o=t.rarity?t.rarity:"1";return(o<"1"||o>"3")&&(o="1"),(0,u.jsxs)(l,{className:"relative rounded-md  ".concat(t.isSelected?"shadow-xl ring-4 ring-red-800":""),onClick:function(){return r&&a(c)},children:[t.isBuilt&&(0,u.jsx)("div",{className:"absolute inset-0 bg-black/70","aria-hidden":"true"}),r&&t.isSelected&&(0,u.jsx)("div",{className:"absolute inset-0 bg-black/20","aria-hidden":"true"}),(0,u.jsx)(i.Z,{src:(0,s.vg)("cards/NFT_hero_".concat(t.name,"_").concat(o,".png")),autoPlay:!0,className:n}),(0,u.jsxs)("div",{className:"absolute bottom-[6%] left-[21%] w-[7rem] flex justify-between items-center text-[#FFDDA8] md:text-xs text-xs",children:[(0,u.jsx)("div",{className:"",children:t.hashPower}),(0,u.jsx)("div",{className:"absolute left-[37%]",children:t.attack}),(0,u.jsxs)("div",{className:"absolute right-[7%]",children:["#",c]})]}),(0,u.jsx)("img",{className:"absolute left-[40%] top-[43%] ".concat(t.isBuilt?"block":"hidden"),src:(0,s.vg)("mining/staked-status.png"),alt:"staked-status"})]})},l=c.ZP.div(r||(r=(0,a.Z)([""])))}}]);