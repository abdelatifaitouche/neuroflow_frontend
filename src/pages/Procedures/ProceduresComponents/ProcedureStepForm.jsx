import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";

function ProcedureStepForm({ procedure }) {
  const [stepDataForm, setStepDataForm] = useState({
    title: "",
    step_number: "",
    writer: "",
    validator: "",
    is_validated: "",
    status: "",
    procedure: 0,
  });

  const { id, title } = procedure;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStepDataForm((prev) => ({ ...prev, procedure: id }));
    console.log(stepDataForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4 p-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Input id="Procedure" value={title} className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            id="title"
            value={stepDataForm.title}
            className="col-span-3"
            onChange={(e) => {
              setStepDataForm((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            id="step_number"
            value={stepDataForm.step_number}
            className="col-span-3"
            onChange={(e) => {
              setStepDataForm((prev) => ({
                ...prev,
                step_number: e.target.value,
              }));
            }}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            id="writer"
            value={stepDataForm.writer}
            className="col-span-3"
            onChange={(e) => {
              setStepDataForm((prev) => ({ ...prev, writer: e.target.value }));
            }}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            id="validator"
            value={stepDataForm.validator}
            className="col-span-3"
            onChange={(e) => {
              setStepDataForm((prev) => ({
                ...prev,
                validator: e.target.value,
              }));
            }}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            id="is_validated"
            value={stepDataForm.is_validated}
            className="col-span-3"
            onChange={(e) => {
              setStepDataForm((prev) => ({
                ...prev,
                is_validated: e.target.value,
              }));
            }}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            id="status"
            value={stepDataForm.status}
            className="col-span-3"
            onChange={(e) => {
              setStepDataForm((prev) => ({ ...prev, status: e.target.value }));
            }}
          />
        </div>
        <Button type="submit">Save changes</Button>
      </form>
    </div>
  );
}

export default ProcedureStepForm;
