type PricingCategory =
  | "Web hosting"
  | "Email hosting"
  | "Wordpress hosting"
  | "LiteSpeed hosting";

export const pricingData: Record<
  PricingCategory,
  {
    title: string;
    plans: {
      type: string;
      desc: string;
      price: string;
      mostPopular?: boolean;
      benefits: string[];
    }[];
  }
> = {
  "Web hosting": {
    title: "Web Hosting",
    plans: [
      {
        type: "Starter",
        desc: "Perfect for personal sites",
        price: "$2.99",
        benefits: [
          "Free .com.ng Domain",
          "Free SitePro sitebuilder",
          "20 GB SSD Storage",
          "2 Websites",
          "25 Email Accounts",
          "5 Subdomains",
        ],
      },
      {
        type: "Business",
        desc: "For growing projects",
        price: "$5.99",
        mostPopular: true,
        benefits: [
          "Free .com.ng Domain",
          "Free SitePro sitebuilder",
          "40 GB SSD Storage",
          "5 Websites",
          "100 Email Accounts",
          "100 Subdomains",
        ],
      },
      {
        type: "Pro",
        desc: "Advanced features & scale",
        price: "$9.99",
        benefits: [
          "Free .com.ng Domain",
          "Free SitePro sitebuilder",
          "100 GB SSD Storage",
          "10 Websites",
          "Unlimited Email Accounts",
          "500 Subdomains",
        ],
      },
    ],
  },
  "Email hosting": {
    title: "Email Hosting",
    plans: [
      {
        type: "Starter",
        desc: "",
        price: "$2.99",
        benefits: [
          "1 Free .com.ng Domain",
          "10GB SSD Storage",
          "5 Email Accounts",
          "Webmail Access",
          "POP3, IMAP, SMTP",
          "5 Subdomains",
          "Daily Backups",
          "DirectAdmin Control Panel",
        ],
      },
      {
        type: "Basic",
        desc: "",
        price: "$5.99",
        mostPopular: true,
        benefits: [
          "1 Free .com.ng Domain",
          "20GB SSD Storage",
          "20 Email Accounts",
          "Webmail Access",
          "POP3, IMAP, SMTP",
          "5 Subdomains",
          "Daily Backups",
          "DirectAdmin Control Panel",
        ],
      },
      {
        type: "Premium",
        desc: "",
        price: "$9.99",
        benefits: [
          "1 Free .com.ng Domain",
          "40GB SSD Storage",
          "50 Email Accounts",
          "Webmail Access",
          "POP3, IMAP, SMTP",
          "5 Subdomains",
          "Daily Backups",
          "DirectAdmin Control Panel",
        ],
      },
    ],
  },
  "Wordpress hosting": {
    title: "WordPress Hosting",
    plans: [
      {
        type: "Starter",
        desc: "",
        price: "$2.99",
        benefits: [
          "Free .com.ng Domain",
          "20 GB SSD Storage",
          "1 Website",
          "100 Subdomains",
          "25 Email Accounts",
          "1 FTP Account",
          "5 MySQL Databases",
          "Free Let's Encrypt SSL",
          "Free Daily Backups",
          "Unlimited bandwidth",
          "DirectAdmin Control Panel",
          "Free AI Site sitebuilder",
        ],
      },
      {
        type: "Basic",
        desc: "",
        price: "$5.99",
        mostPopular: true,
        benefits: [
          "Free .com.ng Domain",
          "40 GB SSD Storage",
          "2 Websites",
          "100 Subdomains",
          "25 Email Accounts",
          "1 FTP Account",
          "50 MySQL Databases",
          "Free Let's Encrypt SSL",
          "Free Daily Backups",
          "Unlimited bandwidth",
          "DirectAdmin Control Panel",
          "Free AI Site sitebuilder",
        ],
      },
      {
        type: "Premium",
        desc: "",
        price: "$9.99",
        benefits: [
          "Free .com.ng Domain",
          "100 GB SSD Storage",
          "3 Websites",
          "500 Subdomains",
          "Unlimited Email Accounts",
          "1 FTP Account",
          "Unlimited MySQL Databases",
          "Free Let's Encrypt SSL",
          "Free Daily Backups",
          "Unlimited bandwidth",
          "DirectAdmin Control Panel",
          "Free AI Site sitebuilder",
        ],
      },
    ],
  },
  "LiteSpeed hosting": {
    title: "LiteSpeed Hosting",
    plans: [
      {
        type: "Starter",
        desc: "",
        price: "$2.99",
        benefits: [
          "20 GB SSD Storage",
          "Host 1 Domain",
          "100 Subdomains",
          "25 Email Accounts",
          "1 FTP Account",
          "5 MySQL Databases",
        ],
      },
      {
        type: "Basic",
        desc: "",
        price: "$5.99",
        mostPopular: true,
        benefits: [
          "40 GB SSD Storage",
          "Host 2 Domain",
          "100 Subdomains",
          "100 Email Accounts",
          "1 FTP Account",
          "50 MySQL Databases",
        ],
      },
      {
        type: "Premium",
        desc: "",
        price: "$9.99",
        benefits: [
          "100 GB SSD Storage",
          "Host 3 Domain",
          "500 Subdomains",
          "Unlimited Email Accounts",
          "5 FTP Accounts",
          "5 MySQL Databases",
        ],
      },
    ],
  },
};
