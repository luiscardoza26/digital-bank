import { useState, useCallback } from 'react';

const useFormValidation = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone);
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  }, [errors]);

  const validate = useCallback(() => {
    const newErrors = {};

    // Validate required fields
    Object.keys(values).forEach((key) => {
      if (!values[key]) {
        newErrors[key] = 'Este campo es requerido';
      }
    });

    // Validate email
    if (values.email && !validateEmail(values.email)) {
      newErrors.email = 'Email inválido';
    }

    // Validate phone if provided
    if (values.phone && !validatePhone(values.phone)) {
      newErrors.phone = 'Número de teléfono inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values]);

  return {
    values,
    errors,
    handleChange,
    validate,
    setValues,
  };
};

export default useFormValidation;