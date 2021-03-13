## let 和const 块级作用域
## 解构赋值 数组、对象
    
        //返回多个值
        let {foo , bar} = example()
        function example() {
            return {
            foo:1,
            bar:2
            }
        }
        //提取json数据
        let {id,status,data:number} = jsonData
        //展开
        [...obj] 
## 函数作用域，箭头函数

        第一题
        function foo() {
            console.log(a);
            a = 1;
        }
        
        foo(); // ???
        
        function bar() {
            a = 1;
            console.log(a);
        }
        bar(); // ???
第一段会报错：Uncaught ReferenceError: a is not defined。
    
第二段会打印：1。
    
这是因为函数中的 "a" 并没有通过 var 关键字声明，所有不会被存放在 AO 中。
第一段执行 console 的时候， AO 的值是：
    
        AO = {
            arguments: {
                length: 0
            }
        }
没有 a 的值，然后就会到全局去找，全局也没有，所以会报错。
    
当第二段执行 console 的时候，全局对象已经被赋予了 a 属性，这时候就可以从全局找到 a 的值，所以会打印 1。
    
第二题
        
        console.log(foo);
        
        function foo(){
            console.log("foo");
        }
        
        var foo = 1;
会打印函数，而不是 undefined 。
这是因为在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。


## 合并对象

        const target = { a: 1 };
        const source1 = { b: 2 };
        const source2 = { c: 3 };
        Object.assign(target, source1, source2);
        target // {a:1, b:2, c:3}

## symbol是不会重复的值，第七种基本数据结构
    
六种基本类型undefined、boolean、number、string、null、symbol

set集合和map字典
都不允许相同
都有增 删has，遍历
set类数组，key values一样。Array.from()方法转数组。[.. . set]也可。add
new Map([1,2,3])

map类对象，键可以是任何类型，而对象键只能是符串。get set
map转数组也是[.. . map]。转对象则遍历set
    
for in和for of
of是获取值，只遍历实例属性，不遍历原型。主用于数组，map set generator。
in是获取键名，主要用于对象，会遍历原型，效低。

## Proxy

        var obj = new Proxy({},{
        get: func
        set: func
        })
        obj.count=1
        //对Proxy实例操作才会生效

Reflect

将Object对象的一些明显属于语言内部的方法放到Reflect对象上。比如Object.defineProperty

## Promise

Promise对象的状态不受外界影响，只有异步操作的结果可以决定当前是哪种状态，其他任何操作都无法改变这个状态；一旦状态改变就不会再变。

new一个Promise对象,接受resolve和reject两个函数作为参数。Promise new之后会立即执行，如resolve则会调用then回调。

Promise中任何一个抛出的错误都会被最后一个catch捕获。如果promise链上某个步骤抛出了错误但是后面没有catch方法了，会导致这个错误不会被捕获也不会传递到外层。

        var p = Promise.all([p1,p2,p3]) //三个都resolv或者有一个reject触发回调
    
        var p = Promise.race([p1,p2,p3]) //只要有一个状态改变就会触发回调

Promise.resolve() 可以直接返回一个Resolved状态的Promise对象
    
Promise.reject()

        new Promise((resolve,reject) => {
        resolve(1);
        cosole.log(2)
        }).then(r=>{
        console.log(r)
        })
        //2
        //1
        
        new Promise((resolve,reject)=> {
        return resolve(1);
        //后面的不会执行
        console.log(2)
        })
        
axios取消请求。提供了api用来取消cancelToken。原理是在peomise里暴露一个回调函数直接resolve。

## Iterator和for of循环

遍历器对象有next()方法，每次调用返回{value:  done:  }。ES6规定默认的Iteratorj接口部署再数据结构的Symbol.iterator属性。是个fuc

具备Iterator的数据结构
Array、Map、Set、String、函数的arguments对象、NodeList对象

数组、set、map部署了，都返回遍历器对象
entries() [键名，键值]，map的iterator接口默认就是调用entries方法。keys() 建名values() 键值
 
## Generator
    
yield 是暂停标志，next()方法恢复执行。
Generator函数 （）执行返回一个遍历器对象，再调用next（）才会执行。执行到yield标志处，将yield后的值，表达式求值，函数则会执行。然后将值以{value: 值,done: }的形式返回。

co自动执行函数，yield后面要是promise。只要g函数还没执行到最后一步，next函数就调用自身。
        
        function run(gen) {
            var g = gen()
            function next(data) {
                var result = g.next(data);
                if(result.done) return result.value
                result.value.then(function(data){
                    next(data)
                })
            }
            next()
        }

## async
语法糖，将Generator函数和自动执行器包装在一个函数里。

yield后面可以是原始类型的值，会被转成一个立即resolve的promise，此时等同于同步操作。
    
async函数里有多个await，只要有一个await后面的promise变成了reject，那么整个async函数都会中断执行

        let [foo,bar] = await Promise.all([getFoo(),getBar()])

## class extend

        class Point{
        constructor(x,y) {
        this.x
        }
        toString() {}
        }
        
        
class中的constructor就是ES5里的构造函数，其他方法直接定义在原型Point.prototype上。

Object.assign(Point.prototype,{toString(){}})可往原型上添加方法。
    
p.hasOwnProperty('')可以判断变量或者方法是否在实例对象p上。

class里加static表示该定义在该类上的静态属性 方法，Point.toString()可以调用，new的实例上无法调用。

        class CPoint extends Point {
            constructor(x,y,color) {
                super(x,y);
                this.color = color;
            }
            toString() {
                return this.color + '' + super.toSting()
            }
        }
        
super()表示调用父类的构造函数，用来新建父类的this对象。
    
ES5的继承是先创造子类的实例对象this然后将父类的方法添加到this上面（Parent）.ES6的继承是先创造父类的实例对象然后再用字类的构造函数修改this对其进行加工。必须先在构造方法里调用super方法，才能使用this关键字。