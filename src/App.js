import React, {
	Component
} from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import Header from './views/common/header.jsx'
import Footer from './views/common/footer.jsx'

class App extends Component {
	render() {
		return (
			<div className="App">
      <Header/>
      <Footer/>
        
      </div>
		);
	}
}

export default App;