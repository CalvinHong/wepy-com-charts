# 微信小程序 wepyjs 图表控件 `wepy-com-charts`

![](http://ok24hjp0j.bkt.clouddn.com/chart-demo.gif)

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

### Props传值说明


| 属性            | 默认值         | 类型                | 必填 | 说明                                                                             |
|-----------------|----------------|---------------------|------|----------------------------------------------------------------------------------|
| collection      | []             | array               | 是   | 图表数据，格式如下：[ {name:'line name',data:[{key:'对应label的值',value:10}]} ] |
| labels          | []             | array               | 是   | x轴分布的label                                                                   |
| colors          | ['#FF5974'...] | array               | 否   | 数据线颜色                                                                       |
| paddingX        | 18             | number              | 否   | x轴内边距                                                                        |
| paddingY        | 15             | number              | 否   | y轴内边距                                                                        |
| height          | 215            | number              | 否   | 图表的高度                                                                       |
| width           | device width   | number              | 否   | 图表的宽度，默认取设备的宽度                                                     |
| lineWidth       | 2              | number              | 否   | 数据线的大小                                                                     |
| axesColor       | #F5F5F5        | color               | 否   | 坐标颜色                                                                         |
| xLabelColor     | #111111        | color               | 否   | x轴label的颜色                                                                   |
| yLabelColor     | #111111        | color               | 否   | y轴label的颜色                                                                   |
| onXLabelFilter  | null           | function/'enable' | 否   | x轴label过滤回调函数，设置为enable时全部x轴label显示                             |
| onYLabelFilter  | null           | function/'enable' | 否   | y轴label过滤回调函数，设置为enable时全部y轴label显示                             |
| yLabelFormat    | null           | function            | 否   | y轴label显示格式回调函数                                                         |
| yLabelRows      | 5              | number              | 否   | y轴label显示个数                                                                 |
| onXAxesFilter   | null           | function/'enable' | 否   | x轴背景坐标过滤回调函数，设置为enable全部显示                                    |
| onYAxesFilter   | null           | function/'enable' | 否   | y轴背景坐标过滤回调函数，设置为enable全部显示                                    |
| showFollowXAxes | false          | boolean             | 否   | x轴跟随坐标是否显示                                                              |
| showFollowYAxes | false          | boolean             | 否   | y轴跟随坐标是否显示                                                              |
| onActived       | null           | function            | 否   | 手指选中某一列时触发的回调函数，可以获取该列所有点的数据                         |
| positionX       | 0              | number              | 否   | 画板x轴位置，用于手指拖到计算                                                    |
| positionY       | 0              | number              | 否   | 画板y轴位置，用于手指拖到计算                                                    |
| detailPanelShow | true           | boolean             | 否   | 是否显示详细面板                                                                 |
