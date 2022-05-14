"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5535],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6647:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/largest-component-size-by-common-factor"},s="0952 - Largest Component Size by Common Factor (Hard)",p={unversionedId:"0900-0999/largest-component-size-by-common-factor-hard",id:"0900-0999/largest-component-size-by-common-factor-hard",title:"0952 - Largest Component Size by Common Factor (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/largest-component-size-by-common-factor",source:"@site/solutions/0900-0999/0952-largest-component-size-by-common-factor-hard.md",sourceDirName:"0900-0999",slug:"/0900-0999/largest-component-size-by-common-factor-hard",permalink:"/solutions/0900-0999/largest-component-size-by-common-factor-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0900-0999/0952-largest-component-size-by-common-factor-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:952,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/largest-component-size-by-common-factor"},sidebar:"tutorialSidebar",previous:{title:"0946 - Validate Stack Sequences (Medium)",permalink:"/solutions/0900-0999/validate-stack-sequences-medium"},next:{title:"0973 - K Closest Points to Origin (Medium)",permalink:"/solutions/0900-0999/k-closest-points-to-origin-medium"}},u={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Factorisation + DSU",id:"approach-1-factorisation--dsu",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0952---largest-component-size-by-common-factor-hard"},"0952 - Largest Component Size by Common Factor (Hard)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given an integer array of unique positive integers ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),". Consider the following graph:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There are ",(0,a.kt)("inlineCode",{parentName:"li"},"nums.length")," nodes, labeled ",(0,a.kt)("inlineCode",{parentName:"li"},"nums[0]")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"nums[nums.length - 1]"),","),(0,a.kt)("li",{parentName:"ul"},"There is an undirected edge between ",(0,a.kt)("inlineCode",{parentName:"li"},"nums[i]")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"nums[j]")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"nums[i]")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"nums[j]")," share a common factor greater than ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the size of the largest connected component in the graph"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2018/12/01/ex1.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [4,6,15,35]\nOutput: 4\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2018/12/01/ex2.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [20,50,9,63]\nOutput: 2\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2018/12/01/ex3.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [2,3,6,7,4,12,21,39]\nOutput: 8\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 2 * 104")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 105")),(0,a.kt)("li",{parentName:"ul"},"All the values of ",(0,a.kt)("inlineCode",{parentName:"li"},"nums")," are ",(0,a.kt)("strong",{parentName:"li"},"unique"),".")),(0,a.kt)("h2",{id:"approach-1-factorisation--dsu"},"Approach 1: Factorisation + DSU"),(0,a.kt)("p",null,"We iterate each number and factorise it. In general, here's the approach."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<int> factorize(int x) {\n    vector<int> res;\n    for (int y = 2; y * y <= x; y++) {\n        if (x % y) continue;\n        while(x % y == 0) {\n            res.push_back(y);\n            x /= y;\n        }\n    }\n    if (x > 1) res.push_back(x);\n    return res;\n}\n")),(0,a.kt)("p",null,"Once we got the factors, we use DSU to unite each factor and the number."," "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"DSU Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class dsu {\n public:\n  vector<int> root, rank, size;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    size.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n        size[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x); y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n        \n      return true;\n    }\n    return false;\n  }\n};\n"))),(0,a.kt)("p",null,"At the end, we check the size of each group and return the max one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int largestComponentSize(vector<int>& nums) {\n        int n = nums.size();\n        dsu d(100005);\n        for (auto x : nums) {\n            // step 1: factorize each number\n            vector<int> f = factorize(x);\n            // step 2: unite each number with its factors\n            for (int i = 0; i < f.size(); i++) {\n                d.unite(x, f[i]);\n            }\n        }\n        // step 3: find out the max group size\n        int ans = 0;\n        unordered_map<int, int> m;\n        for (auto x : nums) {\n            ans = max(ans, ++m[d.get(x)]);\n        }\n        return ans;\n    }\n")))}d.isMDXComponent=!0}}]);