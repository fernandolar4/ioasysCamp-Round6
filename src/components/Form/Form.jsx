import * as S from "./Form.style";

const Form = (props) => {
  let RNG = Math.floor(Math.random() * 10001);
  return (
    <S.Form>
      <label className={props.className} for={props.children + RNG}>
        {props.children}
      </label>
      <input
        required
        className={props.className}
        id={props.children + RNG}
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
      />
    </S.Form>
  );
};

export default Form;
