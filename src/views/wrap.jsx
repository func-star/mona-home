import React, { Component } from 'react'
import classNames from 'classnames'

export default class Wrap extends Component {
	render () {
		const list = [{
			title: 'React 实战',
			projects: [{
				name: 'web 端组件库',
				desc: '感受设计之美',
				type: 'pc',
				url: 'http://mor.design.monajs.cn'
			}, {
				name: '移动端组件库',
				desc: '让你感到幸福的 React 组件库',
				type: 'mobile',
				url: 'http://home.mor.monajs.cn'
			}, {
				name: 'React 滚动监听器',
				desc: '可以应用于曝光、懒加载等等',
				type: 'zuanshi',
				url: 'https://func-star.github.io/mor-scroll-watcher/'
			}, {
				name: 'React 图片懒加载',
				desc: '基于React 滚动监听器实现',
				type: 'zuanshi',
				url: 'https://github.com/func-star/mor-lazyload-img'
			}]
		}, {
			title: 'Vue 实战',
			projects: [{
				name: '移动端组件库',
				desc: '让你感到幸福的 Vue 组件库',
				type: 'mobile',
				url: 'http://home.mov.monajs.cn'
			}]
		}, {
			title: '工具包',
			projects: [{
				name: '事件监听机制',
				desc: '一款小而全的事件监听产品',
				type: 'zuanshi',
				url: 'https://github.com/func-star/mona-events'
			}]
		}]
		return (
			<div className="home-wrap block-center">
				<For of={list} each="item" index="index">
					<div key={index}>
						<h2 className="flex-center wrap-title">{item.title}</h2>
						<div className="wrap-content o-h">
							<For of={item.projects || []} each="child" index="childIndex">
								<a className="project-item pull-left d-f c-po" href={child.url} target="_blank" key={childIndex}>
									<i className={classNames('iconfont icon-' + child.type)}></i>
									<div className="flex-1">
										<h3 className="name">{child.name}</h3>
										<p className="desc">{child.desc}</p>
									</div>
								</a>
							</For>
						</div>
					</div>
				</For>
			</div>
		)
	}
}
