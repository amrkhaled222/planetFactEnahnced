import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import sourceIcon from "../../assets/icon-source.svg";
import "./planet.scss";
export default function Planet(data) {
	const [textprojected, settext] = useState("overview");
	const [activebutton, setbutton] = useState("overview");
	const [isitmobile, settype] = useState(
		window.screen.width >= 600 ? false : true
	);

	// let isitmobile = window.screen.width >= 600 ? false : true;

	useEffect(
		(ee) => {
			window.addEventListener("resize", (e) => {
				if (e.target.screen.availWidth >= 600 && isitmobile == true) {
					settype(false);
				} else if (e.target.screen.availWidth < 600 && isitmobile == false) {
					settype(true);
				}
			});
		},
		[window.screen.availWidth]
	);

	function handlebutton(e) {
		let value = e.target.value;
		setbutton(value);
		settext(value);
	}

	function ImgOfplanet() {
		return (
			<>
				{(textprojected == "overview" || textprojected == "geology") && (
					<motion.img
						key={data.name + "img1"}
						animate={{ opacity: [0, 1], x: [300, 0] }}
						transition={{ duration: 0.7 }}
						exit={{ opacity: 0 }}
						className="primaryImage1"
						alt="planetImg"
						src={data.images.planet}
					/>
				)}

				{textprojected == "structure" && (
					<motion.img
						key={data.name + "img2"}
						animate={{ opacity: [0, 1], x: [300, 0] }}
						alt="planetSeconderyimage"
						transition={{ duration: 0.7 }}
						exit={{ opacity: 0 }}
						className="primaryImage2"
						src={data.images.internal}
					/>
				)}

				{textprojected == "geology" && (
					<motion.img
						key={data.name + "img3"}
						className="secendoryImage"
						animate={{ opacity: [0, 1], x: [300, 0] }}
						transition={{ duration: 0.7 }}
						exit={{ opacity: 0 }}
						src={data.images.geology}
					/>
				)}
			</>
		);
	}

	function TextView() {
		return (
			<motion.div
				key={data.name}
				animate={{ opacity: [0, 1], x: [200, 0] }}
				exit={{ opacity: 0 }}
				transition={{ duration: "0.7" }}>
				<p>{data[textprojected].content}</p>
				<span>
					source : <a href={data[textprojected].source}> Wekipedia </a>
					<img
						src={sourceIcon}
						alt="sourceIcon"
					/>
				</span>
			</motion.div>
		);
	}

	function Mybutton() {
		return (
			<div className="planetOverview--button">
				<button
					onClick={handlebutton}
					value="overview"
					style={{
						background:
							activebutton == "overview" && !isitmobile ? data.maincolor : "",
						borderBottom:
							activebutton == "overview" &&
							isitmobile &&
							`${data.maincolor} 4px solid`,
						opacity: activebutton == "overview" && isitmobile && 1,
					}}>
					{!isitmobile && <span>01</span>} overview
				</button>
				<button
					style={{
						background:
							activebutton == "structure" && !isitmobile ? data.maincolor : "",
						borderBottom:
							activebutton == "structure" &&
							isitmobile &&
							`${data.maincolor} 4px solid`,
						opacity: activebutton == "structure" && isitmobile && 1,
					}}
					onClick={handlebutton}
					value="structure">
					{!isitmobile && ` ${(<span>02</span>)} internal`}  structure
				</button>
				<button
					style={{
						background:
							activebutton == "geology" && !isitmobile ? data.maincolor : "",
						borderBottom:
							activebutton == "geology" &&
							isitmobile &&
							`${data.maincolor} 4px solid`,
						opacity: activebutton == "geology" && isitmobile && 1,
					}}
					onClick={handlebutton}
					value="geology">
					{!isitmobile && `${(<span>03</span>)} surface`} geology
				</button>
			</div>
		);
	}

	return (
		<div className="planetOverview">
			<AnimatePresence>
				<div
					className="planetOverview--Img"
					key={44}>
					<ImgOfplanet key={46} />
				</div>
				<div
					className="planetOverview--Text"
					key={4545}>
					<h2> {data.name}</h2>
					<TextView key={"tex20"} />
				</div>
				<Mybutton key={20} />
			</AnimatePresence>
		</div>
	);
}
