"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1751],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,y=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6002:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/"},u="2150 - Find All Lonely Numbers in the Array (Medium)",p={unversionedId:"2100-2199/find-all-lonely-numbers-in-the-array-medium",id:"2100-2199/find-all-lonely-numbers-in-the-array-medium",title:"2150 - Find All Lonely Numbers in the Array (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/",source:"@site/solutions/2100-2199/2150-find-all-lonely-numbers-in-the-array-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/find-all-lonely-numbers-in-the-array-medium",permalink:"/solutions/2100-2199/find-all-lonely-numbers-in-the-array-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2150-find-all-lonely-numbers-in-the-array-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:2150,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/"},sidebar:"tutorialSidebar",previous:{title:"2149 - Rearrange Array Elements by Sign (Medium)",permalink:"/solutions/2100-2199/rearrange-array-elements-by-sign-medium"},next:{title:"2151 - Maximum Good People Based on Statements (Hard)",permalink:"/solutions/2100-2199/maximum-good-people-based-on-statements-hard"}},s={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Counting",id:"approach-1-counting",level:2}],c={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2150---find-all-lonely-numbers-in-the-array-medium"},"2150 - Find All Lonely Numbers in the Array (Medium)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". A number ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is ",(0,o.kt)("strong",{parentName:"p"},"lonely")," when it appears only ",(0,o.kt)("strong",{parentName:"p"},"once"),", and no ",(0,o.kt)("strong",{parentName:"p"},"adjacent")," numbers (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"x + 1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"x - 1)")," appear in the array."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"all")," lonely numbers in")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". You may return the answer in ",(0,o.kt)("strong",{parentName:"p"},"any order"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [10,6,5,8]\nOutput: [10,8]\nExplanation: \n- 10 is a lonely number since it appears exactly once and 9 and 11 does not appear in nums.\n- 8 is a lonely number since it appears exactly once and 7 and 9 does not appear in nums.\n- 5 is not a lonely number since 6 appears in nums and vice versa.\nHence, the lonely numbers in nums are [10, 8].\nNote that [8, 10] may also be returned.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,3,5,3]\nOutput: [1,5]\nExplanation: \n- 1 is a lonely number since it appears exactly once and 0 and 2 does not appear in nums.\n- 5 is a lonely number since it appears exactly once and 4 and 6 does not appear in nums.\n- 3 is not a lonely number since it appears twice.\nHence, the lonely numbers in nums are [1, 5].\nNote that [5, 1] may also be returned.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 10^6"))),(0,o.kt)("h2",{id:"approach-1-counting"},"Approach 1: Counting"),(0,o.kt)("p",null,"We count the frequency for each number and store in hash map first. Then iterate each element in hash map to see if it only appears once. If so, check if no adjacent numbers (i.e. x + 1 and x - 1) appear in the array by checking their existence in the hash map."," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> findLonely(vector<int>& nums) {\n        unordered_map<int, int> m;\n        for (auto x : nums) m[x]++;\n        vector<int> ans;\n        for (auto x : m) {\n            if (x.second == 1) {\n                if (!m.count(x.first + 1) && !m.count(x.first - 1)) {\n                    ans.push_back(x.first);\n                }\n            }\n        }\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0}}]);