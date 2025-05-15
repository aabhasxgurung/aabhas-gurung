import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Intro from "@/components/Intro";
import SelecedWork from "@/components/SelecedWork";

export default function Home() {
  return (
    <div className="min-h-[100vh] w-auto">
      <Header />
      <Intro />
      <Headline title="Hello" />
      <SelecedWork />
    </div>
  );
}
