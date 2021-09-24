import './App.css';
import Product from './components/Product';

function App() {
	return (
		<div className="App">
			<Product
				name="Apple iPhone"
				description="The new Apple iPhone 13 Pro"
				price={1999.99}
			/>
			<br />
			<Product
				name="Apple iWatch"
				description="The new Apple iWatch"
				price={999.99}
			/>
			<br />
			<Product
				name="Apple iPad"
				description="The new Apple iPad"
				price={399.99}
			/>
		</div>
	);
}

export default App;
