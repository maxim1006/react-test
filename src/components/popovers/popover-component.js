import React, { memo, useContext, useRef, useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import ThemeContext from '../../context/theme.context';

const Popover = () => {
    const ref = useRef();
    const { themeContextValue, changeThemeContextValue } = useContext(
        ThemeContext
    );
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(open => !open);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                ref={ref}
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Popover{themeContextValue}
            </Button>
            <Popover
                open={open}
                anchorEl={ref.current}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onChange={event => {
                    changeThemeContextValue(event.target.value);
                }}
            >
                {themeContextValue}
            </Popover>
        </>
    );
};

export default memo(Popover);
