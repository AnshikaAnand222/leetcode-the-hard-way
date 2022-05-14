"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[343],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5192:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],u={description:"Author: @wingkwong | https://leetcode.com/problems/increasing-triplet-subsequence/"},s="0334 - Increasing Triplet Subsequence (Medium)",l={unversionedId:"0300-0399/increasing-triplet-subsequence-medium",id:"0300-0399/increasing-triplet-subsequence-medium",title:"0334 - Increasing Triplet Subsequence (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/increasing-triplet-subsequence/",source:"@site/solutions/0300-0399/0334-increasing-triplet-subsequence-medium.md",sourceDirName:"0300-0399",slug:"/0300-0399/increasing-triplet-subsequence-medium",permalink:"/solutions/0300-0399/increasing-triplet-subsequence-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0300-0399/0334-increasing-triplet-subsequence-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:334,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/increasing-triplet-subsequence/"},sidebar:"tutorialSidebar",previous:{title:"0327 - Count of Range Sum (Hard)",permalink:"/solutions/0300-0399/count-of-range-sum-hard"},next:{title:"0338 - Counting Bits (Easy)",permalink:"/solutions/0300-0399/counting-bits-easy"}},p={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0334---increasing-triplet-subsequence-medium"},"0334 - Increasing Triplet Subsequence (Medium)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," ",(0,a.kt)("em",{parentName:"p"},"if there exists a triple of indices")," ",(0,a.kt)("inlineCode",{parentName:"p"},"(i, j, k)")," ",(0,a.kt)("em",{parentName:"p"},"such that")," ",(0,a.kt)("inlineCode",{parentName:"p"},"i < j < k")," ",(0,a.kt)("em",{parentName:"p"},"and")," ",(0,a.kt)("inlineCode",{parentName:"p"},"nums[i] < nums[j] < nums[k]"),". If no such indices exists, return ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,4,5]\nOutput: true\nExplanation: Any triplet where i < j < k is valid.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [5,4,3,2,1]\nOutput: false\nExplanation: No triplet exists.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [2,1,5,0,4,6]\nOutput: true\nExplanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 5 * 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-2^31 <= nums[i] <= 2^31 - 1"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow up:")," Could you implement a solution that runs in ",(0,a.kt)("inlineCode",{parentName:"p"},"O(n)")," time complexity and ",(0,a.kt)("inlineCode",{parentName:"p"},"O(1)")," space complexity?"),(0,a.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,a.kt)("p",null,"Find the first two smallest numbers. If there is a number greater than them, then we can return true. Otherwise, return false at the end."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool increasingTriplet(vector<int>& nums) {\n        int first = INT_MAX, second = INT_MAX;\n        for (auto x : nums) {\n            // update the first smallest number\n            if (x <= first) first = x;\n            // update the second smallest number\n            else if (x <= second) second = x;\n            // x > first && x > second -> found the answer\n            else return true;\n        }\n        return false;\n    }\n};\n")))}d.isMDXComponent=!0}}]);