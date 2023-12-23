
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-3/12 ">
           <p className="text-orange-600 text-2xl font-bold"> {subHeading} </p> 
           <h3 className="text-2xl font-bold uppercase py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;