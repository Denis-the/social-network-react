import React from "react";
import { Field, Form } from "react-final-form";
import {
  ButtonFE,
  InputFE,
  SingleSelectButtonsFE,
} from "../common/FormElems/PrimeReactFormElems";

const SearchUsersForm = ({
  submitAction,
  perPage,
  searchTerm,
  searchFollowed,
  isFetching,
}) => (
  <Form
    onSubmit={(fields) => submitAction(fields)}
    initialValues={{
      term: searchTerm,
      followed: searchFollowed,
      perPage,
    }}
  >
    {({ form, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className="p-d-inline-flex">
          <Field
            name="term"
            component={InputFE}
            id="Search Term"
            className="p-inputtext-sm p-shadow-3"
          />
          <Field
            name="followed"
            component={SingleSelectButtonsFE}
            id="SearchFollowed"
            className="p-d-inline-flex p-button-sm p-shadow-3"
            disabled={isFetching}
            options={[
              { name: "OFF", value: null, className: "p-button-sm" },
              { name: "ON", value: true, className: "p-button-sm" },
            ]}
            value={searchFollowed}
            optionLabel="name"
          />
          <Field
            name="submit"
            component={ButtonFE}
            type="submit"
            className="p-shadow-3"
          >
            Search
          </Field>
        </div>
      </form>
    )}
  </Form>
);

export default SearchUsersForm;
