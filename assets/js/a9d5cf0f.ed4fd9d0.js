"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9158],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),k=r,m=d["".concat(u,".").concat(k)]||d[k]||s[k]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1820:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],p={},u="Graph\u5716\u5f62",o={unversionedId:"DataStructures/Graph",id:"DataStructures/Graph",title:"Graph\u5716\u5f62",description:"\u5716\u5f62\u662f\u5305\u542b\u9ede\u548c\u9023\u63a5\u9ede\u7684\u908a\uff0c\u6240\u7d44\u6210\u7684\u96e2\u6563\u7d50\u69cb\u3002\u53ef\u7528\u4f86\u63cf\u8ff0\u8a31\u591a\u5be6\u969b\u554f\u984c\u3002",source:"@site/docs/DataStructures/Graph.md",sourceDirName:"DataStructures",slug:"/DataStructures/Graph",permalink:"/docs/DataStructures/Graph",editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/DataStructures/Graph.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7db2\u8def\u57fa\u790e",permalink:"/docs/BasicKnowlege/\u7db2\u8def\u57fa\u790e"},next:{title:"Recursion",permalink:"/docs/DataStructures/Recursion"}},c=[{value:"\u554f\u984c\u7684\u5716\u5f62\u8868\u793a\u6cd5",id:"\u554f\u984c\u7684\u5716\u5f62\u8868\u793a\u6cd5",children:[],level:2},{value:"\u5c08\u6709\u540d\u8a5e",id:"\u5c08\u6709\u540d\u8a5e",children:[],level:2},{value:"\u5716\u5f62\u7684\u8cc7\u6599\u8868\u793a",id:"\u5716\u5f62\u7684\u8cc7\u6599\u8868\u793a",children:[{value:"\u76f8\u9130\u77e9\u9663(adjacent matrix)",id:"\u76f8\u9130\u77e9\u9663adjacent-matrix",children:[],level:3},{value:"\u76f8\u9130\u4e32\u5217(adjacent list)",id:"\u76f8\u9130\u4e32\u5217adjacent-list",children:[],level:3}],level:2},{value:"SSAD - Single source / All destination",id:"ssad---single-source--all-destination",children:[],level:2},{value:"All Pairs",id:"all-pairs",children:[],level:2},{value:"Search",id:"search",children:[{value:"DFS\u6df1\u5148\u641c\u5c0b",id:"dfs\u6df1\u5148\u641c\u5c0b",children:[],level:3},{value:"BFS\u5ee3\u5148\u641c\u5c0b",id:"bfs\u5ee3\u5148\u641c\u5c0b",children:[],level:3}],level:2}],s={toc:c};function d(e){var t=e.components,p=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graph\u5716\u5f62"},"Graph\u5716\u5f62"),(0,i.kt)("p",null,"\u5716\u5f62\u662f\u5305\u542b\u9ede\u548c\u9023\u63a5\u9ede\u7684\u908a\uff0c\u6240\u7d44\u6210\u7684\u96e2\u6563\u7d50\u69cb\u3002\u53ef\u7528\u4f86\u63cf\u8ff0\u8a31\u591a\u5be6\u969b\u554f\u984c\u3002\n\u5716\u5f62Graph\u662f\u975e\u5e38\u5ee3\u6cdb\u4f7f\u7528\u7684\u8cc7\u6599\u7d50\u69cb\uff0c\u8a31\u591a\u5e38\u898b\u554f\u984c\u53ef\u7528\u300c\u9ede\u300d(vertex)\u548c\u300c\u908a\u300d(edge)\uff0c\u63cf\u7e6a\u51fa\u5c0d\u61c9\u7684\u300c\u5716\u5f62\u8868\u793a\u6cd5\u300d(graph representation)\u3002\u5982\u6b64\u4e00\u4f86\uff0c\u5716\u5f62\u7406\u8ad6(graph theory)\u4e0a\u7684\u8a31\u591a\u6027\u8cea\u53ef\u88ab\u7528\u4f86\u89e3\u6c7a\u6240\u8f49\u63db\u7684\u554f\u984c\u3002"),(0,i.kt)("h2",{id:"\u554f\u984c\u7684\u5716\u5f62\u8868\u793a\u6cd5"},"\u554f\u984c\u7684\u5716\u5f62\u8868\u793a\u6cd5"),(0,i.kt)("p",null,"\u5e7e\u500b\u8457\u540d\u4e14\u53ef\u7528\u5716\u5f62\u63cf\u7e6a\u7684\u554f\u984c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u5c24\u62c9\u8ff4\u8defeulerian-circuit"},"\u5c24\u62c9\u8ff4\u8def(Eulerian Circuit)"),(0,i.kt)("p",{parentName:"li"},"\u200b\t\t\u897f\u51431763\u5e74\uff0c\u5c24\u62c9\u5229\u7528\u5716\u5f62\u4f86\u63cf\u7e6a\u6771\u666e\u9b6f\u662f\u67ef\u5c3c\u65af\u5821\u7684\u300c\u4e03\u6a4b\u554f\u984c\u300d(\u57161)\uff0c\u5716\u4e2d\u6709ABCD\u56db\u584a\u9678\u5730\u53ca\u4e03\u5ea7\u6a4b\u806f\u7d61\uff0c\u4e03\u6a4b\u554f\u984c\u5373\u76fc\u671b\u80fd\u8d70\u8a2a\u5404\u57ce\u5e02\u50c5\u7d93\u904e\u6240\u6709\u6a4b\u4e00\u6b21\u3002\u5c07\u57161\u8f49\u4ee5\u5716\u5f62\u8868\u793a\u6cd5\u5373\u70ba\u57162\uff0c\u540c\u6642\u5b9a\u7fa9\u539f\u4e03\u6a4b\u554f\u984c\u6b32\u5c0b\u8993\u7684\u65b9\u6cd5\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u300c\u5c24\u62c9\u8ff4\u8def(Euler tour(circuit))\u300d"),": \u81ea\u67d0\u9802\u9ede\u51fa\u767c\uff0c\u8d70\u904e\u6240\u6709\u908a\u6070\u597d\u4e00\u6b21\uff0c\u6700\u5f8c\u56de\u5230\u51fa\u767c\u9ede\uff1b",(0,i.kt)("strong",{parentName:"p"},"\u300c\u5c24\u62c9\u8def\u5f91(Eulerian path(walk))\u300d"),": \u5247\u8868\u793a\u8d77\u9ede\u53ca\u7d42\u9ede\u4e0d\u5fc5\u76f8\u540c\u3002"),(0,i.kt)("p",{parentName:"li"},"\u200b\t\t\u5c24\u62c9\u8b49\u660e : \u300e\u76f8\u9023\u5716\u5f62\u4e0a\u5b58\u5728\u5c24\u62c9\u8ff4\u8def\uff0c\u82e5\u4e14\u552f\u82e5\u6bcf\u4e00\u9802\u9ede\u7684\u5206\u652f\u5ea6(degree)\u7686\u70ba\u5076\u6578\u300f\u4e14\u300e\u76f8\u9023\u5716\u5f62\u4e0a\u5b58\u5728\u5c24\u62c9\u8def\u5f91\uff0c\u82e5\u4e14\u552f\u82e5\u4e14\u6709\u5169\u500b(\u6216\u6c92\u6709)\u9802\u9ede\u5206\u652f\u5ea6\u70ba\u5947\u6578\uff0c\u5176\u9918\u7686\u70ba\u5076\u6578\u300f\u3002\u4e03\u6a4b\u554f\u984c\u4e0d\u5b58\u5728\u5c24\u62c9\u8ff4\u8def\u53ca\u5c24\u62c9\u8def\u5f91\uff0c\u7121\u89e3\u3002\u6b64\u7a2e\u8f49\u63db\u554f\u984c\u4ee5\u9ede\u53ca\u908a\u8868\u793a\u7684\u62bd\u8c61\u6280\u5de7\uff0c\u5960\u5b9a\u4e86\u5716\u8ad6\u7814\u7a76\u7684\u57fa\u790e\u3002  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(6185).Z,width:"1926",height:"722"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u6f22\u7c73\u723e\u9813\u8ff4\u5708hamiltonian-cycle"},"\u6f22\u7c73\u723e\u9813\u8ff4\u5708(Hamiltonian Cycle)"),(0,i.kt)("p",{parentName:"li"},"\u6f22\u7c73\u723e\u9813\u63d0\u51fa\u4e00\u500b\u554f\u984c : \u5728\u5341\u4e8c\u9762\u9ad4\u4e2d\uff0c\u82e5\u6bcf\u4e00\u9802\u9ede\u4ee3\u8868\u4e00\u57ce\u5e02\uff0c\u80fd\u5426\u8d70\u904e\u6bcf\u4e00\u57ce\u5e02\u6070\u5de7\u4e00\u6b21\uff0c\u4e14\u56de\u5230\u539f\u51fa\u767c\u57ce\u5e02(\u5373\u6b64\u9ede\u6703\u7d93\u904e\u5169\u6b21)\u3002\u6b64\u554f\u984c\u8207\u5c24\u62c9\u8ff4\u8def\u985e\u4f3c\uff0c\u5dee\u7570\u5728\u65bc\u5c24\u62c9\u8ff4\u8def\u662f\u5e0c\u671b\u8d70\u904e\u6bcf\u500b\u300c\u908a\u300d\u4e00\u6b21(\u4ee5\u8ff4\u8def(Circuit)\u63cf\u8ff0\u6b64\u985e\u554f\u984c)\uff1b\u6b64\u554f\u984c\u5247\u662f\u8457\u91cd\u5728\u300c\u9ede\u300d(\u4ee5\u8ff4\u5708(Cycle)\u63cf\u8ff0)\uff0c\u4e14\u9019\u985e\u554f\u984c\u5c6c\u65bcNP-complete\u7684\u554f\u984c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u65c5\u884c\u92b7\u552e\u54e1\u554f\u984ctravel-salesman-problem"},"\u65c5\u884c\u92b7\u552e\u54e1\u554f\u984c(Travel Salesman problem)"),(0,i.kt)("p",{parentName:"li"},"TSP\u554f\u984c\u5e0c\u671b\u80fd\u8d70\u8a2a\u6bcf\u4e00\u500b\u9ede\u4e00\u6b21\uff0c\u540c\u6642\u8ffd\u6c42\u7e3d\u6210\u672c(\u8ddd\u96e2\u6216\u6642\u9593\u7b49)\u8981\u6700\u5c0f\u3002\u6c42\u89e3\u6b64\u554f\u984c\u7b49\u540c\u65bc\u5728\u5c0d\u61c9\u5716\u5f62\u4e0a\u627e\u5230\u6210\u672c\u7e3d\u548c\u6700\u5c0f\u7684\u6f22\u7c73\u723e\u9813\u8ff4\u5708\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u9802\u9ede\u8986\u84cb\u554f\u984cvertex-cover"},"\u9802\u9ede\u8986\u84cb\u554f\u984c(Vertex Cover)"),(0,i.kt)("p",{parentName:"li"},"\u5728\u535a\u7269\u9928\u4e2d\u6709\u8a31\u591a\u4ee5\u5169\u9802\u9ede\u9023\u6210\u7684\u908a\u4f5c\u70ba\u8d70\u9053\uff0c\u5e0c\u671b\u5728\u6700\u5c11\u7684\u9802\u9ede\u8655\u5b89\u88dd\u76e3\u8996\u5668\u76e3\u8996\u5176\u6240\u9023\u63a5\u7684\u8d70\u9053(\u6216\u516c\u5712\u5167\u653e\u7f6e\u6700\u5c11\u7684\u71c8\uff0c\u8b93\u4eba\u81f3\u5c11\u53ef\u770b\u5230\u4eae\u5149)\u3002\u8f49\u63db\u6210\u5716\u5f62\u53ef\u5982\u6b64\u63cf\u8ff0\uff1a\u6311\u9078\u6700\u5c11\u7684\u9802\u9ede\uff0c\u4f7f\u5f97\u4efb\u4f55\u4e00\u908a\u7684\u5169\u500b\u9802\u9ede\u4e2d\uff0c\u81f3\u5c11\u6709\u4e00\u9802\u9ede\u5728\u6240\u6311\u7684\u96c6\u5408\u4e2d\u3002\u4ee5\u57163\u4f86\u8aaa\uff0cAC\u53caDBE\u662f\u5169\u7d44\u53ef\u884c\u7684\u89e3\uff0c\u800cAC\u9019\u7d44\u59d0\u6240\u9700\u8f03\u5c11\u9802\u9ede\uff0c\u4e14\u6c92\u6709\u66f4\u5c11\u500b\u6578\u7684\u89e3\uff0c\u9f4a\u96c6\u552f\u9802\u9ede\u8986\u84cb\u554f\u984c\u7684\u89e3\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(6229).Z,width:"1480",height:"468"})))),(0,i.kt)("h2",{id:"\u5c08\u6709\u540d\u8a5e"},"\u5c08\u6709\u540d\u8a5e"),(0,i.kt)("p",null,"\u5e38\u7528G=(V,E)\u63cf\u8ff0\u5716\u5f62\uff0c\u5176\u4e2dV\u662f\u5305\u542b\u6240\u6709\u9802\u9ede\u7684\u6709\u9650\u96c6\u5408\uff0cE\u662f\u9023\u63a5V\u4e2d\u9802\u9ede\u7684\u908a\u6240\u69cb\u6210\u7684\u96c6\u5408\uff1bV={v1,v2,...,vn}\uff0cE={e1,e2,...,em}\uff0cn>0\uff0cm\u22670\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u7121\u5411\u5716\u6709\u5411\u5716"},"\u7121\u5411\u5716\u3001\u6709\u5411\u5716"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7121\u5411\u5716(undirected graph)"),(0,i.kt)("p",{parentName:"li"},"e=(v1,v2)\uff0c(v1,v2)\u548c(v2,v1)\u4ee3\u8868\u76f8\u540c\u7684\u908a\u3002"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u6a39(Tree)\u662f\u5716\u5f62\u7684\u90e8\u5206\u96c6\u5408\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6709\u5411\u5716(directed graph)"),(0,i.kt)("p",{parentName:"li"},"e=(v1,v2)\uff0cv1\u70ba\u982d(head)\uff1bv2\u70ba\u5c3e(tail)\uff0c(v1,v2)\u548c(v2,v1)\u4e0d\u662f\u76f8\u540c\u7684\u908a\u3002"))))),(0,i.kt)("p",null,"\u200b\t\t\t\u5728\u9019\u88e1\u8a0e\u8ad6\u7684\u5716\u82e5\u7121\u7279\u5225\u6307\u660e\u6307\u7684\u662f\u7121\u5411\u5716\uff0c\u4e14\u8a0e\u8ad6\u7684\u5716\u6709\u4e0b\u5217\u9650\u5236\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5716\u5f62\u4e2d\u4efb\u4f55\u9802\u9ede\u4e0d\u5141\u8a31\u6709\u9023\u63a5\u81ea\u5df1\u7684\u908a\uff0c\u4ea6\u5373\u6c92\u6709(v,v)\u3001(u,u)\u7684\u908a\u3002"),(0,i.kt)("p",{parentName:"li"},"=> \u7121\u9650\u5236\u5247\u7a31\u70ba\u300c\u81ea\u6211\u8ff4\u5708(self-loop)\u300d")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5716\u5f62\u4e2d\u7684\u908a\u4e0d\u5f97\u91cd\u8907\u3002"),(0,i.kt)("p",{parentName:"li"},"=> \u7121\u9650\u5236\u5247\u7a31\u70ba\u300c\u591a\u908a\u5716(multigraph)\u300d"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(1170).Z,width:"1480",height:"450"})))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u5b8c\u5099\u5716"},"\u5b8c\u5099\u5716"),(0,i.kt)("p",{parentName:"li"},"\u5728\u6709n\u500b\u9802\u9ede\u7684\u7121\u5411\u5716\u4e2d\uff0c\u81f3\u591a\u6709n(n-1)/2\u689d\u908a\u3002\u82e5\u8a72\u5716\u5f62\u78ba\u5be6\u6709n(n-1)/2\u689d\u908a\uff0c\u5247\u7a31\u70ba",(0,i.kt)("strong",{parentName:"p"},"\u5b8c\u5099\u5716(Complete graph)"),"\u3002"),(0,i.kt)("p",{parentName:"li"},"\u800c\u6709\u5411\u5716\u81f3\u591a\u6709n(n-1)\u689d\u908a\uff0c\u82e5\u7b26\u5408\u5247\u7a31\u70ba\u6709\u5411\u5b8c\u5099\u5716\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u76f8\u9130\u9023\u63a5\u5206\u652f\u5ea6"},"\u76f8\u9130\u3001\u9023\u63a5\u3001\u5206\u652f\u5ea6"),(0,i.kt)("p",{parentName:"li"},"G = ( V , E )\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u82e5(u,v) \u2208 E \uff0c\u5247 u\u548cv\u300c\u76f8\u9130\u300d(adjacent)\uff1b\u4e14(u,v)\u300c\u9023\u63a5\u300d(incident on)  u \u548c v\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u82e5G\u6709\u65b9\u5411\u6027\uff0c\u800c< u , v >\u2208 E \uff0c\u5247\u7a31u\u300c\u76f8\u9130\u81f3\u300d (adjacent to) v\uff1b\u4e14v\u5f9eu\u76f8\u9130(adjacent from)\uff1b< u , v >\u9023\u63a5u\u3001v\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u9023\u63a5\u5728\u7121\u5411\u5716\u9802\u9edeu\u4e0a\u7684\u7e3d\u908a\u6578\uff0c\u7a31\u70bau\u7684\u300c\u5206\u652f\u5ea6\u300d(degree)\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u6709\u5411\u5716\u4e2d\uff0c\u53ef\u5206\u70baout-degree\u53cain-degree\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u5b50\u5716"},"\u5b50\u5716"),(0,i.kt)("p",{parentName:"li"},"G = ( V , E ) \u7684\u5b50\u5716 G' = ( V' , E' )\u9808\u6eff\u8db3 V' \u2208 V \u4e14 E' \u2208 E'  \u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u8def\u5f91\u7c21\u55ae\u8def\u5f91\u9577\u5ea6\u8ff4\u5708"},"\u8def\u5f91\u3001\u7c21\u55ae\u8def\u5f91\u3001\u9577\u5ea6\u3001\u8ff4\u5708"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"u\u5230v\u7684\u8def\u5f91(path)\u662f\u7531\u9802\u9edeu-v1-v2-...vi,v\u53ca\u5176\u9023\u63a5\u7684\u908a(u,v1),(v1,v2),...,(vi,v)\u6240\u69cb\u6210(\u6216<u,v1>,<v1,v2>,...,<vi,v>)\uff0c\u4ee5u-v1-v2-...-v\u8868\u793a\u6b64u\u5230v\u7684\u8def\u5f91\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7c21\u55ae\u8def\u5f91(simple path)\u6307\u7684\u662f\u9664\u4e86\u8d77\u7d42\u9ede\u5916\uff0c\u5176\u4ed6\u9802\u9ede\u7686\u4e0d\u540c\u7684\u8def\u5f91\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8ff4\u5708(cycle)\u6307\u7684\u662f\u8d77\u7d42\u9ede\u76f8\u540c\u7684\u7c21\u55ae\u8def\u5f91\u3002")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u57165 \uff0cA-B-C-D\u662f\u4e00\u9577\u5ea6\u70ba3\u7684\u7c21\u55ae\u8def\u5f91"),(0,i.kt)("li",{parentName:"ol"},"\u57165 \uff0cA-B-C-D-B\u662f\u4e00\u9577\u5ea6\u70ba4\u7684\u8def\u5f91\uff0c\u4f46\u4e0d\u662f\u7c21\u55ae\u8def\u5f91"),(0,i.kt)("li",{parentName:"ol"},"\u57165 \uff0cA-B-D-C-A \u662f\u4e00\u9577\u5ea6\u70ba4\u7684\u8ff4\u5708")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(5849).Z,width:"1479",height:"528"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u76f8\u9023\u7684\u9802\u9ede\u6216\u5716\u5f62\u76f8\u9023\u7d44\u5408"},"\u76f8\u9023\u7684\u9802\u9ede(\u6216\u5716\u5f62)\u3001\u76f8\u9023\u7d44\u5408"),(0,i.kt)("p",{parentName:"li"},"\u7121\u5411\u5716\u5f62G = ( V , E ) \u3002\u9802\u9edeu\u5b58\u5728\u4e00\u8def\u5f91\u9023\u63a5\u5230\u9802\u9edev\uff0c\u5247\u7a31\u9802\u9edeu\u548cv\u662f\u76f8\u9023\u7684(connected)\u3002"),(0,i.kt)("p",{parentName:"li"},"\u7121\u5411\u5716\u5f62G\u7684\u76f8\u9023\u7d44\u5408(connected component) C\u6307\u7684\u662f\u5716\u4e2d\u6700\u5927\u7684\u76f8\u9023\u5b50\u5716\uff0c\u4ea6\u5373C\u662fG\u7684\u76f8\u9023\u5b50\u5716\u4e2d\u6700\u5927\u7684\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u5f37\u56fa\u76f8\u9023\u5f37\u56fa\u76f8\u9023\u7d44\u5408"},"\u5f37\u56fa\u76f8\u9023\u3001\u5f37\u56fa\u76f8\u9023\u7d44\u5408"),(0,i.kt)("p",{parentName:"li"},"\u6709\u5411\u5716\u5f62G = ( V , E ) \u4e2d\uff0c\u4efb\u5169\u9edeu\u3001v\uff0c\u90fd\u5b58\u5728\u5169\u689d\u8def\u5f91 : \u9802\u9edeu\u5b58\u5728\u4e00\u8def\u5f91\u9023\u63a5\u5230\u9802\u9edev\uff0c\u4e14\u9802\u9edev\u5b58\u5728\u4e00\u8def\u5f91\u9023\u63a5\u5230\u9802\u9edeu\uff0c\u5247\u7a31\u70ba\u5f37\u56fa\u76f8\u9023(strongly connected)\u3002\u5f37\u56fa\u76f8\u9023\u7d44\u5408(strongly connected component)\u70ba\u6709\u5411\u5716\u4e2d\u6700\u5927\u4e14\u5f37\u56fa\u76f8\u9023\u7684\u5b50\u5716\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"\u6c92\u6709\u8ff4\u5708"},"\u6c92\u6709\u8ff4\u5708"))),(0,i.kt)("p",null,"\u200b\t\t\u4e0d\u5b58\u5728\u8ff4\u5708\u7684\u5716\u5f62\u7a31\u70ba\u300c\u6c92\u6709\u8ff4\u5708\u300d(acyclic)\uff0c\u4e00\u68f5\u6a39\u5373\u70ba\u76f8\u9023\u4e14\u6c92\u6709\u8ff4\u5708\u7684\u5716\u5f62\u3002\u7531\u6b64\u53ef\u77e5\u5716\t\t\u5f62graph\u662f\u6bd4\u6a39tree\u66f4\u70ba\u4e00\u822c\u5316\u7684\u8cc7\u6599\u7d50\u69cb\uff0c\u56e0\u6b64\u5728\u5c0d\u6a39\u6240\u505a\u7684\u52d5\u4f5c\u904b\u7b97\u7686\u53ef\u5728\u5716\u5f62\u4e0a\u63a2\u7d22\u3002"),(0,i.kt)("h2",{id:"\u5716\u5f62\u7684\u8cc7\u6599\u8868\u793a"},"\u5716\u5f62\u7684\u8cc7\u6599\u8868\u793a"),(0,i.kt)("p",null,"\u5716\u5f62\u662f\u6bd4\u6a39\u66f4\u70ba\u4e00\u822c\u5316\u7684\u8cc7\u6599\u7d50\u69cb\uff0c\u56e0\u6b64\u4e4b\u524d\u5c0d\u6a39\u6240\u505a\u7684\u904b\u7b97\u7686\u53ef\u5728\u5716\u5f62\u57f7\u884c\u3002\u6b64\u4ecb\u7d39\u5169\u7a2e\u5e38\u898b\u7684\u5716\u5f62\u8cc7\u6599\u7d50\u69cb\u300c\u76f8\u9130\u77e9\u9663\u300d\u3001\u300c\u76f8\u9130\u4e32\u5217\u300d\u3002"),(0,i.kt)("h3",{id:"\u76f8\u9130\u77e9\u9663adjacent-matrix"},"\u76f8\u9130\u77e9\u9663(adjacent matrix)"),(0,i.kt)("p",null,"\u5c07\u9802\u9ede\u662f\u5426\u6709\u76f8\u9130\u7684\u95dc\u4fc2\u8a18\u9304\u5728\u77e9\u9663\u4e2d\u3002\u82e5G = ( V , E )\uff0c\u800c|V|=n\uff0c\u5373G\u6709n\u500b\u9802\u9ede\u3002\u7528\u4e00\u500bn x n\u7684\u4e8c\u7dad\u77e9\u9663A\u8868\u793a : \u4ee4i,j \u2208 V,\u82e5(i,j)\u2208E (\u6216<i,j>\u2208E )\uff0c\u5247Aij= 1\uff0c\u5426\u5247Aij=0\u3002"),(0,i.kt)("p",null,"\u6839\u64da\u4e0a\u9762\u6558\u8ff0\uff0c\u53ef\u77e5\u76f8\u9130\u77e9\u9663\u662f\u75310\u548c1\u6240\u7d44\u6210\u3002\u4e14\u7121\u5411\u5716\u5f62\u7684\u76f8\u9130\u77e9\u9663\u662f\u5c0d\u7a31\u7684(\u5373Aij=Aji)\uff1b\u6709\u5411\u5716\u5f62\u5247\u672a\u5fc5\u3002\u53e6\u5916\uff0c\u53ef\u8a08\u7b97\u5176\u5206\u652f\u5ea6\uff1a"),(0,i.kt)("p",null,"\u7121\u5411\u5716\u5f62 : ",(0,i.kt)("inlineCode",{parentName:"p"},"d(i) = \u03a3Aij (j from 0~n-1)   ")),(0,i.kt)("p",null,"\u6709\u5411\u5716\u5f62 : ",(0,i.kt)("inlineCode",{parentName:"p"},"dout(i) = \u03a3Aij (j from 0~n-1)")," \u3001",(0,i.kt)("inlineCode",{parentName:"p"},"din(i) = \u03a3Aji (j from 0~n-1)")," "),(0,i.kt)("p",null,"\u4ee5\u77e9\u9663\u89e3\u6c7a\u5716\u5f62\u554f\u984c\u70baO(n^2)\uff0c\u82e5\u77e9\u9663\u70ba\u7a00\u758f\u77e9\u9663(sparse)\uff0c\u53ef\u4ee5\u7528\u76f8\u9130\u4e32\u5217\u8868\u793a\u3002"),(0,i.kt)("h3",{id:"\u76f8\u9130\u4e32\u5217adjacent-list"},"\u76f8\u9130\u4e32\u5217(adjacent list)"),(0,i.kt)("p",null,"G = ( V , E )\uff0c\u4e14|V|=n\uff0cG\u4e2d\u7684\u4e00\u9802\u9edeu\u7684\u5206\u652f\u5ea6\u70bak\uff0c\u5247\u53ef\u4ee5\u5c07\u8207u\u76f8\u9130\u7684k\u500b\u9802\u9ede\u7528\u93c8\u7bc0\u4e32\u5217\u4e32\u8d77\uff0c\u5982\u6b64\u4e00\u4f86\uff0cn\u500b\u9802\u9ede\u5c31\u6703\u6709n\u500b\u93c8\u7bc0\u4e32\u5217\u3002\u5982\u57166\u6240\u793a\uff0c\u4ee5head\u6307\u6a19\u6307\u5411\u6bcf\u500b\u9802\u9ede\uff0c\u6bcf\u500b\u9802\u9ede\u5728\u5404\u81ea\u4e32\u8d77\u6709\u9023\u7d50\u7684\u9802\u9ede\uff1b\u5176\u4e2d\uff0c\u56e0\u70ban\u500b\u9802\u9ede\u662f\u52e2\u5fc5\u4e0d\u53ef\u7701\u7565\u7684\uff0c\u56e0\u6b64\u7528\u65b9\u4fbf\u5b9a\u5740\u7684\u9663\u5217\u4f86\u5ba3\u544ahead\uff0c\u4ee5\u65b9\u4fbf\u7528\u9802\u9ede\u7de8\u865f\u4f5c\u70ba\u9663\u5217\u8a3b\u6a19\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4533).Z,width:"1234",height:"490"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"#define n 20\nstruct Node\n{\n  int data;\n  struct Node *link;\n};\nstruct Node *head[n];\n")),(0,i.kt)("p",null,"\u82e5\u7121\u5411\u5716\u5f62\u6709n\u500b\u9ede\uff0ce\u689d\u908a\uff0c\u5247\u76f8\u9130\u4e32\u5217\u9700\u8981(n+2e)\u500b\u5132\u5b58\u7a7a\u9593\u3002"),(0,i.kt)("p",null,"Q : \u5982\u4f55\u5f97\u77e5\u4e00\u7d66\u5b9a\u5716\u5f62\u6709\u591a\u5c11\u689d\u908a\u5462?"),(0,i.kt)("p",null,"A1:\u4ee5\u76f8\u9130\u77e9\u9663\u5132\u5b58\uff0c\u5247\u67e5\u770b\u6709\u591a\u5c111\uff0c\u70baO(n^2)"),(0,i.kt)("p",null,"A2:\u4ee5\u76f8\u9130\u4e32\u5217\u5132\u5b58\uff0c\u5247\u8d70\u8a2a\u6240\u6709\u7bc0\u9ede\uff0c\u70baO(n+2e)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6548\u7387\u548c\u5716\u5f62\u7684\u758f\u5bc6\u7a0b\u5ea6\u6709\u95dc")),(0,i.kt)("p",null,"\u5c0d\u6709\u5411\u5716\u5f62\u800c\u8a00\uff0c\u8981\u5f97\u77e5\u5411\u5916\u5206\u652f\u5ea6\u6642\uff0c\u53ea\u9700\u8d70\u8a2a\u8a72\u9802\u9ede\u4e32\u5217\uff0c\u70baO(n+e)\u3002\u7136\u800c\u8981\u8a08\u7b97\u5411\u5167\u5206\u652f\u5ea6\u6642\uff0c\u4ee5\u57166\u7684\u5f62\u5f0f\u5247\u8f03\u4e0d\u76f4\u89ba\uff0c\u56e0\u6b64\u53ef\u518d\u8a2d\u8a08\u53cd\u5411\u76f8\u9130\u4e32\u5217(inverse adjacent list)\u4f86\u8868\u793a\uff0c\u5982\u57167\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5325).Z,width:"1234",height:"490"})),(0,i.kt)("h2",{id:"ssad---single-source--all-destination"},"SSAD - Single source / All destination"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u55ae\u4e00\u8d77\u9ede\u81f3\u6240\u6709\u76ee\u7684\u5730\u7684\u6700\u77ed\u8def\u5f91"),"\uff1a\u7d66\u4e88\u4e00\u6709\u5411\u5716\u5f62\uff0c\u5716\u4e2d\u7684\u908a\u90fd\u662f\u975e\u8ca0\u7684\u6210\u672c\uff0c\u5c0b\u627e\u6700\u77ed\u8def\u5f91\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dijkstra \u6f14\u7b97\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-pseudocode"},"Input : weighted graph G = (V,E), V={0,1,2,...,n-1}\uff0c\n        edge cost w[i,j], i,j\u2208V , origin u\nOutput : the shortest path from u to v\n//\u521d\u59cb\u5316u\u5230\u6240\u6709\u76ee\u7684\u5730v\nfor (v=0;v<n;v++)\n{\n    D[v] = w[u,v]; //D[v] : u\u5230v\u76ee\u524d\u6700\u77ed\u8ddd\u96e2\n    C[v] = u; //u\u5230v\u7684\u6700\u77ed\u8ddd\u96e2\u662f\u7d93\u7531u\u63d0\u4f9b\n}\nfound[u] = true; D[u] = 0;//u\u5230u\u7684\u6700\u77ed\u8ddd\u96e2\u5df2\u88ab\u627e\u5230\uff0c\u5176\u8ddd\u96e2\u70ba0\nwhile (\u9084\u6709\u76ee\u7684\u5730\u7684\u6700\u77ed\u8ddd\u96e2\u672a\u88ab\u627e\u5230)\n{\n    k = min{v|D[v]\u70ba\u6700\u5c0f\u4e14found[v]\u70bafalse};\n    found[k]=true; //u\u5230k\u7684\u6700\u77ed\u8ddd\u96e2\u5df2\u88ab\u6c7a\u5b9a\n    for(v=0;v<n;v++)\n    {\n        if(!found[v] && D[k]+w[k][v]<D[v])\n        {\n            D[v] = D[k]+w[k][v];\n            C[v] = k; //u\u5230v\u7684\u6700\u77ed\u8def\u5f91\u5305\u542b(k,v)\n        }\n    }\n}\noutput the shortest path from u to v //D[v]\uff0cv\u2208V,u\u2260v//\u5229\u7528C[v]\u8ffd\u6714u-v\u7684\u6700\u77ed\u8def\u5f91 \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5370\u51fa u-v\u7684\u6700\u77ed\u8def\u5f91")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'String ShortestPath(int u,int v)\n{\n    String path = IntToStr(v);\n    while(C[v]!=u)\n    {\n        path = IntToStr(C[v])+"--["+IntToStr(w[C[v]][v])+"]"+"--\x3e"+path;\n        v = C[v];\n    }\n    return path;\n}\n')),(0,i.kt)("h2",{id:"all-pairs"},"All Pairs"),(0,i.kt)("p",null,"\u6982\u5ff5\uff1a\u6bcf\u6b21\u52a0\u5165\u4e00\u500b\u9ede\uff0c\u5982\u679c\u4ed6\u5c0d\u4efb\u4f55\u5169\u9ede\u9593\u7684\u8ddd\u96e2\u6709\u5e6b\u52a9\u5c31\u52a0\u5165\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"Input : Graph G=(V,E)\uff0cV={0,1,2,..n-1}\u548c\u5176\u76f8\u9130\u77e9\u9663w[i][j]\uff0c0\u2266i,j<n\u3002\nOutput : \u4efb\u5169\u9ede\u9593\u7684\u6700\u77ed\u8ddd\u96e2\u77e9\u9663A\nfor(int i=0;i<0;i++)\n    for(int j=0;j<0;j++)\n        A[i][j]=w[i][j];\nfor (int k=0;k<n;k++)\n    for(int i=0;i<n;i++)\n        for(int j=0;j<n;j++)\n            if(A[i][j]<A[i][k]+A[k][j])\n                A[i][j]=A[i][j]<A[i][k]+A[k][j]?A[i][j]:A[i][k]+A[k][j]\n")),(0,i.kt)("h2",{id:"search"},"Search"),(0,i.kt)("h3",{id:"dfs\u6df1\u5148\u641c\u5c0b"},"DFS\u6df1\u5148\u641c\u5c0b"),(0,i.kt)("p",null,"\u905e\u8ff4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"Input:Graph G=(V,E)\uff0cV={0,1,2,..n-1}\nOutput:G\u7684\u6df1\u5148\u641c\u5c0b\u9806\u5e8f\nint visited[n];\nvoid DFS(int u)\n{\n    visited[u]=1;\n    print u;\n    for(\u6240\u6709\u8207u\u76f8\u9130\u7684\u9802\u9edev)\n    {\n        if(v\u672a\u66fe\u8d70\u8a2a\uff0c\u5373visited[v]!=1) DFS(v);\n    }\n}\nmain()\n{\n    for(int i=0;i<n;i++) visited[i]=0;\n    DFS(0);\n}\n")),(0,i.kt)("p",null,"\u5806\u758a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"Input:Graph G=(V,E)\uff0cV={0,1,2,..n-1}\nOutput:G\u7684\u6df1\u5148\u641c\u5c0b\u9806\u5e8f\nint visited[n];\nvoid DFS(int u)\n{   push(u);\n    while(stack is not empty)\n    {   v=pop();\n        print v;\n        visited[v]=1;\n        for(w\u70bav\u5c1a\u672a\u8d70\u8a2a\u7684\u76f8\u9130\u9802\u9ede\uff0c\u5373visited[w]!=1)\n        {\n           push(w);\n        }\n    }    \n}\n")),(0,i.kt)("h3",{id:"bfs\u5ee3\u5148\u641c\u5c0b"},"BFS\u5ee3\u5148\u641c\u5c0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-pseudocode"},"Input:Graph G=(V,E)\uff0cV={0,1,2,..n-1}\nOutput:G\u7684\u5ee3\u5148\u641c\u5c0b\u9806\u5e8f\nint visited[n];\nmain()\n{\n    for(int i=0;i<n;i++) visited[i]=0;\n    visited[0]=1;\n    AddQ(0);\n    while(Q\u4ecd\u6709\u9802\u9ede\u8cc7\u6599)\n    {\n        int u = Delete_Q;\n        print u;\n        for(\u6240\u6709\u8207u\u76f8\u9130\u7684\u9802\u9edev)\n        {\n            if(v\u672a\u66fe\u8d70\u8a2a\uff0c\u5373visited[v]!=1)\n            {\n                visited[v] = 1;\n                AddQ(v);\n            }\n        }\n    }\n}\n")))}d.isMDXComponent=!0},6185:function(e,t,n){t.Z=n.p+"assets/images/Graph1-55d1a7dffc96e8361952f0c0fc8261a3.jpg"},6229:function(e,t,n){t.Z=n.p+"assets/images/Graph2-68cb98ffe7338b0fec2a346a9724fb6b.jpg"},1170:function(e,t,n){t.Z=n.p+"assets/images/Graph3-e16338acf24642d5635fd33fed370765.jpg"},5849:function(e,t,n){t.Z=n.p+"assets/images/Graph4-5eba2f35520d54e11070cc03a8f193f8.jpg"},4533:function(e,t,n){t.Z=n.p+"assets/images/Graph5-314e849775ea7de77195b36e3fddadfa.jpg"},5325:function(e,t,n){t.Z=n.p+"assets/images/Graph6-701b31b6cd98ac9b72438977214a0fc1.jpg"}}]);