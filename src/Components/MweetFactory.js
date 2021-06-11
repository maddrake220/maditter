import { dbService, storageService } from "fbInstance";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MweetFactory = ({ userObj }) => {
  const [mWeet, setMWeet] = useState("");
  const [attachment, setAttachment] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const mweetObj = {
      text: mWeet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("madweet").add(mweetObj);
    setMWeet("");
    setAttachment("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setMWeet(value);
  };

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachmentClick = (e) => {
    const AttachedFile = document.getElementById("onFileChange");
    AttachedFile.value = null;
    setAttachment(null);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={mWeet}
        onChange={onChange}
        type="text"
        placeholder="input ? "
        maxLength={120}
      />
      <input
        id="onFileChange"
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
      <input type="submit" value="mWeet" />
      {attachment && (
        <div>
          <img src={attachment} width="50px" height="50px" />
          <button onClick={onClearAttachmentClick}>Clear Photo</button>
        </div>
      )}
    </form>
  );
};

export default MweetFactory;
