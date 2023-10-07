export const DEFAULT_MESSAGE = (campo: string | null) =>
  `Campo ${campo} inválido`;
interface Errors {
  [key: string]: {
    message: (campo: string | null, validation?: any) => string;
  };
}
export const ERRORS: Errors = {
  min: {
    message: (
      campo: string | null,
      validation: { actual: unknown; min: number }
    ) => `El campo ${campo} debe ser mayor a ${validation.min}`,
  },
  max: {
    message: (
      campo: string | null,
      validation: { actual: unknown; max: number }
    ) => `El campo ${campo} debe ser mayor a ${validation.max}`,
  },
  required: {
    message: (campo: string | null) => `El campo ${campo} es requerido`,
  },
  // requiredTrue: {
  //   message: DEFAULT_MESSAGE,
  // },
  email: {
    message: (campo: string | null) =>
      `El campo ${campo} es un correo inválido`,
  },
  minlength: {
    message: (
      campo: string | null,
      validation: { actualLength: number; requiredLength: number }
    ) =>
      `El campo ${campo} debe ser mayor a ${validation.requiredLength} caracteres.`,
  },
  maxlength: {
    message: (
      campo: string | null,
      validation: { actualLength: number; requiredLength: number }
    ) =>
      `El campo ${campo} debe ser menor a ${validation.requiredLength} caracteres.`,
  },
  pattern: {
    message: (campo: string | null) =>
      `El formato del campo ${campo} es incorrecto`,
  },
  nullValidator: { message: DEFAULT_MESSAGE },
  // compose: { message: DEFAULT_MESSAGE },
  // composeAsync: { message: DEFAULT_MESSAGE },
};
