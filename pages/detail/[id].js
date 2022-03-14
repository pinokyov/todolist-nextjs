import { useRouter } from 'next/router'
import Layout from "../../components/Layout";
import Link from "next/link";

const Detail = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <Layout>
            <div className="row gy-5 g-xl-8 mt-5">
                <div className="col-xl-6 offset-2">
                    <div className="card shadow-sm">
                        <div className="card-header">
                            <h3 className="card-title">Title</h3>
                            <div className="card-toolbar">
                                <Link href={"/"}>
                                    <button className="btn btn-outline btn-sm btn-outline-dashed btn-outline btn-active-light-danger btn-icon">
                                        <i className="fa fa-times text-danger"/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            Lorem Ipsum is simply dummy text...
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-1">
                                    <button className={"btn btn-icon btn-danger btn-sm pull-right"}><i className={"fa fa-trash"}/></button>
                                </div>
                                <div className="form-check form-switch form-check-custom form-check-solid col-11">
                                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault"/>
                                    <label className="form-check-label" htmlFor="flexSwitchDefault">
                                        Make Completed
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Detail;