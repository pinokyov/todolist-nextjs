import Link from "next/link";

const ListItem = ({todo}) => {
    return(
        <div className="d-flex align-items-center mb-8">
            <span className={todo.completed ? "bullet bullet-vertical h-40px bg-danger" : "bullet bullet-vertical h-40px bg-success"} style={{marginRight:15}}/>
            <div className="flex-grow-1">
                <a className="text-gray-800 text-hover-primary fw-bolder fs-6">{todo.name}</a>
            </div>
            <Link href={'/detail/'+todo.id}>
                <button className="btn btn-sm btn-icon btn-light-dark btn-active-light-primary">
                    <i className={"fa fa-eye"}/>
                </button>
            </Link>
        </div>
    )
}

export default ListItem;