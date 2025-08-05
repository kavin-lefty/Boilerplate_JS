import CommonApi from "@/interceptors/axios";

export const LoginUser = async (data) => {
  const res = await CommonApi.post("/login", data);
  return res.data;
};

export const FetchUsers = async (data) => {
  const res = await CommonApi.post("getUsers", data);
  return res.data;
};
