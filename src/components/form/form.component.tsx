import React, { useRef, useState } from "react";

export type FormStateModel = {
    checkbox?: boolean;
    text?: string;
    textArea?: string;
    radio?: string;
    select?: string;
    date?: string;
    slider?: string;
};

// TODO is to make formState fille with info from all inputs.

const RtForm = () => {
    const ref = useRef<HTMLInputElement>(null!);

    // useEffect(() => {
    //     // here we can use ref and be sure that view is rendered
    //     console.log(ref);
    // }, []);

    const [formState, setFormState] = useState<FormStateModel>({
        checkbox: false,
        text: "",
        textArea: "",
        date: new Date().toISOString().substr(0, 10),
        radio: "Option 1",
        slider: "0",
    });

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                console.log(formState);
            }}
            className="rt-form"
        >
            <div className="rt-form__checkbox">
                <input
                    type="checkbox"
                    checked={formState.checkbox}
                    onChange={event => {
                        setFormState({
                            ...formState,
                            checkbox: event.target.checked,
                        });
                    }}
                />
            </div>
            <div className="rt-form__text">
                <p>
                    {/*https://reactjs.org/docs/uncontrolled-components.html*/}
                    <span>Uncontrolled field</span>
                    <input
                        ref={ref}
                        type="text"
                        placeholder="Uncontrolled text input"
                    />
                    <button onClick={() => console.log(ref.current.value)}>
                        Log input
                    </button>
                </p>
                <p>Controlled field</p>
                <input
                    type="text"
                    value={formState.text}
                    onChange={event => {
                        setFormState({
                            ...formState,
                            text: event.target.value,
                        });
                    }}
                />
            </div>
            <div className="rt-form__textarea">
                <textarea
                    placeholder="Please input description here"
                    value={formState.textArea}
                    onChange={event => {
                        setFormState({
                            ...formState,
                            textArea: event.target.value,
                        });
                    }}
                />
            </div>
            <div className="rt-form__radio">
                <input
                    type="radio"
                    value="Option 1"
                    checked={formState.radio === "Option 1"}
                    onChange={event => {
                        setFormState({
                            ...formState,
                            radio: event.target.value,
                        });
                    }}
                    name="rtFormRadio"
                />
                <input
                    type="radio"
                    value="Option 2"
                    checked={formState.radio === "Option 2"}
                    onChange={event => {
                        setFormState({
                            ...formState,
                            radio: event.target.value,
                        });
                    }}
                    name="rtFormRadio"
                />
                <input
                    type="radio"
                    value="Option 3"
                    checked={formState.radio === "Option 3"}
                    onChange={event => {
                        setFormState({
                            ...formState,
                            radio: event.target.value,
                        });
                    }}
                    name="rtFormRadio"
                />
            </div>
            <div className="rt-form__slelect">
                <select
                    value={formState.select}
                    onChange={event => {
                        setFormState({
                            ...formState,
                            select: event.target.value,
                        });
                    }}
                >
                    <option value="option 1">Option 1</option>
                    <option value="option 2">Option 2</option>
                    <option value="option 3">Option 3</option>
                </select>
            </div>
            <div className="rt-form__date">
                <input
                    type="date"
                    value={formState.date}
                    onChange={event => {
                        setFormState({
                            ...formState,
                            date: event.target.value,
                        });
                    }}
                />
            </div>
            <div className="rt-form__date">
                <input
                    value={formState.slider}
                    type="range"
                    min="1"
                    max="100"
                    onChange={event => {
                        setFormState({
                            ...formState,
                            slider: event.target.value,
                        });
                    }}
                />
            </div>

            <div>
                <button type="submit">Submit form</button>
            </div>
        </form>
    );
};

export default RtForm;
