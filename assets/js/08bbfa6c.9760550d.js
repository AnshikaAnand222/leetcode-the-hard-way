"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[28039],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20409:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r,i=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/count-special-integers/",tags:["Math","Dynamic Programming"]},p="2376 - Count Special Integers (Hard)",c={unversionedId:"2300-2399/count-special-integers-hard",id:"2300-2399/count-special-integers-hard",title:"2376 - Count Special Integers (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/count-special-integers/",source:"@site/solutions/2300-2399/2376-count-special-integers-hard.md",sourceDirName:"2300-2399",slug:"/2300-2399/count-special-integers-hard",permalink:"/leetcode-the-hard-way/solutions/2300-2399/count-special-integers-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2376-count-special-integers-hard.md",tags:[{label:"Math",permalink:"/leetcode-the-hard-way/solutions/tags/math"},{label:"Dynamic Programming",permalink:"/leetcode-the-hard-way/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:2376,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-special-integers/",tags:["Math","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"2360 - Longest Cycle in a Graph (Hard)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/longest-cycle-in-a-graph-hard"},next:{title:"2379 - Minimum Recolors to Get K Consecutive Black Blocks (Easy)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/minimum-recolors-to-get-k-consecutive-black-blocks-easy"}},u={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Digit DP + BitMasking",id:"approach-1-digit-dp--bitmasking",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),g={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2376---count-special-integers-hard"},"2376 - Count Special Integers (Hard)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"We call a positive integer ",(0,o.kt)("strong",{parentName:"p"},"special")," if all of its digits are ",(0,o.kt)("strong",{parentName:"p"},"distinct"),"."),(0,o.kt)("p",null,"Given a ",(0,o.kt)("strong",{parentName:"p"},"positive")," integer ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", return ",(0,o.kt)("em",{parentName:"p"},"the number of special integers that belong to the interval"),(0,o.kt)("inlineCode",{parentName:"p"},"[1, n]"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 20\nOutput: 19\nExplanation: All the integers from 1 to 20, except 11, are special. Thus, there are 19 special integers.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 5\nOutput: 5\nExplanation: All the integers from 1 to 5 are special.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 135\nOutput: 110\nExplanation: There are 110 integers from 1 to 135 that are special.\nSome of the integers that are not special are: 22, 114, and 131.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 2 * 10^9"))),(0,o.kt)("h2",{id:"approach-1-digit-dp--bitmasking"},"Approach 1: Digit DP + BitMasking"),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int dp[11][1 << 10][2];\n    int dfs(string s, int i, int mask, int tight) {\n        // if it can reach to the end, check if the value is 0\n        if (i == s.size()) return mask == 0 ? 0 : 1;\n        // if it is calculated before, return it directly\n        if (dp[i][mask][tight] != -1) return dp[i][mask][tight];\n        // if `tight` is true, that means the range is only from 0 to s[i]\n        // fo example, n = 20 - we cannot put any digit greater than 2 on the first place\n        // if `tight` is false, that means we can put 0 - 9 in position i\n        int mxDigit = tight ? s[i] - '0' : 9;\n        int ans = 0;\n        for (int d = 0; d <= mxDigit; d++) {\n            //if this digit is already included, skip this digit\n            if ((1 << d) & mask) continue;\n            int newMask = mask;\n            // skip leading 0\n            // set the new mask\n            if (!(d == 0 && mask == 0)) newMask |= (1 << d);\n            // find the new tight\n            int newTight = tight ? s[i] - '0' == d : 0;\n            // try the next position\n            ans += dfs(s, i + 1, newMask, newTight);\n        }\n        // memoize the answer\n        return dp[i][mask][tight] = ans;\n    }\n    \n    int countSpecialNumbers(int n) {\n        // init dp with value -1\n        memset(dp, -1, sizeof(dp));\n        // dfs from position 0\n        return dfs(to_string(n), 0, 0, 1);\n    }\n};\n")))}h.isMDXComponent=!0}}]);