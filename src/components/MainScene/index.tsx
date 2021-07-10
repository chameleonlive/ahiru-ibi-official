import React, { useCallback, useRef, useState } from "react";

import storeSrc from "../../images/store.jpeg";
import { useWindowSize } from "../../utils/hooks";

import "./index.scss";

export default function MainScene() {
  const viewport = useWindowSize();
  const [scrollX, setScrollX] = useState<Number>();
  const imgRef = useRef<HTMLImageElement>(null);

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLElement>) => {
      if (viewport.height && viewport.width && imgRef.current?.clientWidth) {
        const scrollTop = event.currentTarget.scrollTop;
        const progress = scrollTop / (2000 - viewport.height);
        const imgWidth = imgRef.current?.clientWidth;
        setScrollX(-(imgWidth - viewport.width) * progress);
      }
    },
    [viewport]
  );
  return (
    <div className="main-scene">
      <div className="scroller" onScroll={handleScroll}>
        <div className="dummy"></div>
      </div>
      <div className="viewport">
        <div className="scene" style={{ transform: `translate(${scrollX}px)` }}>
          <img src={storeSrc} alt="" ref={imgRef} />
        </div>
      </div>
    </div>
  );
}
