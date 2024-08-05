import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

// Sample data
export const mockDataSuratMasuk = [
  {
    id: 1,
    noSurat: "0168/LEP-PKS/2024",
    title: "Pengadaan Management Firewall Paloalto Panorama DC 2",
    divisi: "IT Security",
    destiny: "Divisi Umum",
    dateIssue: "3 June 2024",
    hard: " ",
    soft: " ",
  }
];

const SuratMasuk = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "noSurat", headerName: "No Surat", flex: 1 },
    { field: "title", headerName: "Title", flex: 2 },
    { field: "divisi", headerName: "Divisi", flex: 1 },
    { field: "destiny", headerName: "Destiny", flex: 1 },
    { field: "dateIssue", headerName: "Date Issue", flex: 1 },
    { field: "hard", headerName: "Hard", flex: 1 },
    { field: "soft", headerName: "Soft", flex: 1 }
  ];

  return (
    <Box m="20px">
      <Header
        title="SURAT"
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
          rows={mockDataSuratMasuk}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default SuratMasuk;
