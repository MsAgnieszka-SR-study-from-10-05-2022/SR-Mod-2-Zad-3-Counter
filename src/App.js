// import { render } from '@testing-library/react';
import React from 'react';

import { Counter1 } from './Counter1';
import { Counter2 } from './Counter2';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Counter1 />
			<Counter2 />
		</div>
	);
}

export default App;
