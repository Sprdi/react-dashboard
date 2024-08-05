import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import { Calendar, CutiCalendar } from "./scenes/booking"; // Adjust the import path if necessary
import Sag from "./scenes/sag";
import Iso from "./scenes/iso";
import Memo from "./scenes/memo";
import BeritaAcara from "./scenes/berita_acara";
import Project from "./scenes/project";
import Sk from "./scenes/sk";
import Surat from "./scenes/surat";
import SuratMasuk from "./scenes/surat_masuk";
import SuratKeluar from "./scenes/surat_keluar";


function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/" element = {<Dashboard />} />
                            <Route path="/team" element = {<Team />} />
                            <Route path="/contacts" element = {<Contacts />} />
                            <Route path="/invoices" element = {<Invoices />} />
                            <Route path="/form" element = {<Form />} />
                            <Route path="/booking" element = {<Calendar />} />
                            <Route path="/cuti" element={<CutiCalendar />} />
                            <Route path="/sag" element = {<Sag />} />
                            <Route path="/iso" element = {<Iso />} />
                            <Route path="/memo" element = {<Memo />} />
                            <Route path="/surat" element = {<Surat />} />
                            <Route path="/berita_acara" element = {<BeritaAcara />} />
                            <Route path="/sk" element = {<Sk />} />
                            <Route path="/project" element = {<Project />} />
                            <Route path="/surat_masuk" element = {<SuratMasuk />} />
                            <Route path="/surat_keluar" element = {<SuratKeluar />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
