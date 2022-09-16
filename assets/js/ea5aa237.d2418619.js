"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9128],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return t?n.createElement(y,l(l({ref:r},d),{},{components:t})):n.createElement(y,l({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58296:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n,o=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-inorder-traversal/",tags:["Stack","Tree","Depth-First Search","Binary Tree"]},p="0094 - Binary Tree Inorder Traversal (Easy)",d={unversionedId:"0000-0099/binary-tree-inorder-traversal-easy",id:"0000-0099/binary-tree-inorder-traversal-easy",title:"0094 - Binary Tree Inorder Traversal (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-inorder-traversal/",source:"@site/solutions/0000-0099/0094-binary-tree-inorder-traversal-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/binary-tree-inorder-traversal-easy",permalink:"/leetcode-the-hard-way/solutions/0000-0099/binary-tree-inorder-traversal-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0094-binary-tree-inorder-traversal-easy.md",tags:[{label:"Stack",permalink:"/leetcode-the-hard-way/solutions/tags/stack"},{label:"Tree",permalink:"/leetcode-the-hard-way/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/leetcode-the-hard-way/solutions/tags/depth-first-search"},{label:"Binary Tree",permalink:"/leetcode-the-hard-way/solutions/tags/binary-tree"}],version:"current",sidebarPosition:94,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-inorder-traversal/",tags:["Stack","Tree","Depth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0078 - Subsets (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/subsets-medium"},next:{title:"0100 - 0199",permalink:"/leetcode-the-hard-way/solutions/category/0100---0199"}},u={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Inorder Traversal",id:"approach-1-inorder-traversal",level:2}],m=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),y={toc:c};function h(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"0094---binary-tree-inorder-traversal-easy"},"0094 - Binary Tree Inorder Traversal (Easy)"),(0,l.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,l.kt)("p",null,"Given the ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,l.kt)("em",{parentName:"p"},"the inorder traversal of its nodes' values"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = [1,null,2,3]\nOutput: [1,3,2]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = []\nOutput: []\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 3:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = [1]\nOutput: [1]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constraints:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,l.kt)("inlineCode",{parentName:"li"},"[0, 100]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Follow up:")," Recursive solution is trivial, could you do it iteratively?"),(0,l.kt)("h2",{id:"approach-1-inorder-traversal"},"Approach 1: Inorder Traversal"),(0,l.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\n\n// Time Complexity: O(N)\n// Space Complexity: O(N)\n\n// This is a standard in-order traversal problem, I'd suggest to learn pre-order and post-order as well.\n// Here's a short tutorial if you're interested.\n// https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/binary-tree\n// then you may try the following problems \n// 144. Binary Tree Preorder Traversal: https://leetcode.com/problems/binary-tree-preorder-traversal/\n// 145. Binary Tree Postorder Traversal: https://leetcode.com/problems/binary-tree-postorder-traversal/\n\nclass Solution {\npublic:\n    vector<int> ans;\n    void inorder(TreeNode* node) {\n        if (node == NULL) return;\n        // traverse the left node\n        inorder(node->left);\n        // do something with node value here\n        ans.push_back(node->val);\n        // traverse the right node\n        inorder(node->right);\n    }\n    \n    vector<int> inorderTraversal(TreeNode* root) {\n        inorder(root);\n        return ans;\n    }\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n\nclass Solution:\n    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        # left -> root -> right\n        return self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right) if root else []\n")))}h.isMDXComponent=!0}}]);