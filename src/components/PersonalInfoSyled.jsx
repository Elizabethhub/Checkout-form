import styled from "styled-components";

const PersonalInfoContainer = styled.div`
  display: flex;
  align-items: center;
  .item {
    margin-right: 1rem;
    width: calc(50% - 0.5rem);
  }

  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  span.required {
    margin-right: 5px;
    color: red;
  }
`;

export default PersonalInfoContainer;
