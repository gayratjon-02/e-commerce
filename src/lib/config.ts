// Environment variable tekshirish
const apiUrl = process.env.REACT_APP_API_URL;

if (!apiUrl) {
  console.error("REACT_APP_API_URL environment variable is not set!");
  throw new Error("REACT_APP_API_URL environment variable is required");
}

// Backend URL ni tozalash (trailing slash ni olib tashlash)
const cleanApiUrl = apiUrl.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl;
export const serverApi: string = cleanApiUrl;

// Rasm URL'ini to'g'ri formatda qaytarish
export const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) {
    return "/productsImg/gamepad-2.png"; // default rasm
  }

  // Agar allaqachon to'liq URL bo'lsa (http:// yoki https:// bilan boshlansa)
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // Agar path `/` bilan boshlansa (masalan: /uploads/product.jpg)
  if (imagePath.startsWith("/")) {
    return `${serverApi}${imagePath}`;
  }

  // Oddiy path bo'lsa (masalan: "uploads/product.jpg")
  return `${serverApi}/${imagePath}`;
};

export const Messages = {
  error1: "Something went wrong!",
  error2: "Please login first!",
  error3: "Please fullfil all inputs!",
  error4: "Message is empty!",
  error5: "Only images jpeg, jpg, png format allowed",
};
