"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3917],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),k=o(a),h=r,N=k["".concat(m,".").concat(h)]||k[h]||c[h]||s;return a?n.createElement(N,p(p({ref:t},i),{},{components:a})):n.createElement(N,p({ref:t},i))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=k;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var o=2;o<s;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4592:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),p=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/"},m="2194 - Cells in a Range on an Excel Sheet (Easy)",o={unversionedId:"2100-2199/cells-in-a-range-on-an-excel-sheet-easy",id:"2100-2199/cells-in-a-range-on-an-excel-sheet-easy",title:"2194 - Cells in a Range on an Excel Sheet (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/",source:"@site/solutions/2100-2199/2194-cells-in-a-range-on-an-excel-sheet-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/cells-in-a-range-on-an-excel-sheet-easy",permalink:"/solutions/2100-2199/cells-in-a-range-on-an-excel-sheet-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2194-cells-in-a-range-on-an-excel-sheet-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:2194,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/"},sidebar:"tutorialSidebar",previous:{title:"2193 - Minimum Number of Moves to Make Palindrome (Hard)",permalink:"/solutions/2100-2199/minimum-number-of-moves-to-make-palindrome-hard"},next:{title:"2195 - Append K Integers With Minimal Sum (Medium)",permalink:"/solutions/2100-2199/append-k-integers-with-minimal-sum-medium"}},i={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Loops",id:"approach-1-loops",level:2}],k={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2194---cells-in-a-range-on-an-excel-sheet-easy"},"2194 - Cells in a Range on an Excel Sheet (Easy)"),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"A cell ",(0,s.kt)("inlineCode",{parentName:"p"},"(r, c)")," of an excel sheet is represented as a string ",(0,s.kt)("inlineCode",{parentName:"p"},'"<col><row>"')," where:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"<col>")," denotes the column number ",(0,s.kt)("inlineCode",{parentName:"li"},"c")," of the cell. It is represented by ",(0,s.kt)("strong",{parentName:"li"},"alphabetical letters"),".",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"For example, the ",(0,s.kt)("inlineCode",{parentName:"li"},"1st")," column is denoted by ",(0,s.kt)("inlineCode",{parentName:"li"},"'A'"),", the ",(0,s.kt)("inlineCode",{parentName:"li"},"2nd")," by ",(0,s.kt)("inlineCode",{parentName:"li"},"'B'"),", the ",(0,s.kt)("inlineCode",{parentName:"li"},"3rd")," by ",(0,s.kt)("inlineCode",{parentName:"li"},"'C'"),", and so on."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"<row>")," is the row number ",(0,s.kt)("inlineCode",{parentName:"li"},"r")," of the cell. The ",(0,s.kt)("inlineCode",{parentName:"li"},"rth")," row is represented by the ",(0,s.kt)("strong",{parentName:"li"},"integer")," ",(0,s.kt)("inlineCode",{parentName:"li"},"r"),".")),(0,s.kt)("p",null,"You are given a string ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," in the format ",(0,s.kt)("inlineCode",{parentName:"p"},'"<col1><row1>:<col2><row2>"'),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"<col1>")," represents the column ",(0,s.kt)("inlineCode",{parentName:"p"},"c1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"<row1>")," represents the row ",(0,s.kt)("inlineCode",{parentName:"p"},"r1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"<col2>")," represents the column ",(0,s.kt)("inlineCode",{parentName:"p"},"c2"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"<row2>")," represents the row ",(0,s.kt)("inlineCode",{parentName:"p"},"r2"),", such that ",(0,s.kt)("inlineCode",{parentName:"p"},"r1 <= r2")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"c1 <= c2"),"."),(0,s.kt)("p",null,"Return ",(0,s.kt)("em",{parentName:"p"},"the ",(0,s.kt)("strong",{parentName:"em"},"list of cells"))," ",(0,s.kt)("inlineCode",{parentName:"p"},"(x, y)")," ",(0,s.kt)("em",{parentName:"p"},"such that")," ",(0,s.kt)("inlineCode",{parentName:"p"},"r1 <= x <= r2")," ",(0,s.kt)("em",{parentName:"p"},"and")," ",(0,s.kt)("inlineCode",{parentName:"p"},"c1 <= y <= c2"),". The cells should be represented as ",(0,s.kt)("strong",{parentName:"p"},"strings")," in the format mentioned above and be sorted in ",(0,s.kt)("strong",{parentName:"p"},"non-decreasing")," order first by columns and then by rows."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/02/08/ex1drawio.png",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "K1:L2"\nOutput: ["K1","K2","L1","L2"]\nExplanation:\nThe above diagram shows the cells which should be present in the list.\nThe red arrows denote the order in which the cells should be presented.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/02/09/exam2drawio.png",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "A1:F1"\nOutput: ["A1","B1","C1","D1","E1","F1"]\nExplanation:\nThe above diagram shows the cells which should be present in the list.\nThe red arrow denotes the order in which the cells should be presented.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s.length == 5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"'A' <= s[0] <= s[3] <= 'Z'")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"'1' <= s[1] <= s[4] <= '9'")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s")," consists of uppercase English letters, digits and ",(0,s.kt)("inlineCode",{parentName:"li"},"':'"),".")),(0,s.kt)("h2",{id:"approach-1-loops"},"Approach 1: Loops"),(0,s.kt)("p",null,"Iterate each letter from ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[0]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[3]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," and iterate each number from ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[1]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[4]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," to build the answer."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<string> cellsInRange(string s) {\n        vector<string> ans;\n        // iterate each letter\n        for (char x = s[0]; x <= s[3]; x++) {\n            // iterate each number\n            for (int y = s[1] - '0'; y <= s[4] - '0'; y++) {\n                // build the answer\n                ans.push_back(x + to_string(y));\n            }\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);