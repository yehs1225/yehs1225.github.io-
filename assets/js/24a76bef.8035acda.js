"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7380],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4908:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={},u="Function",p={unversionedId:"Python/Python_function",id:"Python/Python_function",title:"Function",description:"function\u57fa\u672c\u4e0a\u662f\u5c07\u4e00\u4e9b\u64cd\u4f5c\u5305\u88dd\u5728\u4e00\u8d77\u4f86\u57f7\u884c\u7279\u5b9a\u529f\u80fd\u3002",source:"@site/docs/Python/Python_function.md",sourceDirName:"Python",slug:"/Python/Python_function",permalink:"/docs/Python/Python_function",editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/Python/Python_function.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Decorator",permalink:"/docs/Python/Python_decorator"},next:{title:"Mutable & Immutable",permalink:"/docs/Python/Python_mutable_immutable"}},s=[{value:"\u5fc5\u8981\u5143\u7d20",id:"\u5fc5\u8981\u5143\u7d20",children:[],level:2},{value:"Arguments",id:"arguments",children:[{value:"Default arguments",id:"default-arguments",children:[],level:3},{value:"Position arguments",id:"position-arguments",children:[],level:3},{value:"Keyword arguments",id:"keyword-arguments",children:[],level:3},{value:"*args &amp; **kwargs",id:"args--kwargs",children:[{value:"Unpacked",id:"unpacked",children:[],level:4}],level:3}],level:2},{value:"Function Annotations",id:"function-annotations",children:[],level:2},{value:"libaries, packages , modules, framework\u5dee\u7570",id:"libaries-packages--modules-framework\u5dee\u7570",children:[{value:"Modules",id:"modules",children:[],level:3},{value:"Packages",id:"packages",children:[],level:3},{value:"Libraries",id:"libraries",children:[],level:3},{value:"Framework",id:"framework",children:[],level:3}],level:2}],c={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"function"},"Function"),(0,l.kt)("p",null,"function\u57fa\u672c\u4e0a\u662f\u5c07\u4e00\u4e9b\u64cd\u4f5c\u5305\u88dd\u5728\u4e00\u8d77\u4f86\u57f7\u884c\u7279\u5b9a\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u5fc5\u8981\u5143\u7d20"},"\u5fc5\u8981\u5143\u7d20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"def"),"\u958b\u982d\u5b9a\u7fa9\u4e00\u500bfunction\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u60f3\u8981\u4e4b\u5f8c\u518d\u5b9a\u7fa9\u5167\u5bb9\uff0c\u53ef\u5148\u5beb\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"pass"),"\uff0c\u5c31\u4e0d\u6703\u8b93\u9019\u500b\u7a7a\u7684function\u51fa\u73fe\u932f\u8aa4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u547c\u53ebfunction\u8981\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"li"},"()"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def hello_func():\n    pass\n\n# execute the function\nprint(hello_func())\n# None \uff08since no value returned\uff09\n\n# call function itself\nprint(hello_func)\n# <function hello_func at 0x0000021604F2F040>\n")),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,"\u57fa\u672c\u4e0a\u4f7f\u7528function\u7684\u4eba\uff0c\u4e0d\u9700\u8981\u8a73\u7d30\u77e5\u9053\u5167\u90e8\u5982\u4f55\u904b\u4f5c\uff0c\u53ea\u9700\u8981\u77e5\u9053 ",(0,l.kt)("strong",{parentName:"p"},"\u8f38\u5165"),"\u548c ",(0,l.kt)("strong",{parentName:"p"},"\u8f38\u51fa")," \u662f\u4ec0\u9ebc\u5c31\u884c\u4e86\u3002\u800c\u8f38\u5165\u7684\u53c3\u6578\u6211\u5011\u5c31\u7a31\u70baarguments\uff08\u4e0b\u9762\u7bc4\u4f8b\u5c31\u662f\u6307",(0,l.kt)("inlineCode",{parentName:"p"},"greeting"),"\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def hello_func(greeting):\n    return '{} Function.'.format(greeting)\n\nprint(hello_func('Hi'))\n")),(0,l.kt)("h3",{id:"default-arguments"},"Default arguments"),(0,l.kt)("p",null,"\u82e5function\u8981\u6c42\u8981\u8f38\u5165arguments\uff0c\u6c92\u6709\u8f38\u5165\u7684\u8a71\u5c31\u6703\u51fa\u73feerror\u3002\u4f46\u662f\u4e5f\u53ef\u4ee5\u8a2d\u5b9adefault\u503c\uff0c\u7576\u6c92\u6709\u8f38\u5165\u6642\u5c31\u5c07\u8b8a\u6578\u8a2d\u5b9a\u70ba\u8a72\u503c\uff08\u4e0b\u9762\u7bc4\u4f8b\u5c31\u662f\u6307",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def hello_func(greeting = 'Hi'):\n    return '{}, {}'.format(greeting)\n\nprint(hello_func())\n")),(0,l.kt)("h3",{id:"position-arguments"},"Position arguments"),(0,l.kt)("p",null,"\u6307\u7684\u662f\u7576\u547c\u53eb\u51fd\u5f0f\u6642\uff0c\u50b3\u5165\u7684 arguments\u7684",(0,l.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e"),"\u662f\u6700\u91cd\u8981\u7684\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u4f60\u672c\u4f86\u662f\u60f3\u8f38\u51fa \u300cHi, John\u300d\uff0c\u4f46\u56e0\u70ba\u8f38\u5165\u6642\u672a\u6ce8\u610f\u50b3\u5165\u53c3\u6578\u9806\u5e8f\uff08\u4f4d\u7f6e\uff09\uff0c\u6240\u4ee5function\u7406\u6240\u7576\u7136\u5730\u4f9d\u7167\u9806\u5e8f\u63a5\u6536arguments\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def hello_func(greeting, name):\n    return '{}, {}'.format(greeting, name)\n\nprint(hello_func('John', 'Hi'))\n# John, Hi\n")),(0,l.kt)("h3",{id:"keyword-arguments"},"Keyword arguments"),(0,l.kt)("p",null,"\u76f8\u5c0d\u65bcposition arguments\uff0ckeyword arguments\u56e0\u70ba\u6709keyword\u9644\u8457\u5728\u6bcf\u4e00\u500bargument\u4e0a\uff0c\u6240\u4ee5\u5c31\u4e0d\u9700\u8981\u5728\u610f\u4f4d\u7f6e\u95dc\u4fc2\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def hello_func(greeting, name):\n    return '{}, {}'.format(greeting, name)\n\nprint(hello_func(name='John', greeting='Hi'))\n")),(0,l.kt)("h3",{id:"args--kwargs"},"*args & **kwargs"),(0,l.kt)("p",null,"\u4e00\u822c\u770b\u5230\u5225\u4eba\u5beb\u7684function\u90fd\u6703\u6709\u9019\u5169\u500barguments\uff0c\u56e0\u70ba\u4ee3\u8868\u53ef\u4ee5\u63a5\u6536 ",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u610f\u6578\u91cf"),"\u7684arguments\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"args"),"\u662fposition arguments\u7684\u7e2e\u5beb\uff0c\u6703\u662f\u4e00",(0,l.kt)("strong",{parentName:"p"},"tuple"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kwargs"),"\u662fkeyword arguments\u7684\u7e2e\u5beb\uff0c\u6703\u662f\u4e00",(0,l.kt)("strong",{parentName:"p"},"dictionary"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def student_info(*args, **kwargs):\n    print(args)\n    print(kwargs)\n    # ('Math', 'Art')\n    # {'name': 'John', 'age': 21}\n\nstudent_info('Math', 'Art', name='John', age=21)\n")),(0,l.kt)("h4",{id:"unpacked"},"Unpacked"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"*list"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"**dictionary"),"\u4ee3\u8868unpacked\uff0c\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u5728\u50b3\u5165function\u6642\u5229\u7528\u9019\u500b\u6280\u5de7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def student_info(*args, **kwargs):\n    print(args)\n    print(kwargs)\n\ncourses = ['Math', 'Art']\ninfo = {'name': 'John', 'age': 21}\n\nstudent_info(*courses, **info)\n")),(0,l.kt)("h2",{id:"function-annotations"},"Function Annotations"),(0,l.kt)("p",null,"Python 3\u7684\u51fd\u5f0f\u8a3b\u89e3\uff0c\u8b93\u4f60\u5728\u5b9a\u7fa9\u53c3\u6578\u6642\u5c0d\u53c3\u6578\u548c\u8fd4\u56de\u503c\u6dfb\u52a0\u8a3b\u89e3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def foo(a: int, b: "this is b", c: str = 5) -> tuple:\n    return a, b, c\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a: int")," \u662f\u53c3\u6578\u8a3b\u89e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"c: str = 5"),"\u662f\u6709default\u503c\u7684\u53c3\u6578\u8a3b\u89e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-> tuple"),"\u662f\u56de\u50b3\u503c\u7684\u8a3b\u89e3")),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"__annotations__"),"\u4f86\u5f97\u5230"),(0,l.kt)("h2",{id:"libaries-packages--modules-framework\u5dee\u7570"},"libaries, packages , modules, framework\u5dee\u7570"),(0,l.kt)("p",null,"function\u662f\u5c07code\u6253\u5305\u7684\u6700\u5c0f\u55ae\u4f4d\uff0c\u800clibaries, packages , modules, framework\u4e5f\u662f\u985e\u4f3c\u7684\u6982\u5ff5\uff0c\u6253\u5305code\u4ee5\u9054\u5230\u7279\u5b9a\u6548\u679c\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u540d\u8a5e\u89e3\u91cb\u3002"),(0,l.kt)("h3",{id:"modules"},"Modules"),(0,l.kt)("p",null,"\u5e6b\u52a9\u4f60\u7684code\u8b8a\u5f97\u66f4\u6709\u7d44\u7e54\u6027\uff0c\u4e5f\u5c31\u662f\u5c07\u76f8\u95dc\u7684code\u6253\u5305\u5728\u4e00\u8d77\uff0c\u8b93\u4f60\u53ef\u4ee5\u5728\u5176\u4ed6\u5730\u65b9import\u9032\u4f86\u4f7f\u7528\u3002\u53ef\u4ee5\u8aaamodule\u5c31\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u4e00\u7d91\u76f8\u95dc\u7684\u7a0b\u5f0f\u78bc\u88ab\u5132\u5b58\u5728\u9644\u6a94\u540d\u70ba",(0,l.kt)("inlineCode",{parentName:"strong"},".py")),"\u3002\u88e1\u9762\u53ef\u4ee5\u662ffunction, classes, or variables\u3002"),(0,l.kt)("p",null,"\u4e00\u4e9b\u5e38\u7528\u7684modules : random, datetime, re\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ex")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6709\u4e00\u6a94\u6848 < hello.py >\u5167\u542b\u4e00function ",(0,l.kt)("inlineCode",{parentName:"li"},"hello_message"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def hello_message(msg):\n    print('Hello, {}'.format(msg))\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u5176\u4ed6\u6a94\u6848\u4e2dimport")),(0,l.kt)("p",null,"\u6b64\u5916\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"module.__file__"),"\u53ef\u4ee5\u627e\u5230\u8a72module\u7684\u6240\u5728\u4f4d\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# import method 1\nimport hello\n\nhello.hello_message('World')\n\n#import method 2\nfrom hello import hello_message\n\nhello_message('World')\n")),(0,l.kt)("h3",{id:"packages"},"Packages"),(0,l.kt)("p",null,"\u82e5\u958b\u767c\u8f03\u5927\u5c08\u6848\uff0c\u53ef\u80fd\u6703\u6709\u5f88\u591a\u4e0d\u540cmodules\uff0c\u9020\u6210\u7ba1\u7406\u4e0a\u7684\u56f0\u96e3\u3002\u56e0\u6b64 packages\u5c31\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u4e00\u500b\u8cc7\u6599\u593e\u88e1\u9762\u8490\u96c6\u4e86\u591a\u500bmodules"),"\uff0c\u5141\u8a31module namespace\u6709 ",(0,l.kt)("strong",{parentName:"p"},"\u968e\u5c64\u67b6\u69cb"),"\uff0c\u5c31\u50cf\u4e00\u822c\u5728\u8cc7\u6599\u593e\u4e2d\u4e5f\u80fd\u6709\u5b50\u8cc7\u6599\u593e\uff0c\u4e5f\u53ef\u4ee5\u5c07modules\u7d44\u7e54\u6210packages\u548csubpackages\u3002"),(0,l.kt)("p",null,"\u4e00\u4e9b\u5e38\u7528\u7684packages : Numpy, pandas"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ex")),(0,l.kt)("p",null,"package\u7d50\u69cb\u53ca\u5f15\u5165\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 my_module\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 training\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u251c\u2500\u2500 training.py\n\u2502   \u2502   \u251c\u2500\u2500 loss.py\n\u2502   \u2502   \u2514\u2500\u2500 test.py\n\u2502   \u251c\u2500\u2500 submission\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u251c\u2500\u2500 submit.py\n\u2502   \u2502   \u251c\u2500\u2500 production.py\n\u2502   \u2502   \u2514\u2500\u2500 test.py\n# import method 1\nimport my_model.training.loss\n\n#import method 2\nfrom my_model.training import loss\n")),(0,l.kt)("h3",{id:"libraries"},"Libraries"),(0,l.kt)("p",null,"\u901a\u5e38\u8aaalibrary\u5305\u542b\u8a31\u591amodules\u548cpackages\u6210\u70ba\u4e00\u500b\u53ef\u91cd\u8907\u5229\u7528\u7684\u7a0b\u5f0f\u78bc\u584a\u3002\u4f46\u56e0\u70baPackage\u672c\u8eab\u4e5f\u53ef\u4ee5\u5305\u542b\u5f88\u591asubpackages\uff0c\u6240\u4ee5Library\u6709\u6642\u4e5f\u6703\u548cPackages\u4e92\u63db\u4f7f\u7528\u3002\u4e00\u822c\u4f86\u8aaa\uff0c\u9084\u662f\u8f03\u5e38\u7a31 ",(0,l.kt)("strong",{parentName:"p"},"package\u5305\u542b\u8a31\u591amodules\uff1bLibrary\u5305\u542b\u8a31\u591apackages"),"\u3002"),(0,l.kt)("p",null,"\u5e38\u7528\u7684\u50cf\u662f : Matplotlib, Beautiful Soup\u3002"),(0,l.kt)("p",null,"packages\u63d0\u5230\u7684Numpy, pandas\u4e5f\u6703\u88ab\u7a31\u4f5cLibrary"),(0,l.kt)("h3",{id:"framework"},"Framework"),(0,l.kt)("p",null,"\u8ddflibrary\u5f88\u50cf\uff0c\u5305\u542b\u5f88\u591amodules\u8ddfpackages\u5e6b\u52a9\u4f7f\u7528\u8005\u57f7\u884c\u7279\u5b9a\u7a0b\u5e8f\uff0c\u52a0\u5feb\u958b\u767c\u6d41\u7a0b\uff0c\u4f46framework\u6bd4library\u8907\u96dc\u5f97\u591a\u3002framework\u5305\u542b\u8a72\u61c9\u7528\u7a0b\u5f0f\u57fa\u672c\u7684\u6d41\u7a0b\u548c\u67b6\u69cb\u3002"),(0,l.kt)("p",null,"\u5e38\u7528\u7684framework\u6709Django\u548cFlask\u3002"))}m.isMDXComponent=!0}}]);