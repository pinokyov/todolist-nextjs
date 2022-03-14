import Head from "next/head";

const Layout = ({children}) => {
    return(
        <div>
            <Head>
                <title>TO DO - Next.js App</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
                <base href="/"/>
                <link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
                <link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
            </Head>
            <div id="kt_body" className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed">
                <div className="d-flex flex-column flex-root">
                    <div className="page d-flex flex-row flex-column-fluid" id={"kt_page"}>
                        <div className="wrapper d-flex flex-column flex-row-fluid">
                            <div className="content d-flex flex-column flex-column-fluid" id={"kt_content"}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <script src="assets/plugins/global/plugins.bundle.js"/>
                <script src="assets/js/scripts.bundle.js"/>
            </div>
        </div>
    )
}

export default Layout;
