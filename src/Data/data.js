const bannerArray = [
  {
    id: "banner1",
    id_no: 1,
    text: "This is the first banner area",
    button1: true,
    btn_typ: "redirect",
    btn_name: "Banner",
    link: "/redirect1",
  },
  {
    id: "banner2",
    id_no: 2,
    text: "This is the second banner area",
    button1: true,
    btn_typ: "redirect",
    btn_name: "Banner",
    link: "/redirect2",
  },
  {
    id: "banner3",
    id_no: 3,
    text: "This is the third banner area",
    button: false,
  },
];
const sectionArray = [
  {
    id: "section 1",
    sec_no: 1,
    title: "Section One",
    cN: "one-section",
  },
  {
    id: "section2",
    sec_no: 2,
    title: "Section Two",
    cN: "two-section",
  },
  {
    id: "section3",
    sec_no: 3,
    title: "Section Three",
    cN: "three-section",
  },
];
const cardArray = [
  {
    id: "card1",
    cursor: false,
    parent_sec_no: 1,
    card_no: 1,
    parent_sec: "section1",
    card_title: "Title AA",
    data: true,
    data_type: "progress",
    progress: 65,
    link1: true,
    link_name: "link is here",
    redirect: "aa",
  },
  {
    id: "card2",
    cursor: true,
    permeant: true,
    parent_sec: "section1",
    parent_sec_no: 1,
    card_no: 2,
    card_title: "Title AB",
    data: true,
    data_type: "number",
    number: 10,
    button1: true,
    button_name: "Button AB",
    link0: false,
    redirect: "ab",
    note: "Note added here",
  },
  {
    id: "card3",
    cursor: true,
    permeant: true,
    parent_sec: "section1",
    parent_sec_no: 1,
    card_no: 3,
    card_title: "Title AC",
    data: true,
    data_type: "number",
    number: 17,
    button1: true,
    button_name: "Button AC",
    link0: false,
    redirect: "ac",
    note: "Note added here",
  },
  {
    id: "card4",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 4,
    card_title: "Title BA",
    data: true,
    data_type: "number",
    number: 5,
    button1: true,
    button_name: "Button BA",
    link: false,
    redirect: "ba",
  },
  {
    id: "card5",
    cursor: false,
    parent_sec_no: 2,
    card_no: 5,
    parent_sec: "section2",
    card_title: "Title BB",
    data: true,
    data_type: "number",
    number: 8,
    link1: true,
    link_name: "link is here",
    redirect: "bb",
  },
  {
    id: "card6",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 6,
    card_title: "Title BC",
    data: true,
    data_type: "text",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    button1: true,
    button_name: "Button BC",
    link: false,
    redirect: "bc",
    note: "Note added here",
  },
  {
    id: "card7",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 7,
    card_title: "Title BC",
    data: true,
    data_type: "tags",
    tags: ["tag1, tag2, TAG3, tags4, tagsr"],
    button1: true,
    button_name: "Button BC",
    link: false,
    redirect: "bc",
    note: "Note added here",
  },
  {
    id: "card8",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 8,
    card_title: "Title BD",
    data: true,
    data_type: "text",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    button1: true,
    button_name: "Button BD",
    link: false,
    redirect: "bd",
    note: "Note added here",
  },
  {
    id: "card9",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 9,
    card_title: "Title BE",
    button1: true,
    button_name: "Button BE",
    data: false,
    link: false,
    redirect: "be",
    note: "Note added here",
  },
  {
    id: "card10",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 10,
    card_title: "Title CA",
    button1: true,
    data: true,
    data_type: "tags",
    tags: ["tag1, tag2, TAG3, tags4, tagsr", "tag1, tag2, TAG3, tags4, tagsr"],
    button_name: "Button CA",
    link: false,
    redirect: "ca",
    note: "Note added here",
  },
  {
    id: "card11",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 11,
    card_title: "Title CB",
    button1: true,
    data: true,
    data_type: "image",
    img: "https://i.ibb.co/XxstWC6/large-1x-Free-Vector-Halftone-Waves-Backgroundyc0323-generated.jpg",
    button_name: "Button CB",
    link: false,
    redirect: "cb",
    note: "Note added here",
  },
  {
    id: "card12",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 12,
    card_title: "Title CC",
    button: false,
    link: false,
    note: "Note added here",
  },
  {
    id: "card13",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 13,
    card_title: "Title CD",
    data: true,
    data_type: "number",
    number: 15,
    note: "Note added here",
  },
  {
    id: "card14",
    cursor: false,
    parent_sec_no: 2,
    card_no: 14,
    parent_sec: "section3",
    card_title: "Title CE",
    button: false,
    link1: true,
    data: true,
    data_type: "number",
    number: 10,
    link_name: "link is here",
    redirect: "ce",
  },
  {
    id: "card15",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 15,
    card_title: "Title CF",
    button1: true,
    button_name: "Button CF",
    link0: false,
    redirect: "cf",
    note: "Note added here",
  },
  {
    id: "card16",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 16,
    card_title: "Title CG",
    button1: true,
    button_name: "Button CG",
    link0: false,
    redirect: "cg",
    note: "Note added here",
  },
];
export const tab1 = [
  {
    id: "card1",
    cursor: false,
    parent_sec_no: 1,
    card_no: 1,
    parent_sec: "section1",
    card_title: "Title AA",
    data: true,
    data_type: "progress",
    progress: 65,
    link1: true,
    link_name: "link is here",
    redirect: "aa",
  },
  {
    id: "card2",
    cursor: true,
    permeant: true,
    parent_sec: "section1",
    parent_sec_no: 1,
    card_no: 2,
    card_title: "Title AB",
    data: true,
    data_type: "number",
    number: 10,
    button1: true,
    button_name: "Button AB",
    link0: false,
    redirect: "ab",
    note: "Note added here",
  },
  {
    id: "card3",
    cursor: true,
    permeant: true,
    parent_sec: "section1",
    parent_sec_no: 1,
    card_no: 3,
    card_title: "Title AC",
    data: true,
    data_type: "number",
    number: 17,
    button1: true,
    button_name: "Button AC",
    link0: false,
    redirect: "ac",
    note: "Note added here",
  },
];

export const tab3 = [
  {
    id: "card10",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 10,
    card_title: "Title CA",
    button1: true,
    data: true,
    data_type: "tags",
    tags: ["tag1, tag2, TAG3, tags4, tagsr", "tag1, tag2, TAG3, tags4, tagsr"],
    button_name: "Button CA",
    link: false,
    redirect: "ca",
    note: "Note added here",
  },
  {
    id: "card11",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 11,
    card_title: "Title CB",
    button1: true,
    data: true,
    data_type: "image",
    img: "https://i.ibb.co/XxstWC6/large-1x-Free-Vector-Halftone-Waves-Backgroundyc0323-generated.jpg",
    button_name: "Button CB",
    link: false,
    redirect: "cb",
    note: "Note added here",
  },
  {
    id: "card12",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 12,
    card_title: "Title CC",
    button: false,
    link: false,
    note: "Note added here",
  },
  {
    id: "card13",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 13,
    card_title: "Title CD",
    data: true,
    data_type: "number",
    number: 15,
    note: "Note added here",
  },
  {
    id: "card14",
    cursor: false,
    parent_sec_no: 2,
    card_no: 14,
    parent_sec: "section3",
    card_title: "Title CE",
    button: false,
    link1: true,
    data: true,
    data_type: "number",
    number: 10,
    link_name: "link is here",
    redirect: "ce",
  },
  {
    id: "card15",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 15,
    card_title: "Title CF",
    button1: true,
    button_name: "Button CF",
    link0: false,
    redirect: "cf",
    note: "Note added here",
  },
  {
    id: "card16",
    cursor: true,
    permeant: true,
    parent_sec: "section3",
    parent_sec_no: 3,
    card_no: 16,
    card_title: "Title CG",
    button1: true,
    button_name: "Button CG",
    link0: false,
    redirect: "cg",
    note: "Note added here",
  },
];
export const tab2 = [
  {
    id: "card4",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 4,
    card_title: "Title BA",
    data: true,
    data_type: "number",
    number: 5,
    button1: true,
    button_name: "Button BA",
    link: false,
    redirect: "ba",
  },
  {
    id: "card5",
    cursor: false,
    parent_sec_no: 2,
    card_no: 5,
    parent_sec: "section2",
    card_title: "Title BB",
    data: true,
    data_type: "number",
    number: 8,
    link1: true,
    link_name: "link is here",
    redirect: "bb",
  },
  {
    id: "card6",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 6,
    card_title: "Title BC",
    data: true,
    data_type: "text",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    button1: true,
    button_name: "Button BC",
    link: false,
    redirect: "bc",
    note: "Note added here",
  },
  {
    id: "card7",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 7,
    card_title: "Title BC",
    data: true,
    data_type: "tags",
    tags: ["tag1, tag2, TAG3, tags4, tagsr"],
    button1: true,
    button_name: "Button BC",
    link: false,
    redirect: "bc",
    note: "Note added here",
  },
  {
    id: "card8",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 8,
    card_title: "Title BD",
    data: true,
    data_type: "text",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    button1: true,
    button_name: "Button BD",
    link: false,
    redirect: "bd",
    note: "Note added here",
  },
  {
    id: "card9",
    cursor: true,
    permeant: true,
    parent_sec: "section2",
    parent_sec_no: 2,
    card_no: 9,
    card_title: "Title BE",
    button1: true,
    button_name: "Button BE",
    data: false,
    link: false,
    redirect: "be",
    note: "Note added here",
  },
];

export { bannerArray, sectionArray, cardArray };
