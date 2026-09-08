import { Card } from "@/components/common/card";
import { Item, List } from "@/components/common/list";
import { Subtitle } from "@/components/common/text/subtitle";
import { Title } from "@/components/common/text/title";

export function DesignPurpose() {
  return (
    <section className="w-full max-w-[1100px] px-4 py-10 md:py-16">
      <Title center>Design with purpose</Title>
      <p className="text-center mt-[10px]">I believe products should be simple, intuitive, and human. Here’s how I make that happen</p>
      <div className="mt-10 grid gap-12 md:mt-[55px] md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <Subtitle>What I do:</Subtitle>
          <List className="mt-[24px]">
            <Item>Interfaces that feel natural</Item>
            <Item>Research that informs design</Item>
            <Item>Prototypes that spark ideas</Item>
            <Item>Design systems for clarity</Item>
          </List>
        </div>
        <div>
          <Subtitle>How do I work:</Subtitle>
          <div className="mt-[24px] grid gap-4 sm:grid-cols-2 sm:gap-8">
            <Card title="1. Discover" description="Listen, research, and spot real needs." />
            <Card title="2. Define" description="Structure flows and align on strategy." className="relative sm:top-8" />
            <Card title="3. Design" description="Create, prototype, and refine." />
            <Card title="4. Deliver" description="Handoff and improve through feedback." className="relative sm:top-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
