import * as S from "./RadioButton.style";

const RadioButton = (props) => (
  <S.RadioButton>
    <input
      className={props.className}
      name={props.name}
      id={props.children}
      type="radio"
    />
    <label className={props.className} for={props.children}>
      {props.children}
    </label>
  </S.RadioButton>
);

export default RadioButton;
