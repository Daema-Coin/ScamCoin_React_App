import { useMutation, useQuery } from "@tanstack/react-query";
import { instance, type SignInRequest } from "@/apis";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";
import { BoothMenuResponse } from "./type";

const router = "/menu";

// 내 부스 메뉴 조회
export const useBoothMenu = (boothId: number) => {
  return useQuery({
    queryKey: ["boothMenu", boothId],
    queryFn: async () => await instance.get<BoothMenuResponse>(`${router}/${boothId}`),
  });
};
