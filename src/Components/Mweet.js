import { dbService, storageService } from "fbInstance";
import React, { useState } from "react";

const Mweet = ({ mWeetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newMweet, setnewMweet] = useState(mWeetObj.text);
  const onDelete = async (e) => {
    const confirm = window.confirm("Are you sure to delete this mweek ?");
    if (confirm) {
      await dbService.doc(`madweet/${mWeetObj.id}`).delete();
      if (mWeetObj.attachmentUrl !== "")
        await storageService.refFromURL(mWeetObj.attachmentUrl).delete(); // Storage Bucket에서 해당 file 지우기
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.doc(`madweet/${mWeetObj.id}`).update({
      text: newMweet,
    });
    setEditing(false);
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setnewMweet(value);
    console.log(newMweet);
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  return (
    <div>
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Edit your mweet"
                  value={newMweet}
                  onChange={onChange}
                  required
                />
                <input type="submit" value="update mweet" />
              </form>
              <button onClick={toggleEditing}>Cancel</button>{" "}
            </>
          )}
        </>
      ) : (
        <>
          <h4>{mWeetObj.text}</h4>
          {mWeetObj.attachmentUrl && (
            <img src={mWeetObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <>
              <button onClick={onDelete}>Delete MWeet</button>
              <button onClick={toggleEditing}>Edit MWeet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Mweet;
