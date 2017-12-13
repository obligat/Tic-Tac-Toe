
import React from 'react';

function CreateBar({onClick}) {
    return (
        <a onClick={onClick} className="list-group-item create-bar-component">
            + Create New Article
        </a>  )
}

export default CreateBar;