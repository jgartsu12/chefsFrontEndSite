import React, { Component } from "react";
import axios from "axios";

export default class FoodListView extends Component {
    state = {
        foods: []
    };

    fetchFoods = () => {
        axios.get("http://127.0.0.1:8000/api/").then(res => {
            this.setState({
                foods: res.data
            });
        });
    }

    componentDidMount() {
        this.fetchFoods();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token){    
            this.fetchFoods();
        }
    }

    render() {
        return(
            <div>
                <Foods data={this.state.foods} /> <br />
                <h2>Add Food</h2>
                <Form requestType="post" foodsID={null} btnText="Create" />
            </div>
        );
    }
}