import React from "react";
import './Track.css'

export class Track extends React.Component {
    renderAction() {
        const buttonSign = this.props.isRemoval ? '-' : '+';
        return  <button className="Track-action">{buttonSign}</button>
    }
    render() {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist | this.props.track.album}</p>
                </div>
                <button className="Track-action">{/* {this.props.renderAction} */}</button>
            </div>
        )
    }
}