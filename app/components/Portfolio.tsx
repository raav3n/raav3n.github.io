import PortfolioContainer from "./Portfolio/PortfolioContainer"

export default function Portfolio() {

    return (
        <div className="h-screen min-w-screen"> 
            
            <div className="h-full">

                <div className="m-h-1/4 pt-10 flex items-center justify-center">
                    <p className="text-5xl">Portfolio</p>
                </div>
                
                <div className="h-5/6">
                    <PortfolioContainer />
                </div>

            </div>
            
        </div>
    )
}