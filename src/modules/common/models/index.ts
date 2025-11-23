export interface IProjectComponent {
  id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>
}
export interface IProject {
  tags: string[];
  name: string;
  description: string;
  descriptors: Record<string, string>;
  components: IProjectComponent[];
}
