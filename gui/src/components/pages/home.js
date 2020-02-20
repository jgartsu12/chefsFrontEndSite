import React from "react";

import SiteManagerContainer from "../site-manager/siteManagerContainer";
import ChefsHomePageBanner from "../../../static/assets/images/chefs_home_page_banner.png";

export default function() {
    return (
        <div>
            <SiteManagerContainer />
            <ChefsHomePageBanner />
        </div>
    );
}