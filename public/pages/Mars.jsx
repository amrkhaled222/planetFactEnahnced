import Navbar from "../component/Navbar";
import Planet from "../component/Planet";

export default function Mars(data) {
	return (
		<div>
			<Navbar {...data} />
			<Planet {...data.Mars} />
		</div>
	);
}
