import {useState} from "react";
const OnChangeHandler = () => {

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });
    }

    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        gender: 'neutral',
        moment: 'night',
        conditons: false,
    });

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    return (
        <label>
            <input
                type="checkbox"
                name="conditions"
                checked={formState.conditions}
                onChange={handleChange}
            />
            Akkoord met de algemene voorwaarden...
        </label>
    );
}


export default OnChangeHandler;