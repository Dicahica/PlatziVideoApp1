import React, {Component} from 'react';



import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import Loading from './src/sections/components/loading.js';
import AppLayout from './src/app.js'

type Props = {};
export default class App extends Component<Props> {
  //state = {
    //suggestionList:[],
    //categoryList:[],
//  }

  render() {
    return (
      <Provider
      store={store}
      >
        <PersistGate
          loading={<Loading/>}
          persistor={persistor}
        >
          <AppLayout/>
        </PersistGate>
      </Provider>


    );
  }
}
