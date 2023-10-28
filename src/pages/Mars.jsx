import Navbar from "../component/Navbar/Navbar";
import Planet from "../component/planet/Planet";
import PlanetDetails from "../component/planetDetails/PlanetDetails";
export default function Mars(data) {
	return (
		<>
			<Navbar
				key={577}
				{...data}
			/>

			<Planet
				key={18}
				{...data.Mars}
			/>
			<PlanetDetails
				key={17}
				{...data.Mars}
			/>
		</>
	);
}
