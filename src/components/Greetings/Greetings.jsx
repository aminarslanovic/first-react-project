import "./Greetings.css";
function Greetings(props) {
    return (
        <div className="greeting-wrapper"> 
            <h1 className="greeting-title">Dobro dosli na app{props.appName}</h1>
            <h2 className="greeting-subtitle">{props.fullName}</h2>
        </div>
    )
  }
  export default Greetings;