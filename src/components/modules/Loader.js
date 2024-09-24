import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#304ffe"
      radius="9"
      wrapperStyle={{ margin: "auto" }}
      ariaLabel="three-dots-loading"
    />
  );
}

export default Loader;
