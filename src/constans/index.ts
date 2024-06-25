import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
  "FULL-TIME",
  "PART-TIME",
  "REMOTE",
  "INTERSHIP",
];

export const JOB_LISTING_COLUMNS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applications",
  "Needs",
];

export const JOB_LISTING_DATA = [
  {
    roles: "Sofware Engineer",
    status: "Live",
    datePosted: "12 Aug 2023",
    dueDate: "12 Sep 2023",
    jobType: "Full Time",
    applicants: 1,
    needs: 10,  
  },
];
