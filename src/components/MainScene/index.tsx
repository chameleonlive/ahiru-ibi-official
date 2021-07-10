import React, { useCallback, useRef, useState } from "react";
import { useWindowSize } from "../../utils/hooks";

import storeSrc from "../../images/store.jpeg";
import logoSrc from "../../images/logoShadow.png";
import ebSrc from "../../images/eb.png";
import gaygaySrc from "../../images/gaygay.png";
import guaigaiSrc from "../../images/guaigai.png";
import xiabingSrc from "../../images/xiabing.png";
import kaorouSrc from "../../images/kaorou.png";
import quackboxSrc from "../../images/quackbox.png";

import "./index.scss";

export default function MainScene() {
  const viewport = useWindowSize();
  const [scrollX, setScrollX] = useState<Number>();
  const storeRef = useRef<HTMLImageElement>(null);

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLElement>) => {
      if (viewport.height && viewport.width && storeRef.current?.clientWidth) {
        const scrollTop = event.currentTarget.scrollTop;
        const progress = scrollTop / (2000 - viewport.height);
        const imgWidth = storeRef.current?.clientWidth;
        setScrollX(-(imgWidth - viewport.width) * progress);
      }
    },
    [viewport, storeRef]
  );
  return (
    <div className="main-scene">
      <div className="scroller" onScroll={handleScroll}>
        <div className="dummy"></div>
      </div>
      <div className="viewport">
        <div className="scene" style={{ transform: `translate(${scrollX}px)` }}>
          <div className="store">
            <img src={storeSrc} alt="" ref={storeRef} />
          </div>
          <div className="logo">
            <img src={logoSrc} alt="" />
          </div>
          <div className="eb">
            <img src={ebSrc} alt="" />
          </div>
          <div className="gaygay">
            <img src={gaygaySrc} alt="" />
          </div>
          <div className="guaigai">
            <img src={guaigaiSrc} alt="" />
          </div>
          <div className="xiabing">
            <img src={xiabingSrc} alt="" />
          </div>
          <div className="kaorou">
            <img src={kaorouSrc} alt="" />
          </div>
          <div className="quackbox">
            <img src={quackboxSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
