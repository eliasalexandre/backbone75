import { ComponentProps, forwardRef } from "react";
import clsx from "clsx";

type TextareaProps = ComponentProps<"textarea"> & {};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...rest }: TextareaProps, ref) => {
    return (
      <textarea
        ref={ref}
        {...rest}
        className={clsx(
          "min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100",
          className
        )}
      />
    );
  }
);

Textarea.displayName = "Textarea";
