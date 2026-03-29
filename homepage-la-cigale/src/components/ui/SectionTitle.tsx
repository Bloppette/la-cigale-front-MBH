import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}

export function SectionTitle({
  level = 2,
  className,
  children,
  ...props
}: SectionTitleProps) {
  const Component = `h${level}` as "h1" | "h2" | "h3" | "h4";

  const variants = {
    1: "font-display text-2xl tracking-[0.2em] uppercase text-primary",
    2: "text-white font-display text-4xl leading-tight",
    3: "font-display text-gold text-xl tracking-widest uppercase",
    4: "text-white font-display text-2xl tracking-widest",
  };

  return (
    <Component className={cn(variants[level], className)} {...props}>
      {children}
    </Component>
  );
}
