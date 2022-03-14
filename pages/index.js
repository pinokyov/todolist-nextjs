import Layout from "../components/Layout";
import ListLayout from "../components/ListLayout";
import CreateModal from "../components/CreateModal";
import Link from "next/link";

const Index = () => {

    return(
        <Layout>
            <ListLayout/>
            <CreateModal/>
        </Layout>
    )
};

export default Index;
