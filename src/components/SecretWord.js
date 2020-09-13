import React, { useState, useEffect } from 'react';

export default function SecretWord() {
    
    useEffect(() => {
        fetchData();
    }, []);

    const [data, setData] = useState([]);

    // const dataNames = data.map(element => {
    //     return element.name;
    // })

    const fetchData = async () => {
        const fetchData = await fetch('https://www.fruitmap.org/api/trees');
        const data = await fetchData.json();
        setData(data);
    }

    const [secretWord, setSecretWord] = useState();

    // const letterFields = secretWord.map((letter, index) => {
    //     return <span className="letter-field" key={'letter-field-' + index}>{letter}</span>
    // });

    // https://mammaldiversity.org/api
    // https://www.fruitmap.org/api/trees
    // https://anfi.tk/greekApi/person/getAll

    return (
        <div className="secret-word">
            {/* {letterFields} */}
        </div>
    );
}

function getRandomWord(data) {
    // use split so we can work with array of chars
    return data[Math.floor(Math.random() * data.length)].split('');
}