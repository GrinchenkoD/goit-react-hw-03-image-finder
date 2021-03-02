import React, { Component } from 'react'

const initialState = {
    query: "",
}
export default class Searchbar extends Component {

    state = {
        ...initialState
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState((prevState) => ({ ...prevState, query: value }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { query } = this.state;

        this.props.onSubmit(query)

        this.setState({ ...initialState })
    }



    render() {
        const { query } = this.state
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={query}
                    />
                </form>
            </header>
        )
    }
}
