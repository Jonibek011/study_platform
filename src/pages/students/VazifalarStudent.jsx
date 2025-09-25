import React from "react";
import { Form } from "react-router-dom";

function VazifalarStudent() {
  return (
    <section className="">
      <div className="filter-section max-w-[1000px]  rounded-xl bg-main-bg shadow-sm p-4 flex flex-col gap-3">
        <h2 className="text-title text-lg font-semibold">Filter</h2>
        <div className="">
          <Form method="post" className="flex gap-5"></Form>
        </div>
      </div>
    </section>
  );
}

export default VazifalarStudent;
