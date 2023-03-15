import { useState, useEffect } from "react";

const Nav = () => {
    const [theme, setTheme] = useState('light');
    
    return (
        
        <div className="flex justify-between items-center p-8">
            <div>
                <h1>Social Media Dashboard</h1>
                <p>This is small</p>
            </div>
            <div>
            <div className="flex items-center gap-2">
                <p>Dark Mode</p>
                <input className="appearance-none relative w-12 h-7 rounded-3xl cursor-pointer bg-[var(--d-toggle)] after:absolute after:top-1/2 after:left-[30%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[50%] after:h-5 after:w-5 after:bg-white duration-300 checked:bg-[var(--l-toggle)] checked:after:translate-x-[45%] after:transition-transform" type="checkbox"></input>
            </div>                                                                                                                                 
            </div>
        </div>
    );
}

export default Nav;