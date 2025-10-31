// Component: DisplayTypeSwitch

// Imports
"use client";

// Props
export type DisplayType = "chart" | "table";
export type DisplaySwitchProps = {
  value: DisplayType;
  onChange?: (newValue: DisplayType) => void;
  testId?: string;
};

export const DisplaySwitch = (props: DisplaySwitchProps) => {
  const { value, onChange, testId } = props;
  // Props
  // States
  // Hooks
  // Effects
  // Other functions
  const handleToggle = (newValue: DisplayType) => {
    if (onChange && newValue !== value) {
      onChange(newValue);
    }
  };
  // Render
  return (
    <div
      data-testid={testId}
      className={
        "inline-flex items-center rounded-md border bg-background p-1 gap-1 w-full sm:w-auto"
      }
    >
      <button
        type="button"
        className={`inline-flex items-center justify-center gap-2 rounded-sm px-3 py-1.5 text-sm transition-colors flex-1 sm:flex-initial cursor-pointer ${
          value === "table"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        }`}
        onClick={() => handleToggle("table")}
        aria-label="Table view"
        title="Table"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
        Table
      </button>
      <button
        type="button"
        className={`inline-flex items-center justify-center gap-2 rounded-sm px-3 py-1.5 text-sm transition-colors flex-1 sm:flex-initial cursor-pointer ${
          value === "chart"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        }`}
        onClick={() => handleToggle("chart")}
        aria-label="Chart view"
        title="Chart"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 17 8 12 13 14 21 6" />
          <circle cx="8" cy="12" r="1" />
          <circle cx="13" cy="14" r="1" />
          <circle cx="21" cy="6" r="1" />
        </svg>
        Chart
      </button>
    </div>
  );
};

// Default export
export default DisplaySwitch;
