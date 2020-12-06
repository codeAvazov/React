import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { courses } from "./dataSource";
import { useSpring, animated } from "react-spring";
import { arrowLeft, arrowRight } from "./assets/Icons/Icon";
import Card from "react-animated-3d-card";
import { NavLink } from "react-router-dom";

export default function App() {
  const [step, setStep] = useState(0);

  const startCarousel = useSpring({
    transform: `translateX(-${step*380}px)`,
    config: {
      duration: 500,
    },
  });

  const handleLeft = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleRight = () => {
    if (step < courses().length - 3) setStep(step + 1);
  };

  return (
    <div className="container wrapper">
      <div className="d-flex align-items-center justify-content-center icon_arrow_group">
        <div className="mr-4" onClick={() => handleLeft()}>
          {arrowLeft()}
        </div>
        <div onClick={() => handleRight()}>{arrowRight()}</div>
      </div>
      <div className="text-content">
        <div className="title ">Mutaxasislikni tanlang</div>
        <div className="textCont">
          Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada
          o‘zlashtirilishi kerak bo‘lgan bilimlar ketma-ketligi hamda bu
          sohaning istiqboli aniq dalillar bilan ko‘rsatib beradi.
        </div>
      </div>
      <animated.div style={startCarousel}>
        <div className={"cardContent d-flex"}>
          {courses().map((i) => (
            <NavLink to={i.to} id="blockCard" style={{ marginRight: "3.8rem" }}>
              <Card
                style={{
                  backgroundColor: "red",
                  width: "320px",
                  height: "500px",
                }}
                borderRadius="0"
                shineStrength={0.2}
                className='position-relative'
              >
                <div
                  key={i.id}
                  style={{ backgroundColor: i.color }}
                  className={"cardBlock"}
                >
                  <div className={"cardTitle"}>{i.title}</div>
                  <div
                    className={
                      i.id === 1
                        ? "icon_group_1"
                        : i.id === 2
                        ? "icon_group_2"
                        : i.id === 3
                        ? "icon_group_3"
                        : i.id === 4
                        ? "icon_group_4"
                        : i.id === 5
                        ? "icon_group_5"
                        : i.id === 6
                        ? "icon_group_6"
                        : "icon_group_7"
                    }
                  >
                    <div className={"icon_2"}>{i.icon2}</div>
                    <div>{i.icon1}</div>
                  </div>
                  <a href="#123">Batafsil</a>
                  <div
                    className={"hoverBlock"}
                    style={{ backgroundColor: i.color + "75" }}
                  >
                    {i.content}
                  </div>
                </div>
                <div
                  className={"hoverShadow"}
                  style={{
                    boxShadow: "0px 20px 40px 1.5px" + i.color,
                  }}
                />
              </Card>
            </NavLink>
          ))}
        </div>
      </animated.div>
    </div>
  );
}
