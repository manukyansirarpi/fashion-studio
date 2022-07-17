import React, {Fragment} from 'react';

import Header from "../components/layouts/header/Header";
import Main from "../components/layouts/main/Main";

const App: React.FC = () => {

  return (
    <Fragment>
      <Header></Header>
      <Main></Main>
    </Fragment>
  );
}

export default App;
