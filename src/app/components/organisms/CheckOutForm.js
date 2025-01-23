"use client";
import React, { useState } from "react";

import { FormGroup } from "../molecules/index";
import Image from "next/image";
import { Button, Heading } from "../atoms/index";
import visa from "../../assets/visa.svg";
import pay from "../../assets/paypal.svg";
import stripe from "../../assets/stripe.svg";
import gpay from "../../assets/gpay.svg";
import debit from "../../assets/debit.svg";
const CheckOutForm = () => {
  const [formData, setFormData] = useState({
    addressLine: "",
    city: "",
    state: "",
    postalCode: "",
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.addressLine)
      newErrors.addressLine = "Address line is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    if (!formData.cardholderName)
      newErrors.cardholderName = "Cardholder's name is required";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.expiry) newErrors.expiry = "Expiry date is required";
    if (!formData.cvc) newErrors.cvc = "CVC is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Payment submitted successfully!");
  };
  const altText = "title";
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 ">
      <form
        className="bg-white rounded-lg  max-w-4xl w-full p-8"
        onSubmit={handleSubmit}
      >
        <Heading level={6} className="text-xl mb-2">
          Complete Registration Payment
        </Heading>
        <section className="mb-2">
          <Heading level={2} className="text-xl mb-2">
            Personal details
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormGroup
              label="Address line"
              inputProps={{
                id: "address-line",
                name: "addressLine",
                type: "text",
                placeholder: "P.O. Box 1234",
                value: formData.addressLine,
                onChange: handleChange,
              }}
              error={errors.addressLine}
            />
            <FormGroup
              label="City"
              inputProps={{
                id: "city",
                name: "city",
                type: "text",
                placeholder: "Arusha",
                value: formData.city,
                onChange: handleChange,
              }}
              error={errors.city}
            />
            <FormGroup
              label="State"
              inputProps={{
                id: "state",
                name: "state",
                type: "text",
                placeholder: "Arusha, Tanzania",
                value: formData.state,
                onChange: handleChange,
              }}
              error={errors.state}
            />
            <FormGroup
              label="Postal code"
              inputProps={{
                id: "postal-code",
                name: "postalCode",
                type: "text",
                placeholder: "9090",
                value: formData.postalCode,
                onChange: handleChange,
              }}
              error={errors.postalCode}
            />
          </div>
        </section>
        <section className="mb-2">
          <Heading level={2} className="text-xl mb-2">
            Payment Method
          </Heading>
          <div className="flex flex-row gap-4 overflow-hidden md:overflow-scroll lg:overflow-hidden">
            <Image
              src={visa}
              width={10}
              height={10}
              alt={altText}
              className="md:w-14 md:h-14 w-10 h-10"
            />
            <Image
              src={stripe}
              width={10}
              height={10}
              alt={altText}
              className="md:w-14 md:h-14 w-10 h-10"
            />
            <Image
              src={pay}
              width={10}
              height={10}
              alt={altText}
              className="md:w-14 md:h-14 w-10 h-10"
            />
            <Image
              src={debit}
              width={10}
              height={10}
              alt={altText}
              className="md:w-14 md:h-14 w-10 h-10"
            />
            <Image
              src={gpay}
              width={10}
              height={10}
              alt={altText}
              className="md:w-14 md:h-14 w-10 h-10"
            />
          </div>
        </section>
        <section className="mb-2">
          <Heading level={2} className="text-xl mb-2">
            Card details
          </Heading>
          <div className="grid grid-cols-1 gap-4">
            <FormGroup
              label="Cardholder's name"
              inputProps={{
                id: "cardholder-name",
                name: "cardholderName",
                type: "text",
                placeholder: "Seen on your card",
                value: formData.cardholderName,
                onChange: handleChange,
              }}
              error={errors.cardholderName}
            />
            <FormGroup
              label="Card number"
              inputProps={{
                id: "card-number",
                name: "cardNumber",
                type: "text",
                placeholder: "Seen on your card",
                value: formData.cardNumber,
                onChange: handleChange,
              }}
              error={errors.cardNumber}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormGroup
              label="Expiry"
              inputProps={{
                id: "expiry",
                name: "expiry",
                type: "text",
                placeholder: "MM/YY",
                value: formData.expiry,
                onChange: handleChange,
              }}
              error={errors.expiry}
            />
            <FormGroup
              label="CVC"
              inputProps={{
                id: "cvc",
                name: "cvc",
                type: "password",
                placeholder: "***",
                value: formData.cvc,
                onChange: handleChange,
              }}
              error={errors.cvc}
            />
          </div>
        </section>

        <Button className="w-full" type="submit">
          Submit Payment
        </Button>
      </form>
    </div>
  );
};

export default CheckOutForm;
