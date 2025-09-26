import React, { useState } from "react";
import image1 from "./assets/images/logo-devlens.svg";
import stile from "./assets/images/logo-style-spy.svg";
import Speed from "./assets/images/logo-speed-boost.svg";
import Wize from "./assets/images/logo-json-wizard.svg";
import mas from "./assets/images/logo-tab-master-pro.svg";
import Bud from "./assets/images/logo-viewport-buddy.svg";
import Not from "./assets/images/logo-markup-notes.svg";
import guide from "./assets/images/logo-grid-guides.svg";
import pal from "./assets/images/logo-palette-picker.svg";
import Chec from "./assets/images/logo-link-checker.svg";
import snap from "./assets/images/logo-dom-snapshot.svg";
import plus from "./assets/images/logo-console-plus.svg";

import Extensions from "./Extensions";

const Parentcomponent = ({ filter, lightmode }) => {
  const [extension, setExtension] = useState([
    {
      id: 1,
      title: "Devlens",
      Image: image1,
      subtitle: "Quickly inspect page layouts and visualize element boundaries",
      delbtn: "remove",
      enabled: false,
    },
    {
      id: 2,
      title: "StyleSpy",
      Image: stile,
      subtitle: "Instantly analyze and copy css from any webpage element",
      delbtn: "remove",
      enabled: false,
    },
    {
      id: 3,
      title: "SpeedBoost",
      Image: Speed,
      subtitle: "Optimize browser resources usage to accelerate page loading",
      delbtn: "remove",
      enabled: false,
    },

    {
      id: 4,
      title: "JSONWizard",
      Image: Wize,
      subtitle: "Format, Validate and Pretitifliles JSON response in-browser",
      delbtn: "remove",
      enabled: false,
    },
    {
      id: 5,
      title: "TabMaster Pro",
      Image: mas,
      subtitle: "Organize browser tabs in group and sessions",
      delbtn: "remove",
      enabled: false,
    },

    {
      id: 6,
      title: "Viewport Buddy",
      Image: Bud,
      subtitle:
        "Simulate various screen resolutions directly within the browser",
      delbtn: "remove",
      enabled: false,
    },
    {
      id: 7,
      title: "Markup Notes",
      Image: Not,
      subtitle:
        "Enable annotation and notes directly onto webpages for collaboration debugging",
      delbtn: "remove",
      enabled: false,
    },
    {
      id: 8,
      title: "GridGuides",
      Image: guide,
      subtitle:
        "Overlay customizaable grids and alignment guides on my webpage",
      delbtn: "remove",
      enabled: false,
    },
    {
      id: 9,
      title: "Pallet Picker",
      Image: pal,
      subtitle: "Instantly extracts color palettes from any webpage",
      delbtn: "remove",
      enabled: false,
    },
    {
      id: 10,
      title: "LinkChecker",
      Image: Chec,
      subtitle: "Scan and light broken limits on any page",
      delbtn: "remove",
      enabled: false,
    },
    {
      id: 11,
      title: "Dom Snapshot",
      Image: snap,
      subtitle: "Capture and export DOM structures quickly",
      delbtn: "remove",
      enabled: false,
    },
    {
      id: 12,
      title: "ConsolePlus",
      Image: plus,
      subtitle: "Enhance developer control with advance filtering and logging",
      delbtn: "remove",
      enabled: false,
    },
  ]);
  const handleToggle = (id) => {
    setExtension((prev) =>
      prev.map((extensions) =>
        extensions.id === id
          ? { ...extensions, enabled: !extensions.enabled }
          : extensions
      )
    );
  };

  const toggleDelete = (id) => {
    setExtension((prevExtension) =>
      prevExtension.filter((ext) => ext.id !== id)
    );
  };
  const filteredExtensions = extension.filter((extensions) => {
    if (filter === "Active") return extensions.enabled;
    if (filter === "Inactive") return !extensions.enabled;
    return true; // "all"
  });
  return (
    <div className="flex justify-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-4   ">
        {filteredExtensions.map((extensions) => (
          <Extensions
            key={extensions.id}
            extensions={extensions}
            handleToggle={() => handleToggle(extensions.id)}
            isEnabled={extensions.enabled}
            lightmode={lightmode}
            toggleDelete={toggleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Parentcomponent;
