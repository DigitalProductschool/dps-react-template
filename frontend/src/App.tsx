import dpsLogo from './assets/DPS.svg';
import './App.css';

function App() {
	const callHuggingface = () => {};
	return (
		<>
			<div>
				<a
					href="https://https://www.digitalproductschool.io/"
					target="_blank"
				>
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<h1>DPS + Vite + React</h1>
			<div className="card">
				<button onClick={() => alert('todo')}>
					Call huggingface 🤗
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
		</>
	);
}

export default App;
