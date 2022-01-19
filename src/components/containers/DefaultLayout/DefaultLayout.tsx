import { Outlet } from "react-router";

const DefaultLayout = () => {
    return (<>

        <div className="container">
            <Outlet />
        </div>
    </>)
}

export default DefaultLayout;