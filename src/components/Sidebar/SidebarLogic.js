import { useState } from "react";

function SidebarLogic() {
  const [showHover, setShowHover] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const mouseHover = () => {
    setShowHover(true);
  };

  const mouseOutHover = () => {
    setShowHover(false);
  };

  const dotsClick = () => {
    setSidebar((prev) => !prev);
  };

  const close = () => {
    setSidebar((prev) => !prev);
  };

  return { mouseHover, mouseOutHover, sidebar, dotsClick, close };
}

export default SidebarLogic;
