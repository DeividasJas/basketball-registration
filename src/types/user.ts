// {
//     id: 'kp_c5d00b968ae04ee3b5109b44c275de31',
//     email: 'jasas.code@gmail.com',
//     family_name: 'Jas',
//     given_name: 'D',
//     picture: 'https://lh3.googleusercontent.com/a/ACg8ocKtlqfDex1FdkIxDYCsW3cCyfZBhVGUTF7q6sfqLe-1xRuozw=s96-c',
//     username: undefined,
//     phone_number: undefined
//   }
export type User = {
  id: string;
  email: string;
  family_name: string;
  given_name: string;
  picture: string;
  username: string;
  phone_number?: string;
};
