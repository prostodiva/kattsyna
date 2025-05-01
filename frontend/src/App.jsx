import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
};

export default App;