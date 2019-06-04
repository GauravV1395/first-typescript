import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 095462f10f5a5b017efe208fde1ba311b17dafb83afaa91343fa6dcd7118d5bb"
  }
});
