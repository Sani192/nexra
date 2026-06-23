import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
  {
    variants: {
      variant: {
        default: "bg-[#0B1120] text-[#FFFFFF] hover:bg-[#1E293B] hover:-translate-y-0.5 active:translate-y-0 shadow-xs duration-200",
        secondary: "border border-[#E5E7EB] bg-transparent text-[#0B1120] hover:bg-[#FAFAFA] hover:-translate-y-0.5 active:translate-y-0 duration-200",
        ghost: "text-[#475569] hover:text-[#0B1120] hover:bg-[#FAFAFA] duration-200",
      },
      size: { default: "h-11 px-5", lg: "h-12 px-6", icon: "size-10" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
    });
  }

  return <button className={classes} ref={ref} {...props}>{children}</button>;
});
Button.displayName = "Button";

export { Button, buttonVariants };
