import React from "react";
import "./App.css";
import mobileDivider from "../imgs/pattern-divider-mobile.svg";
import desktopDivider from "../imgs/pattern-divider-desktop.svg";
import icon from "../imgs/icon-dice.svg";

const App = () => {
    const [quote, setQuote] = React.useState({});
    const [number, setNumber] = React.useState(0);

    React.useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then((res) => res.json())
            .then((data) => setQuote(data.slip));
    }, [number]);

    return (
        <main className="cont">
            <h1 className="advice-title">advice #{quote.id}</h1>
            <section className="advice-cont">
                <p className="advice">
                    <q>{quote.advice}</q>
                </p>
            </section>
            <img
                className="advice-divider mobile-div"
                src={mobileDivider}
                alt="divider"
            />
            <img
                className="advice-divider desktop-div"
                src={desktopDivider}
                alt="divider"
            />

            <button
                onClick={() => {
                    setNumber(number + 1);
                }}
                className="advice-btn"
            >
                <img src={icon} alt="dice" />
            </button>
        </main>
    );
};

export default App;
