import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import hamIcon from "../../assets/icon-hamburger.svg";
import chervonicon from "../../assets/icon-chevron.svg";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useEffect } from "react";
export default function Navbar(data) {
	//mobile menu
	const [togglemenu, setmenu] = useState(false);

	const menuVariants = {
		visible: { x: "-0%", opacity: [0, 1] },
		hidden: { x: "-100%", opacity: [1, 0] },
	};

	const [isitmobile, settype] = useState(
		window.screen.width >= 600 ? false : true
	);


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

	// let isitmobile = window.screen.width >= 600 ? false : true;

	function usemenu() {
		setmenu((e) => !e);
	}
	const currentlocation = useLocation().pathname.split("/")[1];

	return (
		<header>
			<nav>
				<h1>the planets</h1>
				{isitmobile && (
					<div>
						<img
							src={hamIcon}
							alt="menuicon"
							onClick={usemenu}
							style={{
								display: isitmobile ? "inline-block" : "none",
								opacity: togglemenu ? "0.5" : "1",
							}}
						/>
						{/*mobile menu */}
						<AnimatePresence>
							<motion.div
								animate={togglemenu ? "visible" : "hidden"}
								variants={menuVariants}
								transition={{ duration: "0.5" }}
								style={{ display: isitmobile ? "" : "none" }}
								className="nav--mobile--container">
								<ul className="mobile-menu">
									{data.planetName.map((e, i) => {
										return (
											<li key={e + i}>
												<span
													style={{ backgroundColor: data[e].maincolor }}
													className="colorpallete"></span>
												<Link
													key={e + i + i}
													to={`/${e}`}>
													{" "}
													{e}
												</Link>
												<img
													src={chervonicon}
													alt="arrow"
												/>
											</li>
										);
									})}
								</ul>
							</motion.div>
						</AnimatePresence>
					</div>
				)}

				{!isitmobile && (
					<ul className="nav">
						{data.planetName.map((e, i) => {
							return (
								<li
									key={e + (i + 1)}
									style={{
										borderTop:
											currentlocation == e
												? `${data[e].maincolor} solid 5px`
												: "",
									}}>
									<Link
										key={e + i * i}
										to={`/${e}`}
										style={{
											opacity: currentlocation == e && 1,
										}}>
										{e}
									</Link>
								</li>
							);
						})}
					</ul>
				)}
			</nav>
			<hr />
		</header>
	);
}
