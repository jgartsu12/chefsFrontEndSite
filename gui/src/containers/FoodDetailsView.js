import React, { Component } from "react";
import axios from "axios";

class FoodsDetails extends Component {
    state = {
        food: {}
    };

    componentDidMount() {
        const foodID = this.props.match.params.foodID;
        axios.get(`http://127.0.0.1:8000/api/${foodID}`).then(res => {
            this.setState({
                food: res.data
            });
        });
    }

    handleDelete = event => {
        event.preventDefault();
        const foodID = this.props.match.params.foodID;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios.delete(`http://127.0.0.1:8000/api/${foodID}/delete/`)
        .then(res => {
            if (res.status === 204) {
                this.props.history.push(`/`);
            }
        })
    };

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(FoodsDetails);