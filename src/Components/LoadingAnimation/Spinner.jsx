import { RevolvingDot } from "react-loader-spinner";
const Spinner = () => {
    return (
      <section className="flex justify-center py-10">
        <RevolvingDot
          radius="45"
          strokeWidth="5"
          color="red"
          secondaryColor="green"
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </section>
    );
};

export default Spinner;