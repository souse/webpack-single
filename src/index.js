import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import configStore from './store';
import route from './route';

const store = configStore();

render(
	<AppContainer>
  		<Provider store={ store }>
    		<Router children={ route } />
  		</Provider>
  	</AppContainer>,
  	document.getElementById('root')
);

