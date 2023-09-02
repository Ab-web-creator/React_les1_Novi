import {useState} from "react";

const ThreeButtons = () => {

    const [player, setPlayer] = useState('');
    function Button({ playerName, handlePlayerChange }) {
        return (
            <button type="button" onClick={() => handlePlayerChange(playerName)}>
                {playerName}
            </button>
        );
    }

    return (
    <>
        <h1>{player} is aan de beurt</h1>
        <section className={"flexed20"}>

        <Button playerName="Bart" handlePlayerChange={setPlayer}/>
        <Button playerName="Piet" handlePlayerChange={setPlayer}/>
        <Button playerName="Marie" handlePlayerChange={setPlayer}/>
        </section>
    </>
    )
}

export default ThreeButtons;