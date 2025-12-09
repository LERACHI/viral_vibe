import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  iconColor?: string;
  action?: {
    label: string;
    href: string;
  };
}

export const SectionHeader = ({
  title,
  subtitle,
  icon: Icon,
  iconColor = "text-primary",
  action,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon className={`h-6 w-6 ${iconColor}`} />}
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
        </div>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      {action && (
        <Link
          to={action.href}
          className="text-primary font-medium hover:underline underline-offset-4 transition-all"
        >
          {action.label} -&gt;
        </Link>
      )}
    </motion.div>
  );
};
