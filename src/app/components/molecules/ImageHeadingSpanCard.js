import React from "react";
import Image from "next/image";
import { Heading, Span } from "../atoms/index";

const ImageHeadingSpanCard = ({ imageSrc, headingText, spanText, altText }) => {
  return (
    <div className="max-w-xs rounded-lg p-4">
      <div className="relative aspect-video w-full my-4 pt-6 md:pt-0 md:my-0 sm:aspect-square md:aspect-[4/3] lg:aspect-[2/2] xl:aspect-[12/9]">
        {" "}
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="contain"
          className="object-contain w-20 h-20 md:w-60 md:h-60"
        />
      </div>

      <div className="text-center">
        <Heading level={2} className="text-xl mb-2">
          {headingText}
        </Heading>

        <Span className="text-sm text-gray-600">{spanText}</Span>
      </div>
    </div>
  );
};

export default ImageHeadingSpanCard;
