import { useInView } from "react-intersection-observer";

export default function FadeInSection({ children, className = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,   
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
