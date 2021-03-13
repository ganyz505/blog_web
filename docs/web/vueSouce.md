# vue源码笔记

## new Vue发生了什么

        new Vue > init > $mount > compile > render > vnode > patch > DOM

## Vue 数据驱动视图

new vue创建一个实例对象。首先调用init方法初始化。Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等等。

initState(vm)发生在beforeCreate和created之间

最后调用 vm.$mount 方法挂载vm，挂载的目标就是把模板渲染成最终的 DOM

compile。.vue template 最后都会转化为render函数

vm._render 最终是通过执行 createElement 方法并返回的是 vnode

把这个 VNode 渲染成一个真实的 DOM 并渲染出来，这个过程是通过 vm._update 完成的。它被调用的时机有 2 个，一个是首次渲染，一个是数据更新的时候

update里有patch、insert操作。插入的顺序是先子后父。


## 组件化思想

普通vNode和组件vNode

编写一个组件实际上是编写一个 JavaScript 对象，对象的描述就是各种配置

生命周期。在 created 钩子函数中可以访问到数据，在 mounted 钩子函数中可以访问到 DOM，在 destroy 钩子函数中可以做一些定时器销毁工作

## 响应式原理

创建响应式对象
依赖收集
派发更新

initState 方法主要是对 props、data等属性做了初始化操作

Dep 是整个 getter 依赖收集的核心，实际上是个数组，保存watcher。 Vue 设计了在每次添加完新的订阅，会移除掉旧的订阅，v-if的情况。

setter触发时遍历Dep里的所有watcher执行它的update

new Vue 的时候首先observe(data)将数据变成响应式的，然后new一个watcher，watcher里会访问data里的属性值，触发getter将自己添加进Dep。setter触发时派发更新。



## diff算法原理

当新旧VNode树在同一层具有相同的VNode节点时，才会继续对其子节点进行比较。一旦旧VNode树同层中的节点在新VNode树中不存在或者是多余的，都会在新的真实DOM中进行添加或者删除。