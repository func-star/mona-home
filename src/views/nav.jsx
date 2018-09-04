import React, { Component } from 'react'
import classNames from 'classnames'

export default class Nav extends Component {
	render () {
		const menus = [{
			name: '移动端'
		}, {
			name: 'web端'
		}]
		return (
			<div className="page-nav flex-center-y pos-r">
				<div className="page-nav-left">
					123
				</div>
				<div className="page-nav-right h-full flex-1">
					<div className="menus-gourp h-full flex-right-x">
						<a className="menus-item h-full c-po active">首页</a>
						<a className="menus-item h-full c-po">React 实战</a>
						<a className="menus-item h-full c-po">Vue 实战</a>
						<a className="menus-item h-full c-po">工具包</a>
						<a className="menus-item h-full c-po">博客</a>
					</div>
				</div>
			</div>
		)
	}
}
