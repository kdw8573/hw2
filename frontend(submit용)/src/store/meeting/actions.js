export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_REQUEST= 'POST_REQUEST'
export const DELETE_REQUEST = 'DELETE_REQUEST'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'

export const loginRequest = (username, password) => {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  }
};

export const loginSuccess = (username, password, mlist) => {
  return {
    type: LOGIN_SUCCESS,
    data:{
      username,
      password,
      token : new Buffer(`${username}:${password}`).toString('base64'),
      mlist : mlist
    }
  }
};

export const loginFailure = () => {
  return {
    type: LOGIN_ERROR
  }
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  }
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
};

export const postRequest = (sinceWhen,tilWhen) =>{
  return {
    type: POST_REQUEST,
    sinceWhen,
    tilWhen
  }
};

export const postSuccess = (mlist) => {
  return {
    type: POST_SUCCESS,
    data: {
      mlist: mlist
    }
  }
};

export const deleteRequest = (id) => {
  return {
    type: DELETE_REQUEST,
    id
  }
};

export const deleteSuccess = (mlist) => {
  return {
    type : DELETE_SUCCESS,
    data : {
      mlist: mlist
    }
  }
};
