import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../utils/hooks";
import useWindowScroll from "@react-hook/window-scroll";

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
  const scrollY = useWindowScroll(60);

  useEffect(() => {
    if (viewport.height && viewport.width && storeRef.current?.clientWidth) {
      const progress = scrollY / (2000 - viewport.height);
      const imgWidth = storeRef.current?.clientWidth;
      setScrollX(-(imgWidth - viewport.width) * progress);
    }
  }, [viewport, storeRef, scrollY]);
  return (
    <div className="main-scene">
      <div className="dummy"></div>
      <div className="viewport">
        <div
          className="scene"
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          <div className="store">
            <img src={storeSrc} alt="" ref={storeRef} />
          </div>
          <div className="item logo">
            <img src={logoSrc} alt="" />
          </div>
          <div className="item eb">
            <img src={ebSrc} alt="" />
          </div>
          <div className="item gaygay">
            <img src={gaygaySrc} alt="" />
          </div>
          <div className="item guaigai">
            <img src={guaigaiSrc} alt="" />
          </div>
          <div className="item xiabing">
            <img src={xiabingSrc} alt="" />
          </div>
          <div className="item kaorou">
            <img src={kaorouSrc} alt="" />
          </div>
          <div className="item quackbox">
            <img src={quackboxSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
