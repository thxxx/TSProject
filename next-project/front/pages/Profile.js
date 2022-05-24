import React, { useState, useCallback } from "react";
import Head from "next/head";

const LightM = ({ room, on, toggle }) => {
  console.log({ room, on });

  return (
    <button onClick={toggle}>
      {room} {on ? "💡" : "⬛"}
    </button>
  );
};

const Light = React.memo(LightM);

const Profile = () => {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn), [
    kitchenOn,
  ]);
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

  return (
    <div>
      <Head>
        <title>프로필</title>
      </Head>
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
      <div>내 프로필</div>
    </div>
  );
};

export default Profile;
