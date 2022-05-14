"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7296],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return t?i.createElement(k,o(o({ref:n},m),{},{components:t})):i.createElement(k,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5854:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],s={description:"Author: @wingkwong| https://leetcode.com/problems/max-consecutive-ones-iii/"},p="1004 - Max Consecutive Ones III (Medium)",l={unversionedId:"1000-1999/max-consecutive-ones-iii-medium",id:"1000-1999/max-consecutive-ones-iii-medium",title:"1004 - Max Consecutive Ones III (Medium)",description:"Author: @wingkwong| https://leetcode.com/problems/max-consecutive-ones-iii/",source:"@site/solutions/1000-1999/1004-max-consecutive-ones-iii-medium.md",sourceDirName:"1000-1999",slug:"/1000-1999/max-consecutive-ones-iii-medium",permalink:"/solutions/1000-1999/max-consecutive-ones-iii-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1000-1999/1004-max-consecutive-ones-iii-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:1004,frontMatter:{description:"Author: @wingkwong| https://leetcode.com/problems/max-consecutive-ones-iii/"},sidebar:"tutorialSidebar",previous:{title:"1000 - 1999",permalink:"/solutions/1000-1999/"},next:{title:"1029 - Two City Scheduling (Medium)",permalink:"/solutions/1000-1999/two-city-scheduling-medium"}},m={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2}],c={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1004---max-consecutive-ones-iii-medium"},"1004 - Max Consecutive Ones III (Medium)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given a binary array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),", return ",(0,a.kt)("em",{parentName:"p"},"the maximum number of consecutive")," ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),(0,a.kt)("em",{parentName:"p"},"'s in the array if you can flip at most")," ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"'s."," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2\nOutput: 6\nExplanation: [1,1,1,0,0,1,1,1,1,1,1]\nBolded numbers were flipped from 0 to 1. The longest subarray is underlined.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3\nOutput: 10\nExplanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]\nBolded numbers were flipped from 0 to 1. The longest subarray is underlined.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nums[i]")," is either ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= k <= nums.length"))),(0,a.kt)("h2",{id:"approach-1-sliding-window"},"Approach 1: Sliding Window"),(0,a.kt)("p",null,"We are looking for the longest subarray with ",(0,a.kt)("span",{parentName:"p",className:"math math-inline"},(0,a.kt)("span",{parentName:"span",className:"katex"},(0,a.kt)("span",{parentName:"span",className:"katex-mathml"},(0,a.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,a.kt)("semantics",{parentName:"math"},(0,a.kt)("mrow",{parentName:"semantics"},(0,a.kt)("mi",{parentName:"mrow"},"k")),(0,a.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,a.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,a.kt)("span",{parentName:"span",className:"base"},(0,a.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," zeros. We can use standard sliding windows to solve it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int longestOnes(vector<int>& nums, int k) {\n        // pointer i = window starting point\n        // pointer j = window ending point\n        int n = nums.size(), ans = 0, i = 0, j = 0;\n        while (j < n) {\n            // if it is 0, then decrease k by 1\n            if (nums[j] == 0) k -= 1;\n            // k < 0 means the window includes k zeros\n            if (k < 0) {\n                // if the starting point of the window is 0,\n                // then add 1 to k to reduce the window size by 1 \n                if (nums[i] == 0) k++;\n                // move pointer i\n                i++;\n            }\n            // move pointer j\n            j++;\n        }\n        return j - i;\n    }\n};c\n")))}d.isMDXComponent=!0}}]);