/* eslint-disable react/prop-types */
import logo from "../assets/logo.jpg";

import { useMotionValue, useTransform, motion } from "framer-motion";

const colors = [
  { value: "#ded1c9" },
  { value: "#ca1d30" },
  { value: "#ddd0bd" },
];

const Card = ({ image, title, subtitle, price }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    // card wrapper
    <div style={{ perspective: 2000 }}>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="relative w-[426px] min-h-[600px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab"
      >
        {/* card logo */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="mb-6 w-24 h-16 rounded-xl"
          />
        </div>
        {/* card title */}
        <h1 className="text-xl font-bold pb-5">{title}</h1>
        {/* card subtitle */}
        <p className="max-w-[300px] text-black/90 mb-6 ">{subtitle}</p>
        {/* btn and price */}
        <div className="flex items-center gap-x-[20px] mb-12">
          <button className="bg-[#2d2b2c] text-white/80 font-medium py-[16px] px-[40px] rounded-lg">
            Add to cart
          </button>
          <div className="text-[24px] font-bold text-black/90">{price}</div>
        </div>
        {/* colors */}
        <ul className="flex gap-x-2">
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: color.value }}
                className="w-8 h-8 rounded-full cursor-pointer"
              ></li>
            );
          })}
        </ul>
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className="absolute top-32 -right-36 w-[320px] pt-16"
        >
          <img
            src={image}
            alt=""
            draggable="false"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
