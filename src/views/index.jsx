import React, { Component } from 'react'
import Banner from './banner'
import Nav from './nav'
import Wrap from './wrap'

export default class Index extends Component {
	render () {
		return (
			<div className="page-wrapper">
				<Nav />
				<Banner />
				<Wrap/>
			</div>
		)
	}
}
