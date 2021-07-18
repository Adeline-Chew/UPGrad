import React from "react";
// import AgentFilter from "./agent-filter/input";

const Field = ({
  type = "checkbox",
  name = null,
  id,
  label,
  value,
  onChange
}) => (
  <fieldset>
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      checked={value}
      onChange={onChange}
    />

    <label htmlFor={id}>{label}</label>
  </fieldset>
);

const FiltersBox = ({ handleFilters, filters, handleAgentChange }) => (
  <section className="filter-options">
    <div className="filterType">
      <legend>Experience Level</legend>
      <Field
        id="INTERNSHIP"
        type="radio"
        name="franchisee-filter"
        value={filters.INTERNSHIP}
        label="&nbsp; Internship"
        onChange={handleFilters}
      />
      <Field
        id="ENTRY"
        type="radio"
        name="franchisee-filter"
        value={filters.ENTRY}
        label="&nbsp; Entry Level"
        onChange={handleFilters}
      />
    </div>

    <div className="filterType">
      <legend>Industry</legend>
      <Field
        id="IT"
        label="Information Technology"
        value={filters.IT}
        onChange={handleFilters}
      />
      <Field
        id="FINANCE"
        label="Financial Services"
        value={filters.FINANCE}
        onChange={handleFilters}
      />
      <Field
        id="MARKETING"
        label="Marketing and Advertising"
        value={filters.MARKETING}
        onChange={handleFilters}
      />
      <Field
        id="EDUCATION"
        label="Education Management"
        value={filters.EDUCATION}
        onChange={handleFilters}
      />
      <Field
        id="ONLINE"
        label="Online Media"
        value={filters.ONLINE}
        onChange={handleFilters}
      />
    </div>

    {/* <div className="filterType">
      <legend>Agent Name</legend>
      <fieldset>
        <AgentFilter handleAgentChange={handleAgentChange} />
      </fieldset>
    </div> */}
  </section>
);

export default FiltersBox;
