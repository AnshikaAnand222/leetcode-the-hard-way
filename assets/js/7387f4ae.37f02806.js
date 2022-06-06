"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3332],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=l(n),h=i,d=c["".concat(p,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(d,s(s({ref:t},m),{},{components:n})):r.createElement(d,s({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),s=n(8539),a=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/count-positions-on-street-with-required-brightness/"},l="2237 - Count Positions on Street With Required Brightness (Medium)",m={unversionedId:"2200-2299/count-positions-on-street-with-required-brightness-medium",id:"2200-2299/count-positions-on-street-with-required-brightness-medium",title:"2237 - Count Positions on Street With Required Brightness (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/count-positions-on-street-with-required-brightness/",source:"@site/solutions/2200-2299/2237-count-positions-on-street-with-required-brightness-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/count-positions-on-street-with-required-brightness-medium",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-positions-on-street-with-required-brightness-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2237-count-positions-on-street-with-required-brightness-medium.md",tags:[],version:"current",sidebarPosition:2237,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-positions-on-street-with-required-brightness/"},sidebar:"tutorialSidebar",previous:{title:"2235 - Add Two Integers (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/add-two-integers-easy"},next:{title:"2239 - Find Closest Number to Zero (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/find-closest-number-to-zero-easy"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Line Sweep",id:"approach-1-line-sweep",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2237---count-positions-on-street-with-required-brightness-medium"},"2237 - Count Positions on Street With Required Brightness (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/count-positions-on-street-with-required-brightness/"},"https://leetcode.com/problems/count-positions-on-street-with-required-brightness/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),". A perfectly straight street is represented by a number line ranging from ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"n - 1"),". You are given a 2D integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"lights")," representing the street lamp(s) on the street. Each ",(0,o.kt)("inlineCode",{parentName:"p"},"lights[i] = [positioni, rangei]")," indicates that there is a street lamp at position ",(0,o.kt)("inlineCode",{parentName:"p"},"positioni")," that lights up the area from ",(0,o.kt)("inlineCode",{parentName:"p"},"[max(0, positioni - rangei), min(n - 1, positioni + rangei)]")," (",(0,o.kt)("strong",{parentName:"p"},"inclusive"),")."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"brightness")," of a position ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," is defined as the number of street lamps that light up the position ",(0,o.kt)("inlineCode",{parentName:"p"},"p"),". You are given a ",(0,o.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"requirement")," of size ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"requirement[i]")," is the minimum ",(0,o.kt)("strong",{parentName:"p"},"brightness")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," position on the street."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the number of positions")," ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," ",(0,o.kt)("em",{parentName:"p"},"on the street between")," ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," ",(0,o.kt)("em",{parentName:"p"},"and")," ",(0,o.kt)("inlineCode",{parentName:"p"},"n - 1")," ",(0,o.kt)("em",{parentName:"p"},"that have a ",(0,o.kt)("strong",{parentName:"em"},"brightness")," of ",(0,o.kt)("strong",{parentName:"em"},"at least")," ")," ",(0,o.kt)("inlineCode",{parentName:"p"},"requirement[i]"),(0,o.kt)("em",{parentName:"p"},".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/04/11/screenshot-2022-04-11-at-22-24-43-diagramdrawio-diagramsnet.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 5, lights = [[0,1],[2,1],[3,2]], requirement = [0,2,1,4,1]\nOutput: 4\nExplanation:\n- The first street lamp lights up the area from [max(0, 0 - 1), min(n - 1, 0 + 1)] = [0, 1] (inclusive).\n- The second street lamp lights up the area from [max(0, 2 - 1), min(n - 1, 2 + 1)] = [1, 3] (inclusive).\n- The third street lamp lights up the area from [max(0, 3 - 2), min(n - 1, 3 + 2)] = [1, 4] (inclusive).\n\n- Position 0 is covered by the first street lamp. It is covered by 1 street lamp which is greater than requirement[0].\n- Position 1 is covered by the first, second, and third street lamps. It is covered by 3 street lamps which is greater than requirement[1].\n- Position 2 is covered by the second and third street lamps. It is covered by 2 street lamps which is greater than requirement[2].\n- Position 3 is covered by the second and third street lamps. It is covered by 2 street lamps which is less than requirement[3].\n- Position 4 is covered by the third street lamp. It is covered by 1 street lamp which is equal to requirement[4].\n\nPositions 0, 1, 2, and 4 meet the requirement so we return 4.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 1, lights = [[0,1]], requirement = [2]\nOutput: 0\nExplanation:\n- The first street lamp lights up the area from [max(0, 0 - 1), min(n - 1, 0 + 1)] = [0, 0] (inclusive).\n- Position 0 is covered by the first street lamp. It is covered by 1 street lamp which is less than requirement[0].\n- We return 0 because no position meets their brightness requirement.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= lights.length <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= positioni < n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= rangei <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requirement.length == n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= requirement[i] <= 10^5"))),(0,o.kt)("h2",{id:"approach-1-line-sweep"},"Approach 1: Line Sweep"),(0,o.kt)(s.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int meetRequirement(int n, vector<vector<int>>& lights, vector<int>& requirement) {\n        vector<int> brightness(n + 1);\n        for (auto x : lights) {\n            // start: + 1\n            brightness[max(0, x[0] - x[1])]++;\n            // end: -1\n            brightness[min(n, x[0] + x[1] + 1)]--;\n        }\n        // calculate the prefix sum\n        partial_sum(brightness.begin(), brightness.end(), brightness.begin());\n        int ans = 0;\n        // check each point's brightness to see if it meets its requirement\n        for (int i = 0; i < n; i++) ans += brightness[i] >= requirement[i];\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);function i(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);