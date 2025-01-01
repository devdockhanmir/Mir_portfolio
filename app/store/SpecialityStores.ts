import { Store } from "pullstate";

type ButtonDataType = {
  title: string;
  description: string;
  content: string;
  footer: string;
};

type ButtonType = "Easy" | "Trust" | "Available";

export const SpecialityStore = new Store({
  selectedButton: "Easy" as ButtonType,
  buttonData: {
    Easy: {
      title: "Easy Process",
      description:"We've streamlined our lending process to be as simple and quick as possible. Whether you need funding for a project or a personal loan, our easy application and fast approval system ensures you get the money you need without unnecessary hurdles.",
      content: "We've streamlined our lending process to be as simple and quick as possible. Whether you need funding for a project or a personal loan, our easy application and fast approval system ensures you get the money you need without unnecessary hurdles.",
      footer: "Footer information for Button 1",
    },
    Trust: {
      title: "Trustworthy Service",
      description: "We prioritize building trust with our clients. Our transparent terms, ethical practices, and commitment to your financial well-being ensures you can rely on us for all your lending needs.",
      content: "We prioritize building trust with our clients. Our transparent terms, ethical practices, and commitment to your financial well-being ensures you can rely on us for all your lending needs.",
      footer: "Footer information for Button 2",
    },
    Available: {
      title: "Always Available",
      description: " Our support ensures that no matter the time or situation, we're here to assist you, provide guidance, and make sure you're on track to achieve your goals.",
      content: " Our support ensures that no matter the time or situation, we're here to assist you, provide guidance, and make sure you're on track to achieve your goals.",
      footer: "Footer information for Button 3",
    },
  },
});
