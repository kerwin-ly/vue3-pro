import { ref, Ref } from 'vue';

type LayoutProps = {
  collapsed: Ref<boolean>;
  toggleCollapsed: (state: boolean) => void;
};

export default function useLayout(): LayoutProps {
  const collapsed = ref(false);

  const toggleCollapsed = (state: boolean): void => {
    collapsed.value = !state;
  };

  return {
    collapsed,
    toggleCollapsed
  };
}
