(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={buttonsList:"FeedBackOptions_buttonsList__3SDw5",buttonItems:"FeedBackOptions_buttonItems__Bk7PN",buttonGood:"FeedBackOptions_buttonGood__4QF7S",buttonNeutral:"FeedBackOptions_buttonNeutral__10BXs",buttonBad:"FeedBackOptions_buttonBad__1tHt9"}},,function(e,t,n){},,,,,function(e,t,n){e.exports={list:"Statistics_list__2DVeU"}},function(e,t,n){},function(e,t,n){e.exports={section:"App_section__1OL6S"}},,,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(6),o=n.n(s),i=(n(19),n(7)),r=n(8),l=n(9),u=n(14),d=n(13),b=n(10),j=n.n(b),h=n(1),O=n.n(h),p=n(0);function x(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positiveFeedbackPercentage;return Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{className:j.a.list,children:[Object(p.jsx)("li",{children:Object(p.jsxs)("p",{children:["Good: ",t]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("p",{children:["Neutral: ",n]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("p",{children:["Bad: ",a]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("p",{children:["Total: ",c]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("p",{children:["Positive Feedback: ",s,"%"]})})]})})}x.prototype={good:O.a.number.isRequired,neutral:O.a.number.isRequired,bad:O.a.number.isRequired,total:O.a.number.isRequired,positiveFeedbackPercentage:O.a.number.isRequired};var m=n(5),k=n.n(m);function g(e){var t=e.title,n=void 0===t?"Title":t,a=e.children;return Object(p.jsxs)("div",{className:k.a.section,children:[Object(p.jsx)("h1",{className:k.a.title,children:n}),a]})}g.defaultProps={title:"Statistics"},g.prototype={title:O.a.string,children:O.a.object.isRequired};var v=n(3),f=n.n(v);function F(e){var t=e.onLeaveFeedback;return Object(p.jsx)("div",{className:f.a.buttonBox,children:Object(p.jsxs)("ul",{className:f.a.buttonsList,children:[Object(p.jsx)("li",{className:f.a.buttonItems,children:Object(p.jsx)("button",{className:f.a.buttonGood,type:"button",name:"good",onClick:t,children:"Good"})}),Object(p.jsx)("li",{className:f.a.buttonItems,children:Object(p.jsx)("button",{className:f.a.buttonNeutral,type:"button",name:"neutral",onClick:t,children:"Neutral"})}),Object(p.jsx)("li",{className:f.a.buttonItems,children:Object(p.jsx)("button",{className:f.a.buttonBad,type:"button",name:"bad",onClick:t,children:"Bad"})})]})})}F.prototype={onLeaveFeedback:O.a.func.isRequired};var _=n(11),N=n.n(_);function B(e){var t=e.message;return Object(p.jsx)("h2",{className:N.a.title,children:t})}B.prototype={message:O.a.string.isRequired};var P=n(12),S=n.n(P),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.toSetState=function(t){e.setState((function(e){return Object(i.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.bad+e.state.neutral},e.countPositiveFeedbackPercentage=function(){return Math.floor(100*e.state.good/e.countTotalFeedback())},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback();return Object(p.jsxs)("section",{className:S.a.section,children:[Object(p.jsx)(g,{title:"Please leave feeaback",children:Object(p.jsx)(F,{onLeaveFeedback:this.toSetState})}),0===e?Object(p.jsx)(B,{message:"No feedback given"}):Object(p.jsx)(g,{children:Object(p.jsx)(x,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positiveFeedbackPercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),L()}],[[23,1,2]]]);
//# sourceMappingURL=main.4e45c35f.chunk.js.map