import React from "react";

function User({userData}) {
  return (
    <div>
      {userData.length > 0 ? userData.map((e) => {
        return <h1>{e}</h1>;
      }) : null}
    </div>
  );
}

export default User;
