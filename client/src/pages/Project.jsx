import { useQuery } from "@apollo/client";
import {Link, useParams} from "react-router-dom";
import { GET_PROJECT } from "../queries/projectQueries";
import Spinner from "../components/Spinner";
import { FaEnvelope, FaIdBadge, FaPhone } from "react-icons/fa";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

export default function Project() {
    const {id} = useParams();
    const {loading, error, data} = useQuery(GET_PROJECT, {
        variables: {id} });

        if(loading) return <Spinner />
        if(error) return <p>Something went wrong</p>
  return <>
        {!loading && !error && (
            <div className="mx-auto w-75 card p-5">
                <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">Back</Link> 
                <h1>{data.project.name}</h1>
                <p>{data.project.description}</p>
                <h5>Status: {data.project.status}</h5>
                <h4 className="mt-2 text-primary">Client Information:</h4>
                <ul className="list-group ms-4">
                    <li className="list-group-item">
                        <FaIdBadge /> <b>Name:</b> {data.project.client.name}
                    </li>                
                    <li className="list-group-item">
                        <FaEnvelope/> <b>Email:</b> {data.project.client.email}
                    </li>                
                    <li className="list-group-item">
                        <FaPhone /> <b>Phone:</b> {data.project.client.phone}
                    </li>                
                </ul>
                <EditProjectForm project={data.project} />
     
                <DeleteProjectButton projectId={data.project.id} />
            </div>
            
        )}
        
  </>
  
}