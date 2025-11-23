import { Fragment } from "react";
import { SmallTitle } from "../small-title";
import { EducationItem } from "./item";


const data: EducationItem[] = [
  {
    id: '1',
    title: 'CODERHOUSE',
    subtitle: 'BS in UX/UI',
    graduationTag: 'Expected Graduation: May 2026'

  },
  {
    id: '2',
    title: 'CODERHOUSE',
    subtitle: 'AFA UX/UI Development',
    graduationTag: '2023-2024'

  },
  {
    id: '3',
    title: 'IU Internationale Hochschule ',
    subtitle: 'BS in Business and IT',
    graduationTag: '2021-2023'

  },
  {
    id: '4',
    title: 'JAMES MADISON',
    subtitle: 'High School Diploma',
    graduationTag: '2020'

  },
]


export function Education() {
  return (
    <div>
      <SmallTitle>Education</SmallTitle>
      <p>Learning has been the backbone of my journey — from business and IT to design, every step has shaped the way I solve problems and build experiences.</p>

      <div>
        {data.map(( item, index ) =>
          <Fragment key={item.id}>
            <EducationItem item={item}/>
            {data.length - 1 !== index && <div className="w-full h-[1px] border-b border-primary-400"/>}

          </Fragment>
        )}
      </div>

    </div>
  );
}
