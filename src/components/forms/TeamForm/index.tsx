import FieldInput from "@/components/organisms/FieldInput";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import React, { FC } from "react";

interface TeamFormProps {}

const TeamForm: FC<TeamFormProps> = ({}) => {
  return (
    <FieldInput
      title="Basic Information"
      subtitle="Add team members of your company"
    >
      <div className="w-[65%] mb-5">
        <div className="flex items-center flex-row justify-between">
          <div className="text-lg font-semibold">3 Members</div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-6">
          {[0, 1, 2].map((item: number) => (
            <div className="p-3 shadow text-center" key={item}>
              <div className="w-14 h-14 rounded-full bg-gray-400 mx-auto" />
              <div className="mt-4 font-semibold">Hariyanto</div>
              <div className="text-sm text-gray-500">CEO</div>

              <div className="mt-5 inline-flex mx-auto gap-3 text-gray-500">
                <InstagramIcon className="w-4 h-4" />
                <LinkedinIcon className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
};

export default TeamForm;
