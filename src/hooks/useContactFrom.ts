import { useState } from "react";
import { axiosInstance } from "@/lib/axios";

interface ContactFormData {
  company?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ReferralFormData {
  yourName: string;
  yourEmail: string;
  yourPhone: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientCompany?: string;
  projectDetails: string;
  estimatedBudget: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendContactForm = async (formData: ContactFormData) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axiosInstance.post<ApiResponse>("/contact-form", formData);
      setResponse(res.data);
      return res.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Something went wrong";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { sendContactForm, loading, response, error };
};

export const useReferForm = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendReferForm = async (formData: ReferralFormData) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axiosInstance.post<ApiResponse>("/refer-form", formData);
      setResponse(res.data);
      return res.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Something went wrong";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { sendReferForm, loading, response, error };
};