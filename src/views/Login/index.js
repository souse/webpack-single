import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

@withRouter
class Login extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		return (
			<div>
				这是登陆页面
			</div>
		)
	}
}

export default Login