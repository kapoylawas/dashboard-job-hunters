import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA, } from "@/constans";
import ButtonActionTable from "@/components/organisms/ButtonActionTable";

interface ApplicantsProps {}

const Applicants: FC<ApplicantsProps> = ({}) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {JOB_APPLICANT_COLUMNS.map((item: string, i: number) => (
              <TableHead key={item + 1}>{item}</TableHead>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {JOB_APPLICANT_DATA.map((item: any, i: number) => (
            <TableRow key={item.name + 1}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.appliedDate}
              </TableCell>
              <TableCell>
                <ButtonActionTable url="" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Applicants;
