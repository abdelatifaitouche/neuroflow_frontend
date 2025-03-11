import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthContext from "@/context/AuthContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import React, { useContext, useState, useEffect } from "react";
import { createProcedureStep } from "@/services/proceduresService";

function ProcedureStepForm({ procedure , setProcedureSteps }) {
  const [stepDataForm, setStepDataForm] = useState({
    title: "",
    step_number: 0,
    writer: 0,
    validator: 0,
    is_validated: false,
    status: "",
    procedure: 0,
    content: "",
  });

  const { users } = useContext(AuthContext);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const { id, title } = procedure;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { ...stepDataForm, procedure: id };

    console.log("Submitting Data:", updatedData);

    try {
      const result = await createProcedureStep(id, updatedData);
      console.log("Step created successfully:", result);
      setProcedureSteps((prev)=>[...prev , updatedData])
    } catch (error) {
      console.error(
        "Step creation failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4 p-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="procedure">Related to </Label>
          <Input id="Procedure" value={title} className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="title">Title</Label>
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
          <Label htmlFor="step_number">Step </Label>
          <Input
            type="number"
            id="step_number"
            value={stepDataForm.step_number}
            className="col-span-3"
            onChange={(e) => {
              setStepDataForm((prev) => ({
                ...prev,
                step_number: parseInt(e.target.value, 10), // Convert to integer
              }));
            }}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="writer">Writer</Label>
          <Select
            id="writer"
            value={stepDataForm.writer}
            onValueChange={(value) => {
              setStepDataForm((prev) => ({
                ...prev,
                writer: Number(value), // Convert to integer
              }));
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Users" />
            </SelectTrigger>
            <SelectContent>
              {users.map((user) => {
                return (
                  <SelectItem key={user.id} value={user.id}>
                    {user.username}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="validator">Validator</Label>
          <Select
            id="validator"
            value ={stepDataForm.validator}
            onValueChange={(value) => {
              setStepDataForm((prev) => ({
                ...prev,
                validator: Number(value), // Convert to integer
              }));
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Users" />
            </SelectTrigger>
            <SelectContent>
              {users.map((user) => {
                return (
                  <SelectItem key={user.id} value={user.id}>
                    {user.username}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="is_validated">Validated</Label>
          <Checkbox
            id="is_validated"
            checked={stepDataForm.is_validated}
            onCheckedChange={(checked) => {
              setStepDataForm((prev) => ({ ...prev, is_validated: checked }));
            }}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="status">Status</Label>
          <Select
            id="status"
            onValueChange={(value) => {
              setStepDataForm((prev) => ({ ...prev, status: value }));
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Draft">Draft</SelectItem>
              <SelectItem value="Pending Approval">Pending Approval</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit">Save changes</Button>
      </form>
    </div>
  );
}

export default ProcedureStepForm;
