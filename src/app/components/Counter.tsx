'use client';
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    console.log('Counter');
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
}