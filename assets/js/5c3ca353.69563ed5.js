"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9232],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},h),{},{components:n})):r.createElement(f,l({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1577:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={description:"Author: @heiheihang"},s="Breadth First Search",u={unversionedId:"graph-theory/breadth-first-search",id:"graph-theory/breadth-first-search",title:"Breadth First Search",description:"Author: @heiheihang",source:"@site/tutorials/graph-theory/breadth-first-search.md",sourceDirName:"graph-theory",slug:"/graph-theory/breadth-first-search",permalink:"/tutorials/graph-theory/breadth-first-search",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/graph-theory/breadth-first-search.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652365641,formattedLastUpdatedAt:"5/12/2022",frontMatter:{description:"Author: @heiheihang"},sidebar:"tutorialSidebar",previous:{title:"Binary Tree",permalink:"/tutorials/graph-theory/binary-tree"},next:{title:"Depth First Search",permalink:"/tutorials/graph-theory/depth-first-search"}},h={},p=[],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"breadth-first-search"},"Breadth First Search"),(0,o.kt)("p",null,"In Breadth-First Search (BFS), we explore ",(0,o.kt)("strong",{parentName:"p"},"all")," the closest nodes first before going one step further. A good example would be:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Given a binary tree, find the ",(0,o.kt)("strong",{parentName:"p"},"closest node")," from ",(0,o.kt)("strong",{parentName:"p"},"root")," that has the ",(0,o.kt)("strong",{parentName:"p"},"value 3"))),(0,o.kt)("p",null,"Of course, you may use DFS to find the solution by iterating all nodes. However, as you can imagine, if the target node is the right child of the root, we have wasted so much time iterating the entire left branch of the root!"),(0,o.kt)("p",null,"BFS would immediately locate the closest target node without wasting time iterating deeper nodes."),(0,o.kt)("p",null,"We will introduce the following template for BFS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def findTargetNode(root, targetValue):\n    if(root is None):\n        return None\n    \n    #currentLevel contains the nodes with the same distance to root (closest so far)\n    currentLevel = [root]\n    \n    #we increase our depth one by one as long as there is still node\n    while(len(level) > 0):\n    \n        #we store the current level node's children in nextLevel\n        nextLevel = []\n        \n        for node in currentLevel:\n            #skip if the node is None\n            if(node is None):\n                continue\n            #we can be sure the target node is the CLOSEST so we can return\n            #because we are traversing the tree level by level\n            if(node.val == targetValue):\n                return node\n                \n            #add the children to nextLevel\n            nextLevel.append(node.left)\n            nextLevel.append(node.right)\n        #change the currentLevel to nextLevel (no target node in this level, go next)\n        currentLevel = nextLevel\n    \n    #if no target node has been returned    \n    return None\n    \n    \n")),(0,o.kt)("p",null,"In general, we use a ",(0,o.kt)("strong",{parentName:"p"},"queue")," to model ",(0,o.kt)("strong",{parentName:"p"},"BFS.")," As the head of the queue represents the closest nodes, and the tail of the queue represents the furthest nodes. We look at the head of the queue, and add new nodes to the end of the queue."),(0,o.kt)("p",null,"We can start applying this template to the following problem (",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/average-of-levels-in-binary-tree/"},"LeetCode Link"),")."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Given the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,o.kt)("em",{parentName:"p"},"the average value of the nodes on each level in the form of an array"),". Answers within ",(0,o.kt)("inlineCode",{parentName:"p"},"10-5")," of the actual answer will be accepted.")),(0,o.kt)("p",null,"In this problem, our primary goal is to separate the tree into different levels. For example, we have these following levels:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"[1]")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"[2,3]")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"[4, _, 3, 5]"))),(0,o.kt)("p",null,"When we can separate the tree into different levels, we are just one step before obtaining the solution (which is just getting the averages of each list)"),(0,o.kt)("p",null,"The challenge here is how can we separate the tree into different levels. We can use the template above with ",(0,o.kt)("inlineCode",{parentName:"p"},"currentLevel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nextLevel"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def findAverageOfLevels(root):\n\n    answer = []\n    \n    #saves the nodes in the currentLevel\n    currentLevel = [root]\n    \n    #continue traversing as long as there is still unexplored nodes\n    while(len(level) > 0):\n    \n        #stores the children of the nodes in the currentLevel\n        nextLevel = []\n        \n        #stores the total sum of the currentLevel nodes\n        currentLevelSum = 0\n        for node in currentLevel:\n            if(node is None):\n                continue\n            currentLevelSum += node.val\n            nextLevel.append(node.left)\n            nextLevel.append(node.right)\n        \n        #calculate the level average\n        currentLevelNodeCount = len(currentLevel)\n        currentLevelAverage = currentLevelSum / currentLevelNodeCount\n        answer.append(currnetLevelAverage)\n        \n        #explore the nextLevel\n        currentLevel = nextLevel\n    return answer\n")),(0,o.kt)("p",null,"We should keep practising the this template of BFS in these similar problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Binary Tree Right Side View (",(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/binary-tree-right-side-view/"},"LeetCode Link"),") (Guide)"),(0,o.kt)("li",{parentName:"ul"},"Binary Tree Zigzag Level Order Traversal (",(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},"LeetCode Link"),") (Guide)"),(0,o.kt)("li",{parentName:"ul"},"Symmetric Tree (",(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/symmetric-tree/"},"LeetCode Link"),") (Guide)")))}d.isMDXComponent=!0}}]);