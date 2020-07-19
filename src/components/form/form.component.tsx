import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import { MenuItem } from '@material-ui/core';

export type FormStateModel = {
    checkbox?: boolean;
    text?: string;
    textArea?: string;
    radio?: string;
    select?: string;
    muiSelect?: string;
    date?: string;
    slider?: string;
    filledTextField?: string;
};

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

// TODO is to make formState fille with info from all inputs.

const RtForm = () => {
    const ref = useRef<HTMLInputElement>(null!);

    // useEffect(() => {
    //     // here we can use ref and be sure that view is rendered
    //     console.log(ref);
    // }, []);

    const [formState, setFormState] = useState<FormStateModel>({
        checkbox: true,
        date: '2020-07-24',
        radio: 'Option 2',
        select: 'option 3',
        muiSelect: 'option 3',
        slider: '62',
        text: 'asdasd',
        textArea: 'asdasd',
    });
    const classes = useStyles();
    return (
        <>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    console.log(formState);
                }}
                className={classes.root}
                noValidate
                autoComplete="off"
            >
                <div className="rt-form__checkbox">
                    <Checkbox
                        checked={formState.checkbox}
                        onChange={event => {
                            setFormState({
                                ...formState,
                                checkbox: event.target.checked,
                            });
                        }}
                    />
                </div>
                <p>
                    {/*https://reactjs.org/docs/uncontrolled-components.html*/}
                    <span>Uncontrolled field</span>
                    <input
                        ref={ref}
                        type="text"
                        placeholder="Uncontrolled text input"
                    />
                    <Button onClick={() => console.log(ref.current.value)}>
                        Log input
                    </Button>
                </p>
                <p style={{ color: '#000' }}>Controlled field</p>
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
                <FormControl>
                    <TextField variant="filled" className="rt-form__text" />
                </FormControl>
                <div className="rt-form__textarea">
                    <TextField
                        className="rt-form__text"
                        label="Please input description here"
                        value={formState.textArea}
                        onChange={event => {
                            setFormState({
                                ...formState,
                                textArea: event.target.value,
                            });
                        }}
                    />
                </div>
                <RadioGroup className="rt-form__radio">
                    <Radio
                        value="Option 1"
                        checked={formState.radio === 'Option 1'}
                        onChange={event => {
                            setFormState({
                                ...formState,
                                radio: event.target.value,
                            });
                        }}
                        name="rtFormRadio"
                    />
                    <Radio
                        value="Option 2"
                        checked={formState.radio === 'Option 2'}
                        onChange={event => {
                            setFormState({
                                ...formState,
                                radio: event.target.value,
                            });
                        }}
                        name="rtFormRadio"
                    />
                    <Radio
                        value="Option 3"
                        checked={formState.radio === 'Option 3'}
                        onChange={event => {
                            setFormState({
                                ...formState,
                                radio: event.target.value,
                            });
                        }}
                        name="rtFormRadio"
                    />
                </RadioGroup>
                <div className="rt-form__select">
                    <select
                        value={formState.select}
                        onChange={({ target }) => {
                            console.dir(target);
                            setFormState({
                                ...formState,
                                select: target.value,
                            });
                        }}
                    >
                        <option value="option 1">Option 1</option>
                        <option value="option 2">Option 2</option>
                        <option value="option 3">Option 3</option>
                    </select>
                    <p></p>
                    <Select
                        value={formState.muiSelect}
                        // TODO check proper event typing
                        onChange={(event: any) => {
                            console.log(event.target.value);
                            setFormState({
                                ...formState,
                                muiSelect: event.target.value,
                            });
                        }}
                    >
                        <MenuItem value="option 1">Option 1</MenuItem>
                        <MenuItem value="option 2">Option 2</MenuItem>
                        <MenuItem value="option 3">Option 3</MenuItem>
                    </Select>
                </div>
                <TextField className="rt-form__date" type="date">
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
                </TextField>
                <Slider className="rt-form__slider">
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
                </Slider>

                <div>
                    <Button type="submit">Submit form</Button>
                </div>
            </form>
        </>
    );
};

export default RtForm;
