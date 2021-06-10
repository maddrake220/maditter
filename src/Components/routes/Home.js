import { dbService } from "fbInstance";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [mWeet, setMWeet] = useState("");
  const [mWeets, setMWeets] = useState([]);
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
  useEffect(() => {
    getMadWeets();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("madweet").add({
      mWeet,
      createdAt: Date.now(),
    });
    setMWeet("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setMWeet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={mWeet}
          onChange={onChange}
          type="text"
          placeholder="input ? "
          maxLength={120}
        />
        <input type="submit" value="mWeet" />
      </form>
      <div>
        {mWeets &&
          mWeets.map((mWeet) => (
            <div key={mWeet.id}>
              <h4>{mWeet.mWeet}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
