import up from "../Assets/icon-up.svg";

const MainDash = ({info}) => {


    return (
        <div className="cards flex justify-between gap-8 flex-wrap">

            {info.map((item) => (
                <div key={item.id} className="card flex w-full sm:w-[47%] lg:w-[22.5%] flex-col items-center bg-[var(--l-card-bg)] px-8 rounded-lg overflow-hidden relative cursor-pointer">
                    <div className={`absolute h-1 w-full ${item.banner}`}></div>
                    <div className="flex gap-2 py-8 items-center">
                        <img src={item.icon}></img>
                        <p className="font-bold text-[var(--l-text-light)]">{item.handle}</p>
                    </div>
                    <h2>{item.count}</h2>
                    <p className="tracking-[.35em] uppercase text-[var(--l-text-light)]">{item.type}</p>
                    <div className="flex items-center gap-1 py-8">
                        <img src={item.trendSvg}></img>                    
                        <p style={ item.trendSvg === up ? { color: "var(--green)" } : { color: "var(--red)" } } className="font-bold">{item.trend} Today</p>
                    </div>
                </div>
            ))}

            {/* <div className="card flex w-full sm:w-[47%] lg:w-[22.5%] flex-col items-center bg-[var(--l-card-bg)] px-8 rounded-lg overflow-hidden relative cursor-pointer">
                <div className="absolute h-1 w-full bg-[var(--fb)]"></div>
                <div className="flex gap-2 py-8 items-center">
                    <img src={info[0].icon}></img>
                    <p className="font-bold text-[var(--l-text-light)]">{info[0].handle}</p>
                </div>
                <h2>{info[0].count}</h2>
                <p className="tracking-[.35em] uppercase text-[var(--l-text-light)]">{info[0].type}</p>
                <div className="flex items-center gap-1 py-8">
                    <img src={info[0].trendSvg}></img>                    
                    <p style={{color: "var(--green)"}} className="font-bold">{info[0].trend} Today</p>
                </div>
            </div>
            <div className="card flex w-full sm:w-[47%] lg:w-[22.5%] flex-col items-center bg-[var(--l-card-bg)] px-8 rounded-lg overflow-hidden relative cursor-pointer">
                <div className="absolute h-1 w-full bg-[var(--tt)]"></div>
                <div className="flex gap-2 py-8 items-center">
                    <img src={info[1].icon}></img>                    
                    <p className="font-bold text-[var(--l-text-light)]">{info[1].handle}</p>
                </div>
                <h2>1044</h2>
                <p className="tracking-[.35em] uppercase text-[var(--l-text-light)]">{info[1].type}</p>
                <div className="flex items-center gap-1 py-8">
                    <img src={info[1].trendSvg}></img>                    
                    <p style={{color: "var(--green)"}} className="font-bold">{info[1].trend} Today</p>
                </div>
            </div>
            <div className="card flex w-full sm:w-[47%] lg:w-[22.5%] flex-col items-center bg-[var(--l-card-bg)] px-8 rounded-lg overflow-hidden relative cursor-pointer">
                <div className="absolute h-1 w-full insta"></div>
                <div className="flex gap-2 py-8 items-center">
                    <img src={info[2].icon}></img>
                    <p className="font-bold text-[var(--l-text-light)]">{info[2].handle}</p>
                </div>
                <h2>11k</h2>
                <p className="tracking-[.35em] uppercase text-[var(--l-text-light)]">{info[2].type}</p>
                <div className="flex items-center gap-1 py-8">
                    <img src={info[2].trendSvg}></img>                    
                    <p style={{color: "var(--green)"}} className="font-bold">{info[2].trend} Today</p>
                </div>
            </div>
            <div className="card flex w-full sm:w-[47%] lg:w-[22.5%] flex-col items-center bg-[var(--l-card-bg)] px-8 rounded-lg overflow-hidden relative cursor-pointer">
                <div className="absolute h-1 w-full bg-[var(--yt)]"></div>
                <div className="flex gap-2 py-8 items-center">
                    <img src={info[3].icon}></img>
                    <p className="font-bold text-[var(--l-text-light)]">{info[3].handle}</p>
                </div>
                <h2>8239</h2>
                <p className="tracking-[.35em] uppercase text-[var(--l-text-light)]">{info[3].type}</p>
                <div className="flex items-center gap-1 py-8">
                    <img src={info[3].trendSvg}></img>                    
                    <p style={{color: "var(--red)"}} className="font-bold">{info[3].trend} Today</p>
                </div>
            </div> */}
        </div>
    );
}

export default MainDash;