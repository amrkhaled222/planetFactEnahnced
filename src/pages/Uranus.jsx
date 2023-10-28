import Navbar from "../component/Navbar/Navbar";
import Planet from "../component/planet/Planet";
import PlanetDetails from "../component/planetDetails/PlanetDetails";
export default function Uranus(data) {
	return (
		<>
			<Navbar
				key={577}
				{...data}
			/>

			<Planet
				key={18}
				{...data.Uranus}
			/>
			<PlanetDetails
				key={17}
				{...data.Uranus}
			/>
		</>
	);
}
