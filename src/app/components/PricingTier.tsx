import React from "react";
import Button from "./Button";

interface PricingTierProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  isContact?: boolean;
  highlighted?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  period,
  features,
  cta,
  isContact = false,
  highlighted = false,
}) => {
  return (
    <div className={`border rounded-lg p-6 flex flex-col ${highlighted ? "border-blue-500 ring-2 ring-blue-200" : ""}`}>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {period && <span className="text-gray-600">/{period}</span>}
      </div>
      <ul className="mb-6 space-y-2 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={isContact ? "outline" : highlighted ? "primary" : "secondary"}
        size="md"
        className="w-full mt-auto"
        as={isContact ? "a" : "button"}
        href={isContact ? "/contact" : undefined}
      >
        {cta}
      </Button>
    </div>
  );
};

export default PricingTier;