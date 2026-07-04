import { useEffect, useMemo, useRef, useState } from "react";
import "./LeadDateFilter.css";

const PRESETS = [
  { key: "today", label: "Today" },
  { key: "lastWeek", label: "Last 7 Days" },
  { key: "lastMonth", label: "Last 30 Days" },
  { key: "lastYear", label: "Last 365 Days" },
  { key: "custom", label: "Custom" },
];

const toDateInputValue = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatLabelDate = (value) => {
  if (!value) return "";

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const buildPresetRange = (preset) => {
  const today = new Date();
  const endDate = toDateInputValue(today);
  const start = new Date(today);

  if (preset === "today") {
    return {
      preset,
      startDate: endDate,
      endDate,
    };
  }

  if (preset === "lastWeek") {
    start.setDate(start.getDate() - 7);
    return {
      preset,
      startDate: toDateInputValue(start),
      endDate,
    };
  }

  if (preset === "lastMonth") {
    start.setDate(start.getDate() - 30);
    return {
      preset,
      startDate: toDateInputValue(start),
      endDate,
    };
  }

  if (preset === "lastYear") {
    start.setDate(start.getDate() - 365);
    return {
      preset,
      startDate: toDateInputValue(start),
      endDate,
    };
  }

  return {
    preset: "custom",
    startDate: "",
    endDate: "",
  };
};

const buildTriggerLabel = (selection) => {
  if (!selection) {
    return "All Dates";
  }

  const preset = PRESETS.find((item) => item.key === selection.preset);

  if (selection.preset !== "custom" && preset) {
    return preset.label;
  }

  if (selection.startDate && selection.endDate) {
    return `${formatLabelDate(selection.startDate)} - ${formatLabelDate(selection.endDate)}`;
  }

  return "Custom Range";
};

const LeadDateFilter = ({ value, onApply, onClear }) => {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState(value?.preset || "custom");
  const [startDate, setStartDate] = useState(value?.startDate || "");
  const [endDate, setEndDate] = useState(value?.endDate || "");
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setPreset(value?.preset || "custom");
    setStartDate(value?.startDate || "");
    setEndDate(value?.endDate || "");
  }, [value]);

  const triggerLabel = useMemo(() => buildTriggerLabel(value), [value]);

  const handlePresetChange = (nextPreset) => {
    setPreset(nextPreset);

    if (nextPreset === "custom") {
      return;
    }

    const nextRange = buildPresetRange(nextPreset);
    setStartDate(nextRange.startDate);
    setEndDate(nextRange.endDate);
  };

  const handleApply = () => {
    if (preset === "custom") {
      if (!startDate || !endDate) {
        return;
      }

      onApply({
        preset,
        startDate: startDate < endDate ? startDate : endDate,
        endDate: startDate < endDate ? endDate : startDate,
      });
      setOpen(false);
      return;
    }

    onApply(buildPresetRange(preset));
    setOpen(false);
  };

  const handleClear = () => {
    onClear();
    setOpen(false);
  };

  return (
    <div className="lead-date-filter" ref={containerRef}>
      <button
        className={`filter date-filter-trigger ${open ? "open" : ""}`}
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span>{triggerLabel}</span>
        <span className="date-filter-caret">⌄</span>
      </button>

      {open && (
        <div className="date-filter-popover" role="dialog" aria-label="Date filter">
          <div className="date-filter-presets">
            {PRESETS.map((item) => (
              <button
                key={item.key}
                type="button"
                className={preset === item.key ? "active" : ""}
                onClick={() => handlePresetChange(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="date-filter-panel">
            <div className="date-filter-panel__header">
              <strong>Date Range</strong>
              <span>{triggerLabel}</span>
            </div>

            <div className="date-filter-grid">
              <label>
                From
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setPreset("custom");
                    setStartDate(e.target.value);
                  }}
                />
              </label>

              <label>
                To
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    setPreset("custom");
                    setEndDate(e.target.value);
                  }}
                />
              </label>
            </div>

            <div className="date-filter-actions">
              <button type="button" className="clear-btn" onClick={handleClear}>
                Clear
              </button>
              <button type="button" className="apply-btn" onClick={handleApply}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadDateFilter;
