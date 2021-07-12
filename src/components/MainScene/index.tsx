import React, { useCallback, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../utils/hooks";

import storeSrc from "../../images/store.jpeg";
import logoSrc from "../../images/logoShadow.png";
import ebSrc from "../../images/eb.png";
import gaygaySrc from "../../images/gaygay.png";
import guaigaiSrc from "../../images/guaigai.png";
import xiabingSrc from "../../images/xiabing.png";
import kaorouSrc from "../../images/kaorou.png";
import quackboxSrc from "../../images/quackbox.png";
import rightNavSrc from "../../images/right-nav.png";
import leftNavSrc from "../../images/left-nav.png";

import "./index.scss";

export default function MainScene() {
  const viewport = useWindowSize();
  const [scrollX, setScrollX] = useState<number>(0);
  const [maxX, setMaxX] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<any>();

  const onStoreLoad = useCallback(
    (event) => {
      if (viewport.width && event.currentTarget.clientWidth) {
        const imgWidth = event.currentTarget.clientWidth;
        const maxX = -(imgWidth - viewport.width);
        setMaxX(maxX);
      }
    },
    [viewport]
  );

  const moveRight = useCallback(() => {
    setScrollX((scrollX: number | undefined) =>
      Math.max((scrollX || 0) - 5, maxX)
    );
  }, [maxX]);

  const moveLeft = useCallback(() => {
    setScrollX((scrollX: number | undefined) =>
      Math.min((scrollX || 0) + 5, 0)
    );
  }, []);

  return (
    <div className="main-scene">
      <div className="viewport">
        <div
          className="scene"
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          <div className="store">
            <img src={storeSrc} alt="" onLoad={onStoreLoad} />
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
      <div
        className="left-edge"
        onMouseOver={() => setIntervalId(setInterval(moveLeft, 10))}
        onMouseOut={() => clearInterval(intervalId)}
      >
        <img src={leftNavSrc} alt="" style={{ opacity: scrollX < 0 ? 1 : 0 }} />
      </div>
      <div
        className="right-edge"
        onMouseOver={() => setIntervalId(setInterval(moveRight, 10))}
        onMouseOut={() => clearInterval(intervalId)}
      >
        <img
          src={rightNavSrc}
          alt=""
          style={{ opacity: scrollX > maxX ? 1 : 0 }}
        />
      </div>
    </div>
  );
}
