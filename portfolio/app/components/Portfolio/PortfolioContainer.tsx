import PortfolioCard from "./PortfolioCard"

export default function PortfolioContainer() 
{
    return (
        <div className="flex overflow-x-auto gap-4 h-1/2 items-center justify-center w-1/2">
            <PortfolioCard title={'Realtime Chat'} tools={['React']} />
            <PortfolioCard title={'Another Project'} tools={['Next.js']} />
            <PortfolioCard title={'Another Project'} tools={['Next.js']} />
            <PortfolioCard title={'Another Project'} tools={['Next.js']} />
            <PortfolioCard title={'Another Project'} tools={['Next.js']} />
            <PortfolioCard title={'Another Project'} tools={['Next.js']} />
    
        </div>
    )
}