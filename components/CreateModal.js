import {useState} from "react";
import { useDispatch } from "react-redux";

import {todoAdded} from "../redux/todosSlice";

const CreateModal = () => {

    const dispatch = useDispatch();

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')

    const formOnSubmit = async (event) => {
        await event.preventDefault();
        await dispatch(
            todoAdded({
                id: new Date().getTime(),
                name:name,
                description:description,
                completed:false
            })
        );
        await setName('');
        await setDescription('');
        await $('#kt_modal_1').modal('hide');
    }

    return (
        <div className="modal fade" tabIndex="-1" id="kt_modal_1">

            <div className="modal-dialog mt-20">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create To Do Item</h5>
                        <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                             aria-label="Close">
                            <span className="svg-icon svg-icon-2x"/>
                        </div>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={event => formOnSubmit(event)} id={"createForm"}>
                            <div className="mb-10">
                                <label htmlFor="exampleFormControlInput1" className="required form-label">Title</label>
                                <input value={name} onChange={event => setName(event.target.value)} type="text" className="form-control form-control-solid"
                                       placeholder="To Do Title" required={true}/>
                            </div>
                            <div className="mb-10">
                                <label htmlFor="exampleFormControlInput1" className="required form-label">Description</label>
                                <textarea required={true} value={description} onChange={event => setDescription(event.target.value)} className="form-control form-control-solid"
                                          placeholder="Description about your to do." rows={4}/>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                        <button type="submit" form="createForm" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateModal;
