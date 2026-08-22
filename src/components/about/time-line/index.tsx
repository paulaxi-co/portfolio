import { Title } from "../../common/text/title";
import { Item, TimeStep } from "./item";


const data: TimeStep[] = [
  {
    id: '1',
    title: 'Sr Product Designer',
    subtitle: 'Silvr - Part Time',
    items: [
      'Designed end-to-end mobile experiences for an AI-powered fashion discovery platform.',
      'Translated product ideas and user feedback into intuitive flows, prototypes, and polished interfaces.',
      'Collaborated with product and engineering to refine interactions and deliver responsive, development-ready designs.'
    ],
    timeTag: '2026-Present'
    
  },
  {
    id: '2',
    title: 'UX Strategist',
    subtitle: 'Irth Solutions',
    items: [
      'Led user research and usability testing to uncover behaviors and needs.',
      'Translated insights into personas, flows, and prototypes that informed strategy.',
      'Presented findings to stakeholders, driving data-informed design decisions.'
    ],
    timeTag: '2024-2025'
  },
  {
    id: '3',
    title: 'Product Designer',
    subtitle: 'Freelance',
    items: [
      'Delivered end-to-end design: research, strategy, prototyping, and UI.',
      'Built design systems and interactive prototypes using Figma and code (HTML, CSS, JS).',
      'Collaborated directly with clients, aligning business goals with user needs.'
    ],
    timeTag: '2024-Present'
  },
  {
    id: '4',
    title: 'Logistics Coordinator',
    subtitle: 'Convoy Inc',
    items: [
      'Managed supply chain operations for retailers including Costco, Walmart, and Unilever.',
      'Redesigned transportation routes to maximize efficiency and reduce costs.',
      'Resolved shipping and inventory issues, ensuring on-time performance.'
    ],
    timeTag: '2021-2023'
  }
]

export function TimeLine() {
  return (
    <div className="mt-[100px]">
      <div>
        <Title center>Work Experience</Title>
        <p className="text-center text-[18px] font-[400]">From logistics to product design — the journey that built my lens.</p>
        <div className="flex flex-col items-center mt-4">
          {data.map(item => (
            <Item step={item} key={item.id} />
          ))}
        </div>
      </div>

    </div>
  );
}
