type Page = {
  title: string;
  link: string;
};

type Column = {
  title: string;
  pages: Page[];
};

export const columns: Column[] = [
  // {
  //   title: "About",
  //   pages: [
  //     { title: "Our Story", link: "/about/#our-story" },
  //     { title: "Vision and Mission", link: "/about/#vision-mission" },
  //     { title: "Our Divisions", link: "/about/#our-divisions" },
  //   ],
  // },
];
