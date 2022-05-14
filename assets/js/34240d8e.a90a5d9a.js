"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[94],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3473:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/count-all-possible-routes/"},s="1575 - Count All Possible Routes (Hard)",p={unversionedId:"1500-1599/count-all-possible-routes-hard",id:"1500-1599/count-all-possible-routes-hard",title:"1575 - Count All Possible Routes (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/count-all-possible-routes/",source:"@site/solutions/1500-1599/1575-count-all-possible-routes-hard.md",sourceDirName:"1500-1599",slug:"/1500-1599/count-all-possible-routes-hard",permalink:"/solutions/1500-1599/count-all-possible-routes-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1500-1599/1575-count-all-possible-routes-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:1575,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-all-possible-routes/"},sidebar:"tutorialSidebar",previous:{title:"1572 - Matrix Diagonal Sum (Easy)",permalink:"/solutions/1500-1599/matrix-diagonal-sum-easy"},next:{title:"1584 - Min Cost to Connect All Points (Medium)",permalink:"/solutions/1500-1599/min-cost-to-connect-all-points-medium"}},u={},c=[{value:"Problem Statement:",id:"problem-statement",level:2},{value:"Approach 1:  Dynamic Programming",id:"approach-1--dynamic-programming",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1575---count-all-possible-routes-hard"},"1575 - Count All Possible Routes (Hard)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement:"),(0,i.kt)("p",null,"You are given an array of ",(0,i.kt)("strong",{parentName:"p"},"distinct")," positive integers locations where ",(0,i.kt)("inlineCode",{parentName:"p"},"locations[i]")," represents the position of city ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),". You are also given integers ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"finish")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fuel")," representing the starting city, ending city, and the initial amount of fuel you have, respectively."),(0,i.kt)("p",null,"At each step, if you are at city ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),", you can pick any city ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," such that ",(0,i.kt)("inlineCode",{parentName:"p"},"j != i")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0 <= j < locations.length")," and move to city ",(0,i.kt)("inlineCode",{parentName:"p"},"j"),". Moving from city ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," to city ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," reduces the amount of fuel you have by ",(0,i.kt)("inlineCode",{parentName:"p"},"|locations[i] - locations[j]|"),". Please notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"|x|")," denotes the absolute value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,i.kt)("p",null,"Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"fuel")," ",(0,i.kt)("strong",{parentName:"p"},"cannot")," become negative at any point in time, and that you are ",(0,i.kt)("strong",{parentName:"p"},"allowed")," to visit any city more than once (including ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"finish"),")."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the count of all possible routes from")," ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," ",(0,i.kt)("em",{parentName:"p"},"to")," ",(0,i.kt)("inlineCode",{parentName:"p"},"finish"),". Since the answer may be too large, return it modulo ",(0,i.kt)("inlineCode",{parentName:"p"},"109 + 7"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: locations = [2,3,6,8,4], start = 1, finish = 3, fuel = 5\nOutput: 4\nExplanation: The following are all possible routes, each uses 5 units of fuel:\n1 -> 3\n1 -> 2 -> 3\n1 -> 4 -> 3\n1 -> 4 -> 2 -> 3\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: locations = [4,3,1], start = 1, finish = 0, fuel = 6\nOutput: 5\nExplanation: The following are all possible routes:\n1 -> 0, used fuel = 1\n1 -> 2 -> 0, used fuel = 5\n1 -> 2 -> 1 -> 0, used fuel = 5\n1 -> 0 -> 1 -> 0, used fuel = 3\n1 -> 0 -> 1 -> 0 -> 1 -> 0, used fuel = 5\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: locations = [5,2,1], start = 0, finish = 2, fuel = 3\nOutput: 0\nExplanation: It is impossible to get from 0 to 2 using only 3 units of fuel since the shortest route needs 4 units of fuel.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2 <= locations.length <= 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= locations[i] <= 10^9")),(0,i.kt)("li",{parentName:"ul"},"All integers in ",(0,i.kt)("inlineCode",{parentName:"li"},"locations")," are ",(0,i.kt)("strong",{parentName:"li"},"distinct"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= start, finish < locations.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= fuel <= 200"))),(0,i.kt)("h2",{id:"approach-1--dynamic-programming"},"Approach 1:  Dynamic Programming"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int countRoutes(vector<int>& locations, int start, int finish, int fuel) {\n        int M = 1e9 + 7, ans = 0, n = locations.size();\n        // dp[i][j]: how many routes to reach finish from `i` using at most `j` fuel\n        vector<vector<int>> dp(n, vector<int>(fuel + 1, -1));\n        function<int(int,int)> dfs = [&](int from, int f) {\n            // fuel < 0 - not possible -> return 0\n            if (f < 0) return 0;\n            // calculated before -> return it directly\n            if (dp[from][f] != -1) return dp[from][f];\n            // if the starting point is the finishing point, \n            // then there is one way\n            int res = from == finish;\n            // try all locations\n            for (int to = 0; to < n; to++) {\n                // skip the same point\n                if (from == to) continue;\n                // move to next position and \n                // substract the fuel\n                (res += dfs(to, f - abs(locations[from] - locations[to]))) %= M;\n            }\n            // memoize the result\n            return dp[from][f] = res;\n        };\n        return dfs(start, fuel);\n    }\n};\n")))}d.isMDXComponent=!0}}]);