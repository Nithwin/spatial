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


const Check = () => '✓';

export const featuresData = {
  title: "Compare Features",
  plans: ["Free", "Personal", "Education", "Enterprise"],
  categories: [
    {
      name: "Security and Privacy",
      features: [
        { name: "Team Management Tools", values: ["", "", <Check />, <Check />] },
        { name: "Single Sign-On (SSO)", values: ["", "", <Check />, <Check />] },
        { name: "Access to SOC 2 + other security documentation", values: ["", "", <Check />, <Check />] },
        { name: "Private / Local Server Hosting", values: ["", "", <Check />, <Check />] },
      ],
    },
    {
      name: "Content",
      features: [
        { name: "File Upload Storage Limit (images, videos, and 3D files)", values: ["500MB (Per Space)", "1000MB (Per Space)", "Custom (Per Space)", "Custom (Per Space)"] },
        { name: "Package Size Limit for Unity-based Spaces", values: ["500MB (Per Space)", "1000MB (Per Space)", "Custom (Per Space)", "Custom (Per Space)"] },
        { name: "3D Space Templates", values: ["Basic Templates", "Advanced Templates", "Advanced Templates", "Advanced Templates"] },
        { name: "Web-based Screen Sharing", values: ["15 Min (Per Space)", "Unlimited", "Unlimited", "Unlimited"] },
        { name: "Stream webcam video", values: ["", <Check />, <Check />, <Check />] },
      ],
    },
    {
      name: "Sharing and Collaboration",
      features: [
        { name: "Concurrent Users (across all spaces)", values: ["5 Users Across All Spaces", "50 Users Across All Spaces", "1000 Users 50 Per Server", "1000 Users 50 Per Server"] },
        { name: "Traffic and Analytics Dashboard", values: ["None", "None", "Custom Mixpanel Dashboards", "Custom Mixpanel Dashboards"] },
        { name: "Host Tools for Event Management", values: [<Check />, <Check />, <Check />, <Check />] },
        { name: "Launch Experience in Full Screen w/ No Ads", values: ["", "", <Check />, <Check />] },
        { name: "Embed Spatial Experiences Into Your Own Website", values: ["", "", <Check />, <Check />] },
        { name: "Connect to External APIs", values: ["", "", <Check />, <Check />] },
        { name: "Remove Spatial branding on embed loading screen", values: ["", "", <Check />, <Check />] },
      ],
    },
    {
      name: "Support",
      features: [
        { name: "Support Channels", values: ["Discord Community Members", "Discord Community Members", "Dedicated Email Support", "Private Slack / Teams Channel"] },
      ],
    },
  ],
};
