import './App.css'
import TitleCard from "./components/TitleCard.jsx";
import ResultCard from "./components/ResultCard.jsx";
import InputCard from "./components/InputCard.jsx";

function App() {
    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-t from-gray-900 to-gray-200">
            <div className="w-1/2 h-1/2 ">
                <div className="h-1/2 p-2">
                    <TitleCard/>
                </div>
                <div className="w-full h-1/2 flex">
                    <div className="w-1/2 h-full p-2">
                        <ResultCard/>
                    </div>
                    <div className="w-1/2 h-full p-2">
                        <InputCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App