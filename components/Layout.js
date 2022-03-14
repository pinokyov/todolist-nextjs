import Header from '../components/Header';

const Layout = ({children}) => {
    return(
        <div className="container">
            <div className="col-md-6 m-5 p-2 rounded mx-auto bg-light shadow">
                <Header/>
                {children}
            </div>
        </div>
    )
}

export default Layout;
