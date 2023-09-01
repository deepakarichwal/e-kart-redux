import { css, styled } from "styled-components";

const sizes = {
  small: css`
    padding: 6px 10px;
    border-radius: 5px;
  `,

  medium: css`
    padding: 10px 15px;
    border-radius: 7px;
  `,

  large: css`
    padding: 15px 22px;
    border-radius: 10px;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-brand-500);

    &:hover {
      background-color: var(--color-brand-600);
    }
  `,

  success: css`
    background-color: var(--color-success-500);

    &:hover {
      background-color: var(--color-success-600);
    }
  `,

  danger: css`
    background-color: var(--color-danger-500);

    &:hover {
      background-color: var(--color-danger-600);
    }
  `,
};

const Button = styled.button`
  border: none;
  color: var(--color-grey-200);
  font-weight: 600;
  /* text-transform: uppercase; */
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: ease-in 0.1s;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  size: "small",
  variation: "primary",
};

export default Button;
