"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4818],{3905:function(n,e,r){r.d(e,{Zo:function(){return c},kt:function(){return d}});var t=r(7294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var p=t.createContext({}),s=function(n){var e=t.useContext(p),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},c=function(n){var e=s(n.components);return t.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?t.createElement(m,i(i({ref:e},c),{},{components:r})):t.createElement(m,i({ref:e},c))}));function d(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l.mdxType="string"==typeof n?n:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8975:function(n,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},p="Python - Decorator",s={unversionedId:"Python/Python - decorator",id:"Python/Python - decorator",title:"Python - Decorator",description:"\u5b78\u7fd2\u8cc7\u6e90 https://www.youtube.com/c/Coreyms",source:"@site/docs/Python/Python - decorator.md",sourceDirName:"Python",slug:"/Python/Python - decorator",permalink:"/docs/Python/Python - decorator",editUrl:"https://github.com/yehs1225/yehs1225.github.io/docs/Python/Python - decorator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python - Class",permalink:"/docs/Python/Python - Class"},next:{title:"React_ES6",permalink:"/docs/Reactjs/React_ES6"}},c=[{value:"First-Class Functions",id:"first-class-functions",children:[],level:2},{value:"Closure",id:"closure",children:[],level:2},{value:"Decorator",id:"decorator",children:[{value:"Type - Function",id:"type---function",children:[],level:3},{value:"Type - Class",id:"type---class",children:[],level:3},{value:"Combine 2 wrapper",id:"combine-2-wrapper",children:[{value:"wrapper 1",id:"wrapper-1",children:[],level:4},{value:"wrapper 2",id:"wrapper-2",children:[],level:4},{value:"Combine 2 wrapper",id:"combine-2-wrapper-1",children:[],level:4}],level:3}],level:2}],u={toc:c};function f(n){var e=n.components,r=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python---decorator"},"Python - Decorator"),(0,o.kt)("p",null,"\u5b78\u7fd2\u8cc7\u6e90 : ","[Corey]",": ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/c/Coreyms"},"https://www.youtube.com/c/Coreyms")),(0,o.kt)("h2",{id:"first-class-functions"},"First-Class Functions"),(0,o.kt)("p",null,'\u5982\u679c\u4e00\u7a0b\u5f0f\u8a9e\u8a00\u6709first-class functions\u4ee3\u8868\u5b83\u5c07function\u8996\u70ba"first-class citizens"\u3002'),(0,o.kt)("p",null,'\u800cfirst-class citizens\uff08\u6709\u6642\u53c8\u7a31\u4f5cfirst-class objects\uff09\u7684\u5b9a\u7fa9\uff1a\u4e00\u500b\u500b\u9ad4\uff08entity\uff09\u652f\u63f4\u5176\u4ed6\u500b\u9ad4\u9032\u884c\u5c0d\u5176\u4efb\u4f55\u64cd\u4f5c\uff08operation\uff09\uff0c\u9019\u4e9b\u64cd\u4f5c\u5305\u542b"\u88ab\u7576\u4f5cargument\u50b3\u5165"\u3001"\u88abfunction\u56de\u50b3"\u3001"\u88ab\u6307\u5b9a\uff08assigned\uff09\u6210variable"\u3002'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u88ab\u6307\u5b9a\u6210variable & \u88ab\u7576\u4f5cargument\u50b3\u5165"),(0,o.kt)("p",{parentName:"li"},"\u6211\u5011\u5b9a\u7fa9\u4e86\u4e00function ",(0,o.kt)("inlineCode",{parentName:"p"},"square"),"\uff0c\u53ef\u4ee5\u5c07\u5176assign\u7d66\u8b8a\u6578",(0,o.kt)("inlineCode",{parentName:"p"},"f"),"\u3002\u53e6\u5916\uff0c\u539f\u672c\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"map()"),"\u5c31\u662f\u62fffunction\u4f5c\u70baargument\u7684\u4f8b\u5b50\uff0c\u5728\u9019\u88e1\u6211\u5011\u81ea\u5df1\u505a\u4e00\u500b",(0,o.kt)("inlineCode",{parentName:"p"},"map()"),"\u7684\u529f\u80fd\uff0c\u540c\u6a23\u4e5f\u662f\u4ee5function\u4f5c\u70baargument\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def square(x):\n    return x*x\n\nf = square\ndef my_map(func,arg_list):\n    result=[]\n    for _ in arg_list:\n        result.append(func(_))\n    return result\n\nsquares = my_map(square,[1,2,3,4,5])\nprint(squares)#[1,4,9,16,25]\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u88abfunction\u56de\u50b3"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def logger(msg):\n\n    def log_message():\n        print('Log:',msg)\n    \n    return log_message\n\nlog_hi = logger('Hi!')\nlog_hi()\n")))),(0,o.kt)("h2",{id:"closure"},"Closure"),(0,o.kt)("p",null,"Closure\u662f\u4e00\u500brecord\uff0c\u6703\u5132\u5b58function\u548cenvironment\uff1a\u53ef\u4ee5\u6620\u5c04\uff08mapping\uff09function\u5167\u7684\u6bcf\u4e00\u500bfree variable\u7684\u503c\u6216\u5132\u5b58\u4f4d\u7f6e\u5230\u5167\u90e8\u7684function\u7576\u4e2d\uff08\u7576closure\u88ab\u5275\u9020\u6642\uff09\u3002\u4e0d\u540c\u65bc\u4e00\u822cfunction\uff0c\u5728closure\u88e1\u7684function\u53ef\u4ee5\u900f\u904eclosure\u6216\u53d6\u539f\u5148\u4e0d\u5728\u5176\u4f5c\u7528\u57df\u7684\u6771\u897f\u3002"),(0,o.kt)("p",null,"\u50cf\u662f\u4e0b\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"inner_func()"),"\uff08\u7c21\u7a31inner\uff09\u61c9\u8a72\u662f\u5c6c\u65bc",(0,o.kt)("inlineCode",{parentName:"p"},"out_func()"),"\uff08\u7c21\u7a31outer\uff09\u7684\u4e00\u90e8\u5206\uff0c\u56e0\u6b64\u7167\u7406\u4f86\u8aaainner\u662f\u4e0d\u80fd\u62ff\u5230outer\u7684\u6771\u897f\u7684\uff0c\u4f46\u662f\u56e0\u70ba\u5728outer\u662f\u56de\u50b3\u5176\u5167\u90e8\u7684inner\uff0c\u4e5f\u5c31\u5f62\u6210\u4e86closure\uff0cinner\u53ef\u4ee5\u5b58\u53d6outer\u7684\u8b8a\u6578",(0,o.kt)("inlineCode",{parentName:"p"},"message"),"\uff0c\u6b64\u8b8a\u6578\u4e5f\u5c31\u7a31\u70bafree variable\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def out_func(msg):\n    message = msg\n\n    def inner_func():\n        print(message)#message\u5c0d\u4ed6\u4f86\u8aaa\u662ffree variable\uff0c\u56e0\u70ba\u4e26\u975e\u5b9a\u7fa9\u5728\u81ea\u5df1\u7684func\uff0c\u4f46\u53ef\u4ee5\u5b58\u53d6\n\n    return inner_func\n\nhi_func=out_func("hi")\nhello_func=out_func("hello")\n\nhi_func()\nhello_func()\n')),(0,o.kt)("h2",{id:"decorator"},"Decorator"),(0,o.kt)("h3",{id:"type---function"},"Type - Function"),(0,o.kt)("p",null,'decorator\u5176\u5be6\u5c31\u662f\u628a\u4e00function\u4e1f\u5165\u4e00\u500b\u5b9a\u7fa9\u597d\u7684decorator function\uff0c\u53bb\u505a\u60f3\u8981\u7684"\u4fee\u98fe"\uff0c\u4e5f\u5c31\u662f\u8aaa\u6211\u5011\u53ef\u4ee5\u5c07\u4e00\u4e9b\u5e38\u7528\u7684\u52d5\u4f5c\u529f\u80fd\u5b9a\u7fa9\u5728wrapper\u88e1\u9762\uff0c\u5e6b\u5176\u4ed6function\u589e\u6dfb\u9019\u4e9b\u529f\u80fd\u3002\u4e0b\u9762\u53ef\u4ee5\u770b\u5230\u6700\u539f\u59cb\u7684\u505a\u6cd5- Method 1\uff0c\u4ee5\u53ca\u4e00\u822c\u5e38\u898b\u7684decorator\u7528\u6cd5',(0,o.kt)("inlineCode",{parentName:"p"},"@decorator_func"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def decorator_func(original_func):\n    def wrapper_func():\n        print(\'wrapper executed this before {}\'.format(original_func.__name__))\n        return original_func()\n    return wrapper_func\n\n#Method 1 to use the decorator function\ndef display():\n    print("display function ran")\n    \ndecorated_display = decorator_func(display)\ndecorated_display()\n\n#Method 2 (common one)\n@decorator_func\ndef display():\n    print("display function ran")\n\ndisplay()\n#wrapper executed this before display\n#display function ran\n')),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u4e00\u822c\u4f86\u8aaa\uff0cfunction\u90fd\u6703\u5e36\u5165arguments\uff0c\u6240\u4ee5\u52a0\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper_func(*args,**kwargs) "),"\uff0c\u4ee3\u8868\u53ef\u4ee5\u63a5\u53d7\u4efb\u610f\u6578\u76ee\u7684arguments\u548ckeyword arguments\uff0c\u4e5f\u4e00\u4f75\u56de\u50b3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def decorator_func(original_func):\n    def wrapper_func(*args,**kwargs):\n        print('wrapper executed this before {}'.format(original_func.__name__))\n        return original_func(*args,**kwargs)\n    return wrapper_func\n\n@decorator_func\ndef display_info(name,age):\n    print('display_info ran with arguments({}, {})'.format(name,age))\n\ndisplay_info('Wendy',22)\n#wrapper executed this before display_info\n#display_info ran with arguments(Wendy, 22)\n")),(0,o.kt)("h3",{id:"type---class"},"Type - Class"),(0,o.kt)("p",null,"\u53ef\u4ee5\u6539\u6210class\u5f62\u5f0f\uff0c\u6703\u8f38\u51fa\u4e00\u6a23\u7684\u7d50\u679c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class decorator_class(object):\n\n    def __init__(self,original_func):\n        self.original_func = original_func\n\n    def __call__(self,*args,**kwargs):\n        print('call method executed this before {}'.format(self.original_func.__name__))\n        return self.original_func(*args,**kwargs)\n    \n@decorator_class\ndef display():\n    print(\"display function ran\")\n\n@decorator_class\ndef display_info(name,age):\n    print('display_info ran with arguments({}, {})'.format(name,age))\n\ndisplay_info('Wendy',22)\n\ndisplay()    \n")),(0,o.kt)("h3",{id:"combine-2-wrapper"},"Combine 2 wrapper"),(0,o.kt)("h4",{id:"wrapper-1"},"wrapper 1"),(0,o.kt)("p",null,"\u4f8b\u5982\u8a2d\u5b9a\u4e00\u500bwrapper\uff0c\u8f38\u51fa\u57f7\u884c\u7684function\u4f5c\u70ba\u6a94\u540d\uff0c\u88e1\u9762\u5132\u5b58\u8a72function\u63a5\u6536\u5230\u7684arguments\u548ckeyword arguments\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def my_logger(orig_func):\n    import logging\n    logging.basicConfig(filename = '{}.log'.format(orig_func.__name__),level=logging.INFO)\n\n    def wrapper(*args,**kwargs):\n        logging.info(\n            'Ran with args: {}, and kwargs: {}'.format(args,kwargs)\n        )\n        return my_logger\n    \n    return wrapper\n\n@my_logger\ndef display_info(name,age):\n    print('display_info ran with arguments ({}, {})'.format(name,age))\n\ndisplay_info('Denny',24)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"INFO:root:Ran with args: ('Wendy', 22), and kwargs: {}\nINFO:root:Ran with args: ('Denny', 24), and kwargs: {}\n")),(0,o.kt)("h4",{id:"wrapper-2"},"wrapper 2"),(0,o.kt)("p",null,"\u8a08\u7b97function\u57f7\u884c\u6642\u9593"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def my_timer(orig_func):\n    import time\n\n    def wrapper(*args,**kwargs):\n        t1 = time.time()\n        result = orig_func(*args,**kwargs)\n        t2 = time.time()-t1\n        print('{} ran in {} sec'.format(orig_func.__name__,t2))\n        return result\n    \n    return wrapper\n    \nimport time\n@my_timer\ndef display_info(name,age):\n    time.sleep(1)\n    print('display_info ran with arguments ({}, {})'.format(name,age))\n\ndisplay_info('Denny',24)\n#display_info ran with arguments (Denny, 24)\n#display_info ran in 1.0098938941955566 sec\n")),(0,o.kt)("h4",{id:"combine-2-wrapper-1"},"Combine 2 wrapper"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u5011\u55ae\u7d14\u5c31\u662f\u628a\u525b\u624d\u7684\u5b9a\u7fa9\u597d\u7684decorator\u52a0\u4e0a\uff0c\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import time\n\n@my_logger\n@my_timer\ndef display_info(name,age):\n    time.sleep(1)\n    print('display_info ran with arguments ({}, {})'.format(name,age))\n\ndisplay_info('Denny',24)\n")),(0,o.kt)("p",null,"\u9019\u6a23\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"@"),"\u9806\u5e8f\uff0c\u5c31\u7b49\u65bc\u662f ",(0,o.kt)("strong",{parentName:"p"},"\u5148\u57f7\u884cmy_timer\u518d\u53bb\u57f7\u884cmy_logger")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"display_info = my_logger(my_timer(display_info('Denny',24)))\n")),(0,o.kt)("p",null,"\u63a5\u8457\u662f\u8005\u5370\u51fa\u57f7\u884c\u7684function\u540d\u7a31"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(display_info.__name__)\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u767c\u73fe\u8b8a\u6210wrapper\u3002\u6240\u4ee5\u6211\u5011\u61c9\u8a72\u8981\u5f15\u5165\u4e00\u9805\u5de5\u5177\u4f86\u78ba\u4fdd\u9032\u5165wrapper\u5f8c\uff0cfunction\u540d\u7a31\u4e0d\u6703\u88ab\u66f4\u52d5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from functools import wrap\n\ndef my_logger(orig_func):\n    #...\n    @wraps(orig_func)\n    def wrapper(*args,**kwargs):\n        #...    \n    return wrapper\n\ndef my_timer(orig_func):\n    #...\n    @wraps(orig_func)\n    def wrapper(*args,**kwargs):\n        #...\n    return wrapper\n")))}f.isMDXComponent=!0}}]);