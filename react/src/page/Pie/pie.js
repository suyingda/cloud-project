import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

// 引入 echarts 主模块。
import echarts from 'echarts/lib/echarts'
// 折现图
require('echarts/lib/chart/line');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
// 引入饼图。
require('echarts/lib/chart/pie');
class Pie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stopAutoPlay: true,
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 2,
        }
    }
    echarts_ = (nodeType, config) => {
        echarts.init(document.getElementById(nodeType)).setOption(config)
    }
    componentDidMount() {
        setTimeout(() => {

            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 1000);
        // 基于准备好的dom，初始化echarts实例
        this.echarts_('pie', {
            series: {
                type: "pie",
                pie: {},
                data: [
                    { name: 'A', value: 1212 },
                    { name: 'B', value: 2323 },
                    { name: 'C', value: 1919 }
                ]
            }
        })
        this.echarts_('bar', {
            title: {
                text: '柱状图'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
        this.echarts_('line', {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        })
    }
    render() {
        return <div>
            <div id="pie" style={{ "height": " 400px" }}></div>
            <div id="bar" style={{ "height": " 400px" }}></div>
            <div id="line" style={{ "height": " 400px" }}></div>
            <div style={{ overflow: 'hidden' }}>
                <WingBlank>
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={10}
                        selectedIndex={this.state.slideIndex}
                        slideWidth={0.8}
                        autoplay={this.state.stopAutoPlay}
                        autoplayInterval={1000}
                        infinite={true}
                        beforeChange={(from, to) => {
                            // console.log(`slide from ${from} to ${to}`)
                        }}
                        afterChange={index => {
                            this.setState({
                                slideIndex: index
                            })
                        }}
                    >
                        {this.state.data.map((val, index) => (
                            <a
                                key={val}
                                // href="http://www.alipay.com"
                                onClick={() => {
                                    this.setState({
                                        stopAutoPlay: !this.state.stopAutoPlay,
                                        slideIndex: index,
                                    })
                                }}
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top: this.state.slideIndex === index ? -10 : 0,
                                    top: this.state.slideIndex === index ? -10 : 0,
                                    height: this.state.imgHeight,
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </div>
        </div>
    }
}

export default Pie;