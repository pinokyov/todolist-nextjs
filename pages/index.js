import Layout from "../components/Layout";
import CreateForm from "../components/CreateForm";
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => (
    <Layout>
        <CreateForm/>

        <div className="px-5 pb-3 w-80">
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <button className="btn btn-sm btn-danger badge-pill">R</button>
                </li>
            </ul>
        </div>
    </Layout>
);

export default Index;
