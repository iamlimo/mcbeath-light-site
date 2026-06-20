import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-secondary),transparent_70%)]" />
      <div className="container-x pt-20 pb-16 md:pt-28 md:pb-20">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.22em] text-primary font-medium"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
