const getData = async (
  startIndex: number,
  endIndex: number,
  itemName = "",
  category = "",
) => {
  const baseURL =
    "https://openapi.foodsafetykorea.go.kr/api/de77957df6d04d03a521/COOKRCP01/json/";

  let query = "";
  if (itemName !== "" && category !== "") {
    query = `RCP_NM=${encodeURIComponent(itemName)}&RCP_PAT2=${encodeURIComponent(category)}`;
  } else if (itemName !== "") {
    query = `RCP_NM=${encodeURIComponent(itemName)}`;
  } else if (category !== "") {
    query = `RCP_PAT2=${encodeURIComponent(category)}`;
  }

  const res = await fetch(`${baseURL}${startIndex}/${endIndex}/${query}`);
  return res.json();
};

export default getData;
