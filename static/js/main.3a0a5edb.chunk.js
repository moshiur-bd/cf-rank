(this["webpackJsonpcf-rank"]=this["webpackJsonpcf-rank"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(26),c=n.n(a),i=(n(52),n(53),n(9)),o=n(12),l=n(13),u=n(16),d=n(15),h=n(6),j=n.n(h),p=n(11),b=n(77),f=n(72),x=n(73),O=(n(55),n(56),n(1));function v(e){return void 0===e||null===e?"":e}function m(e){var t=e.data,n=e.localRank,s=e.userInfo;if(null==t)return Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:"called with null"})});var r=function(e){return e in s?s[e].rank:""},a=function(e){return Object(O.jsxs)("div",{className:"rank-main-content",children:[Object(O.jsxs)("span",{className:"cell-points",children:[e.points," "]}),Object(O.jsx)("span",{className:"cell-time",children:e.bestSubmissionTimeSeconds&&new Date(1e3*e.bestSubmissionTimeSeconds).toISOString().substr(11,8)})]})},c=function(e){return Object(O.jsx)("span",{className:"cell-rejected",children:-e.rejectedAttemptCount})};return Object(O.jsxs)("tr",{className:"rank-font",children:[Object(O.jsx)("td",{style:{"text-align":"left"},children:Object(O.jsx)("span",{className:"hash-rank",children:t.rank>0&&n})}),Object(O.jsx)("td",{style:{"text-align":"center"},children:t.rank>0&&t.rank}),Object(O.jsx)("td",{style:{"text-align":"left"},children:Object(O.jsxs)("div",{className:"handle-cell-div",children:["CONTESTANT"!==t.party.participantType&&Object(O.jsx)("span",{style:{color:"#fff"},children:"*"}),t.party.members.map((function(e){return Object(O.jsxs)("div",{className:"handle "+(n=r(e.handle),n.replace(/\s/g,"")),children:[" ",Object(O.jsx)("a",{target:"_blank",href:"https://codeforces.com/profile/"+e.handle,title:r(e.handle)+" "+(t=e.handle,t in s?v(s[t].firstName)+" "+v(s[t].lastName):""),children:Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("span",{className:"firstLetter",children:e.handle.substr(0,1)}),e.handle.substr(1)," "]})})]});var t,n}))," "]})}),Object(O.jsxs)("td",{children:[Object(O.jsx)("span",{title:"points",children:t.points})," ",t.penalty>0&&Object(O.jsxs)("span",{title:"penalty",className:"cell-rejected",children:[t.penalty," "]})]}),Object(O.jsx)("td",{}),t.problemResults.map((function(e){return Object(O.jsx)("td",{children:Object(O.jsxs)("div",{className:"rank-cell-div",children:[e.points>0&&Object(O.jsx)("div",{className:"rank-side-content"}),e.points>0&&a(e),Object(O.jsx)("div",{className:"rank-side-content",children:e.rejectedAttemptCount>0&&c(e)})]})})}))]})}var g=n(20),k=n(75),y=n(44),N=n(71),C=n(74),I=n(76),w=n(23);n(58);function S(e,t){for(var n=e.substring(1).split("&"),s=0;s<n.length;s++){var r=n[s].split("=");if(decodeURIComponent(r[0])==t)return decodeURIComponent(r[1])}return""}function R(e){var t=S(e.location.search,"handles");t.length>0&&";"!=t.slice(-1)&&(t+=";");var n=S(e.location.search,"parsedHandles");return n.length>0&&";"!=n.slice(-1)&&(n+=";"),{url:S(e.location.search,"url"),contestID:e.match.params.contestID,handles:t,parsedHandles:n,unofficial:"true"==S(e.location.search,"unofficial")}}function F(e){var t=R(e);return function(e){var t,n=0;if(0===e.length)return n;for(t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return n}(t.url+t.contestID+t.handles+t.parsedHandles+t.unofficial.toString())}function D(e,t){return F(e)==F(t)}function H(e,t,n,s,r,a){var c=e;return c.length>0&&"/"!=c.slice(-1)&&(c+="/"),t||(t="1541"),c=c+t+"?",""!==n&&void 0!=n?c=c+"url="+n+"&":r="",a&&"true"==a.toString()&&(c+="unofficial=true&"),""!==s&&void 0!=s&&(c=c+"handles="+s+"&"),""!==r&&void 0!=r&&(c=c+"parsedHandles="+r+"&"),c.length>0&&"&"===c.slice(-1)&&(c=c.slice(0,-1)),c}function T(e,t,n,s,r){return H("/contest",e,t,n,s,r)}function A(e){var t=e.url,n=e.contestID,r=e.handles,a=e.unofficial,c=Object(s.useState)(t),i=Object(g.a)(c,2),o=i[0],l=i[1],u=Object(s.useState)(n),d=Object(g.a)(u,2),h=d[0],j=d[1],p=Object(s.useState)(r),b=Object(g.a)(p,2),f=b[0],x=b[1],v=Object(s.useState)(a),m=Object(g.a)(v,2),S=m[0],R=m[1],F=Object(s.useState)(!1),D=Object(g.a)(F,2),A=D[0],L=D[1],U=Object(O.jsx)("div",{className:A?"hide-me":"parent-input-div one-elm-flex",children:Object(O.jsx)(k.a,{className:"width-hundred one-elm-flex",children:Object(O.jsxs)("div",{className:"width-hundred flex-input-div",children:[Object(O.jsxs)("div",{className:"handles-div min-width one-elm-flex",children:[Object(O.jsx)(k.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"Handles"}),Object(O.jsx)(y.a,{size:"sm",className:"mb-0 org-field",id:"inlineFormInput",placeholder:"handles seperated by ;",value:f,onChange:function(e){return x(e.target.value)}})]}),Object(O.jsxs)("div",{className:"url-div min-width one-elm-flex",children:[Object(O.jsx)(k.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"URL"}),Object(O.jsx)(y.a,{size:"sm",className:"mb-0 org-field",id:"inlineFormInput",placeholder:"city/organization cf url seperated by ;",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(O.jsxs)("div",{className:"contest-div min-width one-elm-flex",children:[Object(O.jsx)(k.a.Label,{htmlFor:"inlineFormInput2",srOnly:!0,children:"ContestID"}),Object(O.jsx)(y.a,{size:"sm",className:"mb-0",id:"inlineFormInput2",placeholder:"ContestID",value:h,onChange:function(e){j(e.target.value)}})]}),Object(O.jsxs)("div",{className:"unofficial-div min-width one-elm-flex",children:[Object(O.jsx)("input",{type:"checkbox",className:"btn-light",checked:S,onChange:function(e){R(e.target.checked)}})," ",Object(O.jsx)("span",{children:"unofficial"})]}),Object(O.jsx)("div",{className:"button-div min-width one-elm-flex",children:Object(O.jsx)(w.b,{to:T(h,o,f,e.parsedHandles,S),children:Object(O.jsx)(N.a,{type:"submit",className:"mb-0 btn-light",size:"sm",children:"Load"})})})]})},t+n)});return Object(O.jsx)("div",{children:Object(O.jsx)(C.a,{bg:"dark",variant:"dark",className:"navbar-expand-sm",children:Object(O.jsxs)(I.a,{className:"mr-auto width-hundred",children:[Object(O.jsx)(I.a.Link,{href:H("#selector/contests/",h,o,f,e.parsedHandles,S),active:e.location.pathname.startsWith("/selector/contests"),children:"Contests"}),Object(O.jsx)(I.a.Link,{disabled:!0,active:e.location.pathname.startsWith("/contest"),children:"Ranklist"}),Object(O.jsx)("div",{className:"one-elm-flex",children:Object(O.jsx)("input",{type:"checkbox",onClick:function(e){return L(e.target.checked)},value:A})}),U]})})})}var L=n(28),U=n(33),M="https://be-beam.swiftshopbd.com/",z="https://codeforces.com/api",P=function(e,t,n){return"/contest.standings?showUnofficial="+t+"&contestId="+e+"&handles="+n},_=function(e){return"/user.info?handles="+e};function E(e){return q.apply(this,arguments)}function q(){return(q=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(M+t,{"X-Requested-With":"cf"}).then((function(e){return e.text()})).then((function(e){var t,n=(new DOMParser).parseFromString(e,"text/html").querySelector("#pageContent > div.datatable.ratingsDatatable").innerHTML,s=Object(U.a)(n.matchAll('/profile/(.+?)"')),r="",a=Object(L.a)(s);try{for(a.s();!(t=a.n()).done;){var c=t.value;r=r.concat(c[1]+";")}}catch(i){a.e(i)}finally{a.f()}return r})).catch((function(e){return console.log("Failed to fetch page: ",e),""})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t,n){return B.apply(this,arguments)}function B(){return(B=Object(p.a)(j.a.mark((function e(t,n,s){var r,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,a=z+P(t,s,n),console.log("Fetching",a),e.next=5,fetch(a).catch((function(e){console.log(e),r=!0}));case 5:if(c=e.sent,!r&&200===c.status){e.next=8;break}return e.abrupt("return",void 0);case 8:return e.next=10,c.json();case 10:return e.abrupt("return",e.sent.result);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t){return J.apply(this,arguments)}function J(){return(J=Object(p.a)(j.a.mark((function e(t,n){var s,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=!1,r=z+_(t),console.log("Fetching",r),e.next=5,fetch(r).catch((function(e){console.log(e),s=!0}));case 5:if(a=e.sent,!s&&200===a.status){e.next=8;break}return e.abrupt("return",void 0);case 8:return e.next=10,a.json();case 10:return e.abrupt("return",e.sent.result);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(43),n(65);var Y=n.p+"static/media/logo.6ce24c58.svg";function V(e){return new Set(e.split(";"))}function X(e,t){var n,s=V(e),r=V(t),a=function(e,t){var n,s=new Set(e),r=Object(L.a)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;s.delete(a)}}catch(c){r.e(c)}finally{r.f()}return s}(s,r);return{cnt:a.size,unq:(n=a,Object(U.a)(n).join(";")+";"),tot:r.size+a.size-1}}function K(e,t){return function(e,t){if(e.size!==t.size)return!1;var n,s=Object(L.a)(e);try{for(s.s();!(n=s.n()).done;){var r=n.value;if(!t.has(r))return!1}}catch(a){s.e(a)}finally{s.f()}return!0}(V(e),V(t))}var Q="FINISHED",Z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;Object(o.a)(this,n),(s=t.call(this,e))._isMounted=!1;var r=e.handles;return""!==e.url&&(r+=e.parsedHandles),s.state={data:null,loading:!0,needRetry:!0,failed:!1,handles:r,renderCount:0,userInfo:{}},s}return Object(l.a)(n,[{key:"actionFetchRanks",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(this.props.contestID,t,this.props.unofficial);case 2:void 0!==(n=e.sent)?(this.state.data=n,this.state.data.contest.phase==Q?this.state.needRetry=!1:this.state.needRetry=!0):this.state.needRetry=!1,this.state.loading=!1,this._isMounted&&this.setState({renderCount:this.state.renderCount+1});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"actionFetchUserInfo",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:void 0!==(n=e.sent)?(s={},n.map((function(e){return s[e.handle]=e})),this.state.userInfo=s):console.log("user-info not found. unable to set colors"),this._isMounted&&this.setState({renderCount:this.state.renderCount+1});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseHandlesFromSingleURLAndPages",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n,s,r,a,c,i,o,l,u,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="",s=1;case 2:for(r=[],a=1;a<=2;a++)r.push(E(t+"/page/"+s)),s++;return e.next=7,Promise.all(r);case 7:c=e.sent,i=0;case 9:if(!(i<c.length)){e.next=19;break}if(o=X(c[i],n),l=o.unq,u=o.cnt,d=o.tot,!(u>0)){e.next=15;break}n+=l,e.next=16;break;case 15:return e.abrupt("break",19);case 16:i++,e.next=9;break;case 19:if(!(u<=0||s>20)){e.next=21;break}return e.abrupt("break",23);case 21:e.next=2;break;case 23:return console.table({log:"Parse handle result per url",url:t,total:d,handles:n}),e.abrupt("return",n);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseHandlesFromAllUrls",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n,s,r,a,c,i,o,l,u,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="",s=t.split(";"),r=[],a=0;case 4:if(!(a<s.length)){e.next=11;break}if(""!==s[a]){e.next=7;break}return e.abrupt("return");case 7:r.push(this.parseHandlesFromSingleURLAndPages(s[a]));case 8:a++,e.next=4;break;case 11:return e.next=13,Promise.all(r);case 13:for(c=e.sent,i=0;i<c.length;i++)o=X(c[i],n),l=o.unq,u=o.cnt,d=o.tot,u>0&&(n+=l);return console.table({log:"Total handles parsed",total:d,handles:n}),e.abrupt("return",n);case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseHandles",value:function(){var e=Object(p.a)(j.a.mark((function e(){var t,n,s,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.props.url&&""!==this.props.url){e.next=2;break}return e.abrupt("return");case 2:return this.state.loading=!0,e.next=5,this.parseHandlesFromAllUrls(this.props.url);case 5:if(t=e.sent,n=X(t,this.props.handles),s=n.unq,r=n.cnt,a=n.tot,console.table({log:"Total handles parsed - custom handles",total:a,totalHandles:t,uniqueHandles:s,uniqueCount:r}),!K(s,this.props.parsedHandles)){e.next=11;break}return e.abrupt("return");case 11:this._isMounted&&this.props.history.push(T(this.props.contestID,this.props.url,this.props.handles,s,this.props.unofficial));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setRefreshIfNecessary",value:function(){var e=Object(p.a)(j.a.mark((function e(){var t=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!==this.state.handles&&(this.actionFetchRanks(this.state.handles),this.actionFetchUserInfo(this.state.handles)),e.next=3,this.parseHandles();case 3:this.state.needRetry&&(this.parseRankInterval=setInterval((function(){t.actionFetchRanks(t.state.handles)}),3e4));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.parseRankInterval),this._isMounted=!1}},{key:"componentDidMount",value:function(){this.setRefreshIfNecessary().then(),this._isMounted=!0}},{key:"shouldComponentUpdate",value:function(e,t){return t.renderCount!=this.state.renderCount||t.handles!=this.state.handles&&(this.actionFetchRanks(t.handles),!1)}},{key:"displayProgressBar",value:function(e,t){if(void 0!=e&&void 0!=t&&!(e>t||e<0)){var n=Math.round(e/t*100);return Object(O.jsx)("tr",{children:Object(O.jsx)("th",{colSpan:"100",children:Object(O.jsx)(b.a,{variant:"info",now:n,animated:!0})})})}}},{key:"render",value:function(){var e=this,t=""==this.props.handles&&""==this.props.url;if(t&&(this.state.loading=!1),t||null==this.state.data)return 0==this.state.loading?Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"stopped",children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Not Available or Invalid Args!"})]})}):Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"loading",children:[Object(O.jsx)(f.a,{style:{width:"100px",height:"100px"},animation:"border",role:"status",children:Object(O.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(O.jsx)("p",{children:"Constructing Ranklist..."})]})});var n,s=this.state.data,r=1,a=function(e){return 0===e||s.rows[e-1].rank==s.rows[e].rank?r:r=e+1};return Object(O.jsxs)("div",{children:[s.contest.phase===Q&&Object(O.jsx)("img",{src:Y,className:"App-logo",alt:"logo"}),s.contest.phase!==Q&&Object(O.jsx)("img",{src:Y,className:"App-logo-animate",alt:"logo"}),Object(O.jsx)("div",{className:"con-tittle",children:s.contest.name}),Object(O.jsx)("div",{className:"ranklist",children:Object(O.jsxs)(x.a,{variant:"dark",size:"sm",responsive:"sm",striped:!0,bordered:!0,children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:Object(O.jsx)("th",{className:"white-hyperlink",colSpan:"100",children:Object(O.jsx)("a",{target:"_blank",href:"https://codeforces.com/contest/"+this.props.contestID+"/standings",children:(n=s.contest.phase,"FINISHED"===n?"Final Standings":"PENDING_SYSTEM_TEST"===n?"Pending System Test":"SYSTEM_TEST"===n?"System Testing":"CODING"===n?"Contest is Running":void 0)})})}),this.displayProgressBar(s.contest.relativeTimeSeconds,s.contest.durationSeconds),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{style:{"text-align":"left"},children:Object(O.jsx)("span",{className:"hash-rank",children:"#"})}),Object(O.jsx)("th",{style:{"text-align":"center"},children:"Rank"}),Object(O.jsx)("th",{style:{"text-align":"left"},children:"Handle"}),Object(O.jsx)("th",{children:" Score "}),Object(O.jsx)("th",{style:{"text-align":"left"},children:" "}),s.problems.map((function(t){return Object(O.jsx)("th",{className:"white-hyperlink",title:t.name+" : "+t.rating,children:Object(O.jsx)("a",{target:"_blank",href:"https://codeforces.com/contest/"+e.props.contestID+"/problem/"+t.index,children:t.index})})}))]})]}),Object(O.jsx)("tbody",{children:s.rows.map((function(t,n){return Object(O.jsx)(m,{localRank:a(n),data:t,userInfo:e.state.userInfo},n)}))})]})})]})}}]),n}(r.a.Component),$=(n(66),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"layout-header",children:Object(O.jsx)(A,Object(i.a)({},this.props),this.props.contestID+this.props.url)}),Object(O.jsx)("div",{className:"App-Container",children:this.props.children}),Object(O.jsx)("div",{className:"footer"})]})}}]),n}(r.a.Component)),ee=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!D(e,this.props)}},{key:"render",value:function(){return console.log("rank-layout-rendering",this.props),Object(O.jsx)("div",{children:Object(O.jsx)($,Object(i.a)(Object(i.a)(Object(i.a)({},this.props),R(this.props)),{},{children:Object(O.jsx)(Z,Object(i.a)(Object(i.a)({},this.props),R(this.props)),"rank-list"+F(this.props))}),"rank-list-layout")})}}]),n}(r.a.Component),te=(n(67),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){if(console.log("rendering-row",this.props),null==this.props.data)return Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:"called with null"})});var e=this.props.data;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(w.b,{to:H("/selector/contests/",e.id,this.props.url,this.props.handles,this.props.parsedHandles,this.props.unofficial),children:Object(O.jsxs)("div",{className:"div-checkbox-selector one-elm-flex",ref:this.props.innerRef,children:[" ",Object(O.jsx)("input",{type:"checkbox",checked:this.props.selected})," "]})})}),Object(O.jsx)("td",{textAlign:"left",children:e.name}),Object(O.jsx)("td",{textAlign:"left",children:e.id}),Object(O.jsx)("td",{textAlign:"center",children:Object(O.jsx)("a",{href:"https://codeforces.com/contest/"+e.id,target:"_blank",children:"link"})})]})}},{key:"shouldComponentUpdate",value:function(e,t){return null===e||null===this.props||e.selected!==this.props.selected}}]),n}(r.a.Component)),ne=r.a.forwardRef((function(e,t){return Object(O.jsx)(te,Object(i.a)({innerRef:t},e))})),se=(n(68),function(e){return"/contest.list?gym="+e});function re(e){var t=e.searchStr,n=e.children;return r.a.Children.toArray(n).filter((function(e){return!t||""==t||e.props.data.name.toLowerCase().includes(t.toLowerCase())}))}var ae=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).selectRef=[],s.refID={},s.state={data:null,loading:!0,needRetry:!0,failed:!1,searchStr:"",renderCount:0},s}return Object(l.a)(n,[{key:"actionFetchContests",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,s="https://codeforces.com/api"+se(t),console.log("Fetching Contests",s),e.next=5,fetch(s).catch((function(e){console.log(e),n=!0}));case 5:if(r=e.sent,!n){e.next=8;break}return e.abrupt("return");case 8:if(200!==r.status){e.next=14;break}return e.next=11,r.json();case 11:this.state.data=e.sent.result,e.next=14;break;case 14:this.state.loading=!1,this.forceUpdate();case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderOrgs",value:function(){return Object(O.jsx)("div",{className:"orgs content-div",children:Object(O.jsx)(x.a,{variant:"dark",size:"sm",responsive:"sm",striped:"true",children:Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{}),Object(O.jsx)("th",{children:"Org Name"}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{children:"Codeforces"})]})]})},"orgs-table")},"orgs-div")}},{key:"renderContests",value:function(){var e=this,t=this.state.data;return Object(O.jsx)("div",{className:"contests content-div",children:Object(O.jsxs)(x.a,{variant:"dark",size:"sm",responsive:"sm",striped:"true",children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:Object(O.jsx)("th",{colSpan:"2",children:Object(O.jsxs)("div",{className:"filter-container",children:[Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{className:"sm",placeholder:"Filter by Tittle",defaultValue:this.state.searchStr,onChange:function(t){return e.state.searchStr=t.target.value}})}),Object(O.jsx)("div",{children:Object(O.jsx)(N.a,{type:"submit",className:"btn-light",onClick:function(t){if(""!=e.state.searchStr)return e.setState({renderCount:e.state.renderCount+1})},children:"Filter"})})]})})}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{}),Object(O.jsx)("th",{children:"Contest Tittle"}),Object(O.jsx)("th",{children:"ID"}),Object(O.jsx)("th",{children:"Codeforces"})]})]}),Object(O.jsx)("tbody",{children:Object(O.jsx)(re,{searchStr:this.state.searchStr,children:t.map((function(t,n){if("BEFORE"!==t.phase)return t.id in e.refID||(e.selectRef.push(r.a.createRef()),e.refID[t.id]=e.selectRef.length-1),Object(O.jsx)(ne,{ref:e.selectRef[e.refID[t.id]],data:t,url:e.props.url,handles:e.props.handles,parsedHandles:e.props.parsedHandles,unofficial:e.props.unofficial,selected:t.id==e.props.contestID},n)}))},"search-str"+this.state.searchStr)})]},"contests-table")},"contests-div")}},{key:"render",value:function(){return null===this.state.data?!1===this.state.loading?Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"stopped",children:Object(O.jsx)("p",{children:"Not Available! "})})}):Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"loading",children:[Object(O.jsx)(f.a,{style:{width:"100px",height:"100px"},animation:"border",role:"status",children:Object(O.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(O.jsx)("p",{children:"Parsing Contests..."})]})}):Object(O.jsx)("div",{className:"content-list-div",children:this.renderContests()},"content-list-div")}},{key:"repeatedWork",value:function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.loading=!0,e.abrupt("return",this.actionFetchContests(!1).then((function(e){console.log("contests-data",e)})).catch((function(e){return alert(e)})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setRefreshIfNecessary",value:function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.repeatedWork();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.setRefreshIfNecessary().then()}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){if(null!=e&&(e.url!=this.props.url||e.contestID!=this.props.contestID)){try{this.selectRef[this.refID[Number(e.contestID)]].current.innerHTML='<input type="checkbox" checked="true">',this.selectRef[this.refID[Number(this.props.contestID)]].current.innerHTML='<input type="checkbox">'}catch(n){}return!1}return!!(t&&t.searchStr!=this.state.searchStr||this.state.renderCount!=t.renderCount)}}]),n}(r.a.Component),ce=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!D(e,this.props)}},{key:"render",value:function(){return console.log("con-layout-rendering",this.props),Object(O.jsx)("div",{children:Object(O.jsx)($,Object(i.a)(Object(i.a)(Object(i.a)({},this.props),R(this.props)),{},{children:Object(O.jsx)(ae,Object(i.a)(Object(i.a)({},this.props),R(this.props)),"con-list")}),"con-list-layout")})}}]),n}(r.a.Component),ie=n(7);function oe(){return Object(O.jsx)(w.a,{children:Object(O.jsx)("div",{className:"Switch-Route-Block",children:Object(O.jsxs)(ie.d,{children:[Object(O.jsx)(ie.b,{path:"/selector/contests/:contestID",render:function(e){return Object(O.jsx)(ce,Object(i.a)({},e),"contest-list-layout")}},"route-contest-list"),Object(O.jsx)(ie.b,{path:"/contest/:contestID",render:function(e){return Object(O.jsx)(ee,Object(i.a)({},e),"single-rank-instance")}},"route-rank-list"),Object(O.jsx)(ie.a,{from:"/",to:"/contest/1541?url=https://codeforces.com/ratings/organization/3403",component:ce})]},"switch-route-sw")},"switch-route-block")},"hash-router")}var le=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)(oe,{},"app-conatiner")})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(le,{})}),document.getElementById("root")),ue()}},[[69,1,2]]]);
//# sourceMappingURL=main.3a0a5edb.chunk.js.map