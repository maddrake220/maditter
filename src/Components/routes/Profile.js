import { authService } from "fbInstance";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  /*
  const getMyMweets = async () => {
    const mweets = await dbService
      .collection("madweet")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();

    console.log(mweets.docs.map((doc) => doc.data()));
  };
 */
  const onSubmit = async (e) => {
    e.preventDefault();
    if (newDisplayName !== userObj.displayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    setNewDisplayName(value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          placeholder="Display Name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile Name" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
