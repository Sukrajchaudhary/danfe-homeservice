"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCategoryCardProps {
  title: string;
  slug: string;
  description: string;
  features: string[];
  gradient: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceCategoryCard({
  title,
  slug,
  description,
  features,
  gradient,
  icon: Icon,
  index,
}: ServiceCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/services/${slug}`}>
        <Card className="group relative overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 h-full cursor-pointer">
          <CardContent className="p-6">
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${gradient} shadow-lg mb-4`}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {description}
            </p>
            <ul className="space-y-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <div className="absolute inset-0 bg-linear-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Card>
      </Link>
    </motion.div>
  );
}
