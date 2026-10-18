import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import buttonStyles from "@/components/Button/Button.module.css";

type CtaVariant = "primary" | "secondary" | "ghost";

interface CtaLinkProps extends LinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  variant?: CtaVariant;
  children: ReactNode;
}

export default function CtaLink({ variant = "primary", className, children, ...rest }: CtaLinkProps) {
  const variantClass = variant === "secondary" ? buttonStyles.secondary : variant === "ghost" ? buttonStyles.ghost : buttonStyles.primary;
  return (
    <Link className={[buttonStyles.button, variantClass, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </Link>
  );
}
