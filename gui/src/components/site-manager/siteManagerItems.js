import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SiteManagerItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteManagerItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ siteManagerItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ siteManagerItemClass: "" });
  }

  render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <Link to={`/site-manager/${id}`}>
        <div
          className="site-manager-item-wrapper"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <div
            className={
              "site-manager-img-background " + this.state.siteManagerItemClass
            }
            style={{
              backgroundImage: "url(" + thumb_image_url + ")"
            }}
          />

          <div className="img-text-wrapper">
            <div className="logo-wrapper">
              <img src={logo_url} />
            </div>

            <div className="subtitle">{description}</div>
          </div>
        </div>
      </Link>
    );
  }
}