"use client";

import React, { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { Bungee } from "next/font/google";
import Character from "./character";
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });
const bungee = Bungee({ subsets: ["latin"], weight: ["400"] });

const LAYER_1 = 5;
const LAYER_1_MULTIPLIER = LAYER_1 / 2500;
const LAYER_2 = 9;
const LAYER_2_MULTIPLIER = LAYER_2 / 2500;
const LAYER_3 = 6.5;
const LAYER_3_MULTIPLIER = LAYER_3 / 2500;
const LAYER_4 = 8;
const LAYER_4_MULTIPLIER = LAYER_4 / 2500;

function Hero() {
  const [dimension, setDimension] = useState({ height: 50, width: 50 });
  const [layers, setLayers] = useState({
    layer1: LAYER_1,
    layer2: LAYER_2,
    layer3: LAYER_3,
    layer4: LAYER_4,
  });

  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const updatedLayer1 = Math.max(
        0,
        LAYER_1 - scrollTop * LAYER_1_MULTIPLIER
      );
      const updatedLayer2 = Math.max(
        0,
        LAYER_2 - scrollTop * LAYER_2_MULTIPLIER
      );

      const updatedLayer3 = Math.max(
        0,
        LAYER_3 - scrollTop * LAYER_3_MULTIPLIER
      );
      const updatedLayer4 = Math.max(
        0,
        LAYER_4 - scrollTop * LAYER_4_MULTIPLIER
      );

      setLayers({
        layer1: updatedLayer1,
        layer2: updatedLayer2,
        layer3: updatedLayer3,
        layer4: updatedLayer4,
      });

      let newDimension = 50 + scrollTop * 0.02; // Adjust this multiplier for desired growth speed
      if (newDimension > 100) {
        newDimension = 100;
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
      setDimension({ height: newDimension, width: newDimension });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative custom-h w-screen bg-[--blue]">
      <div
        className={`${roboto_mono.className} text-white h-screen text-[25px] leading-[3rem] p-8 lg:text-[40px] text-right flex flex-col items-end justify-end`}
      >
        <span className="lg:text-base py-3">↓ SCROLL&nbsp;DOWN</span>
        <div>
          A COLLECTIVE <br />
          DREAM
        </div>
      </div>

      <div
        style={{
          position: isFixed ? "fixed" : "absolute",
          top: isFixed ? "0" : "auto",
          bottom: isFixed ? "auto" : "0",
          zIndex: 3000,
          left: "0",
        }}
        className="h-screen w-screen font-bold text-[6rem] text-white flex flex-col justify-between items-center"
      >
        <p className={roboto_mono.className}>
          <Character char="F" />
          <Character
            char="O"
            className={bungee.className}
            elevation={layers.layer1}
          />
          <Character char="R" />
          <Character char=" " />
          <Character
            char="T"
            className={bungee.className}
            elevation={layers.layer2}
          />
          <Character char="H" elevation={layers.layer1} />
          <Character
            char="E"
            className={bungee.className}
            elevation={layers.layer2}
          />
        </p>
        <p className={roboto_mono.className}>
          <Character
            char="C"
            elevation={-layers.layer2}
            className={bungee.className}
          />
          <Character char="H" />
          <Character
            char="I"
            elevation={-layers.layer1}
            className={bungee.className}
          />
          <Character char="L" />
          <Character
            char="D"
            elevation={-layers.layer3}
            className={bungee.className}
          />
          <Character char="R" elevation={-layers.layer4} />
          <Character char="E" />
          <Character char="N" elevation={-layers.layer1} />
        </p>
      </div>

      <div
        style={{
          height: `${dimension.height}vh`,
          width: `${dimension.width}vw`,
          position: isFixed ? "fixed" : "absolute",
          top: isFixed ? `${(100 - dimension.height) / 2}vh` : "auto",
          bottom: isFixed ? "auto" : "0",
          zIndex: 1000,
          left: isFixed ? `${(100 - dimension.width) / 2}vw` : "0",
        }}
        className="bg-green-500"
      >
        <video
          className="w-full h-full object-cover object-center block"
          autoPlay={true}
          loop={true}
          style={{
            backgroundImage:
              "url(&quot;https://cdn.prod.website-files.com/62300bb50484e326b9778ca4/623d6a3821f09efaf69c420a_metaproject-poster-00001.jpg&quot",
          }}
          muted={true}
          playsInline={true}
          data-wf-ignore="true"
          data-object-fit="cover"
        >
          <source
            src="https://cdn.prod.website-files.com/62300bb50484e326b9778ca4/623d6a3821f09efaf69c420a_metaproject-transcode.mp4"
            data-wf-ignore="true"
          />
          <source
            src="https://cdn.prod.website-files.com/62300bb50484e326b9778ca4/623d6a3821f09efaf69c420a_metaproject-transcode.webm"
            data-wf-ignore="true"
          />
        </video>
      </div>
    </section>
  );
}

export default Hero;
