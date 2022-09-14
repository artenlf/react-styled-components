import React from "react";
import styled from "styled-components";
import Item from "../../Item";
import ImageFilter from "../ImageFilter";

const Itens = styled.div`
  align-items: center;
  border-radius: 10px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  font-size: 12px;
  justify-content: space-around;
  margin: 2px 0;
  padding: 10px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Itens>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Itens>
  );
};
