import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  FaHome,
  FaHammer,
  FaMountain,
  FaMoneyBillWave,
  FaUserTie,
  FaHandshake,
  FaFileInvoiceDollar,
  FaUser,
  FaBriefcase,
} from "react-icons/fa";
import ReactCardFlip from "react-card-flip";

const servicesData = [
  {
    icon: FaHome,
    title: "DSCR Loans",
    description:
      "A DSCR Rental Loan is a long-term rental loan designed for real estate investors to purchase or refinance rental properties.",
    backContent: `
      KEY REQUIREMENTS:

      Loan Amounts: $55k – $2M
      Property Types: 1 - 4 SFH, Condos, Townhomes
      Credit Score: Minimum 660+
      Long Terms: 30 Year fixed Rate , ARMS and interest-Only
      Cashout Options: 75% Cashout available on all unleased or vacant properties
    `,
  },
  {
    icon: FaHammer,
    title: "Rehab Loans",
    description:
      "Rehab Loans are ideal for those aiming to fix and flip properties or improve rental properties to increase their income potential.",
    backContent: `
      KEY REQUIREMENTS:
      
      Loan Amounts: $70k – $4M
      Property Types: 1 - 4 SFH, Condos, Townhomes
      Acquisition LTV: Up to 90%
      Rehab Budget LTV: Up to 100%
      Monthly Payments: Rolled into the loan to ease cash flow management 
      Loan Terms: Upto 24-month term available  
    `,
  },
  {
    icon: FaMountain,
    title: "Ground Up Loans",
    description:
      "Ground Up Loans cover the costs of land acquisition and construction, providing the necessary capital to bring new residential projects to life.",
    backContent: `
      KEY REQUIREMENTS:
      
      Loan Amounts: $100k – $4M
      Property Types: 1 - 4 SFH, Condos, Townhomes
      LTC: Up to 90%
      LTARV: Up to 75% 
      Loan Terms:12 - 24 Month terms available
    `,
  },
  {
    icon: FaMoneyBillWave,
    title: "Bridge Loans",
    description:
      "Bridge Loans are short-term financing options designed to help real estate investors bridge the gap between the purchase of a new property and the sale of an existing one.",
    backContent: `
      KEY REQUIREMENTS:
      
      Loan Amounts: $75K – $4M
      Property Types: 1 - 4 SFH, Condos, Townhomes
      LTC: Up to 80%
      No Asset Verification: Streamlined application process with minimal documentation(restrictions apply)  
      Loan Terms:6-24 month terms available
    `,
  },
  {
    icon: FaHome,
    title: "Second Position DSCR Loans",
    description:
      "This is a long-term rental loan designed for real estate investors to refinance rental properties when there is already existing debt on the property.",
    backContent: `
      KEY REQUIREMENTS:
      
      Loan Amounts: $30K – $500K
      Property Types: 1 - 4 SFH, Condos, Townhomes
      DCSR Requirment: 1.1x minimum
      Loan Terms:30-year fixed
      Cashout Option: Up to 85% combined loan to value(CLTV)
      cashout available on unleased or vacant properties
    `,
  },
  {
    icon: FaHandshake,
    title: "PML",
    description:
      "A PML (Private Money Lender) loan provides flexible, short-term financing for real estate investors, offering fast approvals, competitive rates, and tailored solutions.",
    backContent: `
      KEY REQUIREMENTS:
      
      Loan Amounts: $75K – $1.5M
      Property Types: 1 - 4 SFH, Condos, Townhomes
      Loan to Cost: Up to 80%
      Loan to ARV: Up to 70%
      Cashout Option: 6-18 months terms available
      quick closing timeline
    `,
  },
  {
    icon: FaFileInvoiceDollar,
    title: "EMD Lender",
    description:
      "An Earnest Money Deposit loan provides short-term financing for real estate investors to cover the earnest money required to secure a property under contract.",
    backContent: `
      KEY REQUIREMENTS:
      
      Loan Amounts: $1K – $10K
      Property Types: 1 - 4 SFH, Condos, Townhomes
      Loan Terms: Negotiable
    `,
  },
  {
    icon: FaUser,
    title: "Personal Lending",
    description:
      "Personal real estate lending offers flexible financing for individuals looking to purchase, renovate, or improve their personal property.",
    backContent: `
      KEY REQUIREMENTS:
      
      Loan Amounts: $50K – $2M
      Property Types: Single Family Homes, condos, townhomes
      LTV: Up to 85% 
      Income Verification: Proof of stable income or employment required
      Loan Terms: 12 - 60 months available
      Credit Rquirements: Minimum credit score of 680
    `,
  },
  {
    icon: FaBriefcase,
    title: "Business Funding",
    description:
      "Looking to buy an existing business? Our business acquisition loans offer flexible financing solutions to help you secure the capital you need to purchase and grow an established business.",
    backContent: `
      KEY REQUIREMENTS:
      
      Loan Amounts: $100K - $5M
      Property Types: Single-family homes, condos, townhomes
      Loan Amounts: $100K - $5M
      Loan Terms: 12-60 months
      Eligibility: Minimum 2 years in business (for acquisition target)
      Use of Funds: Business acquisition, working capital, equipment purchases
    `,
  },
];

const Loans: React.FC = () => {
  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    new Array(servicesData.length).fill(false)
  );

  const handleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <section className="py-16 text-center">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ReactCardFlip
              key={index}
              isFlipped={flippedStates[index]}
              flipDirection="vertical"
            >
              {/* Front of the card */}
              <Card
                className="bg-gray-600 p-8 rounded-lg shadow-lg transform transition-transform lg:hover:scale-105 duration-300 border-none flex flex-col justify-evenly gap-2 md:min-h-[60vh] min-h-[70vh]"
                onClick={() => handleFlip(index)}
              >
                <div>
                  <div className="mb-4 text-white">
                    <service.icon className="w-12 h-12 mx-auto" />
                  </div>
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-xl text-white font-semibold mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-200">{service.description}</p>
                  </CardContent>
                </div>
                <div className="items-center justify-center">
                  <button
                    className="p-4 rounded-full bg-transparent border border-white hover:bg-custom-gradient text-white"
                    // onClick={() => handleFlip(index)}
                  >
                    More Info
                  </button>
                </div>
              </Card>
              {/* Back of the card */}
              <Card
                className="bg-gray-600 p-8 rounded-lg shadow-lg transform transition-transform lg:hover:scale-105 duration-300 border-none flex flex-col justify-between md:min-h-[60vh] min-h-[70vh] "
                onClick={() => handleFlip(index)}
              >
                <div className="text-left flex flex-col">
                  <CardTitle className="text-xl text-white font-semibold mb-4">
                    {service.title}
                  </CardTitle>
                  <CardContent className="p-0 text-gray-200 whitespace-pre-line">
                    {service.backContent}
                  </CardContent>
                </div>
                <div className="flex justify-center pt-4">
                  <button
                    className="p-4 rounded-full bg-transparent border border-white hover:bg-custom-gradient text-white"
                    // onClick={() => handleFlip(index)}
                  >
                    Less Info
                  </button>
                </div>
              </Card>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loans;
