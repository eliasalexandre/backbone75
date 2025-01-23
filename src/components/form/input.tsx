import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

function InputPrefix(props: ComponentProps<"div">) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<"input">;

const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ className, ...props }: InputControlProps, ref) => {
    return (
      <input
        className={twMerge(
          "flex-1 border-0 bg-transparent p-0 outline-none text-zinc-900 placeholder:text-zinc-600",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
InputControl.displayName = "InputControl";

type InputRootProps = ComponentProps<"div">;

const InputRoot = forwardRef<HTMLDivElement, InputRootProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "flex w-full items-center gap-2 mx-1 rounded-lg px-3 py-2 shadow-sm",
          "focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100",
          className
        )}
        {...rest}
      />
    );
  }
);

InputRoot.displayName = "InputRoot";

export const Input = {
  Root: InputRoot,
  Prefix: InputPrefix,
  Control: InputControl,
};
