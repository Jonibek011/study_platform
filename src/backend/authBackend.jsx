// fetchHooks/authBackend.js
import toast from "react-hot-toast";
export const authBackend = async (data, endpoint) => {
  try {
    const req = await fetch(`/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!req.ok) throw new Error(req.statusText);

    return await req.json();
  } catch (err) {
    console.error("Auth error:", err);
    toast.error(err.message);
    throw err;
  }
};
