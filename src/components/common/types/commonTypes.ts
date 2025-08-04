export interface LoadingButtonProps {
    onClick: () => void;
    loading: boolean;
    disabled?: boolean;
    className: string;
    loadingText: string;
    children: React.ReactNode;
  }
  