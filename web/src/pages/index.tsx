import { useEffect, useState } from "react";
import { configureMusicKit, authorizeUser } from "../lib/musickit";

export default function Home() {
  const [music, setMusic] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    configureMusicKit().then((musicInstance) => {
      setMusic(musicInstance);
    });
  }, []);

  const handleAuthorization = async () => {
    if (music) {
      const token = await authorizeUser(music);
      if (token) {
        setUserToken(token);
        console.log("User authorized with token:", token);
      } else {
        console.log("User authorization failed");
      }
    }
  };

  return (
    <main>
      <p>{userToken ? `${userToken}` : "unautharized"}</p>
      <button onClick={handleAuthorization}>Authorize with Apple Music</button>
    </main>
  );
}
