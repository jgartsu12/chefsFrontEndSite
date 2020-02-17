import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SiteManagerSidebarList = props => {
  const sidebarList = props.data.map(siteManagerItem => {
    return (
      <div key={siteItem.id} className="site-item-thumb">
        <div className="site-thumb-img">
          <img src={siteItem.thumb_image_url} />
        </div>

        <div className="text-content">
          <div className="title">{siteItem.name}</div>

          <div className="actions">
            <a
              className="action-icon"
              onClick={() => props.handleEditClick(siteItem)}
            >
              <FontAwesomeIcon icon="edit" />
            </a>

            <a
              className="action-icon"
              onClick={() => props.handleDeleteClick(siteItem)}
            >
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="site-sidebar-list-wrapper">{siteList}</div>;
};

export default SiteManagerSidebarList;