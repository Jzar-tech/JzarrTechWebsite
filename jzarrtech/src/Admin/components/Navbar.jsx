import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

import {
  FaBars,
  FaDownload,
  FaSyncAlt,
  FaFileCsv,
  FaFilePdf,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = ({
  toggleSidebar,
  onRefresh,
  onExportCsv,
  onExportPdf,
  title = "Lead Management",
  subtitle = "Manage customer inquiries & assignments",
}) => {

  const [showExport, setShowExport] = useState(false);

  const exportRef = useRef(null);

  useEffect(() => {

    const handleClickOutside = (e) => {

      if (
        exportRef.current &&
        !exportRef.current.contains(e.target)
      ) {
        setShowExport(false);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  const exportCSV = () => {

    setShowExport(false);

    if (onExportCsv) {
      onExportCsv();
      return;
    }

    alert("CSV Export");

  };

  const exportPDF = () => {

    setShowExport(false);

    if (onExportPdf) {
      onExportPdf();
      return;
    }

    alert("PDF Export");

  };

  return (

    <header className="admin-navbar">

      <div className="admin-navbar-left">

        <button
          className="hamburger-btn"
          onClick={toggleSidebar}
          type="button"
        >
          <FaBars />
        </button>

        <div>

          <h2>{title}</h2>

          <p>{subtitle}</p>

        </div>

      </div>

      <div className="admin-navbar-right">

        <button
          className="admin-btn secondary"
          onClick={() => {

            if (onRefresh) {
              onRefresh();
              return;
            }

            window.location.reload();

          }}
        >

          <FaSyncAlt />

          Refresh

        </button>

        <div
          className="admin-export"
          ref={exportRef}
        >

          <button
            className="admin-btn primary"
            onClick={() =>
              setShowExport(!showExport)
            }
          >

            <FaDownload />

            Export

            <FaChevronDown
              className={`arrow ${
                showExport ? "rotate" : ""
              }`}
            />

          </button>

          {showExport && (

            <div className="admin-export-menu">

              <button onClick={exportCSV}>

                <FaFileCsv />

                Export CSV

              </button>

              <button onClick={exportPDF}>

                <FaFilePdf />

                Export PDF

              </button>

            </div>

          )}

        </div>

      </div>

    </header>

  );

};

export default Navbar;
