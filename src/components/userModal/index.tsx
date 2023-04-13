import { Dispatch, SetStateAction, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { User } from "../../types/user";
import { Avatar, Grid, TextField } from "@mui/material";
import { formatDate, genderTranslate } from "../../utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  maxHeight: "90%",
};

const justifyContentStyle = {
  xs: "space-around",
  sm: "space-around",
  md: "space-around",
  lg: "space-between",
  xl: "space-between",
};

const spacingStyle = {
  xs: 1,
  sm: 1,
  md: 1,
  lg: 1,
  xl: 1,
};

interface TransitionsModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  user?: User;
}

const TransitionsModal = ({
  openModal,
  setOpenModal,
  user,
}: TransitionsModalProps) => {
  const handleClose = () => setOpenModal(false);
  console.log(user);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style} display="flex" justifyContent={"center"}>
            <Grid container justifyContent="center">
              <Grid container justifyContent="center" marginBottom={"30px"}>
                <Grid item>
                  <Avatar
                    alt={user?.name.first}
                    sx={{ width: 70, height: 70 }}
                    src={user?.picture.large}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" marginBottom={"30px"}>
                <Grid
                  spacing={spacingStyle}
                  justifyContent={justifyContentStyle}
                  container
                >
                  <Grid gap={10} item>
                    <TextField
                      label="Nome"
                      defaultValue={`${user?.name.title} ${user?.name.first} ${user?.name.last}`}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid gap={10} item>
                    <TextField
                      label="Gênero"
                      defaultValue={genderTranslate(user?.gender ?? "")}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="filled-read-only-input"
                      label="Idade"
                      defaultValue={`${user?.dob.age} anos`}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="filled-read-only-input"
                      label="Aniversário"
                      defaultValue={formatDate(user?.dob.date ?? "")}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container marginTop={"30px"}>
                  <Grid
                    spacing={spacingStyle}
                    justifyContent={justifyContentStyle}
                    container
                  >
                    <Grid gap={10} item>
                      <TextField
                        label="Estado"
                        defaultValue={user?.location.state}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="filled-read-only-input"
                        label="Cidade"
                        defaultValue={user?.location.city}
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="filled-read-only-input"
                        label="Endereço"
                        defaultValue={user?.location.street.name}
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="filled-read-only-input"
                        label="Número"
                        defaultValue={user?.location.street.number}
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container marginTop={"30px"}>
                  <Grid
                    spacing={spacingStyle}
                    container
                    justifyContent={justifyContentStyle}
                  >
                    <Grid gap={10} item>
                      <TextField
                        label="Telefone"
                        defaultValue={user?.phone}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid gap={10} item>
                      <TextField
                        label="Celular"
                        defaultValue={user?.cell}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="filled-read-only-input"
                        label="Email"
                        defaultValue={user?.email}
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="filled-read-only-input"
                        label="Usuário"
                        defaultValue={user?.login.username}
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
