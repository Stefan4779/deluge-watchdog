import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // TODO: Connect to your email provider (e.g. Resend, SendGrid) or CRM to
    // deliver the inquiry. For now, the form validates and acknowledges receipt.
    console.log("Contact form submission:", data);

    return {
      success: true,
      message: "Thank you for your inquiry. Our team will respond shortly.",
    };
  });
