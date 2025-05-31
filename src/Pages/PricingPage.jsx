import PageNav from "../Components/PageNav";
import Pricing from "../Components/Pricing";
import styless from "./PricingPage.module.css";

function PricingPage() {
  return (
    <div className={styless.pricingPage}>
      <PageNav />
      <Pricing />
    </div>
  );
}

export default PricingPage;
