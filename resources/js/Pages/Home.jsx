import GuestLayout from "@/Layouts/GuestLayout";
import { useState } from "react";

import SearchPanel from "@/Components/Home/SearchPanel";
import InfoSection from "@/Components/Home/InfoSection";
import ItineraryTabs from "@/Components/Home/ItineraryTabs";
import WhySkywaySection from "@/Components/Home/WhySkywaySection";
import HowItWorksSection from "@/Components/Home/HowItWorksSection";

export default function Home() {
  // 1) Estado “global” de Home
  const [mode, setMode] = useState("oneway");
  const [itineraryTab, setItineraryTab] = useState("Vuelos");
  const [values, setValues] = useState({
    from: "",
    to: "",
    dateOut: "",
    dateIn: "",
    people: 1,
  });

  // 2) Handlers (lógica) en Home
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = () => {
    // Aquí luego conectamos la lógica real:
    // - router.get(...) o router.post(...)
    // - o llamada fetch a tu endpoint
    console.log("BUSCAR:", { mode, ...values });
  };

  return (
    <div className="sky-page test">
      <div className="sky-container">
        <SearchPanel
          mode={mode}
          onModeChange={setMode}
          values={values}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <InfoSection />

        <ItineraryTabs active={itineraryTab} onChange={setItineraryTab} />
        <WhySkywaySection />
        <HowItWorksSection />
      </div>
    </div>
  );
}
Home.layout = (page) => <GuestLayout>{page}</GuestLayout>;