// import { withIronSessionApiRoute } from "iron-session/next";
// import { NextApiRequest, NextApiResponse } from "next";
// import { User } from "../types/User";
// import { sessionOptions } from "../session";

// // export default withIronSessionApiRoute(loginRoute, sessionOptions);

// export default async function loginRoute(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { email, password } = await req.body;
//   console.log({ email, password });

//   try {
//     const isFound = await fetch("https://jsonplaceholder.typicode.com/users/")
//       .then((res) => res.json())
//       .then((d) => d.filter((x: User) => x.email === email).length !== 0);

//     if (!isFound) {
//       throw new Error("There is no corresponding user in our files.");
//     }

//     const user = {
//       isLoggedIn: true,
//       avatarUrl: "https://picsum.photos/200",
//     };

//     await req.session.save();

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: (error as Error).message });
//   }
// }
