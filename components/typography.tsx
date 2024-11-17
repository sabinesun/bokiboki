import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const typographyVariants = cva("whitespace-nowrap", {
  variants: {
    variant: {
      default: "text-base",
      restaurantName: "text-5xl font-extrabold",
      categoryTitle: "text-2xl font-extrabold",
      dishName: "text-lg font-bold",
      caption: "text-xs",
      decoration: "text-5xl text-[#EBE5F3]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type TypographyProps = VariantProps<typeof typographyVariants> & {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

const tagMapping: Record<string, keyof JSX.IntrinsicElements> = {
  restaurantName: "h1",
  categoryTitle: "h2",
  dishName: "h3",
  caption: "span",
  decoration: "div",
};

export const Typography = ({
  children,
  variant,
  as,
  className,
}: TypographyProps) => {
  const Tag = as || tagMapping[variant ?? "default"] || "span";

  return (
    <Tag className={cn(typographyVariants({ variant }), className)}>
      {children}
    </Tag>
  );
};
