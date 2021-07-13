import React, { useCallback, useState } from "react";
import { useIsTouchDevice, useWindowSize } from "../../utils/hooks";

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
  const isTouchDevice = useIsTouchDevice();
  const [startClientX, setStartClientX] = useState<number>(0);
  const [lastClientX, setLastClientX] = useState<number>(0);
  const [lastScrollX, setLastScrollX] = useState<number>(0);
  const [scrollX, setScrollX] = useState<number>(0);
  const [maxX, setMaxX] = useState<number>(0);
  const [timeoutId, setTimeoutId] = useState<any>(0);

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
      if (viewport.width && !isTouchDevice) {
        const progress = sigmoid(
          ((event.clientX - viewport.width / 2) * 6) / viewport.width
        );
        setScrollX(maxX * progress);
      }
    },
    [viewport, maxX, isTouchDevice]
  );

  const touchStart = useCallback(
    (event) => {
      clearTimeout(timeoutId);
      setStartClientX(event.touches[0].clientX);
      setLastClientX(event.touches[0].clientX);
      setLastScrollX(scrollX);
    },
    [timeoutId, scrollX]
  );

  const touchMove = useCallback(
    (event) => {
      const delta = event.touches[0].clientX - startClientX;
      setScrollX(Math.max(Math.min(lastScrollX + delta, 0), maxX));
      setLastClientX(event.touches[0].clientX);
    },
    [startClientX, lastScrollX, maxX]
  );

  const touchEnd = useCallback(() => {
    let delta = (lastClientX - startClientX) / 2;
    const drag = () => {
      setScrollX((scrollX) => Math.max(Math.min(scrollX + delta, 0), maxX));
      delta /= 1.2;
      if (Math.abs(delta) > 1) {
        setTimeoutId(setTimeout(drag, 33));
      }
    };
    setTimeoutId(setTimeout(drag, 33));
  }, [startClientX, maxX, lastClientX]);

  return (
    <div className="main-scene">
      <div
        className="viewport"
        onMouseMove={mouseMove}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
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
