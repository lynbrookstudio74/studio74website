export const text = {
  home: {
    title: "A Place for /Everyone/",
    topDesc:
      "Studio 74 is Lynbrook's drama department. We are a group of students who love theatre and are dedicated to creating a welcoming and inclusive environment for all. We produce shows, compete in festivals, and host events. We are a drama family, and we would love for you to join us!",
    clubMtg: "Wednesday Lunch @ Room 74",
    prodDesc:
      "Studio 74 puts on one school-wide production every semester, ranging from musicals to plays, directed and produced by the drama advisor and department lead, Mr. Wenner. We have a variety of roles available, from acting to tech to marketing. All levels of experience are welcome!",
    prodImage: "/prod.png",
    improvDesc:
      "Studio 74's ComedySportz improv team is a major facet of our department. It is our tradition to host multiple Improv Nights every year where our team is split into two groups and compete against each other in a series of games. We also compete in the ComedySportz High School League.",
    improvImage: "/improv.jpg",
    festivalDesc:
      "Studio 74's award-winning students participate annually in festivals such as the Lenaea Theatre Festival, where they compete in various categories such as acting, costumes, makeup, and more. We have won numerous awards and medals for our excellence in theatre.",
    festivalImage: "/lenaea4.jpg",
    disciplineTitle:
      "Merging Together Different Disciplines of Theatre to Create Something... /Spectacular/",
    disciplines: {
      acting: "/lenaea5.jpg",
      costumes: "/costumes.jpg",
      makeup: "/makeup.jpeg",
      props: "/props.jpg",
      marketing: "/marketing.jpg",
      sound: "/sound.jpg",
      lights: "/lights.jpg",
      set: "/set.png",
      stage: "/stageman.jpeg",
      directing: "/directing.jpeg",
    },
    classTitle: "Training the Next Generation of /Thespians/",
    beginningDesc:
      "Beginning Drama gives students an introductory training in acting, with emphasis on voice, movement, improvisation, mental and script preparation, and various acting techniques. The course also includes the history of theatre and its contributions to world cultures, as well as playwriting and directing techniques.",
    beginningImage: "/begdrama.jpg",
    advancedDesc:
      "Advanced Drama is for students who want more advanced training in acting. The course dives deeper into analyzing, performing, and evaluating dramatic works. Additionally, there is continued instruction in voice, staging, and character analysis. Students will rehearse and perform for an audience, and will also have the opportunity to participate in festivals and competitions.",
    advancedImage: "/advdrama.jpg",
    honorsDesc:
      "Advanced Drama Honors is built for those students who are most interested and practiced in studying acting and the theater. Course study will be based on the skills and knowledge developed in the previous Drama courses and will help students to continue on to more advanced levels of dramatic study. Students will be expected to have a solid foundation of dramatic principles and practices.",
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
  external?: boolean;
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
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfzZlWjNhHL6e_hJeE5LbnqgE3qTVCVJLrBK2NzSoiFj7euUA/viewform?usp=sf_link",
    label: "Join The Club",
    external: true,
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
    image: "/team/kelly.jpg",
  },
  {
    name: "Snehil Kakani",
    role: "Head of Sound",
    image: "/team/snehil.jpeg",
  },
];

export const advisor: Lead = {
  name: "Larry Wenner",
  role: "Department Lead, Club Advisor, Executive Producer & Director",
  image: "/team/wenner.jpg",
  bio: "Larry Wenner joined the LHS staff in 2022 to teach Drama. Mr. Wenner received his MFA in Acting/Directing from Cal State Fullerton (a long time ago) and has been teaching English and Drama since 1999. His favorite acting roles from those days include Christian from Cyrano, Valere from Tartuffe, and Romeo. He spent five years at Medieval Times as Sir Lawrence of Shelby (ask him about his jousting wounds). After that, he thought it better to pursue a safer career like teaching high school.",
};

export const officers: Lead[] = [
  {
    name: "Snehil Kakani",
    role: "Co-President",
    image: "/team/snehil.jpeg",
    bio: "What's up? I'm Snehil, and in addition to my passion for acting, I love technology, and I produce music, play video games, and lead the sound team in productions!",
  },
  {
    name: "Charlie Dai",
    role: "Co-President",
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
    bio: "Salutations dear human! I am Emily, apart from acting and marketing; I love to cook, draw, write and sing! :)",
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
    image: "/team/snehil.jpeg",
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
    name: "The Laramie Project",
    subtitle: "Spring 2024",
    image: "/laramie.png",
    link: "",
  },
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

export const currentProduction: {
  title: string;
  description: string;
  image: string;
  display: boolean;
} = {
  display: true,
  title: "Laughing Stock",
  description: `"Laughing Stock" is a hilarious backstage farce and genuinely affectionate look into the world of the theatre. When The Playhouse, a rustic New England summer theatre, schedules a repertory season of Dracula, Hamlet and Charley's Aunt, comic mayhem ensues. We follow the well-intentioned but over-matched company from outrageous auditions to ego-driven rehearsals through opening nights gone disastrously awry to the elation of a great play well told and the comic and nostalgic season close.`,
  image: "/laughingstock.png",
};

export const productionButtons: { title: string; link: string }[] = [
  {
    title: "Audition Information",
    link: "https://instagram.com/lynbrookdrama",
  },
  {
    title: "Join Tech",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdT_NE2Rs2dMkqKMAQyziDGcmdeoOx6i9qUV-itvrRmjhPDYA/viewform?usp=sf_link",
  },
  {
    title: "Ticket Sales",
    link: "https://lynbrook.myschoolcentral.com",
  },
];
