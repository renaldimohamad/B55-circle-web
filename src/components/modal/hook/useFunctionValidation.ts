// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { IProfile } from "../../../types/store";

// export const useFunctionValidation = () => {
//   const schema = yup.object().shape({
//     fullName: yup.string().min(3, "Fullname must be at least 3 characters"),
//     username: yup.string().min(3, "Username must be at least 3 characters"),
//     bio: yup.string(),
//   });

//   return useForm<IProfile>({
//     resolver: yupResolver(schema),
//     reValidateMode: "onSubmit",
//     mode: "all",
//   });
// };
