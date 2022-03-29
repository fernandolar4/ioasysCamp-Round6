import * as S from "./Tag.style";

const Tag = (props) => (
  <S.Tag className={props.className}>
    <span>{props.children}</span>
  </S.Tag>
);
export default Tag;
