import Navbar from "../component/Navbar";
import Planet from "../component/Planet";

export default function Mercury(data) {
	return (
		<div>
			<Navbar {...data} />
			<Planet {...data.Mercury} />
		</div>
	);
}
