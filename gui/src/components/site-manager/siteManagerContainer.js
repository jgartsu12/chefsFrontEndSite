import React, { Component } from "react";
import axios from "axios";

import SiteManagerItem from "./siteManagerItems";

export default class SiteManagerContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to Chef's Table!!",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getSiteManagerItems();
    } else {
      this.getSiteManagerItems(filter);
    }
  }

  getSiteManagerItems(filter = null) {
    axios
      .get("https://127.0.0.1:8000/site/site_items")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.site_manager_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.site_manager_items
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  siteManagerItems() {
    return this.state.data.map(item => {
      return <SiteManagerItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getSiteManagerItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("Soups")}
          >
            Soups
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Lunch")}
          >
            Lunch
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
        </div>
        <div className="site-manager-items-wrapper">{this.siteManagerItems()}</div>
      </div>
    );
  }
}