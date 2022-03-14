import ListItem from "./ListItem";

const ListLayout = () => {
    return(
        <div className="row gy-5 g-xl-8 mt-5">
            <div className="col-xl-6 offset-2">
                <div className="card card-xl-stretch mb-xl-8">
                    <div className="card-header border-0">
                        <h3 className="card-title fw-bolder text-dark">Todo List</h3>
                        <div className="card-toolbar">
                            <button data-bs-toggle="modal" data-bs-target="#kt_modal_1" type="button" className="btn btn-sm btn-icon btn-light-success btn-active-light-primary">
                                <i className={"fa fa-plus"}/>
                            </button>
                        </div>
                    </div>
                    <div className="card-body pt-2">
                        <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-7 fs-6">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#kt_tab_pane_4">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5">Completed</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_6">All</a>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="kt_tab_pane_4" role="tabpanel">
                                <ListItem/>
                                <ListItem/>
                                <ListItem/>
                                <span>Active 3 items.</span>
                            </div>
                            <div className="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
                                <ListItem/>
                                <ListItem/>
                                <span>Completed 2 items.</span>
                            </div>
                            <div className="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
                                <ListItem/>
                                <ListItem/>
                                <ListItem/>
                                <ListItem/>
                                <ListItem/>
                                <span>Total 5 items.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListLayout;