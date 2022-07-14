"use strict";(self.webpackChunkfisthero_ui=self.webpackChunkfisthero_ui||[]).push([[834],{3834:function(e,t,r){r.r(t),r.d(t,{default:function(){return H}});var n=r(3430),s=r(7313),i=r(8197),a=r(9624),c=r(1114),l=r(3557),o=r(5531),m=r(3032),d=r(4322),u=r.n(d),x=r(7998),f=r(56),g=r(4064),h=r(8955);function b(){var e=(0,g.F)(),t=(0,x.K)().account,r=(0,f.useQueryClient)();return(0,f.useQuery)(["queryNFTPool",{account:t}],(0,m.Z)(u().mark((function n(){var s,i;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,c.Kc)(e),(0,c.Kc)(t),(0,h.f)("before getFarmInfo"),n.next=5,e.getFarmInfo(t);case 5:return s=n.sent,(0,h.f)("getFarmInfo",s),n.next=9,e.getStakedNFTIds(t);case 9:return i=n.sent,(0,h.f)("stakedNFTs",i),n.abrupt("return",{farmInfo:s,stakedNFTs:i,harvest:function(){var t=(0,m.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.harvest().then((function(e){return r.invalidateQueries("queryNFTPool"),e})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),harvestUSDT:function(){var t=(0,m.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.harvestUSDT().then((function(e){return r.invalidateQueries("queryNFTPool"),e})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),stakeNFT:function(){var t=(0,m.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.stakeNFT(n).then((function(e){return r.invalidateQueries("queryNFTPool"),e})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),withdrawNFT:function(){var t=(0,m.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.withdrawNFT(n).then((function(e){return r.invalidateQueries("queryNFTPool"),e})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});case 12:case"end":return n.stop()}}),n)}))),{enabled:!!e&&!!t})}var v=r(1843),j=r(3912),p=r(1361),w=r(3122),N=r(1733),F=r.n(N),D=r(2388),y=r(4412),k=r(6417),T=function(e){var t=e.isOpen,r=e.setIsOpen,m=b(),d=m.data,u=(m.isLoading,(0,p.u)()),x=u.data,g=(u.isLoading,(0,s.useState)([])),N=(0,n.Z)(g,2),T=N[0],Z=N[1],I=x&&d?x.nftIds.filter((function(e){return!d.stakedNFTs.includes(e)})):[],S=(0,f.useMutation)((function(){return(0,c.Kc)(d),T||v.Z.info({message:"No Selected Hero"}),d.stakeNFT(T)}),{onSuccess:function(){v.Z.success({message:"Stake Succeed"}),Z([])},onError:function(e){var t;return v.Z.error({message:"Stake Failed",description:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message})}}),A=S.mutateAsync,E=S.isLoading,H=(0,f.useMutation)((function(){return(0,c.Kc)(d),T||v.Z.error({message:"No Selected Hero"}),d.withdrawNFT(T)}),{onSuccess:function(){v.Z.success({message:"Withdraw Succeed"}),Z([])},onError:function(e){var t;return v.Z.error({message:"Withdraw Failed",description:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message})}}),P=H.mutateAsync,C=H.isLoading;if(!d)return null;var M=function(e){Z((function(t){if(t.includes(e)){var r=(0,o.Z)(t);return(0,h.f)(r.filter((function(t){return t!==e}))),r.filter((function(t){return t!==e}))}return(0,h.f)([].concat((0,o.Z)(t),[e])),[].concat((0,o.Z)(t),[e])}))},L=function(e){return x&&e in x.config.NFTInfoMap?F()((0,D.formatEther)(x.config.NFTInfoMap[e].hashPower)).format("0,0"):"-"},O=function(e){return x&&e in x.config.NFTInfoMap?x.config.NFTInfoMap[e].name:"-"},U=function(e){return x&&e in x.config.NFTInfoMap?x.config.NFTInfoMap[e].rarity:"-"};return(0,k.jsx)(j.Z,{visible:t,onCancel:function(){return r(!1)},className:"gaming relative z-50",width:1200,footer:null,closable:!1,children:(0,k.jsx)("div",{className:"flex items-center justify-center p-4 mx-auto md:mt-0 mt-[-5rem]",children:(0,k.jsxs)(i.Z,{gutter:30,className:"flex justify-center items-center",children:[(0,k.jsxs)(a.Z,{xs:24,sm:24,md:24,lg:12,className:"px-6 py-7 relative w-[25rem] h-[23.5rem] md:w-[45rem] md:h-[36rem] flex flex-col justify-center items-center  bg-[url(/public/assets/mining/bg-select-hero.png)] bg-contain bg-center bg-no-repeat",children:[(0,k.jsx)("div",{className:"absolute top-[5%] md:text-3xl  text-lg text-[#28170B] font-extrabold\tstroke-current",children:(0,k.jsx)(l.xv,{tid:"hero-collection"})}),(0,k.jsx)(i.Z,{gutter:10,justify:"start",className:"flex relative top-[1.5rem] md:h-[29rem] md:w-[32rem] h-[14rem] w-[21.5rem] overflow-scroll",children:I.concat(d.stakedNFTs).map((function(e){return(0,k.jsx)(a.Z,{xs:12,sm:12,md:8,lg:8,className:"flex justify-center items-center h-[3rem]] mb-2",children:(0,k.jsx)(y.F,{className:"w-[9.6rem] hover:cursor-pointer",NFTInfo:{name:O(e),rarity:U(e),tokenId:e,hashPower:L(e),attack:"-",isStaked:d&&d.stakedNFTs.includes(e),isSelected:T.includes(e)},enableSelect:!0,toggleNFT:M})},e)}))})]}),(0,k.jsxs)(a.Z,{xs:24,sm:24,md:24,lg:12,className:"relative w-[25rem] h-[25rem] md:w-[38rem] md:h-[36rem] flex flex-col justify-center items-center bg-[url(/public/assets/mining/bg-staking.png)] bg-contain bg-center bg-no-repeat",children:[(0,k.jsx)("div",{className:"absolute top-[6.5%] md:text-3xl  text-xl  text-[#28170B] font-extrabold\tstroke-current shadow-red drop-shadow-lg",children:(0,k.jsx)(l.xv,{tid:"mining-center"})}),(0,k.jsxs)("div",{className:"w-9/12 mt-10 flex flex-col justify-center items-center",children:[(0,k.jsxs)("div",{className:"px-3 mb-2 w-11/12 md:h-[3rem] h-[1.7rem]  flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,k.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,k.jsx)(l.xv,{tid:"total-power"})}),(0,k.jsxs)("div",{className:"text-[#FF2E00]",children:[" ",F()((0,D.formatEther)(d.farmInfo.totalHashPower)).format("0,0")," "]})]}),(0,k.jsxs)("div",{className:"px-3 mb-2 w-11/12 md:h-[3rem]  h-[1.7rem] flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,k.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,k.jsx)(l.xv,{tid:"my-power"})}),(0,k.jsxs)("div",{className:"text-[#FF2E00]",children:[" ",F()((0,D.formatEther)(d.farmInfo.userHashPower)).format("0,0")," "]})]}),(0,k.jsxs)("div",{className:"px-3 mb-2 w-11/12 md:h-[3rem]  h-[1.7rem] flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,k.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,k.jsx)(l.xv,{tid:"my-power-rate"})}),(0,k.jsxs)("div",{className:"text-[#FF2E00]",children:[" ",d.farmInfo.totalHashPower.gt(0)?F()(d.farmInfo.userHashPower.mul(1e8).div(d.farmInfo.totalHashPower).toNumber()/1e8).format("0.000000 %"):"0%"," "]})]}),(0,k.jsxs)("div",{className:"px-3 mb-2 w-11/12 md:h-[3rem]  h-[1.7rem] flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,k.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,k.jsx)(l.xv,{tid:"staked-count"})}),(0,k.jsxs)("div",{className:"text-[#FF2E00]",children:[" ",d.stakedNFTs.length," "]})]}),(0,k.jsxs)("div",{className:"md:text-xl text-lg text-[#FFDDA8] font-extrabold md:w-[20rem] md:h-[4.3rem] w-[17rem] h-[3.5rem] flex flex-col justify-center items-center  bg-[url(/public/assets/mining/button-pink.png)] bg-contain bg-center bg-no-repeat cursor-pointer",onClick:function(){return A()},children:[E&&(0,k.jsx)(w.fCD,{className:"animate-spin inline-block mx-auto"}),!E&&(0,k.jsx)(l.xv,{tid:"stake"})]}),(0,k.jsxs)("div",{className:"md:text-xl text-lg text-[#FFDDA8] font-extrabold\t md:h-[4.3rem] w-[15rem] h-[3.5rem] flex flex-col justify-center items-center  bg-[url(/public/assets/mining/button-gray.png)] bg-contain bg-center bg-no-repeat cursor-pointer",onClick:function(){return P()},children:[C&&(0,k.jsx)(w.fCD,{className:"animate-spin inline-block mx-auto"}),!C&&(0,k.jsx)(l.xv,{tid:"withdraw"})]})]})]})]})})})},Z=function(e){var t=e.isOpen,r=e.setIsOpen,n=b(),s=n.data,o=(n.isLoading,(0,f.useMutation)((function(){return(0,c.Kc)(s),s.harvestUSDT()}),{onSuccess:function(){v.Z.success({message:"Harvest USDT Succeed"})},onError:function(e){var t;return v.Z.error({message:"Harvest USDT Failed",description:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message})}})),m=o.mutateAsync,d=o.isLoading,u=(0,f.useMutation)((function(){return(0,c.Kc)(s),s.harvest()}),{onSuccess:function(){v.Z.success({message:"Harvest Succeed"})},onError:function(e){var t;return v.Z.error({message:"Harvest Failed",description:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message})}}),x=u.mutateAsync,g=u.isLoading;return s?(0,k.jsx)(j.Z,{visible:t,onCancel:function(){return r(!1)},footer:null,closable:!1,className:"gaming relative z-50",children:(0,k.jsx)("div",{className:"flex items-center justify-center p-4",children:(0,k.jsx)("div",{className:"mx-auto ",children:(0,k.jsxs)("div",{className:"relative w-[25rem] h-[23.5rem] md:w-[45rem] md:h-[36rem] flex flex-col justify-center items-center  bg-[url(/public/assets/mining/bg-staking.png)] bg-contain bg-center bg-no-repeat",children:[(0,k.jsx)("div",{className:"absolute top-[6.5%] md:text-3xl  text-xl  text-[#28170B] font-extrabold\tstroke-current shadow-red drop-shadow-lg",children:(0,k.jsx)(l.xv,{tid:"reward"})}),(0,k.jsxs)("div",{className:"w-9/12 mt-10 flex flex-col justify-center items-center",children:[(0,k.jsxs)(i.Z,{gutter:10,className:"flex justify-center items-center mb-4",children:[(0,k.jsxs)(a.Z,{xs:8,sm:8,md:8,lg:8,className:"flex flex-col justify-center items-center",children:[(0,k.jsx)("img",{className:"w-[5rem] block",src:(0,c.vg)("mining/logo-fist.png"),alt:"FHT"}),(0,k.jsx)("div",{children:F()((0,D.formatEther)(s.farmInfo.claimable)).format("0,0")})]}),(0,k.jsx)(a.Z,{xs:8,sm:8,md:8,lg:8,className:"flex flex-col justify-center items-center text-3xl text-[#FFDDA8]",children:(0,k.jsx)(l.xv,{tid:"or"})}),(0,k.jsxs)(a.Z,{xs:8,sm:8,md:8,lg:8,className:"flex flex-col justify-center items-center",children:[(0,k.jsx)("img",{className:"w-[4.3rem] block",src:(0,c.vg)("mining/USDT.png"),alt:"USDT"}),(0,k.jsx)("div",{children:F()((0,D.formatEther)(s.farmInfo.claimable.mul(3).div(1e3))).format("0,0")})]})]}),(0,k.jsxs)("div",{className:"px-3 mb-2  md:w-8/12  w-11/12 md:h-[3rem] h-[1.7rem]  flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,k.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,k.jsx)(l.xv,{tid:"total-power"})}),(0,k.jsx)("div",{className:"text-[#FF2E00]",children:F()((0,D.formatEther)(s.farmInfo.totalHashPower)).format("0,0")})]}),(0,k.jsxs)("div",{className:"px-3 mb-2 md:w-8/12  w-11/12 md:h-[3rem]  h-[1.7rem] flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,k.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,k.jsx)(l.xv,{tid:"my-power"})}),(0,k.jsxs)("div",{className:"text-[#FF2E00]",children:[" ",F()((0,D.formatEther)(s.farmInfo.userHashPower)).format("0,0")," "]})]}),(0,k.jsxs)("div",{className:"px-3 mb-2  md:w-8/12 w-11/12 md:h-[3rem]  h-[1.7rem] flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,k.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,k.jsx)(l.xv,{tid:"my-power-rate"})}),(0,k.jsxs)("div",{className:"text-[#FF2E00]",children:[" ",s.farmInfo.totalHashPower.gt(0)?F()(s.farmInfo.userHashPower.mul(1e8).div(s.farmInfo.totalHashPower).toNumber()/1e8).format("0.000000 %"):"0%"," "]})]}),(0,k.jsxs)("div",{className:"px-3 mb-2 md:w-8/12  w-11/12 md:h-[3rem]  h-[1.7rem] flex justify-between items-center bg-[#FFDDA8] text-[#68452D] rounded-lg border-current border-2",children:[(0,k.jsx)("div",{className:"md:text-2xl text-lg text-[#68452D]",children:(0,k.jsx)(l.xv,{tid:"staked-count"})}),(0,k.jsxs)("div",{className:"text-[#FF2E00]",children:[" ",s.stakedNFTs.length," "]})]}),(0,k.jsxs)("div",{className:"flex flex-row justify-center items-center mb-4",children:[(0,k.jsxs)("div",{className:"md:text-xl text-md  text-[#FFDDA8] font-extrabold md:w-[12rem] md:h-[4.7rem] w-[10rem] h-[3.6rem]  flex flex-col justify-center items-center  bg-[url(/public/assets/mining/button-claim-1.png)] bg-contain bg-center bg-no-repeat cursor-pointer",onClick:function(){return x()},children:[g&&(0,k.jsx)(w.fCD,{className:"animate-spin inline-block mx-auto"}),!g&&(0,k.jsx)(l.xv,{tid:"claim-FHT"})]}),(0,k.jsxs)("div",{className:"md:text-xl text-md text-center  text-[#FFDDA8] font-extrabold md:w-[12rem] md:h-[4.7rem] w-[10rem] h-[3.6rem]  flex flex-col justify-center items-center  bg-[url(/public/assets/mining/button-claim-2.png)] bg-contain bg-center bg-no-repeat cursor-pointer",onClick:function(){return m()},children:[d&&(0,k.jsx)(w.fCD,{className:"animate-spin inline-block mx-auto"}),!d&&(0,k.jsx)(l.xv,{tid:"claim-USDT"})]})]})]})]})})})}):null},I=r(6487),S=r(658),A=r.n(S),E=r(8805),H=function(){var e=b(),t=e.data,r=(e.isLoading,(0,s.useState)(!1)),o=(0,n.Z)(r,2),m=o[0],d=o[1],u=(0,s.useState)(!1),x=(0,n.Z)(u,2),f=x[0],g=x[1];return t?(0,k.jsxs)("div",{className:"px-4 container mx-auto",children:[(0,k.jsx)("div",{className:"h-32 flex justify-center mx-auto text-center bg-[url(/public/assets/mining/title-mining.png)] bg-no-repeat bg-center bg-contain mt-6 ",children:(0,k.jsx)("span",{className:"inline-block mt-16 text-[#FFDDA8] font-bold md:text-2xl text-xl",children:(0,k.jsx)(l.xv,{tid:"mining"})})}),(0,k.jsx)("div",{className:"mx-auto w-[20rem] h-[15rem] md:w-[80rem] md:h-[60rem] md:mt-[-1rem] md:bg-[url(/public/assets/mining/bg-mining.png)] md:bg-center md:bg-contain md:bg-no-repeat",children:(0,k.jsx)(i.Z,{gutter:20,className:"flex justify-start-ns justify-center items-center",children:(0,k.jsxs)(a.Z,{xs:24,sm:24,md:8,lg:8,className:"md:mt-[7rem] md:ml-[2rem] w-[16rem] h-[26rem] bg-[url(/public/assets/mining/mining-card.png)] bg-no-repeat bg-center bg-contain",children:[(0,k.jsx)("div",{className:"relative top-[1.1rem] mx-auto text-center text-[#FFDDA8] text-md",children:(0,k.jsx)(l.xv,{tid:"nft-mining"})}),(0,k.jsxs)("div",{className:"absolute top-[32%] left-[50%] mx-auto md:w-[24%] w-[28%] h-[30%] flex flex-col justify-between items-center",children:[(0,k.jsxs)("div",{className:"w-full text-center flex justify-between items-center text-[#FFDDA8]",children:[(0,k.jsx)("div",{children:"APR"}),(0,k.jsx)("div",{children:function(){if(!t)return"";if(A()().isBefore(t.farmInfo.startTime))return"7,300.0%";var e=t.farmInfo.apr;return e.gt(I.bf.mul(1e3))?"> 100,000%":F()((0,D.formatEther)(e)).format("0,0.0%")}()})]}),(0,k.jsxs)("div",{className:"w-full text-center flex justify-between items-center text-[#FFDDA8]",children:[(0,k.jsx)("img",{className:"block w-auto h-[2.3rem]",src:(0,c.vg)("mining/hero-power.png"),alt:"button-yellow"}),(0,k.jsx)("div",{className:"text-xs",children:"Hero Power"})]}),(0,k.jsxs)("div",{className:"w-full text-center flex justify-between items-center text-[#FFDDA8]",children:[(0,k.jsx)("img",{className:"block w-auto h-[1.6rem]",src:(0,c.vg)("mining/coin.png"),alt:"button-yellow"}),(0,k.jsx)("div",{className:"text-xs",children:"Mining Reward"})]})]}),(0,k.jsxs)("div",{className:"absolute bottom-[15%] md:left-[24%] left-[17%] flex justify-center items-center md:w-6/12 w-[14rem] mx-auto",children:[(0,k.jsx)("div",{className:"mx-auto w-[70%] h-[2.5rem] leading-9 md:text-[1rem] text-[0.6rem] text-[#FFDDA8] bg-[url(/public/assets/mining/button-green.png)] bg-center bg-contain text-center cursor-pointer",onClick:function(){return d(!0)},children:(0,k.jsx)(l.xv,{tid:"stake-unstake"})}),(0,k.jsx)("div",{className:"drop-shadow-lg shadow-red mx-auto w-[70%] h-[2.5rem] leading-9  md:text-[1rem] text-[0.6rem] text-[#FFDDA8] bg-[url(/public/assets/mining/button-yellow.png)] bg-center bg-contain text-center cursor-pointer",onClick:function(){return g(!0)},children:(0,k.jsx)(l.xv,{className:"drop-shadow-lg shadow-xl shadow-red",tid:"harvest"})})]})]})})}),(0,k.jsx)(T,{isOpen:m,setIsOpen:d}),(0,k.jsx)(Z,{isOpen:f,setIsOpen:g})]}):(0,k.jsx)(E.gb,{})}}}]);