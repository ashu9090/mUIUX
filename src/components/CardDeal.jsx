import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Deserunt consectetur enim duis aliqua ea nulla culpa voluptate laborum
        duis proident magna. Non irure mollit laboris tempor pariatur aliquip
        duis duis eiusmod et officia laboris. Enim ex deserunt labore culpa
        officia. Culpa magna eu commodo minim id consectetur adipisicing eu
        consectetur voluptate aute laboris. Elit adipisicing laborum velit
        eiusmod in aliqua enim ut occaecat nisi qui. Do exercitation non mollit
        deserunt.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="image"
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
  </section>
);
export default CardDeal;
