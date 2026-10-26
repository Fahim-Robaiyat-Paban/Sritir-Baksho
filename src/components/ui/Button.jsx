import Link from "next/link";

const variants = {
  red: "bg-brick text-white shadow-[0_2px_0_var(--color-brick-2),0_8px_18px_-10px_rgb(50_30_10/0.5)]",
  green: "bg-leaf text-white shadow-[0_2px_0_var(--color-leaf-2),0_8px_18px_-10px_rgb(50_30_10/0.5)]",
  line: "bg-transparent text-leaf ring-[1.5px] ring-inset ring-leaf",
  cream: "bg-card text-leaf shadow-[0_2px_0_#cdbb95]",
};

const sizes = {
  sm: "h-11 px-5 text-[15px]",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export const buttonClass = ({ variant = "red", size = "md", className = "" } = {}) =>
  `inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-bold transition-transform duration-100 ease-out active:translate-y-px active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;

const Button = ({ href, variant, size, className, children, type = "button", ...rest }) => {
  const classes = buttonClass({ variant, size, className });
  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
