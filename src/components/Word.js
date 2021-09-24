import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { addWord } from "../redux/modules/wordList";

const Word = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const wordRef = React.useRef(null);
  const descRef = React.useRef(null);
  const exRef = React.useRef(null);

  return (
    <div style={{ height: "100vh" }}>
      <TopBar>
        <p
          onClick={() => {
            history.push("/");
          }}
        >
          MY DICTIONAY
        </p>
        <CompletedButton
          onClick={() => {
            dispatch(
              addWord({
                word: wordRef.current.value,
                desc: descRef.current.value,
                ex: exRef.current.value,
              })
            );
            history.push("/list");
          }}
        >
          save
        </CompletedButton>
      </TopBar>

      <WordWrap>
        <Title style={{ textAlign: "center" }}>Add Word</Title>

        <InputBox>
          <Text placeholder="word" ref={wordRef}></Text>

          <Text
            style={{ height: "150px" }}
            placeholder="description"
            ref={descRef}
          ></Text>

          <Text
            style={{ height: "150px" }}
            placeholder="example"
            ref={exRef}
          ></Text>
        </InputBox>
      </WordWrap>
    </div>
  );
};

const TopBar = styled.div`
  display: flex;
  align-items: center;
  background: #7eaafe;
  padding: 5px 0px;
  position: fixed;
  top: 0px;
  width: 650px;
  max-width: inherit;
  z-index: 200;
  & > p {
    font-family: "Abril Fatface", cursive;
    margin: 10px 20px;
    color: #fedb6c;
    font-size: 1.5em;
  }
`;

const CompletedButton = styled.button`
  font-family: "Abril Fatface", cursive;
  font-size: 20px;
  border: none;
  position: relative;
  left: 370px;
  background-color: #fedb6c;
  color: white;
`;

const WordWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 100px;
  /* border: 2px solid #7eaafe; */
  margin: 15px;
  padding-bottom: 16px;
  position: relative;

  & > div > input {
    width: 80vw;
    height: 6vh;
  }
`;

const Title = styled.h2`
  font-family: "Abril Fatface", cursive;
  color: #626262;
`;
const InputBox = styled.div`
  border: 3px solid #fedb6c;
  padding: 16px 16px 0px 16px;
  background: #fedb6c;
  border-radius: 5px;
`;

const Text = styled.textarea`
  width: -webkit-fill-available;
  height: 50px;
  margin-bottom: 15px;
  &::placeholder {
    font-family: "Abril Fatface", cursive;
    font-size: 1.3em;
  }
`;

export default Word;
