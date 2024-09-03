// import * as React from "react";
// import {
//   Avatar,
//   Stack,
//   Button,
//   Typography,
//   Box,
//   FormHelperText,
// } from "@mui/material";
// import Modal from "@mui/material/Modal";
// import useStore from "../../stores/hook";
// import CustomInput from "../common/Input";
// import { useFunctionValidation } from "./hook/useFunctionValidation";
// import { usePostFunction } from "./hook/usePostFunction";
// import { IProfile } from "../../types/store";
// import { Controller } from "react-hook-form";
// import { IProfileForm } from "../../types/editProfile";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 600,
//   bgcolor: "#1D1D1D",
//   borderRadius: "18px",
//   boxShadow: 24,
//   p: 2,
// };

// export default function ModalEditProfile() {
//   const { user } = useStore();
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const { control, handleSubmit, reset } = useFunctionValidation();
//   const editPost = usePostFunction();

//   const onSubmit = async (data: IProfileForm) => {
//     try {
//       await editPost.update(user?.id, data);
//       reset();
//       handleClose();
//     } catch (error) {
//       console.error("Edit Profile error:", error);
//     }
//   };

//   const onError = (errors: any) => {
//     console.log(errors);
//   };

//   return (
//     <div>
//       <Button
//         variant="outlined"
//         sx={{
//           borderRadius: 9999,
//           border: "1px solid #FFFFFF",
//           color: "#FFFFFF",
//           py: "4px",
//           px: 2,
//           textTransform: "none",
//         }}
//         onClick={handleOpen}
//       >
//         Edit Profile
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Box
//             sx={{
//               marginBottom: 2,
//             }}
//           >
//             <Typography sx={{ fontSize: 20 }}>Edit Profile</Typography>
//           </Box>
//           <Avatar
//             sx={{
//               width: 80,
//               height: 80,
//               position: "absolute",
//               top: 115,
//               left: 50,
//             }}
//             alt="Semy Sharp"
//             src="/assetss/images/photo-profile.png"
//           />
//           <Box
//             sx={{
//               height: 100,
//               backgroundColor: "yellow",
//               borderRadius: "8px",
//             }}
//           >
//             <img
//               src="/assetss/images/profile-cover.png"
//               alt=""
//               width={"100%"}
//               height={"100%"}
//             />
//           </Box>

//           <Box sx={{ mt: 6 }}>
//             <form onSubmit={handleSubmit(onSubmit, onError)}>
//               <Stack gap={2}>
//                 <Controller
//                   control={control}
//                   name="fullName"
//                   render={({ field, fieldState }) => (
//                     <>
//                       <CustomInput placeholder={user.fullName} {...field} />
//                       <FormHelperText error>
//                         {fieldState.error?.message}
//                       </FormHelperText>
//                     </>
//                   )}
//                 />

//                 <Controller
//                   control={control}
//                   name="username"
//                   render={({ field, fieldState }) => (
//                     <>
//                       <CustomInput placeholder={user.username} {...field} />
//                       <FormHelperText error>
//                         {fieldState.error?.message}
//                       </FormHelperText>
//                     </>
//                   )}
//                 />

//                 <Controller
//                   control={control}
//                   name="bio"
//                   render={({ field, fieldState }) => (
//                     <>
//                       <CustomInput placeholder={user.bio} {...field} />
//                       <FormHelperText error>
//                         {fieldState.error?.message}
//                       </FormHelperText>
//                     </>
//                   )}
//                 />
//               </Stack>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "end",
//                   mt: 2,
//                 }}
//               >
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="success"
//                   sx={{ borderRadius: 23, textTransform: "none", px: 3 }}
//                 >
//                   Save
//                 </Button>
//               </Box>
//             </form>
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
