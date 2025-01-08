import React, { useState } from "react";
import Heading from "../../common/Heading";
import { FAQ_DATA_LIST } from "../../utils/helper";
import { FaqArrow } from "../../utils/icons";

const Faqs = () => {
  const [active, setActive] = useState(0);
  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <div
      id="faqs"
      className="pt-[210px] bg-dark-blue px-5 max-lg:pt-[160px] max-md:pt-[120px] max-sm:pt-[96px]"
    >
      <Heading
        customClass={"pb-[60px] max-md:pb-10 max-sm:pb-8"}
        title={"FAQs"}
      />
      <div className="max-w-[1022px] flex flex-col gap-6 mx-auto">
        {FAQ_DATA_LIST.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl border max-w-[1022px] w-full  p-[1px]  ${
              active === index
                ? "bg-faq-border border-0"
                : "border-white border-opacity-10"
            }`}
          >
            <div className="bg-dark-blue w-full rounded-xl p-6">
              <button
                onClick={() => toggle(index)}
                className={`flex w-full text-white justify-between max-sm:gap-4 bg-transparent items-center text-left max-sm:text-base font-medium text-xl max-md:text-lg ${
                  active === index ? "pb-4" : ""
                }`}
              >
                {item.heading}{" "}
                <span
                  className={`transition-all duration-300 ${
                    active === index ? "rotate-180 " : ""
                  }`}
                >
                  <FaqArrow />
                </span>
              </button>
              <p
                className={`text-white max-md:text-sm overflow-hidden transition-all duration-300 ${
                  active === index ? "max-h-32 max-sm:max-h-52" : "max-h-0"
                }`}
              >
                {item.subHeading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
