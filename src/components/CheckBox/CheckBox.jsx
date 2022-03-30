import * as S from "./CheckBox.style";

const CheckBox = (props) => {
  let RNG = Math.floor(Math.random() * 10001);

  return (
    <S.CheckBox>
      <input
        className={props.className}
        id={props.children + RNG}
        type="checkbox"
      />
      <label className={props.className} for={props.children + RNG}>
        {props.children}
      </label>
    </S.CheckBox>
  );
};

export default CheckBox;
