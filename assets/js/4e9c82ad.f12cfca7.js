"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7002],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return k}});var n=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,r=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),N=i(t),k=m,u=N["".concat(o,".").concat(k)]||N[k]||c[k]||r;return t?n.createElement(u,s(s({ref:e},l),{},{components:t})):n.createElement(u,s({ref:e},l))}));function k(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var r=t.length,s=new Array(r);s[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:m,s[1]=p;for(var i=2;i<r;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},9258:function(a,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=t(7462),m=t(3366),r=(t(7294),t(3905)),s=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/moving-average-from-data-stream/"},o="0346 - Moving Average from Data Stream (Easy)",i={unversionedId:"0300-0399/moving-average-from-data-stream-easy",id:"0300-0399/moving-average-from-data-stream-easy",title:"0346 - Moving Average from Data Stream (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/moving-average-from-data-stream/",source:"@site/solutions/0300-0399/0346-moving-average-from-data-stream-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/moving-average-from-data-stream-easy",permalink:"/solutions/0300-0399/moving-average-from-data-stream-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0300-0399/0346-moving-average-from-data-stream-easy.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652366253,formattedLastUpdatedAt:"5/12/2022",sidebarPosition:346,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/moving-average-from-data-stream/"},sidebar:"tutorialSidebar",previous:{title:"0344 - Reverse String (Easy)",permalink:"/solutions/0300-0399/reverse-string-easy"},next:{title:"0347 - Top K Frequent Elements (Medium)",permalink:"/solutions/0300-0399/top-k-frequent-elements-medium"}},l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Deque",id:"approach-1-deque",level:2}],N={toc:c};function k(a){var e=a.components,t=(0,m.Z)(a,s);return(0,r.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0346---moving-average-from-data-stream-easy"},"0346 - Moving Average from Data Stream (Easy)"),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window."),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"MovingAverage")," class:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MovingAverage(int size)")," Initializes the object with the size of the window ",(0,r.kt)("inlineCode",{parentName:"li"},"size"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"double next(int val)")," Returns the moving average of the last ",(0,r.kt)("inlineCode",{parentName:"li"},"size")," values of the stream.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input\n["MovingAverage", "next", "next", "next", "next"]\n[[3], [1], [10], [3], [5]]\nOutput\n[null, 1.0, 5.5, 4.66667, 6.0]\n\nExplanation\nMovingAverage movingAverage = new MovingAverage(3);\nmovingAverage.next(1); // return 1.0 = 1 / 1\nmovingAverage.next(10); // return 5.5 = (1 + 10) / 2\nmovingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3\nmovingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= size <= 1000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^5 <= val <= 10^5")),(0,r.kt)("li",{parentName:"ul"},"At most ",(0,r.kt)("inlineCode",{parentName:"li"},"10^4")," calls will be made to ",(0,r.kt)("inlineCode",{parentName:"li"},"next"),".")),(0,r.kt)("h2",{id:"approach-1-deque"},"Approach 1: Deque"),(0,r.kt)("p",null,"We define a deque ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"d")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," to store the values, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," to store the sum. If this is not a sliding window problem, for every move, we add the current value to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," and output ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"z"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum / (int) d.size()")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ze"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"deque<int> d;\nint sum = 0;\nfor (auto x : nums) {\n    sum += x;\n    d.push_back(x);\n    cout << (double) sum / (int) d.size() << endl;\n}\n")),(0,r.kt)("p",null,"In general, for sliding window, we have a pointer to track if it is within the window or not. Here we can check the size of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"d")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),". If it already has ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," elements, then we need to remove the one from the front (i.e. the leftmost one) before pushing the next one to the back. We also need to subtract the old value and add the new value to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class MovingAverage {\npublic:\n    deque<int> d;\n    int n, sum;\n    MovingAverage(int size) {\n        n = size;\n        sum = 0;\n    }\n    \n    double next(int val) {\n        // keep track the current sum to avoid recalculation\n        sum += val;\n        // window size is n. need to remove the first one\n        if (d.size() == n) {\n            // substract the first value\n            sum -= d.front();\n            // remove it from the deque\n            d.pop_front();\n        }\n        // add the new value\n        d.push_back(val);\n        // use double as '/' is integer division\n        return (double) sum / (int) d.size();\n    }\n};\n\n/**\n * Your MovingAverage object will be instantiated and called as such:\n * MovingAverage* obj = new MovingAverage(size);\n * double param_1 = obj->next(val);\n */\n")))}k.isMDXComponent=!0}}]);