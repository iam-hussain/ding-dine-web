import Error from "@/components/molecules/error";
import Loader from "@/components/molecules/loader";

export default {
  errorComponent: (error: any) => <Error error={error} />,
  pendingComponent: () => <Loader />,
};
