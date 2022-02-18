import React, { useState } from "react";

function SidebarLogic() {
  const [showHover, setShowHover] = useState(false);

  const mouseHover = () => {
    setShowHover(true);
  };

  const mouseOutHover = () => {
    setShowHover(false);
  };

  return { mouseHover, mouseOutHover };
}

export default SidebarLogic;
