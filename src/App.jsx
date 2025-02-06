import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Main from "./components/main";

const root = createRoot(document.getElementById('root'))

root.render(
    <>
    <Header/>
    <Main/>
    </>
)