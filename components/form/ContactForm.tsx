"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";

// ---------------------------
//  ZOD SCHEMA
// ---------------------------
const contactSchema = z.object({
  projectType: z
    .string()
    .min(1, "Please select your project type."),
  emirate: z
    .string()
    .min(1, "Please select your emirate."),
  firstName: z
    .string()
    .min(1, "Your name is required."),
  phoneNumber: z
    .string()
    .min(1, "A valid phone number is required."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")), // allow empty string as "no email"
  file: z
    .any()
    .optional()
    .refine(
      (files) => {
        if (!files || files.length === 0) return true; // optional
        return files[0].size <= 20 * 1024 * 1024; // 20MB
      },
      { message: "Max file size is 20MB." }
    ),
});

// 🔄 Type inferred from schema – always in sync
type ContactFormValues = z.infer<typeof contactSchema>;

// ---------------------------
//  COMPONENT
// ---------------------------
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });



 const onSubmit = async (data: ContactFormValues) => {
  const formData = new FormData();

  // Append normal fields
  formData.append("formType", "consultation");
  formData.append("projectType", data.projectType);
  formData.append("emirate", data.emirate);
  formData.append("firstName", data.firstName);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("email", data.email || "");

  // Append file if exists
  if (data.file && data.file.length > 0) {
    formData.append("file", data.file[0]); // only first file
  }

  const res = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    toast.success("Your message has been sent successfully!");
    reset();
  } else {
    const error = await res.json();
    toast.error("Failed to send message: " + (error?.error || "Unknown error"));
  }
};



  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        space-y-6 bg-white p-6 md:p-8 
        rounded-2xl shadow-xl border border-gold-light
      "
      encType="multipart/form-data"
    >
        <input type="hidden" name="formType" value="consultation" />

      {/* TITLE */}
      <h2 className="text-3xl font-montserrat font-bold text-charcoal leading-tight">
        Get Your Professional Consultation
      </h2>
      <p className="text-textMuted font-poppins">
        Share your project details and our team will contact you shortly.
      </p>

      {/* PROJECT TYPE */}
      <div>
        <label className="form-label">
          Project Type <span className="text-red-500">*</span>
        </label>
        <select {...register("projectType")} className="form-input">
          <option value="">Select project type</option>
          <option>Private Villa</option>
          <option>Villa in a residential complex / apartment</option>
          <option>Hotel / Building</option>
          <option>Shop / Restaurant / Salon / Office</option>
        </select>
        {errors.projectType && (
          <p className="form-error">{errors.projectType.message}</p>
        )}
      </div>

      {/* EMIRATE */}
      <div>
        <label className="form-label">
          Emirate <span className="text-red-500">*</span>
        </label>
        <select {...register("emirate")} className="form-input">
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
          <p className="form-error">{errors.emirate.message}</p>
        )}
      </div>

      {/* NAME */}
      <div>
        <label className="form-label">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register("firstName")}
          type="text"
          placeholder="Enter your name"
          className="form-input"
        />
        {errors.firstName && (
          <p className="form-error">{errors.firstName.message}</p>
        )}
      </div>

      {/* PHONE */}
      <div>
        <label className="form-label">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"ae"}
              enableSearch
              placeholder="Enter phone number"
              inputClass="!w-full !form-input !pl-12 !text-black"
              buttonClass="!border-gray-300"
            />
          )}
        />
        {errors.phoneNumber && (
          <p className="form-error">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label className="form-label">Email (Optional)</label>
        <input
          {...register("email")}
          name="email"
          type="email"
          placeholder="example@email.com"
          className="form-input"
        />
        {errors.email && (
          <p className="form-error">{errors.email.message}</p>
        )}
      </div>

      {/* FILE UPLOAD */}
      <div>
        <label className="form-label">
          Upload Drawing / Document (Optional)
        </label>
        <input
          type="file"
          {...register("file")}
          className="text-sm text-gray-700"
        />
        {errors.file && (
          <p className="form-error">{errors.file.message as string}</p>
        )}
        <p className="text-xs text-gray-400 mt-1">Max size: 20MB</p>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="btn-gold w-full py-3 text-lg font-semibold"
      >
        Submit Request
      </button>
    </form>
  );
}
