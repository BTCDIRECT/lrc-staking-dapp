(this["webpackJsonplrc-staking-dapp"]=this["webpackJsonplrc-staking-dapp"]||[]).push([[9],{1251:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n(0),r=n.n(c),i=n(116),u=n(175),o=n(1250),l=n(652),s=n(70),b=n(176),f=n(2),d=(f.PropTypes.object.isRequired,n(173)),j=n(18),O=n(36),g=n(113),p=n(1137),m=n(1138),k=n.n(m),v=n(24),w=n(22),h=n(80),E=function(){var e=Object(u.b)(),t=e.library,n=e.deactivate,a=Object(i.c)((function(e){return e.settings.language})),o=Object(i.c)((function(e){return e.staking.contract})),l=Object(i.c)((function(e){return e.fee.contract})),s=Object(i.c)((function(e){return e.staking.totalStake})),f=Object(i.c)((function(e){return e.staking.stakeList})),m=Object(i.c)((function(e){return e.staking.yourStake})),E=Object(i.c)((function(e){return e.fee.feeStats})),L=Object(i.c)((function(e){return e.settings.isShowDollar})),y=Object(i.c)((function(e){return e.settings.walletAddress})),x=Object(i.b)(),C=Object(c.useCallback)((function(){return x(Object(w.l)(o))}),[x,o]),S=Object(c.useCallback)((function(){return x(Object(w.k)(o,t))}),[x,o,t]),A=Object(c.useCallback)((function(){return x(Object(w.m)(o,y.value))}),[x,o,y]),M=Object(c.useCallback)((function(){return x(Object(h.c)(l))}),[x,l]),N=Object(c.useCallback)((function(e){return x(Object(O.f)(n,e))}),[x,n]),T=Object(c.useCallback)((function(e){return x(Object(O.j)(e))}),[x]),R=Object(c.useState)(null),D=Object(j.a)(R,2),P=D[0],W=D[1],q=Object(c.useState)(null),B=Object(j.a)(q,2),I=B[0],J=B[1],V=Object(c.useState)(null),F=Object(j.a)(V,2),_=F[0],z=F[1],G=b.a[a];return Object(c.useEffect)((function(){!function(e,t,n){!e||t.isLoaded||t.isLoading||n()}(o,s,C)}),[o,s,C]),Object(c.useEffect)((function(){!function(e,t,n,a){e&&t&&!n.isLoaded&&!n.isLoading&&a()}(o,t,f,S)}),[o,t,f,S]),Object(c.useEffect)((function(){!function(e,t,n){if(e.isLoaded&&!t){var a,c=new Map,r=Object(p.a)(e.value);try{for(r.s();!(a=r.n()).done;){var i=a.value;if("0"!==i.balance){var u=k()().diff(k.a.unix(i.claimedAt),"day");c.set(u,(c.get(u)||0)+Math.round(i.balance/Math.pow(10,18)))}}}catch(s){r.e(s)}finally{r.f()}for(var o=[],l=Math.max.apply(Math,Object(g.a)(Array.from(c.keys())));l>=0;l-=1)o.length?o.push((c.get(l)||0)+o[o.length-1]):o.push(c.get(l)||0);n(o)}}(f,P,W)}),[f,P,W]),Object(c.useEffect)((function(){!function(e,t,n,a){e&&!t.isLoaded&&!t.isLoading&&n.value&&a()}(o,m,y,A)}),[o,m,y,A]),Object(c.useEffect)((function(){!function(e,t,n,a,c,r){if(e.isLoaded&&t.isLoaded){var i=0,u=k()(),o=u.diff(k.a.unix(t.value.claimedAt),"hour")/24,l=t.value.balance/Math.pow(10,18)*o;l>0&&e.value.forEach((function(e){i+=e.balance/Math.pow(10,18)*(u.diff(k.a.unix(e.claimedAt),"hour")/24)})),c((l?Object(v.a)(l).div(i).multipliedBy(100).toFixed(4):0)||0),r(l?o:0)}}(f,m,0,0,J,z)}),[f,m,I,_,J,z]),Object(c.useEffect)((function(){!function(e,t,n){!e||t.isLoaded||t.isLoading||n()}(l,E,M)}),[l,E,M]),r.a.createElement(d.b,{messages:G,feesTotal:(E.value.remainingReward||0)/Math.pow(10,18),stakeTotal:s.value.balance/Math.pow(10,18),stake:(m.value.balance||0)/Math.pow(10,18),pendingReward:m.value.pendingReward/Math.pow(10,18),share:1*I||0,tokenAge:_||0,walletAddress:y.value,tokenAgeList:P||[],onEditAddress:function(){return N(1)},onLogout:function(){return N(0)},isLoading:!E.isLoaded||!s.isLoaded||!m.isLoaded,isChartLoading:!f.isLoaded,isShowDollar:L.value,loopringPrice:L.price,onSetIsShowDollar:T})},L=(f.PropTypes.object.isRequired,n(43)),y=function(){var e=Object(i.c)((function(e){return e.settings.language})),t=Object(i.c)((function(e){return e.settings.walletID})),n=Object(i.c)((function(e){return e.staking.contract})),a=Object(i.c)((function(e){return e.token.contract})),u=Object(i.c)((function(e){return e.settings.walletAddress})),o=Object(i.c)((function(e){return e.staking.yourStake})),l=Object(i.c)((function(e){return e.token.allowance})),s=Object(i.c)((function(e){return e.token.balance})),f=Object(i.c)((function(e){return e.token.approve})),j=Object(i.c)((function(e){return e.staking.stake})),O=Object(i.c)((function(e){return e.staking.claim})),g=Object(i.c)((function(e){return e.staking.withdraw})),p=Object(i.b)(),m=Object(c.useCallback)((function(){return p(Object(L.f)(a,u.value))}),[p,u,a]),k=Object(c.useCallback)((function(){return p(Object(L.g)(a,u.value))}),[p,u,a]),v=Object(c.useCallback)((function(e){return p(Object(L.e)(a,u.value,e))}),[p,u,a]),h=Object(c.useCallback)((function(e){return p(Object(w.i)(n,u.value,e))}),[p,u,n]),E=Object(c.useCallback)((function(){return p(Object(w.h)(n,u.value))}),[p,u,n]),y=Object(c.useCallback)((function(e){return p(Object(w.j)(n,u.value,e))}),[p,u,n]);Object(c.useEffect)((function(){a&&u.value&&!l.isLoading&&!l.isLoaded&&m()}),[a,u,l,m]),Object(c.useEffect)((function(){a&&u.value&&!s.isLoading&&!s.isLoaded&&k()}),[a,u,s,k]);var x=b.a[e];return r.a.createElement(d.a,{messages:x,allowance:l,balance:s,onApprove:v,approve:f,stake:j,onStake:h,isLocked:1===t,claim:O,withdraw:g,onClaim:E,onWithdraw:y,pendingReward:o.value.pendingReward||"0",yourStake:o.value.balance||"0",withdrawTime:1*o.value.withdrawalWaitTime||7776e3,claimTime:1*o.value.rewardWaitTime||7776e3})},x=Object(a.a)((function(){return{}}))(y),C=function(){var e=Object(i.c)((function(e){return e.settings.language})),t=Object(i.c)((function(e){return e.staking.contract})),n=Object(i.c)((function(e){return e.fee.contract})),a=Object(i.c)((function(e){return e.token.contract})),c=Object(i.c)((function(e){return e.settings.walletAddress})),f=Object(u.b)().library,j=b.a[e];return c.value&&f?t&&n&&a?r.a.createElement("div",null,r.a.createElement(o.a,{className:"card-box mb-4"},r.a.createElement("span",{className:"ribbon-angle ribbon-angle--top-left ribbon-primary"},r.a.createElement("small",null,r.a.createElement("a",{href:"https://loopring.org",target:"_blank",rel:"noopener noreferrer",style:{color:"white"}},"Loopring"))),r.a.createElement(l.a,{container:!0,spacing:4},r.a.createElement(l.a,{item:!0,xs:12,lg:5},r.a.createElement("div",{className:"p-4 text-center"},r.a.createElement(E,null))),r.a.createElement(l.a,{item:!0,xs:12,lg:7},r.a.createElement("div",{className:"hero-wrapper bg-composed-wrapper h-100 rounded-right bg-secondary"},r.a.createElement("div",{className:"flex-grow-1 w-100 d-flex align-items-center justify-content-center px-4"},r.a.createElement(x,null)))))),r.a.createElement("div",{className:"text-center"}," ",j.developpedBy,r.a.createElement("a",{href:"https://twitter.com/NolanVanmoortel"},"NolanVanmoortel")," ")):r.a.createElement(d.d,{messages:j}):r.a.createElement(s.a,{exact:!0,from:"/",to:"/login"})};t.default=Object(a.a)((function(){return{}}))(C)}}]);
//# sourceMappingURL=9.268674ca.chunk.js.map