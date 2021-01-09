import React, { Component } from 'react'
import { connect, useDispatch } from 'react-redux'
import users from './redux/reducer/user'

const App = ({ getTodos, getData, user = [], getDataManis }) => {
  const fetchData = () => {
    getTodos("manis ini payload action");
  };
  const maniss = () => {
    getDataManis()
  }
  React.useEffect(() => {
    getData("manis");
  }, []);
  return (
    <div>
      <button onClick={fetchData} className="btn btn-primary">
        Click
      </button>

      <button onClick={maniss}>get data manis</button>
      <ul>
        {user.payload?.data.map((dt, index) => {
          return (
            <React.Fragment key={index}>
              <li>{dt.id}</li>
              <li key={dt.id}>{dt.name}</li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
 return {
   user: state.users.user,
 };
}

const mapDispatchToProps = (dispatch) => ({
  getTodos: (title) => dispatch({ type: "GET_TODOS_REQUESTED", payload: title }),
  getData: (data) => dispatch({type: "GET_DATA_REQUEST", payload: data }),
  getDataManis: (data) => dispatch({type: "GET_MANIS_REQUESt", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
