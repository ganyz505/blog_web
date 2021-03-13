module.exports = {
    title: "ganyzpro的Blog",
    description: "This is a blog.",
    base: '/goDeploy/',
    dest:'./dist',
    markdown: {
      lineNumbers: true,
      toc: {
        includeLevel: [1, 2, 3],
      },
    },
    themeConfig: {
      sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
        nav:[
          {text: 'Web', link: '/web/js'},
          // {text: '进阶', link: '/other/'},
          {text: '数据结构与算法', link: '/dataStru/stack'},
          // {text: '心情小镇', link: 'https://raindays.cn/'}, 
          // {text: '全栈项目', link: 'https://github.com/wsydxiangwang/Mood'}, 
          {text: 'Github', link: 'https://github.com/ganyzpro/blog_web'} 
        ],
        // 打开FAQ主页链接时生成下面这个菜单
        sidebar:{
          '/web/':[
              ['/web/js','js基础'],
              ['/web/ES6','ES6'],
              ['/web/handle','手写源码'],
              ['/web/vueSouce','vue原理'],
          ],
          '/dataStru/':[
              ['/dataStru/stack','基础数据结构'],
              ['/dataStru/sort','排序算法'],
          ],
          // '/other/':[
          //     ['/other/handle','手写源码'],
          // ],
          // '/dataStru/':[
          //     ['/dataStru/stack','数据结构与算法'],
          // ],
        }
    }
  }