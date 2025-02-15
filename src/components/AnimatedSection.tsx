import { FC, ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

const AnimatedSection: FC<AnimatedSectionProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? "animate-fade-in" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
