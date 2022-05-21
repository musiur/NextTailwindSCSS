const { default: Navbar } = require("../components/Navbar")

const Layout  = ({children}) => {
    return (
        <>
        <Navbar />
        {children}
        </>
    )
}

export default Layout;