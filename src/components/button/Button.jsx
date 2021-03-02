import React from 'react'

function Button({ loadMore }) {
    return (
        <div className="btn-container">
            <button type="button" className="Button" onClick={loadMore}>Load more</button>
        </div>
    )
}

export default Button
