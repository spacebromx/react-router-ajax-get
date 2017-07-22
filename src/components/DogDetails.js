import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBreedInfo } from "../actions/index";

class DogDetails extends Component {
    componentDidMount() {
        this.props.fetchBreedInfo(this.props.match.params.breedName);
    }

    renderInfo() {
        return (Object.keys(this.props.dogDetails).length > 0) ? (
            <div>
                <img src={this.props.dogDetails} alt={`Random image of ${this.props.match.params.breedName}`}/>
            </div>
        ) : (
            <p>Loading...</p>
        )
    }

    render() {
        const { breedName } = this.props.match.params;
        return (
            <div>
                <h2>Breed: {breedName}</h2>
                <hr/>
                <p>Here's a cute image of a dog of breed <strong>{breedName}</strong></p>
                {this.renderInfo()}
                <hr/>
                <Link className="btn btn-primary" to="/">
                    Back to index
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dogDetails: state.dogDetails
    };
}

export default connect(mapStateToProps, { fetchBreedInfo })(DogDetails);
