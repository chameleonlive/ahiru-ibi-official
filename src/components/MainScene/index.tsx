import React, { useCallback, useState } from "react";
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

function sigmoid(z: number) {
  return 1 / (1 + Math.exp(-z));
}

export default function MainScene() {
  const viewport = useWindowSize();
  const [scrollX, setScrollX] = useState<number>(0);
  const [maxX, setMaxX] = useState<number>(0);

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

  const mouseMove = useCallback(
    (event) => {
      if (viewport.width) {
        const progress = sigmoid(
          ((event.clientX - viewport.width / 2) * 6) / viewport.width
        );
        console.log(progress);
        setScrollX(maxX * progress);
      }
    },
    [viewport, maxX]
  );

  return (
    <div className="main-scene">
      <div className="viewport" onMouseMove={mouseMove}>
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
    </div>
  );
}
