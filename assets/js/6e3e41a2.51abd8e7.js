"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2952],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=l(t),k=s,h=N["".concat(i,".").concat(k)]||N[k]||c[k]||r;return t?n.createElement(h,m(m({ref:e},o),{},{components:t})):n.createElement(h,m({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:s,m[1]=p;for(var l=2;l<r;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},51112:function(a,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return N}});var n,s=t(87462),r=t(63366),m=(t(67294),t(3905)),p=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/count-artifacts-that-can-be-extracted/"},l="2201 - Count Artifacts That Can Be Extracted (Medium)",o={unversionedId:"2100-2199/count-artifacts-that-can-be-extracted-medium",id:"2100-2199/count-artifacts-that-can-be-extracted-medium",title:"2201 - Count Artifacts That Can Be Extracted (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/count-artifacts-that-can-be-extracted/",source:"@site/solutions/2100-2199/2201-count-artifacts-that-can-be-extracted-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/count-artifacts-that-can-be-extracted-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/count-artifacts-that-can-be-extracted-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2201-count-artifacts-that-can-be-extracted-medium.md",tags:[],version:"current",sidebarPosition:2201,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-artifacts-that-can-be-extracted/"},sidebar:"tutorialSidebar",previous:{title:"2200 - Find All K-Distant Indices in an Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-all-k-distant-indices-in-an-array-easy"},next:{title:"2202 - Maximize the Topmost Element After K Moves (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/maximize-the-topmost-element-after-k-moves-medium"}},c={},N=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Loops",id:"approach-1-loops",level:2}],k=(n="SolutionAuthor",function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",a)}),h={toc:N};function u(a){var e=a.components,t=(0,r.Z)(a,p);return(0,m.kt)("wrapper",(0,s.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"2201---count-artifacts-that-can-be-extracted-medium"},"2201 - Count Artifacts That Can Be Extracted (Medium)"),(0,m.kt)("h2",{id:"problem-link"},"Problem Link"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/count-artifacts-that-can-be-extracted/"},"https://leetcode.com/problems/count-artifacts-that-can-be-extracted/")),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"There is an ",(0,m.kt)("inlineCode",{parentName:"p"},"n x n")," ",(0,m.kt)("strong",{parentName:"p"},"0-indexed")," grid with some artifacts buried in it. You are given the integer ",(0,m.kt)("inlineCode",{parentName:"p"},"n")," and a ",(0,m.kt)("strong",{parentName:"p"},"0-indexed")," 2D integer array ",(0,m.kt)("inlineCode",{parentName:"p"},"artifacts")," describing the positions of the rectangular artifacts where ",(0,m.kt)("inlineCode",{parentName:"p"},"artifacts[i] = [r1i, c1i, r2i, c2i]")," denotes that the ",(0,m.kt)("inlineCode",{parentName:"p"},"ith")," artifact is buried in the subgrid where:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"(r1i, c1i)")," is the coordinate of the ",(0,m.kt)("strong",{parentName:"li"},"top-left")," cell of the ",(0,m.kt)("inlineCode",{parentName:"li"},"ith")," artifact and"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"(r2i, c2i)")," is the coordinate of the ",(0,m.kt)("strong",{parentName:"li"},"bottom-right")," cell of the ",(0,m.kt)("inlineCode",{parentName:"li"},"ith")," artifact.")),(0,m.kt)("p",null,"You will excavate some cells of the grid and remove all the mud from them. If the cell has a part of an artifact buried underneath, it will be uncovered. If all the parts of an artifact are uncovered, you can extract it."),(0,m.kt)("p",null,"Given a ",(0,m.kt)("strong",{parentName:"p"},"0-indexed")," 2D integer array ",(0,m.kt)("inlineCode",{parentName:"p"},"dig")," where ",(0,m.kt)("inlineCode",{parentName:"p"},"dig[i] = [ri, ci]")," indicates that you will excavate the cell ",(0,m.kt)("inlineCode",{parentName:"p"},"(ri, ci)"),", return ",(0,m.kt)("em",{parentName:"p"},"the number of artifacts that you can extract"),"."),(0,m.kt)("p",null,"The test cases are generated such that:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"No two artifacts overlap."),(0,m.kt)("li",{parentName:"ul"},"Each artifact only covers at most ",(0,m.kt)("inlineCode",{parentName:"li"},"4")," cells."),(0,m.kt)("li",{parentName:"ul"},"The entries of ",(0,m.kt)("inlineCode",{parentName:"li"},"dig")," are unique.")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/09/16/untitled-diagram.jpg",alt:null})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: n = 2, artifacts = [[0,0,0,0],[0,1,1,1]], dig = [[0,0],[0,1]]\nOutput: 1\nExplanation: \nThe different colors represent different artifacts. Excavated cells are labeled with a 'D' in the grid.\nThere is 1 artifact that can be extracted, namely the red artifact.\nThe blue artifact has one part in cell (1,1) which remains uncovered, so we cannot extract it.\nThus, we return 1.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/09/16/untitled-diagram-1.jpg",alt:null})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: n = 2, artifacts = [[0,0,0,0],[0,1,1,1]], dig = [[0,0],[0,1],[1,1]]\nOutput: 2\nExplanation: Both the red and blue artifacts have all parts uncovered (labeled with a 'D') and can be extracted, so we return 2. \n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= artifacts.length, dig.length <= min(n2, 10^5)")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"artifacts[i].length == 4")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"dig[i].length == 2")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"0 <= r1i, c1i, r2i, c2i, ri, ci <= n - 1")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"r1i <= r2i")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"c1i <= c2i")),(0,m.kt)("li",{parentName:"ul"},"No two artifacts will overlap."),(0,m.kt)("li",{parentName:"ul"},"The number of cells covered by an artifact is ",(0,m.kt)("strong",{parentName:"li"},"at most")," ",(0,m.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,m.kt)("li",{parentName:"ul"},"The entries of ",(0,m.kt)("inlineCode",{parentName:"li"},"dig")," are unique.")),(0,m.kt)("h2",{id:"approach-1-loops"},"Approach 1: Loops"),(0,m.kt)("p",null,"Check if each cell from ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msub"},"1"),(0,m.kt)("mi",{parentName:"msub"},"i")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msub"},"1"),(0,m.kt)("mi",{parentName:"msub"},"i")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(r1_i, c1_i)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," to ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msub"},"2"),(0,m.kt)("mi",{parentName:"msub"},"i")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msub"},"2"),(0,m.kt)("mi",{parentName:"msub"},"i")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(r2_i, c2_i)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," in ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"artifacts[i]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]")))))," are all dug or not. If so, increase ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"s")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," by ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),"."),(0,m.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int digArtifacts(int n, vector<vector<int>>& art, vector<vector<int>>& dig) {\n        int ans = 0;\n        vector<vector<int>> isDug(n, vector<int>(n));\n        for (auto x : dig) isDug[x[0]][x[1]] = 1;\n        for (auto x : art) {\n            int ok = 1;\n            for (int i = x[0]; i <= x[2] && ok; i++) {\n                for (int j = x[1]; j <= x[3] && ok; j++) {\n                    if (!isDug[i][j]) {\n                        ok = 0;\n                    }\n                }\n            }\n            ans += ok;\n        }\n        return ans;\n    }\n};\n")))}u.isMDXComponent=!0}}]);