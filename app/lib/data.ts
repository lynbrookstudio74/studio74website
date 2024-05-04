export type NavLink = {
  href: string;
  label: string;
};
export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/productions",
    label: "Productions",
  },
];

export type Head = {
  name: string;
  role: string;
  image: string;
};

export type Lead = Head & { bio: string };

export const productionHeads: Head[] = [
  {
    name: "Charlie Dai",
    role: "Head of Stage Management",
    image: "/team/charlie.png",
  },
  {
    name: "Gen Yates",
    role: "Head of Costumes & Props",
    image: "/team/gen.jpg",
  },
  {
    name: "Ellie York",
    role: "Head of Costumes & Makeup",
    image: "/team/ellie.png",
  },
  {
    name: "Audrey Zhu",
    role: "Head of Costumes, Makeup & Marketing",
    image: "/team/audrey.jpeg",
  },
  {
    name: "Kelly Wu",
    role: "Head of Lights",
    image: "",
  },
  {
    name: "Snehil Kakani",
    role: "Head of Sound",
    image: "/team/snehil.webp",
  },
];

export const advisor: Lead = {
  name: "Mr. Larry Wenner",
  role: "Department Lead, Club Advisor, Executive Producer & Director",
  image: "/team/wenner.jpg",
  bio: "Dolore minim laboris laborum fugiat. Deserunt id enim pariatur qui aliquip cupidatat ex dolor aliqua. Mollit id ad consequat nulla proident commodo amet ad ullamco consequat voluptate elit adipisicing. Pariatur elit labore mollit fugiat irure ea minim exercitation qui.",
};

export const officers: Lead[] = [
  {
    name: "Snehil Kakani",
    role: "President",
    image: "/team/snehil.webp",
    bio: "Dolore minim laboris laborum fugiat. Deserunt id enim pariatur qui aliquip cupidatat ex dolor aliqua. Mollit id ad consequat nulla proident commodo amet ad ullamco consequat voluptate elit adipisicing. Pariatur elit labore mollit fugiat irure ea minim exercitation qui.",
  },
  {
    name: "Charlie Dai",
    role: "Vice President of Operations",
    image: "/team/charlie.png",
    bio: "Dolore minim laboris laborum fugiat. Deserunt id enim pariatur qui aliquip cupidatat ex dolor aliqua. Mollit id ad consequat nulla proident commodo amet ad ullamco consequat voluptate elit adipisicing. Pariatur elit labore mollit fugiat irure ea minim exercitation qui.",
  },
  {
    name: "Saakshi Athreya",
    role: "Vice President of Events",
    image: "/team/saakshi.jpg",
    bio: "Dolore minim laboris laborum fugiat. Deserunt id enim pariatur qui aliquip cupidatat ex dolor aliqua. Mollit id ad consequat nulla proident commodo amet ad ullamco consequat voluptate elit adipisicing. Pariatur elit labore mollit fugiat irure ea minim exercitation qui.",
  },
  {
    name: "Emily Xu",
    role: "Publicist",
    image: "/team/emily.png",

    bio: "Dolore minim laboris laborum fugiat. Deserunt id enim pariatur qui aliquip cupidatat ex dolor aliqua. Mollit id ad consequ at nulla proident commodo amet ad ullamco consequat voluptate elit adipisicing. Pariatur elit labore mollit fugiat irure ea minim exercitation qui.",
  },
  {
    name: "Eric Szewczyk",
    role: "Secretary",
    image: "/team/eric.jpg",
    bio: "Dolore minim laboris laborum fugiat. Deserunt id enim pariatur qui aliquip cupidatat ex dolor aliqua. Mollit id ad consequat nulla proident commodo amet ad ullamco consequat voluptate elit adipisicing. Pariatur elit labore mollit fugiat irure ea minim exercitation qui.",
  },
  {
    name: "Ellie York",
    role: "Treasurer",
    image: "/team/ellie.png",
    bio: "Dolore minim laboris laborum fugiat. Deserunt id enim pariatur qui aliquip cupidatat ex dolor aliqua. Mollit id ad consequat nulla proident commodo amet ad ullamco consequat voluptate elit adipisicing. Pariatur elit labore mollit fugiat irure ea minim exercitation qui.",
  },
];

export const improvCaptains: Head[] = [
  {
    name: "Snehil Kakani",
    role: "Improv Co-Captain",
    image: "/team/snehil.webp",
  },
  {
    name: "Eric Szewczyk",
    role: "Improv Co-Captain",
    image: "/team/eric.jpg",
  },
];

export type Production = {
  name: string;
  image: string;
  link: string;
  subtitle: string;
};

export const pastProductions: Production[] = [
  {
    name: "Ranked: The Musical",
    subtitle: "Fall 2023",
    image: "/ranked.png",
    link: "https://youtu.be/LKQmaYzCqIk",
  },
  {
    name: "Clue: On Stage",
    image: "/clue.png",
    subtitle: "Spring 2023",
    link: "https://youtu.be/LKQmaYzCqIk",
  },
  {
    name: "The Lion in Winter",
    subtitle: "Fall 2022",
    image: "/lioninwinter.png",
    link: "https://youtu.be/Q5i8JM3NRQQ",
  },
  {
    name: "Romeo & Juliet",
    image: "/rj.png",
    subtitle: "Spring 2022",
    link: "https://youtu.be/Q5i8JM3NRQQ",
  },
];

export const productionButtons: { title: string; link: string }[] = [
  {
    title: "Audition Information",
    link: "",
  },
  {
    title: "Join Tech",
    link: "",
  },
  {
    title: "Ticket Sales",
    link: "https://lynbrook.myschoolcentral.com",
  },
];
