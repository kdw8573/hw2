import React from 'react'
import { connect } from 'react-redux'
import { loginRequest ,logoutRequest, postRequest, deleteRequest} from '../store/meeting/actions'
import { LoginOrganism } from '../components/organisms/LoginOrganism'

const mapStateToProps = (state) => {
	return {
		state: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLoginRequest: (username, password) => {
			dispatch(loginRequest(username, password))
		},
		onLogoutRequest: () => {
			dispatch(logoutRequest())
		},
		onPostRequest: (sinceWhen,tilWhen) => {
			dispatch(postRequest(sinceWhen,tilWhen))
		},
		onDeleteRequest: (id) => {
			dispatch(deleteRequest(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrganism)
