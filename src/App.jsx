import { Routes, Route } from "react-router-dom";
import data from "./data.json";
import Earth from "./pages/Earth";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";
import Mars from "./pages/Mars";
import Venus from "./pages/Venus";
import Mercury from "./pages/Mercury";
import Jupiter from "./pages/Jupiter";
import "./App.scss";

function App() {
	return (
		<main>
			<Routes>
				<Route
					path="/"
					element={<Earth {...data} />}
				/>
				<Route
					path="/Mercury"
					element={<Mercury {...data} />}
				/>
				<Route
					path="/Earth"
					element={<Earth {...data} />}
				/>
				<Route
					path="/Venus"
					element={<Venus {...data} />}
				/>
				<Route
					path="/Neptune"
					element={<Neptune {...data} />}
				/>
				<Route
					path="/Jupiter"
					element={<Jupiter {...data} />}
				/>
				<Route
					path="/Saturn"
					element={<Saturn {...data} />}
				/>
				<Route
					path="/Mars"
					element={<Mars {...data} />}
				/>
				<Route
					path="/Uranus"
					element={<Uranus {...data} />}
				/>
			</Routes>
		</main>
	);
}

export default App;
