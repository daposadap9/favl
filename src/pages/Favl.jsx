import { useEffect, useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { motion } from "framer-motion";
import TransitionEffect from "../components/transition/TransitionEffect";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faEdit,
  faEye,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Map from "../components/mapas/Map";
import ModalForm from "../components/modals/ModalForm";

//Data Tables
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="Primera Pagina"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="Pagina anterior"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Siguiente pagina"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const Favl = () => {
  const [clubs, setclubs] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const handleActivateModal = () => {
    setModalActive(!modalActive);
  };

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  const actualizarClubes = () => {
    const BASE_URL = "http://15.228.21.51:5000/club";
    const URL = BASE_URL;
    axios
      .get(URL)
      .then((res) => {
        setclubs(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    actualizarClubes();
  }, []);

  function deleteClub(clubId) {
    const BASE_URL = "http://15.228.21.51:5000/club/";
    const URL = BASE_URL;
    if (confirm("¿Eliminar Club?"))
      axios
        .delete(URL + clubId)
        .then(() => {
          alert(`El club ${clubId} ha sido eliminado`);
          actualizarClubes();
        })
        .catch((err) => console.log(err));
  }

  function createData(name, calories, fat, fay, name2) {
    return { name, calories, fat, fay, name2 };
  }

  const rows = clubs.map((club) => ({
    name: club.nombre,
    calories: club.nombre_largo,
    fat: club.nombre_largo,
    fay: club.logo ? (
      club.logo
    ) : (
      <div className="flex justify-center">
        <img src="group.png" className="rounded-lg w-[60px]" />
      </div>
    ),
    name2: (
      <div className="flex w-[200px] justify-around items-center mx-auto list-none font-bold p-2 bg-slate-300 rounded-md shadow-lg text-xl">
        <li className="cursor-pointer" onClick={handleActivateModal}>
          <FontAwesomeIcon
            icon={faEdit}
            className="margin-left"
          ></FontAwesomeIcon>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faEye}
            className="margin-left text-blue-500"
          ></FontAwesomeIcon>
        </li>
        <li>
          <button onClick={() => deleteClub(club.id)}>
            <FontAwesomeIcon
              icon={faDeleteLeft}
              className="margin-left text-red-500"
            ></FontAwesomeIcon>
          </button>
        </li>
      </div>
    ),
  }));

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <>
      <TransitionEffect />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="App relative m-auto h-full pl-4 pr-4 pb-4
      miniMobile:max-w-screen-miniMobile miniMobile:bg-transparent
      mobile:max-w-screen-mobile mobile:bg-transparent
      midMobile:max-w-screen-midMobile midMobile:bg-transparent
      miniTablet:max-w-screen-miniTablet miniTablet:bg-transparent
      tablet:max-w-screen-tablet tablet:bg-transparent
      laptop:max-w-screen-laptop laptop:bg-transparent 
      midDesktop:max-w-screen-midDesktop midDesktop:bg-transparent overflow-hidden
     mt-[699px]"
      >
        <h1 className="text-center text-3xl mt-20 text-blue-500 font-bold">
          Clubes
        </h1>
        <div className="mt-7 text-center flex flex-wrap justify-center gap-1">
          <input
            type="text"
            className="border-rose-700 border-2 rounded-md p-1"
            placeholder="buscar club"
          />
          <button className="border-2 border-black ml-2 text-white bg-blue-500 p-1 rounded-md">
            Buscar Clubes
          </button>
        </div>
        <div className="flex justify-end m-4">
          <button
            className="p-2 rounded-md bg-blue-500 text-white"
            onClick={handleActivateModal}
          >
            Crear Clubes
          </button>
        </div>
        <div className="shadow-slate-500 shadow-lg rounded-md">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableBody>
                <TableRow style={{ backgroundColor: "#337CCF" }}>
                  <TableCell
                    style={{ width: 160, height: 90, color: "white" }}
                    align="center"
                  >
                    Nombre
                  </TableCell>
                  <TableCell
                    style={{ width: 160, color: "white" }}
                    align="center"
                  >
                    Nombre Largo
                  </TableCell>
                  <TableCell
                    style={{ width: 160, color: "white" }}
                    align="center"
                  >
                    Ubicacion
                  </TableCell>
                  <TableCell
                    style={{ width: 160, color: "white" }}
                    align="center"
                  >
                    Logo
                  </TableCell>
                  <TableCell
                    style={{ width: 160, color: "white" }}
                    align="center"
                  >
                    Accion
                  </TableCell>
                </TableRow>

                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => (
                  <>
                    <TableRow key={row.name}>
                      <TableCell style={{ width: 160 }} align="center">
                        {row.name}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="center">
                        {row.calories}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="center">
                        {row.fat}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="center">
                        {row.fay}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="center">
                        {row.name2}
                      </TableCell>
                    </TableRow>
                  </>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={5}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "Filas por página",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>

        {modalActive ? (
          <ModalForm
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
        ) : (
          ""
        )}
        <div className="mt-2 mb-2">
          <Map location={location} zoomLevel={17} />
        </div>
      </motion.div>
    </>
  );
};

export default Favl;
