"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[87811],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(m,o(o({ref:t},h),{},{components:n})):r.createElement(m,o({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return d}});var r,a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/"},p="2267 - Check if There Is a Valid Parentheses String Path (Hard)",h={unversionedId:"2200-2299/check-if-there-is-a-valid-parentheses-string-path-hard",id:"2200-2299/check-if-there-is-a-valid-parentheses-string-path-hard",title:"2267 - Check if There Is a Valid Parentheses String Path (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/",source:"@site/solutions/2200-2299/2267-check-if-there-is-a-valid-parentheses-string-path-hard.md",sourceDirName:"2200-2299",slug:"/2200-2299/check-if-there-is-a-valid-parentheses-string-path-hard",permalink:"/leetcode-the-hard-way/solutions/2200-2299/check-if-there-is-a-valid-parentheses-string-path-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2267-check-if-there-is-a-valid-parentheses-string-path-hard.md",tags:[],version:"current",sidebarPosition:2267,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/"},sidebar:"tutorialSidebar",previous:{title:"2266 - Count Number of Texts (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-number-of-texts-medium"},next:{title:"2273 - Find Resultant Array After Removing Anagrams (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/find-resultant-array-after-removing-anagrams-easy"}},c={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS + DP + Memo",id:"approach-1-dfs--dp--memo",level:2}],u=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),m={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2267---check-if-there-is-a-valid-parentheses-string-path-hard"},"2267 - Check if There Is a Valid Parentheses String Path (Hard)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/"},"https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"A parentheses string is a ",(0,o.kt)("strong",{parentName:"p"},"non-empty")," string consisting only of ",(0,o.kt)("inlineCode",{parentName:"p"},"'('")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"')'"),". It is ",(0,o.kt)("strong",{parentName:"p"},"valid")," if ",(0,o.kt)("strong",{parentName:"p"},"any")," of the following conditions is ",(0,o.kt)("strong",{parentName:"p"},"true"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is ",(0,o.kt)("inlineCode",{parentName:"li"},"()"),"."),(0,o.kt)("li",{parentName:"ul"},"It can be written as ",(0,o.kt)("inlineCode",{parentName:"li"},"AB")," (",(0,o.kt)("inlineCode",{parentName:"li"},"A")," concatenated with ",(0,o.kt)("inlineCode",{parentName:"li"},"B"),"), where ",(0,o.kt)("inlineCode",{parentName:"li"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"B")," are valid parentheses strings."),(0,o.kt)("li",{parentName:"ul"},"It can be written as ",(0,o.kt)("inlineCode",{parentName:"li"},"(A)"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"A")," is a valid parentheses string.")),(0,o.kt)("p",null,"You are given an ",(0,o.kt)("inlineCode",{parentName:"p"},"m x n")," matrix of parentheses ",(0,o.kt)("inlineCode",{parentName:"p"},"grid"),". A ",(0,o.kt)("strong",{parentName:"p"},"valid parentheses string path")," in the grid is a path satisfying ",(0,o.kt)("strong",{parentName:"p"},"all")," of the following conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The path starts from the upper left cell ",(0,o.kt)("inlineCode",{parentName:"li"},"(0, 0)"),"."),(0,o.kt)("li",{parentName:"ul"},"The path ends at the bottom-right cell ",(0,o.kt)("inlineCode",{parentName:"li"},"(m - 1, n - 1)"),"."),(0,o.kt)("li",{parentName:"ul"},"The path only ever moves ",(0,o.kt)("strong",{parentName:"li"},"down")," or ",(0,o.kt)("strong",{parentName:"li"},"right"),"."),(0,o.kt)("li",{parentName:"ul"},"The resulting parentheses string formed by the path is ",(0,o.kt)("strong",{parentName:"li"},"valid"),".")),(0,o.kt)("p",null,"Return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," ",(0,o.kt)("em",{parentName:"p"},"if there exists a ",(0,o.kt)("strong",{parentName:"em"},"valid parentheses string path")," in the grid.")," Otherwise, return ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/15/example1drawio.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]\nOutput: true\nExplanation: The above diagram shows two possible paths that form valid parentheses strings.\nThe first path shown results in the valid parentheses string "()(())".\nThe second path shown results in the valid parentheses string "((()))".\nNote that there may be other valid parentheses string paths.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/15/example2drawio.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: grid = [[")",")"],["(","("]]\nOutput: false\nExplanation: The two possible paths form the parentheses strings "))(" and ")((". Since neither of them are valid parentheses strings, we return false. \n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"m == grid.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == grid[i].length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"grid[i][j]")," is either ",(0,o.kt)("inlineCode",{parentName:"li"},"'('")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"')'"),".")),(0,o.kt)("h2",{id:"approach-1-dfs--dp--memo"},"Approach 1: DFS + DP + Memo"),(0,o.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool hasValidPath(vector<vector<char>>& grid) {\n        int n = grid.size(), m = grid[0].size(), mxN = 105;\n        vector<vector<vector<int>>> dp(mxN, vector<vector<int>>(mxN, vector<int>(mxN * 2, -1)));\n        function<bool(int, int, int)> dfs = [&](int i, int j, int k) -> bool {\n            // out of bound - return false\n            if (i == n || j == m) return false;\n            // count the overall balance\n            k += grid[i][j] == '(' ? 1 : -1;\n            // negative balance - return false\n            // e.g. ()) is invalid (k = -1)\n            if (k < 0) return false;\n            // if it reaches the target cell \n            // and the balance is 0, e.g. ((()))\n            // then return true \n            if (i == n - 1 && j == m - 1 && k == 0) return true;\n            // if the result is calculated before, return it directly\n            if (dp[i][j][k] != -1) return dp[i][j][k];\n            // otherwise, we either move right or move down\n            return dp[i][j][k] = dfs(i + 1, j, k) || dfs(i, j + 1, k);\n        };\n        // starting from top left cell with balance = 0\n        return dfs(0, 0, 0);\n    }\n};\n")))}f.isMDXComponent=!0}}]);