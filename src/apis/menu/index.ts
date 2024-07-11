import { useQuery } from "@tanstack/react-query";
import { instance } from "@/apis";
import { BoothMenuResponse } from "./type";

const router = "/menu";

// 내 부스 메뉴 조회
export const useBoothMenu = (boothId: number) => {
  return useQuery({
    queryKey: ["boothMenu", boothId],
    queryFn: async () => await instance.get<BoothMenuResponse>(`${router}/${boothId}`),
  });
};
