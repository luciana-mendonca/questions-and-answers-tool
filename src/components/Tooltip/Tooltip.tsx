import React, {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import TooltipContainer from "./components/TooltipContainer";
import TooltipWrapper from "./components/TooltipWrapper";

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    left: string;
    top: string;
  }>({
    left: "",
    top: "",
  });

  useEffect(() => {
    const { current: wrapper } = wrapperRef;
    const { current: tooltip } = tooltipRef;

    if (!wrapper) return;
    if (!tooltip) return;

    const tooltipHeight = tooltip.offsetHeight;

    setPosition({
      left: `${wrapper.offsetLeft}px`,
      top: `${wrapper.offsetTop - wrapper.offsetHeight + tooltipHeight}px`,
    });
  }, [active]);

  let timeout: NodeJS.Timeout | undefined;

  const showTooltip = (): void => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 400);
  };

  const hideToolTip = (): void => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <TooltipWrapper
      ref={wrapperRef}
      onMouseEnter={showTooltip}
      onMouseLeave={hideToolTip}
    >
      {children}
      {active && (
        <TooltipContainer
          ref={tooltipRef}
          role='tooltip'
          left={position.left}
          top={position.top}
        >
          {content}
        </TooltipContainer>
      )}
    </TooltipWrapper>
  );
};

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: ReactNode;
}

export default Tooltip;
