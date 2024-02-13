export interface PortfolioType
{
    style_bg_color?: string;

    title: string;
    description: string;
    tools: Array<string>;
    image?: string;

    link?: string;
    date: Date;
}