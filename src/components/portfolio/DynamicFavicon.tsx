import { useEffect, useRef } from "react";
import { useProfile } from "@/context/ProfileContext";

const FAVICON_SIZE = 32;

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function DynamicFavicon() {
  const profile = useProfile();
  const prevProfileId = useRef<string | null>(null);

  useEffect(() => {
    if (!profile || prevProfileId.current === profile.id) return;
    prevProfileId.current = profile.id;

    document.title = `${profile.name} | Portfolio`;

    const link =
      document.querySelector<HTMLLinkElement>('link[rel="icon"]') ||
      (() => {
        const l = document.createElement("link");
        l.rel = "icon";
        l.type = "image/png";
        document.head.appendChild(l);
        return l;
      })();

    const canvas = document.createElement("canvas");
    canvas.width = FAVICON_SIZE;
    canvas.height = FAVICON_SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initials = getInitials(profile.name);

    const drawInitialsOnly = () => {
      ctx.fillStyle = "hsl(174, 80%, 52%)";
      ctx.beginPath();
      ctx.arc(FAVICON_SIZE / 2, FAVICON_SIZE / 2, FAVICON_SIZE / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "hsl(220, 25%, 6%)";
      ctx.font = "bold 12px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(initials, FAVICON_SIZE / 2, FAVICON_SIZE / 2);
      link.href = canvas.toDataURL("image/png");
    };

    if (profile.profileImage) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(FAVICON_SIZE / 2, FAVICON_SIZE / 2, FAVICON_SIZE / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        const scale = Math.max(
          FAVICON_SIZE / img.width,
          FAVICON_SIZE / img.height
        );
        const w = img.width * scale;
        const h = img.height * scale;
        ctx.drawImage(
          img,
          (FAVICON_SIZE - w) / 2,
          (FAVICON_SIZE - h) / 2,
          w,
          h
        );
        ctx.restore();
        link.href = canvas.toDataURL("image/png");
      };
      img.onerror = drawInitialsOnly;
      img.src = profile.profileImage;
    } else {
      drawInitialsOnly();
    }
  }, [profile]);

  return null;
}
