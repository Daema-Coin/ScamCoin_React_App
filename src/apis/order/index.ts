import { useMutation } from "@tanstack/react-query";
import { instance } from "@/apis";
import toast from "react-hot-toast";
import { OrderRequest } from "./type";

const router = "/order";

// 주문
export const useOrder = (data: OrderRequest) => {
  //   const navigate = useNavigate();

  return useMutation({
    mutationFn: () => instance.post(`${import.meta.env.VITE_BASE_URL}${router}`, data),
    onSuccess: () => {
      toast.success("로그인에 성공하였어요.");
      //   navigate("/");
    },
    onError: () => {
      toast.error("로그인에 실패했어요.");
    },
  });
};
