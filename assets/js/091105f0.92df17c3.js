"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4032],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),h=r,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8422:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-1-bits/"},l="0191 - Number of 1 Bits (Easy)",s={unversionedId:"0100-0199/number-of-1-bits-easy",id:"0100-0199/number-of-1-bits-easy",title:"0191 - Number of 1 Bits (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-1-bits/",source:"@site/solutions/0100-0199/0191-number-of-1-bits-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/number-of-1-bits-easy",permalink:"/solutions/0100-0199/number-of-1-bits-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0100-0199/0191-number-of-1-bits-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:191,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-1-bits/"},sidebar:"tutorialSidebar",previous:{title:"0169 - Majority Element (Easy)",permalink:"/solutions/0100-0199/majority-element-easy"},next:{title:"0199 - Binary Tree Right Side View (Medium)",permalink:"/solutions/0100-0199/binary-tree-right-side-view-medium"}},u={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Built-in Function",id:"approach-1-built-in-function",level:2},{value:"C++",id:"c",level:3},{value:"Python 3",id:"python-3",level:3},{value:"Go ",id:"go-",level:3},{value:"Approach 2: Bit Manipulation",id:"approach-2-bit-manipulation",level:2},{value:"C++",id:"c-1",level:3},{value:"Approach 3: n &amp; (n - 1)",id:"approach-3-n--n---1",level:2},{value:"C++",id:"c-2",level:3}],c={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0191---number-of-1-bits-easy"},"0191 - Number of 1 Bits (Easy)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Hamming_weight"},"Hamming weight"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned."),(0,i.kt)("li",{parentName:"ul"},"In Java, the compiler represents the signed integers using ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Two's_complement"},"2's complement notation"),". Therefore, in ",(0,i.kt)("strong",{parentName:"li"},"Example 3"),", the input represents the signed integer. ",(0,i.kt)("inlineCode",{parentName:"li"},"-3"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 00000000000000000000000000001011\nOutput: 3\nExplanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 00000000000000000000000010000000\nOutput: 1\nExplanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 11111111111111111111111111111101\nOutput: 31\nExplanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits. \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The input must be a ",(0,i.kt)("strong",{parentName:"li"},"binary string")," of length ",(0,i.kt)("inlineCode",{parentName:"li"},"32"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Follow up:")," If this function is called many times, how would you optimize it?"),(0,i.kt)("h2",{id:"approach-1-built-in-function"},"Approach 1: Built-in Function"),(0,i.kt)("h3",{id:"c"},"C++"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        return __builtin_popcount(n);\n    }\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        return bitset<32>(n).count();\n    }\n}\n")),(0,i.kt)("h3",{id:"python-3"},"Python 3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def hammingWeight(self, n: int) -> int:\n        return bin(n).count('1')\n")),(0,i.kt)("h3",{id:"go-"},"Go"," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func hammingWeight(num uint32) int {\n    return bits.OnesCount32(num);\n}\n")),(0,i.kt)("h2",{id:"approach-2-bit-manipulation"},"Approach 2: Bit Manipulation"),(0,i.kt)("p",null,"We check each parity of teach bit. Increase ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"a"),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mi",{parentName:"mrow"},"s")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," by 1 if the bit is set."),(0,i.kt)("h3",{id:"c-1"},"C++"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        int ans = 0;\n        while (n) {\n            if (n & 1) ans++;\n            n >>= 1; // or n /= 2;\n        }\n        return ans;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-3-n--n---1"},"Approach 3: n & (n - 1)"),(0,i.kt)("p",null,"We can optimise approach 2. Instead of checking all digits, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"n & (n - 1)")," to remove the rightmost set bit."," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"n     n     n - 1  n & (n - 1)\n--   ----   ----   -------\n 0   0000   0111    0000\n 1   0001   0000    0000\n 2   0010   0001    0000\n 3   0011   0010    0010\n 4   0100   0011    0000\n 5   0101   0100    0100\n 6   0110   0101    0100\n 7   0111   0110    0110\n 8   1000   0111    0000 \n 9   1001   1000    1000\n10   1010   1001    1000\n11   1011   1010    1010\n12   1100   1011    1000\n13   1101   1100    1100\n14   1110   1101    1100\n15   1111   1110    1110\n")),(0,i.kt)("h3",{id:"c-2"},"C++"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        int ans = 0;\n        for (; n; n = n & (n - 1)) ans++;\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);