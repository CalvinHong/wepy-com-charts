# 微信小程序 wepyjs 图表控件 `wepy-com-charts`

## 说明
基于微信小程序canvas开发的图表控件，适用于[wepy](https://github.com/wepyjs/wepy)框架
> 暂时只有折线图，后续提供更多的图表


## 使用


### 安装组件
```
npm install wepy-com-charts --save
```

### 引用组件

```javascript
<template>
    <lineChart></lineChart>
</template>
<script>
    import wepy from 'wepy';
    import Charts from 'wepy-com-charts';

    export default class Index extends wepy.page {
        components = {
            lineChart: Charts
        };
    }
</script>
```

> PS:如果wepy组件后缀名改成了`vue`的可以用以下方法引用

```javascript
<template>
    <lineChart></lineChart>
</template>
<script>
    import Charts from 'wepy-com-charts/lib/line-chart.vue';
</script>

```

### 调用方法
```javascript
//调用draw方法可以产出图像
this.$invoke('lineChart', 'draw');
```

### Props

文档正在编写中...
