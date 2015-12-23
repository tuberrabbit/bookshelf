title: View Layout -- dajiangtang
speaker: Tuber
url: https://github.com/tuberrabbit/bookshelf.git
transition: slide
files:
theme: moon
highlightStyle: monokai_sublime
usemathjax: no
date: 2015年12月22日

[slide]
# bookshelf
----
Just as what you think it



[slide]
## css style
----
- box model {:&.moveIn}
- selector

[slide]
### box-model
----
    <img src='http://www.w3schools.com/css/box-model.gif'>

[slide]
### selector priority
----
1. 添加了!important享有最高优先级
2. 第二优先级分组是style属性所嵌入的规则
3. 第三优先级分组是具有一个或多个ID选择器的规则
4. 第四优先级分组是具有一个或多个类,属性或伪选择器的规则
5. 第五优先级分组是具有一个或多个元素选择器的规则
6. 最低优先级分组是指那些只包含通配符选择器的规则



[slide]
## html template
----
- DOM(Document Object Model) {:&.moveIn}
- block-elements vs inline-elements

[slide]
### DOM tree
----
    <img src='http://www.w3schools.com/js/pic_htmltree.gif'>

[slide]
### block-elements
----
- 结构块元素(ol/ul/table)
- 终止块元素(h1/p/caption)
- 多功能块元素(div/li/td)

[slide]
### inline-elements
----
- 语义元素(span/em/strong)
- 流动元素(br/bdo)
- 替换元素(img/object/i)
- 控件(input/button/select)



[slide]
## js programs
----
- DOM operation {:&.moveIn}
- ajax request

[slide]
### DOM operation
----
    > 在不刷新页面的情况下,动态更改页面

[slide]
### ajax request
----
    > 实现前后端分离,让前端更加专注于数据展示方式的实现



[slide]
## practice

[slide]
### step 0 (I did it)
    hello world

[slide]
### step 1
    > Add more css, and make the page to be more beautiful.

[slide]
### step 2
    > As a user,
    I want to add a new book,
    so that I can enrich my bookshelf, and see more books on it.

[slide]
### step 3
    > As a user,
    I want to view, edit, and delete each book on bookshelf,
    so that I can manage my bookshelf easy.



[slide]
## Thanks



[slide]
## How to install npm?
    Node.js v4.2.3 for max os:
    https://nodejs.org/en/



    Node.js v0.12:
    # Using Ubuntu
    curl -sL https://deb.nodesource.com/setup_0.12 | sudo -E bash -
    sudo apt-get install -y nodejs

    # Using Debian, as root
    curl -sL https://deb.nodesource.com/setup_0.12 | bash -
    apt-get install -y nodejs

    To compile and install native addons from npm you may also need to install build tools:
    # use `sudo` on Ubuntu or run this as root on debian
    apt-get install -y build-essential



    # Using other linux
    curl -sL https://rpm.nodesource.com/setup_0.12 | bash -

    To compile and install native addons from npm you may also need to install build tools:
    yum install gcc-c++ make
    # or: yum groupinstall 'Development Tools'
