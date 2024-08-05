import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

// Sample data
export const mockDataBeritaAcara = [
  {
    id: 1,
    tanggal: "2024-08-01",
    noMemo: "00002-ITS-SAG-M-2024",
    perihal: "Permohonan reimburse asuransi pak roy",
    pic: "wina",
  }
];

const BeritaAcara = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define columns based on mockDataSag
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "tanggal", headerName: "Tanggal", flex: 1 },
    { field: "noMemo", headerName: "No Memo", flex: 1 },
    { field: "perihal", headerName: "Perihal", flex: 1 },
    { field: "pic", headerName: "PIC", flex: 1 }
  ];

  return (
    <Box m="20px">
      <Header
        title="BERITA ACARA"
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
          rows={mockDataBeritaAcara}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default BeritaAcara;
