// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-select-open-source-projects",
          title: "select open-source projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "news-obtained-the-cisco-certified-devnet-associate-certification",
          title: 'Obtained the Cisco Certified DevNet Associate certification',
          description: "",
          section: "News",},{id: "news-obtained-the-offensive-security-certified-professional-certification",
          title: 'Obtained the Offensive Security Certified Professional certification',
          description: "",
          section: "News",},{id: "news-obtained-the-cisco-certified-cybersecurity-associate-certification",
          title: 'Obtained the Cisco Certified Cybersecurity Associate certification',
          description: "",
          section: "News",},{id: "news-obtained-the-offensive-security-wireless-professional-certification",
          title: 'Obtained the Offensive Security Wireless Professional certification',
          description: "",
          section: "News",},{id: "news-obtained-the-certified-kubernetes-administrator-certification",
          title: 'Obtained the Certified Kubernetes Administrator certification',
          description: "",
          section: "News",},{id: "news-why-azure-b2c-ropc-custom-flows-are-inherently-insecure",
          title: 'Why Azure B2C ROPC Custom Flows Are Inherently Insecure',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/azure_ropc_custom_flows/";
            },},{id: "news-re-certified-for-the-google-cloud-professional-cloud-security-engineer-certification-certification",
          title: 'Re-certified for the Google Cloud Professional Cloud Security Engineer Certification certification',
          description: "",
          section: "News",},{id: "news-obtained-the-aws-certified-security-specialty-certification",
          title: 'Obtained the AWS Certified Security – Specialty certification',
          description: "",
          section: "News",},{id: "news-obtained-the-certified-aws-cloud-red-team-specialist-certification",
          title: 'Obtained the Certified AWS Cloud Red Team Specialist certification',
          description: "",
          section: "News",},{id: "news-azure-rbac-privilege-escalations-azure-vm",
          title: 'Azure RBAC Privilege Escalations - Azure VM',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/azure_vm_privesc/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%61%6E%67.%61%6E%64%72%65%77.%32%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/timeforchang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/andrchang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
