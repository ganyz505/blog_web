### （一）栈

##### 栈后进先出

    function Stack() {
        this.count = 0;
        this.storage  = [];
    
        // 入栈
        this.push = (val) => {
            this.storage[this.count] = val;
            this.count++;
        }
    
        // 出栈 => 删除栈顶元素，并返回
        this.pop = () => {
            if (this.count === 0) {
                return undefined;
            }
            this.count--;
            return this.storage[this.count];
        }
    
        // 查看 => 查看栈顶元素
        this.peek = () => {
            return this.storage[this.count - 1]
        }
    
        // 栈长度
        this.length = () => {
            return this.count;
        }
    
        // 清空栈
        this.clear = () => {
            this.storage = [];
            this.count = 0;
        }
    }
    
#### 判断一个字符串是不是回文
    
    function isPalindrome(word) {
        const stack = new Stack();
    
        for (let i = 0; i < word.length; i++) {
            stack.push(word[i])
        }
        
        let words = '';
        while(stack.length() > 0) {
            words += stack.pop();
        }
    
        return word == words;
    }
    
    console.log(isPalindrome('level'))  // true 
    console.log(isPalindrome('1001'))   // true
    console.log(isPalindrome('word'))   // false

### （二）队列
#####     队列先进先出
    function Queue() {
        this.collection = [];
        this.enqueue = (val) => {
            this.collection.push(val)
        }
        this.dequeue = () => {
            return this.collection.shift()
        }
        this.front = () => {
            return this.collection[0]
        }
        this.back = () => {
            return this.collection[this.collection.length - 1]
        }
        this.toString = () => {
            return this.collection.join('-')
        }
        this.empty = () => {
            return this.collection.length === 0;
        }
        this.size = () => {
            return this.collection.length;
        }
        this.clear = () => {
            this.collection = []
        }
    }
#####     优先队列 level高的排前面
    // 重新定义enqueue方法
    this.enqueue = (item, level) => {
        const data = {item, level};
        if (this.empty()) {
            this.collection.push(data)
        } else {
            let add = false;
            for (let i = 0; i < this.size(); i++) {
                if (level < this.collection[i][1]) {
                    this.collection.splice(i, 0, data)
                    add = true;
                    break;
                }
            }
            add && this.collection.push(data)
        }
    }
#####     循环队列 队首出队放到队尾 击鼓传花
    const drumGame = function(names, number) {
        const queue = new Queue()
        for (let i = 0; i < names.length; i++) {
            queue.enqueue(names[i])
        }
    
        while (queue.size() > 1) {
            for (let i = 0; i < number; i++) {
                // 这句是循环队列的核心
                // 给定一个数字，然后迭代队列。从队列开头移除一项，再将其添加到队列末尾
                // 模拟击鼓传花（如果你把花传给了旁边的人，你被淘汰的威胁就立刻解除了）
                queue.enqueue(queue.dequeue())  
            }
            const loser = queue.dequeue()
            console.log(loser + ' 出局')
        }
        return queue.dequeue()           // 留下的最后一个就是胜利者
    }
    
    const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
    const winner = drumGame(names, 7) // 假设每轮传花 7 次
    console.log('胜利者是: ' + winner)
    
    // Camila 出局
    // Jack 出局
    // Carl 出局
    // Ingrid 出局
    // 胜利者是: John
    
#####     实现基数排序
    分别对个位、十位存进10个队列里再依次取出来
    
###     （三）链表
##### 如果你发现数组在实际使用时很慢，就可以考虑使用链表来替代它。除了对数据的随机访问，链表几乎可以用在任何可以使用一维数组的情况中。如果需要随机访问，数组仍然是更好的选择。
    function Node(element) {
        this.element = element;     // 当前节点的元素
        this.next = null;           // 下一个节点链接
    }
#####     操作
    function linkedList() {
        let head = null,                // 第一个链表 默认标识
            length = 0,                 // 链表长度
            current;                    // 当前传入元素
    
        // 添加
        this.push = (el) => {
            const node = new Node(el)
            if (head === null) {   // 插入第一个链表
                head = node;
            } else {
            
            //从第一个往下走
                current = head;
                while (current.next) {  // 获取最后一个链表
                    current = current.next
                }
                current.next = node     // 将最后一个链表的next赋值为新元素
            }
            length++    // 链表长度
        }
    
        // 移除
        this.removeAt = (index) => {
            if (index >= 0 && index < length) {     // 是否越界
                // 移除第一个链表，特殊对待
                if (index === 0) {
                    head = head.next
                } else {
                    let previous;
                    current = head;
                    for (let i = 0; i < index; i++) {
                        previous = current
                        current = current.next
                    }
                    // 移除当前索引的 current
                    previous.next = current.next
                }
                length--
                return head
            }
            return undefined;
        }
    
        // 指定位置添加
        this.insert = (el, index) => {
            if (index >= 0 && index < length) {     // 是否越界
                const node = new Node(el);
                if (index === 0) {
                    current = head
                    node.next = current
                    head = node
                } else {
                    let previous;
                    current = head;
                    for (let i = 0; i < index; i++) {
                        previous = current
                        current = current.next
                    }
                    // 介于 previous & current 两者间插入
                    previous.next = node
                    node.next = current
                }
                length++
                return head
            }
            return false;
        }
    
        // 查找是否存在，有 => 索引，否 => -1
        this.indexOf = (el) => {
            current = head
            for (let i = 0; i < length; i++) {
                if (current.element === el) {
                    return i
                }
                current = current.next
            }
            return -1
        }
    
        // 移除
        this.remove = (element) => {
            this.removeAt(this.indexOf(element))
        }
    
        // 是否为空
        this.isEmpty = () => {
            return length === 0
        }
    
        // 获取长度
        this.size = () => {
            return length
        }
    
        // 获取最开头的链表
        this.getHead = () => {
            return head
        }
    
        // 打印链表
        this.toString = () => {
            if (head === null) {
                return ''
            }
            current = head
            let str = current.element
            while (current.next) {
                current = current.next
                str += current.element
            }
            return str
        }
    }
###     （四）二叉树
#####     二叉搜索树（BST）是二叉树的一种，但是只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大的值。
    // 节点定义
    function Node(key) {
        this.key = key
        this.left = null;
        this.right = null;
    }
    function BinarySearchTree() {
        let root = null;
        // 插入
        this.insert = (key) => {
            const node = new Node(key)
            if (root == null) {     // 设值当前节点为根节点
                root = node
            } else {
                insertNode(root, node)
            }
            function insertNode(parent, node) {
                if (parent.key > node.key) {            // 当前节点大于新节点，则新节点放左边
                    if (parent.left === null) {         // 若为空，则直接赋值为新节点, 出栈
                        parent.left = node
                    } else {
                        insertNode(parent.left, node)   // 依次从根节点递归
                    }
                } else if (parent.key < node.key) {     // 当前节点小于新节点，则新节点放右边
                    if (parent.right === null) {
                        parent.right = node
                    } else {
                        insertNode(parent.right, node)
                    }
                }
            }
            return root
        } 
    }
##### 树的遍历
###### 中序 从最小到最大的顺序访问所有节点
###### 先序 先访问节点本身（1），然后再访问它的左侧子节点（2），最后是右侧子节点（3）
###### 后序 先访问左侧子节点（1），然后是右侧子节点（2），最后是父节点本身（3）。
##### ### 查找运算
最大值&最小值
###### 一直遍历右子树，直到右子树的某个节点的 right 为 null 时，该节点保存的即为最大值
###### 一直遍历左子树，直到左子树的某个节点的 left 为 null 时，该节点保存的即为最小值

指定值
###### 根据上面添加新节点可得知：当前节点小于新节点，则新节点放右边，反之放左边
###### 查找的时候，根据key值进行判断，该往左右还是右边循环

### 集合set、字典 （map）