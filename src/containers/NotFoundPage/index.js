import React, { Fragment } from 'react';
import history from 'utils/history';

const NotFoundPage = () => {
  return(
    <Fragment>
      <h1>WARNING! 404 NOT FOUND</h1>
      <button onClick={() => history.push("/home1")}>Go Back</button>
    </Fragment>
  )
}

export default NotFoundPage;