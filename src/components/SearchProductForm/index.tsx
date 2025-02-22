"use client";
import React from "react";
import Input from "@app/components/Input";
import Button from "@app/components/Button";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchProductForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchInputValue, setSearchInputValue] = React.useState("");

  React.useEffect(() => {
    const searchByName = searchParams.get("searchByName");

    if (searchByName) {
      setSearchInputValue(searchByName);
    }
  }, [searchParams]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!searchParams) return;
    if (!router) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("searchByName", searchInputValue);

    router.push(`?${params.toString()}`);
  };

  const handleClear = () => {
    setSearchInputValue("");

    const params = new URLSearchParams(searchParams.toString());
    params.delete("searchByName");

    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className=" flex gap-2  mb-8 flex-col h-auto md:!h-[50px] md:flex-row">
      <Input
        value={searchInputValue}
        onChange={onInputChange}
        name="Search product"
        type="text"
        placeholder="Search for a product"
      />
      <div className="flex gap-2">
        <Button type="submit">Search</Button>
        <Button className="!bg-transparent text-white border-2 border-white" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </form>
  );
}
