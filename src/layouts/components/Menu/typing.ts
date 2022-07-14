export interface Menu {
  key: string;
  title: string;
  name?: string;
  icon?: string;
  children?: Menu[];
}
