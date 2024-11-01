export const generateFakeJWT = (): string => {
    return Math.random().toString(36).substring(2, 15);
};

export const validateFakeJWT = (token: string): boolean => {
    return token.length > 5;
};
