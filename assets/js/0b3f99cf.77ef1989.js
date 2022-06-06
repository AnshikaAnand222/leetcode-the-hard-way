"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6097],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70903:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(8539),s=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/edit-distance/"},m="0072 - Edit Distance (Hard)",l={unversionedId:"0000-0099/edit-distance-hard",id:"0000-0099/edit-distance-hard",title:"0072 - Edit Distance (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/edit-distance/",source:"@site/solutions/0000-0099/0072-edit-distance-hard.md",sourceDirName:"0000-0099",slug:"/0000-0099/edit-distance-hard",permalink:"/leetcode-the-hard-way/solutions/0000-0099/edit-distance-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0000-0099/0072-edit-distance-hard.md",tags:[],version:"current",sidebarPosition:72,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/edit-distance/"},sidebar:"tutorialSidebar",previous:{title:"0069 - Sqrt(x) (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/sqrt-x-easy"},next:{title:"0078 - Subsets (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/subsets-medium"}},d={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0072---edit-distance-hard"},"0072 - Edit Distance (Hard)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/edit-distance/"},"https://leetcode.com/problems/edit-distance/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given two strings ",(0,i.kt)("inlineCode",{parentName:"p"},"word1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"word2"),", return ",(0,i.kt)("em",{parentName:"p"},"the minimum number of operations required to convert ",(0,i.kt)("inlineCode",{parentName:"em"},"word1")," to ",(0,i.kt)("inlineCode",{parentName:"em"},"word2")),"."),(0,i.kt)("p",null,"You have the following three operations permitted on a word:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Insert a character"),(0,i.kt)("li",{parentName:"ul"},"Delete a character"),(0,i.kt)("li",{parentName:"ul"},"Replace a character")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: word1 = \"horse\", word2 = \"ros\"\nOutput: 3\nExplanation: \nhorse -> rorse (replace 'h' with 'r')\nrorse -> rose (remove 'r')\nrose -> ros (remove 'e')\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: word1 = \"intention\", word2 = \"execution\"\nOutput: 5\nExplanation: \nintention -> inention (remove 't')\ninention -> enention (replace 'i' with 'e')\nenention -> exention (replace 'n' with 'x')\nexention -> exection (replace 'n' with 'c')\nexection -> execution (insert 'u')\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= word1.length, word2.length <= 500")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"word1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"word2")," consist of lowercase English letters.")),(0,i.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,i.kt)("p",null,"Edit distance is a classic DP problem. It is used to quantify the dissimilarity of two given strings by counting the minimum possible number of operations required to transform one string into the other."),(0,i.kt)("p",null,"Given that the constraints, we assume that a O(m ","*"," n) solution would pass."),(0,i.kt)("p",null,"Let's define ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[i][j]")," as the minimum edit distance between the first ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," character of ",(0,i.kt)("inlineCode",{parentName:"p"},"word1")," and the first ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," characters of ",(0,i.kt)("inlineCode",{parentName:"p"},"word2"),". In example 1, ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[3][2]")," would be the edit distance between ",(0,i.kt)("inlineCode",{parentName:"p"},"word1[1..3]")," (HOR) and ",(0,i.kt)("inlineCode",{parentName:"p"},"word2[1..2]"),"(RO)."),(0,i.kt)("p",null,"If the last character is the same, then ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[i][j]")," would be ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[i - 1][j - 1]")," because we don't need to perform any operation. Otherwise, we need to perform either one. There are three possible ways to do the transformation."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We can transform ",(0,i.kt)("inlineCode",{parentName:"li"},"word1[1..i]")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"word2[1..j-1]")," by adding ",(0,i.kt)("inlineCode",{parentName:"li"},"word2[j]")," afterwards to get ",(0,i.kt)("inlineCode",{parentName:"li"},"word2[1..j]"),"."),(0,i.kt)("li",{parentName:"ol"},"We can transform ",(0,i.kt)("inlineCode",{parentName:"li"},"word1[1..i-1]")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"word2[1..j]")," by deleting ",(0,i.kt)("inlineCode",{parentName:"li"},"word1[i]"),"."),(0,i.kt)("li",{parentName:"ol"},"We can transform ",(0,i.kt)("inlineCode",{parentName:"li"},"word1[1..i-1]")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"word2[1..j-1]")," by exchanging the original ",(0,i.kt)("inlineCode",{parentName:"li"},"word1[i]")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"word2[j]"),".")),(0,i.kt)("p",null,"Therefore, the transition would be ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[i][j] = 1 + min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"word1[i]")," is not equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"word2[j]"),"."),(0,i.kt)("p",null,"What is the base case then? The base case is simply an edit distance between the empty string and non-empty string, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[i][0] = i")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[0][j] = j"),". The answer would be ",(0,i.kt)("inlineCode",{parentName:"p"},"dp[m][n]"),". This algorithm is also known as Wagner\u2013Fischer algorithm."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/168303382-cadaf726-02e3-400d-a8cc-fd0c7db315c3.png",alt:"image"})),(0,i.kt)("p",null,"Time Complexity: ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"m"),(0,i.kt)("mo",{parentName:"mrow"},"\u2217"),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m * n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,i.kt)("p",null,"Space Complexity: ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"m"),(0,i.kt)("mo",{parentName:"mrow"},"\u2217"),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m * n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,i.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        int m = (int) word1.size();\n        int n = (int) word2.size();\n        int dp[m + 1][n + 1];\n        memset(dp, 0, sizeof(dp));\n        for (int i = 1; i <= m; i++) dp[i][0] = i;\n        for (int j = 1; j <= n; j++) dp[0][j] = j;\n        for (int i = 1; i <= m; i++){\n            for(int j = 1; j <= n; j++){\n                if(word1[i - 1] == word2[j - 1]) { // a = b\n                    dp[i][j] = dp[i - 1][j - 1]; \n                } else {\n                    // find out the min cost for all three actions\n                    dp[i][j] = 1 + min({\n                        dp[i - 1][j - 1], // replace a with b\n                        dp[i - 1][j],     // delete a\n                        dp[i][j - 1]      // insert b after a\n                    });\n                }\n            }\n        }\n        return dp[m][n];\n    }\n};\n")))}h.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",t))}}}]);