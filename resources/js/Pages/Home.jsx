import GuestLayout from "@/Layouts/GuestLayout";
import { useState } from "react";

import SearchPanel from "@/Components/Home/SearchPanel";
import InfoSection from "@/Components/Home/InfoSection";
import ItineraryTabs from "@/Components/Home/ItineraryTabs";

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
    <div className="space-y-10">
      <SearchPanel
        mode={mode}
        onModeChange={setMode}
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <InfoSection />

      <ItineraryTabs active={itineraryTab} onChange={setItineraryTab} />
    </div>
  );
}

Home.layout = (page) => <GuestLayout>{page}</GuestLayout>;