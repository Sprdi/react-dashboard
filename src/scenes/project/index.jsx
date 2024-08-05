import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

// Sample data
export const mockDataProject = [
  {
    id: 1,
    no: 1,
    kodeProject: "0001/ITS-SAG/SOF/RBB/A/2024",
    jenisPengadaan: "New Product",
    namaPengadaan: "Pengadaan Penambahan Lisensi Network Access Control (NAC) dan Engineer on Site (EoS) Network Access Control (NAC)",
    divisiInisiasi: "Divisi IT Security",
    bulan: "Juni",
    sumberPendanaan: "1.1.2.1 Pengadaan Security Software",
    anggaran: "Rp. 29.250.000.000",
    noIzinPrinsip: "10015/ITS-SAG/M/2024",
    tanggalIzinPrinsip: "22-January-2024",
    tanggalTor: "23-January-2024",
    pic: "LUTHFI/ADNAN",
  }
];

const Project = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "no", headerName: "No", flex: 0.5 },
    { field: "kodeProject", headerName: "Kode Project", flex: 1 },
    { field: "jenisPengadaan", headerName: "Jenis Pengadaan", flex: 1 },
    { field: "namaPengadaan", headerName: "Nama Pengadaan", flex: 2 },
    { field: "divisiInisiasi", headerName: "Divisi Inisiasi", flex: 1 },
    { field: "bulan", headerName: "Bulan", flex: 1 },
    { field: "sumberPendanaan", headerName: "Sumber Pendanaan", flex: 1 },
    { field: "anggaran", headerName: "Anggaran", flex: 1 },
    { field: "noIzinPrinsip", headerName: "No Izin Prinsip", flex: 1 },
    { field: "tanggalIzinPrinsip", headerName: "Tanggal Izin Prinsip", flex: 1 },
    { field: "tanggalTor", headerName: "Tanggal TOR", flex: 1 },
    { field: "pic", headerName: "PIC", flex: 1 }
  ];

  return (
    <Box m="20px">
      <Header
        title="PROJECT"
        // subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataProject}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Project;
