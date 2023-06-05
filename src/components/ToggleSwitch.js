import { useState } from 'react';
import ReactSwitch from 'react-switch';

const ToggleSwitch = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = val => {
        setChecked(val)
    }

    return (
        <ReactSwitch
            checked={checked}
            onChange={handleChange}
        />
    );
}

export default ToggleSwitch;