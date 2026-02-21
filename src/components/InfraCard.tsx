interface InfraCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    number: string;
}

const InfraCard = ({ icon, title, description, number }: InfraCardProps) => {
    return (
        <div className="infra-card group">
            <div className="infra-card__body">
                <div className="infra-card__icon">{icon}</div>
                <p className="infra-card__title">{title}</p>
                <p className="infra-card__paragraph">{description}</p>
            </div>
            <div className="infra-card__ribbon">
                <span className="infra-card__ribbon-label">{number}</span>
            </div>
        </div>
    );
};

export default InfraCard;
