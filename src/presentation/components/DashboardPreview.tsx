import type { LandingContent } from "../../domain/landing/LandingContent";
import { LineIcon } from "./LineIcon";

interface DashboardPreviewProps {
  content: LandingContent;
}

export function DashboardPreview({ content }: DashboardPreviewProps) {
  return (
    <div
      className="hero-visual"
      aria-label="SmartFarm live herd monitoring preview"
    >
      <div className="field-mark field-mark-one">
        N 06° 12’ 48”
        <br />W 75° 34’ 11”
      </div>
      <div className="field-mark field-mark-two">POTRERO 03</div>

      <div className="dashboard-card">
        <div className="dashboard-top">
          <span className="live-dot" />
          {content.liveLabel}
          <span className="dashboard-time">09:41:26</span>
        </div>

        <div className="dashboard-map">
          <div className="map-contour contour-a" />
          <div className="map-contour contour-b" />
          <div className="map-path" />
          <span className="map-cow cow-a">●</span>
          <span className="map-cow cow-b">●</span>
          <span className="map-cow cow-c">●</span>
          <div className="map-label">
            Lote Norte
            <small>24° · 62%</small>
          </div>
        </div>

        <div className="dashboard-readings">
          <Reading
            icon="pulse"
            label="Temperatura"
            value="38.4°"
            note="normal"
          />
          <Reading
            icon="pin"
            label="Animales activos"
            value="128"
            note="+4 hoy"
          />
          <Reading
            icon="drop"
            label="Agua disponible"
            value="86%"
            note="estable"
          />
        </div>
      </div>

      <div className="visual-caption">
        <span className="caption-line" />
        <span>{content.status}</span>
      </div>
    </div>
  );
}

interface ReadingProps {
  icon: "pulse" | "pin" | "drop";
  label: string;
  value: string;
  note: string;
}

function Reading({ icon, label, value, note }: ReadingProps) {
  return (
    <div>
      <LineIcon type={icon} />
      <small>{label}</small>
      <strong>
        {value} <i>{note}</i>
      </strong>
    </div>
  );
}
