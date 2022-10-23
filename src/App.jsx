import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"


export const App = () => (
    <BrowserRouter>
        <div className="w-screen max-w-[475px] h-screen max-h-[475px] mx-auto flex flex-col font-poppins bg-blue-200 overflow-hidden">
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </div>
    </BrowserRouter>
)
