// Environment variable tekshirish
const apiUrl = process.env.REACT_APP_API_URL;

if (!apiUrl) {
  console.error("REACT_APP_API_URL environment variable is not set!");
  throw new Error("REACT_APP_API_URL environment variable is required");
}

export const serverApi: string = apiUrl;

export const Messages = {
  error1: "Something went wrong!",
  error2: "Please login first!",
  error3: "Please fullfil all inputs!",
  error4: "Message is empty!",
  error5: "Only images jpeg, jpg, png format allowed",
};
