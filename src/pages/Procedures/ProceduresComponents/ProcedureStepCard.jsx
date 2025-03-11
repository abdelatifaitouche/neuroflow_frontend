import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import React from "react";

function ProcedureStepCard({step}) {

    const {title , step_number , status , is_validated} = step ; 


  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>step : {step_number}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{status}</p>
      </CardContent>
      <CardFooter className={"flex gap-2"}>
        <div
          className={`${
            step.is_validated ? "bg-green-700" : "bg-amber-500"
          } p-2 rounded-md text-white`}
        >
          {is_validated ? <p>Validated</p> : <p>Not validated</p>}
        </div>
        <Button>View step</Button>
      </CardFooter>
    </Card>
  );
}

export default ProcedureStepCard;
