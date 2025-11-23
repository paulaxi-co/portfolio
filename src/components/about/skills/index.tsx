import { Fragment } from "react";
import { SmallTitle } from "../small-title";
import { ISkill, SkillItem } from "./item";

const data: ISkill[] = [
  {
    id: '1',
    title: 'UX & Design',
    description: 'Figma, Adobe XD, Photoshop, Illustrator, Canva, Wireframing, Prototyping, Design Systems, Interaction Design, Web Design',
    img: '/figma_logo.png',
    imgAlt: 'Figma logo'
  },
  {
    id: '2',
    title: 'Programming & Development',
    description: 'HTML/CSS, JavaScript',
    img: '/vscode_logo.png',
    imgAlt: 'VSCode logo'
  },
  {
    id: '3',
    title: 'Tools & Platforms',
    description: 'GitHub, Salesforce, Zendesk, Notion, ClickUp, Microsoft Office',
    img: '/github_logo.png',
    imgAlt: 'Github logo'
  }
]

export function Skills() {
  return (
    <div>
      <SmallTitle>Skills</SmallTitle>
      <p>More than tools, these are the ways I bring ideas to life — blending research, design, and a bit of code to make products that feel human.</p>
      <div>
        {data.map((skill, index) => (
          <Fragment key={skill.id}>
            <SkillItem skill={skill} />
            {data.length - 1 !== index && (<div className="w-full h-[1px] border-t boder border-primary-400" />)}

          </Fragment>
        ))}
      </div>
    </div>
  );
}
