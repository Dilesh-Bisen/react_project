import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <nav
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "blue",
                    padding: "10px 20px",
                    color: "#fff",
                }}
                className={show ? "navContainer showmenu slideInNav" : "navContainer"}
            >
                <div style={{ fontSize: "30px", fontFamily: "Arial, sans-serif", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", color: "#fff", textShadow: "2px 2px 4px #000" }} className="logo">
                    <span style={{ color: "#ff006a" }}>D</span>
                    <span style={{ color: "#00ffff" }}>I</span>
                    <span style={{ color: "#ffff00" }}>L</span>
                    <span style={{ color: "#00ff00" }}>E</span>
                    <span style={{ color: "#ff6347" }}>S</span>
                    <span style={{ color: "#ff00ff" }}>H</span>
                </div>
                <div className="navLinks">
                    <ul style={{ listStyleType: "none", fontSize: "25px", padding: 0, margin: 0, display: "flex" }}>
                        {data[0].navbarLinks.map((element) => (
                            <li key={element.id} style={{ marginRight: "30px" }}>
                                <Link
                                    to={element.link}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{ color: "#fff", textDecoration: "none" }}
                                    className="navLink"
                                >
                                    {element.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button style={{ backgroundColor: "#ff6347", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }} className="menuBtn">
                        OUR MENU
                    </button>
                </div>
                <div className="hamburger" onClick={() => setShow(!show)}>
                    <GiHamburgerMenu />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
