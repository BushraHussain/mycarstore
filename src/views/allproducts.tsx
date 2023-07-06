import Card from "../../components/card";
import { sql } from "@vercel/postgres";

export default async function AllProductsView() {
    const {rows}  = await sql`SELECT * from Autoparts`;
    console.log("Rowss ",rows);

    return(
        <div className="py-20 bg-white space-y-8">
            <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-16 ">
                        {rows.map((row) => (
                          <div key={row.id}>
                            <Card 
                                name = {row.name}
                                category = {row.category}
                                price = {row.price}
                            />
                          </div>
                        ))}
                </div>
            </div>
        </div>
    )
}