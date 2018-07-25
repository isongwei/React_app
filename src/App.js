import React, {
	Component
} from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import Header from './views/header.js'

class App extends Component {
	render() {
		return (
			<div className="App">
      <Header/>
        
      </div>
		);
	}
}

export default App;