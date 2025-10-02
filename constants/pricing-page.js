// content.js

export const pricingContent = {
  header: {
    title: "Pick Your Plan",
    subtitle: "Use Spatial Pro to expand the number of participants that can join your spaces, increase storage limits, and unlock professional features for your team.",
  },
  toggle: {
    monthly: "Monthly",
    annually: "Annually",
    badge: "Save 20%!",
  },
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "Per Month",
      description: "For testing, prototyping, and casual social use.",
      buttonText: "Get Started",
      theme: "default", // Add this
      features: [
        "Host up to 5 concurrent users across your experiences",
        "500MB of storage per space",
        "Share spaces via public links",
      ],
    },
    {
      name: "Personal",
      price: "$20",
      period: "Per Month",
      description: "Build richer spaces, learn 3D tools, and share your creativity (For personal and non-commercial use).",
      buttonText: "Get Started",
      note: "*Non-commercial use only",
      theme: "default", // Add this
      features: [
        "Unlimited number of spaces",
        "1GB storage per space",
        "Host up to 50 concurrent users across your experiences",
        "Share spaces via public links",
        "Access to a supportive Discord community with 18,000+ creators",
      ],
    },
    {
      name: "Education",
      price: "Custom",
      period: "Per Account / Month",
      description: "For universities and institutions. Foster campus-wide immersive and collaborative learning.",
      buttonText: "Contact Us",
      note: "Everything in Personal",
      theme: "education", // Add this
      features: [
        "Flexible content and team management tools",
        "Real-time insights into student engagement",
        "Hosting service for public-facing 3D showcases",
        "Institution-level security, including SSO and external API integrations",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Per Account / Month",
      description: "For companies, agencies, and brands ready to scale. Host secure, branded 3D experiences.",
      buttonText: "Contact Us",
      note: "Everything in Personal",
      theme: "enterprise", // Add this
      features: [
        "Fully customized content limits and participant capacity",
        "Dedicated white-label features-Full screen mode, Spatial Embed",
        "Enterprise-grade security, including SSO and external API integrations",
        "Personalized onboarding and support",
      ],
    },
  ],
};