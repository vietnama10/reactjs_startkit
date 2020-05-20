import React, { Fragment } from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux'
import history from 'utils/history';
import homeReducer from './reducer';
import homeSaga from './saga';
import { actionTest } from './actions';

const key = 'home';

const HomePage = () => {
  const store = useStore();
  const dispatch = useDispatch();
  store.injectReducer(key, homeReducer);
  store.injectSaga(key, homeSaga);

  const sentMessage = useSelector(state => state.home.message);
  const sendTestMessage = () => { dispatch(actionTest()) };

  return(
    <Fragment>
      <h1>Home page</h1>
      <h4>{sentMessage}</h4>
      <button onClick={sendTestMessage}>Send Message</button>
      <button onClick={history.goBack}>Go Back</button>
    </Fragment>
  )
}

export default HomePage;