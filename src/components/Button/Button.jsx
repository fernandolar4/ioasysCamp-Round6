import * as S from "./Button.style";

const Button = (props) => (
  <S.Button className={props.className}>{props.children}</S.Button>
);
export default Button;
