import Header from './contents/Header/header';
import './App.css'
import { coffeeMenu } from './data/menu';
import Main from './contents/Main/main';
import Footer from './contents/Footer/footer';
function App() {
  return (
		<div className='all'>
			<Header/>
			<Main coffees={ coffeeMenu}/>
			<Footer/>
		</div>
	);
}

export default App
