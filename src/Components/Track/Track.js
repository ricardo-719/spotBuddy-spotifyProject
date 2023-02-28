import React from "react";
import './Track.css'

export class Track extends React.Component {

    renderAction() {
        const buttonSign = this.props.isRemoval ? '-' : '+';
        return  <button className="Track-action">{buttonSign}</button>
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    render() {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist | this.props.track.album}</p>
                </div>
                {this.renderAction}
            </div>
        )
    }
}