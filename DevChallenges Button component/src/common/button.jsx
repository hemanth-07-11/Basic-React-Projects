import React from "react";
import styled from "styled-components";

const getSize = props => {
  switch (props.size) {
    case "sm":
      return { height: "32px", padding: "6px 12px" };
    case "md":
      return { height: "36px", padding: "8px 16px" };
    case "lg":
      return { height: "42px", padding: "11px 22px" };
    default:
      return { height: "36px", padding: "8px 16px" };
  }
};
const getColor = props => {
  if (props.disabled) {
    if (props.variant === "text") {
      return {
        backgroundColor: "#ffffff",
        backgroundColorHover: "#ffffff",
        color: "#9e9e9e",
        colorHover: "#9e9e9e",
      };
    }
    return {
      backgroundColor: "#e0e0e0",
      backgroundColorHover: "#e0e0e0",
      color: "#9e9e9e",
      colorHover: "#9e9e9e",
    };
  }
  if (props.variant) {
    return {
      backgroundColor: "#ffffff",
      backgroundColorHover: "rgba(41, 98, 255, 0.1)",
      color: "#3D5AFE",
      colorHover: "#3D5AFE",
    };
  } else {
    switch (props.color) {
      case "primary":
        return {
          backgroundColor: "#2962FF",
          backgroundColorHover: "#0039CB",
          color: "#FFFFFF",
          colorHover: "#FFFFFF",
        };
      case "secondary":
        return {
          backgroundColor: "#455a64",
          backgroundColorHover: "#1c313a",
          color: "#FFFFFF",
          colorHover: "#FFFFFF",
        };
      case "danger":
        return {
          backgroundColor: "#D32F2F",
          backgroundColorHover: "#9A0007",
          color: "#FFFFFF",
          colorHover: "#FFFFFF",
        };

      default:
        return {
          backgroundColor: "#E0E0E0",
          backgroundColorHover: "#AEAEAE",
          color: "#3F3F3F",
          colorHover: "#3F3F3F",
        };
    }
  }
};

const StyledButton = styled.button`
  display: inline-block;
  height: ${props => getSize(props).height};
  padding: ${props => getSize(props).padding};
  line-height: 20px;
  font-family: Noto Sans JP;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  background-color: ${props => getColor(props).backgroundColor};
  color: ${props => getColor(props).color};
  &:hover {
    background-color: ${props => getColor(props).backgroundColorHover};
    color: ${props => getColor(props).colorHover};
  }
  &:focus {
    outline: 0;
  }
  border: ${props => (props.variant === "outline" ? "solid 1px #3d5afe" : "0")};
  border-radius: 6px;
  box-shadow: ${props =>
    props.disableShadow || props.variant
      ? "none"
      : "0px 2px 3px rgba(51, 51, 51, 0.2)"};
`;
const ButtonIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = props => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <StyledButton
      onClick={handleClick}
      size={props.size}
      variant={props.variant}
      color={props.color}
      disabled={props.disabled}
      disableShadow={props.disableShadow}
    >
      <ButtonIconWrapper>
        {props.startIcon && (
          <span className="material-icons-round">{props.startIcon}</span>
        )}
        <span>{props.displayText}</span>
        {props.endIcon && (
          <span className="material-icons-round">{props.endIcon}</span>
        )}
      </ButtonIconWrapper>
    </StyledButton>
  );
};

Button.defaultProps = {
  onClick: "",
  size: "md",
  variant: "",
  color: "",
  disabled: "",
  disableShadow: "",
  displayText: "Default",
};
export default Button;
