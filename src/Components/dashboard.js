import Nav from "./nav";
import MainDash from "./maindash";
import SubDash from "./subdashboard";
import { useRef, useState, useEffect } from "react";

import down from "../Assets/icon-down.svg";
import up from "../Assets/icon-up.svg";
import facebook from '../Assets/icon-facebook.svg'
import twitter from "../Assets/icon-twitter.svg";
import instagram from "../Assets/icon-instagram.svg";
import youtube from "../Assets/icon-youtube.svg";

const Dashboard = () => {
    const [theme, setTheme] = useState('light')
    const cardsRef = useRef(null);

    //object that contains all the props for nav
    const navInfo = [
        { followers: '23,004' }
    ]

    //object that contains all information related to main dashboard cards (count of 4)
    const mainDashInfo = [
        { 
            id: 0,
            icon: facebook, 
            handle: '@nathanf', 
            count: '1987', 
            type: 'followers', 
            trend: '12', 
            trendSvg: up,
            banner: 'bg-[var(--fb)]'
        },
        { 
            id: 1,
            icon: twitter, 
            handle: '@nathanf', 
            count: '1044', 
            type: 'followers', 
            trend: '99', 
            trendSvg: up,
            banner: 'bg-[var(--tt)]'
        },
        { 
            id: 2,
            icon: instagram, 
            handle: '@realnathanf', 
            count: '11k', 
            type: 'followers', 
            trend: '1099', 
            trendSvg: up,
            banner: 'insta'
        },
        { 
            id: 3,
            icon: youtube, 
            handle: 'Nathan F.', 
            count: '1987', 
            type: 'subscribers', 
            trend: '12', 
            trendSvg: down,
            banner: 'bg-[var(--yt)]'
        }
    ]

    //object that contains all information related to sub dashbboard cards (count of 8)
    const subDashInfo = [
        { 
            id: 0,
            icon: facebook, 
            count: '1987', 
            type: 'Page Views', 
            trend: '3', 
            trendSvg: up,
        },
        { 
            id: 1,
            icon: facebook, 
            count: '52', 
            type: 'Likes', 
            trend: '2', 
            trendSvg: down,
        },
        { 
            id: 2,
            icon: instagram, 
            count: '5462', 
            type: 'Likes', 
            trend: '2257', 
            trendSvg: up,
        },
        { 
            id: 3,
            icon: instagram, 
            count: '52k', 
            type: 'Profile Views', 
            trend: '1375', 
            trendSvg: up,
        },        
        { 
            id: 4,
            icon: twitter, 
            count: '117', 
            type: 'Retweets', 
            trend: '303', 
            trendSvg: up,
        },        
        { 
            id: 5,
            icon: twitter, 
            count: '507', 
            type: 'Likes', 
            trend: '553', 
            trendSvg: up,
        },        
        { 
            id: 6,
            icon: youtube, 
            count: '107', 
            type: 'Likes', 
            trend: '19', 
            trendSvg: down,
        },       
        { 
            id: 7,
            icon: youtube, 
            count: '1407', 
            type: 'Total Views', 
            trend: '12', 
            trendSvg: down,
        }
    ]

    //changes theme to the opposite of what it currently is
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    //runs once on page load
    useEffect(() => {
        toggleTheme();
    }, []);

    //to track the mouse position
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
                    <Nav onClick={toggleTheme} info={navInfo}/>
                    <MainDash info={mainDashInfo}/>
                    <SubDash info={subDashInfo}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;