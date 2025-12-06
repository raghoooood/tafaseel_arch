"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

interface IFormInputs {
  projectType: string;
  emirate: string;
  firstName: string;
  phoneNumber: string;
  email?: string;
  file?: FileList | null;
}

const schema = yup.object({
  projectType: yup.string().required("Project type is required"),
  emirate: yup.string().required("Emirate is required"),
  firstName: yup.string().required("Name is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup.string().email().notRequired(),
  file: yup.mixed().notRequired(),
});

export default function ContactForm() {
  const { register, handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    console.log("FORM SUBMITTED:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 md:p-8 rounded-xl shadow-lg border">

      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
        Get your consulting services from MatsMall
      </h2>

      {/* Project Type */}
      <div>
        <label className="block font-medium mb-1 text-gray-700">
          Your project type <span className="text-red-500">(Required)</span>
        </label>
        <select
          {...register("projectType")}
          className="border border-gray-300 rounded-lg p-3 w-full bg-white text-black focus:ring-2 focus:ring-black focus:outline-none transition"
        >
          <option value="">Select project type</option>
          <option>Private Villa</option>
          <option>Villa in a residential complex / apartment</option>
          <option>Hotel / Building</option>
          <option>Shop / Restaurant / Salon / Office</option>
        </select>
        {errors.projectType && (
          <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
        )}
      </div>

      {/* Emirate */}
      <div>
        <label className="block font-medium mb-1 text-gray-700">
          In which emirate is your house located <span className="text-red-500">(Required)</span>
        </label>
        <select
          {...register("emirate")}
          className="border border-gray-300 rounded-lg p-3 w-full bg-white text-black focus:ring-2 focus:ring-black focus:outline-none transition"
        >
          <option value="">Select emirate</option>
          <option>Abu Dhabi</option>
          <option>Dubai</option>
          <option>Sharjah</option>
          <option>Ajman</option>
          <option>Ras Al Khaimah</option>
          <option>Fujairah</option>
          <option>Umm Al Quwain</option>
        </select>
        {errors.emirate && (
          <p className="text-red-500 text-sm mt-1">{errors.emirate.message}</p>
        )}
      </div>

      {/* Name */}
      <div>
        <label className="block font-medium mb-1 text-black">
          Name <span className="text-red-500">(Required)</span>
        </label>
        <input
          {...register("firstName")}
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 text-black rounded-lg p-3 w-full bg-white focus:ring-2 focus:ring-black focus:outline-none transition"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block font-medium mb-1 text-black">
          Mobile Number <span className="text-red-500">(Required)</span>
        </label>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"ae"} // default country
              enableSearch
              inputClass="w-full text-black border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none transition"
              buttonClass="border border-gray-300 text-gray-700"
              placeholder="Enter phone number"
            />
          )}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium mb-1 text-gray-700">Email</label>
        <input
          {...register("email")}
          placeholder="example@example.com"
          className="border border-gray-300 text-black rounded-lg p-3 w-full bg-white focus:ring-2 focus:ring-black focus:outline-none transition"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* File Upload */}
      <div>
        <label className="block font-medium mb-1 text-gray-700">Upload Arch</label>
        <input
          type="file"
          {...register("file")}
          className="w-full text-gray-600"
        />
        <p className="text-xs text-gray-500 mt-1">Max file size: 500 MB</p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-900 active:scale-95 transition"
      >
        Submit
      </button>
    </form>
  );
}
