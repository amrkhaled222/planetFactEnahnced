import Navbar from "../component/Navbar";
import Planet from "../component/Planet";

export default function Uranus(data) {
	return (
		<div>
			<Navbar {...data} />
			<Planet {...data.Earth} />
		</div>
	);
}
