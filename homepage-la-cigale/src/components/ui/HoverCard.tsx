import Image from "next/image";
import { cn } from "@/lib/utils";

interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

export function HoverCard({
  imageSrc,
  imageAlt,
  className,
  children,
  ...props
}: HoverCardProps) {
  return (
    <div
      className={cn(
        "relative h-64 flex items-center justify-center group overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-0" />
      <div className="relative z-10 text-center">{children}</div>
    </div>
  );
}
