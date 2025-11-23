import { IProjectComponent } from "@/modules/common/models";
import { COMPONENT_MAP } from "./const";


interface ComponentBuilderProps {
  component: IProjectComponent;
}
export function ComponentBuilder({component: {name, props}} : ComponentBuilderProps) {

  const Component = COMPONENT_MAP[name as keyof typeof COMPONENT_MAP];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Component {...props as any}/>

}
