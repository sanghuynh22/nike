import "./index.css";
import { Sales } from "./components/Sales";
import { Header } from "./components/Header";
import { Lates } from "./components/Lates";
import { Card3D } from "./components/Card3D";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import { Heros } from "./components/Heros";

function App() {
	return (
		<div className="App">
			<Header />
			<Heros />
			<Sales />
			<Lates />
			<Card3D />
			<Info />
			<Footer />
		</div>
	);
}

export default App;
