import Link from "next/link";

const ListItem = ({item}) => {
    return(
        <div className="d-flex align-items-center mb-8">
            <span className="bullet bullet-vertical h-40px bg-success" style={{marginRight:15}}/>
            <div className="flex-grow-1">
                <a className="text-gray-800 text-hover-primary fw-bolder fs-6">Sample todo list item.</a>
                <span className="text-muted fw-bold d-block">14:56</span>
            </div>
            <Link href="/detail/23123123123">
                <button className="btn btn-sm btn-icon btn-light-dark btn-active-light-primary">
                    <i className={"fa fa-eye"}/>
                </button>
            </Link>
        </div>
    )
}

export default ListItem;