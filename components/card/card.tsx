import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("m-2 relative", className)}>
      <div className="border border-black absolute rounded w-full h-full left-2 top-1" />
      <div className="border-[0.5px] border-black p-4 rounded" {...props} />
    </div>
  )
);

export const CardSection = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("relative", className)} {...props} />
));

export const CardSectionName = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <>
    <h2
      ref={ref}
      className={cn("text-2xl font-extrabold pl-2", className)}
      {...props}
    />
    <hr className="border border-black w-full" />
  </>
));

export const CardDishTitle = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className="flex w-full justify-between">
    <div ref={ref} className="flex flex-col relative m-1" {...props} />
  </div>
));

export const CardDishName = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className="text-lg font-bold pt-2 pl-2 leading-4" {...props} />
));

export const CardDishCaption = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-xs pl-2", className)} {...props} />
));
