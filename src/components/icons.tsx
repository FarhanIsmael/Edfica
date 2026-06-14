import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

export type HugeIcon = IconSvgElement;

export function AppIcon({ icon, size = 18, className, title }: { icon: HugeIcon; size?: number; className?: string; title?: string }) {
  return <HugeiconsIcon icon={icon} size={size} strokeWidth={2} color="currentColor" className={className} aria-hidden={title ? undefined : true} aria-label={title} />;
}
