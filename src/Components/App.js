import React, { useState, useEffect } from "react";
import Router from "./Router";
import { authService } from "../fbInstance";

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    //setUserObj(user); 형식으로 하면 re-rendering이 안되는 이유 ?
    /* 
          React는 객체를 얕게 비교하여 상태를 업데이트할지 여부를 결정합니다.

          1. React는 현재 상태와 새 상태를 비교합니다. 즉, 이 프로젝트의 객체입니다.
          2. 객체를 비교할 때 객체의 속성을 속성별로 비교하지 않음
          3. React는 속성이 아닌 참조를 비교하는 객체에 대해 얕은 비교를 수행합니다.

          즉, 객체와 업데이트할 새 객체가 동일한 참조를 가리키면 React는 상태를 업데이트하지 않습니다.
          따라서 이전의 객체와 다른 객체를 가리키는 완전히 새로운 객체가 필요할 것입니다.
          
          해결 방법 
          1. user객체의 사본을 만들어 해결 방법
          const user = authService.currentUser;
          setUserObj(Object.assign({}, user));
          // Object.assign은 첫번째 요소로 들어온 객체에 다음인자로 들어온 객체를 복사해준다.
          
          2. spread연산자를 활용한 해결 방법
          setUserObj({...authService.currentUser});

          3. 속성별로 obj에 저장하는 방법
            setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
          
          4. JSON.parse & JSON.stringify
          5. Lodash & Ramda
        */
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
      // 원하는 function을 얻기위한 중간 function
    });
  };
  return (
    <>
      {init ? (
        <Router
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "initializing..."
      )}
      <footer>&copy; {new Date().getFullYear()} Maditter</footer>
    </>
  );
};

export default App;
