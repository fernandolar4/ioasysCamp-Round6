import * as S from "./RadioButton.style";

const RadioButton = (props) => {
  let RNG = Math.floor(Math.random() * 10001);
  return (
    <S.RadioButton>
      <input
        className={props.className}
        id={props.children + RNG}
        name={props.name}
        type="radio"
        // checked={props.checked}
      />
      <label className={props.className} for={props.children + RNG}>
        {props.children}
      </label>
    </S.RadioButton>
  );
};

export default RadioButton;
