import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ReportLayouts from './pages/ReportLayouts'
import { Routes, Route, Navigate } from "react-router-dom"

import ConsumoDistribucionReport from './components/reportsComps/ConsumoDistribucionReport'
import CalidadAguaReport from './components/reportsComps/CalidadAguaReport'
import MantenimientoReport from './components/reportsComps/MantenimientoReport'
import PresionCaudalReport from './components/reportsComps/PresionCaudalReport'
import EnergiaCostosReport from './components/reportsComps/EnergiaCostosReport'
import UsuariosReport from './components/reportsComps/UsuariosReport'
import HistorialDecisionesPage from './pages/HistorialDecisionesPage'
import InspeccionPage from './pages/InspeccionPage'

function App() {
  return (
    <>
      <Header title="Sistema AntVance" />
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/historial" replace />} />
          <Route path='/historial' element={
            <>
              <div>
                <h2 className='component-title'>Historial de Decisiones</h2>
              </div>
              <HistorialDecisionesPage />
            </>
          } />

          <Route path='/reportes' element={
            <>
              <div>
                <h2 className='component-title'>Reportes</h2>
              </div>
              <ReportLayouts />
            </>
          }>
            <Route index element={<ConsumoDistribucionReport />} />
            <Route path="calidad-agua" element={<CalidadAguaReport />} />
            <Route path="mantenimiento" element={<MantenimientoReport />} />
            <Route path="presion-caudal" element={<PresionCaudalReport />} />
            <Route path="energia-costos" element={<EnergiaCostosReport />} />
            <Route path="usuarios" element={<UsuariosReport />} />
          </Route>
          <Route path="/inspeccion" element={<InspeccionPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App