// Environment variable tekshirish
const apiUrl = process.env.REACT_APP_API_URL;

if (!apiUrl) {
  console.error("REACT_APP_API_URL environment variable is not set!");
  throw new Error("REACT_APP_API_URL environment variable is required");
}

export const serverApi: string = apiUrl;

// Rasm URL'ini to'g'ri formatda qaytarish
export const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) {
    return "/productsImg/gamepad-2.png"; // default rasm
  }

  // Agar allaqachon to'liq URL bo'lsa (http:// yoki https:// bilan boshlansa)
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // Agar path `/` bilan boshlansa
  if (imagePath.startsWith("/")) {
    // Agar serverApi `/api` bilan tugasa, `/api` ni olib tashlaymiz
    // Masalan: https://exclusiveshop.app/api -> https://exclusiveshop.app
    const baseUrl = serverApi.endsWith("/api") 
      ? serverApi.replace(/\/api$/, "") 
      : serverApi;
    return `${baseUrl}${imagePath}`;
  }

  // Oddiy path bo'lsa (masalan: "uploads/product.jpg")
  // Agar serverApi `/api` bilan tugasa, `/api/uploads/...` formatida qaytaramiz
  // Aks holda, oddiy qo'shamiz
  if (serverApi.endsWith("/api")) {
    return `${serverApi}/${imagePath}`;
  }
  
  return `${serverApi}/${imagePath}`;
};

export const Messages = {
  error1: "Something went wrong!",
  error2: "Please login first!",
  error3: "Please fullfil all inputs!",
  error4: "Message is empty!",
  error5: "Only images jpeg, jpg, png format allowed",
};
