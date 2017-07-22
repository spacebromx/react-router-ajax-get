import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBreeds } from "../actions/index";

class Landing extends Component {
    componentDidMount() {
        this.props.fetchBreeds();
    }

    renderBreeds() {
        const { breeds } = this.props;

        return (breeds.length > 0) ? (
            <ul className="list-group">
                {breeds.map(breed => {
                    return <li className="list-group-item" key={breed}>🐶 &nbsp;<Link to={`/dog/${breed}`}>{breed}</Link></li>
                })}
            </ul>
            ) : (
                <div>No breeds to show :(</div>
            )
    }

    render() {
        return (
            <div>
                <h1>Welcome to DoggoPedia!</h1>
                <hr/>
                <div>
                    <p>Below, you'll find a list with dog breeds. If you want to see the details from a specific breed, just click it!</p>
                    {this.renderBreeds()}
                    <hr/>
                    <p>This API is provided by the amazing guys at <a href="https://dog.ceo/dog-api/">Dog CEO</a></p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        breeds: state.breeds
    };
}

export default connect(mapStateToProps, { fetchBreeds })(Landing);
