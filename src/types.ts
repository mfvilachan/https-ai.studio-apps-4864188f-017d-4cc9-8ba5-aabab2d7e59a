export interface HolidayTemplate {
  label: string;
  openings: string[];
  bodies: string[];
  hashtags: string[];
}

export interface GeneratedDraft {
  id: string;
  opening: string;
  body: string;
  hashtags: string[];
}
