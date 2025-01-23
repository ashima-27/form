import React from "react";
import Image from "next/image";

const Logo = ({ src, alt, className = "" }) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt} width={100} height={40} layout="responsive" />
    </div>
  );
};

export default Logo;
