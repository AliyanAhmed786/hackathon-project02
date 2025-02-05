"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BgImage from "@/components/BgImage";
import TextSection from "@/components/TextSection";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/Store/usestore";
import Image from "next/image";

type FormDataKeys =
  | "firstName"
  | "lastName"
  | "country"
  | "street"
  | "city"
  | "zip"
  | "phone"
  | "email"
  | "additionalInfo";

export default function Checkout() {
  const { cartItems, clearCart } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (cartItems?.length === 0) {
      router.push("/cart");
    }
  }, [cartItems, router]);

  const totalPrice =
    cartItems?.reduce((total, item) => total + item.price * item.quantity, 0) || 0;

  // Initialize form data state without localStorage
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "Pakistan",
    street: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<{ [key in FormDataKeys]?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id in formData) {
      const updatedFormData = { ...formData, [id]: value };
      setFormData(updatedFormData); // No localStorage here
    }
  };

  const validateForm = () => {
    let newErrors: { [key in FormDataKeys]?: string } = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "additionalInfo" && !formData[key as FormDataKeys].trim()) {
        newErrors[key as FormDataKeys] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    if (formData.phone && !/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10-15 digits";
    }
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.zip && !/^\d{5,10}$/.test(formData.zip)) {
      newErrors.zip = "Zip code must be 5-10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      alert("Please fill in all the required fields and fix any errors.");
      return;
    }

    setIsSubmitting(true);

    const orderData = {
      _type: "order",
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: `${formData.street}, ${formData.city}, ${formData.country}, ${formData.zip}`,
      city: formData.city,
      zipCode: formData.zip,
      phone: formData.phone,
      email: formData.email,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: totalPrice,
      discount: 0,
      orderDate: new Date().toISOString(),
      status: "pending",
    };

    try {
      const response = await fetch(`/api/confirm-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Order Placed Successfully! 🎉");
        clearCart();
        router.push("");
      } else {
        alert("Error placing order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-20">
      <BgImage
        imageSrc={"/Rectangle 1.png"}
        heading={"Check Out"}
        paragraph={"Home"}
        icon={<ChevronRight />}
        iconText={"Check Out"}
      />

      <div className="max-w-screen-xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Billing Details</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["firstName", "lastName"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-base font-medium text-gray-700">
                    {field === "firstName" ? "First Name" : "Last Name"}
                  </label>
                  <Input
                    id={field}
                    type="text"
                    className="mt-1 h-[50px] block w-full"
                    value={formData[field as FormDataKeys]}
                    onChange={handleChange}
                  />
                  {errors[field as FormDataKeys] && (
                    <p className="text-red-500 text-sm">{errors[field as FormDataKeys]}</p>
                  )}
                </div>
              ))}
            </div>

            {["country", "street", "city", "zip", "phone", "email"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-base font-medium text-gray-700">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <Input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  className="mt-1 h-[50px] block w-full"
                  value={formData[field as FormDataKeys]}
                  onChange={handleChange}
                />
                {errors[field as FormDataKeys] && (
                  <p className="text-red-500 text-sm">{errors[field as FormDataKeys]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full lg:w-[300px]">
            <h1 className="text-2xl font-semibold mb-6">Order Summary</h1>

            <div className="space-y-4">
              {cartItems?.map((item) => (
                <div key={item._id} className="flex justify-between items-center p-2 border-b">
                  <p className="text-sm font-medium">{item.name} (Qty: {item.quantity})</p>
                  <p className="text-sm font-semibold">Rs. {item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <Button onClick={handlePlaceOrder} disabled={isSubmitting} className="w-full mt-6">
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </Button>
          </div>
        </div>
      </div>

      <TextSection />
    </div>
  );
}
