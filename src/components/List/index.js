import React from 'react';
import ListItem from '../ListItem/index';

export default function List({items, onSelect}) {
    const itemsContent = items.map(
        item => (
            <ListItem item={item} key={item.id}
            onClick={() => onSelect(item.id)}/>
        )
    );

    return (
        <div className="list-component">{itemsContent}</div>
    )

}