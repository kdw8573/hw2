import { initialState } from "./selectors";

const login = (state = initialState, action) => {
	// console.log('##### login reducer #####')
	// console.log(action)
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem("username", action.data.username);
      localStorage.setItem("token", action.data.token);
      localStorage.setItem("mlist", JSON.stringify(action.data.mlist));
      return{
          ...state,
          ...action.data,
          username : action.data.username,
          errors: null,
          mlist: JSON.stringify(action.data.mlist)
      }
    case 'LOGIN_ERROR':
			localStorage.removeItem("token");
      localStorage.removeItem("mlist");
      localStorage.removeItem("username");
      alert('Login Fail')
			return {...state, errors: null, token: null,
            username: null}

    case 'LOGOUT_SUCCESS':
			localStorage.removeItem("token");
      localStorage.removeItem("mlist");
      localStorage.removeItem("username");
      return {...state, errors: null,token: null,
            username: null}

    case 'LOGOUT_REQUEST':
      localStorage.removeItem("token");
      localStorage.removeItem("mlist");
      localStorage.removeItem("username");
      return {...state, errors: null,token: null,
            username: null}

    case 'POST_SUCCESS' :
        //console.log(JSON.parse(state.mlist))
        console.log(action.data.mlist)
        //console.log(JSON.parse(state.mlist).concat(action.data.mlist))
        localStorage.setItem("mlist",JSON.stringify(JSON.parse(state.mlist).concat(action.data.mlist)));
        return {
          ...state,
          ...action.data,
          mlist: JSON.stringify(JSON.parse(state.mlist).concat(action.data.mlist))
        }
    case 'DELETE_SUCCESS' :
      let obj = JSON.parse(state.mlist)
      localStorage.setItem("mlist",JSON.stringify(obj.filter(element => element.id !== action.data.mlist)));
      alert('Delete Success')
      return {
        ...state,
        ...action.data,
        mlist: JSON.stringify(obj.filter(element => element.id !== action.data.mlist)),
      }
    default:
      return state
  }
}

export default login
