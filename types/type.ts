export type Tquestions = {
  CS: string[];
  TS: string[];
  JS: string[];
  "HTML/CSS": string[];
  React: string[];
  project: string[];
  basics: string[];
};

export type QuestionItem = {
  question: string;
  category: keyof Tquestions;
};

export type TProps = {
  idx: number;
  category: string;
  question: string;
};
