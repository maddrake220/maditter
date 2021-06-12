import { dbService } from "fbInstance";
import React, { useState, useEffect } from "react";
import Mweet from "../Mweet";
import MweetFactory from "Components/MweetFactory";
const Home = ({ userObj }) => {
  const [mWeets, setMWeets] = useState([]);
  /*
  const getMadWeets = async () => {
    const dbmadweets = await dbService.collection("madweet").get();
    dbmadweets.forEach((document) => {
      const mweetObject = {
        ...document.data(),
        id: document.id,
      };
      setMWeets((prev) => [mweetObject, ...prev]);
    });
  };

  // collection.get 방식
  */
  useEffect(() => {
    // getMadWeets();
    dbService
      .collection("madweet")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const mweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMWeets(mweetArray);
      }); // collection.snapshot방식 :  CRUD 발생시 마다 snapshot => Realtime 구현 시
  }, []);
  return (
    <div className="container">
      <MweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {mWeets &&
          mWeets.map((mWeet) => (
            <Mweet
              key={mWeet.id}
              mWeetObj={mWeet}
              isOwner={mWeet.creatorId === userObj.uid}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
