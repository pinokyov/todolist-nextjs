import { useRouter } from 'next/router'
import {useSelector,useDispatch} from "react-redux";
import {todoToggle,todoDeleted} from "../../redux/todosSlice";

import Layout from "../../components/Layout";
import Link from "next/link";

function Detail (){

    const dispatch = useDispatch();
    const router = useRouter()
    const { id } = router.query;
    const todo = useSelector((state) => state.todos.find(item=>item.id === parseInt(id)));

    const handleDelete = (id) => {
        return Swal.fire({
            title:'Remove Item',
            text:'Do you want remove to do item ?',
            icon: 'question',
            buttonsStyling: false,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: 'btn btn-danger'
            }
        }).then(async (result) => {
            if (result.value) {
                dispatch(todoDeleted({id}))
                router.push('/')
            }else{
                return false;
            }
        });
    };

    const handleToggle = (id) => {
        dispatch(todoToggle({id}))
    };

    return (
        <Layout>
            <div className="row gy-5 g-xl-8 mt-5">
                <div className="col-xl-6 offset-2">
                    {
                        todo ?
                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <h3 className="card-title">{todo.name}</h3>
                                    <div className="card-toolbar">
                                        <Link href={"/"}>
                                            <button className="btn btn-outline btn-sm btn-outline-dashed btn-outline btn-active-light-danger btn-icon">
                                                <i className="fa fa-times text-danger"/>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    {todo.description ? todo.description : '...'}
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <button onClick={()=>handleDelete(todo.id)} className={"btn btn-icon btn-danger btn-sm pull-right"}><i className={"fa fa-trash"}/></button>
                                        </div>
                                        <div className="form-check form-switch form-check-custom form-check-solid col-md-10">
                                            <input onChange={event => handleToggle(todo.id)} checked={!todo.completed} className="form-check-input" type="checkbox" value="" id="flexSwitchDefault"/>
                                            <label className="form-check-label" htmlFor="flexSwitchDefault">
                                                Make {todo.completed ? 'Completed' : 'Active'}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div> : null
                    }
                </div>
            </div>

        </Layout>
    )
}


export default Detail;