"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8002],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5938:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p="React_ES6",c={unversionedId:"Reactjs/React_ES6",id:"Reactjs/React_ES6",title:"React_ES6",description:"\u6b64\u7bc7\u5167\u5bb9\uff1aReact Tutorial (w3schools.com)",source:"@site/docs/Reactjs/React_ES6.md",sourceDirName:"Reactjs",slug:"/Reactjs/React_ES6",permalink:"/docs/Reactjs/React_ES6",editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/Reactjs/React_ES6.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python - Decorator",permalink:"/docs/Python/Python - decorator"},next:{title:"React\u5165\u9580\u5b78\u7fd2\u7b46\u8a181",permalink:"/docs/Reactjs/React\u5165\u9580\u5b78\u7fd2\u7b46\u8a181"}},m=[{value:"Class",id:"class",children:[],level:2},{value:"Arrow function",id:"arrow-function",children:[],level:2},{value:"Variables",id:"variables",children:[],level:2},{value:"Array - map()",id:"array---map",children:[],level:2},{value:"Destructuring",id:"destructuring",children:[],level:2},{value:"Spread Operator",id:"spread-operator",children:[],level:2},{value:"Modules",id:"modules",children:[],level:2},{value:"Ternary Operator",id:"ternary-operator",children:[],level:2}],s={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"react_es6"},"React_ES6"),(0,l.kt)("p",null,"\u6b64\u7bc7\u5167\u5bb9\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.w3schools.com/react/default.asp"},"React Tutorial (w3schools.com)")),(0,l.kt)("h2",{id:"class"},"Class"),(0,l.kt)("p",null,"class\u662ffunction\u7684\u4e00\u7a2e\uff0c\u4ee5class\u4f5c\u70baketyword\uff0c\u958b\u982d\u540d\u7a31\u901a\u5e38\u70ba\u5927\u5beb\uff0cproperty\u88ab\u5b9a\u7fa9\u5728\u5176constructor\u65b9\u6cd5(method)\u5167\u3002\u53e6\u5916\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u7fa9\u65b9\u6cd5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method"),(0,l.kt)("li",{parentName:"ul"},"Inheritance : ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"class")," < New class name> ",(0,l.kt)("inlineCode",{parentName:"li"},"extends")," < Old class name> "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"super()")," : \u7528\u4f86\u7e7c\u627f\u820a\u7684Class's property and method")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Dog{\n    constructor(name,age){\n        this.name=name;\n        this.age=age;\n    }\n    show(){\n        return( 'My dog name ' +this.name+', and it is '+this.age+' yrs old.');\n    }\n}   \nconst myDog = new Dog('Cama',3);\nconsole.log(myDog.show());//My dog name Cama, and it is 3 yrs old.\n//Inheritance\nclass BlackDog extends Dog{\n    constructor(nickname,age,sex){\n        super(nickname,age);\n        this.sex = sex;\n    }\n    call(){\n        return this.show()+', and it is '+this.sex+'.';\n    }\n}\nconst myBlackDog = new BlackDog('LiuLiu',4,'female');\nconsole.log(myBlackDog.call());//My dog name LiuLiu, and it is 4 yrs old,, and it is female.\n")),(0,l.kt)("h2",{id:"arrow-function"},"Arrow function"),(0,l.kt)("p",null,"\u8b93\u4f7f\u7528\u8005\u53ef\u7528\u8f03\u7c21\u6f54\u7684\u8868\u793a\u6cd5\u3002\u539f\u59cb : ",(0,l.kt)("inlineCode",{parentName:"p"},'function SayHi(){return "Hi"}')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'SayHi = function(){return "Hi";}')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53bb\u6389'function'\u52a0\u4e0a=> : ",(0,l.kt)("inlineCode",{parentName:"p"},'SayHi = ()=>{return "Hi";}'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ea\u6709\u4e00\u500b\u6558\u8ff0\u53ef\u4ee5\u53bb\u6389{}\u53careturn : ",(0,l.kt)("inlineCode",{parentName:"p"},'SayHi = ()=>"Hi";'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"()\u5167\u5e36\u4e0a\u53c3\u6578 ",(0,l.kt)("inlineCode",{parentName:"p"},'SayHi = (name)=>"Hi " +name;'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ea\u6709\u4e00\u500b\u53c3\u6578\u53ef\u7701\u7565() ",(0,l.kt)("inlineCode",{parentName:"p"},'SayHi = name=>"Hi " +name;'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"this")," :\u4e00\u822cfunc\u6307\u7684\u662f\u547c\u53eb\u5b83\u7684\u7269\u4ef6(\u53ef\u80fd\u662fwindow\u3001btn\u7b49) \uff1b arrow func\u6307\u7684\u662fHeader\u9019\u500b\u7269\u4ef6\u672c\u8eab\u3002 "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'class Header {\n  constructor() {\n    this.color = "Red";\n  }\n//Regular function:\n  changeColor = function() {\n    document.getElementById("demo").innerHTML += this;\n  }\n}\n//Arrow function:\n  changeColor = () => {\n    document.getElementById("demo").innerHTML += this;\n  }\n}\n')))),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("p",null,"\u4ee5\u524d\u50c5",(0,l.kt)("inlineCode",{parentName:"p"},"var"),"\uff0c\u73fe\u5728\u5171\u6709\u4e09\u7a2e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"var"),"  :  function scope. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"let"),"  :  block scope.(like loop)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"const")," : block scope and can't reassign.")),(0,l.kt)("h2",{id:"array---map"},"Array - map()"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5c0d\u9663\u5217\u5167\u7684\u5143\u7d20\u90fd\u9032\u884cfunc\uff0c\u4e26\u653e\u9032\u53e6\u4e00\u9663\u5217\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const myArray = ['dog', 'cat', 'horse'];\n\nconst myList = myArray.map((item) => <p>{item}</p>)\n")),(0,l.kt)("h2",{id:"destructuring"},"Destructuring"),(0,l.kt)("p",null,'\u89e3\u69cb\u4f7f\u5f97\u8981\u62ff\u51fa"\u5fc5\u8981\u7684\u6771\u897f"\u8b8a\u5f97\u8f03\u65b9\u4fbf\u3002'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u9663\u5217\u5167\u7684\u503c\u7d66\u8b8a\u6578 : ",(0,l.kt)("inlineCode",{parentName:"li"},"const [constName1,constName2,constName3] = definedConst;")),(0,l.kt)("li",{parentName:"ul"},"\u627f\u4e0a\uff0c\u4f46\u53ea\u8981\u53d6\u5e7e\u9805 : ",(0,l.kt)("inlineCode",{parentName:"li"},"const [,,constName] = definedConst;"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const bag = ['bottle','wallet','books'];\nconst [drink,money,paper]=bag;\nconst [drink,,paper]=bag;\nconsole.log(drink);//bottle\nconsole.log(paper);//paper\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728nested object\u53d6\u503c : "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const bag = {\n    bottle:'water',\n    wallet:{\n        cash:100,\n        card:'VISA',\n    },\n    book:'The remains of day'\n}\n\nmyBag(bag);\n\nfunction myBag({ bottle, wallet: { cash } }) {\n  console.log('I have ' + bottle + ' and ' + cash+ ' in my bag.');\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"func\u7684\u56de\u50b3\u503c\u662f\u9663\u5217\u53d6\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"const [c1,c2,..,c5] = <call func and it's return>;"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u50b3Object\u9032func"),(0,l.kt)("p",{parentName:"li"},"\u820a\u7684\u505a\u6cd5\u662f\u5728func\u5167\u7528Object.XXX\u53d6\u5f97\uff1b\u53ef\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"({XX_1,XX_2,...,XX_5}){..<just use XX_1 , not Object.XX1>..}")))),(0,l.kt)("h2",{id:"spread-operator"},"Spread Operator"),(0,l.kt)("p",null,"\u53ef\u5feb\u901f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"..."),"\u4f86\u8907\u88fd\u90e8\u5206\u6216\u5168\u90e8\u7684\u7269\u4ef6\u6216\u9663\u5217\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Combine 2 arrays or objects : ",(0,l.kt)("inlineCode",{parentName:"li"},"[...arr1,...arr2]")),(0,l.kt)("li",{parentName:"ul"},"Get value from the array : ",(0,l.kt)("inlineCode",{parentName:"li"},"[first_item,sec_item,...rest_item] = definedArray"))),(0,l.kt)("h2",{id:"modules"},"Modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Export"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"default export : only one in a file."),(0,l.kt)("li",{parentName:"ol"},"named export : \u90fd\u9700\u8981\u5148\u53d6\u540d\u7a31\u624d\u53ef\u532f\u51fa")),(0,l.kt)("p",{parentName:"li"},"\u532f\u51fa\u65b9\u6cd5\u5927\u6982\u6709\u5e7e\u7a2e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export const/let constName = 100;")," ",(0,l.kt)("inlineCode",{parentName:"li"},"const a = 1; export default a;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export function funcName(){...};"),"\uff1b",(0,l.kt)("inlineCode",{parentName:"li"},"export default function{...}"),"(\u6c92\u6709\u540d\u7a31)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export {const1,obj1,obj2};"),"\u53ef\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"as"),"\u4fee\u6539\u8f38\u51fa\u7684\u540d\u7a31 => ",(0,l.kt)("inlineCode",{parentName:"li"},"export {obj1 as CoolName};")," \uff1b",(0,l.kt)("inlineCode",{parentName:"li"},"export default {const1,obj1,obj2};")),(0,l.kt)("li",{parentName:"ul"},"\u5169\u8005\u53ef\u4f75\u7528\uff0c\u4f46default\u5c31\u662f\u53ea\u80fd\u4e00\u500b\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Import"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"default \u532f\u5165\u4e26\u53d6\u540d"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"import Name from '</location.js>;'"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"named"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u532f\u5165\u8981\u4f7f\u7528\u7684\u5957\u4ef6",(0,l.kt)("inlineCode",{parentName:"li"},"import {Name1,Name2} from '</location.js>;' ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u532f\u5165\u8981\u4f7f\u7528\u7684\u5957\u4ef6\u5728\u4e00\u7269\u4ef6\u4e0a",(0,l.kt)("inlineCode",{parentName:"li"},"import * as OneObject from '</location.js>;' "),"\uff0c\u4f7f\u7528\u6642\u5c31\u8981\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"OneObject.XX"),"\u7684\u65b9\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"as")," =>\u532f\u5165\u4e26\u91cd\u65b0\u547d\u540d",(0,l.kt)("inlineCode",{parentName:"li"},"import {Name1 as NewName} from '</location.js>;' ")," "))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u540c\u6642\u532f\u5165default\u53canamed"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"import DefaultModule , * as NamedModule from '</location.js>;'")))))),(0,l.kt)("h2",{id:"ternary-operator"},"Ternary Operator"),(0,l.kt)("p",null,"\u7c21\u5316 if / else"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"x > 10 ?10:x; ")," \u5982\u679cx>10\u5c31\u662f10\u5426\u5247\u4e0d\u66f4\u6539x\u503c\u3002"))}u.isMDXComponent=!0}}]);