## 亮点

左右移动的蓝色条，有类似进度条的效果

是采用定位和transform垂直居中，用一条原来的灰色线条打底，上面覆盖一层蓝色的线条

根据steps通过js计算蓝条的width，在加上过渡，进而达到移动视觉效果





```css
display: flex;
align-items: center;
justify-content: center;
```

使div水平居中，垂直居中



```css
top: 50%;
transform: translateY(-50%);
```

距离top50%的同时移去自身50%

实现垂直居中效果



```css
cursor: not-allowed;
```

button配合disabled属性，功能和视觉上都实现禁用效果

ps:original已与效果相近，故不在上传improved