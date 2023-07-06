// import { db } from '@vercel/postgres';
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//     const client = await db.connect();
 
//   try {
//     //await client.sql`CREATE TABLE Autoparts ( Name varchar(255), Category varchar(255), Price int );`;
//     const names = ['Seat cover', 'Interior', '200'];
//     await client.sql`INSERT INTO Autoparts (Name, Category, Price) VALUES (${names[0]}, ${names[1]}, ${names[2]});`;
//   } catch (error) {
//     return NextResponse.json({ error }, {
//         status: 500,
//       });
//   }

//   const pets = await client.sql`SELECT * FROM Autoparts;`;
//   return NextResponse.json({ pets });
//   }