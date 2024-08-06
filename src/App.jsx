import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import { Calendar, CutiCalendar } from "./scenes/booking";
import Iso from "./scenes/iso";
import AddEditIso from "./scenes/iso/AddEditIso";
import Memo from "./scenes/memo";
import AddEditMemo from "./scenes/memo/AddEditMemo";
import BeritaAcara from "./scenes/berita_acara";
import AddEditBeritaAcara from "./scenes/berita_acara/AddEditBeritaAcara"; 
import Sk from "./scenes/sk";
import AddEditSk from "./scenes/sk/AddEditSk";
import Surat from "./scenes/surat";
import AddEditSurat from "./scenes/surat/AddEditSurat";
import SuratMasuk from "./scenes/surat_masuk";
import AddEditSuratMasuk from "./scenes/surat_masuk/AddEditSuratMasuk";
import SuratKeluar from "./scenes/surat_keluar";
import AddEditSuratKeluar from "./scenes/surat_keluar/AddEditSuratKeluar";
import Sag from "./scenes/sag";
import AddEditSag from "./scenes/sag/AddEditSag";
import Project from "./scenes/project";
import AddEditProject from "./scenes/project/AddEditProject";
import PerjalananDinas from './scenes/perjalanan_dinas';
import AddEditDinas from './scenes/perjalanan_dinas/AddEditDinas';

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
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/booking" element={<Calendar />} />
                            <Route path="/cuti" element={<CutiCalendar />} />
                            <Route path="/sag" element={<Sag />} />
                            <Route path="/sag/add" element={<AddEditSag />} />
                            <Route path="/sag/edit/:id" element={<AddEditSag />} />
                            <Route path="/iso" element={<Iso />} />
                            <Route path="/iso/add" element={<AddEditIso />} />
                            <Route path="/iso/edit/:id" element={<AddEditIso />} />
                            <Route path="/memo" element={<Memo />} />
                            <Route path="/memo/add" element={<AddEditMemo />} />
                            <Route path="/memo/edit/:id" element={<AddEditMemo />} />
                            <Route path="/surat" element={<Surat />} />
                            <Route path="/surat/add" element={<AddEditSurat />} />
                            <Route path="/surat/edit/:id" element={<AddEditSurat />} />
                            <Route path="/berita_acara" element={<BeritaAcara />} />
                            <Route path="/berita_acara/add" element={<AddEditBeritaAcara />} />
                            <Route path="/berita_acara/edit/:id" element={<AddEditBeritaAcara />} />
                            <Route path="/sk" element={<Sk />} />
                            <Route path="/sk/add" element={<AddEditSk />} />
                            <Route path="/sk/edit/:id" element={<AddEditSk />} />
                            <Route path="/project" element={<Project />} />
                            <Route path="/project/add" element={<AddEditProject />} />
                            <Route path="/project/edit/:id" element={<AddEditProject />} />
                            <Route path="/surat_masuk" element={<SuratMasuk />} />
                            <Route path="/surat_masuk/add" element={<AddEditSuratMasuk />} />
                            <Route path="/surat_masuk/edit/:id" element={<AddEditSuratMasuk />} />
                            <Route path="/surat_keluar" element={<SuratKeluar />} />
                            <Route path="/surat_keluar/add" element={<AddEditSuratKeluar />} />
                            <Route path="/surat_keluar/edit/:id" element={<AddEditSuratKeluar />} />
                            <Route path="/perjalanan_dinas" element={<PerjalananDinas />} />
                            <Route path="/perjalanan_dinas/add" element={<AddEditDinas />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
