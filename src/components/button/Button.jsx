import React from 'react'

function Button({ loadMore }) {
    return (
        <div>
            <button type="button" className="Button" onClick={loadMore}>Load more</button>
        </div>
    )
}

export default Button
