"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93089],{37329:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(67294),r=n(52263),l=n(4118),i=n(26244),c=n(36299),u=n(10833),o=n(35281),m=n(14739),s=n(86010);function d(e){var t=e.metadata,n=(0,r.Z)().siteConfig.title,l=t.blogDescription,i=t.blogTitle,c="/"===t.permalink?n:i;return a.createElement(a.Fragment,null,a.createElement(u.d,{title:c,description:l}),a.createElement(m.Z,{tag:"blog_posts_list"}))}function f(e){var t=e.metadata,n=e.items,r=e.sidebar;return a.createElement(l.Z,{sidebar:r},n.map((function(e){var t=e.content;return a.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},a.createElement(t,null))})),a.createElement(c.Z,{metadata:t}))}function E(e){return a.createElement(u.FG,{className:(0,s.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},a.createElement(d,e),a.createElement(f,e))}},11182:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294);function r(e){var t=e.names;if(!t)return null;var n=t.split(",");return a.createElement("div",{className:"tag-wrapper"},n.map((function(e,t){return a.createElement("span",{key:t,className:"topic-tag"},e)})))}function l(e){var t=e.title,n=e.collectionLink,l=e.isSorted,i=void 0===l||l,c=e.data,u=c.some((function(e){return e.tags})),o={Easy:0,Medium:1,Hard:2},m=(i?c.sort((function(e,t){return o[e.difficulty]-o[t.difficulty]})):c).map((function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,a.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),a.createElement("td",null,e.difficulty),a.createElement("td",{style:{textAlign:"center"}},e.solutionLink&&a.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions"),!e.solutionLink&&a.createElement("span",null,"N/A")),u&&a.createElement("td",null,a.createElement(r,{names:e.tags})))}));return a.createElement(a.Fragment,null,a.createElement("h3",null,t),n&&a.createElement("h4",null,"Start Practicing: ",a.createElement("a",{href:n,target:"_blank"},n)),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Problem Name"),a.createElement("th",null,"Difficulty"),a.createElement("th",null,"Solution Link"),u&&a.createElement("th",null,"Topic"))),a.createElement("tbody",null,m)))}},78735:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.names.split(",");return a.createElement("div",{className:"tutorial-author-wrapper"},"This tutorial is written by",t.map((function(e,t){return a.createElement("span",{key:t,className:"author-tag"},e)})))}},50897:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(82390),l=n(9877),i=n(72360);var c=n(78735),u=n(11182),o=Object.assign({},r.Z,{SolutionAuthor:function(e){var t=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",t))},Tabs:l.Z,TabItem:i.Z,TutorialAuthors:c.Z,Table:u.Z})}}]);