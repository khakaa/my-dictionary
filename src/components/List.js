import React from "react";
// import { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";

import { loadWordListFB } from "../redux/modules/wordList";

const List = (props) => {
  const wordList = useSelector((state) => state.wordList.list);
  const history = useHistory();
  const dispatch = useDispatch();

  // React.useEffect(async () => {
  //   const query = await getDocs(collection(db, "dictionary"));
  //   console.log(query);
  //   query.forEach((doc) => {
  //     console.log(doc.id, doc.data());
  //   });
  // }, []);

  React.useEffect(() => {
    dispatch(loadWordListFB());
  }, []);

  return (
    <>
      <TopBar>
        <p
          onClick={() => {
            history.push("/");
          }}
        >
          MY DICTIONAY
        </p>
        <PlusButton
          onClick={() => {
            history.push("/word");
          }}
        >
          +
        </PlusButton>
      </TopBar>

      <Wrap>
        {wordList.map((l, idx) => {
          return (
            <ListWrap
              key={idx}
              onClick={() => {
                console.log(idx);
                history.push("/detail/" + idx);
              }}
            >
              <div>
                <p>{l.word}</p>
              </div>

              <Line />

              <div>
                <p>{l.desc}</p>
              </div>

              <Line />

              <div>
                <p style={{ color: "#387bca" }}>{l.ex}</p>
              </div>
            </ListWrap>
          );
        })}
      </Wrap>
    </>
  );
};

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #7eaafe;
  padding: 5px 0px;
  position: fixed;
  top: 0px;
  width: 100%;
  max-width: inherit;
  z-index: 200;
  & > p {
    font-family: "Abril Fatface", cursive;
    margin: 10px 20px;
    color: #fedb6c;
    font-size: 1.5em;
    cursor: pointer;
    &:hover {
      color: #eebe27;
      position: relative;
      top: 2px;
      left: 2px;
    }
    &:active {
      text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
  }
`;

const PlusButton = styled.button`
  font-size: 30px;
  border: none;
  background-color: #fedb6c;
  color: white;
  margin: 0px 15px;
  padding: 0 7px;
  cursor: pointer;
  &:hover {
    background-color: #eebe27;
    position: relative;
    top: 2px;
    left: 2px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  &:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Wrap = styled.div`
  z-index: 1;
  position: relative;
  padding-top: 10vh;
  /* overflow: scroll; */
  /* top: 75px; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const ListWrap = styled.div`
  border: 3px solid #fedb6c;
  border-radius: 3px;
  margin: 15px;
  background: white;

  & > div > p {
    padding: 0px 10px 0px 10px;
    word-break: break-all;
    word-wrap: normal;
  }
  &:hover {
    background-color: #fae9b5;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    position: relative;
    top: 3px;
    left: 3px;
  }
`;

const Paragraph = styled.p`
  text-decoration: underline;
  font-weight: bold;
`;

const Line = styled.div`
  border-bottom: 1px solid #fedb6c;
`;
export default List;
