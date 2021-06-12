import { dbService, storageService } from "fbInstance";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Mweet = ({ mWeetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newMweet, setnewMweet] = useState(mWeetObj.text);
  const onDeleteClick = async (e) => {
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
    <div className="nweet">
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit} className="container nweetEdit">
                <input
                  type="text"
                  placeholder="Edit your mweet"
                  value={newMweet}
                  onChange={onChange}
                  required
                  autoFocus
                  className="formInput"
                />
                <input type="submit" value="Update Mweet" className="formBtn" />
              </form>
              <span onClick={toggleEditing} className="formBtn cancelBtn">
                Cancel
              </span>
            </>
          )}
        </>
      ) : (
        <>
          <h4>{mWeetObj.text}</h4>
          {mWeetObj.attachmentUrl && <img src={mWeetObj.attachmentUrl} />}
          {isOwner && (
            <div className="nweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Mweet;
