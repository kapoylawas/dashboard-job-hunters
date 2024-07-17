import OverviewForm from "@/components/forms/OverviewForm";
import SocialMediaForm from "@/components/forms/SosisalMediaForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC } from "react";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  return (
    <div>
      <div className="mb-5 font-semibold text-3xl">Setting</div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLink">Social Link</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div>
            <OverviewForm />
          </div>
        </TabsContent>
        <TabsContent value="socialLink">
          <SocialMediaForm />
        </TabsContent>
        <TabsContent value="teams">
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            ab quidem tenetur, possimus accusantium eius, ullam inventore atque,
            soluta eveniet eligendi ipsum modi ratione. Rerum debitis suscipit
            cum amet dignissimos.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
