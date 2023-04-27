
const Alert = () => <div className="alert" onClick={() => alert('Hi!!')}>Click to display an alert!</div>



const AddPElement = () => <p onMouseOver={addBlur} onMouseLeave={removeBlur}>This text will become blurred when the mouse go over it</p>
const addBlur = (event) => event.target.style.filter = "blur(4px)";
const removeBlur = (event) => event.target.style.filter = "none";



const OnMouseOver = () =>
    <div className="OnMouseOver">
        <button onMouseOver={changeTextColor}>Hover to toggle font color between red and blue</button>
    </div>
const changeTextColor = (event) => event.target.style.color === "red" ? event.target.style.color = "blue" : event.target.style.color = "red";



const ChangePosition = () => 
    <div onMouseOver={changePosition}>This text will change position once when you hover on it</div>

const changePosition = (event) => {
    event.target.style.position = "absolute";
    event.target.style.top = "40px";
    event.target.style.left = "1000px";
}



const ChangeFontSize = () => <div onMouseOver={enlarge} onMouseLeave={shrink}>Hover to enlarge</div>
const enlarge = (event) => event.target.style.fontSize = "2rem";
const shrink = (event) => event.target.style.fontSize = "1em";



const Input = () => {
    return <div className="inputDiv">
        <input className="input" placeholder="Anything you write here will magically appear below" onChange={addText}></input>
        <p className="pInput"></p>
    </div>
}
const addText = (event) => {
    document.querySelector(".pInput").innerHTML = event.target.value;
}



const Img = () => {
    return <div>
        <p>Baby alligator:</p>
        <img src="https://www.aquariumofpacific.org/images/blog_uploads/20160430_AOPalligator_8788w.jpg" alt="Baby alligator"></img>
    </div>
}




const Link = () => {
    return <div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">How to make money fast!!!!!!</a>
    </div>
}



const NotAllowed = () => <div onMouseOver={(event) => event.target.style.cursor="not-allowed"} onMouseLeave={(event) => event.target.style.cursor="auto"}>You are not allowed to click on this!</div>




const ConsoleLog = () => <div>{console.log("You can't see this unless you look at the console")}</div>




const Main = () => {
    return (
        <div className="mainDiv">
            <Alert/>
            <AddPElement/>
            <OnMouseOver/>
            <ChangePosition/>
            <ChangeFontSize/>
            <Input/>
            <Img/>
            <Link/>
            <NotAllowed/>
            <ConsoleLog/>
        </div>
    )
}

ReactDOM.render(<Main/>, document.querySelector('#app'));
