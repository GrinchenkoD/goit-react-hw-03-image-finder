import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm">
                    <button type="submit" className="SearchForm-button" onSubmit={() => { }}>
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}
