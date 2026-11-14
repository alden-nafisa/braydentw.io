import React from "react";
import Image from "next/image";
import { designs } from "@/data/content/designs";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {designs.map((item, index) => {
        return (
          <div
            className="w-full"
            key={index}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full">
              <Image
                className="w-full h-96 hover:opacity-75 transition-opacity object-cover"
                src={item.img}
                alt={item.label}
                width={800}
                height={600}
                objectFit="cover"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Designs;
