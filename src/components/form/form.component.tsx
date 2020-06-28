import React, { useState } from "react";

export type FormStateModel = {
    checkbox?: boolean;
    text?: string;
    textArea?: string;
    radio?: string;
    select?: string;
    date?: string;
};

// TODO is to make formState fille with info from all inputs.

const RtForm = () => {
    const [formState, setFormState] = useState<FormStateModel>({
        checkbox: false,
        text: "",
        textArea: "Please input description here",
    });

    console.log(formState);

    return (
        <div className="rt-form">
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
                    value={formState.textArea}
                    onChange={e => console.log(e)}
                />
            </div>
            <div className="rt-form__radio">
                <input
                    type="radio"
                    value="Option 1"
                    checked={formState.radio === "Option 1"}
                    onChange={e => console.log(e)}
                    name="rtFormRadio"
                />
                <input
                    type="radio"
                    value="Option 2"
                    checked={formState.radio === "Option 2"}
                    onChange={e => console.log(e)}
                    name="rtFormRadio"
                />
                <input
                    type="radio"
                    value="Option 3"
                    checked={formState.radio === "Option 3"}
                    onChange={e => console.log(e)}
                    name="rtFormRadio"
                />
            </div>
            <div className="rt-form__slelect">
                <select value={formState.select} onChange={e => console.log(e)}>
                    <option value="option 1">Option 1</option>
                    <option value="option 2">Option 2</option>
                    <option value="option 3">Option 3</option>
                </select>
            </div>
            <div className="rt-form__date">
                <input
                    type="date"
                    value={formState.date}
                    onChange={e => console.log(e)}
                />
            </div>
        </div>
    );
};

export default RtForm;
