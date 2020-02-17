import React, { Component } from "react";
import axios from "axios";

import SiteManagerSidebarList from "../site-manager/site-manager-sidebar-list";
import SiteManagerForm from "../site-manager/site-manager-form";

export default class SiteContentManager extends Component {
  constructor() {
    super();

    this.state = {
      siteManagerItems: [],
      siteManagerToEdit: {}
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearSiteManagerToEdit = this.clearSiteManagerToEdit.bind(this);
  }

  clearSiteManagerToEdit() {
    this.setState({
      siteManagerToEdit: {}
    });
  }

  handleEditClick(siteManagerItem) {
    this.setState({
      siteManagerToEdit: siteManagerItem
    });
  }

  handleDeleteClick(siteManagerItem) {
    axios
      .delete(
        `https://127.0.0.1:8000/site_manager/site_manager_items/${siteManagerItem.id}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          siteManagerItems: this.state.siteManagerItems.filter(item => {
            return item.id !== siteManagerItem.id;
          })
        });

        return response.data;
      })
      .catch(error => {
        console.log("handleDeleteClick in siteContentManger (item) error", error);
      });
  }

  handleEditFormSubmission() {
    this.getSiteManagerItems();
  }

  handleNewFormSubmission(siteManagerItem) {
    this.setState({
      siteManagerItems: [siteManagerItem].concat(this.state.siteManagerItems)
    });
  }

  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError siteContentManager (items) error", error);
  }

  getSiteManagerItems() {
    axios
      .get(
        "https://127.0.0.1:8000/site-manager/site_manager_items?order_by=created_at&direction=desc",
        {
          withCredentials: true
        }
      )
      .then(response => {
        this.setState({
          siteManagerItems: [...response.data.site_manager_items]
        });
      })
      .catch(error => {
        console.log("error in getSiteManagerItems in siteContentManager", error);
      });
  }

  componentDidMount() {
    this.getSiteMItems();
  }

  render() {
    return (
      <div className="site-content-manager-wrapper">
        <div className="left-column">
          <SiteManagerForm
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearSiteManagerToEdit={this.clearSiteManagerToEdit}
            siteManagerToEdit={this.state.siteManagerToEdit}
          />
        </div>

        <div className="right-column">
          <SiteManagerSidebarList
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.portfolioItems}
            handleEditClick={this.handleEditClick}
          />
        </div>
      </div>
    );
  }
}