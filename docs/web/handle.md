## call

        Function.prototype.call2 = function(context,...args){
        
            let context = context || window
            //获取调用call的函数，用this可以获取到
            context.fn = this
            let result = eval('context.fn(...args)')
            delete context.fn
            return result
        }

## apply

        Function.prototype.apply2 = function(context,args){
        
            let context = context || window
            context.fn = this
            let result = eval('context.fn(...args)')
            delete context.fn
            return result
        }
    
## bind

        Function.prototype.bind2 = function(context,...args) {
            <!--异常处理-->
            if(typeof this !== "function") {
                throw new Error("Function.prototype.bind - what is trying to be bound is not callable")
            }
            <!--保存this的值，他代表调用bind的函数-->
            var self = this;
            <!--空函数中转-->
            var fNop = function() {}
            var fbound = function () {
                self.apply(this instanceof self ? this : context,args.concat(Array.prototype.slice.call(arguments)))
            }
            fNop.prototype = this.prototype;
            fbound.prototype = new fNop;
            return fbound;
        }
    
## new

        function newFactory(ctor,...args) {
            if(typeof ctor !== 'function') {
                throw 'newOperator function the first param must be a function'
            }
            let obj = new Object();
            obj.__proto__ = Object.create(ctor.prototype);
            let res = ctor.apply(obj,...args);
            
            let isObject = typeof res === 'object' && typeof res !== null;
            let isFunction = typeof res === 'function';
            return isObject || isFunction ? res : obj
        }
    
## 寄生组合继承

        function Parent (name) {
            this.name = name;
            this.colors = ['red', 'blue', 'green'];
        }
        Parent.prototype.getName = function () {
            console.log(this.name)
        }
        function Child (name, age) {
            Parent.call(this, name);
            this.age = age;
        }
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
        
        const child1 = new Child('kevin', '18');
        
        console.log(child1);
    
## 防抖

        function debounce(func,wait,immediate) {
            let timeout,result
            return function() {
                const context = this
                const args = arguments
                if(timeout) clearTimeout(timeout)
                if(immediate) {
                    let callNow = !timeout
                    timeout = setTimeout(function(){
                        timeout = null;
                    },wait)
                    if(callNow) result = func.apply(context,args)
                }else{
                    timeout = setTimeout(function(){
                        func.apply(context,args)
                    },wait)
                }
            }
        }
## 节流

## 深拷贝

        function deepClone(target) {
            // is Object???
            if (typeof target == "object") {
                // array or object
                const result = Array.isArray(target) ? [] : {}
                for (let key in target) {
                    if (target.hasOwnProperty(key)) {
                        // 引用类型需要再次递归
                        result[key] = typeof target[key] == "object" ? deepClone(target[key]) : target[key]
                    }
                }
                return result
            }
            return target
        }
    
## promise

        //定义三种状态
        const PENDING = "pending";
        const FULFILLED = "fulfilled";
        const REJECTED = "rejected";
        
        function MyPromise(executor){
            const self = this;          // 缓存当前promise实例
            self.state = PENDING;       // 默认状态
            self.value = null;          // 成功的值
            self.error = null;          // 失败的值
            self.onFulfilled = null;    // 保存then中的回调
            self.onRejected = null;     // 保存catch中的回调
        
            const resolve = (value) => {
                if(self.state == PENDING){
                    setTimeout(() => {
                        self.state = FULFILLED;
                        self.value = value;
                        self.onFulfilled(self.value)
                    })
                }
            }
            
            const reject = (error) => {
                if(self.state == PENDING){
                    setTimeout(() => {
                        self.state = REJECTED;
                        self.error = error;
                        self.onRejected(self.value)
                    })
                }
            }
        
            // 如果executor执行报错，直接执行reject
            try{
                executor(resolve, reject)
            }catch(err){
                reject(err)
            }
        }
        
        MyPromise.prototype.then = function(onFulfilled, onRejected){
            if(this.state == PENDING){
                this.onFulfilled = onFulfilled
                this.onRejected = onRejected
            }
            else if(this.state == FULFILLED){
                onFulfilled(this.value)
            }
            else{
                onRejected(this.error)
            }
            return this;
        }
        
        //执行promise
        new MyPromise((resolve, reject) => {
            setTimeout(() => {
                resolve(1)
            }, 1000)
        }).then(res => {
            console.log(res) // 1
        })

## instanceof

        function myInstanceof(left, right) {
            //基本数据类型直接返回false
            if(typeof left !== 'object' || left === null) return false;
            //getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
            let proto = Object.getPrototypeOf(left);
            while(true) {
                //查找到尽头，还没找到
                if(proto == null) return false;
                //找到相同的原型对象
                if(proto == right.prototype) return true;
                proto = Object.getPrototypeOf(proto);
            }
        }