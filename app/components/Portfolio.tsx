import PortfolioContainer from "./Portfolio/PortfolioContainer"

export default function Portfolio() {

    return (
        <div className="min-h-screen pt-5 min-w-screen"> 
            <header className="m-h-1/4 flex items-center justify-center">
                <p className="text-5xl">Portfolio</p>
            </header>
            
            <div className="flex items-center justify-center">
                <PortfolioContainer />
            </div>
            

        </div>
    )
}