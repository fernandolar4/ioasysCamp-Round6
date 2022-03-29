import * as S from "./CheckBox.style";

const CheckBox = (props) => (
  <S.CheckBox>
    <input className={props.className} id={props.children} type="checkbox" />
    <label className={props.className} for={props.children}>
      {props.children}
    </label>
  </S.CheckBox>
);

export default CheckBox;
