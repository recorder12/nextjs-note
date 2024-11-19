'use client';

import { useEffect, useState } from "react";

export default function MeowArticle() {
    const [text, setText] = useState("Loading...");

    useEffect(() => {
        fetch('https://meowfacts.herokuapp.com/')
        .then((res) => res.json())
        .then((data) => setText(data.data[0]))
    }, []);

    return (
        <article>
            <h2>고양이 사실</h2>
            <p>{text}</p>
        </article>
    );
}