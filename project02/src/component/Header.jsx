import "./Header.css";

const Header=()=>{
    return(
        <div className="Header">
            <h3>오늘은 🗓️</h3>
            <h1>{new Date().toDateString()}</h1>
            <p>제작자: k.sua</p>
        </div>
    );
}
export default Header;