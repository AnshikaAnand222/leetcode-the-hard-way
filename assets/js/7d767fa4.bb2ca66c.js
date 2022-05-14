"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5548],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(y,p(p({ref:t},s),{},{components:n})):r.createElement(y,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={description:"Author: @TBC | https://leetcode.com/problems/happy-number/"},l="0202 - Happy Number (Easy)",u={unversionedId:"0200-0299/happy-number-easy",id:"0200-0299/happy-number-easy",title:"0202 - Happy Number (Easy)",description:"Author: @TBC | https://leetcode.com/problems/happy-number/",source:"@site/solutions/0200-0299/0202-happy-number-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/happy-number-easy",permalink:"/solutions/0200-0299/happy-number-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0200-0299/0202-happy-number-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:202,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/happy-number/"},sidebar:"tutorialSidebar",previous:{title:"0200 - Number of Islands (Medium)",permalink:"/solutions/0200-0299/number-of-islands-medium"},next:{title:"0204 - Count Primes",permalink:"/solutions/0200-0299/count-primes"}},s={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0202---happy-number-easy"},"0202 - Happy Number (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Write an algorithm to determine if a number ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is happy."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"happy number")," is a number defined by the following process:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Starting with any positive integer, replace the number by the sum of the squares of its digits."),(0,o.kt)("li",{parentName:"ul"},"Repeat the process until the number equals 1 (where it will stay), or it ",(0,o.kt)("strong",{parentName:"li"},"loops endlessly in a cycle")," which does not include 1."),(0,o.kt)("li",{parentName:"ul"},"Those numbers for which this process ",(0,o.kt)("strong",{parentName:"li"},"ends in 1")," are happy.")),(0,o.kt)("p",null,"Return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," ",(0,o.kt)("em",{parentName:"p"},"if")," ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," ",(0,o.kt)("em",{parentName:"p"},"is a happy number, and")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," ",(0,o.kt)("em",{parentName:"p"},"if not"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 19\nOutput: true\nExplanation:\n12 + 92 = 82\n82 + 22 = 68\n62 + 82 = 100\n12 + 02 + 02 = 1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 2\nOutput: false\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 2^31 - 1"))),(0,o.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}d.isMDXComponent=!0}}]);