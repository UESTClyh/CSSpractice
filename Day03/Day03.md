### 亮点

rotate视觉效果

**左上角的按钮原理**背景块也跟着旋转了，两个按钮一个不动另一个转90度以达到角度差，两按钮还要通过定位调整位置（没细钻），两个按钮外面有好几个div，最外面的通过position: fixed;固定位置，并跟随主页面旋转相同角度，再内一个div则转补角的度数，以使两按钮旋转切换

细节：通过给body背景色（一开始用页面全覆盖body），再旋转页面露出body，达到色差，体现层次感



```css
transform-origin: top left;
```

控制rotate旋转中心

```css
  overflow-x: hidden;
```

可以隐去多余的画面，动态可能会用到

```css
transition-delay: 0.3s;
```

在某些过渡时可以凸显先后，丰富视觉



可以在写css的时候就注意，有一些动态类名，可以用这些动态类名做辅助选择器选中别的元素，以达到一起变化的效果

（感觉有点类似于if，条件满足了再展示响应style)

例如这个页面中的左下角nav，就是先translate隐藏再出现





**偶然发现**：HTML元素要是**有子元素**的话用addEventListener会**失效**，但是用onxxx则仍然有效

但onxxx事件在同一时间只能指向唯一对象

使用addEventListener可以给**同一个事件注册多个listener**，若有子元素的话使用**箭头函数**则有效（为啥？）

addEventListener对任何DOM都是有效的，而onclick仅限于HTML