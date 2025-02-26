import { ReactNode } from "react";

interface FeatureProps {
  large?: boolean;
  centered?: boolean;
  className?: string;
  children: ReactNode;
}

export function Feature({
  large,
  centered,
  className = "",
  children,
}: FeatureProps) {
  return (
    <div
      className={`
        nx-relative nx-p-6 nx-rounded-lg
        ${large ? "nx-col-span-2 nx-row-span-2" : ""}
        ${
          centered
            ? "nx-flex nx-flex-col nx-items-center nx-justify-center nx-text-center"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function Features({ children }: { children: ReactNode }) {
  return (
    <div className="nx-grid nx-grid-cols-1 md:nx-grid-cols-3 nx-gap-4 nx-my-8">
      {children}
    </div>
  );
}
