//import { take, put, call, fork, spawn, select } from 'redux-saga/effects'
//import { delay } from 'redux-saga'
//import api from 'services/api'
//import { getMeeting } from './selectors'
//import * as actions from './actions'
// import { loginSuccess, loginFailure } from 'store/actions'

import {take, put, call, fork} from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

const url = 'http://127.0.0.1:8000/meetings/'

export function* watchLogin() {
	while(true) {
		const data = yield take(actions.LOGIN_REQUEST)
		yield call(loginReq, data)
	}
}
export function* watchPost(){
	while(true){
		const data = yield take(actions.POST_REQUEST)
		yield call(sendPostReq,data)
	}
}
export function* watchDelete(){
	while(true){
		const data = yield take(actions.DELETE_REQUEST)
		yield call(sendDeleteReq,data)
	}
}

export function* sendPostReq(data) {
	let since = data.sinceWhen
	let til = data.tilWhen
	const info = JSON.stringify({ sinceWhen: since, tilWhen:til });
	const response = yield call(fetch, url, {
		method: 'POST',
		headers: {
			'Authorization' : `Basic ${localStorage.getItem("token")}`,
			'Content-Type': 'application/json',
		},
		body: info,
	});
	console.log (response)
	if (!response.ok) {
		console.log("POST Failure")
		alert('POST FAIL')
	} else {
		console.log("POST Success")
		const response_data = yield call([response, response.json]);
		yield put(actions.postSuccess(response_data))
	}
}
export function* sendDeleteReq(data){
	let id = data.id
	console.log(id)
	const response = yield call(fetch, url+id+"/", {
		method: 'DELETE',
		 headers: {
			 'Authorization' : `Basic ${localStorage.getItem("token")}`
		 }
	 });
	 if (!response.ok) {
 		console.log("DELETE Failure")
 		alert('DELETE FAIL')
 	} else {
 		console.log("DELETE Success")
 		yield put(actions.deleteSuccess(id))
 	}

}
export function* loginReq(data) {
  let uname = data.username
	let upwd = data.password
	const hash = new Buffer(`${uname}:${upwd}`).toString('base64')
	const response = yield call(fetch, url, {
		method: 'GET',
		headers: {
			'Authorization': `Basic ${hash}`
		}
	})
	console.log(response)
	const mlist = yield call([response, response.json])

	if (!response.ok) {
		console.log("Login Failure")
		yield put(actions.loginFailure())
	} else {
		console.log("Login Success")
		yield put(actions.loginSuccess(uname, upwd, mlist))
	}
}

export default function* () {
  yield fork(watchLogin)
	yield fork(watchPost)
	yield fork(watchDelete)
}
