import logoHd from "../../assets/ichu-circle-hd.png";

interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <a
      className={compact ? "brand brand-compact" : "brand brand-image"}
      href="#inicio"
      aria-label="ICHU SmartFarm, inicio"
    >
      {compact ? (
        <span className="compact-brand-text">
          <strong>SMART</strong>
          <em>FARM</em>
        </span>
      ) : (
        <img src={logoHd} alt="ICHU, logo circular" />
      )}
    </a>
  );
}
