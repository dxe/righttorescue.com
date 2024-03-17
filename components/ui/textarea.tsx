import * as React from "react";
import { cn } from "../../utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "tw-flex tw-min-h-[80px] tw-w-full tw-rounded-md tw-border tw-border-slate-200 tw-bg-white tw-px-3 tw-py-2 tw-text-base md:tw-text-sm tw-ring-offset-blue-400 placeholder:tw-text-slate-500 focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-slate-950 focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
