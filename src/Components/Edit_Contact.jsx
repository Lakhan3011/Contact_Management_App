import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from "../Redux/action";

function EditContact() {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  const AllContact = useSelector((store) => store.contacts);

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    dispatch(editContact({ id, ...form }));
  }

  useEffect(() => {
    AllContact.filter((el) => el.id == id && setForm(el));
  }, []);

  return (
    <div className="w-1/2 mx-auto my-4 pt-16">
      <h2 className="text-2xl font-bold mb-10">Edit Contact</h2>
      <div className="mb-6 flex">
        <label className="block font-bold mr-2 py-1" htmlFor="first-name">
          FirstName
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="first-name"
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6 flex">
        <label className="block font-bold mr-2 py-1" htmlFor="last-name">
          LastName
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6 flex">
        <label className="block font-bold mr-9 py-1" htmlFor="status">
          Status
        </label>
        <select
          className="w-full border border-gray-400 p-2 rounded-md"
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value={"active"}>Active</option>
          <option value={"inactive"}>Inactive</option>
        </select>
      </div>
      <button onClick={handleSave}>
        <a
          href="#_"
          class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-xl group"
        >
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-gray-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white font-bold transition-colors duration-200 ease-in-out group-hover:text-white">
            Save Contact
          </span>
        </a>
      </button>
    </div>
  );
}

export default EditContact;
