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
