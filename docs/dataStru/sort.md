## 冒泡排序

//比较相邻的元素,最后的元素会是最大的数。

        function bubbleSort(arr) {
            let len = arr.length;
            for (let i = 0; i < len - 1; i++) {
                for (let j = 0; j < len - 1 - i; j++) {
                    if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                    }
                }
            }
            return arr;
        }

## 选择排序

//把最小的选到最前面

        function selectionSort(arr) {
            let len = arr.length;
            let minIndex;
            for (let i = 0; i < len - 1; i++) {
                minIndex = i;
                for (let j = i + 1; j < len; j++) {
                    if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                        minIndex = j;                 // 记录最小数索引
                    }
                }
                [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
            }
            return arr;
        }
    
## 插入排序

//捡扑克牌

        function insertSort(arr) {
            for(let i = 1; i < arr.length; i++) {   // 外循环从1开始，默认arr[0]是有序段
                for(let j = i; j > 0; j--) {        // j = i,将arr[j]依次插入有序段中
                    if(arr[j] < arr[j-1]) {
                        [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                    } else {
                        break; // 证明有序，退出循环
                    }
                }
            }
            return arr;
        }
    
## 快速排序

// 取数组第一个值为基准值，把比它小的放a数组，大的放b数组。
    
        function quickSort(arr) {
            if (arr.length <= 1) {
                return arr;  //递归出口
            }
            var left = [],
                right = [],
        
                // 1. 注意splice后，数组长度少了一个
                current = arr.splice(0, 1);         
        
                // 2. 取中间值
                // middle = Math.floor((arr.length - 1) / 2) 
                // current = arr[middle]
                
            for (let i = 0; i < arr.length; i++) {
                arr[i] < current ? left.push(arr[i]) : right.push(arr[i]);
            }
        
            return quickSort(left).concat(current, quickSort(right)); //递归
        }
    
## 归并排序