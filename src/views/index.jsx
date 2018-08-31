import React, { Component } from 'react'
import Banner from './banner'
import Nav from './nav'

export default class Index extends Component {
	render () {
		return (
			<div className="page-wrapper">
				<Nav />
				<Banner />
			</div>
		)
	}
}
