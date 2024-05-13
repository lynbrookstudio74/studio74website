export const text = {
  home: {
    title: "A Place for /Everyone/",
    topDesc:
      "Aliqua laboris non excepteur adipisicing ex enim cillum. Cupidatat aliqua enim velit ut reprehenderit ex aute nostrud anim proident mollit tempor ullamco. Consectetur cupidatat nisi excepteur duis laborum est laborum. Do culpa pariatur velit labore reprehenderit. Irure elit cillum in magna do quis ut qui cillum cillum duis.",
    clubMtg: "Wednesday Lunch @ Room 74",
    prodDesc:
      "Pariatur proident excepteur nisi labore. Esse fugiat sit mollit ut id cillum nostrud. Eiusmod fugiat ea cillum ad ipsum ullamco officia irure in mollit incididunt cupidatat reprehenderit officia. Sunt dolor incididunt commodo dolor ut sit. Cupidatat fugiat occaecat elit voluptate fugiat eu duis. Eu mollit adipisicing magna in.",
    prodImage: "/prod.png",
    improvDesc:
      "Pariatur proident excepteur nisi labore. Esse fugiat sit mollit ut id cillum nostrud. Eiusmod fugiat ea cillum ad ipsum ullamco officia irure in mollit incididunt cupidatat reprehenderit officia. Sunt dolor incididunt commodo dolor ut sit. Cupidatat fugiat occaecat elit voluptate fugiat eu duis. Eu mollit adipisicing magna in.",
    improvImage: "/improv.jpg",
    festivalDesc:
      "Pariatur proident excepteur nisi labore. Esse fugiat sit mollit ut id cillum nostrud. Eiusmod fugiat ea cillum ad ipsum ullamco officia irure in mollit incididunt cupidatat reprehenderit officia. Sunt dolor incididunt commodo dolor ut sit. Cupidatat fugiat occaecat elit voluptate fugiat eu duis. Eu mollit adipisicing magna in.",
    festivalImage: "/lenaea4.jpg",
    disciplineTitle:
      "Merging Together Different Disciplines of Theatre to Create Something... /Spectacular/",
    disciplines: {
      acting: "/lenaea5.jpg",
      costumes: "/costumes.jpg",
      makeup: "/makeup.jpeg",
      props: "/lenaea1.jpg",
      marketing: "/marketing.jpg",
      sound: "/sound.jpg",
      lights: "/lights.jpg",
      set: "/set.png",
      stage: "/stageman.jpeg",
      directing: "/directing.jpeg",
    },
    classTitle: "Training the Next Generation of /Thespians/",
    beginningDesc:
      "Pariatur proident excepteur nisi labore. Esse fugiat sit mollit ut id cillum nostrud. Eiusmod fugiat ea cillum ad ipsum ullamco officia irure in mollit incididunt cupidatat reprehenderit officia. Sunt dolor incididunt commodo dolor ut sit. Cupidatat fugiat occaecat elit voluptate fugiat eu duis. Eu mollit adipisicing magna in.",
    beginningImage: "/prod.png",
    advancedDesc:
      "Pariatur proident excepteur nisi labore. Esse fugiat sit mollit ut id cillum nostrud. Eiusmod fugiat ea cillum ad ipsum ullamco officia irure in mollit incididunt cupidatat reprehenderit officia. Sunt dolor incididunt commodo dolor ut sit. Cupidatat fugiat occaecat elit voluptate fugiat eu duis. Eu mollit adipisicing magna in.",
    advancedImage: "/advdrama.jpeg",
    honorsDesc:
      "Pariatur proident excepteur nisi labore. Esse fugiat sit mollit ut id cillum nostrud. Eiusmod fugiat ea cillum ad ipsum ullamco officia irure in mollit incididunt cupidatat reprehenderit officia. Sunt dolor incididunt commodo dolor ut sit. Cupidatat fugiat occaecat elit voluptate fugiat eu duis. Eu mollit adipisicing magna in.",
    honorsImage: "/advh.jpg",
    awardsTitle: "Recognized for Excellence in /Theatre/",
    awards: [
      {
        title: "Bronze Medal in Costume Design",
        subtitle: "Lenaea Theatre Festival 2024",
        image: "/placeholder.webp",
      },
      {
        title: "Bronze Medal in Costume Design",
        subtitle: "Lenaea Theatre Festival 2024",
        image: "/placeholder.webp",
      },
      {
        title: "Bronze Medal in Costume Design",
        subtitle: "Lenaea Theatre Festival 2024",
        image: "/placeholder.webp",
      },
      {
        title: "Bronze Medal in Costume Design",
        subtitle: "Lenaea Theatre Festival 2024",
        image: "/placeholder.webp",
      },
      {
        title: "Bronze Medal in Costume Design",
        subtitle: "Lenaea Theatre Festival 2024",
        image: "/placeholder.webp",
      },
    ],
  },
};

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
    bio: "Hey, I'm Snehil! In addition to my passion for acting, I love technology, and produce music, play video games, and lead the sound team in productions!",
  },
  {
    name: "Charlie Dai",
    role: "Vice President of Operations",
    image: "/team/charlie.png",
    bio: "Hi!! My name is Charlie! I am apart of the stage management and costume teams for drama productions! Besides that, I love poetry, video games, and photography!",
  },
  {
    name: "Saakshi Athreya",
    role: "Vice President of Events",
    image: "/team/saakshi.jpg",
    bio: "Hi, I'm Saakshi! Other than being part of the crew, I love to sing and make music! I am also so excited to be an officer this year!",
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
    bio: "Hello, I'm Eric. I love dancing, singing, acting, and fashion design! I also enjoy learning, and shockingly enough, talking to people. I dare you to try and pronounce my last name >:)",
  },
  {
    name: "Ellie York",
    role: "Treasurer",
    image: "/team/ellie.png",
    bio: "Hi, I'm Ellie! Beyond tech, I enjoy thrifting, Pompompurin, Olivia Rodrigo, sleeping, nail art, makeup, and glitter!",
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
