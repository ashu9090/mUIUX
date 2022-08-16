import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />
      <div
        className="absolute 
      z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
      ></div>
      <div
        className="absolute 
      z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"
      ></div>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem sint adipisicing elit non elit amet est aliquip dolor laborum amet
        incididunt. Velit excepteur voluptate excepteur proident cupidatat id.
        Culpa laborum ullamco qui elit elit sint adipisicing qui nostrud
        proident fugiat deserunt. Veniam ea fugiat aute esse eiusmod irure qui
        in. Cillum consequat dolore officia nisi dolor dolore ad nisi laborum.
        Enim proident sit id laborum veniam in.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="icon"
          className="w-[128px] h-[42px] object-contain cursor-pointer mr-5"
        />
        <img
          src={google}
          alt="icon"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
