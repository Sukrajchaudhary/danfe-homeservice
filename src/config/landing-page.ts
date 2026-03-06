import {
      Wrench,
      Zap,
      ShieldCheck,
      Clock,
      Users,
      CreditCard,
      CheckCircle2
} from "lucide-react";

export const fadeInUp = {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const staggerContainer = {
      animate: {
            transition: {
                  staggerChildren: 0.1,
            },
      },
};

export const features = [
      {
            icon: Wrench,
            title: "Expert Plumbers",
            slug: "plumbing",
            description:
                  "Connect with certified plumbing professionals for everything from leaks to complete installations.",
            gradient: "from-emerald-500 to-green-500",
      },
      {
            icon: Zap,
            title: "Electrical Services",
            slug: "electrical",
            description:
                  "Safe and reliable electrical repairs and wiring by licensed electricians you can trust.",
            gradient: "from-green-500 to-teal-500",
      },
      {
            icon: ShieldCheck,
            title: "Verified Professionals",
            slug: "verified",
            description:
                  "Every service provider on our platform is background-checked and verified for your peace of mind.",
            gradient: "from-emerald-600 to-green-600",
      },
      {
            icon: Clock,
            title: "On-Time Service",
            slug: "on-time",
            description:
                  "We value your time. Our professionals arrive on schedule and complete jobs efficiently.",
            gradient: "from-green-600 to-emerald-600",
      },
      {
            icon: Users,
            title: "Job Opportunities",
            slug: "jobs",
            description:
                  "Are you a skilled professional? Register, update your profile, and find consistent high-quality jobs.",
            gradient: "from-emerald-400 to-green-400",
      },
      {
            icon: CreditCard,
            title: "Easy Subscriptions",
            slug: "subscriptions",
            description:
                  "Flexible subscription plans for service providers to access premium job leads and tools.",
            gradient: "from-green-400 to-emerald-400",
      },
];

export const pricingPlans = [
      {
            name: "Basic Monthly",
            price: "$19",
            duration: "month",
            description: "Perfect for local independent service professionals starting their journey.",
            features: [
                  "Access up to 20 job leads",
                  "Verified professional badge",
                  "Basic profile analytics",
                  "Standard support",
            ],
            buttonText: "Start Monthly",
            popular: false,
      },
      {
            name: "Pro Yearly",
            price: "$159",
            duration: "year",
            description: "Best value for growing businesses looking for consistent work throughout the year.",
            features: [
                  "Unlimited job leads",
                  "Priority ranking in search",
                  "Advanced business analytics",
                  "24/7 Premium support",
                  "2 months free included",
            ],
            buttonText: "Start Yearly",
            popular: true,
      },
      {
            name: "Enterprise",
            price: "Custom",
            duration: "tailored",
            description: "Comprehensive solutions for service agencies and large maintenance companies.",
            features: [
                  "Multi-account management",
                  "Custom API integrations",
                  "Dedicated account manager",
                  "Volume-based lead pricing",
                  "Customized reporting",
            ],
            buttonText: "Contact Sales",
            popular: false,
      },
];

export const testimonials = [
      {
            name: "Rajesh Sharma",
            role: "Independant Plumber",
            content:
                  "Danfe Home Services has completely transformed my business. I get regular job leads and the payment process is seamless.",
            avatar: "R",
      },
      {
            name: "Anjali Gupta",
            role: "Home Owner",
            content:
                  "Finally a reliable service! I found an amazing electrician in minutes. The green theme is also very refreshing.",
            avatar: "A",
      },
      {
            name: "Suman Thapa",
            role: "Service Provider",
            content:
                  "The subscription plans are very affordable and offer great value. I've seen a 50% increase in my monthly earnings.",
            avatar: "S",
      },
];

export const stats = [
      { value: "5K+", label: "Service Providers" },
      { value: "50K+", label: "Completed Jobs" },
      { value: "4.8/5", label: "User Rating" },
      { value: "24/7", label: "Support" },
];
