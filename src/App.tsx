import { Route, Routes, useNavigate } from 'react-router-dom';
import RoutePage from './pages/pages';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import { useEffect } from 'react';
import { decodeToken } from './helpers/jwt'

function App() {
    const token = localStorage.getItem('accessToken')
    const navigate = useNavigate()
    const decoded = decodeToken(token)

    useEffect(() => {
        if (token) {
            navigate('/')
        }

        if (!token || (decoded?.exp && Date.now() > decoded.exp * 1000)) {
            localStorage.removeItem('accessToken')
            // navigate('/login')
        }
    }, [token])

    return (
        <> 
            {!token ? (
                <Routes>
                    <Route index path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/reg" element={<RegisterPage />} />
                </Routes>
            ) : (
                <Routes>
                    <Route index path="/*" element={<RoutePage />} />
                </Routes>

            )}
        </>
    );
}

export default App;