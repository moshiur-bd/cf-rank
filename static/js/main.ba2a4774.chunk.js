(this["webpackJsonpcf-rank"]=this["webpackJsonpcf-rank"]||[]).push([[0],{53:function(t,e,n){},54:function(t,e,n){},57:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n.n(s),a=n(25),c=n.n(a),i=(n(53),n(54),n(8)),o=n(12),l=n(13),u=n(15),h=n(14),d=n(10),j=n.n(d),p=n(18),b=n(70),f=n(71),O=n(1);function x(t){var e=t.data,n=t.rowid;return null==e?Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:"called with null"})}):Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{style:{"text-align":"left"},children:n}),Object(O.jsx)("td",{style:{"text-align":"left"},children:e.rank}),Object(O.jsx)("td",{style:{"text-align":"left"},children:e.party.members.map((function(t){return t.handle+" "}))}),Object(O.jsx)("td",{children:e.points}),Object(O.jsx)("td",{}),e.problemResults.map((function(t){return Object(O.jsx)("td",{children:t.points})}))]})}var m=n(26),v=n(74),g=n(43),y=n(42),k=n(69),I=n(72),D=n(73),C=n(22);n(57);function N(t){var e=t.url,n=t.contestID,r=Object(s.useState)(e),a=Object(m.a)(r,2),c=a[0],i=a[1],o=Object(s.useState)(n),l=Object(m.a)(o,2),u=l[0],h=l[1];console.log("Nav-props",t);var d=Object(O.jsx)("div",{className:"input-url",children:Object(O.jsx)(v.a,{children:Object(O.jsxs)(v.a.Row,{className:"align-items-center",children:[Object(O.jsxs)(g.a,{xs:"auto",children:[Object(O.jsx)(v.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"URL"}),Object(O.jsx)(y.a,{size:"sm",className:"mb-0 org-field",id:"inlineFormInput",placeholder:"city/organization cf url",defaultValue:e,onChange:function(t){return i(t.target.value)}})]}),Object(O.jsxs)(g.a,{xs:"auto",children:[Object(O.jsx)(v.a.Label,{htmlFor:"inlineFormInput2",srOnly:!0,children:"ContestID"}),Object(O.jsx)(y.a,{size:"sm",className:"mb-0 contestID-field",id:"inlineFormInput2",placeholder:"ContestID",value:u,onChange:function(t){h(t.target.value)}})]}),Object(O.jsx)(g.a,{xs:"auto",children:Object(O.jsx)(C.b,{to:"/contest/"+u+"?url="+c,children:Object(O.jsx)(k.a,{type:"submit",className:"mb-0 btn-light",size:"sm",children:"Load"})})})]})},e+n)});return Object(O.jsx)("div",{children:Object(O.jsxs)(I.a,{bg:"dark",variant:"dark",className:"navbar-expand-sm",children:[Object(O.jsxs)(D.a,{className:"mr-auto",children:[Object(O.jsx)(D.a.Link,{href:"#selector/contests/"+u+"?url="+c,active:t.location.pathname.startsWith("/selector/contests"),children:"Contests"}),Object(O.jsx)(D.a.Link,{disabled:!0,active:t.location.pathname.startsWith("/contest"),children:"Ranklist"})]}),d]})})}var w=n(47),R=n(48),S="https://be-beam.swiftshopbd.com/";function F(t){return L.apply(this,arguments)}function L(){return(L=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(S+e,{"X-Requested-With":"cf"}).then((function(t){return t.text()})).then((function(t){var e,n=(new DOMParser).parseFromString(t,"text/html").querySelector("#pageContent > div.datatable.ratingsDatatable").innerHTML,s=Object(R.a)(n.matchAll('/profile/(.+?)"')),r="",a=Object(w.a)(s);try{for(a.s();!(e=a.n()).done;){var c=e.value;r=r.concat(c[1]+";")}}catch(i){a.e(i)}finally{a.f()}return r})).catch((function(t){console.log("Failed to fetch page: ",t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(41),n(64);var A=n.p+"static/media/logo.6ce24c58.svg",U=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={data:null,contestID:1541,filterUrl:"",loading:!0,needRetry:!0,failed:!1},s}return Object(l.a)(n,[{key:"actionFetchRanks",value:function(){var t=Object(p.a)(j.a.mark((function t(e){var n,s,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,s="https://codeforces.com/api"+("/contest.standings?contestId="+this.state.contestID+"&handles=")+e,console.log("Fetching",s),t.next=5,fetch(s).catch((function(t){console.log(t),n=!0}));case 5:if(r=t.sent,!n){t.next=8;break}return t.abrupt("return");case 8:if(200!==r.status){t.next=15;break}return t.next=11,r.json();case 11:this.state.data=t.sent.result,"FINISHED"==this.state.data.contest.phase?this.state.needRetry=!1:this.state.needRetry=!0,t.next=16;break;case 15:this.state.needRetry=!1;case 16:this.state.loading=!1,this.forceUpdate();case 18:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){try{var t=this.props,e=t.match.params.contestID,n=t.location.search.match("url=(.+)")[1];null!=e&&null!=n&&(this.state.contestID=e,this.state.filterUrl=n),console.log("state set",this.state.contestID,this.state.filterUrl)}catch(r){console.log("couldn't read params",r)}if(null==this.state.data)return 0==this.state.loading?Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"stopped",children:Object(O.jsx)("p",{children:"Not Available! "})})}):Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"loading",children:[Object(O.jsx)(b.a,{style:{width:"100px",height:"100px"},animation:"border",role:"status",children:Object(O.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(O.jsx)("p",{children:"Constructing Ranklist..."})]})});var s=this.state.data;return Object(O.jsxs)("div",{children:["FINISHED"==s.contest.phase&&Object(O.jsx)("img",{src:A,className:"App-logo",alt:"logo"}),"FINISHED"!=s.contest.phase&&Object(O.jsx)("img",{src:A,className:"App-logo-animate",alt:"logo"}),Object(O.jsx)("div",{className:"con-tittle",children:s.contest.name}),Object(O.jsx)("div",{className:"ranklist",children:Object(O.jsxs)(f.a,{variant:"dark",size:"sm",responsive:"sm",striped:"true",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{style:{"text-align":"left"},children:"#"}),Object(O.jsx)("th",{style:{"text-align":"left"},children:"Rank"}),Object(O.jsx)("th",{style:{"text-align":"left"},children:"Handle"}),Object(O.jsx)("th",{children:"Points"}),Object(O.jsx)("th",{style:{"text-align":"left"},children:" "}),s.problems.map((function(t){return Object(O.jsx)("th",{children:t.index})}))]})}),Object(O.jsx)("tbody",{children:s.rows.map((function(t,e){return Object(O.jsx)(x,{rowid:e+1,data:t},e)}))})]})})]})}},{key:"repeatedWork",value:function(){var t=Object(p.a)(j.a.mark((function t(){var e=this;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.state.loading=!0,t.abrupt("return",F(this.state.filterUrl).then((function(t){return console.log("users",t),e.actionFetchRanks(t)})).catch((function(t){return alert(t)})));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setRefreshIfNecessary",value:function(){var t=Object(p.a)(j.a.mark((function t(){var e=this;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.repeatedWork();case 2:this.state.needRetry&&(this.interval=setInterval((function(){e.repeatedWork()}),3e4));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.setRefreshIfNecessary().then()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),n}(r.a.Component),E=(n(65),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"layout-header",children:Object(O.jsx)(N,Object(i.a)({},this.props),this.props.contestID+this.props.url)}),Object(O.jsx)("div",{className:"App-Container",children:this.props.children}),Object(O.jsx)("div",{className:"footer"})]})}}]),n}(r.a.Component)),W=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={url:"https://codeforces.com/ratings/organization/3403",contestID:1541},s}return Object(l.a)(n,[{key:"updateStateVars",value:function(t){try{this.setState({url:t.location.search.match("url=(.+)")[1],contestID:t.match.params.contestID})}catch(e){console.log("error setting rank-list-layout state",e)}console.log("con-layout-state",this.state)}},{key:"stateChangedLah",value:function(t){try{return this.state.url!==t.location.search.match("url=(.+)")[1]||this.state.contestID!==t.match.params.contestID}catch(e){return!0}}},{key:"componentDidMount",value:function(){this.updateStateVars(this.props)}},{key:"shouldComponentUpdate",value:function(t,e){return!!this.stateChangedLah(t)&&(this.updateStateVars(t),!0)}},{key:"render",value:function(){return console.log("rank-layout-rendering",this.props),Object(O.jsx)("div",{children:Object(O.jsx)(E,Object(i.a)(Object(i.a)({},this.props),{},{url:this.state.url,contestID:this.state.contestID,children:Object(O.jsx)(U,Object(i.a)(Object(i.a)({},this.props),{},{url:this.state.url,contestID:this.state.contestID}),"rank-list-"+this.state.url+this.state.contestID)}),"rank-list-layout"+this.state.url+this.state.contestID)})}}]),n}(r.a.Component),T=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"render",value:function(){if(console.log("rendering-row",this.props),null==this.props.data)return Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:"called with null"})});var t=this.props.data;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(C.b,{to:"/selector/contests/"+t.id+"?url="+this.props.url,children:Object(O.jsx)("p",{ref:this.props.innerRef,children:this.props.selected?"SELECTED":"select"})})}),Object(O.jsx)("td",{textalign:"left",children:t.name}),Object(O.jsx)("td",{textalign:"left",children:t.id})]})}},{key:"shouldComponentUpdate",value:function(t,e){return null===t||null===this.props||t.selected!==this.props.selected}}]),n}(r.a.Component),z=r.a.forwardRef((function(t,e){return Object(O.jsx)(T,Object(i.a)({innerRef:e},t))})),M=(n(66),function(t){return"/contest.list?gym="+t});function H(t){var e=t.searchStr,n=t.children;return r.a.Children.toArray(n).filter((function(t){return!e||""==e||t.props.data.name.toLowerCase().includes(e.toLowerCase())}))}var P=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).selectRef=[],s.refID={},s.state={data:null,loading:!0,needRetry:!0,failed:!1,searchStr:""},s}return Object(l.a)(n,[{key:"actionFetchContests",value:function(){var t=Object(p.a)(j.a.mark((function t(e){var n,s,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,s="https://codeforces.com/api"+M(e),console.log("Fetching Contests",s),t.next=5,fetch(s).catch((function(t){console.log(t),n=!0}));case 5:if(r=t.sent,!n){t.next=8;break}return t.abrupt("return");case 8:if(200!==r.status){t.next=14;break}return t.next=11,r.json();case 11:this.state.data=t.sent.result,t.next=14;break;case 14:this.state.loading=!1,this.forceUpdate();case 16:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;if(null===this.state.data)return!1===this.state.loading?Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"stopped",children:Object(O.jsx)("p",{children:"Not Available! "})})}):Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"loading",children:[Object(O.jsx)(b.a,{style:{width:"100px",height:"100px"},animation:"border",role:"status",children:Object(O.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(O.jsx)("p",{children:"Parsing Contests..."})]})});var e=this.state.data;return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"contests",children:Object(O.jsxs)(f.a,{variant:"dark",size:"sm",responsive:"sm",striped:"true",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:Object(O.jsx)(y.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",defaultValue:this.state.searchStr,onMouseMove:function(e){if(t.state.searchStr!=e.target.value)return t.setState({searchStr:e.target.value})}})}),Object(O.jsx)("th",{children:"Contest Tittle"}),Object(O.jsx)("th",{children:"Contest ID"})]})}),Object(O.jsx)("tbody",{children:Object(O.jsx)(H,{searchStr:this.state.searchStr,children:e.map((function(e,n){return e.id in t.refID||(t.selectRef.push(r.a.createRef()),t.refID[e.id]=t.selectRef.length-1),Object(O.jsx)(z,{ref:t.selectRef[t.refID[e.id]],data:e,url:t.props.url,selected:e.id==t.props.contestID},n)}))},"search-str"+this.state.searchStr)})]},"contests-table")},"contests-div")},"contests-list-div")}},{key:"repeatedWork",value:function(){var t=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.state.loading=!0,t.abrupt("return",this.actionFetchContests(!1).then((function(t){console.log("contests-data",t)})).catch((function(t){return alert(t)})));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setRefreshIfNecessary",value:function(){var t=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.repeatedWork();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.setRefreshIfNecessary().then()}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(t,e){if(null!=t&&(t.url!=this.props.url||t.contestID!=this.props.contestID)){try{this.selectRef[this.refID[Number(t.contestID)]].current.innerText="SELECTED",this.selectRef[this.refID[Number(this.props.contestID)]].current.innerText="select"}catch(n){}return!1}return!(!e||e.searchStr==this.state.searchStr)}}]),n}(r.a.Component),V=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"urlAndContestID",value:function(t){return{url:t.location.search.match("url=(.+)")[1],contestID:t.match.params.contestID}}},{key:"shouldComponentUpdate",value:function(t,e){var n=this.urlAndContestID(t),s=this.urlAndContestID(this.props);return null===n||null===s||n.url!==s.url||n.contestID!==s.contestID}},{key:"render",value:function(){return console.log("con-layout-rendering",this.props),Object(O.jsx)("div",{children:Object(O.jsx)(E,Object(i.a)(Object(i.a)(Object(i.a)({},this.props),this.urlAndContestID(this.props)),{},{children:Object(O.jsx)(P,Object(i.a)(Object(i.a)({},this.props),this.urlAndContestID(this.props)),"con-list")}),"con-list-layout")})}}]),n}(r.a.Component),B=n(6);function q(){return Object(O.jsx)(C.a,{children:Object(O.jsx)("div",{className:"Switch-Route-Block",children:Object(O.jsxs)(B.d,{children:[Object(O.jsx)(B.b,{path:"/selector/contests/:contestID",render:function(t){return Object(O.jsx)(V,Object(i.a)({},t),"contest-list-layout")}},"route-contest-list"),Object(O.jsx)(B.b,{path:"/contest/:contestID",render:function(t){return Object(O.jsx)(W,Object(i.a)({},t),"single-rank-instance")}},"route-rank-list"),Object(O.jsx)(B.a,{from:"/",to:"/contest/1541?url=https://codeforces.com/ratings/organization/3403",component:V})]},"switch-route-sw")},"switch-route-block")},"hash-router")}var J=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)(q,{},"app-conatiner")})})},X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),s(t),r(t),a(t),c(t)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root")),X()}},[[67,1,2]]]);
//# sourceMappingURL=main.ba2a4774.chunk.js.map