import { useState } from 'react';
import "./range.css"

function RangeComponent() {
    const [rangeValues, setRangeValues] = useState();

    const handleRange = (e) => {
        setRangeValues(e.target.value)
    }

    return (
        <div className='mt-20'>
            <p>RangeValues: {rangeValues}</p>
            <input type="range" min={0} max={5000} className="range range-accent" onChange={handleRange} />
        </div>
    )


}

export default RangeComponent;
