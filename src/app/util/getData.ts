const getData = async (startIndex: number, endIndex: number) => {
  const res = await fetch(
    `http://openapi.foodsafetykorea.go.kr/api/de77957df6d04d03a521/COOKRCP01/json/${startIndex}/${endIndex}`,
  );

  // if (!res.ok) {
  //   throw new Error("Network response was not ok");
  // }

  return res.json();
};

export default getData;
