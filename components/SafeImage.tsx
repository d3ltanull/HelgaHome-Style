"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { getAlternateImagePath } from "@/lib/categories";

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
}

export default function SafeImage({
  src,
  alt,
  fill = true,
  sizes,
  className = "",
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hidden, setHidden] = useState(false);

  const handleError = useCallback(() => {
    const alternate = getAlternateImagePath(currentSrc);
    if (alternate) {
      setCurrentSrc(alternate);
      return;
    }
    setHidden(true);
  }, [currentSrc]);

  if (hidden) {
    return null;
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      onError={handleError}
    />
  );
}
