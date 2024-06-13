export interface Page {
  title: string;
  path: string;
  icon: () => JSX.Element;
}