const getColor = (value: string) => {
  // let textColor = "";
  let bgColor = "";
  if (value == "밥") {
    // textColor = "riceText";
    bgColor = "rice";
  } else if (value == "국&찌개") {
    // textColor = "soupText";
    bgColor = "soup";
  } else if (value == "반찬") {
    // textColor = "sideDishText";
    bgColor = "sideDish";
  } else if (value == "후식") {
    // textColor = "dessertText";
    bgColor = "dessert";
  } else if (value == "일품") {
    // textColor = "bestText";
    bgColor = "best";
  }

  return bgColor;
};

export default getColor;
