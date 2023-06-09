import { useRef } from "react";

const Nav = (props) => {
    const checkboxRef = useRef(null);

    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-7 lg:pt-0">
            <div className="flex flex-col">
                <h1>Social Media Dashboard</h1>
                <p className="font-bold text-[var(--l-text-light)]">Total Followers: {props.info[0].followers}</p>
            </div>
            <div className="h-[1px] bg-zinc-400 w-full my-5 sm:hidden"></div>
            <div>
                <div className="hover:opacity-80 cursor-pointer">
                    <label className="flex justify-between cursor-pointer gap-3 font-bold text-[var(--l-text-light)]">
                        Dark Mode
                        <input ref={checkboxRef} onClick={props.onClick} className="toggle cursor-pointer" type="checkbox"></input>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Nav;