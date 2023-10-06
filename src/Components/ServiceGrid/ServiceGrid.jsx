import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceGrid = () => {
    const data = useLoaderData()
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {
                data?.map((service) => <ServiceCard key={service._id} service={service} />)
            }
        </div>
    );
};

export default ServiceGrid;