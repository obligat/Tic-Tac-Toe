import React from 'react';

export default function ListItem({item, onClick}) {
    let formatTime = 'unknown time';
    let reg = /(\d{2})\/(\d{2})\/(\d{4})/g;
    if(item.time){
        formatTime = new Date(item.time).toLocaleString('en-GB').match(/(\d{2}\/\d{2}\/\d{4}).*(\d{2}:\d{2}:\d{2})/);
        formatTime = formatTime[1].replace(reg,'$3-$2-$1') + '  ' + formatTime[2].slice(0,-3);
    }

    return (
        <a className="list-group-item item-component cursor" onClick={onClick}>
            <span className="label label-default label-pill pull-right text-info
            ">
                {formatTime}
            </span>
            <span className="item-title">{item.title}</span>
        </a>
    )
};