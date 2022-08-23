"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2882],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return k}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),N=o(t),k=s,u=N["".concat(p,".").concat(k)]||N[k]||c[k]||r;return t?n.createElement(u,m(m({ref:a},l),{},{components:t})):n.createElement(u,m({ref:a},l))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=N;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,m[1]=i;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},55308:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return N}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),m=t(8539),i=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/"},o="2120 - Execution of All Suffix Instructions Staying in a Grid (Medium)",l={unversionedId:"2100-2199/execution-of-all-suffix-instructions-staying-in-a-grid-medium",id:"2100-2199/execution-of-all-suffix-instructions-staying-in-a-grid-medium",title:"2120 - Execution of All Suffix Instructions Staying in a Grid (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/",source:"@site/solutions/2100-2199/2120-execution-of-all-suffix-instructions-staying-in-a-grid-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/execution-of-all-suffix-instructions-staying-in-a-grid-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/execution-of-all-suffix-instructions-staying-in-a-grid-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2120-execution-of-all-suffix-instructions-staying-in-a-grid-medium.md",tags:[],version:"current",sidebarPosition:2120,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/"},sidebar:"tutorialSidebar",previous:{title:"2119 - A Number After a Double Reversal (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/a-number-after-a-double-reversal-easy"},next:{title:"2121 - Intervals Between Identical Elements (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/intervals-between-identical-elements-medium"}},c={},N=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2},{value:"Approach 2: One Pass",id:"approach-2-one-pass",level:2}],k={toc:N};function u(e){var a=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2120---execution-of-all-suffix-instructions-staying-in-a-grid-medium"},"2120 - Execution of All Suffix Instructions Staying in a Grid (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/"},"https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"There is an ",(0,r.kt)("inlineCode",{parentName:"p"},"n x n")," grid, with the top-left cell at ",(0,r.kt)("inlineCode",{parentName:"p"},"(0, 0)")," and the bottom-right cell at ",(0,r.kt)("inlineCode",{parentName:"p"},"(n - 1, n - 1)"),". You are given the integer ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," and an integer array ",(0,r.kt)("inlineCode",{parentName:"p"},"startPos")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"startPos = [startrow, startcol]")," indicates that a robot is initially at cell ",(0,r.kt)("inlineCode",{parentName:"p"},"(startrow, startcol)"),"."),(0,r.kt)("p",null,"You are also given a ",(0,r.kt)("strong",{parentName:"p"},"0-indexed")," string ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," of length ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"s[i]")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"ith")," instruction for the robot: ",(0,r.kt)("inlineCode",{parentName:"p"},"'L'")," (move left), ",(0,r.kt)("inlineCode",{parentName:"p"},"'R'")," (move right), ",(0,r.kt)("inlineCode",{parentName:"p"},"'U'")," (move up), and ",(0,r.kt)("inlineCode",{parentName:"p"},"'D'")," (move down)."),(0,r.kt)("p",null,"The robot can begin executing from any ",(0,r.kt)("inlineCode",{parentName:"p"},"ith")," instruction in ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),". It executes the instructions one by one towards the end of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," but it stops if either of these conditions is met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The next instruction will move the robot off the grid."),(0,r.kt)("li",{parentName:"ul"},"There are no more instructions left to execute.")),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"an array")," ",(0,r.kt)("inlineCode",{parentName:"p"},"answer")," ",(0,r.kt)("em",{parentName:"p"},"of length")," ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," ",(0,r.kt)("em",{parentName:"p"},"where")," ",(0,r.kt)("inlineCode",{parentName:"p"},"answer[i]")," ",(0,r.kt)("em",{parentName:"p"},"is ",(0,r.kt)("strong",{parentName:"em"},"the number of instructions")," the robot can execute if the robot ",(0,r.kt)("strong",{parentName:"em"},"begins executing from")," the")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ith")," ",(0,r.kt)("em",{parentName:"p"},"instruction in")," ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/09/1.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: n = 3, startPos = [0,1], s = "RRDDLU"\nOutput: [1,5,4,3,1,0]\nExplanation: Starting from startPos and beginning execution from the ith instruction:\n- 0th: "RRDDLU". Only one instruction "R" can be executed before it moves off the grid.\n- 1st:  "RDDLU". All five instructions can be executed while it stays in the grid and ends at (1, 1).\n- 2nd:   "DDLU". All four instructions can be executed while it stays in the grid and ends at (1, 0).\n- 3rd:    "DLU". All three instructions can be executed while it stays in the grid and ends at (0, 0).\n- 4th:     "LU". Only one instruction "L" can be executed before it moves off the grid.\n- 5th:      "U". If moving up, it would move off the grid.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/09/2.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: n = 2, startPos = [1,1], s = "LURD"\nOutput: [4,1,0,0]\nExplanation:\n- 0th: "LURD".\n- 1st:  "URD".\n- 2nd:   "RD".\n- 3rd:    "D".\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/09/3.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: n = 1, startPos = [0,0], s = "LRUD"\nOutput: [0,0,0,0]\nExplanation: No matter which instruction the robot begins execution from, it would move off the grid.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m == s.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n, m <= 500")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startPos.length == 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= startrow, startcol < n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," consists of ",(0,r.kt)("inlineCode",{parentName:"li"},"'L'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'R'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'U'"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"'D'"),".")),(0,r.kt)("h2",{id:"approach-1-simulation"},"Approach 1: Simulation"),(0,r.kt)("p",null,"We can just simulate the whole process. For each ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"h")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i\u2212th")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"))))),"instruction, we have max ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"z"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"i")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s.size()\u2212i")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ze"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),"steps assuming ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"i")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," starts from ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"))))),". We keep updating the position ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(x,y)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"and check if it is out of bound. If not, keep increasing ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"cnt")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," by 1. If there is no further move we can make, we can break the loop and push the result ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"cnt")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"s")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))),"."),(0,r.kt)(m.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> executeInstructions(int n, vector<int>& startPos, string s) {\n        int m = s.size();\n        vector<int> ans;\n        for (int i = 0; i < m; i++) {\n            int x = startPos[0];\n            int y = startPos[1];\n            int cnt = 0;\n            for (int j = i; j < m; j++) {\n                if (s[j] == 'L') y--;\n                if (s[j] == 'R') y++;\n                if (s[j] == 'U') x--;\n                if (s[j] == 'D') x++;\n                if (0 <= x && x < n && 0 <= y && y < n) cnt++;\n                else break;\n            }\n            ans.push_back(cnt);\n        }\n        return ans;\n    }\n};\n")),(0,r.kt)("p",null,"Time Complexity: O(m ^ 2)"),(0,r.kt)("h2",{id:"approach-2-one-pass"},"Approach 2: One Pass"),(0,r.kt)(m.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> executeInstructions(int n, vector<int>& startPos, string s) {\n        int m = s.size(), h = m + n, v = m + n;\n        vector<int> hor((m + n) * 2, m), ver((m + n) * 2, m), ans(m);\n        for (int i = m - 1; i >= 0; i--) {\n            hor[h] = ver[v] = i;\n            if (s[i] == 'L') h++;\n            if (s[i] == 'R') h--;\n            if (s[i] == 'D') v--;\n            if (s[i] == 'U') v++;\n            ans[i] = min({\n                m, \n                hor[h - startPos[1] - 1], \n                hor[h - startPos[1] + n], \n                ver[v - startPos[0] - 1], \n                ver[v + startPos[0] * -1 + n]\n            }) - i;\n        }\n        return ans;\n    }    \n};\n")),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))))}u.isMDXComponent=!0},8539:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(67294);function s(e){var a=e.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",a))}}}]);