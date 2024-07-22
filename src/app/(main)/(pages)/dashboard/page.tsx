import { WavyBackground } from "@/components/ui/wavy-background";


const DashboardPage = () => {
    return (
        <div className="flex flex-col gap-4 relative">
            
            <WavyBackground className="max-w-4xl mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                Automate Your Work With Quatrix 
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                Connect your Socials and see the real power of Quatrix..........
            </p>
            </WavyBackground>
        </div>
    )
}

export default DashboardPage;