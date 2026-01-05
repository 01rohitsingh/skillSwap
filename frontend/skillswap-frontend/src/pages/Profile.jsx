import { useEffect, useState } from "react";
import API from "../api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/profile").then(res => setUser(res.data));
  }, []);

  const uploadPhoto = async (e) => {
    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    const res = await API.post("/profile/upload", formData);
    setUser(res.data);
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {user.profilePhoto && <img src={user.profilePhoto} width="150" />}
      <input type="file" onChange={uploadPhoto} />
    </div>
  );
}
