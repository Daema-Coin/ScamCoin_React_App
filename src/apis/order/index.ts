import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "@/apis";
import toast from "react-hot-toast";
import { OrderRequest } from "./type";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AxiosError } from "axios";

const router = "/order";

// 주문
export const useOrder = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: OrderRequest) => instance.post(`${import.meta.env.VITE_BASE_URL}${router}`, data),
    onSuccess: () => {
      toast.success("주문에 성공했어요.");
      localStorage.removeItem("select");
      navigate(`/?id=${+searchParams.get("id")!}`);
      queryClient.invalidateQueries({ queryKey: ["myCoin"] });
    },
    //
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) => {
      if (err.response?.data.detail === "Not enough coins") {
        toast.error("잔액이 부족합니다.");
      } else {
        toast.error("주문에 실패했어요.");
      }
    },
  });
};
