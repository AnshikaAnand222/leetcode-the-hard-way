"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93073],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={description:"Author: @wingkwong, @ganajayant, @lonyehan | https://leetcode.com/problems/sort-the-people/"},p="2418 - Sort the People (Easy)",s={unversionedId:"2400-2499/sort-the-people-easy",id:"2400-2499/sort-the-people-easy",title:"2418 - Sort the People (Easy)",description:"Author: @wingkwong, @ganajayant, @lonyehan | https://leetcode.com/problems/sort-the-people/",source:"@site/solutions/2400-2499/2418-sort-the-people-easy.md",sourceDirName:"2400-2499",slug:"/2400-2499/sort-the-people-easy",permalink:"/leetcode-the-hard-way/solutions/2400-2499/sort-the-people-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2418-sort-the-people-easy.md",tags:[],version:"current",sidebarPosition:2418,frontMatter:{description:"Author: @wingkwong, @ganajayant, @lonyehan | https://leetcode.com/problems/sort-the-people/"},sidebar:"tutorialSidebar",previous:{title:"2413 - Smallest Even Multiple (Easy)",permalink:"/leetcode-the-hard-way/solutions/2400-2499/smallest-even-multiple-easy"},next:{title:"2419 - Longest Subarray With Maximum Bitwise AND (Medium)",permalink:"/leetcode-the-hard-way/solutions/2400-2499/longest-subarray-with-maximum-bitwise-and-medium"}},u={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2},{value:"Approach 2: Heap (Priority Queue)",id:"approach-2-heap-priority-queue",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},h=c("Tabs"),d=c("TabItem"),g=c("SolutionAuthor"),y={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2418---sort-the-people-easy"},"2418 - Sort the People (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sort-the-people/"},"https://leetcode.com/problems/sort-the-people/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an array of strings ",(0,o.kt)("inlineCode",{parentName:"p"},"names"),", and an array ",(0,o.kt)("inlineCode",{parentName:"p"},"heights")," that consists of ",(0,o.kt)("strong",{parentName:"p"},"distinct")," positive integers. Both arrays are of length ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,o.kt)("p",null,"For each index ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"names[i]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"heights[i]")," denote the name and height of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," person."),(0,o.kt)("p",null,"Return ",(0,o.kt)("inlineCode",{parentName:"p"},"names"),(0,o.kt)("em",{parentName:"p"},"sorted in ",(0,o.kt)("strong",{parentName:"em"},"descending")," order by the people's heights"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: names = ["Mary","John","Emma"], heights = [180,165,170]\nOutput: ["Mary","Emma","John"]\nExplanation: Mary is the tallest, followed by Emma and John.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]\nOutput: ["Bob","Alice","Bob"]\nExplanation: The first Bob is the tallest, followed by Alice and the second Bob.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == names.length == heights.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 103")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= names[i].length <= 20")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= heights[i] <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"names[i]")," consists of lower and upper case English letters."),(0,o.kt)("li",{parentName:"ul"},"All the values of ",(0,o.kt)("inlineCode",{parentName:"li"},"heights")," are distinct.")),(0,o.kt)("h2",{id:"approach-1-sorting"},"Approach 1: Sorting"),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<string> sortPeople(vector<string>& names, vector<int>& heights) {\n        vector<string> ans;\n        // {height, name}\n        vector<pair<int, string>> v;\n        // by putting height at first, we can skip writing a comparator as it'll sort by first element of the pair\n        for (int i = 0; i < names.size(); i++) v.push_back({heights[i], names[i]});\n        // sort in decreasing order\n        sort(v.rbegin(), v.rend());\n        // build the final ans. x.second is the name.\n        for (auto & x : v) ans.push_back(x.second);\n        return ans;\n    }\n};\n"))),(0,o.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(g,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public String[] sortPeople(String[] names, int[] heights) {\n        int[][] people = new int[names.length][2];\n        for (int i = 0; i < names.length; i++) {\n            people[i] = new int[] { heights[i], i };\n        }\n\n        Arrays.sort(people, (a, b) -> b[0] - a[0]);\n\n        String[] result = new String[names.length];\n        for (int i = 0; i < names.length; i++) {\n            result[i] = names[people[i][1]];\n        }\n\n        return result;\n    }\n}\n")))),(0,o.kt)("h2",{id:"approach-2-heap-priority-queue"},"Approach 2: Heap (Priority Queue)"),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(d,{value:"cs",label:"C#",mdxType:"TabItem"},(0,o.kt)(g,{name:"@lonyehan",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public class Solution {\n    public string[] SortPeople(string[] names, int[] heights) {\n        PriorityQueue<string, int> pq = new PriorityQueue<string, int>();\n        List<string> list = new List<string>();\n        \n        for(int i = 0; i < names.Length; i++) {\n            pq.Enqueue(names[i], -heights[i]);\n        }\n        \n        while(pq.Count != 0) {\n            list.Add(pq.Dequeue());\n        }\n        \n        return list.ToArray();\n    }\n}\n")))))}k.isMDXComponent=!0}}]);