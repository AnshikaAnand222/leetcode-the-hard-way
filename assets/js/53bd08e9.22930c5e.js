"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[99062],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return u}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),N=i(t),u=r,k=N["".concat(p,".").concat(u)]||N[u]||c[u]||s;return t?n.createElement(k,m(m({ref:a},l),{},{components:t})):n.createElement(k,m({ref:a},l))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=N;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var i=2;i<s;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},50085:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return i},suggestedProblems:function(){return N},toc:function(){return c}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),m=["components"],o={title:"Introduction",description:"Introduction and overview of sorting",hide_table_of_contents:!0,sidebar_position:1,keywords:["leetcode","tutorial","sorting","algorithm"]},p=void 0,i={unversionedId:"basic-topics/sorting/introduction",id:"basic-topics/sorting/introduction",title:"Introduction",description:"Introduction and overview of sorting",source:"@site/tutorials/basic-topics/sorting/introduction.md",sourceDirName:"basic-topics/sorting",slug:"/basic-topics/sorting/introduction",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/sorting/introduction",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/sorting/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Introduction and overview of sorting",hide_table_of_contents:!0,sidebar_position:1,keywords:["leetcode","tutorial","sorting","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Sorting",permalink:"/leetcode-the-hard-way/tutorials/category/sorting"},next:{title:"Time Complexity",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/time-complexity"}},l={},c=[{value:"Overview",id:"overview",level:2}],N=[{problemName:"0921 - Sort an Array",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/sort-an-array/",solutionLink:"../../solutions/0900-0999/sort-an-array-medium"}],u=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)}},k=u("TutorialAuthors"),d=u("Table"),h={toc:c,suggestedProblems:N};function g(e){var a=e.components,t=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(k,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Sorting refers to rearranging elements in a specific order. The most common order is either ascending or descending. There are a lot of algorithms to sort the array with different time complexity."),(0,s.kt)("p",null,"In C++, if define a static array of N elements of type int such as ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a[4]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," you can sort like as below where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"N")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," is the number of elements to be sorted."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a, a + N);\n")),(0,s.kt)("p",null,"If you want to sort for a specific range ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[x, y)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),",  then use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a + x, a + y);\n")),(0,s.kt)("p",null,"For dynamic array, we do in such way"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a.begin(), a.end());\n")),(0,s.kt)("p",null,"If you want to sort for a specific range ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[x, y)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),",  then use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a.begin() + x, a.begin() + y);\n")),(0,s.kt)("p",null,"To sort in an decreasing order,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a.begin(), a.end(), greater<int>());\n")),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"sort()")," sorts the elements in the range ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[x, y)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," into ascending order. If the container includes pairs, tuples or array\\<int, N>, it first sorts the first element, then the second element if there is a tie and so on. For example, the following comparator is same as ",(0,s.kt)("inlineCode",{parentName:"p"},"sort(a.begin(), a.end());"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(a.begin(), a.end(), [&](const array<int, 3>& x, const array<int, 3>& y) {\n    return (\n        (x[0] < y[0]) || \n        (x[0] == y[0] && x[1] < y[1]) ||\n        (x[0] == y[0] && x[1] == y[1] || x[2] < y[2])\n    );\n});\n")),(0,s.kt)(d,{title:"Suggested Problems",data:N,mdxType:"Table"}))}g.isMDXComponent=!0}}]);