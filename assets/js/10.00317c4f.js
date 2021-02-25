(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(n,t,e){"use strict";e.r(t);var v=e(41),_=Object(v.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("js系统")]),n._v(" "),e("p",[n._v("1、数据类型、类型检测转换、拷贝")]),n._v(" "),e("p",[n._v("2、执行上下文、闭包、this指向")]),n._v(" "),e("p",[n._v("3、原型链、继承")]),n._v(" "),e("p",[n._v("4、事件循环")]),n._v(" "),e("p",[n._v("6、V8、内存机制、GC回收机制")]),n._v(" "),e("p",[n._v("7、DOM事件，事件捕获冒泡委托等")]),n._v(" "),e("p",[n._v("8、异步编程")]),n._v(" "),e("p",[n._v("9、webpack")]),n._v(" "),e("p",[n._v("##############################################")]),n._v(" "),e("p",[n._v("1、\n类型检测。")]),n._v(" "),e("p",[n._v("typeof返回类型字符串，可以检测原始类型，引用类型除了函数function都是object。null返回object是bug。instanceof返回布尔值，判断一个对象是不是另一个的实例，用来判断引用类型。Boolean, Number和String基本包装对象。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("var str1 = 'hello world'\nstr1 instanceof String // false\nvar str2 = new String('hello world')\nstr2 instanceof String // true\n")])])]),e("p",[n._v("类型转换")]),n._v(" "),e("p",[n._v("if()和==会隐式转换，最后转为数字进行比较。==和===，先判断类型是否相同。Object.is(a,b)判断两个值是否相等，在===的基础上修复了+0和-0（false）及NaN和NaN（true）。")]),n._v(" "),e("p",[n._v("赋值、深浅拷贝")]),n._v(" "),e("p",[n._v("赋址（将一个对象类型的赋给变量）是复制变量指向的地址，基本类型的值改变也会跟着变；浅拷贝拷贝了第一层，基本类型不会跟着变，引用类型还是只复制了引用地址。常用的有assign(),展开...,数组的slice()等。单=的意思是创建或修改变量在内存中的指向。参数传值，传引用类型时是将形参指向实参相同的地址。")]),n._v(" "),e("p",[n._v("js两大链！作用域链和原型链。#################################")]),n._v(" "),e("p",[n._v("2、执行上下文")]),n._v(" "),e("p",[n._v("首先js是词法作用域（静态作用域），函数的作用域在函数定义的时候就决定了。查找变量按函数定义的位置通过作用域链查找。\njs里的可执行代码无非就是全局代码，函数代码，eval代码。主要关注函数代码。执行一个函数的时候会先进行准备工作，创建执行上下文，然后才执行。\n执行上下文存储在执行栈中，LIFO后进先出。首先全局执行上下文被压入执行上下文栈中，初始化一个全局执行上下文栈。所有的函数执行上下文都包在全局执行上下文中，不同函数的调用会不断的压栈弹栈。当一个函数中又调用了另外的函数，则继续压栈，以此类推。")]),n._v(" "),e("p",[n._v("创建阶段（1）绑定this（2）创建词法环境（3）创建变量环境。ES6中，词法环境存储函数声明和变量（let const）绑定，变量环境用于存储变量（var）绑定。词法环境分全局环境和函数环境。\n变量对象存储了上下文中定义的函数和变量声明。变量对象的创建过程：\n全局上下文的变量对象初始化是全局对象\n函数上下文的变量对象初始化只包括 Arguments 对象（表示传入的参数）\n在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值\n在代码执行阶段，会再次修改变量对象的属性值")]),n._v(" "),e("p",[n._v("函数内有一个scope属性，用于保存所有的父变量对象。当前函数激活时将自己的活动变量对象添加到scope作用域链的前端，形成完整作用域链。每一个子函数都会拷贝上级的作用域，形成一个作用域的链条。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("checkscopeContext = {\n        AO: {\n            arguments: {\n                length: 0\n            },\n            scope: undefined,\n            f: reference to function f(){}\n        },\n        Scope: [AO, globalContext.VO],\n        this: undefined\n    }\n")])])]),e("p",[n._v("VO变量对象全局，AO活动对象函数上下文。")]),n._v(" "),e("p",[n._v("变量对象>执行上下文>执行栈>执行")]),n._v(" "),e("p",[n._v("变量、函数提升")]),n._v(" "),e("p",[n._v("变量只是声明提升，值是undefine。函数提升整个提升，有多个同名函数声明时后面的会覆盖。函数会全部提升上去，变量提升声明后执行到赋值操作会重新赋值。function定义函数和var func = function(){}表达式定义是不同的。")]),n._v(" "),e("p",[n._v("闭包")]),n._v(" "),e("p",[n._v("是一个函数，可以访问另外一个函数作用域中的变量的函数。MDN 对闭包的定义为：闭包是指那些能够访问自由变量的函数。自由变量，既不是参数也不是函数内的局部变量。正常来说一个普通函数内定义的局部变量，在函数执行完之后就会被内存回收，但是通过闭包的方式不会还可以获取到他的值。通常我们说的闭包即一个函数作为父函数的返回值，这个函数引用了父函数作用域中的变量。")]),n._v(" "),e("p",[n._v("this（动态，执行时确定）")]),n._v(" "),e("p",[n._v("全局上下文和直接调用函数（函数表达式赋值再调用），window/undefined")]),n._v(" "),e("p",[n._v("dom事件绑定中指向dom")]),n._v(" "),e("p",[n._v("对象.方法，指向对象")]),n._v(" "),e("p",[n._v("new构造函数，指向实例对象")]),n._v(" "),e("p",[n._v("箭头函数的 this 始终指向函数定义时的 this，而非执行时。箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this为 window。")]),n._v(" "),e("p",[n._v("3、通过_proto_实现原型链继承")]),n._v(" "),e("p",[n._v("每个对象拥有一个原型对象，通过 __proto__指针指向上一个原型 ，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向null。这种关系被称为原型链 (prototype chain)，通过原型链一个对象会拥有定义在其他对象中的属性和方法。")]),n._v(" "),e("p",[n._v("Person.prototype.constructor === Person\n原型对象有一个constructor属性，定义了一个构造函数，原型对象创建对象时调用这个构造函数。\nPerson.prototype.constructor === person.constructor  //true\n当获取person.constructor时，其实person中并没有constructor属性,当不能读取到constructor属性时，会从 person 的原型也就是Person.prototype中读取，正好原型中有该属性")]),n._v(" "),e("p",[n._v("ES6的class和extend语法糖。")]),n._v(" "),e("p",[n._v("4、事件循环event Loop")]),n._v(" "),e("p",[n._v("宏任务和微任务。宏任务包括setTimeout等延时任务。微任务有promise.then()等。先执行宏任务，再执行宏任务里的微任务。")]),n._v(" "),e("p",[n._v("6、栈，堆。内存回收（标记清除）。")]),n._v(" "),e("p",[n._v("局部作用域的变量，函数执行完后就被回收了。闭包还可以通过作用域链访问到。")]),n._v(" "),e("p",[n._v("编译器 编译得到二进制文件机器码\n解释器 将ast转成字节码\nv8既有解释器也有编译器，两者结合，即时编译。")]),n._v(" "),e("p",[n._v("7.域名dns解析得到ip，请求服务器时涉及缓存。协商缓存last-modified强制缓存cache-control。小js，图片缓存在memory内存，css，大文件在dist磁盘。请求html后，解析css先引入，js放在尾部。js串行。得到文件后渲染涉及重绘和重排。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("querySelector():            // 获取指定节点的第一个\nquerySelectorAll():         // 获取符合条件的节点，返回数组\n")])])]),e("p",[n._v("所谓事件冒泡就是事件像泡泡一样从最开始生成的地方一层一层往上冒，直至最外层的html或document。")]),n._v(" "),e("p",[n._v("事件捕获和事件冒泡相反，事件捕获是自上而下执行，我们只需要将addEventListener的第三个参数改为true就行。")]),n._v(" "),e("p",[n._v("事件委托，通俗的说就是将元素的事件委托给它的父级或者更外级的元素处理，它的实现机制就是事件冒泡。")]),n._v(" "),e("p",[n._v("8.setTimeout延时函数\ncallback，通过往函数最后一个参数传入回调函数的方式。嵌套问题。\npromise，链式调用。\nasync返回promise。")]),n._v(" "),e("p",[n._v("9、在前端工程化开发中，有各种模块的import、export，webpack模块打包工具根据依赖关系将模块打包成相应的bundle。一般涉及babel将ES6转为ES5，生成依赖图谱（一个对象），最后打包生成浏览器可执行的一个js文件。")])])}),[],!1,null,null,null);t.default=_.exports}}]);