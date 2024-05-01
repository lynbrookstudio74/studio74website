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
    name: "Alexis Giaquinta",
    role: "Head of Stage Management",
    image: "/team/alex.jpg",
  },
  {
    name: "Angela Pei",
    role: "Head of Stage Management",
    image: "/team/angela.jpg",
  },
  {
    name: "Charlie Dai",
    role: "Head of Costumes",
    image: "/team/charlie.jpg",
  },
  {
    name: "Gen Yates",
    role: "Head of Costumes & Props",
    image: "/team/gen.jpg",
  },
  {
    name: "Ellie York",
    role: "Head of Costumes & Makeup",
    image: "/team/ellie.jpg",
  },
  {
    name: "Audrey Zhu",
    role: "Head of Costumes, Makeup & Marketing",
    image: "/team/audrey.jpeg",
  },
  {
    name: "Suhaib Shafquat",
    role: "Head of Lights",
    image: "/team/suhaib.jpg",
  },
  {
    name: "Snehil Kakani",
    role: "Head of Sound",
    image: "/team/snehil.webp",
  },
];

export const advisor: Lead = {
  name: "Mr. Larry Wenner",
  role: "Department Lead and Club Advisor",
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
    image: "/team/charlie.jpg",
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
    image: "/team/emily.jpg",
    bio: "Dolore minim laboris laborum fugiat. Deserunt id enim pariatur qui aliquip cupidatat ex dolor aliqua. Mollit id ad consequat nulla proident commodo amet ad ullamco consequat voluptate elit adipisicing. Pariatur elit labore mollit fugiat irure ea minim exercitation qui.",
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
    image: "/team/ellie.jpg",
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
