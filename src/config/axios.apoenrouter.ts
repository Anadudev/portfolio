import axios from "axios";

const axiosOpenRouter = axios.create({
  baseURL: "https://openrouter.ai",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
    "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL,
    "X-Title": process.env.NEXT_PUBLIC_SITE_NAME,
    "Content-Type": "application/json",
  },
});

export { axiosOpenRouter };
