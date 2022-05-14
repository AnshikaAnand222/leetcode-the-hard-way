"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6651],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6092:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/reverse-pairs/"},p="0493 - Reverse Pairs (Hard)",u={unversionedId:"0400-0499/reverse-pairs-hard",id:"0400-0499/reverse-pairs-hard",title:"0493 - Reverse Pairs (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/reverse-pairs/",source:"@site/solutions/0400-0499/0493-reverse-pairs-hard.md",sourceDirName:"0400-0499",slug:"/0400-0499/reverse-pairs-hard",permalink:"/solutions/0400-0499/reverse-pairs-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0400-0499/0493-reverse-pairs-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:493,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/reverse-pairs/"},sidebar:"tutorialSidebar",previous:{title:"0473 - Matchsticks to Square (Medium)",permalink:"/solutions/0400-0499/matchsticks-to-square-medium"},next:{title:"0454 -  4Sum II (Medium)",permalink:"/solutions/0400-0499/0454-4sum-ii-medium"}},l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Ordered Set",id:"approach-1-ordered-set",level:2},{value:"Approach 2: BIT",id:"approach-2-bit",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0493---reverse-pairs-hard"},"0493 - Reverse Pairs (Hard)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,i.kt)("em",{parentName:"p"},"the number of ",(0,i.kt)("strong",{parentName:"em"},"reverse pairs")," in the array"),"."),(0,i.kt)("p",null,"A reverse pair is a pair ",(0,i.kt)("inlineCode",{parentName:"p"},"(i, j)")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"0 <= i < j < nums.length")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nums[i] > 2 * nums[j]"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,3,2,3,1]\nOutput: 2\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [2,4,3,5,1]\nOutput: 3\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 5 * 10^4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-231 <= nums[i] <= 231 - 1"))),(0,i.kt)("h2",{id:"approach-1-ordered-set"},"Approach 1: Ordered Set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <ext/pb_ds/assoc_container.hpp>\n#include <ext/pb_ds/tree_policy.hpp>\nusing namespace __gnu_pbds;\n\nclass Solution {\npublic:\n    tree<long long, null_type, greater_equal<long long>, rb_tree_tag, tree_order_statistics_node_update> T;\n    int reversePairs(vector<int>& nums) {\n        int ans = 0;\n        for (auto x : nums) {\n            // number of elements >= (2LL * x) \n            ans += T.order_of_key(2LL * x); \n            T.insert(x);\n        }\n        return ans;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-2-bit"},"Approach 2: BIT"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"BIT Template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class T>\n    struct BIT { //1-indexed\n      int n; vector<T> t;\n      BIT() {}\n      BIT(int _n) {\n        n = _n; t.assign(n + 1, 0);\n      }\n      T query(int i) {\n        T ans = 0;\n        for (; i >= 1; i -= (i & -i)) ans += t[i];\n        return ans;\n      }\n      void upd(int i, T val) {\n        if (i <= 0) return;\n        for (; i <= n; i += (i & -i)) t[i] += val;\n      }\n      void upd(int l, int r, T val) {\n        upd(l, val);\n        upd(r + 1, -val);\n      }\n      T query(int l, int r) {\n        return query(r) - query(l - 1);\n      }\n    };\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // BIT Template goes here\n    // ...\n    \n    int reversePairs(vector<int>& nums) {\n        int n = nums.size(), pos = -1, inversions = 0;\n        vector<int> sorted_nums = nums;\n        sort(sorted_nums.begin(), sorted_nums.end());\n        BIT bit = BIT<int>(n);\n        for(int i = 0; i < n; i++) {\n            // take the last pos of (2 * nums[i]) in sorted_nums\n            pos = upper_bound(sorted_nums.begin(), sorted_nums.end(), 2L * nums[i]) - sorted_nums.begin();\n            // ans += i - number of visited elements that are smaller or equal to 2 * nums[i]\n            inversions += i - bit.query(pos);\n            // find out where nums[i] should reside\n            pos = upper_bound(sorted_nums.begin(), sorted_nums.end(), nums[i]) - sorted_nums.begin();\n            // update it in BIT\n            bit.upd(pos, 1);\n        }\n        return inversions;\n    }\n};\n")))}m.isMDXComponent=!0}}]);