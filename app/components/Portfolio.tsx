import PortfolioContainer from "./Portfolio/PortfolioContainer";
import { PortfolioScrollType } from "./Portfolio/PortfolioScrollType";

const Portfolio: React.FC<PortfolioScrollType> = ({ isAtTop }) => {
    
    return (
        <div className="portfolio_title h-screen min-w-screen relative" > 
            <div className={`text-5xl mt-5 flex items-center justify-center sticky w-full top-5 ${isAtTop ? 'text-yellow-100' : ''}`}>
                Portfolio
            </div>
            <div className="overflow-y-auto md:ml-8">
                <PortfolioContainer />
            </div>
        </div>   
    )
    
}

export default Portfolio;
