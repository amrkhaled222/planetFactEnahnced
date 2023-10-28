import Navbar from "../component/Navbar";
import Planet from "../component/Planet";

export default function Venus(data) {
	return (
		<div>
			<Navbar {...data} />
			<Planet {...data.Earth} />
		</div>
	);
}
