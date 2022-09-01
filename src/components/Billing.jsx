import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
      <div />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5 text-[13px]`}>
        Investing in securities involves risks, and there is always the
        potential of losing money when you invest in securities. You should
        review any planned financial transactions that may have tax or legal
        implications with your personal tax or legal advisor.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={google}
          alt="google play"
          className="w-[128px] h-[42px] object-contain cursor-pointer mr-5 "
        />
        <img
          src={apple}
          alt="app store"
          className="w-[128px] h-[42px] object-contain cursor-pointer  "
        />
      </div>
    </div>
  </section>
)

export default Billing
