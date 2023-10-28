import Navbar from "../component/Navbar";
import Planet from "../component/Planet";

export default function Jupiter(data) {
	return (
		<div>
			<Navbar {...data} />
			<Planet {...data.Jupiter} />
		</div>
	);
}
