import Image from "next/image";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
}: ParallaxImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover", imageClassName)}
        sizes="100vw"
      />
    </div>
  );
}
