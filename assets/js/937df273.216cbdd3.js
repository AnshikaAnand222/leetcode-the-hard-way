"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9773],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return h}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(t),h=r,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return t?n.createElement(d,p(p({ref:a},m),{},{components:t})):n.createElement(d,p({ref:a},m))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,p=new Array(s);p[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<s;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5108:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),p=["components"],i={description:"Author: @wingkwing | https://leetcode.com/problems/total-appeal-of-a-string/"},l="2262 - Total Appeal of A String (Hard)",o={unversionedId:"2200-2299/total-appeal-of-a-string-hard",id:"2200-2299/total-appeal-of-a-string-hard",title:"2262 - Total Appeal of A String (Hard)",description:"Author: @wingkwing | https://leetcode.com/problems/total-appeal-of-a-string/",source:"@site/solutions/2200-2299/2262-total-appeal-of-a-string-hard.md",sourceDirName:"2200-2299",slug:"/2200-2299/total-appeal-of-a-string-hard",permalink:"/solutions/2200-2299/total-appeal-of-a-string-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2262-total-appeal-of-a-string-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:2262,frontMatter:{description:"Author: @wingkwing | https://leetcode.com/problems/total-appeal-of-a-string/"},sidebar:"tutorialSidebar",previous:{title:"2261 - K Divisible Elements Subarrays (Medium)",permalink:"/solutions/2200-2299/k-divisible-elements-subarrays-medium"},next:{title:"2264 - Largest 3-Same-Digit Number in String (Easy)",permalink:"/solutions/2200-2299/largest-3-same-digit-number-in-string-easy"}},m={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],u={toc:c};function h(e){var a=e.components,t=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2262---total-appeal-of-a-string-hard"},"2262 - Total Appeal of A String (Hard)"),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"appeal")," of a string is the number of ",(0,s.kt)("strong",{parentName:"p"},"distinct")," characters found in the string."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"For example, the appeal of ",(0,s.kt)("inlineCode",{parentName:"li"},'"abbca"')," is ",(0,s.kt)("inlineCode",{parentName:"li"},"3")," because it has ",(0,s.kt)("inlineCode",{parentName:"li"},"3")," distinct characters: ",(0,s.kt)("inlineCode",{parentName:"li"},"'a'"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"'b'"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"'c'"),".")),(0,s.kt)("p",null,"Given a string ",(0,s.kt)("inlineCode",{parentName:"p"},"s"),", return ",(0,s.kt)("em",{parentName:"p"},"the ",(0,s.kt)("strong",{parentName:"em"},"total appeal of all of its substrings."))),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"substring")," is a contiguous sequence of characters within a string."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "abbca"\nOutput: 28\nExplanation: The following are the substrings of "abbca":\n- Substrings of length 1: "a", "b", "b", "c", "a" have an appeal of 1, 1, 1, 1, and 1 respectively. The sum is 5.\n- Substrings of length 2: "ab", "bb", "bc", "ca" have an appeal of 2, 1, 2, and 2 respectively. The sum is 7.\n- Substrings of length 3: "abb", "bbc", "bca" have an appeal of 2, 2, and 3 respectively. The sum is 7.\n- Substrings of length 4: "abbc", "bbca" have an appeal of 3 and 3 respectively. The sum is 6.\n- Substrings of length 5: "abbca" has an appeal of 3. The sum is 3.\nThe total sum is 5 + 7 + 7 + 6 + 3 = 28.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "code"\nOutput: 20\nExplanation: The following are the substrings of "code":\n- Substrings of length 1: "c", "o", "d", "e" have an appeal of 1, 1, 1, and 1 respectively. The sum is 4.\n- Substrings of length 2: "co", "od", "de" have an appeal of 2, 2, and 2 respectively. The sum is 6.\n- Substrings of length 3: "cod", "ode" have an appeal of 3 and 3 respectively. The sum is 6.\n- Substrings of length 4: "code" has an appeal of 4. The sum is 4.\nThe total sum is 4 + 6 + 6 + 4 = 20.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s")," consists of lowercase English letters.")),(0,s.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,s.kt)("p",null,"Observation: The appeal of all substrings ending at ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),"-th is that ending at ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i - 1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))),"th  plus the number of substrings that don't contain ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),", which can be calculated by tracking the last occurrence."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    long long appealSum(string s) {\n        long long ans = 0, cnt = 1, n = s.size();\n        unordered_map<int, int> last;\n        last[s[0]] = 1;\n        for (int i = 0; i < n; i++) {\n            cnt += i - last[s[i]] + 1;\n            last[s[i]] = i + 1;\n            ans += cnt;\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);