import type { LoadingButtonProps } from "../types/commonTypes";

export const LoadingButton: React.FC<LoadingButtonProps> = ({
    onClick,
    loading,
    disabled,
    className,
    loadingText,
    children
  }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={loading || disabled}
        className={`${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {loading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>{loadingText}</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  };
  