import { z } from "zod";
import { JOBTYPES } from "../constans/index";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job Title Harus Di Isi" })
    .min(3, { message: "Job Title harus Lebih Dari 3 Character" }),
  jobType: z.enum(JOBTYPES, {
    required_error: "Harus Pilih Satu Pilihan Pekerjaan",
  }),
  salaryForm: z.string({ required_error: "Salary Harus Di Isi" }),
  categoryId: z.string({ required_error: "Harus Pilih Salah Satu Category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Isi Skill Pekerjaan Anda" }),
  jobDescription: z
    .string({ required_error: "Job Description Harus Di Isi" })
    .min(10, { message: "JobDescription Tidak Boleh Kurang Dari 10 Karakter" }),
  responsibilty: z
    .string({ required_error: "Job Description Harus Di Isi" })
    .min(10, { message: "Responsibilty Tidak Boleh Kurang Dari 10 Karakter" }),
  whoYouAre: z
    .string({ required_error: "Job Description Harus Di Isi" })
    .min(10, { message: " WhoYouAre Tidak Boleh Kurang Dari 10 Karakter" }),
  niceToHaves: z
    .string({ required_error: "Job Description Harus Di Isi" })
    .min(10, { message: "NiceToHaves Tidak Boleh Kurang Dari 10 Karakter" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }),
});

export const overviewFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item?.name, { message: "image harus di isi" }),
  name: z.string({ required_error: "Name harus di isi" }),
  website: z.string({ required_error: "Website harus di isi" }),
  location: z.string({ required_error: "Location harus di isi" }),
  employe: z.string({ required_error: "Employe harus di isi" }),
  industry: z.string({ required_error: "Industry harus di isi" }),
  dateFounded: z.date({ required_error: "Date founded harus di isi" }),
  techStack: z
    .string({ required_error: "Tech stack harus di isi" })
    .array()
    .nonempty({ message: "Tech stack must be at least 1 data" }),
  description: z.string({ required_error: "Description stack harus di isi" }),
});

export const socialMediaFormSchema = z.object({
  facebook: z.string({ required_error: 'Facebook link is  required' }),
  instagram: z.string({ required_error: 'Instagram link is  required' }),
  linkedin: z.string({ required_error: 'Linkedin link is  required' }),
  twitter: z.string({ required_error: 'Twitter link is  required' }),
  youtube: z.string({ required_error: 'Youtube link is  required' }),
})

export const teamFormSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  position: z.string({ required_error: 'Position is required' }),
  instagram: z.string({ required_error: 'Instagram is required' }),
  linkedin: z.string({ required_error: 'Linkedin is required' }),
})

export const signInFormSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email({ message: "Email is not valid" }),
  password: z.string({ required_error: 'Password is required' }),
})  

export const signUpFormSchema = z.object({
	name: z.string({ required_error: "Name is required" }),
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Email is not valid" }),
	password: z.string({ required_error: "Password is required" }),
});