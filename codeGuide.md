# 目录

```
|– 命名规则 
|   |– 项目命名
|   |– 目录命名
|   |– JS文件命名
|   |– CSS, SCSS文件命名
|   |– HTML文件命名
| 
|– HTML 
|   |– 语法
|   |– 字符编码
|   |– 引入CSS, JS
|   |– 属性顺序
|   |– 减少标签数量 
| 
|– CSS, SCSS
|   |– 缩进
|   |– SCSS属性声明
|   |– 空格
|   |– 换行
|   |– 注释
|   |– 命名
|   |– 属性声明顺序
|   |– 颜色
|   |– 属性简写
|   |– 媒体查询
|   ...
| 
|– Git Commit
| 
| 
```

## 命名规则

### 项目命名
<p>全部采用小写，以下划线分隔。</p>
<p>例：xpa_document</p>

### 目录命名
<p>驼峰命名法。</p>
<p>有复数结构时，要采用复数命名法。</p>
<p>例：scripts, styles, images, modules, accountCenter</p>

### JS文件命名
<p>驼峰命名法。</p>
<p>例：accountController.js</p>

### CSS, SCSS文件命名
<p>CSS参照项目命名规则，例：style_2017.css</p>
<p>SCSS，例：_layout.scss</p>

### HTML文件命名
<p>驼峰命名法。</p>
<p>例：accountCenter.html</p>


## HTML

### 语法
<ul>
    <li>缩进使用soft tab（4个空格）；</li>
    <li>嵌套的节点应该缩进；</li>
    <li>在属性上，使用双引号，不要使用单引号；</li>
    <li>属性名全小写，用中划线做分隔符；</li>
    <li>不要在自动闭合标签结尾处使用斜线（<a href="http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag">HTML5 规范</a> 指出他们是可选的）；</li>
    <li>不要忽略可选的关闭标签，例：<code>&lt;/li&gt;</code> 和 <code>&lt;/body&gt;</code>。</li>
</ul>

### 字符编码
<p>字符编码meta charset，通常指定为'UTF-8'。</p>

### 引入CSS, JS
 <p>根据HTML5规范, 通常在引入CSS和JS时不需要指明 type。</p>


### 属性顺序
<p>属性应该按照特定的顺序出现以保证易读性。</p>
<ul>
    <li><code>class</code></li>
    <li><code>id</code></li>
    <li><code>name</code></li>
    <li><code>src</code>, <code>for</code>, <code>type</code>, <code>href</code>, <code>value</code> , <code>max-length</code>, <code>max</code>, <code>min</code>, <code>pattern</code></li>
     <li><code>placeholder</code>, <code>title</code>, <code>alt</code></li>
     <li><code>required</code>, <code>readonly</code>, <code>disabled</code></li>
</ul>

### 减少标签数量
<ul>
    <li>在编写HTML代码时，需要尽量避免多余的父节点；</li>
    <li>很多时候，需要通过迭代和重构来使HTML变得更少。</li>
</ul>


## CSS, SCSS

### 缩进
<p>使用soft tab（4个空格）。</p>

### SCSS属性声明
 <p>每个属性声明末尾都要加分号；</p>
 <p>例：$font_color-normal: #bcbcbc;</p>

### 空格
<ul>
    <li>'{'前；</li>
    <li><code>!important</code> '!'前。</li>
</ul>

### 注释
<ul>
    <li>缩进与下一行代码保持一致；</li>
    <li>可位于一个代码行的末尾，与代码间隔一个空格。</li>
</ul>

### 命名
<ul>
    <li>类名小写，中划线分隔；</li>
    <li>id驼峰命名法；</li>
    <li>SCSS：变量、函数、混合驼峰命名法。</li>
</ul>

### 属性声明顺序
```javascript
    {
        "display",
        "visibility",
        "float",
        "width",
        "height",
        "border",
        "list-style",
        "position",
        "margin",
        "padding",
        "font",
        "color",
        "background",
        ...
    }

```

### 颜色
<ul>
    <li>禁止使用red、green、blue等作为color值；</li>
    <li>颜色用小写字母，例：#bcbcbc；</li>
    <li>颜色16进制尽量用简写，例：#000。</li>
</ul>

### 属性简写
<p>例：padding、margin。</p>

### 媒体查询
<p>尽量将媒体查询的规则靠近与他们相关的规则</p>

```javascript
.sidebar-wrap {
    ...
  }

@media screen and (max-width: 780px) {
  .sidebar-wrap {
    ...
  }

```

## Git Commit
<ul>
    <li>Feat：新功能( feature )；</li>
    <li>Fix：修补bug；</li>
    <li>Docs：文档；</li>
    <li>Style：样式；</li>
    <li>Refactor：重构；</li>
</ul>
