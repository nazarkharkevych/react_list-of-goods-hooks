(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(8),r=n(6),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(){var t=Object(a.useState)(c.NONE),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),h=u[0],N=u[1],d=function(t){var e=Object(i.a)(t);return e.sort((function(t,e){switch(n){case c.ALPHABET:return t.localeCompare(e);case c.LENGTH:return t.length-e.length;case c.NONE:default:return 0}})),h&&e.reverse(),e}(j),O=n!==c.NONE||h;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==c.ALPHABET}),onClick:function(){return s(c.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":n!==c.LENGTH}),onClick:function(){return s(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!h}),onClick:function(){return N(!h)},children:"Reverse"}),O&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.NONE),N(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:d.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9cd9dcf3.chunk.js.map