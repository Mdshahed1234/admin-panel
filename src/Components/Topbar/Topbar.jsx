import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "../../ImageAssets/Shahed.jpg";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Mdadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>{" "}
          <div className="topbarIconsContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>{" "}
          <div className="topbarIconsContainer">
            <SettingsIcon />
          </div>
          <img src={Image} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
