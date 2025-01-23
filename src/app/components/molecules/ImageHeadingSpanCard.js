import React from "react";
import Image from "next/image";
import { Heading, Span } from "../atoms/index";

const ImageHeadingSpanCard = ({ imageSrc, headingText, spanText, altText }) => {
  return (
    <div className="max-w-xs rounded-lg p-4">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="rounded-lg w-4/12"
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
