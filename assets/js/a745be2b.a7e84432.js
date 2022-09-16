"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3375],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||l[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11107:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r,a=n(87462),o=n(63366),i=(n(67294),n(3905)),m=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/"},p="2224 - Minimum Number of Operations to Convert Time (Easy)",c={unversionedId:"2200-2299/minimum-number-of-operations-to-convert-time-easy",id:"2200-2299/minimum-number-of-operations-to-convert-time-easy",title:"2224 - Minimum Number of Operations to Convert Time (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/",source:"@site/solutions/2200-2299/2224-minimum-number-of-operations-to-convert-time-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/minimum-number-of-operations-to-convert-time-easy",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-number-of-operations-to-convert-time-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2224-minimum-number-of-operations-to-convert-time-easy.md",tags:[],version:"current",sidebarPosition:2224,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/"},sidebar:"tutorialSidebar",previous:{title:"2223 - Sum of Scores of Built Strings (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/sum-of-scores-of-built-strings-hard"},next:{title:"2225 - Find Players With Zero or One Losses (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/find-players-with-zero-or-one-losses-medium"}},l={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2224---minimum-number-of-operations-to-convert-time-easy"},"2224 - Minimum Number of Operations to Convert Time (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/"},"https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given two strings ",(0,i.kt)("inlineCode",{parentName:"p"},"current")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"correct")," representing two ",(0,i.kt)("strong",{parentName:"p"},"24-hour times"),"."),(0,i.kt)("p",null,"24-hour times are formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},'"HH:MM"'),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"HH")," is between ",(0,i.kt)("inlineCode",{parentName:"p"},"00")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"23"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"MM")," is between ",(0,i.kt)("inlineCode",{parentName:"p"},"00")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"59"),". The earliest 24-hour time is ",(0,i.kt)("inlineCode",{parentName:"p"},"00:00"),", and the latest is ",(0,i.kt)("inlineCode",{parentName:"p"},"23:59"),"."),(0,i.kt)("p",null,"In one operation you can increase the time ",(0,i.kt)("inlineCode",{parentName:"p"},"current")," by ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"15"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"60")," minutes. You can perform this operation ",(0,i.kt)("strong",{parentName:"p"},"any")," number of times."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"minimum number of operations")," needed to convert")," ",(0,i.kt)("inlineCode",{parentName:"p"},"current")," ",(0,i.kt)("em",{parentName:"p"},"to")," ",(0,i.kt)("inlineCode",{parentName:"p"},"correct"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: current = "02:30", correct = "04:35"\nOutput: 3\nExplanation:\nWe can convert current to correct in 3 operations as follows:\n- Add 60 minutes to current. current becomes "03:30".\n- Add 60 minutes to current. current becomes "04:30".\n- Add 5 minutes to current. current becomes "04:35".\nIt can be proven that it is not possible to convert current to correct in fewer than 3 operations.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: current = "11:00", correct = "11:01"\nOutput: 1\nExplanation: We only have to add one minute to current, so the minimum number of operations needed is 1.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"current")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"correct")," are in the format ",(0,i.kt)("inlineCode",{parentName:"li"},'"HH:MM"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"current <= correct"))),(0,i.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,i.kt)("p",null,"Choosing ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"60")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"60")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"60")))))," 1 time is better than choosing ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"15")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"15")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"15")))))," 4 times. We choose from the largest number as many times as we could, then choose the second largest and etc. Since the operation is on minute, we need to convert the input to minute format first. Then we calculate the difference and try each operation to see how many times we could apply and update the difference after each operation."),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int getMinutes(string t) {\n        int res = 0;\n        // handle HH\n        res += (t[0] - '0') * 10;\n        res += (t[1] - '0');\n        res *= 60;\n        // handle MM\n        res += (t[3] - '0') * 10;\n        res += (t[4] - '0');\n        return res;\n    }\n    \n    int convertTime(string current, string correct) {\n        // convert inputs to minute format\n        int from = getMinutes(current), to = getMinutes(correct);\n        // init ans & calculate the difference\n        int ans = 0, d = to - from;\n        // available operators - use largest one first\n        vector<int> ops{ 60, 15, 5, 1 };\n        // try each operation - take as many as possible\n        // and update the difference\n        for (auto x : ops) ans += d / x, d %= x;\n        return ans;\n    }\n};\n")))}k.isMDXComponent=!0}}]);