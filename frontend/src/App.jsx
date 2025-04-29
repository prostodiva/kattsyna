import  HomePage from './pages/HomePage';
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    )
}


const App = () => {
    return (
        <>
            <AppRoutes />
        </>
    )
};

export default App;