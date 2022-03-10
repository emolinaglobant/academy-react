import axios from "axios";

export const getMenuOptions = async () => {
  try {
    const { data } = await axios.get(
      "https://api.documenu.com/v2/restaurant/4072702673999819?key=b8baef9aaa5b2e5cf169ff609ef7842b"
    );
    const response = data?.result?.menus;
    const totalResponse = response && response[0]?.menu_sections;
    return (
      totalResponse &&
      totalResponse[19]?.menu_items?.map((item, idx) => ({
        ...item,
        id: idx * Date.now(),
      }))
    );
  } catch (error) {
    throw new Error(error);
  }
};
