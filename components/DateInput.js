import { useState } from "react";

export default function DateInput({ onChange }) {
    const [date, setDate] = useState('');

    const handleDateChange = (event) => {
        setDate(event.target.value);
        onChange(event.target.value);
    };

    return (
        <input className="mb-8 bg-slate-100 border-2 border-slate-500 rounded-lg" type="date" value={date} onChange={handleDateChange} />
    );
}