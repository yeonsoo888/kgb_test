import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Representative_contents = ({data}) => {

    const param = useParams();

    const selectedItem = data.data.filter(item => item.company === param.company);
    console.log(selectedItem)
    const list = selectedItem[0].contents.map(item => (
        <ul key={item.id}>
            <li>{item.place}<br />{item.place_cap}</li>
            <li>{item.store}</li>
            <li>{item.name}</li>
            <li>{item.number}</li>
        </ul>
    ))
    return (
        <>
            {list}
        </>
    );
};

export default Representative_contents;