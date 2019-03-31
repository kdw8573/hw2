export const initialState = {
  username : localStorage.getItem("username"),
  password: null,
  token: localStorage.getItem("token"),
  errors : {},
  mlist: localStorage.getItem("mlist"),
};
