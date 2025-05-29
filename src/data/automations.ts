export type AutomationCard = {
  title: string;
  subtitle: string;
  icon: string; // icon name from lucide or path to brand logo
};

export const automations: AutomationCard[] = [
  {
    title: "TikTok Comment Scraper → CRM",
    subtitle: "Track engagement & log qualified leads.",
    icon: "tiktok",
  },
  {
    title: "Auto-Send DMs Based on Hashtag Activity",
    subtitle: "Reach users the moment they engage.",
    icon: "send",
  },
  {
    title: "Leads → CRM → Auto Email",
    subtitle: "Inbound routing without delay.",
    icon: "mail",
  },
  {
    title: "Slack Alerts for High-Value Leads",
    subtitle: "Notify your team instantly and follow up fast.",
    icon: "slack",
  },
];
