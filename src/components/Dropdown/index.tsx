import { ReactNode, useRef, useState, useEffect, useCallback } from "react";

import React from "react";

import * as DropdownStyles from "./styles.ts";

// import { outsideClick } from "@/hooks/outsideClick";
import Typography from "../Typography";

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  trigger: ReactNode;
  active?: boolean;
  onToggle?: (active: boolean) => void;
  horizontalAlign?: "left" | "right";
  align?: "top" | "bottom";
}

export interface DropdownItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const Dropdown = ({
  children,
  trigger,
  active,
  onToggle,
  horizontalAlign = "left",
  ...props
}: DropdownProps) => {
  const [isActive, setIsActive] = useState(active || false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // const handleOutsideClick = useCallback(() => {
  //   setIsActive(false);
  //   onToggle?.(false);
  // }, [isActive, onToggle]);

  const toggleDropdown = useCallback(() => {
    if (active !== undefined) return;
    const newActive = !isActive;
    setIsActive(newActive);
    onToggle?.(newActive);
  }, [active, isActive, onToggle]);

  // outsideClick(wrapperRef, handleOutsideClick);

  useEffect(() => {
    if (!isActive || !wrapperRef.current || !triggerRef.current) return;

    const { bottom, top, height } = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownHeight = wrapperRef.current.offsetHeight;
    const spaceBelow = viewportHeight - bottom;
    const spaceAbove = top;

    if (dropdownHeight > spaceBelow && spaceAbove > dropdownHeight) {
      wrapperRef.current.style.top = "";
      wrapperRef.current.style.bottom = `${12 + height}px`;
    } else {
      wrapperRef.current.style.top = `${12 + height}px`;
      wrapperRef.current.style.bottom = "auto";
    }
  }, [isActive]);

  useEffect(() => {
    if (active === undefined) return;
    setIsActive(!!active);
  }, [active]);

  return (
    <DropdownStyles.Container>
      <div
        ref={triggerRef}
        onClick={toggleDropdown}
        style={{ display: "inline-block" }}
      >
        {trigger}
      </div>
      <DropdownStyles.Content
        {...props}
        ref={wrapperRef}
        $horizontalPosition={horizontalAlign}
        aria-hidden={!isActive}
      >
        {children}
      </DropdownStyles.Content>
    </DropdownStyles.Container>
  );
};

const DropdownItem = ({
  children,
  icon,
  title,
  ...props
}: DropdownItemProps) => {
  if (children) {
    return <DropdownStyles.Item {...props}>{children}</DropdownStyles.Item>;
  }

  return (
    <DropdownStyles.Item {...props}>
      {icon && <i>{icon}</i>}
      <Typography as="span" color="lighter">
        {title}
      </Typography>
    </DropdownStyles.Item>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
