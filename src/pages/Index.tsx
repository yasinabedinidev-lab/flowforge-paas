import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import WorkflowsPreview from "@/components/WorkflowsPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <WorkflowsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
