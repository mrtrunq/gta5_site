import IntroSection from "../components/home/sections/IntroSection";
import QuestSection from "../components/home/sections/QuestSection";
import ShowCaseSection from "../components/home/sections/ShowCaseSection";
import HomeLayout from "../layouts/HomeLayout";

export default function Home() {
    return (
        <>
            <HomeLayout title="GTA Go Việt Nam">
                <IntroSection />
                <QuestSection />
                <ShowCaseSection />
                {/* Guide Section */}
            </HomeLayout>
        </>
    );
}
