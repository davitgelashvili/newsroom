import { Route, Routes } from "react-router-dom"
import LoginPage from "./auth/LoginPage"
import DashboardPage from "./dashboard/DashboardPage"
import RegisterPage from "./auth/RegisterPage"
import Header from "../components/Common/Header/Header"

const RoutePage = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index path="/" element={<DashboardPage />} />
            </Routes>
        </>
    )
}

export default RoutePage