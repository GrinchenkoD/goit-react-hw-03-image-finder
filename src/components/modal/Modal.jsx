import React, { Component } from 'react'

export default class Modal extends Component {



    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {

        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleBackdrop = (event) => {
        this.props.onClose()
    }

    handleKeyDown = (event) => {
        if (event.code === "Escape") {

            this.props.onClose && this.props.onClose();
        }
    };

    render() {

        return (
            <div className="Overlay" onClick={this.handleBackdrop}>
                <div className="Modal">
                    <img src={this.props.modalUrl} alt="" />
                </div>
            </div>
        )

    }
}

