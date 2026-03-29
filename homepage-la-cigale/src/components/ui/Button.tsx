import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "primary-large" | "outline";
}

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "uppercase transition-all";

  const variants = {
    primary:
      "bg-primary hover:bg-primary/90 text-white px-4 py-2 text-[10px] tracking-widest font-bold shadow-sm",
    "primary-large":
      "w-full py-4 border border-primary text-primary font-display text-xs tracking-widest hover:bg-primary hover:text-white",
    outline:
      "border-2 border-white text-white px-8 py-4 tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-black",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
