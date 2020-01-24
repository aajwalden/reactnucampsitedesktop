import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Directory extends Component {

    render() {
        const directory = this.props.campsites.map(campsitelist => {
            return (
                <div key={campsitelist.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campsitelist.id)}>
                        <CardImg width="100%" src={campsitelist.image} alt={campsitelist.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsitelist.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;