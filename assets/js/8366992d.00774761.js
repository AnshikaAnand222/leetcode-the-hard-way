"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5693],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],u={description:"Author: @wingkwong | https://leetcode.com/problems/find-the-duplicate-number/"},l="0287 - Find the Duplicate Number (Medium)",p={unversionedId:"0200-0299/find-the-duplicate-number-medium",id:"0200-0299/find-the-duplicate-number-medium",title:"0287 - Find the Duplicate Number (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/find-the-duplicate-number/",source:"@site/solutions/0200-0299/0287-find-the-duplicate-number-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/find-the-duplicate-number-medium",permalink:"/solutions/0200-0299/find-the-duplicate-number-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0200-0299/0287-find-the-duplicate-number-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:287,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-the-duplicate-number/"},sidebar:"tutorialSidebar",previous:{title:"0283 - Move Zeroes (Easy)",permalink:"/solutions/0200-0299/move-zeroes-easy"},next:{title:"0300 - 0399",permalink:"/solutions/0300-0399/"}},c={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit Masking",id:"approach-1-bit-masking",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0287---find-the-duplicate-number-medium"},"0287 - Find the Duplicate Number (Medium)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an array of integers ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"n + 1")," integers where each integer is in the range ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, n]")," inclusive."),(0,a.kt)("p",null,"There is only ",(0,a.kt)("strong",{parentName:"p"},"one repeated number")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,a.kt)("em",{parentName:"p"},"this repeated number"),"."),(0,a.kt)("p",null,"You must solve the problem ",(0,a.kt)("strong",{parentName:"p"},"without")," modifying the array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," and uses only constant extra space."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,3,4,2,2]\nOutput: 2\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [3,1,3,4,2]\nOutput: 3\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nums.length == n + 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= n")),(0,a.kt)("li",{parentName:"ul"},"All the integers in ",(0,a.kt)("inlineCode",{parentName:"li"},"nums")," appear only ",(0,a.kt)("strong",{parentName:"li"},"once")," except for ",(0,a.kt)("strong",{parentName:"li"},"precisely one integer")," which appears ",(0,a.kt)("strong",{parentName:"li"},"two or more")," times.")),(0,a.kt)("h2",{id:"approach-1-bit-masking"},"Approach 1: Bit Masking"),(0,a.kt)("p",null,"We iterate each bit one by one. We calculate the expected bit count and the actual bit count. If the actual one is greater than the expected one, then it means this bit is part of the duplicate number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findDuplicate(vector<int>& nums) {\n        int duplicate = 0, n = nums.size() - 1;\n        // iterate each bit one by one\n        for(int i = 0; i < 31; i++) {\n            long expected = 0, actual = 0;\n            // the integer range [1, n] inclusive\n            // iterate each integer to calculate the expected bit count\n            for(int j = 1; j <= n; j++) expected += (1 << i) & j;\n            // iterate each number to calculate the actual bit count\n            for(int j : nums) actual += (1 << i) & j;\n            // if actual one is greater than the expected one\n            // then this bit is part of the duplicate number\n            if(actual > expected) duplicate |= (1 << i);\n        }\n        return duplicate;\n    }\n};\n")))}d.isMDXComponent=!0}}]);