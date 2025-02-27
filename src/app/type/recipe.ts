export interface recipeProps {
  id?: string;
  RCP_PARTS_DTLS: string; //"새우두부계란찜\n연두부 75g(3/4모), 칵테일새우 20g(5마리), 달걀 30g(1/2개), 생크림 13g(1큰술), 설탕 5g(1작은술), 무염버터 5g(1작은술)\n고명\n시금치 10g(3줄기)";
  RCP_WAY2: string; //"찌기";
  MANUAL_IMG20: string; //"";
  MANUAL20: string; //"";
  RCP_SEQ: string; //"28";
  INFO_NA: string; //"99";
  INFO_WGT: string; //"";
  INFO_PRO: string; //"14";
  MANUAL_IMG13: string; //"";
  MANUAL_IMG14: string; //"";
  MANUAL_IMG15: string; //"";
  MANUAL_IMG16: string; //"";
  MANUAL_IMG10: string; //"";
  MANUAL_IMG11: string; //"";
  MANUAL_IMG12: string; //"";
  MANUAL_IMG17: string; //"";
  MANUAL_IMG18: string; //"";
  MANUAL_IMG19: string; //"";
  INFO_FAT: string; //"17";
  HASH_TAG: string; //"연두부";
  MANUAL_IMG02: string; //"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png";
  MANUAL_IMG03: string; //"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_3.png";
  RCP_PAT2: string; //"반찬";
  MANUAL_IMG04: string; //"";
  MANUAL_IMG05: string; //"";
  MANUAL_IMG01: string; //"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_1.png";
  MANUAL01: string; //"1. 손질된 새우를 끓는 물에 데쳐 건진다.a";
  ATT_FILE_NO_MK: string; //"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png";
  MANUAL_IMG06: string; //"";
  MANUAL_IMG07: string; //"";
  MANUAL_IMG08: string; //"";
  MANUAL_IMG09: string; //"";
  MANUAL08: string; //"";
  MANUAL09: string; //"";
  MANUAL06: string; //"";
  MANUAL07: string; //"";
  MANUAL04: string; //"";
  MANUAL05: string; //"";
  MANUAL02: string; //string; //"2. 연두부, 달걀, 생크림, 설탕에 녹인 무염버터를 믹서에 넣고 간 뒤 새우(1)를 함께 섞어 그릇에 담는다.b";
  MANUAL03: string; //"3. 시금치를 잘게 다져 혼합물 그릇(2)에 뿌리고 찜기에 넣고 중간 불에서 10분 정도 찐다.c";
  ATT_FILE_NO_MAIN: string; //"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_2.png";
  MANUAL11: string; //"";
  MANUAL12: string; //"";
  MANUAL10: string; //"";
  INFO_CAR: string; //"3";
  MANUAL19: string; //"";
  RCP_NA_TIP: string; //"나트륨의 배출을 도와주는 것으로 알려진 칼륨이 풍부한 시금치와 소금, 간장 등의 양념 대신 새우에 들어있는 간으로 맛을 내요.";
  INFO_ENG: string; //"220";
  MANUAL17: string; //"";
  MANUAL18: string; //"";
  RCP_NM: string; //"새우 두부 계란찜";
  MANUAL15: string; //"";
  MANUAL16: string; //"";
  MANUAL13: string; //"";
  MANUAL14: string; // "";
}

export interface searchProps {
  startIndex?: number;
  endIndex?: number;
  queryKey?: string;
  itemName?: string;
  category?: string;
  data?: recipeProps[];
  isSearch: boolean;
}

export interface recipeStore {
  selectedItem: recipeProps;
  setSelectedItem: (item: recipeProps) => void;
  selectedCategory: string;
  setSelectedCategory: (itemName: string) => void;
  selectedItemName: string;
  setSelectedItemName: (itemName: string) => void;
}
