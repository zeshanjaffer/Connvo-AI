import Card from './Card';

const PricingTier = ({ title, price, features, children, highlight = false }: { 
  title: string; 
  price: string; 
  features: string[]; 
  children?: React.ReactNode;
  highlight?: boolean;
}) => {
  return (
    <Card className={`flex flex-col items-center border-2 transition-colors duration-200 min-h-[450px] ${
      highlight 
        ? 'border-[#FFD700] shadow-2xl bg-gradient-to-b from-white to-[#FCF8DD]/30' 
        : 'border-[#00809D]/20 hover:border-[#00809D]/40'
    }`}>
      <h3 className="text-xl font-semibold mb-2 text-center text-[#00809D]">{title}</h3>
      <div className={`text-4xl font-bold mb-6 ${
        highlight ? 'text-gradient' : 'text-[#00809D]'
      }`}>{price}</div>
      <ul className="text-[#00809D]/80 mb-6 flex-1 space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="text-center flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
            {feature}
          </li>
        ))}
      </ul>
      {children}
    </Card>
  );
};

export default PricingTier;
