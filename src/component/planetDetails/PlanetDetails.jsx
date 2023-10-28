import { motion } from "framer-motion";
import "./planetdetails.scss";
export default function PlanetDetails(data) {
	let planetdataKeys = Object.keys(data.planetdata);
	return (
		<div
			key={data.name + "5"}
			className="PlanetDetailsContainer">
			{planetdataKeys.map((e, i) => {
				return (
					<motion.div
						// whileInView={{ opacity: [0, 1], x: [-100, 0] }}
						transition={{ duration: 0.5 }}
						className="factContainer"
						key={i * i}>
						<h5 className="factContainer--smallHeading">
							{i == 3 && "avg "}
							{e} {i < 2 && " time"}{" "}
						</h5>
						<h6 className="factContainer--data">{data.planetdata[e]}</h6>
					</motion.div>
				);
			})}
		</div>
	);
}
