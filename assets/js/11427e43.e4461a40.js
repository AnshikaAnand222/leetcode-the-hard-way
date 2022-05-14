"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8355],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1575:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/all-elements-in-two-binary-search-trees/"},s="1305 - All Elements in Two Binary Search Trees (Medium)",p={unversionedId:"1300-1399/all-elements-in-two-binary-search-trees-medium",id:"1300-1399/all-elements-in-two-binary-search-trees-medium",title:"1305 - All Elements in Two Binary Search Trees (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/all-elements-in-two-binary-search-trees/",source:"@site/solutions/1300-1399/1305-all-elements-in-two-binary-search-trees-medium.md",sourceDirName:"1300-1399",slug:"/1300-1399/all-elements-in-two-binary-search-trees-medium",permalink:"/solutions/1300-1399/all-elements-in-two-binary-search-trees-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1300-1399/1305-all-elements-in-two-binary-search-trees-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652451816,formattedLastUpdatedAt:"5/13/2022",sidebarPosition:1305,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/all-elements-in-two-binary-search-trees/"},sidebar:"tutorialSidebar",previous:{title:"1300 - 1399",permalink:"/solutions/1300-1399/"},next:{title:"1328 - Break a Palindrome (Medium)",permalink:"/solutions/1300-1399/break-a-palindrome-medium"}},d={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Pre-order",id:"pre-order",level:3},{value:"In-order",id:"in-order",level:3},{value:"Post-order",id:"post-order",level:3},{value:"Approach 1: DFS Traversal and Sorting ",id:"approach-1-dfs-traversal-and-sorting-",level:2},{value:"Approach 2: In-order Traversal + Merging",id:"approach-2-in-order-traversal--merging",level:2}],m={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1305---all-elements-in-two-binary-search-trees-medium"},"1305 - All Elements in Two Binary Search Trees (Medium)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given two binary search trees ",(0,o.kt)("inlineCode",{parentName:"p"},"root1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"root2"),", return ",(0,o.kt)("em",{parentName:"p"},"a list containing all the integers from both trees sorted in ",(0,o.kt)("strong",{parentName:"em"},"ascending")," order"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/12/18/q2-e1.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root1 = [2,1,4], root2 = [1,0,3]\nOutput: [0,1,1,2,3,4]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/12/18/q2-e5-.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root1 = [1,null,8], root2 = [8,1]\nOutput: [1,1,8,8]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes in each tree is in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[0, 5000]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10^5 <= Node.val <= 10^5"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"There are different ways to traverse trees - In-order, Pre-order, and Post-order. Supposing we have a binary tree with 5 nodes,"," "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/168303628-5830a3ca-7e36-4751-893b-09443e44bdc7.png",alt:"image"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Traversal"),(0,o.kt)("th",{parentName:"tr",align:null},"Path"),(0,o.kt)("th",{parentName:"tr",align:null},"Order"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pre-order"),(0,o.kt)("td",{parentName:"tr",align:null},"1 -> 2-> 4-> 5-> 3"),(0,o.kt)("td",{parentName:"tr",align:null},"Root > Left > Right")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"In-order"),(0,o.kt)("td",{parentName:"tr",align:null},"4 -> 2-> 5-> 1-> 3"),(0,o.kt)("td",{parentName:"tr",align:null},"Left > Root > Right")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Post-order"),(0,o.kt)("td",{parentName:"tr",align:null},"4 -> 5-> 2-> 3-> 1"),(0,o.kt)("td",{parentName:"tr",align:null},"Left > Right >Root")))),(0,o.kt)("h3",{id:"pre-order"},"Pre-order"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void preorder(TreeNode* node) {\n    if (node == NULL) return;\n    s.push_back(node->val);\n    preorder(node->left);\n    preorder(node->right);\n}\n")),(0,o.kt)("h3",{id:"in-order"},"In-order"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void inorder(TreeNode* node) {\n    if (node == NULL) return;\n    inorder(node->left);\n    s.push_back(node->val);\n    inorder(node->right);\n}\n")),(0,o.kt)("h3",{id:"post-order"},"Post-order"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void postorder(TreeNode* node) {\n    if (node == NULL) return;\n    postorder(node->left);\n    postorder(node->right);\n    s.push_back(node->val);\n}\n")),(0,o.kt)("h2",{id:"approach-1-dfs-traversal-and-sorting-"},"Approach 1: DFS Traversal and Sorting"," "),(0,o.kt)("p",null," ","In this problem, we can use either one to traverse all nodes and put them into a common array. We sort the array at the end."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> s;\n    \n    void dfs(TreeNode* node) {\n        if (node == NULL) return;\n        dfs(node->left);\n        s.push_back(node->val);\n        dfs(node->right);\n    }\n    \n    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {\n        dfs(root1);\n        dfs(root2);\n        sort(s.begin(), s.end());\n        return s;\n    }\n};\n")),(0,o.kt)("p",null,"However, we can see the in-order traversal is faster than the other two. This is because the array is already sorted after the traversal for binary tree. In example 1, after the traversal, we will have ","[","1, 2, 4] and ","[","0, 1, 3]."," "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Traversal"),(0,o.kt)("th",{parentName:"tr",align:null},"Runtime"),(0,o.kt)("th",{parentName:"tr",align:null},"Memory"),(0,o.kt)("th",{parentName:"tr",align:null},"Language"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pre-order"),(0,o.kt)("td",{parentName:"tr",align:null},"309 ms"),(0,o.kt)("td",{parentName:"tr",align:null},"85.4 MB"),(0,o.kt)("td",{parentName:"tr",align:null},"cpp")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"In-order"),(0,o.kt)("td",{parentName:"tr",align:null},"132 ms"),(0,o.kt)("td",{parentName:"tr",align:null},"85.3 MB"),(0,o.kt)("td",{parentName:"tr",align:null},"cpp")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Post-order"),(0,o.kt)("td",{parentName:"tr",align:null},"211 ms"),(0,o.kt)("td",{parentName:"tr",align:null},"85.4 MB"),(0,o.kt)("td",{parentName:"tr",align:null},"cpp")))),(0,o.kt)("h2",{id:"approach-2-in-order-traversal--merging"},"Approach 2: In-order Traversal + Merging"),(0,o.kt)("p",null,'As we know In-order traversal will make the array sorted, the remaining problem is same as "merging two sorted arrays into one". '," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void inorder(TreeNode* node, vector<int>& res) {\n        if (node == NULL) return;\n        inorder(node->left, res);\n        res.push_back(node->val);\n        inorder(node->right, res);\n    }\n    \n    vector<int> merge(vector<int>& a, vector<int>& b) {\n        vector<int> res;\n        int n = (int) a.size(), m = (int) b.size();\n        int i = 0, j = 0;\n        while (i < n && j < m) {\n            if (a[i] < b[j]) res.push_back(a[i++]);\n            else res.push_back(b[j++]);\n        }\n        while (i < n) res.push_back(a[i++]);\n        while (j < m) res.push_back(b[j++]);\n        return res;\n    }\n    \n    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {\n        vector<int> a, b;\n        inorder(root1, a); inorder(root2, b);\n        return merge(a, b);\n    }\n};\n")))}c.isMDXComponent=!0}}]);