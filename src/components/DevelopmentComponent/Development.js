import React from "react";
import Accordion from "../Accordion/Accordion";

export default function Development() {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-10 bg-black bg-opacity-40 p-10 rounded-[52px]">
        <h2 className="text-[38px] md:text-[60px] lg:text-[100px] leading-none font-thin">
          Website/Webapp <br />
          Development
        </h2>

        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-[50%] w-full pr-4">
            <h4 className="text-[14px] md:text-[18px] font-thin">
              Fluxatic Global&apos;s IT Solutions empower businesses to succeed
              online. Our expertly crafted and customised solutions are tailored
              to individual businesses with their unique identity & business
              processes, designed to increase conversion rates, operational
              efficiency & overall digital presence.
            </h4>
          </div>
          <div className="md:w-[50%] w-full">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
}
