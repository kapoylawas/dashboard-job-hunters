import OverviewForm from "@/components/forms/OverviewForm";
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
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, voluptas? At nostrum illum vero facere ad inventore
            eveniet voluptate nihil, accusantium modi delectus ullam odio omnis
            ipsam iste unde dolorum.
          </div>
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
