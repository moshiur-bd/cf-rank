(this["webpackJsonpcf-rank"]=this["webpackJsonpcf-rank"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(27),c=n.n(a),i=(n(53),n(54),n(8)),o=n(10),l=n(11),u=n(15),h=n(14),d=n(19),p=n(4),j=n.n(p),f=n(7),b=n(78),x=n(73),O=n(74),v=(n(56),n(57),n(1));function m(e){return void 0===e||null===e?"":e}function k(e){var t=e.data,n=e.localRank,s=e.userInfo;if(null==t)return Object(v.jsx)("tr",{children:Object(v.jsx)("td",{children:"called with null"})});var r=function(e){return e in s?s[e].rank:""},a=function(e){return Object(v.jsxs)("div",{className:"rank-main-content",children:[Object(v.jsxs)("span",{className:"cell-points",children:[e.points," "]}),Object(v.jsx)("span",{className:"cell-time",children:e.bestSubmissionTimeSeconds&&new Date(1e3*e.bestSubmissionTimeSeconds).toISOString().substr(11,8)})]})},c=function(e){return Object(v.jsx)("span",{className:"cell-rejected",children:-e.rejectedAttemptCount})},i=t.rank>0&&t.penalty>0;return Object(v.jsxs)("tr",{className:"rank-font",children:[Object(v.jsx)("td",{style:{"text-align":"left"},children:Object(v.jsx)("span",{className:"hash-rank",children:t.rank>0&&n})}),Object(v.jsx)("td",{style:{"text-align":"center"},children:t.rank>0&&t.rank}),Object(v.jsx)("td",{style:{"text-align":"left"},children:Object(v.jsxs)("div",{className:"handle-cell-div",children:["CONTESTANT"!==t.party.participantType&&Object(v.jsx)("span",{style:{color:"#fff"},children:"*"}),t.party.members.map((function(e){return Object(v.jsxs)("div",{className:"handle "+(n=r(e.handle),"string"===typeof n||n instanceof String?n.replace(/\s/g,""):""),children:[" ",Object(v.jsx)("a",{target:"_blank",href:"https://codeforces.com/profile/"+e.handle,title:r(e.handle)+" "+(t=e.handle,t in s?m(s[t].firstName)+" "+m(s[t].lastName):""),children:Object(v.jsxs)("div",{children:[" ",Object(v.jsx)("span",{className:"firstLetter",children:e.handle.substr(0,1)}),e.handle.substr(1)," "]})})]});var t,n}))," "]})}),Object(v.jsx)("td",{children:Object(v.jsxs)("div",{className:"rank-cell-div",children:[i&&Object(v.jsx)("div",{className:"rank-side-content"}),Object(v.jsxs)("div",{className:"rank-main-content",children:[Object(v.jsx)("span",{className:"total-points",title:"total points",children:t.points})," "]}),i&&Object(v.jsxs)("div",{className:"rank-side-content",children:[Object(v.jsxs)("span",{title:"total penalty",className:"cell-rejected",children:[t.penalty," "]})," "]})]})}),Object(v.jsx)("td",{}),t.problemResults.map((function(e){return Object(v.jsx)("td",{children:Object(v.jsxs)("div",{className:"rank-cell-div",children:[e.points>0&&Object(v.jsx)("div",{className:"rank-side-content"}),e.points>0&&a(e),Object(v.jsx)("div",{className:"rank-side-content",children:e.rejectedAttemptCount>0&&c(e)})]})})}))]})}var g=n(28),y=n(76),w=n(45),C=n(72),S=n(75),N=n(77),I=n(29);n(59);function R(e,t){for(var n=e.substring(1).split("&"),s=0;s<n.length;s++){var r=n[s].split("=");if(decodeURIComponent(r[0])==t)return decodeURIComponent(r[1])}return""}function F(e){var t=R(e.location.search,"handles");t.length>0&&";"!=t.slice(-1)&&(t+=";");var n=R(e.location.search,"parsedHandles");return n.length>0&&";"!=n.slice(-1)&&(n+=";"),{url:R(e.location.search,"url"),contestID:e.match.params.contestID,handles:t,parsedHandles:n,unofficial:"true"==R(e.location.search,"unofficial")}}function D(e){var t=F(e);return function(e){var t,n=0;if(0===e.length)return n;for(t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return n}(t.url+t.contestID+t.handles+t.parsedHandles+t.unofficial.toString())}function A(e,t){return D(e)==D(t)}function B(e,t,n,s,r,a){var c=e;return c.length>0&&"/"!=c.slice(-1)&&(c+="/"),t||(t="1541"),c=c+t+"?",""!==n&&void 0!=n?c=c+"url="+n+"&":r="",a&&"true"==a.toString()&&(c+="unofficial=true&"),""!==s&&void 0!=s&&(c=c+"handles="+s+"&"),""!==r&&void 0!=r&&(c=c+"parsedHandles="+r+"&"),c.length>0&&"&"===c.slice(-1)&&(c=c.slice(0,-1)),c}function T(e,t,n,s,r){return B("/contest",e,t,n,s,r)}function L(e){var t=e.url,n=e.contestID,r=e.handles,a=e.unofficial,c=Object(s.useState)(t),i=Object(g.a)(c,2),o=i[0],l=i[1],u=Object(s.useState)(n),h=Object(g.a)(u,2),d=h[0],p=h[1],j=Object(s.useState)(r),f=Object(g.a)(j,2),b=f[0],x=f[1],O=Object(s.useState)(a),m=Object(g.a)(O,2),k=m[0],R=m[1],F=Object(s.useState)(!1),D=Object(g.a)(F,2),A=D[0],L=D[1],U=Object(v.jsx)("div",{className:A?"hide-me":"parent-input-div one-elm-flex",children:Object(v.jsx)(y.a,{className:"width-hundred one-elm-flex",children:Object(v.jsxs)("div",{className:"width-hundred flex-input-div",children:[Object(v.jsxs)("div",{className:"handles-div min-width one-elm-flex",children:[Object(v.jsx)(y.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"Handles"}),Object(v.jsx)(w.a,{size:"sm",className:"mb-0 org-field",id:"inlineFormInput",placeholder:"handles seperated by ;",value:b,onChange:function(e){return x(e.target.value)}})]}),Object(v.jsxs)("div",{className:"url-div min-width one-elm-flex",children:[Object(v.jsx)(y.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"URL"}),Object(v.jsx)(w.a,{size:"sm",className:"mb-0 org-field",id:"inlineFormInput",placeholder:"city/organization cf url seperated by ;",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(v.jsxs)("div",{className:"contest-div min-width one-elm-flex",children:[Object(v.jsx)(y.a.Label,{htmlFor:"inlineFormInput2",srOnly:!0,children:"ContestID"}),Object(v.jsx)(w.a,{size:"sm",className:"mb-0",id:"inlineFormInput2",placeholder:"ContestID",value:d,onChange:function(e){p(e.target.value)}})]}),Object(v.jsxs)("div",{className:"unofficial-div min-width one-elm-flex",children:[Object(v.jsx)("input",{type:"checkbox",className:"btn-light",checked:k,onChange:function(e){R(e.target.checked)}})," ",Object(v.jsx)("span",{children:"unofficial"})]}),Object(v.jsx)("div",{className:"button-div min-width one-elm-flex",children:Object(v.jsx)(I.b,{to:T(d,o,b,e.parsedHandles,k),children:Object(v.jsx)(C.a,{type:"submit",className:"mb-0 btn-light",size:"sm",children:"Load"})})})]})},t+n)});return Object(v.jsx)("div",{children:Object(v.jsx)(S.a,{bg:"dark",variant:"dark",className:"navbar-expand-sm",children:Object(v.jsxs)(N.a,{className:"mr-auto width-hundred",children:[Object(v.jsx)(N.a.Link,{href:B("#selector/contests/",d,o,b,e.parsedHandles,k),active:e.location.pathname.startsWith("/selector/contests"),children:"Contests"}),Object(v.jsx)(N.a.Link,{href:B("#selector/orgs/",d,o,b,e.parsedHandles,k),active:e.location.pathname.startsWith("/selector/orgs"),children:"Orgs"}),Object(v.jsx)(N.a.Link,{disabled:!0,active:e.location.pathname.startsWith("/contest"),children:"Ranklist"}),Object(v.jsx)("div",{className:"one-elm-flex",children:Object(v.jsx)("input",{type:"checkbox",onClick:function(e){return L(e.target.checked)},value:A})}),U]})})})}var U=n(23),H="https://codeforces.com/api",M=function(e){return"https://codeforces.com/ratings/organization/"+e},P=function(e){return e.substr(e.lastIndexOf("/")+1)},z=function(e){return"cf-rank"+e};function E(){return _.apply(this,arguments)}function _(){return(_=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(z("/assets/orgs.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return X.apply(this,arguments)}function X(){return(X=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=P(t),e.abrupt("return",fetch(z("/assets/handles/id.org."+n+".json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return 200!==e.status?{handles:""}:e.json()})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){if(void 0==e||null==e)return new Set;var t=new Set(e.split(";"));return t.delete(""),t}function Q(e,t){var n,s=q(e),r=q(t),a=function(e,t){var n,s=new Set(e),r=Object(U.a)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;s.delete(a)}}catch(c){r.e(c)}finally{r.f()}return s}(s,r);return{cnt:a.size,unq:(n=a,Object(d.a)(n).join(";")+";"),tot:r.size+a.size}}var J="https://cors.swiftshopbd.com/",V=function(e,t,n){return"/contest.standings?showUnofficial="+t+"&contestId="+e+"&handles="+n},G=function(e){return"/user.info?handles="+e};function Y(e){return K.apply(this,arguments)}function K(){return(K=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(J+t,{"X-Requested-With":"cf"}).then((function(e){return e.text()})).then((function(e){var t,n=(new DOMParser).parseFromString(e,"text/html").querySelector("#pageContent > div.datatable.ratingsDatatable").innerHTML,s=Object(d.a)(n.matchAll('/profile/(.+?)"')),r="",a=Object(U.a)(s);try{for(a.s();!(t=a.n()).done;){var c=t.value;r=r.concat(c[1]+";")}}catch(i){a.e(i)}finally{a.f()}return r})).catch((function(e){return console.log("Failed to fetch page: ",e),""})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t){return $.apply(this,arguments)}function $(){return($=Object(f.a)(j.a.mark((function e(t,n){var s,r,a,c,i,o,l,u,h,d,p;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s="",r=1,a=void 0===n||n<=0;case 3:for(c=[],a&&(n=1e3),i=1;n>0&&i<=20;i++)c.push(Y(t+"/page/"+r)),r++,n-=200;return e.next=9,Promise.all(c);case 9:o=e.sent,l=0;case 11:if(!(l<o.length)){e.next=21;break}if(u=Q(o[l],s),h=u.unq,d=u.cnt,p=u.tot,!(d>0)){e.next=17;break}s+=h,e.next=18;break;case 17:return e.abrupt("break",21);case 18:l++,e.next=11;break;case 21:if(!(d<=150)){e.next=23;break}return e.abrupt("break",25);case 23:e.next=3;break;case 25:return console.table({log:"Parse handle result per url",url:t,total:p,handles:s}),e.abrupt("return",{handles:s});case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){return te.apply(this,arguments)}function te(){return(te=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://codeforces.com/ratings",e.abrupt("return",fetch(J+"https://codeforces.com/ratings",{"X-Requested-With":"cf"}).then((function(e){return e.text()})).then((function(e){var t,n=(new DOMParser).parseFromString(e,"text/html").querySelector("#locationSelect > label > select").innerHTML.replaceAll(/(\r\n|\n|\r)/gm,"").replaceAll("</option>","ENDXXXEND\n"),s=Object(d.a)(n.matchAll('<option.*value="(.*)".*>(.+?)ENDXXXEND')),r=[],a=!0,c=Object(U.a)(s);try{for(c.s();!(t=c.n()).done;){var i=t.value;if(a)a=!1;else{var o=i[2].trim(),l=i[1].trim(),u=o.lastIndexOf(","),h=parseInt(o.substr(u+1));h=isNaN(h)?0:h,r.push({name:o.substr(0,u),id:l,hc:h})}}}catch(p){c.e(p)}finally{c.f()}return r})).catch((function(e){return console.log("Failed to fetch page: ",e),""})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e){return se.apply(this,arguments)}function se(){return(se=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=new(function(){function e(t){Object(o.a)(this,e),this.counter=t}return Object(l.a)(e,[{key:"now",value:function(){return Math.round(+new Date/1e3)}},{key:"hold",value:function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.counter>0)){e.next=6;break}return this.counter--,e.next=5,t();case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,ne(200);case 8:e.next=0;break;case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"release",value:function(){this.counter++}}]),e}())(5);function ae(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(f.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=50;case 1:if(!(n>0)){e.next=10;break}return e.next=4,re.hold(Object(f.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,re.release(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))));case 4:if(200!=(s=e.sent).status){e.next=7;break}return e.abrupt("return",s);case 7:n--,e.next=1;break;case 10:return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t,n){return oe.apply(this,arguments)}function oe(){return(oe=Object(f.a)(j.a.mark((function e(t,n,s){var r,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,a=H+V(t,s,n),console.log("Fetching",a),e.next=5,ae(a).catch((function(e){console.log(e),r=!0}));case 5:if(c=e.sent,!r&&200===c.status){e.next=8;break}return e.abrupt("return",void 0);case 8:return e.next=10,c.json();case 10:return e.abrupt("return",e.sent.result);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(f.a)(j.a.mark((function e(t){var n,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,s=H+G(t),console.log("Fetching",s),e.next=5,ae(s).catch((function(e){console.log(e),n=!0}));case 5:if(r=e.sent,!n&&200===r.status){e.next=8;break}return e.abrupt("return",void 0);case 8:return e.next=10,r.json();case 10:return e.abrupt("return",e.sent.result);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(40),n(66);var he=n.p+"static/media/logo.6ce24c58.svg",de="FINISHED",pe=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e))._isMounted=!1,s.state={data:null,loading:!0,needRetry:!0,failed:!1,renderCount:0,userInfo:{},userInfoCnt:0,handlesSet:q(e.handles),handlesSetInRank:new Set,handlesSetRankQ:new Set,progressBar:{handles:!1,rank:!1,info:!1,show:!0}},s}return Object(l.a)(n,[{key:"actionFetchRanksAndFilterByUsers",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t,n,s=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(this.props.contestID,"",this.props.unofficial);case 2:void 0!==(t=e.sent)?(this.state.data={},this.state.data.contest=t.contest,this.state.data.problems=t.problems,this.state.data.rows=[],n=new Set,t.rows.map((function(e){var t=!1;e.party.members.map((function(e){s.state.handlesSet.has(e.handle)&&(t=!0)})),t&&(s.state.data.rows.push(e),e.party.members.map((function(e){0==s.state.handlesSetInRank.has(e.handle)&&(s.state.handlesSetInRank.add(e.handle),n.add(e.handle))})))})),this.state.progressBar.rank=!0,this.setState({renderCount:this.state.renderCount+1}),n.forEach((function(e){s.state.handlesSetRankQ.add(e)})),this.state.data.contest.phase==de?this.state.needRetry=!1:this.state.needRetry=!0):this.state.needRetry=!1,this.state.loading=!1,this._isMounted&&this.setState({renderCount:this.state.renderCount+1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"actionFetchRanks",value:function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(this.props.contestID,t,this.props.unofficial);case 2:void 0!==(n=e.sent)?(this.state.data=n,this.state.data.contest.phase==de?this.state.needRetry=!1:this.state.needRetry=!0):this.state.needRetry=!1,this.state.loading=!1,this.state.progressBar.rank=!0,this._isMounted&&this.setState({renderCount:this.state.renderCount+1});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"BuildRanklist",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.handlesSet.size<1e3)){e.next=12;break}if(!((t=Object(d.a)(this.state.handlesSet).join(";")).length<1950)){e.next=8;break}return this.state.handlesSetRankQ=new Set(this.state.handlesSet),e.next=6,this.actionFetchRanks(t);case 6:e.next=10;break;case 8:return e.next=10,this.actionFetchRanksAndFilterByUsers();case 10:e.next=14;break;case 12:return e.next=14,this.actionFetchRanksAndFilterByUsers();case 14:return e.next=16,this.actionFetchUserInfo();case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"actionFetchUserInfo",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t,n,s,r,a,c=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=Object(d.a)(this.state.handlesSetRankQ),n="",s=[],r=0;r<t.length;r++)(t[r]+n).length>1950&&(s.push(le(n)),n=""),n+=t[r]+";";return""!=n&&(s.push(le(n)),n=""),a=this.state.userInfo,e.next=8,Promise.all(s);case 8:e.sent.map((function(e){e.map((function(e){a[e.handle]=e,c.state.userInfoCnt++}))})),t.map((function(e){c.state.handlesSetRankQ.delete(e)})),this.state.userInfo=a,this.state.progressBar.info=!0,this._isMounted&&this.setState({renderCount:this.state.renderCount+1});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"parseHandlesFromAllUrlsAndSet",value:function(){var e=Object(f.a)(j.a.mark((function e(t){var n,s,r,a=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.split(";"),s=0;case 2:if(!(s<n.length)){e.next=20;break}if(this.state.progressBar.handles=!1,this.setState({renderCount:this.state.renderCount+1}),""!==n[s]){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,W(n[s]);case 9:if(""!==(r=e.sent.handles)){e.next=14;break}return e.next=13,Z(n[s]);case 13:r=e.sent.handles;case 14:void 0==r&&(r=""),r.split(";").map((function(e){return a.state.handlesSet.add(e)})),this.state.handlesSet.delete("");case 17:s++,e.next=2;break;case 20:this.state.progressBar.handles=!0,this.setState({renderCount:this.state.renderCount+1}),console.table({log:"Total handles",count:this.state.handlesSet.size});case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"turnOffProgressBar",value:function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,5e3)}));case 2:this.setState({progressBar:{show:!1},renderCount:this.state.renderCount+1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setRefreshIfNecessary",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.parseHandlesFromAllUrlsAndSet(this.props.url);case 2:return this.state.progressBar.handles=!0,e.next=5,this.BuildRanklist();case 5:this.turnOffProgressBar(),this.state.needRetry&&(this.parseRankInterval=setInterval((function(){t.actionFetchRanksAndFilterByUsers().then((function(){return t.actionFetchUserInfo()}))}),3e4));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.parseRankInterval),this._isMounted=!1}},{key:"componentDidMount",value:function(){this.setRefreshIfNecessary().then(),this._isMounted=!0}},{key:"shouldComponentUpdate",value:function(e,t){return t.renderCount!=this.state.renderCount||t.handles!=this.state.handles&&(this.actionFetchRanks(t.handles),!1)}},{key:"displayContestProgressBar",value:function(e,t){if(void 0!=e&&void 0!=t&&!(e>t||e<0)){var n=Math.round(e/t*100);return Object(v.jsx)("tr",{children:Object(v.jsx)("th",{colSpan:"100",children:Object(v.jsx)(b.a,{variant:"info",now:n,animated:!0})})})}}},{key:"renderProgressBar",value:function(){if(!this.state.progressBar.show)return Object(v.jsx)("div",{});var e=this.state.progressBar.handles,t=e?"parsed "+this.state.handlesSet.size+" handles":"parsing handles from urls: "+this.state.handlesSet.size,n=this.state.progressBar.rank,s=e?50:0,r=n?"ranklist contains "+this.state.data.rows.length+" matching rows":"parsing ranklist from codeforces...",a=this.state.progressBar.info,c=n?50:0,i=a?"parsed user info for "+this.state.userInfoCnt+" handles":"parsing user info from codeforces...";return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(b.a,{variant:"info",now:50,label:t,animated:!e},1),Object(v.jsx)(b.a,{variant:"success",now:s,label:r,animated:!n},1),Object(v.jsx)(b.a,{variant:"info",now:c,label:i,animated:!a},1)]})}},{key:"render",value:function(){var e=this,t=""==this.props.handles&&""==this.props.url;if(t&&(this.state.loading=!1),t||null==this.state.data)return 0==this.state.loading?Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"stopped",children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"Not Available or Invalid Args!"})]})}):Object(v.jsxs)("div",{children:[this.renderProgressBar(),Object(v.jsxs)("div",{className:"loading",children:[Object(v.jsx)(x.a,{style:{width:"100px",height:"100px"},animation:"border",role:"status",children:Object(v.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(v.jsx)("p",{children:"Constructing Ranklist..."})]})]});var n,s=this.state.data,r=1,a=function(e){return 0===e||s.rows[e-1].rank==s.rows[e].rank?r:r=e+1};return Object(v.jsxs)("div",{children:[this.renderProgressBar(),s.contest.phase===de&&Object(v.jsx)("img",{src:he,className:"App-logo",alt:"logo"}),s.contest.phase!==de&&Object(v.jsx)("img",{src:he,className:"App-logo-animate",alt:"logo"}),Object(v.jsx)("div",{className:"con-tittle",children:s.contest.name}),Object(v.jsx)("div",{className:"ranklist",children:Object(v.jsxs)(O.a,{variant:"dark",size:"sm",responsive:"sm",striped:!0,bordered:!0,children:[Object(v.jsxs)("thead",{children:[Object(v.jsx)("tr",{children:Object(v.jsx)("th",{className:"white-hyperlink",colSpan:"100",children:Object(v.jsx)("a",{target:"_blank",href:"https://codeforces.com/contest/"+this.props.contestID+"/standings",children:(n=s.contest.phase,"FINISHED"===n?"Final Standings":"PENDING_SYSTEM_TEST"===n?"Pending System Test":"SYSTEM_TEST"===n?"System Testing":"CODING"===n?"Contest is Running":void 0)})})}),this.displayContestProgressBar(s.contest.relativeTimeSeconds,s.contest.durationSeconds),Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{style:{"text-align":"left"},children:Object(v.jsx)("span",{className:"hash-rank",children:"#"})}),Object(v.jsx)("th",{style:{"text-align":"center"},children:"Rank"}),Object(v.jsx)("th",{style:{"text-align":"left"},children:"Handle"}),Object(v.jsx)("th",{children:" Score "}),Object(v.jsx)("th",{style:{"text-align":"left"},children:" "}),s.problems.map((function(t){var n=1;return void 0!==t.rating&&(n=t.rating),Object(v.jsx)("th",{className:"white-hyperlink",title:t.name+" : "+n,children:Object(v.jsx)("a",{target:"_blank",href:"https://codeforces.com/contest/"+e.props.contestID+"/problem/"+t.index,children:t.index})})}))]})]}),Object(v.jsx)("tbody",{children:s.rows.map((function(t,n){return Object(v.jsx)(k,{localRank:a(n),data:t,userInfo:e.state.userInfo},n)}))})]})})]})}}]),n}(r.a.Component),je=(n(67),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"layout-header",children:Object(v.jsx)(L,Object(i.a)({},this.props),this.props.contestID+this.props.url)}),Object(v.jsx)("div",{className:"App-Container",children:this.props.children}),Object(v.jsx)("div",{className:"footer"})]})}}]),n}(r.a.Component)),fe=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!A(e,this.props)}},{key:"render",value:function(){return console.log("rank-layout-rendering",this.props),Object(v.jsx)("div",{children:Object(v.jsx)(je,Object(i.a)(Object(i.a)(Object(i.a)({},this.props),F(this.props)),{},{children:Object(v.jsx)(pe,Object(i.a)(Object(i.a)({},this.props),F(this.props)),"rank-list"+D(this.props))}),"rank-list-layout")})}}]),n}(r.a.Component),be=n(22),xe=(n(68),function(e){return"/contest.list?gym="+e}),Oe=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).selectRef=[],s.refID={},s.state={data:null,loading:!0,needRetry:!0,failed:!1,searchStr:"",renderCount:0},s.onFilter=s.onFilter.bind(Object(be.a)(s)),s.handleCheckbox=s.handleCheckbox.bind(Object(be.a)(s)),s}return Object(l.a)(n,[{key:"actionFetchContests",value:function(){var e=Object(f.a)(j.a.mark((function e(t){var n,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,s="https://codeforces.com/api"+xe(t),console.log("Fetching Contests",s),e.next=5,fetch(s).catch((function(e){console.log(e),n=!0}));case 5:if(r=e.sent,!n){e.next=8;break}return e.abrupt("return");case 8:if(200!==r.status){e.next=14;break}return e.next=11,r.json();case 11:this.state.data=e.sent.result,e.next=14;break;case 14:this.state.loading=!1,this.forceUpdate();case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleCheckbox",value:function(e){var t,n,s,r,a,c=e.target.value;e.target.checked?(this.selectRef[this.refID[Number(this.props.contestID)]].current.children[0].children[0].children[0].checked=!1,this.props.history.push((t=c,n=this.props.url,s=this.props.handles,r=this.props.parsedHandles,a=this.props.unofficial,B("/selector/contests",t,n,s,r,a)))):e.target.checked=!0}},{key:"onFilter",value:function(e){var t=this;void 0==this.state.searchStr&&(this.state.searchStr=""),this.state.data.map((function(e){var n=t.refID[e.id];if(void 0!==n){var s=t.selectRef[n].current;e.name.toLowerCase().includes(t.state.searchStr.toLowerCase())?s.hidden=!1:s.hidden=!0}}))}},{key:"renderRow",value:function(e){return null==e||void 0==e?Object(v.jsx)("tr",{children:Object(v.jsx)("td",{children:"called with null"})}):Object(v.jsxs)("tr",{ref:this.selectRef[this.refID[e.id]],children:[Object(v.jsxs)("td",{textAlign:"left",children:[" ",Object(v.jsxs)("div",{className:"div-checkbox-selector checkbox-contest",children:[" ",Object(v.jsx)("input",{type:"checkbox",onChange:this.handleCheckbox,defaultValue:e.id,defaultChecked:e.id==this.props.contestID})," "]})]}),Object(v.jsx)("td",{textAlign:"left",children:e.name}),Object(v.jsx)("td",{textAlign:"left",children:e.id}),Object(v.jsx)("td",{textAlign:"center",children:Object(v.jsx)("a",{href:"https://codeforces.com/contest/"+e.id,target:"_blank",children:"link"})})]})}},{key:"renderContests",value:function(){var e=this,t=this.state.data;return Object(v.jsx)("div",{className:"contests content-div",children:Object(v.jsxs)(O.a,{variant:"dark",size:"sm",responsive:"sm",striped:"true",children:[Object(v.jsxs)("thead",{children:[Object(v.jsx)("tr",{children:Object(v.jsx)("th",{colSpan:"20",children:Object(v.jsx)("div",{className:"filter-container flex-input-div",children:Object(v.jsx)("div",{children:Object(v.jsx)(w.a,{size:"sm",placeholder:"Filter by Tittle",defaultValue:this.state.searchStr,onChange:function(t){e.state.searchStr=t.target.value,e.onFilter(t)}})})})})}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{}),Object(v.jsx)("th",{children:"Contest Tittle"}),Object(v.jsx)("th",{children:"ID"}),Object(v.jsx)("th",{children:"Codeforces"})]})]}),Object(v.jsx)("tbody",{children:t.map((function(t,n){if("BEFORE"!==t.phase)return t.id in e.refID||(e.selectRef.push(r.a.createRef()),e.refID[t.id]=e.selectRef.length-1),e.renderRow(t)}))})]},"contests-table")},"contests-div")}},{key:"render",value:function(){return null===this.state.data?!1===this.state.loading?Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"stopped",children:Object(v.jsx)("p",{children:"Not Available! "})})}):Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"loading",children:[Object(v.jsx)(x.a,{style:{width:"100px",height:"100px"},animation:"border",role:"status",children:Object(v.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(v.jsx)("p",{children:"Parsing Contests..."})]})}):Object(v.jsx)("div",{className:"content-list-div",children:this.renderContests()},"content-list-div")}},{key:"fetchContests",value:function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.loading=!0,e.abrupt("return",this.actionFetchContests(!1).then((function(e){console.log("contests-data",e)})).catch((function(e){return alert(e)})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setRefreshIfNecessary",value:function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchContests();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.setRefreshIfNecessary().then()}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!(!t||this.state.renderCount==t.renderCount)}}]),n}(r.a.Component),ve=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!A(e,this.props)}},{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(je,Object(i.a)(Object(i.a)(Object(i.a)({},this.props),F(this.props)),{},{children:Object(v.jsx)(Oe,Object(i.a)(Object(i.a)({},this.props),F(this.props)),"con-list")}),"con-list-layout")})}}]),n}(r.a.Component),me=(n(69),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).selectRef=[],s.refID={},s.handleCheckbox=s.handleCheckbox.bind(Object(be.a)(s)),s.onFilter=s.onFilter.bind(Object(be.a)(s)),s.state={data:null,loading:!0,urlSet:new Set(e.url.split(";")),failed:!1,searchStr:"",renderCount:0},s}return Object(l.a)(n,[{key:"handleCheckbox",value:function(e){var t=M(e.target.defaultValue);e.target.checked?this.state.urlSet.add(t):this.state.urlSet.delete(t),this.state.urlSet.delete("");var n,s,r,a,c,i=Object(d.a)(this.state.urlSet).join(";");console.log("marked",t,e.target.checked,"url",i),this.props.history.push((n=this.props.contestID,s=i,r=this.props.handles,a=this.props.parsedHandles,c=this.props.unofficial,B("/selector/orgs",n,s,r,a,c)))}},{key:"onFilter",value:function(e){var t=this;void 0==this.state.searchStr&&(this.state.searchStr=""),this.state.data.map((function(e){var n=t.refID[e.id];if(void 0!==n){var s=t.selectRef[n].current;e.name.toLowerCase().includes(t.state.searchStr.toLowerCase())?s.hidden=!1:s.hidden=!0}}))}},{key:"renderOrgs",value:function(){var e=this,t=["soon to be filled"];return null!==this.state.data&&void 0!==this.state.data&&(t=this.state.data),Object(v.jsx)("div",{className:"orgs content-div",children:Object(v.jsxs)(O.a,{className:"org-table",variant:"dark",size:"sm",responsive:"sm",striped:"true",children:[Object(v.jsxs)("thead",{children:[Object(v.jsx)("tr",{children:Object(v.jsx)("th",{colSpan:"20",children:Object(v.jsx)("div",{className:"filter-container flex-input-div",children:Object(v.jsx)("div",{children:Object(v.jsx)(w.a,{size:"sm",placeholder:"Filter by Org Name",onChange:function(t){e.state.searchStr=t.target.value,e.onFilter(t)}})})})})}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{}),Object(v.jsx)("th",{}),Object(v.jsx)("th",{children:"Org Name"}),Object(v.jsx)("th",{children:"Handle Count"}),Object(v.jsx)("th",{children:"CF"})]})]}),Object(v.jsx)("tbody",{children:t.map((function(t){return t.id in e.refID||(e.selectRef.push(r.a.createRef()),e.refID[t.id]=e.selectRef.length-1),Object(v.jsxs)("tr",{ref:e.selectRef[e.refID[t.id]],children:[Object(v.jsx)("td",{children:Object(v.jsxs)("div",{className:"div-checkbox-selector checkbox-org",children:[" ",Object(v.jsx)("input",{type:"checkbox",onChange:e.handleCheckbox,value:t.id,defaultChecked:e.state.urlSet.has(M(t.id))})," "]})}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:t.name}),Object(v.jsx)("td",{children:t.hc}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:M(t.id),children:"link"})})]})}))})]},"orgs-table")},"orgs-div")}},{key:"render",value:function(){return null===this.state.data?!1===this.state.loading?Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"stopped",children:Object(v.jsx)("p",{children:"Not Available! "})})}):Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"loading",children:[Object(v.jsx)(x.a,{style:{width:"100px",height:"100px"},animation:"border",role:"status",children:Object(v.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(v.jsx)("p",{children:"Parsing Orgs..."})]})}):Object(v.jsx)("div",{className:"content-list-div",children:this.renderOrgs()},"orgs-list-div")}},{key:"parseOrgs",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({data:t,renderCount:this.state.renderCount+1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.parseOrgs()}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!!t&&t.renderCount!=this.state.renderCount}}]),n}(r.a.Component)),ke=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!A(e,this.props)}},{key:"render",value:function(){return console.log("con-layout-rendering",this.props),Object(v.jsx)("div",{children:Object(v.jsx)(je,Object(i.a)(Object(i.a)(Object(i.a)({},this.props),F(this.props)),{},{children:Object(v.jsx)(me,Object(i.a)(Object(i.a)({},this.props),F(this.props)),"con-list")}),"con-list-layout")})}}]),n}(r.a.Component),ge=n(9);function ye(e){return we.apply(this,arguments)}function we(){return(we=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(){return Se.apply(this,arguments)}function Se(){return(Se=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/assets/ls.txt",{headers:{"Content-Type":"text",Accept:"text"}}).then((function(e){return e.text()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ne=function(){function e(t){Object(o.a)(this,e),this.counter=t}return Object(l.a)(e,[{key:"exec",value:function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.counter>0)){e.next=6;break}return this.counter--,e.next=5,t();case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,ye(200);case 8:e.next=0;break;case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"done",value:function(){this.counter++}}]),e}(),Ie=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={completed:0,total:10},e.ls=new Set,e.rateLimit=new Ne(50),e}return Object(l.a)(n,[{key:"AutoDownload",value:function(e,t){if(!this.ls.has(e)){var n=window.URL.createObjectURL(new Blob([t])),s=document.createElement("a");s.href=n,s.setAttribute("download",e),document.body.appendChild(s),s.click(),s.parentNode.removeChild(s)}}},{key:"componentDidMount",value:function(){this.setup()}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"downloading assets"}),Object(v.jsx)(b.a,{variant:"info",label:Math.round(this.state.completed/this.state.total*100),now:Math.round(this.state.completed/this.state.total*100),animated:this.state.completed!=this.state.total})]})}},{key:"setup",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Set,e.next=3,Ce();case 3:return e.t1=e.sent.split(/\n/),this.ls=new e.t0(e.t1),console.log("Starting setup"),e.next=9,ee();case 9:return t=e.sent,this.setState({completed:1,total:100}),this.AutoDownload("orgs.json",JSON.stringify(t)),console.log("parsing all handles"),e.next=15,this.scrapeAllHandles(t);case 15:console.log("all files downloaded"),this.setState({completed:100,total:100});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"scrapeAllHandles",value:function(){var e=Object(f.a)(j.a.mark((function e(t){var n,s,r,a,c=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,[],this.setState({total:t.length}),s=Object(U.a)(t);try{for(a=function(){var e=r.value,s="id.org."+e.id+".json",a=function(){var t=Object(f.a)(j.a.mark((function t(){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(M(e.id),e.hc);case 2:n=t.sent,(r=q(n.handles).size)>=e.hc?c.AutoDownload(s,JSON.stringify(n)):console.table({log:"Couldn't parse org",orgID:e.id,orgName:e.name,handles:n.handles,parsedHandleCount:r,expectedHandleCount:e.hc});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();c.ls.has(s)?n++:c.rateLimit.exec((function(){return a().then((function(){c.rateLimit.done(),++n%10===0&&c.setState({completed:n,total:t.length})}))}))},s.s();!(r=s.n()).done;)a()}catch(i){s.e(i)}finally{s.f()}case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(s.Component);function Re(){return Object(v.jsx)(I.a,{children:Object(v.jsx)("div",{className:"Switch-Route-Block",children:Object(v.jsxs)(ge.d,{children:[Object(v.jsx)(ge.b,{path:"/selector/contests/:contestID",render:function(e){return Object(v.jsx)(ve,Object(i.a)({},e),"contest-list-layout")}},"route-contest-list"),Object(v.jsx)(ge.b,{path:"/selector/orgs/:contestID",render:function(e){return Object(v.jsx)(ke,Object(i.a)({},e),"orgs-list-layout")}},"route-orgs-list"),Object(v.jsx)(ge.b,{path:"/contest/:contestID",render:function(e){return Object(v.jsx)(fe,Object(i.a)({},e),"single-rank-instance")}},"route-rank-list"),Object(v.jsx)(ge.b,{path:"/setup",exact:!0,render:function(){return Object(v.jsx)(Ie,{})}},"setup-lah"),Object(v.jsx)(ge.a,{from:"/",to:"/contest/1541?url=https://codeforces.com/ratings/organization/3403"})]},"switch-route-sw")},"switch-route-block")},"hash-router")}var Fe=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)(Re,{},"app-conatiner")})})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(Fe,{})}),document.getElementById("root")),De()}},[[70,1,2]]]);
//# sourceMappingURL=main.a57d9fb5.chunk.js.map