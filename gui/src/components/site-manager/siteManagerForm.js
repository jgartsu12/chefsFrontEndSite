import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class SiteManagerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "Soups",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: "",
      editMode: false,
      apiUrl: "https://127.0.0.1:8000/api/create/",
      apiAction: "post"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleThumbDrop = this.handleThumbDrop.bind(this);
    this.handleBannerDrop = this.handleBannerDrop.bind(this);
    this.handleLogoDrop = this.handleLogoDrop.bind(this);
    this.deleteImage = this.deleteImage.bind(this);

    this.thumbRef = React.createRef();
    this.bannerRef = React.createRef();
    this.logoRef = React.createRef();
  }

  deleteImage(imageType) {
    axios
      .delete(
        `https://127.0.0.1:8000/api/delete-image/${this.state
          .id}?image_type=${imageType}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          [`${imageType}_url`]: ""
        });
      })
      .catch(error => {
        console.log("deleteImage error", error);
      });
  }

  componentDidUpdate() {
    if (Object.keys(this.props.siteManagerToEdit).length > 0) {
      const {
        id,
        name,
        description,
        category,
        position,
        url,
        thumb_image_url,
        banner_image_url,
        logo_url
      } = this.props.siteManagerToEdit;

      this.props.clearSiteManagerToEdit();

      this.setState({
        id: id,
        name: name || "",
        description: description || "",
        category: category || "Soups",
        position: position || "",
        url: url || "",
        editMode: true,
        apiUrl: `https://127.0.0.1:8000/site_manager/site_manager_items/${id}`,
        apiAction: "patch",
        thumb_image_url: thumb_image_url || "",
        banner_image_url: banner_image_url || "",
        logo_url: logo_url || ""
      });
    }
  }

  handleThumbDrop() {
    return {
      addedfile: file => this.setState({ thumb_image: file })
    };
  }

  handleBannerDrop() {
    return {
      addedfile: file => this.setState({ banner_image: file })
    };
  }

  handleLogoDrop() {
    return {
      addedfile: file => this.setState({ logo: file })
    };
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  }

  buildForm() {
    let formData = new FormData();

    formData.append("site_manager_item[name]", this.state.name);
    formData.append("site_manager_item[description]", this.state.description);
    formData.append("site_manager_item[url]", this.state.url);
    formData.append("site_manager_item[category]", this.state.category);
    formData.append("site_manager_item[position]", this.state.position);

    if (this.state.thumb_image) {
      formData.append("site_manager_item[thumb_image]", this.state.thumb_image);
    }

    if (this.state.banner_image) {
      formData.append("site_manager_item[banner_image]", this.state.banner_image);
    }

    if (this.state.logo) {
      formData.append("site_manager_item[logo]", this.state.logo);
    }

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: this.buildForm(),
      withCredentials: true
    })
      .then(response => {
        if (this.state.editMode) {
          this.props.handleEditFormSubmission();
        } else {
          this.props.handleNewFormSubmission(response.data.site_manager_item);
        }

        this.setState({
          name: "",
          description: "",
          category: "Soups",
          position: "",
          url: "",
          thumb_image: "",
          banner_image: "",
          logo: "",
          editMode: false,
          apiUrl: "https://127.0.0.1:8000/api/create/",
          apiAction: "post"
        });

        [this.thumbRef, this.bannerRef, this.logoRef].forEach(ref => {
          ref.current.dropzone.removeAllFiles();
        });
      })
      .catch(error => {
        console.log("SiteManagerForm handleSubmit error", error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="site-manager-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            name="name"
            placeholder="Site Item Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="url"
            placeholder="URL"
            value={this.state.url}
            onChange={this.handleChange}
          />
        </div>

        <div className="two-column">
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={this.state.position}
            onChange={this.handleChange}
          />

          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value="Soups">Soups</option>
            <option value="Catering">Catering</option>
            <option value="Bakery">Bakery</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Coffee, Tea">Hot Drinks</option>
          </select>
        </div>

        <div className="one-column">
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>

        <div className="image-uploaders">
          {this.state.thumb_image_url && this.state.editMode ? (
            <div className="site-manager-image-wrapper">
              <img src={this.state.thumb_image_url} />

              <div className="image-removal-link">
                <a onClick={() => this.deleteImage("thumb_image")}>
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.thumbRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleThumbDrop()}
            >
              <div className="dz-message">Thumbnail</div>
            </DropzoneComponent>
          )}

          {this.state.banner_image_url && this.state.editMode ? (
            <div className="site-manager-image-wrapper">
              <img src={this.state.banner_image_url} />

              <div className="image-removal-link">
                <a onClick={() => this.deleteImage("banner_image")}>
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.bannerRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleBannerDrop()}
            >
              <div className="dz-message">Banner</div>
            </DropzoneComponent>
          )}

          {this.state.logo_url && this.state.editMode ? (
            <div className="site-manager-image-wrapper">
              <img src={this.state.logo_url} />

              <div className="image-removal-link">
                <a onClick={() => this.deleteImage("logo")}>Remove file</a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.logoRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleLogoDrop()}
            >
              <div className="dz-message">Logo</div>
            </DropzoneComponent>
          )}
        </div>

        <div>
          <button className="btn" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}