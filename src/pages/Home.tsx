import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import StatsCounter from '../components/home/StatsCounter';
import WhoWeAre from '../components/home/WhoWeAre';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CTA from '../components/home/CTA';

export default function Home() {
    return (
        <div className="w-full">
            <Hero />
            <ServicesOverview />
            <StatsCounter />
            <WhoWeAre />
            <WhyChooseUs />
            <CTA />
        </div>
    );
}
