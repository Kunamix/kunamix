import { useState } from "react";
import { axiosInstance } from "@/lib/axios"; // adjust path if needed

interface ContactFormData {
  company?: string;
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{ success: boolean; message: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendContactForm = async (formData: ContactFormData) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axiosInstance.post("/user/kunamix/send-mail", formData);
      setResponse(res.data);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { sendContactForm, loading, response, error };
};