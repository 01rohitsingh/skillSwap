import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({...form,name:e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form,email:e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setForm({...form,password:e.target.value})} />
      <button>Register</button>
    </form>
  );
}
