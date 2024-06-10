export const isValidAge = (age:number): boolean => {
    return (
      age > 0 && // Age must be positive
      !isNaN(age) && // Age must be a valid number
      Number.isInteger(age) // Age must be an integer
    );
  };
  