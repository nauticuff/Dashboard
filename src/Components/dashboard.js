import Nav from "./nav";
import MainDash from "./maindash";
import SubDash from "./subdashboard";
import { useRef, useState, useEffect } from "react";

const Dashboard = () => {
    const [theme, setTheme] = useState('light')
    const cardsRef = useRef(null);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        toggleTheme();
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            for (const card of cardsRef.current.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };

        cardsRef.current.addEventListener("mousemove", handleMouseMove);

        return () => {
            cardsRef.current.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div ref={cardsRef} className={`app ${theme} py-10`}>
                <div className='wrapper max-w-[1440px] mx-auto px-7'>
                    <Nav onClick={toggleTheme}/>
                    <MainDash />
                    <SubDash />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;