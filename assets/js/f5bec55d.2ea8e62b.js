"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2651],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,g=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},suggestedProblems:function(){return g},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(92194),l=n(11182),u=["components"],c={title:"Minimum Spanning Tree",description:"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","minimum spanning tree","mst","algorithm"]},s=void 0,m={unversionedId:"graph-theory/minimum-spanning-tree",id:"graph-theory/minimum-spanning-tree",title:"Minimum Spanning Tree",description:"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.",source:"@site/tutorials/graph-theory/minimum-spanning-tree.md",sourceDirName:"graph-theory",slug:"/graph-theory/minimum-spanning-tree",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/minimum-spanning-tree",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/graph-theory/minimum-spanning-tree.md",tags:[],version:"current",frontMatter:{title:"Minimum Spanning Tree",description:"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","minimum spanning tree","mst","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Disjoint Set Union (DSU)",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union"},next:{title:"Math",permalink:"/leetcode-the-hard-way/tutorials/category/math"}},d={},p=[{value:"Kruskal&#39;s Algorithm",id:"kruskals-algorithm",level:3},{value:"C++ Implementation",id:"c-implementation",level:4}],g=[{problemName:"1135 - Connecting Cities With Minimum Cost",difficulty:"Medium",LeetCodeLink:"https://leetcode.com/problems/connecting-cities-with-minimum-cost/",SolutionLink:"../../solutions/1100-1199/connecting-cities-with-minimum-cost-medium"},{problemName:"1168 - Optimize Water Distribution in a Village",difficulty:"Hard",LeetCodeLink:"https://leetcode.com/problems/optimize-water-distribution-in-a-village/",SolutionLink:"../../solutions/1100-1199/optimize-water-distribution-in-a-village-hard"}],h={toc:p,suggestedProblems:g};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,o.kt)("p",null,"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles."),(0,o.kt)("h3",{id:"kruskals-algorithm"},"Kruskal's Algorithm"),(0,o.kt)("p",null,"We sort the edges based on the weights in ascending order. Then we iterate them one by one, and greedily pick edges which does not result in cycle with the previous edges."),(0,o.kt)("h4",{id:"c-implementation"},"C++ Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n\nint mst(vector<vector<int>>& g) {\n    int n = (int) g.size();\n    vector<array<int, 3>> edges;\n    // g[i] = {from, to, weight}\n    for (auto x : g) edges.push_back({x[2], x[0], x[1]}); \n    sort(edges.begin(), edges.end());\n    dsu d(n + 1);\n    int minimum_weight = 0;\n    for (auto x : edges) {\n        if (d.unite(x[1], x[2])) {\n            minimum_weight += x[0];\n        }\n    }\n    return minimum_weight;\n}\n")),(0,o.kt)(l.Z,{title:"Suggested Problems",data:g,mdxType:"Table"}))}f.isMDXComponent=!0},92194:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);function i(e){var t=e.names.split(",");return r.createElement("div",{className:"author-wrapper"},t.length>1?"Authors":"Author",":",t.map((function(e,t){return r.createElement("span",{key:t,className:"author-tag"},e)})))}},11182:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function i(e){var t=e.names;if(!t)return null;var n=t.split(",");return r.createElement("div",{className:"tag-wrapper"},n.map((function(e,t){return r.createElement("span",{key:t,className:"topic-tag"},e)})))}function o(e){var t=e.title,n=e.collectionLink,o=e.isSorted,a=void 0===o||o,l=e.data,u=l.some((function(e){return e.tags})),c={Easy:0,Medium:1,Hard:2},s=(a?l.sort((function(e,t){return c[e.difficulty]-c[t.difficulty]})):l).map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),r.createElement("td",null,e.difficulty),r.createElement("td",null,e.solutionLink&&r.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions")),u&&r.createElement("td",null,r.createElement(i,{names:e.tags})))}));return r.createElement(r.Fragment,null,r.createElement("h3",null,t),n&&r.createElement("h4",null,"Start Practicing: ",r.createElement("a",{href:n,target:"_blank"},n)),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Problem Name"),r.createElement("th",null,"Difficulty"),r.createElement("th",null,"Solution Link"),u&&r.createElement("th",null,"Topic"))),r.createElement("tbody",null,s)))}}}]);